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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
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
exports.isSymbol = isSymbol;
exports.isObject = isObject;
exports.isEmptyObject = isEmptyObject;
exports.isEmptyArray = isEmptyArray;
exports.isFunction = isFunction;
exports.isElement = isElement;
exports.isWindow = isWindow;
exports.isPlainObject = isPlainObject;
exports.toArray = toArray;
exports.toString = toString;
exports.setStorage = setStorage;
exports.getStorage = getStorage;
exports.removeStorage = removeStorage;
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
function isSymbol(value) {
    return Object.prototype.toString.call(value) == '[object Symbol]';
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
    localStorage
*/
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
                this.$error('keepObserver $mixin receive params not right');
            }
            for (var key in provider) {
                if (this[key]) {
                    continue;
                }
                this[key] = provider[key];
            }
        }
    }]);

    return KeepObserverDefault;
}();

exports.default = KeepObserverDefault;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//上报数据类型
var reportType = exports.reportType = ['unKownType', 'log', 'network', 'vue'];
//版本号
var version = exports.version = '1.1.0';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 	keepObserver 默认配置
*/

exports.default = {
    //分发队列情况下,是否允许接收消息队列加锁
    queueLock: true,
    //是否允许定时强制解锁
    timeOutUnlock: true,
    //接收消息队列默认解锁时间
    forceUnlockTime: 1000
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(0);

var tool = _interopRequireWildcard(_index3);

var _injection = __webpack_require__(25);

var injectionServer = _interopRequireWildcard(_injection);

var _receiveQueue = __webpack_require__(28);

var receiveServer = _interopRequireWildcard(_receiveQueue);

var _triggerQueue = __webpack_require__(29);

var triggerServer = _interopRequireWildcard(_triggerQueue);

var _receiveLock = __webpack_require__(27);

var queueLockServer = _interopRequireWildcard(_receiveLock);

var _preventAnomaly = __webpack_require__(26);

var preventAnomaly = _interopRequireWildcard(_preventAnomaly);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var keepObserverPipe = function (_KeepObserverDetault) {
    _inherits(keepObserverPipe, _KeepObserverDetault);

    function keepObserverPipe(keepObserver, config) {
        _classCallCheck(this, keepObserverPipe);

        //获取实例配置
        var _this = _possibleConstructorReturn(this, (keepObserverPipe.__proto__ || Object.getPrototypeOf(keepObserverPipe)).call(this));

        _this._config = config;
        //获取kp实例
        _this.$keepObserver = keepObserver;
        //消息是否在等待
        _this.waiting = false;
        //消息接收锁
        _this.receiveLock = false;

        //堆栈计数对象
        _this.stackCountBuff = {};
        //堆栈运行定时器
        _this.stackTimeFlag = false;
        //忽略对象
        _this.ignoreBuff = {};

        //消息队列
        _this.messageQueue = [];
        //管道用户监听队列
        _this.pipeUserListener = [];

        //混入自身方法
        _this.$mixin(injectionServer);
        _this.$mixin(receiveServer);
        _this.$mixin(triggerServer);
        _this.$mixin(queueLockServer);
        _this.$mixin(preventAnomaly);
        return _this;
    }

    //提供需要挂载在keepObserver上的方法


    _createClass(keepObserverPipe, [{
        key: 'apply',
        value: function apply() {
            return {
                use: this.use
            };
        }
    }]);

    return keepObserverPipe;
}(_index2.default);

//提供混合管道入口


var mixinPipe = function mixinPipe(keepObserver, config) {
    //这里不用做判断,最初的模块挂载到实例
    var Pipe = new keepObserverPipe(keepObserver, config);
    var applyInjection = Pipe.apply();
    //循环挂载到keepobserver上
    for (var key in applyInjection) {
        keepObserver[key] = function () {
            var agrs = tool.toArray(arguments);
            var fn = applyInjection[key];
            return fn.apply(Pipe, agrs);
        };
    }
};
exports.default = mixinPipe;

/***/ }),
/* 5 */,
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
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _index2 = __webpack_require__(2);

var _index3 = __webpack_require__(1);

var _index4 = _interopRequireDefault(_index3);

var _defaultConfig = __webpack_require__(3);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _index5 = __webpack_require__(4);

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeepObserver = function (_KeepObserverDetault) {
    _inherits(KeepObserver, _KeepObserverDetault);

    //构造函数
    function KeepObserver(config) {
        _classCallCheck(this, KeepObserver);

        /*******  开始本实例配置  *******/
        //获取实例配置
        var _this = _possibleConstructorReturn(this, (KeepObserver.__proto__ || Object.getPrototypeOf(KeepObserver)).call(this));

        _this._config = tool.extend(_defaultConfig2.default, config);
        //版本号
        _this._version = _index2.version;

        //混合管道
        (0, _index6.default)(_this, config);
        return _this;
    }

    return KeepObserver;
}(_index4.default);

