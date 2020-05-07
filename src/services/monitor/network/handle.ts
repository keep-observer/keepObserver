import { consoleTools,Tools } from '@util/index'
import * as networkTool from './tool';




/*
    初始化ajax请求监控
    在这里替换window.XMLHttpRequest变量进行监控
*/
export var _init = function() {
    //拦截Ajax以及fetch
    this._patchXMLAjax();
    this._patchFetch()
}



/*
	拦截XML AJax信息
 */
export var _patchXMLAjax = function() {
    var _self = this;
    const { isCatchResponseContent } = _self._config
    var _XMLHttp = (<any>window).XMLHttpRequest;
    //不支持 ajax 不进行监控
    if (!_XMLHttp) {
        return false;
    }
    _self._open = (<any>window).XMLHttpRequest.prototype.open;
    _self._send = (<any>window).XMLHttpRequest.prototype.send;
    _self._setRequestHeader = (<any>window).XMLHttpRequest.prototype.setRequestHeader;
    //拦截原生open
    (<any>window).XMLHttpRequest.prototype.open = function(method,url) {
        var XML = this;
        var args = Tools.toArray(arguments);
        //定时器
        var timer = null;
        //获取请求唯一ID
        var id = Tools.getUniqueID();
        //获取方法
        var method = args[0];
        //获取url
        var url = args[1];

        //保存下 在send中使用
        XML._url = url;
        XML._method = method;
        XML._id = id;
        //保存下请求头 在拦截请求头处使用
        XML._setHead = {}
        XML._setHead[id] = {};

        //拦截处理响应回调
        var _onreadystatechange = XML.onreadystatechange || function() {};
        // start onreadystatechange
        var onreadystatechange = function() {
            var item = _self.networkList[id] ? _self.networkList[id] : false;
            //如果不存在 可能略过了send 会导致丢失部分数据
            if (!item) {
                item = {}
                    //保存请求方法
                item.method = method
                let {
                    url,
                    params
                } = networkTool.handleReqUrl(XML._url);
                //处理请求url和params
                item.url = url;
                item.params = params;
            }
            //更新状态
            item.status = 0;
            if (XML.readyState > 1) {
                item.status = XML.status;
            }
            item.responseType = XML.responseType;
            //判断请求状态
            if (XML.readyState == 0) {
                // 未开始
                if (!item.startTime) {
                    item.startTime = (+new Date());
                }
            } else if (XML.readyState == 1) {
                // 打开
                if (!item.startTime) {
                    item.startTime = (+new Date());
                }
            } else if (XML.readyState == 2) {
                // 发送		          	
            } else if (XML.readyState == 3) {
                //loading
            } else if (XML.readyState == 4) {
                //结束超时捕获
                _self._handleTimeout(id);
                //处理响应头
                item.responseHead = {};
                var header = XML.getAllResponseHeaders() || '',
                    headerArr = header.split("\n");
                //提取数据
                for (let i = 0; i < headerArr.length; i++) {
                    let line = headerArr[i];
                    if (!line) {
                        continue;
                    }
                    let arr = line.split(': ');
                    let key = arr[0],
                        value = arr.slice(1).join(': ');
                    item.responseHead[key] = value;
                }
                //完成
                clearInterval(timer);
                item.endTime = +new Date(),
                item.costTime = (item.endTime - (item.startTime || item.endTime));
                item.response = isCatchResponseContent?XML.response:'no-catch-responseContent';
                //请求结束完成
                setTimeout(function() {
                    //是否是超时接口 超时的接口不做处理
                    if (!_self.timeoutRequest[id]) {
                        _self._handleDoneXML(id)
                    }
                })
            } else {
                clearInterval(timer);
            }
            //如果这个接口已经超时处理了 那么不记录
            if (!_self.timeoutRequest[id]) {
                _self.networkList[id] = item;
            }
            return _onreadystatechange.apply(XML, arguments);
        }
        XML.onreadystatechange = onreadystatechange;
        //end onreadystatechange
        //防止第三方库更改状态
        //定时查看请求状态
        var preState = -1;
        timer = setInterval(function() {
            if (preState != XML.readyState) {
                preState = XML.readyState;
                onreadystatechange.call(XML);
            }
        }, 10);
        return _self._open.apply(XML, args);
    };
    //拦截原始设置请求头
    (<any>window).XMLHttpRequest.prototype.setRequestHeader = function(header) {
        var XML = this;
        var args = Tools.toArray(arguments);
        if (XML._id && XML._setHead) {
            var setHead = XML._setHead[XML._id];
            var key = args[0] ? args[0] : 'unkownRequestHead';
            var value = args[1] ? args[1] : '';
            setHead[key] = value
            XML._setHead[XML._id] = setHead
        }
        return _self._setRequestHeader.apply(XML, args);
    };
    //拦截原生send
    (<any>window).XMLHttpRequest.prototype.send = function() {
        var XML = this;
        var id = XML._id;
        var method = XML._method.toUpperCase();
        var requestHead = XML._setHead[id];
        var url = XML._url;
        var args = [].slice.call(arguments),
            data = args[0],
            saveData = '';
        //监听列表中创建一条请求
        if (!_self.networkList[id]) {
            _self.networkList[id] = {}
        }
        //type ajax
        _self.networkList[id].type = 'ajax'
        //保存请求方法
        _self.networkList[id].method = method;
        var {
            url,
            params
        }:any = networkTool.handleReqUrl(url);
        //处理请求url和params
        _self.networkList[id].url = url;
        _self.networkList[id].params = params;
        //保存自定义请求头
        if (requestHead) {
            _self.networkList[id].requestHead = Tools.extend({}, requestHead);
            delete XML._setHead[id];
        }
        //如果是post数据保存
        if (method === 'POST') {
            if (Tools.isString(data)) {
                saveData = data;
            }
        }
        _self.networkList[id].body = saveData;
        //发送
        _self._handleSendXML(id)
        //开启定时器 判断接口是否超时
        _self._handleTimeout(id);
        return _self._send.apply(XML, args);
    };
}



