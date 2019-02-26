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
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
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

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
    	停止监听
     */
var stopObserver = exports.stopObserver = function stopObserver() {
    window.XMLHttpRequest.prototype.open = this._open;
    window.XMLHttpRequest.prototype.send = this._send;
    window.XMLHttpRequest.prototype.setRequestHeader = this._setRequestHeader;
    this._open = null;
    this._send = null;
    this.__setRequestHeader = null;
};

/*
	开始监听
 */
var startObserver = exports.startObserver = function startObserver() {
    //开启网络拦截监控
    this._handleInit();
};

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});


/*
 	observer newwork 实例默认配置数据
 */
exports.default = {
	//默认超时时间 20S;
	timeout: 20000,
	//屏蔽URL
	ignoreRequestList: false,
	//自定义判断接口返回是否正确
	onHandleJudgeResponse: false,
	//自定义处理响应数据 
	onHandleResponseData: false,
	//自定义处理请求数据
	onHandleRequestData: false

};

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._handleJudgeDisbale = exports._handleDoneXML = exports._handleTimeout = exports._handleXMLAjax = exports._handleInit = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _tool = __webpack_require__(69);

var networkTool = _interopRequireWildcard(_tool);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
    	初始化ajax请求监控
    	在这里替换window.XMLHttpRequest变量进行监控
     */
var _handleInit = exports._handleInit = function _handleInit() {
    var that = this;
    var _XMLHttp = window.XMLHttpRequest;
    //不支持 ajax 不进行监控
    if (!_XMLHttp) {
        return false;
    }
    that._open = window.XMLHttpRequest.prototype.open;
    that._send = window.XMLHttpRequest.prototype.send;
    that._setRequestHeader = window.XMLHttpRequest.prototype.setRequestHeader;
    //处理Ajax
    that._handleXMLAjax();
};

/*
	拦截XML AJax信息
 */
var _handleXMLAjax = exports._handleXMLAjax = function _handleXMLAjax() {
    var that = this;
    //拦截原生open
    window.XMLHttpRequest.prototype.open = function () {
        var XML = this;
        var args = tool.toArray(arguments);
        //定时器
        var timer = null;
        //获取请求唯一ID
        var id = tool.getUniqueID();
        //获取方法
        var method = args[0];
        //获取url
        var url = args[1];

        //保存下 在send中使用
        XML._url = url;
        XML._method = method;
        XML._id = id;
        //保存下请求头 在拦截请求头处使用
        XML._setHead = {};
        XML._setHead[id] = {};

        //拦截处理响应回调
        var _onreadystatechange = XML.onreadystatechange || function () {};
        // start onreadystatechange
        var onreadystatechange = function onreadystatechange() {
            var item = that.networkList[id] ? that.networkList[id] : false;
            //如果不存在 可能略过了send 会导致丢失部分数据
            if (!item) {
                item = {};
                //保存请求方法
                item.method = method;

                var _networkTool$handleRe = networkTool.handleReqUrl(url),
                    url = _networkTool$handleRe.url,
                    params = _networkTool$handleRe.params;
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
                    item.startTime = +new Date();
                }
            } else if (XML.readyState == 1) {
                // 打开
                if (!item.startTime) {
                    item.startTime = +new Date();
                }
            } else if (XML.readyState == 2) {
                // 发送		          	
            } else if (XML.readyState == 3) {
                //loading
            } else if (XML.readyState == 4) {
                //结束超时捕获
                that._handleTimeout(id);
                //处理响应头
                item.responseHead = {};
                var header = XML.getAllResponseHeaders() || '',
                    headerArr = header.split("\n");
                //提取数据
                for (var i = 0; i < headerArr.length; i++) {
                    var line = headerArr[i];
                    if (!line) {
                        continue;
                    }
                    var arr = line.split(': ');
                    var key = arr[0],
                        value = arr.slice(1).join(': ');
                    item.responseHead[key] = value;
                }
                //完成
                clearInterval(timer);
                item.endTime = +new Date(), item.costTime = item.endTime - (item.startTime || item.endTime) + 'ms';
                item.response = XML.response;
                //请求结束完成
                setTimeout(function () {
                    //是否是超时接口 超时的接口不做处理
                    if (!that.timeoutRequest[id]) {
                        that._handleDoneXML(id);
                    }
                });
            } else {
                clearInterval(timer);
            }
            //如果这个接口已经超时处理了 那么不记录
            if (!that.timeoutRequest[id]) {
                that.networkList[id] = item;
            }
            return _onreadystatechange.apply(XML, arguments);
        };
        XML.onreadystatechange = onreadystatechange;
        //end onreadystatechange
        //防止第三方库更改状态
        //定时查看请求状态
        var preState = -1;
        timer = setInterval(function () {
            if (preState != XML.readyState) {
                preState = XML.readyState;
                onreadystatechange.call(XML);
            }
        }, 10);
        return that._open.apply(XML, args);
    };
    //拦截原始设置请求头
    window.XMLHttpRequest.prototype.setRequestHeader = function () {
        var XML = this;
        var args = tool.toArray(arguments);
        if (XML._id && XML._setHead) {
            var setHead = XML._setHead[XML._id];
            var key = args[0] ? args[0] : 'unkownRequestHead';
            var value = args[1] ? args[1] : '';
            setHead[key] = value;
            XML._setHead[XML._id] = setHead;
        }
        return that._setRequestHeader.apply(XML, args);
    };
    //拦截原生send
    window.XMLHttpRequest.prototype.send = function () {
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
            that.networkList[id] = {};
        }
        //保存请求方法
        that.networkList[id].method = method;

        var _networkTool$handleRe2 = networkTool.handleReqUrl(url),
            url = _networkTool$handleRe2.url,
            params = _networkTool$handleRe2.params;
        //处理请求url和params


        that.networkList[id].url = url;
        that.networkList[id].params = params;
        //保存自定义请求头
        if (requestHead) {
            that.networkList[id].requestHead = tool.extend({}, requestHead);
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
    };
};

