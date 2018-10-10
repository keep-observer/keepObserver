import * as tool from '../../../tool/index.js';

/*
	初始化替换相关信息
*/
export var _handleInit = function() {
    var that = this;
    //替换window.console变量
    var baseLogList = ['log', 'info', 'warn', 'debug', 'error'];

    if (!window.console) {
        window.console = {};
    }

    baseLogList.map(function(method) {
        that.console[method] = window.console[method];
    })
    that.console.time = window.console.time;
    that.console.timeEnd = window.console.timeEnd;
    that.console.clear = window.console.clear;

    baseLogList.map(method => {
        window.console[method] = (...args) => {
            //是否处于开发模式下
            if (that._develop && that.console[method] && tool.isFunction(that.console[method])) {
                that.console[method](...args);
            }
            //交给拦截处理信息
            that._handleMessage(method, args);
        }
    });
    //处理time timeEnd clear
    var timeLog = {};
    window.console.time = function(label) {
        timeLog[label] = Date.now();
    }
    window.console.timeEnd = function(label) {
        var pre = timeLog[label];
        var type = 'timeEnd'
        if (pre) {
            var content = label + ':' + (Date.now() - pre) + 'ms';
            that._handleMessage(type, [content]);
            //开发模式下打印
            if (that._develop && that.console.log && tool.isFunction(that.console.log)) {
                that.console.log(content);
            }
        } else {
            var content = label + ': 0ms';
            that._handleMessage(type, [content]);
            //开发模式下打印
            if (that._develop && that.console.log && tool.isFunction(that.console.log)) {
                that.console.log(content);
            }
        }
    }
    window.console.clear = (...args) => {
        that._handleMessage('clear', args);
        that.console.clear.apply(window.console, args);
    };
    //是否需要捕获跨域JS错误
    if (that._config.catchCrossDomain && !that.$createElement) {
        //侵入document.createElement  实现跨域JS捕获错误信息
        if (window.document || window.document.createElement) {
            that.$createElement = window.document.createElement
            window.document.createElement = function(type) {
                var resultDom = that.$createElement.call(window.document, type)
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
            that._handleError(...args)
        }, true);
    } else {
        window.attachEvent('onerror', (...args) => {
            that._handleError(...args)
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
    var that = this;
    var reportData = {}
        //agrs不是数组 或是空数组 则不处理
    if (!tool.isArray(agrs) || agrs.length === 0) {
        return false;
    }
    reportData.type = type;
    //直接转成JSON
    reportData.data = JSON.stringify(agrs);
    //上报
    that.noticeReport(reportData)
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
    var that = this;
    var errorObj = {};
    var url = errorEvent.filename || errorEvent.url || false
        //可能是跨域资源JS出现错误 这获取不到详细信息
    if (errorEvent.message === 'Script error.' && !url) {
        //未知错误是否捕获
        if (!that._config.unknowErrorCatch) return false;
        errorObj.errMsg = 'jsError!There may be an error in the JS for cross-domain resources, and the error URL location cannot be obtained. The error message is:' + errorEvent.message;
        errorObj.url = '';
        errorObj.line = 0;
        errorObj.colum = 0;
        setTimeout(function() {
            that._handleMessage('jsError', [errorObj])
        })
        return false;
    }
    //处理错误信息
    errorObj.errMsg = errorEvent.message || 'Error detail info not obtained'
    errorObj.url = url;
    errorObj.line = errorEvent.lineno || 'Error row not obtained'
    errorObj.colum = errorEvent.colno || 'Error column not obtained'
    setTimeout(function() {
        that._handleMessage('jsError', [errorObj])
    })
    return true;
}