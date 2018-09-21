import * as tool from '../../../tool/index.js';
import * as networkTool from './tool.js';
/*
    	初始化ajax请求监控
    	在这里替换window.XMLHttpRequest变量进行监控
     */
export var _handleInit = function() {
    var that = this;
    var _XMLHttp = window.XMLHttpRequest;
    //不支持 ajax 不进行监控
    if (!_XMLHttp) {
        return false;
    }
    that._open = window.XMLHttpRequest.prototype.open
    that._send = window.XMLHttpRequest.prototype.send
    that._setRequestHeader = window.XMLHttpRequest.prototype.setRequestHeader
    //处理Ajax
    that._handleXMLAjax();
}


/*
	拦截XML AJax信息
 */
export var _handleXMLAjax = function() {
    var that = this;
    //拦截原生open
    window.XMLHttpRequest.prototype.open = function() {
        var XML = this;
        var args = tool.toArray(arguments);
        //定时器
        var timer = null;
        //获取请求唯一ID
        var id = networkTool.getUniqueID();
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
            var item = that.networkList[id] ? that.networkList[id] : false;
            //如果不存在 可能略过了send 会导致丢失部分数据
            if (!item) {
                item = {}
                //保存请求方法
                item.method = method
                var {
                    url,
                    params
                } = networkTool.handleReqUrl(url);
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
                that._handleTimeout(id);
                //处理响应头
                item.resHead = {};
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
                    item.resHead[key] = value;
                }
                //完成
                clearInterval(timer);
                item.endTime = +new Date(),
                    item.costTime = (item.endTime - (item.startTime || item.endTime)) + 'ms';
                item.response = XML.response;
                //请求结束完成
                setTimeout(function() {
                    //是否是超时接口 超时的接口不做处理
                    if (!that.timeoutRequest[id]) {
                        that._handleDoneXML(id)
                    }
                })
            } else {
                clearInterval(timer);
            }
            //如果这个接口已经超时处理了 那么不记录
            if (!that.timeoutRequest[id]) {
                that.networkList[id] = item;
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
        return that._open.apply(XML, args);
    }
    //拦截原始设置请求头
    window.XMLHttpRequest.prototype.setRequestHeader = function() {
        var XML = this;
        var args = tool.toArray(arguments);
        if (XML._id && XML._setHead) {
            var setHead = XML._setHead[XML._id];
            var key = args[0] ? args[0] : 'unkownRequestHead';
            var value = args[1] ? args[1] : '';
            setHead[key] = value
            XML._setHead[XML._id] = setHead
        }
        return that._setRequestHeader.apply(XML, args);
    }
    //拦截原生send
    window.XMLHttpRequest.prototype.send = function() {
        var XML = this;
        var id = XML._id;
        var method = XML._method.toUpperCase();
        var requestHead = XML._setHead[id];
        var url = XML._url;
        var args = [].slice.call(arguments),
            data = args[0],
            saveData = '';
        //监听列表中创建一条请求
        if (!that.networkList[id]) {
            that.networkList[id] = {}
        }
        //保存请求方法
        that.networkList[id].method = method;
        var {
            url,
            params
        } = networkTool.handleReqUrl(url);
        //处理请求url和params
        that.networkList[id].url = url;
        that.networkList[id].params = params;
        //保存自定义请求头
        if (requestHead) {
            that.networkList[id].reqHead = tool.extend({}, requestHead);
            delete XML._setHead[id];
        }
        //如果是post数据保存
        if (method === 'POST') {
            if (tool.isString(data)) {
                saveData = data;
            }
        }
        that.networkList[id].data = saveData;
        //开启定时器 判断接口是否超时
        that._handleTimeout(id);
        return that._send.apply(XML, args);
    }
}



/*
	处理接口请求超时
 */
export var _handleTimeout = function(id) {
    var that = this;
    var timeout = that._config.timeout
    var isTimeout = that.timeoutRequest[id] ? that.timeoutRequest[id] : false;
    var time = that.timeout[id] ? that.timeout[id] : false;
    var item = that.networkList[id];
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
            item.errorContent = '接口响应超时，超时时间:' + timeout + '(ms)';
            //这里直接完成添加到超时列表 停止后续处理
            that._handleDoneXML(id)
            that.timeoutRequest[id] = true
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
    var that = this;
    var ajaxItem = tool.extend({}, that.networkList[id]);
    var {
        onHandleJudgeResponse,
        onHandleRequestData,
        onHandleResponseData
    } = that._config;
    //空的对象不做处理
    if (tool.isEmptyObject(ajaxItem)) {
        return false;
    }
    /******   这里开始处理数据  *****/
    //判断当前请求数据url是否需要屏蔽
    if (!that._handleJudgeDisbale(ajaxItem)) {
        that.networkList[id];
        return false;
    }
    //如果存在自定义处理 请求data配置
    if (onHandleRequestData) {
        try {
            ajaxItem.handleReqData = onHandleRequestData(ajaxItem)
        } catch (err) {
            ajaxItem.handleReqData = '自定义handleRequestData出错:' + err
        }
    }
    //判断状态码是否出错
    var status = ajaxItem.status;
    if (!networkTool.validateStatus(status) && !ajaxItem.isError) {
        ajaxItem.isError = true;
        ajaxItem.errorContent = 'http请求错误!错误状态码:' + status;
    }
    //如果存在自定义处理 响应data配置
    if (onHandleResponseData && !ajaxItem.isError) {
        try {
            ajaxItem.handleResData = onHandleResponseData(ajaxItem)
        } catch (err) {
            ajaxItem.handleResData = '自定义handleResponseData出错:' + err
        }
    }
    //如果存在自定义处理响应数据是否出错
    if (onHandleJudgeResponse && !ajaxItem.isError) {
        try {
            ajaxItem.isError = onHandleJudgeResponse(ajaxItem);
            if (ajaxItem.isError) {
                ajaxItem.errorContent = ajaxItem.isError;
                ajaxItem.isError = true
            }
        } catch (err) {
            ajaxItem.isError = true
            ajaxItem.errorContent = '自定义判断handleJudgeResponse出错:' + err;
        }
    }
    //通知上传
    that.noticeReport(ajaxItem);
    //上报后删除记录
    delete that.networkList[id];
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
    if (ignoreRequestList && tool.isArray(ignoreRequestList)) {
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
    //判断是否是keepObserver的上报请求
    if (ajaxInfo.reqHead && ajaxInfo.reqHead['keepObserver-reportAjax']) {
        return false;
    }
    return true;
}