/*
	拦截fetch信息
 */
export var _patchFetch = function(){
    if(!window.fetch){
        return false;
    }
    var _self = this
    const { isCatchResponseContent } = _self._config
    _self._fetch = window.fetch
    //https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch#%E5%8F%82%E6%95%B0
    window.fetch = function (input, init=undefined) {
        var fetchSelf = this
        var args = arguments
        var id = Tools.getUniqueID();
        if (!_self.networkList[id]) {
            _self.networkList[id] = {}
        }
        var {
            url,
            params
        } = networkTool.handleReqUrl(input.toString());
        //处理请求url和params
        _self.networkList[id].type = 'fetch'
        _self.networkList[id].url = url;
        _self.networkList[id].status = 0;
        _self.networkList[id].params = params;
        if(init && !Tools.isEmptyObject(init)){
            _self.networkList[id].method = init.method?init.method.toUpperCase():'GET';
            _self.networkList[id].body = init.body?Tools.objectStringify(init.body):'';
            _self.networkList[id].requestHead = init.headers?init.headers:undefined
        }else{
            _self.networkList[id].method = 'GET';
            _self.networkList[id].body = '';
            _self.networkList[id].requestHead = undefined
        }
        _self._handleSendXML(id)
        return new Promise(function (resolve, reject) {
            var promise
            var startTime = new Date().getTime()
            var handleResponse = (response,content)=>{
                _self.networkList[id].costTime = new Date().getTime() - startTime
                _self.networkList[id].response = isCatchResponseContent? content:'no-catch-responseContent'
                _self.networkList[id].status = response? response.status: 0 || 0;
                var headers = Tools.toArray(response.headers.keys())
                if(!Tools.isEmptyArray(headers)){
                    _self.networkList[id].responseHead = {};
                    headers.forEach( key =>{
                        _self.networkList[id].responseHead[key] = response.headers.get(key)
                    })
                }else{
                    _self.networkList[id].responseHead = undefined
                }
                _self.networkList[id].responseType = response.type;
                setTimeout(function() {
                    //是否是超时接口 超时的接口不做处理
                    if (!_self.timeoutRequest[id]) {
                        _self._handleDoneXML(id)
                    }
                })  
            }
            try {
                _self.networkList[id].startTime = startTime;
                //开启定时器 判断接口是否超时
                _self._handleTimeout(id);
                promise = _self._fetch.apply(fetchSelf, args)
            } catch (error) {
                _self.networkList[id].costTime = new Date().getTime() - startTime
                _self.networkList[id].response = 'fetch error:'+error
                _self.networkList[id].responseHead = '';
                _self.networkList[id].responseType = 'error';
                setTimeout(function() {
                    _self._handleDoneXML(id)
                })
                reject(error)
                return
            }
            promise.then(
                function (response) {
                    resolve(response.clone())
                    //结束超时捕获
                    _self._handleTimeout(id);
                    //stream only
                    if(response.ok){
                        response.text().then((content)=>{
                            handleResponse(response,content)       
                        },(err)=>{
                            handleResponse(response,'fetch response.text() error:'+err ) 
                        })
                    }else{
                        handleResponse(response,'fetch error:'+response.statusText) 
                    }
                },
                function (error) {
                    //结束超时捕获
                    _self._handleTimeout(id);
                    _self.networkList[id].costTime = new Date().getTime() - startTime
                    _self.networkList[id].response = 'fetch error:'+error
                    _self.networkList[id].responseHead = '';
                    _self.networkList[id].responseType = 'error';
                    setTimeout(function() {
                        //是否是超时接口 超时的接口不做处理
                        if (!_self.timeoutRequest[id]) {
                            _self._handleDoneXML(id)
                        }
                    })
                    reject(error)
                }
            )
        })
    }
}



