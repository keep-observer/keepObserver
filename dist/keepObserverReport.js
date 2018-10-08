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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
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

/***/ 2:
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

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.$setCustomeReportData = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
    	接受自定义上报内容
    	model1: arguments[0]  type object  
    	model2: arguments[0]  type boolean  
    			will extend preData  arguments[...]=extend data
    	合并到this._customeInfo中
     */
var $setCustomeReportData = exports.$setCustomeReportData = function $setCustomeReportData(params) {
    var that = this;
    //判断数据正确性
    var args = tool.toArray(arguments);
    if (!args || args.length === 0) {
        return false;
    }
    if (!that._customeInfo) {
        that._customeInfo = {};
    }
    var params = args[0];
    //如果是普通添加
    if (tool.isObject(params) && !tool.isEmptyObject(params)) {
        //设置用户自定义上报内容
        that._customeInfo = tool.extend(that._customeInfo, params);
        return false;
    }
    //如果是修改并覆盖之前的数据
    if (tool.isBoolean(params) && params && args.length > 1) {
        params = args.slice(1, args.length);
        params.map(function (item) {
            if (tool.isObject(item) && !tool.isEmptyObject(item)) {
                that._customeInfo = tool.extend(that._customeInfo, item);
            }
        });
    }
};

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _$observer_Type$max_c;

var _index = __webpack_require__(2);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (_$observer_Type$max_c = {
    /******************** 公共相关配置 *******************/
    //上报的类型
    $observer_Type: _index.reportType,
    //如果取不到缓存长度的默认长度
    max_cache: 3,

    /******** observer-network相关配置   *********/
    //默认network数组缓存长度
    max_network_cache: 3,

    /******** observer-log相关配置   *********/
    //默认log数组缓存长度
    max_log_cache: 5,
    //默认vue数组缓存长度
    max_vue_cache: 1
}, _defineProperty(_$observer_Type$max_c, 'max_network_cache', 3), _defineProperty(_$observer_Type$max_c, 'reportUrl', false), _defineProperty(_$observer_Type$max_c, 'onReportFail', false), _defineProperty(_$observer_Type$max_c, 'onReportBeforeSetUrl', false), _defineProperty(_$observer_Type$max_c, 'onReportBeforeSetHead', false), _defineProperty(_$observer_Type$max_c, 'onReportBeforeHook', false), _defineProperty(_$observer_Type$max_c, 'onReportResultHook', false), _$observer_Type$max_c);

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._removeReportData = exports._saveReportData = exports._getReportContent = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
    receive the report data
    params  
    @object  = {
        type:  string                   //类型,observer or performance    
        typeName:  string               //类型名,vue  or log or network
        location:string                 //捕获位置
        environment:string              //运行环境信息
        data:object                     //捕获数据
        reportTime: int //捕获时间搓
    }
    @ .control null and object = {
        @ .isReport:boolean                 //是否需要上报 内部reportServer需要使用
        @ .lazy:boolean                     //是否懒上报, （手动trackExtend合并上报,或者trackExtend合并上报）,不立即上报
        @ .trackExtend:boolean              //是否合并之前保存的lazy信息一起上报
        @ .isError:boolean                  //是否是错误信息
        @ .isPerformance:boolean            //是否是性能捕获分析
        @ .preDelete:boolean                //是否删除之前的信息
        @ .ignore:boolean                   //本条数据是否忽略
    }
