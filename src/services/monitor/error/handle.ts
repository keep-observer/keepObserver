import { consoleTools,Tools } from '@util/index'
import  errorStackParser  from 'error-stack-parser'



/*
	初始化替换相关信息
*/
export var _handleInit = function() {
    var _self = this;
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
        window.addEventListener('unhandledrejection', (...args) => {
            _self._handlePromiseCatchReject(...args)
        }, true);
    } else {
        (<any>window).attachEvent('onerror', (...args) => {
            _self._handleError(...args)
        })
    }
    //替换EventTarget.prototype.addEventListener
    //替换setTimeout and setInterval
    //addEventListener promise unhandledrejection
}




/*
	处理打印信息
	上报报文如下
	@: type string  (error)
	@: data string  (JSON格式对象报文)
 */
export var _handleMessage = function(type, agrs) {
    var _self = this;
    var reportData:any = {}
    //agrs不是数组 或是空数组 则不处理
    if (!Tools.isArray(agrs) || agrs.length === 0) {
        return false;
    }
    var  [ data ] = agrs
    //上报
    _self.sendMessage({
        type : "monitor",
        typeName : 'error',
        data:{
            ...data,
            type,
        },
        isError: true
    })
}




/*
	监听 window.onerror,并处理错误信息
	@errorEvent 		:错误信息对象
	////////  上报error对象 /////////
	errorObj object = {
        type：              错误类型
		message: 			错误信息
		filename:           错误文件
		line:         		错误所在行
        colum:              错误所在列
        stackTraces:        堆栈信息
	}
 */
export var _handleError = function(errorEvent) {
    var _self = this;
    var errorObj:any = {};
    // get filename
    var filename = errorEvent.filename || errorEvent.url || false
    filename = filename === '<anonymous>'? false :filename
    var defaultUrl =  '(inline script)'
    //读取错误信息
    var message = errorEvent.message || (errorEvent.error && errorEvent.error.message)
    var line =  errorEvent.lineno || 0
    var colum = errorEvent.colno || 0
    var type = 'jsError'
    var stackTraces = []
    //可能是跨域资源JS出现错误 这获取不到详细信息
    if ( (!message || message.indexOf('Script error') > -1 ) && !filename) {
        //有可能是资源加载错误被捕获
        if(errorEvent.target && !Tools.isWindow(errorEvent.target) && errorEvent.target.nodeName && errorEvent.target.src){
            message = `loadError! web request Resource load error -> ${errorEvent.target.nodeName}` ;
            filename = errorEvent.target.src;
            type = 'loadError'
        }else if (_self._config.unknowErrorCatch){
            //未知错误是否捕获
            filename = defaultUrl
            message = 'jsError!There may be an error in the JS for cross-domain resources, and the error URL location cannot be obtained. The error message is:' + message;
        }
    }else{
        //正常捕获到了错误信息
        //尝试获取堆栈信息
        try {
            stackTraces = errorStackParser.parse(errorEvent.error)
        } catch (e) {}
        if (!filename && stackTraces.length) {
            var lastFrame = stackTraces[stackTraces.length - 1]
            if (lastFrame.filename) {
                filename = lastFrame.filename
                line = lastFrame.lineNumber
                colum = lastFrame.columnNumber
            } else {
                filename = defaultUrl
                line = errorEvent.lineno || 0
                colum = errorEvent.colno || 0
            }
            message = message || 'Error detail info not obtained'
        }
    }
    errorObj = {
        filename,
        type,
        line,
        colum,
        message,
        stackTraces,
    }
    //处理错误信息
    _self._handleMessage('error', [errorObj])
    return true;
}





//拦截addEventListener以及setTime setInterval 注入try
//注意这个方法会对性能有影响
export var _handlePatchTryCatch = function(){
}