/*
	处理接口请求超时
 */
export var _handleTimeout = function(id) {
    var _self = this;
    var timeout = _self._config.timeout
    var isTimeout = _self.timeoutRequest[id] ? _self.timeoutRequest[id] : false;
    var time = _self.timeout[id] ? _self.timeout[id] : false;
    var item = _self.networkList[id];
    //如果不存在 不做处理
    if (!item || isTimeout) {
        return false;
    }
    if (!time) {
        //如果没有那么创建检测超时定时器
        time = setTimeout(function() {
            //接口返回超时
            item.isTimeout = true;
            item.timeout = timeout;
            item.isError = true;
            item.errorContent = 'ajax request timeout，time:' + timeout + '(ms)';
            item.response =  item.response || 'ajax request timeout，time:' + timeout + '(ms)';
            //这里直接完成添加到超时列表 停止后续处理
            _self._handleDoneXML(id)
            _self.timeoutRequest[id] = true
        }, timeout)
    } else {
        //如果存在 则说明已经回调 取消超时定时器
        clearTimeout(time)
    }
}



/*
	处理请求完成的数据
	@id:拦截请求唯一ID
 */
export var _handleDoneXML = function(id) {
    var _self = this;
    var ajaxItem = Tools.extend({}, _self.networkList[id]);
    //空的对象不做处理
    if (Tools.isEmptyObject(ajaxItem)) {
        return false;
    }
    ajaxItem.statusType = 'response';
    /******   这里开始处理数据  *****/
    //判断当前请求数据url是否需要屏蔽
    if (!this.isCatch || !_self._handleJudgeDisbale(ajaxItem)) {
        delete _self.networkList[id];
        return false;
    }
    //判断状态码是否出错
    var status = ajaxItem.status;
    if (!networkTool.validateStatus(status) && !ajaxItem.isError) {
        ajaxItem.isError = true;
        ajaxItem.response = ajaxItem.response || 'ajax request error! error statusCode:' + ( status || 0 );
        ajaxItem.errorContent = 'ajax request error! error statusCode:' + ( status || 0 );
    }
    //通知上传
    _self.sendMessage({
        type : "monitor",
        typeName : 'network',
        data:ajaxItem,
        isError: (ajaxItem.isTimeout || ajaxItem.isError) ? true : false,
    })
    //上报后删除记录
    delete _self.networkList[id];
}



/*
	处理发送的请求
	@id:拦截请求唯一ID
 */
export var _handleSendXML = function(id){
    var _self = this;
    var ajaxItem = Tools.extend({}, _self.networkList[id]);
    //空的对象不做处理
    if (Tools.isEmptyObject(ajaxItem)) {
        return false;
    }
    ajaxItem.statusType = 'request';
    //判断当前请求数据url是否需要屏蔽
    if (!this.isCatch || !_self._handleJudgeDisbale(ajaxItem)) {
        delete _self.networkList[id];
        return false;
    }
    //通知上传
    _self.sendMessage({
        type : "monitor",
        typeName : 'network',
        data:ajaxItem,
    })
}



/*
	判断该请求是否是屏蔽请求
	params
		ajaxInfo :即将上报的数据
	return
		忽略返回 false;
		不忽略返回 true
 */
export var _handleJudgeDisbale = function(ajaxInfo) {
    var {
        ignoreRequestList
    } = this._config;
    //判断是否是是屏蔽url
    if (ignoreRequestList && !Tools.isEmptyArray(ignoreRequestList)) {
        var url = ajaxInfo.url
        var unReport = false;
        ignoreRequestList.forEach(function(item) {
            if (url.indexOf(item) > -1) {
                unReport = true;
                return false;
            }
        });
        if (unReport) {
            return false;
        }
    }
    return true;
}