module.exports = KeepObserver;
module.exports.default = module.exports;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixinKoInstance = exports.registerPipeListenerUser = exports.injection = exports.use = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
    receive Plug-ins Server
    params
    @Provider  type es6 class
    explan: Provider class render apply function ,apply runing return method object ,on mounted is keepObsever class 
 */
var use = exports.use = function use(Provider) {
    if (!Provider || !tool.isFunction(Provider)) {
        this.$devError('[keepObserver] use method receive provider is not right');
        return false;
    }
    //初始化注入服务
    var config = this._config;
    var providerInstalcen = new Provider(config);
    //检查注入方法是否存在存在apply,存在则加入到管道流中
    //并检查是否存在返回方法，挂载在自身中,用于对外提供
    var apply = providerInstalcen.apply;

    if (apply && tool.isFunction(apply)) {
        this.injection(providerInstalcen, apply);
    } else {
        this.$devError('[keepObserver] use method receive provider is not apply method');
        return false;
    }
};

/*
    注入管道
    params
    @scope  type object 
        explan:this指向
    @applyFn type function
        explan: apply function
 */
var injection = exports.injection = function injection(scope, applyFn) {
    var that = this;
    //check data
    if (!applyFn || !tool.isFunction(applyFn)) {
        that.$devError('[keepObserver] injection receive ApplyFn is undefined or no function');
        return false;
    }
    //cerate pipe listener
    var pipeMethod = that.registerPipeListenerUser();
    //dev method
    var devMethod = {
        $devLog: function $devLog() {
            return that.$devLog.apply(that, arguments);
        },
        $devWarn: function $devWarn() {
            return that.$devWarn.apply(that, arguments);
        },
        $devError: function $devError() {
            return that.$devError.apply(that, arguments);
        }
    };
    try {
        // runing apply
        var userRenderMethod = applyFn.call(scope, pipeMethod, devMethod);
        //mounte method
        that.mixinKoInstance(scope, userRenderMethod);
    } catch (e) {
        that.$devError('[keepObserver] injection receive ApplyFn is runing find error:' + e);
    }
};

/*
    注册管道用户方法
    params
    null
    ***********************
    return 
 */
var registerPipeListenerUser = exports.registerPipeListenerUser = function registerPipeListenerUser() {
    var that = this;
    //pipe index
    var pipeIndex = that.pipeUserListener.length;
    //pipe user obj
    var pipeUser = {
        //index
        pipeIndex: pipeIndex,
        //receiveCallBack
        receiveCallback: null,
        //send message
        sendPipeMessage: function sendPipeMessage() {
            return that.sendPipeMessage.apply(that, [pipeIndex].concat(Array.prototype.slice.call(arguments)));
        }
    };
    //add listener
    that.pipeUserListener[pipeIndex] = pipeUser;
    //register receive message listener
    pipeUser.registerRecivePipeMessage = that.registerRecivePipeMessage(pipeIndex);
    //render pipe method
    var renderMethod = {
        registerRecivePipeMessage: function registerRecivePipeMessage() {
            return pipeUser.registerRecivePipeMessage.apply(pipeUser, arguments);
        },
        sendPipeMessage: function sendPipeMessage() {
            return pipeUser.sendPipeMessage.apply(pipeUser, arguments);
        }
    };
    return renderMethod;
};

/*
    注入对象方法挂载到keepObserver中
    params
    @scope  type object 
        explan:this指向
    @renders type object
        explan:render mounted keepObserver method list
 */