*/
var _getReportContent = exports._getReportContent = function _getReportContent(params, control) {
    //判断数据合法性
    if (!params || !params.type || !params.typeName || !params.data || !tool.isObject(params.data)) {
        this.$devLog('[keepObserver] reportServer receive reportData is not right');
        return false;
    }
    if (!control) {
        this.$deveWarn('[keepObserver] reportServer receive pipeDate control options is  undefined');
        return false;
    }
    //是否是开发模式需要打印
    if (this.develop && this.developGetMsgLog) {
        var log = tool.extend({}, params);
        log.title = '[keepObserver] get' + log.type + 'type:' + log.typeName + " of monitor data";
        this.$devLog(log);
    }
    //是否删除之前保存的数据
    if (params.type === 'observer' && control.preDelete) {
        this._removeReportData(params.typeName);
    }
    //是否忽略本条数据
    if (control.ignore) {
        return false;
    }
    //是否懒上报
    if (params.type === 'observer' && control.lazy) {
        this._saveReportData(params);
        return false;
    }
    if (control.isReport) {
        //上报
        this._handleReport(params, control);
    }
};

/* 
	保存处理上报数据
	params type object
	@ .typeName string   	  (no null)	      上报类型名
	@ .data  array or object  (no null) 	  上报内容
	@ .lazy bollen          				  是延时上报(由手动上传合并上报或者又下一次该上报合并上报) 不传立即上报
	**********************************
	# return  当前保存数据长度
 */
var _saveReportData = exports._saveReportData = function _saveReportData(params) {
    var type = params.typeName;
    //如果没有该上报类型,那么属于未知内容
    if (!this.reportData[type]) {
        type = 'unKownType';
    }
    var reportData = this.reportData[type];
    //是否延时上报,如果没有添加到上报数据中
    var maxCache = this.$report_config['max_' + type + '_cache'];
    maxCache = maxCache ? maxCache : this.$report_config['max_cache'];
    //如果当前存储超过长度 那么弹出最早的数据
    if (reportData.length + 1 > maxCache) {
        var discard = reportData.shift();
        //开发模式打印
        if (this.develop && this.develogDiscardLog) {
            discard.title = '[keepObserver] observer ' + type + 'type monitor data overstep cache limit will discard';
            this.$devLog(discard);
        }
    }
    reportData.push(params);
    this.reportData[type] = reportData;
    //保存到locationStorage中
    tool.setStorage(type, reportData);
};

/*
	删除保存的上报数据
	@params type string    上报类型
*/
var _removeReportData = exports._removeReportData = function _removeReportData(type) {
    if (this.reportData[type]) {
        this.reportData[type] = [];
        tool.removeStorage(type);
        //开发模式下打印
        if (this.develop && this.develogDeleteLog) {
            this._$devLog('[keepObserver] observer ' + type + 'type Of monitor data is clean up');
        }
    }
};

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._handleReportFail = exports._handleHook = exports._createReportData = exports._handleReport = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _ajax = __webpack_require__(35);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
    处理上报
    params:
    @params  = {
        type:  string                   //类型,observer or performance    
        typeName:  string               //类型名,vue  or log or network
        location:string                 //捕获位置
        environment:string              //运行环境信息
        data:object                     //捕获数据
        reportTime: int                 //捕获时间搓
    }
    @.control = {
        @ .isReport:boolean                 //是否需要上报 内部reportServer需要使用
        @ .lazy:boolean                     //是否懒上报, （手动trackExtend合并上报,或者trackExtend合并上报）,不立即上报
        @ .trackExtend:boolean              //是否合并之前保存的lazy信息一起上报
        @ .isError:boolean                  //是否是错误信息
        @ .isPerformance:boolean            //是否是性能捕获分析
        @ .preDelete:boolean                //是否删除之前的信息
        @ .ignore:boolean                   //本条数据是否忽略
    }
 */