/*
	处理接口请求超时
 */
var _handleTimeout = exports._handleTimeout = function _handleTimeout(id) {
    var that = this;
    var timeout = that._config.timeout;
    var isTimeout = that.timeoutRequest[id] ? that.timeoutRequest[id] : false;
    var time = that.timeout[id] ? that.timeout[id] : false;
    var item = that.networkList[id];
    //如果不存在 不做处理
    if (!item || isTimeout) {
        return false;
    }
    if (!time) {
        //如果没有那么创建检测超时定时器
        time = setTimeout(function () {
            //接口返回超时
            item.isTimeout = true;
            item.timeout = timeout;
            item.isError = true;
            item.errorContent = 'ajax request timeout，time:' + timeout + '(ms)';
            //这里直接完成添加到超时列表 停止后续处理
            that._handleDoneXML(id);
            that.timeoutRequest[id] = true;
        }, timeout);
    } else {
        //如果存在 则说明已经回调 取消超时定时器
        clearTimeout(time);
    }
};

/*
	处理请求完成的数据
	@id:拦截请求唯一ID
 */
var _handleDoneXML = exports._handleDoneXML = function _handleDoneXML(id) {
    var that = this;
    var ajaxItem = tool.extend({}, that.networkList[id]);
    var _that$_config = that._config,
        onHandleJudgeResponse = _that$_config.onHandleJudgeResponse,
        onHandleRequestData = _that$_config.onHandleRequestData,
        onHandleResponseData = _that$_config.onHandleResponseData;
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
            ajaxItem.handleReqData = onHandleRequestData(ajaxItem);
        } catch (err) {
            ajaxItem.handleReqData = 'Custom handleRequestData find error:' + err;
        }
    }
    //判断状态码是否出错
    var status = ajaxItem.status;
    if (!networkTool.validateStatus(status) && !ajaxItem.isError) {
        ajaxItem.isError = true;
        ajaxItem.errorContent = 'ajax request error! error statusCode:' + status;
    }
    //如果存在自定义处理 响应data配置
    if (onHandleResponseData && !ajaxItem.isError) {
        try {
            ajaxItem.handleResData = onHandleResponseData(ajaxItem);
        } catch (err) {
            ajaxItem.handleResData = 'Custom handleResponseData find error:' + err;
        }
    }
    //如果存在自定义处理响应数据是否出错
    if (onHandleJudgeResponse && !ajaxItem.isError) {
        try {
            ajaxItem.isError = onHandleJudgeResponse(ajaxItem);
            if (ajaxItem.isError) {
                ajaxItem.errorContent = ajaxItem.isError;
                ajaxItem.isError = true;
            }
        } catch (err) {
            ajaxItem.isError = true;
            ajaxItem.errorContent = 'Custom handleJudgeResponse find error:' + err;
        }
    }
    //通知上传
    that.noticeReport(ajaxItem);
    //上报后删除记录
    delete that.networkList[id];
};

/*
	判断该请求是否是屏蔽请求
	params
		ajaxInfo :即将上报的数据
	return
		忽略返回 false;
		不忽略返回 true
 */