var mixinKoInstance = exports.mixinKoInstance = function mixinKoInstance(scope, renders) {
    var that = this;
    if (!renders || tool.isEmptyObject(renders)) {
        that.$devWarn('[keepObserver] injection ApplyFn return Object is undefined');
        return false;
    }
    var keepObserver = that.$keepObserver;
    for (var key in renders) {
        //验证挂载方法
        var fn = renders[key];
        if (!fn || !tool.isFunction(fn)) {
            that.$devError('[keepObserver] injection ApplyFn return Object attr' + key + 'is not right');
            continue;
        }
        //是否存在同名方法
        if (keepObserver[key]) {
            that.$devError('[keepObserver] injection Discover namesake methods');
            continue;
        }
        //挂载到keepObserver 实例
        keepObserver[key] = function () {
            var agrs = tool.toArray(arguments);
            try {
                fn.apply.apply(fn, [scope].concat(_toConsumableArray(agrs)));
            } catch (e) {
                that.$devError('[keepObserver] injection  methods ' + key + ' runing find error' + e);
            }
        };
    }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resetStackCount = exports.judgeAnomaly = exports.preventStackError = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _md = __webpack_require__(37);

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//防止堆栈错误
var preventStackError = exports.preventStackError = function preventStackError(msgItem) {
    var msg = msgItem.msg,
        pipeIndex = msgItem.pipeIndex;

    if (!msg || !pipeIndex || !msg.data) {
        return true;
    }
    //是否该消息已经进入屏蔽阶段
    if (this.ignoreBuff[pipeIndex]) {
        //是否是开发环境
        if (this._config.develop) {
            this.$devError('[keepObserver] send pipe Message Maybe happend Endless loop , will ignore in the message');
        }
        return true;
    }
    //json解析成字符串加密为KEY 这里可能存在JSON转义出现错误的可能
    try {
        var key = JSON.stringify(msg.data);
    } catch (e) {
        this.$devError('[keepObserver] find error : ' + e);
        return true;
    }
    //触发计数
    if (!this.stackCountBuff[key]) {
        this.stackCountBuff[key] = 1;
    } else {
        this.stackCountBuff[key]++;
    }
    //启动定时器每秒恢复一次计数
    this.resetStackCount();
    return this.judgeAnomaly(this.stackCountBuff[key], msgItem);
};

//判断是否出现异常错误
var judgeAnomaly = exports.judgeAnomaly = function judgeAnomaly(count, msgItem) {
    var msg = msgItem.msg,
        pipeIndex = msgItem.pipeIndex;

    if (count > 15 && count < 30) {
        this.$devWarn('[keepObserver] send  pipe Message during 1000ms in Over 15 times. maybe Anomaly ');
        return false;
    }
    if (count > 30) {
        //进入屏蔽
        this.ignoreBuff[pipeIndex] = true;
        this.pipeUserListener[pipeIndex] = true;
        this.$devError('[keepObserver] send pipe Message during 1000ms in Over 30 times,maybe happend Endless loop');
        return true;
    }
    return false;
};

//恢复计数
var resetStackCount = exports.resetStackCount = function resetStackCount() {
    var that = this;
    //启动定时器每秒清理一次计数
    if (!that.stackTimeFlag) {
        that.stackTimeFlag = true;
        setTimeout(function () {
            that.stackCountBuff = {};
            that.stackTimeFlag = false;
        }, 1000);
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.closeLock = exports.openLock = exports.isLock = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//默认定时打开消息锁
var receiveTime = false;

var isLock = exports.isLock = function isLock() {
    return this.receiveLock;
};

var openLock = exports.openLock = function openLock() {
    var that = this;
    if (that.receiveLock && that._config.queueLock) {
        return false;
    }
    that.receiveLock = true;
    //是否定时强制解锁
    if (that._config.timeOutUnlock) {
        setTimeout(function () {
            that.closeLock();
        }, that._config.receiveUnlockTime);
    }
};

var closeLock = exports.closeLock = function closeLock() {
    if (!this.receiveLock) {
        return false;
    }
    //恢复定时器
    if (receiveTime) {
        cleanTimeout(receiveTime);
        receiveTime = false;
    }
    this.receiveLock = false;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.noticeListener = exports.sendPipeMessage = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//发送消息在管道内流通
var sendPipeMessage = exports.sendPipeMessage = function sendPipeMessage(pipeIndex, msg, options) {
    var that = this;
    var msgItem = {
        pipeIndex: pipeIndex,
        msg: msg,
        options: options
    };
    //是否消息队列加锁,并且防止异常消息
    if (that.isLock() || that.preventStackError(msgItem)) {
        return false;
    }
    //进入消息队列
    that.messageQueue.push(msgItem);
    //如果正在执行
    if (that.waiting) {
        return false;
    }
    //异步执行消息队列分发
    setTimeout(function () {
        //获取消息队列数组快照
        var queue = tool.extend([], that.messageQueue);
        //清空队列
        that.messageQueue = [];
        //通知监听
        noticeListener.call(that, queue);
    });
};

//通知监听
var noticeListener = exports.noticeListener = function noticeListener(queue) {
    var that = this;
    if (!tool.isArray(queue) || queue.length === 0) {
        return false;
    }
    //接收消息进入等待状态
    that.waiting = true;
    //分发处理消息
    for (var i = 0; i < queue.length; i++) {
        var _queue$i = queue[i],
            pipeIndex = _queue$i.pipeIndex,
            msg = _queue$i.msg,
            options = _queue$i.options;
        //消息分发

        that.pipeUserListener.map(function (item, index) {
            //判断是否是正确注册接收函数
            if (!item || !item.receiveCallback || !tool.isFunction(item.receiveCallback)) {
                return false;
            }
            //不允许自发自收
            if (pipeIndex === index) {
                return false;
            }
            var receiveCallback = item.receiveCallback;
            //分发
            try {
                //消息队列加锁
                that.openLock();
                //执行分发
                var result = receiveCallback(msg, options);
                //消息队列解锁
                //如果返回值是promise或者存在then将解锁放入回调
                if (result && tool.isObject(result) && (result instanceof Promise || result.then && tool.isFunction(result.then))) {
                    result.then(that.closeLock, that.closeLock);
                } else {
                    that.closeLock();
                }
            } catch (e) {
                that.closeLock();
                that.$devError('[keepObserver] use pipe message notice is runing error:' + e);
            }
        });
    }
    //等待状态结束
    that.waiting = false;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerRecivePipeMessage = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//注册管道接收数据函数
var registerRecivePipeMessage = exports.registerRecivePipeMessage = function registerRecivePipeMessage(pipeIndex) {
    var that = this;
    //修正索引
    if (that.pipeUserListener[pipeIndex].receiveCallback) {
        that.$devError('[keepObsever] register recive pipe index is Occupy');
        return false;
    }
    //返回一个闭包函数用来接收注册函数
    return function (fn, scope) {
        //接收函数
        if (!fn || !tool.isFunction(fn)) {
            that.$devError('[keepObsever] registerRecivePipeMessage method receive function is not right');
            return false;
        }
        //内部修改作用域调用
        that.pipeUserListener[pipeIndex].receiveCallback = function () {
            var agrs = tool.toArray(arguments);
            //向注册进来的接收函数发送数据
            if (scope) {
                return fn.apply(scope, agrs);
            }
            return fn.apply(undefined, _toConsumableArray(agrs));
        };
    };
};

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var MD5 = function (r) {
    function n(o) {
        if (t[o]) return t[o].exports;
        var e = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return r[o].call(e.exports, e, e.exports, n), e.l = !0, e.exports;
    }
    var t = {};
    return n.m = r, n.c = t, n.i = function (r) {
        return r;
    }, n.d = function (r, t, o) {
        n.o(r, t) || Object.defineProperty(r, t, {
            configurable: !1,
            enumerable: !0,
            get: o
        });
    }, n.n = function (r) {
        var t = r && r.__esModule ? function () {
            return r.default;
        } : function () {
            return r;
        };
        return n.d(t, "a", t), t;
    }, n.o = function (r, n) {
        return Object.prototype.hasOwnProperty.call(r, n);
    }, n.p = "", n(n.s = 4);
}([function (r, n) {
    var t = {
        utf8: {
            stringToBytes: function stringToBytes(r) {
                return t.bin.stringToBytes(unescape(encodeURIComponent(r)));
            },
            bytesToString: function bytesToString(r) {
                return decodeURIComponent(escape(t.bin.bytesToString(r)));
            }
        },
        bin: {
            stringToBytes: function stringToBytes(r) {
                for (var n = [], t = 0; t < r.length; t++) {
                    n.push(255 & r.charCodeAt(t));
                }return n;
            },
            bytesToString: function bytesToString(r) {
                for (var n = [], t = 0; t < r.length; t++) {
                    n.push(String.fromCharCode(r[t]));
                }return n.join("");
            }
        }
    };
    r.exports = t;
}, function (r, n, t) {
    !function () {
        var n = t(2),
            o = t(0).utf8,
            e = t(3),
            u = t(0).bin,
            i = function i(r, t) {
            r.constructor == String ? r = t && "binary" === t.encoding ? u.stringToBytes(r) : o.stringToBytes(r) : e(r) ? r = Array.prototype.slice.call(r, 0) : Array.isArray(r) || (r = r.toString());
            for (var f = n.bytesToWords(r), s = 8 * r.length, c = 1732584193, a = -271733879, l = -1732584194, g = 271733878, h = 0; h < f.length; h++) {
                f[h] = 16711935 & (f[h] << 8 | f[h] >>> 24) | 4278255360 & (f[h] << 24 | f[h] >>> 8);
            }f[s >>> 5] |= 128 << s % 32, f[14 + (s + 64 >>> 9 << 4)] = s;
            for (var p = i._ff, y = i._gg, v = i._hh, d = i._ii, h = 0; h < f.length; h += 16) {
                var b = c,
                    T = a,
                    x = l,
                    B = g;
                c = p(c, a, l, g, f[h + 0], 7, -680876936), g = p(g, c, a, l, f[h + 1], 12, -389564586), l = p(l, g, c, a, f[h + 2], 17, 606105819), a = p(a, l, g, c, f[h + 3], 22, -1044525330), c = p(c, a, l, g, f[h + 4], 7, -176418897), g = p(g, c, a, l, f[h + 5], 12, 1200080426), l = p(l, g, c, a, f[h + 6], 17, -1473231341), a = p(a, l, g, c, f[h + 7], 22, -45705983), c = p(c, a, l, g, f[h + 8], 7, 1770035416), g = p(g, c, a, l, f[h + 9], 12, -1958414417), l = p(l, g, c, a, f[h + 10], 17, -42063), a = p(a, l, g, c, f[h + 11], 22, -1990404162), c = p(c, a, l, g, f[h + 12], 7, 1804603682), g = p(g, c, a, l, f[h + 13], 12, -40341101), l = p(l, g, c, a, f[h + 14], 17, -1502002290), a = p(a, l, g, c, f[h + 15], 22, 1236535329), c = y(c, a, l, g, f[h + 1], 5, -165796510), g = y(g, c, a, l, f[h + 6], 9, -1069501632), l = y(l, g, c, a, f[h + 11], 14, 643717713), a = y(a, l, g, c, f[h + 0], 20, -373897302), c = y(c, a, l, g, f[h + 5], 5, -701558691), g = y(g, c, a, l, f[h + 10], 9, 38016083), l = y(l, g, c, a, f[h + 15], 14, -660478335), a = y(a, l, g, c, f[h + 4], 20, -405537848), c = y(c, a, l, g, f[h + 9], 5, 568446438), g = y(g, c, a, l, f[h + 14], 9, -1019803690), l = y(l, g, c, a, f[h + 3], 14, -187363961), a = y(a, l, g, c, f[h + 8], 20, 1163531501), c = y(c, a, l, g, f[h + 13], 5, -1444681467), g = y(g, c, a, l, f[h + 2], 9, -51403784), l = y(l, g, c, a, f[h + 7], 14, 1735328473), a = y(a, l, g, c, f[h + 12], 20, -1926607734), c = v(c, a, l, g, f[h + 5], 4, -378558), g = v(g, c, a, l, f[h + 8], 11, -2022574463), l = v(l, g, c, a, f[h + 11], 16, 1839030562), a = v(a, l, g, c, f[h + 14], 23, -35309556), c = v(c, a, l, g, f[h + 1], 4, -1530992060), g = v(g, c, a, l, f[h + 4], 11, 1272893353), l = v(l, g, c, a, f[h + 7], 16, -155497632), a = v(a, l, g, c, f[h + 10], 23, -1094730640), c = v(c, a, l, g, f[h + 13], 4, 681279174), g = v(g, c, a, l, f[h + 0], 11, -358537222), l = v(l, g, c, a, f[h + 3], 16, -722521979), a = v(a, l, g, c, f[h + 6], 23, 76029189), c = v(c, a, l, g, f[h + 9], 4, -640364487), g = v(g, c, a, l, f[h + 12], 11, -421815835), l = v(l, g, c, a, f[h + 15], 16, 530742520), a = v(a, l, g, c, f[h + 2], 23, -995338651), c = d(c, a, l, g, f[h + 0], 6, -198630844), g = d(g, c, a, l, f[h + 7], 10, 1126891415), l = d(l, g, c, a, f[h + 14], 15, -1416354905), a = d(a, l, g, c, f[h + 5], 21, -57434055), c = d(c, a, l, g, f[h + 12], 6, 1700485571), g = d(g, c, a, l, f[h + 3], 10, -1894986606), l = d(l, g, c, a, f[h + 10], 15, -1051523), a = d(a, l, g, c, f[h + 1], 21, -2054922799), c = d(c, a, l, g, f[h + 8], 6, 1873313359), g = d(g, c, a, l, f[h + 15], 10, -30611744), l = d(l, g, c, a, f[h + 6], 15, -1560198380), a = d(a, l, g, c, f[h + 13], 21, 1309151649), c = d(c, a, l, g, f[h + 4], 6, -145523070), g = d(g, c, a, l, f[h + 11], 10, -1120210379), l = d(l, g, c, a, f[h + 2], 15, 718787259), a = d(a, l, g, c, f[h + 9], 21, -343485551), c = c + b >>> 0, a = a + T >>> 0, l = l + x >>> 0, g = g + B >>> 0;
            }
            return n.endian([c, a, l, g]);
        };
        i._ff = function (r, n, t, o, e, u, i) {
            var f = r + (n & t | ~n & o) + (e >>> 0) + i;
            return (f << u | f >>> 32 - u) + n;
        }, i._gg = function (r, n, t, o, e, u, i) {
            var f = r + (n & o | t & ~o) + (e >>> 0) + i;
            return (f << u | f >>> 32 - u) + n;
        }, i._hh = function (r, n, t, o, e, u, i) {
            var f = r + (n ^ t ^ o) + (e >>> 0) + i;
            return (f << u | f >>> 32 - u) + n;
        }, i._ii = function (r, n, t, o, e, u, i) {
            var f = r + (t ^ (n | ~o)) + (e >>> 0) + i;
            return (f << u | f >>> 32 - u) + n;
        }, i._blocksize = 16, i._digestsize = 16, r.exports = function (r, t) {
            if (void 0 === r || null === r) throw new Error("Illegal argument " + r);
            var o = n.wordsToBytes(i(r, t));
            return t && t.asBytes ? o : t && t.asString ? u.bytesToString(o) : n.bytesToHex(o);
        };
    }();
}, function (r, n) {
    !function () {
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            t = {
            rotl: function rotl(r, n) {
                return r << n | r >>> 32 - n;
            },
            rotr: function rotr(r, n) {
                return r << 32 - n | r >>> n;
            },
            endian: function endian(r) {
                if (r.constructor == Number) return 16711935 & t.rotl(r, 8) | 4278255360 & t.rotl(r, 24);
                for (var n = 0; n < r.length; n++) {
                    r[n] = t.endian(r[n]);
                }return r;
            },
            randomBytes: function randomBytes(r) {
                for (var n = []; r > 0; r--) {
                    n.push(Math.floor(256 * Math.random()));
                }return n;
            },
            bytesToWords: function bytesToWords(r) {
                for (var n = [], t = 0, o = 0; t < r.length; t++, o += 8) {
                    n[o >>> 5] |= r[t] << 24 - o % 32;
                }return n;
            },
            wordsToBytes: function wordsToBytes(r) {
                for (var n = [], t = 0; t < 32 * r.length; t += 8) {
                    n.push(r[t >>> 5] >>> 24 - t % 32 & 255);
                }return n;
            },
            bytesToHex: function bytesToHex(r) {
                for (var n = [], t = 0; t < r.length; t++) {
                    n.push((r[t] >>> 4).toString(16)), n.push((15 & r[t]).toString(16));
                }return n.join("");
            },
            hexToBytes: function hexToBytes(r) {
                for (var n = [], t = 0; t < r.length; t += 2) {
                    n.push(parseInt(r.substr(t, 2), 16));
                }return n;
            },
            bytesToBase64: function bytesToBase64(r) {
                for (var t = [], o = 0; o < r.length; o += 3) {
                    for (var e = r[o] << 16 | r[o + 1] << 8 | r[o + 2], u = 0; u < 4; u++) {
                        8 * o + 6 * u <= 8 * r.length ? t.push(n.charAt(e >>> 6 * (3 - u) & 63)) : t.push("=");
                    }
                }return t.join("");
            },
            base64ToBytes: function base64ToBytes(r) {
                r = r.replace(/[^A-Z0-9+\/]/gi, "");
                for (var t = [], o = 0, e = 0; o < r.length; e = ++o % 4) {
                    0 != e && t.push((n.indexOf(r.charAt(o - 1)) & Math.pow(2, -2 * e + 8) - 1) << 2 * e | n.indexOf(r.charAt(o)) >>> 6 - 2 * e);
                }return t;
            }
        };
        r.exports = t;
    }();
}, function (r, n) {
    function t(r) {
        return !!r.constructor && "function" == typeof r.constructor.isBuffer && r.constructor.isBuffer(r);
    }

    function o(r) {
        return "function" == typeof r.readFloatLE && "function" == typeof r.slice && t(r.slice(0, 0));
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
    r.exports = function (r) {
        return null != r && (t(r) || o(r) || !!r._isBuffer);
    };
}, function (r, n, t) {
    r.exports = t(1);
}]);
var MD5 = function (r) {
    function n(o) {
        if (t[o]) return t[o].exports;
        var e = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return r[o].call(e.exports, e, e.exports, n), e.l = !0, e.exports;
    }
    var t = {};
    return n.m = r, n.c = t, n.i = function (r) {
        return r;
    }, n.d = function (r, t, o) {
        n.o(r, t) || Object.defineProperty(r, t, {
            configurable: !1,
            enumerable: !0,
            get: o
        });
    }, n.n = function (r) {
        var t = r && r.__esModule ? function () {
            return r.default;
        } : function () {
            return r;
        };
        return n.d(t, "a", t), t;
    }, n.o = function (r, n) {
        return Object.prototype.hasOwnProperty.call(r, n);
    }, n.p = "", n(n.s = 4);
}([function (r, n) {
    var t = {
        utf8: {
            stringToBytes: function stringToBytes(r) {
                return t.bin.stringToBytes(unescape(encodeURIComponent(r)));
            },
            bytesToString: function bytesToString(r) {
                return decodeURIComponent(escape(t.bin.bytesToString(r)));
            }
        },
        bin: {
            stringToBytes: function stringToBytes(r) {
                for (var n = [], t = 0; t < r.length; t++) {
                    n.push(255 & r.charCodeAt(t));
                }return n;
            },
            bytesToString: function bytesToString(r) {
                for (var n = [], t = 0; t < r.length; t++) {
                    n.push(String.fromCharCode(r[t]));
                }return n.join("");
            }
        }
    };
    r.exports = t;
}, function (r, n, t) {
    !function () {
        var n = t(2),
            o = t(0).utf8,
            e = t(3),
            u = t(0).bin,
            i = function i(r, t) {
            r.constructor == String ? r = t && "binary" === t.encoding ? u.stringToBytes(r) : o.stringToBytes(r) : e(r) ? r = Array.prototype.slice.call(r, 0) : Array.isArray(r) || (r = r.toString());
            for (var f = n.bytesToWords(r), s = 8 * r.length, c = 1732584193, a = -271733879, l = -1732584194, g = 271733878, h = 0; h < f.length; h++) {
                f[h] = 16711935 & (f[h] << 8 | f[h] >>> 24) | 4278255360 & (f[h] << 24 | f[h] >>> 8);
            }f[s >>> 5] |= 128 << s % 32, f[14 + (s + 64 >>> 9 << 4)] = s;
            for (var p = i._ff, y = i._gg, v = i._hh, d = i._ii, h = 0; h < f.length; h += 16) {
                var b = c,
                    T = a,
                    x = l,
                    B = g;
                c = p(c, a, l, g, f[h + 0], 7, -680876936), g = p(g, c, a, l, f[h + 1], 12, -389564586), l = p(l, g, c, a, f[h + 2], 17, 606105819), a = p(a, l, g, c, f[h + 3], 22, -1044525330), c = p(c, a, l, g, f[h + 4], 7, -176418897), g = p(g, c, a, l, f[h + 5], 12, 1200080426), l = p(l, g, c, a, f[h + 6], 17, -1473231341), a = p(a, l, g, c, f[h + 7], 22, -45705983), c = p(c, a, l, g, f[h + 8], 7, 1770035416), g = p(g, c, a, l, f[h + 9], 12, -1958414417), l = p(l, g, c, a, f[h + 10], 17, -42063), a = p(a, l, g, c, f[h + 11], 22, -1990404162), c = p(c, a, l, g, f[h + 12], 7, 1804603682), g = p(g, c, a, l, f[h + 13], 12, -40341101), l = p(l, g, c, a, f[h + 14], 17, -1502002290), a = p(a, l, g, c, f[h + 15], 22, 1236535329), c = y(c, a, l, g, f[h + 1], 5, -165796510), g = y(g, c, a, l, f[h + 6], 9, -1069501632), l = y(l, g, c, a, f[h + 11], 14, 643717713), a = y(a, l, g, c, f[h + 0], 20, -373897302), c = y(c, a, l, g, f[h + 5], 5, -701558691), g = y(g, c, a, l, f[h + 10], 9, 38016083), l = y(l, g, c, a, f[h + 15], 14, -660478335), a = y(a, l, g, c, f[h + 4], 20, -405537848), c = y(c, a, l, g, f[h + 9], 5, 568446438), g = y(g, c, a, l, f[h + 14], 9, -1019803690), l = y(l, g, c, a, f[h + 3], 14, -187363961), a = y(a, l, g, c, f[h + 8], 20, 1163531501), c = y(c, a, l, g, f[h + 13], 5, -1444681467), g = y(g, c, a, l, f[h + 2], 9, -51403784), l = y(l, g, c, a, f[h + 7], 14, 1735328473), a = y(a, l, g, c, f[h + 12], 20, -1926607734), c = v(c, a, l, g, f[h + 5], 4, -378558), g = v(g, c, a, l, f[h + 8], 11, -2022574463), l = v(l, g, c, a, f[h + 11], 16, 1839030562), a = v(a, l, g, c, f[h + 14], 23, -35309556), c = v(c, a, l, g, f[h + 1], 4, -1530992060), g = v(g, c, a, l, f[h + 4], 11, 1272893353), l = v(l, g, c, a, f[h + 7], 16, -155497632), a = v(a, l, g, c, f[h + 10], 23, -1094730640), c = v(c, a, l, g, f[h + 13], 4, 681279174), g = v(g, c, a, l, f[h + 0], 11, -358537222), l = v(l, g, c, a, f[h + 3], 16, -722521979), a = v(a, l, g, c, f[h + 6], 23, 76029189), c = v(c, a, l, g, f[h + 9], 4, -640364487), g = v(g, c, a, l, f[h + 12], 11, -421815835), l = v(l, g, c, a, f[h + 15], 16, 530742520), a = v(a, l, g, c, f[h + 2], 23, -995338651), c = d(c, a, l, g, f[h + 0], 6, -198630844), g = d(g, c, a, l, f[h + 7], 10, 1126891415), l = d(l, g, c, a, f[h + 14], 15, -1416354905), a = d(a, l, g, c, f[h + 5], 21, -57434055), c = d(c, a, l, g, f[h + 12], 6, 1700485571), g = d(g, c, a, l, f[h + 3], 10, -1894986606), l = d(l, g, c, a, f[h + 10], 15, -1051523), a = d(a, l, g, c, f[h + 1], 21, -2054922799), c = d(c, a, l, g, f[h + 8], 6, 1873313359), g = d(g, c, a, l, f[h + 15], 10, -30611744), l = d(l, g, c, a, f[h + 6], 15, -1560198380), a = d(a, l, g, c, f[h + 13], 21, 1309151649), c = d(c, a, l, g, f[h + 4], 6, -145523070), g = d(g, c, a, l, f[h + 11], 10, -1120210379), l = d(l, g, c, a, f[h + 2], 15, 718787259), a = d(a, l, g, c, f[h + 9], 21, -343485551), c = c + b >>> 0, a = a + T >>> 0, l = l + x >>> 0, g = g + B >>> 0;
            }
            return n.endian([c, a, l, g]);
        };
        i._ff = function (r, n, t, o, e, u, i) {
            var f = r + (n & t | ~n & o) + (e >>> 0) + i;
            return (f << u | f >>> 32 - u) + n;
        }, i._gg = function (r, n, t, o, e, u, i) {
            var f = r + (n & o | t & ~o) + (e >>> 0) + i;
            return (f << u | f >>> 32 - u) + n;
        }, i._hh = function (r, n, t, o, e, u, i) {
            var f = r + (n ^ t ^ o) + (e >>> 0) + i;
            return (f << u | f >>> 32 - u) + n;
        }, i._ii = function (r, n, t, o, e, u, i) {
            var f = r + (t ^ (n | ~o)) + (e >>> 0) + i;
            return (f << u | f >>> 32 - u) + n;
        }, i._blocksize = 16, i._digestsize = 16, r.exports = function (r, t) {
            if (void 0 === r || null === r) throw new Error("Illegal argument " + r);
            var o = n.wordsToBytes(i(r, t));
            return t && t.asBytes ? o : t && t.asString ? u.bytesToString(o) : n.bytesToHex(o);
        };
    }();
}, function (r, n) {
    !function () {
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            t = {
            rotl: function rotl(r, n) {
                return r << n | r >>> 32 - n;
            },
            rotr: function rotr(r, n) {
                return r << 32 - n | r >>> n;
            },
            endian: function endian(r) {
                if (r.constructor == Number) return 16711935 & t.rotl(r, 8) | 4278255360 & t.rotl(r, 24);
                for (var n = 0; n < r.length; n++) {
                    r[n] = t.endian(r[n]);
                }return r;
            },
            randomBytes: function randomBytes(r) {
                for (var n = []; r > 0; r--) {
                    n.push(Math.floor(256 * Math.random()));
                }return n;
            },
            bytesToWords: function bytesToWords(r) {
                for (var n = [], t = 0, o = 0; t < r.length; t++, o += 8) {
                    n[o >>> 5] |= r[t] << 24 - o % 32;
                }return n;
            },
            wordsToBytes: function wordsToBytes(r) {
                for (var n = [], t = 0; t < 32 * r.length; t += 8) {
                    n.push(r[t >>> 5] >>> 24 - t % 32 & 255);
                }return n;
            },
            bytesToHex: function bytesToHex(r) {
                for (var n = [], t = 0; t < r.length; t++) {
                    n.push((r[t] >>> 4).toString(16)), n.push((15 & r[t]).toString(16));
                }return n.join("");
            },
            hexToBytes: function hexToBytes(r) {
                for (var n = [], t = 0; t < r.length; t += 2) {
                    n.push(parseInt(r.substr(t, 2), 16));
                }return n;
            },
            bytesToBase64: function bytesToBase64(r) {
                for (var t = [], o = 0; o < r.length; o += 3) {
                    for (var e = r[o] << 16 | r[o + 1] << 8 | r[o + 2], u = 0; u < 4; u++) {
                        8 * o + 6 * u <= 8 * r.length ? t.push(n.charAt(e >>> 6 * (3 - u) & 63)) : t.push("=");
                    }
                }return t.join("");
            },
            base64ToBytes: function base64ToBytes(r) {
                r = r.replace(/[^A-Z0-9+\/]/gi, "");
                for (var t = [], o = 0, e = 0; o < r.length; e = ++o % 4) {
                    0 != e && t.push((n.indexOf(r.charAt(o - 1)) & Math.pow(2, -2 * e + 8) - 1) << 2 * e | n.indexOf(r.charAt(o)) >>> 6 - 2 * e);
                }return t;
            }
        };
        r.exports = t;
    }();
}, function (r, n) {
    function t(r) {
        return !!r.constructor && "function" == typeof r.constructor.isBuffer && r.constructor.isBuffer(r);
    }

    function o(r) {
        return "function" == typeof r.readFloatLE && "function" == typeof r.slice && t(r.slice(0, 0));
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
    r.exports = function (r) {
        return null != r && (t(r) || o(r) || !!r._isBuffer);
    };
}, function (r, n, t) {
    r.exports = t(1);
}]);

exports.default = MD5;

/***/ })
/******/ ]);
});
//# sourceMappingURL=keepObserver.js.map