var _handleReport = exports._handleReport = function _handleReport(params, control) {
    var that = this;
    //如果未传入数据类型
    if (!params || !control || !tool.isObject(params) || !tool.isObject(control)) {
        return false;
    }
    //获得上传数据
    var reportData = that._createReportData(params, control);
    //上传到服务器
    var _$report_config = this.$report_config,
        reportUrl = _$report_config.reportUrl,
        onReportFail = _$report_config.onReportFail,
        onReportBeforeSetUrl = _$report_config.onReportBeforeSetUrl,
        onReportBeforeSetHead = _$report_config.onReportBeforeSetHead,
        onReportBeforeHook = _$report_config.onReportBeforeHook,
        onReportResultHook = _$report_config.onReportResultHook;
    //如果没有设置上传URL 那么停止上传

    if (!reportUrl || !tool.isArray(reportUrl)) {
        that._handleReportFail(onReportFail, reportData, null);
        return false;
    }
    //遍历URL上传列表
    //开始依次上传
    reportUrl.map(function (item) {
        var reportConfig = {};
        //是否有上传前修改URL回调
        if (onReportBeforeSetUrl) {
            var url = that._handleHook(onReportBeforeSetUrl, item);
        } else {
            url = item;
        }
        if (!tool.isString(url)) {
            that._handleReportFail(onReportFail, reportData, null);
            return false;
        }
        reportConfig.url = url;
        //获取自定义请求头
        var customeHead = onReportBeforeSetHead ? that._handleHook(onReportBeforeSetHead, item) : false;
        if (customeHead && tool.isObject(customeHead) && !tool.isEmptyObject(customeHead)) {
            reportConfig.customeHead = customeHead;
        }
        //获取请求
        reportConfig.data = reportData;
        that._handleHook(onReportBeforeHook, reportData, reportConfig.url, reportConfig.customeHead);
        //上传到服务器
        try {
            (0, _ajax2.default)(reportConfig).then(function (result) {
                that._handleHook(onReportResultHook, result.data, reportConfig.url, result.head);
            }, function (err) {
                that._handleReportFail(onReportFail, reportData, reportConfig.url);
            });
        } catch (err) {
            //上传报错
            that.$devError('report Server Process find error:' + err);
        }
        //end
    });
    // map url end
};

/*
    生成上报数据头
    params:
    @params  = {
        type:  string                   //类型,observer or performance    
        typeName:  string               //类型名,vue  or log or network
        location:string                 //捕获位置
        environment:string              //运行环境信息
        data:object                     //捕获数据
        reportTime: int //捕获时间搓
    }
    @.control = {
        @ .isReport:boolean                 //是否需要上报 内部reportServer需要使用
        @ .lazy:boolean                     //是否懒上报, （手动trackExtend合并上报,或者trackExtend合并上报）,不立即上报
        @ .trackExtend:boolean              //是否合并之前保存的lazy信息一起上报
        @ .isError:boolean                  //是否是错误信息
        @ .isPerformance:boolean            //是否是性能捕获分析
        @ .preDelete:boolean                //是否删除之前的信息
        @ .ignore:boolean                   //本条数据是否忽略
    }
    *****************************************************
    return
    reportData {
        //以下参数必定存在
        @.reportType string                 上报的具体类型名
        @.project string                    上报项目名
        @.projectVersion string             上报项目版本
        @.reportTime number                 上报时间时间搓
        @.data  object                      上报内容
        @.environment string                上报项目运行环境
        //一下参数可能存在
        @.customeInfo all                   用户自定义设置上传参数
        @.preTrackData object               合并之前保存的监控数据对象
    }
*/
var _createReportData = exports._createReportData = function _createReportData(params, control) {
    var that = this;
    var reportData = {};
    //添加类型
    reportData.reportType = params.typeName;
    reportData.isMonitorError = params.type === 'observer' ? true : false;
    reportData.isPerformance = params.type === 'performance' ? true : false;
    //基本信息
    reportData.project = that._project;
    reportData.projectVersion = that._projectVersion;
    reportData.reportTime = params.reportTime;
    reportData.environment = params.environment;
    reportData.data = params.data;
    //处理自定义信息
    if (that._customeInfo) {
        reportData.customeInfo = tool.extend({}, that._customeInfo);
    }
    //处理上报数据是否合并上报
    if (control.trackExtend) {
        reportData.preTrackData = {};
        for (var key in that.reportData) {
            var value = that.reportData[key];
            if (tool.isArray(value) && value.length > 0) {
                reportData.preTrackData[key] = tool.extend({}, value);
                //删除相关数据
                that._removeReportData(key);
            }
        }
        //修正数据
        reportData.preTrackData = tool.isEmptyObject(reportData.preTrackData) ? null : reportData.preTrackData;
    }
    //开发模式下打印上报数据
    if (that.develop) {
        var log = tool.extend({}, reportData);
        log.title = params.type + " type " + params.typeName + " will report Server,report Data in the data ";
        that.$devLog(log);
    }
    return reportData;
};

