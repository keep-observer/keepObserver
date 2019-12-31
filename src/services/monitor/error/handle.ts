import { consoleTools,tool } from '@util/index'



/*
	初始化替换相关信息
*/
export var _handleInit = function() {
    var _self = this;
    //替换window.console变量
    var baseLogList = ['log', 'info', 'warn', 'debug', 'error'];
    //是否需要捕获跨域JS错误
    if (_self._config.catchCrossDomain && !_self.$createElement) {
        //侵入document.createElement  实现跨域JS捕获错误信息
        if (window.document || window.document.createElement) {
            _self.$createElement = window.document.createElement
            window.document.createElement = function(type) {
                var resultDom = _self.$createElement.call(window.document, type)
                if (type === 'script') {
                    resultDom.crossOrigin = 'anonymous';
                }
                return resultDom
            }
        }
    }
    //监控window.onerror
    if (typeof window.addEventListener != 'undefined') {
        window.addEventListener('error', (...args) => {
            _self._handleError(...args)
        }, true);
    } else {
        (<any>window).attachEvent('onerror', (...args) => {
            _self._handleError(...args)
        })
    }
}






/*
	处理打印信息
	上报报文如下
	@: type string  (log|info|debug.... jsError)
	@: data string  (JSON格式对象报文)
 */
export var _handleMessage = function(type, agrs) {
    var _self = this;
    var reportData:any = {}
    var separate = ' , '
    var data = ''
    //agrs不是数组 或是空数组 则不处理
    if (!tool.isArray(agrs) || agrs.length === 0) {
        return false;
    }
    reportData.type = type;
    //直接转成字符串形式
    agrs.forEach( (el,index)=>{
        try{
            if(tool.isObject(el)){
                data += `${index===0?'':separate}${JSON.stringify(el)}`  
            }else{
                data += `${index===0?'':separate}${tool.toString(el).replace(/[\s\r\n\t]/g,'')}`  
            }
        }catch(err){
            data += `${index===0?'':separate}toString is err:${tool.toString(err).replace(/[\s\r\n\t]/g,'')}`  
        }
    })
    reportData.data = data
    const { reportParams,control } = _self.handleReportData(reportData)
    //上报
    _self.noticeReport(reportParams,control)
}








/*
	监听 window.onerror,并处理错误信息
	@errorEvent 		:错误信息对象
	////////  上报error对象 /////////
	errorObj object = {
		errMsg: 			错误信息
		url:                错误文件
		line:         		错误所在行
		colum:              错误所在列
	}
 */
export var _handleError = function(errorEvent) {
    var _self = this;
    var errorObj:any = {};
    var url = errorEvent.filename || errorEvent.url || false
    //可能是跨域资源JS出现错误 这获取不到详细信息
    if ( (!errorEvent.message || errorEvent.message === 'Script error.') && !url) {
        //有可能是资源加载错误被捕获
        if(errorEvent.target && !tool.isWindow(errorEvent.target) && errorEvent.target.nodeName && errorEvent.target.src){
            errorObj.errMsg = 'loadError! web request Resource loading error' ;
            errorObj.nodeName = errorEvent.target.nodeName 
            errorObj.url = errorEvent.target.src;
            setTimeout(function() {
                _self._handleMessage('loadError', [errorObj])
            })
            return false;
        }
        //未知错误是否捕获
        if (!_self._config.unknowErrorCatch) return false;
        errorObj.errMsg = 'jsError!There may be an error in the JS for cross-domain resources, and the error URL location cannot be obtained. The error message is:' + errorEvent.message;
        errorObj.url = '';
        errorObj.line = 0;
        errorObj.colum = 0;
        setTimeout(function() {
            _self._handleMessage('jsError', [errorObj])
        })
        return false;
    }
    //处理错误信息
    errorObj.errMsg = errorEvent.message || 'Error detail info not obtained'
    errorObj.url = url;
    errorObj.line = errorEvent.lineno || 'Error row not obtained'
    errorObj.colum = errorEvent.colno || 'Error column not obtained'
    setTimeout(function() {
        _self._handleMessage('jsError', [errorObj])
    })
    return true;
}