var _handleJudgeDisbale = exports._handleJudgeDisbale = function _handleJudgeDisbale(ajaxInfo) {
    var ignoreRequestList = this._config.ignoreRequestList;
    //判断是否是是屏蔽url

    if (ignoreRequestList && tool.isArray(ignoreRequestList)) {
        var url = ajaxInfo.url;
        var unReport = false;
        ignoreRequestList.forEach(function (item) {
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
    if (ajaxInfo.requestHead && ajaxInfo.requestHead['keepObserver-reportAjax']) {
        return false;
    }
    return true;
};

/***/ }),

/***/ 38:
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
    reportParams.typeName = 'network';
    reportParams.location = window.location.href;
    reportParams.environment = window.navigator.userAgent;
    reportParams.data = content;
    reportParams.reportTime = new Date().getTime();
    //option
    control.lazy = true;
    //是否请求出错
    if (content.isError) {
        control = {};
        control.lazy = false;
        control.isReport = true;
        //是否是超时请求,超时请求不合并上报
        control.trackExtend = content.isTimeout ? false : true;
        control.isError = content.isTimeout ? false : true;
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

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = __webpack_require__(36);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _handle = __webpack_require__(37);

var handleServer = _interopRequireWildcard(_handle);

var _api = __webpack_require__(35);

var apiServer = _interopRequireWildcard(_api);

var _report = __webpack_require__(38);

var reportServer = _interopRequireWildcard(_report);

var _index2 = __webpack_require__(1);

var _index3 = _interopRequireDefault(_index2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 获取系统信息
var KeepObserverNetwork = function (_KeepObserverDetault) {
    _inherits(KeepObserverNetwork, _KeepObserverDetault);

    //构造函数
    function KeepObserverNetwork(config) {
        _classCallCheck(this, KeepObserverNetwork);

        var _this = _possibleConstructorReturn(this, (KeepObserverNetwork.__proto__ || Object.getPrototypeOf(KeepObserverNetwork)).call(this));

        var networkConfig = config.networkCustom || {};
        //存混合配置
        _this._config = tool.extend(_defaultConfig2.default, networkConfig);
        //上报名
        _this._typeName = 'network';
        //监听列表
        _this.eventListener = [];
        //监控的数据列表
        //key 为 请求ID
        //value :{
        //	method:   			请求方法
        //	url:      			请求baseUrl
        //	requestHead:     	请求头
        //  responseHead:       请求响应头
        //	params:   			请求URL上携带的参数
        //	data:       		请求postData
        //	status:         	请求状态码
        //	startTime:      	请求开始时间
        //	endTime:        	请求结束时间
        //	costTime:       	请求耗时
        //	response: 			请求原始响应数据
        //	responseType    	请求响应类型
        //	handleResData:     	如果配置中传入 自定义处理响应数据 那么这里将保持处理后的响应数据
        //	handleReqData:      如果配置中传入 自定义处理发送数据 那么这里将保持处理后的发送数据
        //	isTimeout:          是否超时 如果存在这个字段 则说明已经上报,忽略处理
        //	timeout:            如果超时 这里是设置的超时时间
        //	isError:            这个请求是否出现错误
        //	errorContent:       错误信息
        //}
        _this.networkList = {};
        //替换window.XMLHttpRequest变量
        _this._open = false;
        _this._send = false;
        _this._setRequestHeader = false;
        //辅助捕获超时
        _this.timeout = {};
        _this.timeoutRequest = {};
        //混入自身方法
        _this.$mixin(handleServer);
        _this.$mixin(apiServer);
        _this.$mixin(reportServer);
        // 开启网络拦截监控
        _this.startObserver();
        return _this;
    }

    //提供一个挂载入口


    _createClass(KeepObserverNetwork, [{
        key: 'apply',
        value: function apply(pipe) {
            this.addReportListener(pipe.sendPipeMessage);
            return {
                $networkStop: this.stopObserver,
                $networkStart: this.startObserver
            };
        }
    }]);

    return KeepObserverNetwork;
}(_index3.default);

exports.default = KeepObserverNetwork;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handleReqUrl = handleReqUrl;
exports.validateStatus = validateStatus;

/*
	处理URL
	分离base url 和params
	@return {
		url:  string
		params: object or string('')
	}
 */

function handleReqUrl(url) {
    //处理下解码URL
    url = window.decodeURIComponent(url);
    var params = '';
    var baseUrl = '';
    //判断URL后面是否存在参数
    if (url.indexOf('?') === -1) {
        baseUrl = url;
    } else {
        var query = url.indexOf('?');
        baseUrl = url.substring(0, query);
        query = url.substring(query + 1, url.length);
        params = {};
        query = query.split('&'); // => ['b=c', 'd=?e']
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = query[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var q = _step.value;

                q = q.split('=');
                params[q[0]] = q[1];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return {
        url: baseUrl,
        params: params
    };
}

/*
	检查状态码是否正确
 */
function validateStatus(status) {
    return status >= 200 && status < 300;
}

/***/ })

/******/ });
});