(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.dateFormat = dateFormat;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isExist = isExist;
exports.isSymbol = isSymbol;
exports.isSVGElement = isSVGElement;
exports.isObject = isObject;
exports.isEmptyObject = isEmptyObject;
exports.isEmptyArray = isEmptyArray;
exports.isFunction = isFunction;
exports.isElement = isElement;
exports.isWindow = isWindow;
exports.isPlainObject = isPlainObject;
exports.toArray = toArray;
exports.toString = toString;
exports.setSessionStorage = setSessionStorage;
exports.getSessionStorage = getSessionStorage;
exports.removeSessionStorage = removeSessionStorage;
exports.setStorage = setStorage;
exports.getStorage = getStorage;
exports.removeStorage = removeStorage;
exports.getUniqueID = getUniqueID;
exports.extend = extend;
/**
 * 根据时间搓 返回时间
 * @param date format
 * @return string
 */
function dateFormat(date, format) {
    if (!format || typeof format !== 'string') {
        console.error('format is undefiend or type is Error');
        return '';
    }
    date = date instanceof Date ? date : typeof date === 'number' || typeof date === 'string' ? new Date(date) : new Date();
    //解析
    var formatReg = {
        'y+': date.getFullYear(),
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (var reg in formatReg) {
        if (new RegExp(reg).test(format)) {
            var match = RegExp.lastMatch;
            format = format.replace(match, formatReg[reg] < 10 ? '0' + formatReg[reg] : formatReg[reg].toString());
        }
    }
    return format;
}

/**
 * 检查script基本数据类型
 * @param mixed value
 * @return boolean
 */
function isNumber(value) {
    return Object.prototype.toString.call(value) == '[object Number]';
}
function isString(value) {
    return Object.prototype.toString.call(value) == '[object String]';
}
function isArray(value) {
    return Object.prototype.toString.call(value) == '[object Array]';
}
function isBoolean(value) {
    return Object.prototype.toString.call(value) == '[object Boolean]';
}
function isUndefined(value) {
    return value === undefined;
}
function isNull(value) {
    return value === null;
}
function isExist(value) {
    return !isUndefined(value) && !isNull(value);
}
function isSymbol(value) {
    return Object.prototype.toString.call(value) == '[object Symbol]';
}
function isSVGElement(value) {
    return isElement(value) && (value instanceof SVGElement || value.ownerSVGElement);
}
function isObject(value) {
    return Object.prototype.toString.call(value) == '[object Object]' ||
    // if it isn't a primitive value, then it is a common object
    !isNumber(value) && !isString(value) && !isBoolean(value) && !isArray(value) && !isNull(value) && !isFunction(value) && !isUndefined(value) && !isSymbol(value);
}
function isEmptyObject(obj) {
    if (!isObject(obj)) {
        return true;
    }
    for (var key in obj) {
        return false;
    }
    return true;
}
function isEmptyArray(array) {
    if (!isArray(array)) {
        return true;
    }
    return array.length > 0 ? false : true;
}
function isFunction(value) {
    return Object.prototype.toString.call(value) == '[object Function]';
}
function isElement(value) {
    return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? value instanceof HTMLElement : //DOM2
    value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object" && value !== null && value.nodeType === 1 && typeof value.nodeName === "string";
}
function isWindow(value) {
    var toString = Object.prototype.toString.call(value);
    return toString == '[object global]' || toString == '[object Window]' || toString == '[object DOMWindow]';
}
/**
 * 检查是否是普通空对象
 * @param object obj
 * @return boolean
 */
function isPlainObject(obj) {
    var hasOwn = Object.prototype.hasOwnProperty;
    // Must be an Object.
    if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj.nodeType || isWindow(obj)) {
        return false;
    }
    try {
        if (obj.constructor && !hasOwn.call(obj, 'constructor') && !hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
            return false;
        }
    } catch (e) {
        return false;
    }
    var key;
    for (key in obj) {}
    return key === undefined || hasOwn.call(obj, key);
}

/*
  转换工具
 */
function toArray(array) {
    return Array.prototype.slice.call(array);
}
function toString(content) {
    if (!content) {
        return '';
    }
    if (typeof content === 'string') {
        return content;
    }
    return content.toString();
}

/*
    辅助存储保存监控数据
*/
//sessionStorage
function setSessionStorage(key, value) {
    if (!window.sessionStorage) {
        return;
    }
    key = 'keepObserverData_' + key;
    value = JSON.stringify(value);
    sessionStorage.setItem(key, value);
}
function getSessionStorage(key) {
    if (!window.sessionStorage) {
        return;
    }
    key = 'keepObserverData_' + key;
    var value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : '';
}
function removeSessionStorage(key) {
    if (!window.sessionStorage) {
        return;
    }
    key = 'keepObserverData_' + key;
    sessionStorage.removeItem(key);
}
//localStorage
function setStorage(key, value) {
    if (!window.localStorage) {
        return;
    }
    key = 'keepObserverData_' + key;
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
}
function getStorage(key) {
    if (!window.localStorage) {
        return;
    }
    key = 'keepObserverData_' + key;
    var value = localStorage.getItem(key);
    return value ? JSON.parse(value) : '';
}
function removeStorage(key) {
    if (!window.localStorage) {
        return;
    }
    key = 'keepObserverData_' + key;
    localStorage.removeItem(key);
}

/*
    参考Vconsole 生产唯一ID
 */
function getUniqueID() {
    var id = 'xxxxxxxx-xyxx-xxyx-yxxx-xxxy-t-xxxxxx--xxxxxxxx'.replace(/[xyt]/g, function (c) {
        var r = Math.random() * 16 | 0,
            t = new Date().getTime(),
            v = c == 'x' ? r : c == 't' ? t : r & 0x3 | 0x8;
        return c == 't' ? v : v.toString(16);
    });
    return id;
}

/*
    深度合并内容
    引用类型克隆合并
    arguments[0] = target
    arguments type is Object Or Array
    多内容合并覆盖优先级: arguments[0]<arguments[1]<arguments[2]..
    如果sources 不是数组或者对象 则直接忽略
 */
function extend() {
    var args = toArray(arguments);
    if (args.length === 0) {
        console.error('extends params is undefined');
        return {};
    }
    if (args.length === 1) {
        return args[0];
    }
    var target = args[0];
    var sources = args.slice(1, args.length);

    if (!isObject(target) && !isArray(target)) {
        target = {};
    }
    sources.map(function (item) {
        //防止死循环
        if (target === item) {
            return false;
        }
        //如果内容是对象 
        if (isObject(item)) {
            //开始遍历
            for (var key in item) {
                //如果内容是对象
                if (isObject(item[key])) {
                    //修正数据
                    target[key] = target[key] && isObject(target[key]) ? target[key] : {};
                    target[key] = extend(target[key], item[key]);
                } else if (isArray(item[key])) {
                    //修正数据
                    target[key] = target[key] && isArray(target[key]) ? target[key] : [];
                    target[key] = extend(target[key], item[key]);
                } else {
                    //基本类型直接赋值
                    target[key] = item[key];
                }
            }
        } else if (isArray(item)) {
            for (var i = 0; i < item.length; i++) {
                //如果内容是对象
                if (isObject(item[i])) {
                    //修正数据
                    target[i] = target[i] && isObject(target[i]) ? target[i] : {};
                    target[i] = extend(target[i], item[i]);
                } else if (isArray(item[i])) {
                    //修正数据
                    target[i] = target[i] && isArray(target[i]) ? target[i] : [];
                    target[i] = extend(target[i], item[i]);
                } else {
                    //基本类型直接赋值
                    target[i] = item[i];
                }
            }
        }
        //其他类型直接忽略  
    });
    return target;
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//公共默认类
//提供一些全局公共方法
var KeepObserverDefault = function () {
    function KeepObserverDefault(config) {
        _classCallCheck(this, KeepObserverDefault);

        //开发模式下的log 替换window.console.log
        this.$devLog = false;
        //开发模式写error log 替换window.console.error
        this.$devError = false;

        this._keeepObserverDetaultInit();
    }

    _createClass(KeepObserverDefault, [{
        key: '_keeepObserverDetaultInit',
        value: function _keeepObserverDetaultInit() {
            var that = this;
            //初始化$devLog
            that.$devLog = window.console.log;
            window.console.log = function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                that.$devLog.apply(window.console, args);
            };
            //初始化$devError
            that.$devError = window.console.error;
            window.console.error = function () {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                that.$devError.apply(window.console, args);
            };
            //初始化$devWarn
            that.$devWarn = window.console.warn;
            window.console.warn = function () {
                for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                    args[_key3] = arguments[_key3];
                }

                that.$devWarn.apply(window.console, args);
            };
        }
    }, {
        key: '$mixin',
        value: function $mixin(provider) {
            if (!provider || !tool.isObject(provider) || tool.isEmptyObject(provider)) {
                this.$devError('keepObserver $mixin receive params not right');
            }
            for (var key in provider) {
                if (this[key]) {
                    this.$devError('keepObserver $mixin method key: ' + key + ' is exist');
                    continue;
                }
                //不允许重写
                Object.defineProperty(this, key, {
                    configurable: false,
                    enumerable: true,
                    value: provider[key]
                });
            }
        }
    }]);

    return KeepObserverDefault;
}();

