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
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.startCorrespond = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var startCorrespond = exports.startCorrespond = function startCorrespond() {
    this.registerMessage();
    this.initDomEvent();
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkOrigin = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var checkOrigin = exports.checkOrigin = function checkOrigin(origin) {
    var origins = this._config.origins;

    if (tool.isEmptyArray(origins) || !origin) {
        return false;
    }
    //check load iframe origin url
    for (var i = 0; i < origins.length; i++) {
        var item = origins[i];
        if (item.indexOf(origin) > -1) {
            return true;
        }
    }
    return false;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendMessage = exports.handleMessage = exports.removeMessage = exports.registerMessage = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var registerMessage = exports.registerMessage = function registerMessage() {
    var that = this;
    var correspondWaitTimeout = that._config.correspondWaitTimeout;
    //proxy

    that.proxyMessageHandleEvent = function (event) {
        that.handleMessage(event);
    };
    //start listener
    window.addEventListener('message', that.proxyMessageHandleEvent, false);
    //concat timeout
    setTimeout(function () {
        if (!that.correspondFlag) {
            that.$devError('keepObserver KeepObserverWebSignConfig  iframe correspond Connection timeout');
            that.removeMessage();
        }
    }, correspondWaitTimeout);
};

var removeMessage = exports.removeMessage = function removeMessage() {
    this.correspondFlag = false;
    this.sourceTarget = false;
    this.sourceOrigin = false;
    window.removeEventListener('message', this.proxyMessageHandleEvent);
};

var handleMessage = exports.handleMessage = function handleMessage(event) {
    var that = this;
    var origin = event.origin || event.originalEvent.origin;
    var data = event.data;
    var source = event.source;
    //validate
    if (!that.checkOrigin(origin)) {
        that.$devError('keepObserver KeepObserverWebSignConfig  iframe message origin is error');
        that.removeMessage();
        return false;
    }
    if (!tool.isExist(data) || tool.isEmptyObject(data) || !data.type) {
        that.$devError('keepObserver KeepObserverWebSignConfig  iframe correspond receive is error');
        return false;
    }
    if (!that.correspondFlag) {
        that.correspondFlag = true;
        that.sourceTarget = source;
        that.sourceOrigin = origin;
    }
    //flow work
    switch (data.type) {
        case 'requestConfig':
            that.confirmConcatRequestSginData();
            break;
        case 'sendSignData':
            that.receiveSignConfigData(data.payload);
            break;
        case 'confirmNodeSgin':
            that.confirmNodeSelect(data.payload);
            break;
        case 'preventDefault':
            that.handleElementEventPreventDefault(data.payload);
            break;
        default:
            that.$devError('keepObserver KeepObserverWebSignConfig  iframe correspond receive is error : data.type is error type');
            that.removeMessage();
    }
};

var sendMessage = exports.sendMessage = function sendMessage(data) {
    if (!data || tool.isEmptyObject(data) || !data.type) {
        return false;
    }
    this.sourceTarget.postMessage(data, this.sourceOrigin);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/*
 	实例默认配置数据
 */
exports.default = {
  //等待连接超时时间
  correspondWaitTimeout: 10000,
  //跨域限制来源表
  origins: []
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _event = __webpack_require__(50);

var eventServer = _interopRequireWildcard(_event);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var domServer = {};
domServer = tool.extend(domServer, eventServer);

exports.default = domServer;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.confirmNodeSelect = exports.reportNodeSelect = exports.receiveSignConfigData = exports.handleElementEventPreventDefault = exports.confirmConcatRequestSginData = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//confirmConfig and requestSignData
var confirmConcatRequestSginData = exports.confirmConcatRequestSginData = function confirmConcatRequestSginData() {
    var that = this;
    that.sendMessage({ type: 'confirmConfig', payload: null });
    //延时100ms发送请求配置
    setTimeout(function () {
        that.sendMessage({ type: 'requestSignData', payload: null });
    }, 100);
};

// set element event
var handleElementEventPreventDefault = exports.handleElementEventPreventDefault = function handleElementEventPreventDefault(payload) {
    if (tool.isBoolean(payload)) {
        this.preventDefault = payload;
        this.sendMessage({ type: 'confirmConfig', payload: this.preventDefault });
    }
};

//receive sign config data
var receiveSignConfigData = exports.receiveSignConfigData = function receiveSignConfigData() {};

//report iframe container select node
var reportNodeSelect = exports.reportNodeSelect = function reportNodeSelect(nodeInfo) {
    this.sendMessage({ type: 'selectNodeSgin', payload: nodeInfo });
};

var confirmNodeSelect = exports.confirmNodeSelect = function confirmNodeSelect() {};

/***/ }),
/* 22 */
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
    reportParams.type = "analyse";
    reportParams.typeName = 'webSignConfig';
    reportParams.location = window.location.href;
    reportParams.environment = window.navigator.userAgent;
    reportParams.data = content;
    reportParams.reportTime = new Date().getTime();
    //option
    control.lazy = false;
    control.isError = false;
    control.isReport = true;
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
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectElement = exports.initDomEvent = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _style = __webpack_require__(52);

var styleServer = _interopRequireWildcard(_style);

var _nodeInfo = __webpack_require__(51);

var _nodeInfo2 = _interopRequireDefault(_nodeInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initDomEvent = exports.initDomEvent = function initDomEvent() {
    var that = this;
    //load style
    styleServer.loadStyle();
    //register click event
    document.addEventListener('click', function (event) {
        that.selectElement(event);
    }, false);
};

var selectElement = exports.selectElement = function selectElement(event) {
    var that = this;
    var el = event.target;
    if (that.preventDefault) {
        event.preventDefault();
    }
    //sgin element
    if (that.selectDom) {
        styleServer.removeSelelctNodeClass(that.selectDom);
    }
    styleServer.addSelelctNodeClass(el);
    that.selectDom = el;
    //create node info
    var nodeInfo = (0, _nodeInfo2.default)(el);
    //report iframe container select Node
    that.reportNodeSelect(nodeInfo);
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _tab = __webpack_require__(53);

var _md = __webpack_require__(64);

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//cache
var nodeInfoCache = {};
var attrSelectFlag = 'keepObserverSelecteElementSgin';
var attrCacheSelect = 'keepObserverCacheSelecteElementSgin';

var createXPath = function createXPath(element) {
    //id
    if (element.id) {
        return '//*[@id="' + element.id + '"]';
    }
    //body
    if (element.nodeName.toLowerCase() === 'body') {
        return '/html/' + element.nodeName.toLowerCase();
    }
    var index = 1;
    var brotherList = element.parentNode.children;
    element.setAttribute(attrSelectFlag, true);
    for (var i = 0, len = brotherList.length; i < len; i++) {
        var item = brotherList[i];
        if (item.getAttribute(attrSelectFlag)) {
            element.removeAttribute(attrSelectFlag);
            return createXPath(element.parentNode) + '/' + element.nodeName.toLowerCase() + (index > 1 ? '[' + index + ']' : '');
        } else if (item.nodeName.toLowerCase() === element.nodeName.toLowerCase()) {
            index++;
        }
    }
};

var createElementNodeInfo = function createElementNodeInfo(element) {
    if (!tool.isElement(element)) {
        return false;
    }
    //validate element nodeType
    if (!(0, _tab.htmlTabMap)(element.nodeName.toLowerCase())) {
        console.error('element.nodeType:' + element.nodeName.toLowerCase() + ' unsupport select sgin');
        return false;
    }
    //get cache
    if (element.getAttribute(attrCacheSelect)) {
        return nodeInfoCache[element.getAttribute(attrCacheSelect)];
    }
    //create
    var xPath = createXPath(element);
    var nodeInfo = {
        nodeType: element.nodeName.toLowerCase(),
        xPath: xPath,
        nodeId: (0, _md2.default)(xPath)
        //save cache
    };element.setAttribute(attrCacheSelect, nodeInfo.nodeId);
    nodeInfoCache[element.getAttribute(attrCacheSelect)] = nodeInfo;
    return nodeInfo;
};

exports.default = createElementNodeInfo;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeSelelctNodeClass = exports.addSelelctNodeClass = exports.loadStyle = exports.activeClassName = exports.selectClassName = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var selectClassName = exports.selectClassName = 'keepObserver-webSgin-SelectNode';
var activeClassName = exports.activeClassName = 'keepObserver-webSgin-ActiveNode';

var styleContent = '\n    .' + selectClassName + '{\n        box-sizing: border-box !important;\n        border: 1px dashed #ff3300 !important;\n        background-color: rgba(255,165,0,0.8) !important;\n    }\n    .' + activeClassName + '{\n        box-sizing: border-box !important;\n        border: 1px dashed #ff3300 !important;\n        background-color: rgba(255,51,0,0.8) !important;\n    }\n';

var hasClass = function hasClass(el, Class) {
    return el.className.match(new RegExp('(\\s|^)' + Class + '(\\s|$)'));
};
var addClass = function addClass(el, className) {
    if (!tool.isElement(el) || !tool.isString(className) || tool.isSVGElement(el)) {
        return false;
    }
    if (hasClass(el, className) && el.className.match) {
        return false;
    }
    el.className += ' ' + className;
};
var removeClass = function removeClass(el, className) {
    if (!tool.isElement(el) || !tool.isString(className) || tool.isSVGElement(el)) {
        return false;
    }
    if (!hasClass(el, className)) {
        return false;
    }
    el.className = el.className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), '');
};

var loadStyle = exports.loadStyle = function loadStyle() {
    var style = document.createElement('style');
    var head = document.querySelector('head');
    style.innerHTML = styleContent;
    head.appendChild(style);
};

var addSelelctNodeClass = exports.addSelelctNodeClass = function addSelelctNodeClass(el) {
    return addClass(el, selectClassName);
};

var removeSelelctNodeClass = exports.removeSelelctNodeClass = function removeSelelctNodeClass(el) {
    return removeClass(el, selectClassName);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var makeMap = function makeMap(key, valueString) {
    var map = {};
    var list = typeof valueString === 'string' ? valueString.split(',') : valueString.toString().split(',');
    if (Array.isArray(list) && list.length > 0) {
        map[key] = list;
    } else {
        warnError('set map error: valueString type error or value error');
        return false;
    }
    return function (value) {
        return map[key].indexOf(value) !== -1 ? true : false;
    };
};

//html标签
var htmlTabMap = exports.htmlTabMap = makeMap('tab', 'a,abbr,address,acronym,article,area,aside,audio,' + 'b,bdi,bdo,big,blockquote,button,body,base,' + 'canvas,caption,cite,code,col,colgroup,command,center,' + 'dd,details,dialog,div,dl,dt,datalist,del,dfn,' + 'em,embed,' + 'fieldset,figcaption,figure,footer,form,frame,frameset,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,' + 'i,iframe,img,input,ins,' + 'kbd,keygen,' + 'label,legend,li,' + 'menuitem,meta,map,mark,menu,menuitem,meter,' + 'nav,noframes,noscript,' + 'object,ol,optgroup,option,output,' + 'p,param,pre,progress,' + 'q,' + 'rp,rt,ruby,' + 'samp,section,select,small,source,span,strong,sub,summary,sup,' + 'title,tr,track,table,tbody,td,textarea,tfoot,th,thead,time,tt,' + 'u,ul,var,video,wbr');

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = __webpack_require__(19);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _api = __webpack_require__(16);

var apiServer = _interopRequireWildcard(_api);

var _handle = __webpack_require__(21);

var handleServer = _interopRequireWildcard(_handle);

var _report = __webpack_require__(22);

var reportServer = _interopRequireWildcard(_report);

var _check = __webpack_require__(17);

var checkServer = _interopRequireWildcard(_check);

var _correspond = __webpack_require__(18);

var correspondServer = _interopRequireWildcard(_correspond);

var _index2 = __webpack_require__(20);

var _index3 = _interopRequireDefault(_index2);

var _index4 = __webpack_require__(1);

var _index5 = _interopRequireDefault(_index4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//简单H5页面埋点分析
var KeepObserverWebSignConfig = function (_KeepObserverDetault) {
    _inherits(KeepObserverWebSignConfig, _KeepObserverDetault);

    //构造函数
    function KeepObserverWebSignConfig(config) {
        _classCallCheck(this, KeepObserverWebSignConfig);

        //初始化上传相关实例
        var _this = _possibleConstructorReturn(this, (KeepObserverWebSignConfig.__proto__ || Object.getPrototypeOf(KeepObserverWebSignConfig)).call(this));

        var webSignConfigCustom = config.webSignConfigCustom || {};
        _this._config = tool.extend(_defaultConfig2.default, webSignConfigCustom);
        //监听列表
        _this.eventListener = [];
        //flag
        _this.correspondFlag = false;
        _this.receiveSginConfigFlag = false;
        //iframe container target
        _this.sourceTarget = false;
        _this.sourceOrigin = false;
        //meeage event 
        _this.proxyMessageHandleEvent = false;
        //dom
        _this.preventDefault = true;
        _this.activeDomList = [];
        _this.selectDom = false;
        //mixin
        _this.$mixin(apiServer);
        _this.$mixin(handleServer);
        _this.$mixin(reportServer);
        _this.$mixin(checkServer);
        _this.$mixin(correspondServer);
        _this.$mixin(_index3.default);
        return _this;
    }

    //提供一个挂载入口


    _createClass(KeepObserverWebSignConfig, [{
        key: 'apply',
        value: function apply(pipe) {
            this.addReportListener(pipe.sendPipeMessage);
            return {
                $startWebSginConfig: this.startCorrespond
            };
        }
    }]);

    return KeepObserverWebSignConfig;
}(_index5.default);

exports.default = KeepObserverWebSignConfig;

/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(62),
      utf8 = __webpack_require__(5).utf8,
      isBuffer = __webpack_require__(63),
      bin = __webpack_require__(5).bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ })
/******/ ]);
});