/*
	调用钩子
	@arguments[0] = onHooK
	@arguments[...] = params
	return
		onHook result
 */
var _handleHook = exports._handleHook = function _handleHook() {
    var args = tool.toArray(arguments);
    if (!args || args.length === 0 || !tool.isFunction(args[0])) {
        return false;
    }
    var onHook = args[0];
    var params = args.slice(1, args.length);
    try {
        var result = onHook(params);
    } catch (err) {
        //报错
        this.$devError(onHook.name + 'callback hook is runing error:' + err);
    }
    return result;
};

/*  
	处理上传失败
	params
		onFail      function        	失败的回调 没有则忽略直接跳过
		reportData 	obj or arr          需要上传的数据
		reportUrl 	string     			上传的url地址 (有可能存在)
 */
var _handleReportFail = exports._handleReportFail = function _handleReportFail(onFail, reportData, reportUrl) {
    if (!onFail) {
        return false;
    }
    try {
        onFail(reportData, reportUrl);
    } catch (e) {
        this.$devError('report Server callback hook is runing error:' + err);
    }
};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
	处理url挂载参数
	handle url paramns
 */
var handleUrlParams = function handleUrlParams(url, params) {
    if (url.indexOf('?') === -1) {
        url += '?';
    } else {
        url += url.indexOf('&') === -1 ? '&' : '';
    }
    for (var key in params) {
        url += key + '=';
        url += params[key].toString() + '&';
    }
    url = url.substring(0, url.length - 1);
    return url;
};

/*

 	report data Ajax request
	上报ajax请求  
	params
		config = {
			url: 			上报url 				report url
			data:  			上报数据 				report data
			params: 		上报url上是否挂载参数 	report url on params
			customeHead:    上报自定义请求头     	report custome request header
		}
	return 
		Promise
 */
var AjaxServer = function AjaxServer(config) {
    //创建一个Promise回调
    //new Promise
    var defer = new Promise(function (res, rej) {
        var url = config.url,
            data = config.data,
            params = config.params,
            customeHead = config.customeHead;

        var resHead = {};
        //judge data
        if (!url || !data) {
            rej('report data fail, report url and report data is exist undefined!');
            return false;
        }
        //can is use params
        if (params && tool.isObject(params)) {
            url = handleUrlParams(url, params);
        }

        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        //handle request header flag
        var xhrHead = {
            'Content-Type': 'application/json;charset=UTF-8'
        };
        if (customeHead && tool.isObject(customeHead)) {
            xhrHead = tool.extend(xhrHead, customeHead);
        }
        xhrHead['keepObserver-reportAjax'] = 'yes';
        for (var key in xhrHead) {
            xhr.setRequestHeader(key, xhrHead[key]);
        }
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState == 4) {
                //防止跨域等问题  触发错误导致死循环
                //Prevent problems such as cross-domain triggering errors that lead to dead loops
                try {
                    //handle response headers
                    if (xhr && xhr.getAllResponseHeaders) {
                        var header = xhr.getAllResponseHeaders() || '',
                            headerArr = header.split("\n");

                        //get data
                        for (var i = 0; i < headerArr.length; i++) {
                            var line = headerArr[i];
                            if (!line) {
                                continue;
                            }
                            var arr = line.split(': ');
                            var _key = arr[0],
                                value = arr.slice(1).join(': ');
                            resHead[_key] = value;
                        }
                    }
                    if (xhr.status == 200) {
                        var result = {
                            head: resHead,
                            data: xhr.responseText
                        };
                        res(result);
                    } else {
                        rej('Ajax request process find error! error status code:' + xhr.status);
                    }
                } catch (e) {
                    rej('Ajax request process find error!' + e);
                }
                //end
            }
        };
        xhr.onerror = function (e) {
            rej('Ajax request process find error!' + e);
        };
        //send data
        var data = JSON.stringify(data);
        xhr.send(data);
    });
    return defer;
};