exports.default = KeepObserverDefault;

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
	停止监听
 */
var stopObserver = exports.stopObserver = function stopObserver() {
    window.console.log = this.console.log;
    window.console.error = this.console.error;
    window.console.info = this.console.info;
    window.console.debug = this.console.debug;
    window.console.warn = this.console.warn;
    window.console.time = this.console.time;
    window.console.timeEnd = this.console.timeEnd;
    window.console.clear = this.console.clear;
    this.console = {};
    if (this._config.catchCrossDomain) {
        window.document.createElement = this.$createElement;
        this.$createElement = false;
    }
};

/*
	开始监听
 */
var startObserver = exports.startObserver = function startObserver() {
    //启动监听
    var that = this;
    setTimeout(function () {
        that._handleInit();
    });
};

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 
 	observer log 实例默认配置数据
 */

exports.default = {
    //是否捕获跨域JS错误
    catchCrossDomain: true,
    //未知错误是否捕获
    unknowErrorCatch: false
};

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._handleError = exports._handleMessage = exports._handleInit = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
	初始化替换相关信息
*/
var _handleInit = exports._handleInit = function _handleInit() {
    var that = this;
    //替换window.console变量
    var baseLogList = ['log', 'info', 'warn', 'debug', 'error'];

    if (!window.console) {
        window.console = {};
    }

    baseLogList.map(function (method) {
        that.console[method] = window.console[method];
    });
    that.console.time = window.console.time;
    that.console.timeEnd = window.console.timeEnd;
    that.console.clear = window.console.clear;

    baseLogList.map(function (method) {
        window.console[method] = function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            //是否处于开发模式下
            if (that._develop && that.console[method] && tool.isFunction(that.console[method])) {
                var _that$console;

                (_that$console = that.console)[method].apply(_that$console, args);
            }
            //交给拦截处理信息
            that._handleMessage(method, args);
        };
    });
    //处理time timeEnd clear
    var timeLog = {};
    window.console.time = function (label) {
        timeLog[label] = Date.now();
    };
    window.console.timeEnd = function (label) {
        var pre = timeLog[label];
        var type = 'timeEnd';
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
    };
    window.console.clear = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        that._handleMessage('clear', args);
        that.console.clear.apply(window.console, args);
    };
    //是否需要捕获跨域JS错误
    if (that._config.catchCrossDomain && !that.$createElement) {
        //侵入document.createElement  实现跨域JS捕获错误信息
        if (window.document || window.document.createElement) {
            that.$createElement = window.document.createElement;
            window.document.createElement = function (type) {
                var resultDom = that.$createElement.call(window.document, type);
                if (type === 'script') {
                    resultDom.crossOrigin = 'anonymous';
                }
                return resultDom;
            };
        }
    }
    //监控window.onerror
    if (typeof window.addEventListener != 'undefined') {
        window.addEventListener('error', function () {
            that._handleError.apply(that, arguments);
        }, true);
    } else {
        window.attachEvent('onerror', function () {
            that._handleError.apply(that, arguments);
        });
    }
};

/*
	处理打印信息
	上报报文如下
	@: type string  (log|info|debug.... jsError)
	@: data string  (JSON格式对象报文)
 */
var _handleMessage = exports._handleMessage = function _handleMessage(type, agrs) {
    var that = this;
    var reportData = {};
    //agrs不是数组 或是空数组 则不处理
    if (!tool.isArray(agrs) || agrs.length === 0) {
        return false;
    }
    reportData.type = type;
    //直接转成JSON
    reportData.data = JSON.stringify(agrs);
    //上报
    that.noticeReport(reportData);
};

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
var _handleError = exports._handleError = function _handleError(errorEvent) {
    var that = this;
    var errorObj = {};
    var url = errorEvent.filename || errorEvent.url || false;
    //可能是跨域资源JS出现错误 这获取不到详细信息
    if ((!errorEvent.message || errorEvent.message === 'Script error.') && !url) {
        //有可能是资源加载错误被捕获
        if (errorEvent.target && !tool.isWindow(errorEvent.target) && errorEvent.target.nodeName && errorEvent.target.src) {
            errorObj.errMsg = 'loadError! web request Resource loading error';
            errorObj.nodeName = errorEvent.target.nodeName;
            errorObj.url = errorEvent.target.src;
            setTimeout(function () {
                that._handleMessage('loadError', [errorObj]);
            });
            return false;
        }
        //未知错误是否捕获
        if (!that._config.unknowErrorCatch) return false;
        errorObj.errMsg = 'jsError!There may be an error in the JS for cross-domain resources, and the error URL location cannot be obtained. The error message is:' + errorEvent.message;
        errorObj.url = '';
        errorObj.line = 0;
        errorObj.colum = 0;
        setTimeout(function () {
            that._handleMessage('jsError', [errorObj]);
        });
        return false;
    }
    //处理错误信息
    errorObj.errMsg = errorEvent.message || 'Error detail info not obtained';
    errorObj.url = url;
    errorObj.line = errorEvent.lineno || 'Error row not obtained';
    errorObj.colum = errorEvent.colno || 'Error column not obtained';
    setTimeout(function () {
        that._handleMessage('jsError', [errorObj]);
    });
    return true;
};

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.noticeReport = exports.handleReportData = exports.addReportListener = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//注册上报监听
var addReportListener = exports.addReportListener = function addReportListener(callback) {
    if (callback) {
        this.eventListener.push(callback);
    }
};