exports.default = AjaxServer;

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(2);

var _defaultConfig = __webpack_require__(21);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _index4 = __webpack_require__(0);

var tool = _interopRequireWildcard(_index4);

var _api = __webpack_require__(20);

var apiServer = _interopRequireWildcard(_api);

var _handle = __webpack_require__(22);

var handleServer = _interopRequireWildcard(_handle);

var _report = __webpack_require__(23);

var reportServer = _interopRequireWildcard(_report);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// report Server 
var KeepObserverReport = function (_KeepObserverDefault) {
    _inherits(KeepObserverReport, _KeepObserverDefault);

    //constructor
    function KeepObserverReport(config) {
        _classCallCheck(this, KeepObserverReport);

        //存混合配置
        var _this = _possibleConstructorReturn(this, (KeepObserverReport.__proto__ || Object.getPrototypeOf(KeepObserverReport)).call(this, config));

        var reportConfig = config.reportCustom || {};
        //是否是开发模式
        reportConfig.develop = config.develop ? true : false;
        //开发环境下获取报文是否打印
        reportConfig.developGetMsgLog = config.developGetMsgLog ? true : false;
        //开发环境下丢弃数据 是否打印出来
        reportConfig.develogDiscardLog = config.develogDiscardLog ? true : false;
        //开发环境下删除出数据 是否打印出来
        reportConfig.develogDeleteLog = config.develogDeleteLog ? true : false;
        //混合默认配置
        _this.$report_config = tool.extend(_defaultConfig2.default, reportConfig);
        //上传数据保存
        _this.reportData = {};
        //用户自定义上传参数
        _this._customeInfo = false;
        //项目
        _this._project = config.project || 'unKnow';
        //项目版本
        _this._projectVersion = config.projectVersion || 'unknow-version';

        //当前是否处于开发模式
        _this.develop = _this.$report_config.develop;
        _this.developGetMsgLog = _this.$report_config.developGetMsgLog;
        _this.develogDeleteLog = _this.$report_config.develogDeleteLog;
        _this.develogDiscardLog = _this.$report_config.develogDiscardLog;

        //混入自身方法
        _this.$mixin(apiServer);
        _this.$mixin(handleServer);
        _this.$mixin(reportServer);
        //初始化
        _this._init();
        return _this;
    }
    /*
        初始化上报类参数
        复制this.reportData并从strong里面复原数据
     */


    _createClass(KeepObserverReport, [{
        key: '_init',
        value: function _init() {
            var that = this;
            //初始化this.reportData
            var handleType = that.$report_config.$observer_Type;
            handleType.forEach(function (type) {
                var cacheData = tool.getStorage(type);
                that.reportData[type] = [];
                if (cacheData) {
                    that.reportData[type] = cacheData;
                }
            });
        }
        /*
            提供一个挂载方法在注入中使用
            return 
                $getCustomeReport
         */

    }, {
        key: 'apply',
        value: function apply(pipe, dev) {
            var that = this;
            pipe.registerRecivePipeMessage(that._getReportContent, that);
            return {
                $setCustomeReportData: this.$setCustomeReportData
            };
        }
    }]);

    return KeepObserverReport;
}(_index2.default);

exports.default = KeepObserverReport;

/***/ })

/******/ });
});
//# sourceMappingURL=keepObserverReport.js.map