//处理整理数据
var handleReportData = exports.handleReportData = function handleReportData(content) {
    var reportParams = {};
    var control = {};
    reportParams.type = "monitor";
    reportParams.typeName = 'log';
    reportParams.location = window.location.href;
    reportParams.environment = window.navigator.userAgent;
    reportParams.data = content;
    reportParams.reportTime = new Date().getTime();
    //option
    control.lazy = true;
    //如果是clear,清除之前的console.log相关信息
    if (content.type === 'clear') {
        control.preDelete = true;
        control.ignore = true;
    }
    //如果是JS运行报错,或者打印错误error合并上报所有内容
    if (content.type === 'jsError' || content.type === 'error') {
        control.lazy = false;
        control.trackExtend = true;
        control.isError = true;
        control.isReport = true;
    }
    return {
        reportParams: reportParams,
        control: control
    };
};

//通知上报
var noticeReport = exports.noticeReport = function noticeReport(content) {
    var that = this;
    if (that.eventListener.length === 0) {
        return false;
    }
    //通知上报
    that.eventListener.map(function (item) {
        if (tool.isFunction(item)) {
            var _that$handleReportDat = that.handleReportData(content),
                reportParams = _that$handleReportDat.reportParams,
                control = _that$handleReportDat.control;

            item(reportParams, control);
        }
    });
};

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = __webpack_require__(24);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _index2 = __webpack_require__(1);

var _index3 = _interopRequireDefault(_index2);

var _handle = __webpack_require__(25);

var handleServer = _interopRequireWildcard(_handle);

var _api = __webpack_require__(23);

var apiServer = _interopRequireWildcard(_api);

var _report = __webpack_require__(26);

var reportServer = _interopRequireWildcard(_report);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 获取系统信息
var KeepObserverLog = function (_KeepObserverDetault) {
    _inherits(KeepObserverLog, _KeepObserverDetault);

    //构造函数
    function KeepObserverLog(config) {
        _classCallCheck(this, KeepObserverLog);

        //初始化上传相关实例
        var _this = _possibleConstructorReturn(this, (KeepObserverLog.__proto__ || Object.getPrototypeOf(KeepObserverLog)).call(this));

        var logConfig = config.logCustom || {};
        //是否是开发模式
        logConfig.develop = config.develop ? true : false;
        //存混合配置
        _this._config = tool.extend(_defaultConfig2.default, logConfig);
        //上报名
        _this._typeName = 'log';
        //监听列表
        _this.eventListener = [];
        //当前是否处于开发模式
        _this._develop = _this._config.develop;
        //替换window.console
        _this.console = {};
        //替换 doucment.createElement 插入script .crossOrigin = 'anonymous';
        _this.$createElement = false;
        //启动
        _this.$mixin(handleServer);
        _this.$mixin(apiServer);
        _this.$mixin(reportServer);
        //启动监控
        _this.startObserver();
        return _this;
    }

    //提供一个挂载入口


    _createClass(KeepObserverLog, [{
        key: 'apply',
        value: function apply(pipe) {
            this.addReportListener(pipe.sendPipeMessage);
            return {
                $logStop: this.stopObserver,
                $logStart: this.startObserver
            };
        }
    }]);

    return KeepObserverLog;
}(_index3.default);

exports.default = KeepObserverLog;

/***/ })

/******/ });
});