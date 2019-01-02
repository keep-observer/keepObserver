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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
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
                this[key] = provider[key];
            }
        }
    }]);

    return KeepObserverDefault;
}();

exports.default = KeepObserverDefault;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});


/*
 	实例默认配置数据
 */
exports.default = {
	//是否初始化就启动,并且从配置中读取分析参数
	initBegine: false,
	//延时分发时间
	timeoutDispatchEvent: 200
};

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDomTitle = exports.handleAnalyseDomList = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var CN_CodeReg = /[\u4e00-\u9fa5\w]/ig;
var Clear_CN_CodeReg = /[^\u4e00-\u9fa5\w]/ig;

var domIndex = 1;
var repeatIndex = 1;

//处理监听DOM事件
var handleAnalyseDomList = exports.handleAnalyseDomList = function handleAnalyseDomList(analyseDomList, activeFn) {
    var that = this;
    var newAnalyseDomList = {};
    var statusBuff = {};
    //for start
    analyseDomList.forEach(function (item) {
        //check type
        if (!tool.isString(item) && !tool.isElement(item)) {
            that.$devError('[keepObserver] analyseServer simpleH5 config analyseDomList item is not string or not domElement');
            return false;
        }
        var el = tool.isElement(item) ? item : document.querySelector(item);
        if (!el || !tool.isElement(el)) {
            that.$devError('[keepObserver] analyseServer simpleH5 config analyseDomList item is not find domElement');
            return false;
        }
        //handle el
        var title = that.getDomTitle(el);
        if (newAnalyseDomList[title]) {
            title += '-' + repeatIndex;
            repeatIndex++;
        }
        statusBuff[title] = false;
        //register actice use event
        var destroyEvent = that.registerAnalyseDomEvent(el, function (event) {
            statusBuff[title] = true;
            if (activeFn && tool.isFunction(activeFn)) {
                activeFn(event);
            }
        });
        var getActiveStauts = function getActiveStauts(title) {
            return function () {
                return statusBuff[title];
            };
        };
        //return dom
        newAnalyseDomList[title] = {
            destroyEvent: destroyEvent,
            getActiveStauts: getActiveStauts(title)
        };
    });
    //end
    return newAnalyseDomList;
};

//获取dom-title标记
var getDomTitle = exports.getDomTitle = function getDomTitle(el) {
    var type = el.tagName.toLowerCase();
    var content = '';
    //获取内容
    if (el.outerText && CN_CodeReg.test(el.outerText)) {
        content = el.outerText;
        content = content.replace(Clear_CN_CodeReg, '');
    } else if (el.textContent && CN_CodeReg.test(el.textContent)) {
        content = el.textContent.replace(Clear_CN_CodeReg, '');
    } else if (el.className !== '') {
        content = '.' + el.className;
    } else {
        content = domIndex;
        domIndex++;
    }
    return type + ':' + content;
};

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.registerAnalyseDomEvent = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _tool = __webpack_require__(4);

var assist = _interopRequireWildcard(_tool);

var _constant = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//注册相关DOM埋点检测事件服务
var registerAnalyseDomEvent = exports.registerAnalyseDomEvent = function registerAnalyseDomEvent(el, fn) {
	var that = this;
	var type = el.tagName.toLowerCase();
	var timeoutDispatchEvent = that._config.timeoutDispatchEvent;
	//修正激活元素的事件
	var event = 'click';
	if (type === 'input' || type === 'textarea' || type === 'select') {
		event = 'change';
	}
	var dispatchFlag = false;
	//handle other event
	var handleEvent = function handleEvent(event) {
		if (event.stopImmediatePropagation && el.dispatchEvent) {
			if (!dispatchFlag) {
				setTimeout(function () {
					el.dispatchEvent(event);
				}, timeoutDispatchEvent);
				fn();
				dispatchFlag = true;
				event.stopImmediatePropagation();
			} else {
				setTimeout(function () {
					dispatchFlag = false;
				});
			}
		} else {
			fn();
		}
	};
	//set event observer
	el.addEventListener(event, handleEvent);
	//return destroyEvent
	return function () {
		if (el && tool.isElement(el)) {
			el.removeEventListener(event, handleEvent);
		}
		event = null;
		type = null;
	};
};

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createReportData = exports.triggerInitReport = exports.triggerAcitveReport = exports.destroy = exports.begine = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _tool = __webpack_require__(4);

var assist = _interopRequireWildcard(_tool);

var _constant = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var nowDate = assist.createDataRecord();

//开始
var begine = exports.begine = function begine(config) {
    var that = this;
    var analyseDomList = config.analyseDomList;
    //handle dom list

    if (analyseDomList || tool.isArray(analyseDomList)) {
        that.analyseDomList = that.handleAnalyseDomList(analyseDomList, function (event) {
            that.triggerAcitveReport(event);
        });
    } else {
        that.$devWarn('[keepObserver] analyseServer simpleH5 is analyse dom list is no exist or is no arrayType');
    }
    //reset report data and init report
    that.triggerInitReport();
};

//销毁
var destroy = exports.destroy = function destroy() {
    if (!tool.isEmptyObject(this.analyseDomList)) {
        for (var key in this.analyseDomList) {
            var item = this.analyseDomList[key];
            if (item.destroyEvent && tool.isFunction(item.destroyEvent)) {
                item.destroyEvent();
            }
        }
    }
    this.analyseDomList = {};
};

//监控dom激活触发
var triggerAcitveReport = exports.triggerAcitveReport = function triggerAcitveReport(event) {
    var event = event || window.event;
    var el = event.target;
    var nodeName = el.nodeName.toLowerCase();
    var timeoutDispatchEvent = this._config.timeoutDispatchEvent;
    //如果是a标签类型,并且携带href，那么不跳转,延时跳转
    if (nodeName === 'a' && el.href) {
        var url = el.href;
        event.preventDefault();
        setTimeout(function () {
            window.location.href = url;
        }, timeoutDispatchEvent);
    }
    //上报
    this.reportData = this.createReportData();
    this.noticeReport(this.reportData);
};

//初始化上报
var triggerInitReport = exports.triggerInitReport = function triggerInitReport() {
    //尝试读取缓存数据
    var saveRecord = tool.getStorage(_constant.RecordKey);
    var backStageFlag = tool.getSessionStorage(_constant.exitBackstageFlag);
    var dateRecord = tool.getStorage(_constant.RecordDataKey);
    if (saveRecord) {
        this.reportData = tool.extend(this.reportData, saveRecord);
    }
    if (!backStageFlag) {
        this.reportData.repeatCount += 1;
        this.reportData.repeatCountAll += 1;
        this.reportData = this.createReportData();
        this.noticeReport(this.reportData);
        tool.setSessionStorage(_constant.exitBackstageFlag, true);
    }
    // update now day data
    if (!dateRecord) {
        tool.setStorage(_constant.RecordDataKey, nowDate);
    } else if (parseInt(dateRecord) < nowDate) {
        this.reportData.repeatCount = 0;
        if (!tool.isEmptyObject(this.reportData.useActives)) {
            for (var key in this.reportData.useActives) {
                this.reportData.useActives[key].activeCount = 0;
            }
        }
        tool.setStorage(_constant.RecordDataKey, nowDate);
    }
};

//创建上报数据
var createReportData = exports.createReportData = function createReportData() {
    var that = this;
    var reportData = this.reportData;
    // handle dom observer info
    if (!tool.isEmptyObject(this.analyseDomList)) {
        for (var key in this.analyseDomList) {
            var item = this.analyseDomList[key];
            // no exist
            if (!reportData.useActives[key]) {
                reportData.useActives[key] = {
                    activeCount: item.getActiveStauts() ? 1 : 0,
                    activeCountAll: item.getActiveStauts() ? 1 : 0
                };
            } else if (tool.isExist(reportData.useActives[key].activeCount)) {
                if (item.getActiveStauts()) {
                    reportData.useActives[key].activeCount += 1;
                    reportData.useActives[key].activeCountAll += 1;
                }
            } else {
                reportData.useActives[key].activeCount = 0;
                reportData.useActives[key].activeCountAll = 0;
            }
        }
    }
    //save storage
    tool.setStorage(_constant.RecordKey, reportData);
    return reportData;
};

/***/ }),

/***/ 14:
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
    reportParams.typeName = 'simpleH5';
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


//storge-key
var RecordKey = exports.RecordKey = 'simpleH5Analyse-' + window.location.href;
var RecordDataKey = exports.RecordDataKey = 'simpleH5AnalyseDate-' + window.location.href;
//切换后台标志
var exitBackstageFlag = exports.exitBackstageFlag = 'backstageFlag';

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isHidden = isHidden;
exports.createDataRecord = createDataRecord;


function getHiddenProp() {
    var prefixes = ['webkit', 'moz', 'ms', 'o'];
    if ('hidden' in document) return 'hidden';
    for (var i = 0; i < prefixes.length; i++) {
        if (prefixes[i] + 'Hidden' in document) return prefixes[i] + 'Hidden';
    }
    return null;
}

function isHidden() {
    var prop = getHiddenProp();
    if (!prop) return false;
    return document[prop];
}

function createDataRecord() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return parseInt(year + '' + month + '' + day);
}

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = __webpack_require__(10);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _handle = __webpack_require__(13);

var handleServer = _interopRequireWildcard(_handle);

var _api = __webpack_require__(9);

var apiServer = _interopRequireWildcard(_api);

var _report = __webpack_require__(14);

var reportServer = _interopRequireWildcard(_report);

var _event = __webpack_require__(12);

var eventServer = _interopRequireWildcard(_event);

var _dom = __webpack_require__(11);

var domServer = _interopRequireWildcard(_dom);

var _index2 = __webpack_require__(1);

var _index3 = _interopRequireDefault(_index2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//简单H5页面埋点分析
var KeepObserverSimpleH5Analyse = function (_KeepObserverDetault) {
    _inherits(KeepObserverSimpleH5Analyse, _KeepObserverDetault);

    //构造函数
    function KeepObserverSimpleH5Analyse(config) {
        _classCallCheck(this, KeepObserverSimpleH5Analyse);

        //初始化上传相关实例
        var _this = _possibleConstructorReturn(this, (KeepObserverSimpleH5Analyse.__proto__ || Object.getPrototypeOf(KeepObserverSimpleH5Analyse)).call(this));

        var simpleH5AnalyseCustom = config.simpleH5AnalyseCustom || {};
        _this._config = tool.extend(_defaultConfig2.default, simpleH5AnalyseCustom);
        //监听列表
        _this.eventListener = [];
        //需要监听的dom列表
        /*
            destroyEvent: function
            getActiveStauts: function 
            title: string
        */
        _this.analyseDomList = {};
        _this.uniqueId = tool.getUniqueID();
        /*上报内容*/
        _this.reportData = {
            id: tool.getUniqueID(), //唯一浏览器标识
            repeatCountAll: 0, //总的统计次数
            repeatCount: 0, //访问次数
            useActives: {} //行为事件

            //混合自身方法
        };_this.$mixin(handleServer);
        _this.$mixin(apiServer);
        _this.$mixin(reportServer);
        _this.$mixin(eventServer);
        _this.$mixin(domServer);
        //启动
        if (_this._config.initBegine && _this._config.begineConfig) {
            _this.startAnalyse(_this._config.begineConfig);
        }
        return _this;
    }
    //提供一个挂载入口


    _createClass(KeepObserverSimpleH5Analyse, [{
        key: 'apply',
        value: function apply(pipe) {
            this.addReportListener(pipe.sendPipeMessage);
            return {
                $simpleH5AnalyseClearSaveRecive: this.clearSaveRecive,
                $simpleH5AnalyseStop: this.stopAnalyse,
                $simpleH5AnalyseBegine: this.startAnalyse
            };
        }
    }]);

    return KeepObserverSimpleH5Analyse;
}(_index3.default);

exports.default = KeepObserverSimpleH5Analyse;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearSaveRecive = exports.startAnalyse = exports.stopAnalyse = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _constant = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
    	停止监听
*/
var stopAnalyse = exports.stopAnalyse = function stopAnalyse() {
  this.destroy();
};

/*
	开始监听
 */
var startAnalyse = exports.startAnalyse = function startAnalyse(config) {
  this.begine(config);
};

/*
	清除缓存
 */
var clearSaveRecive = exports.clearSaveRecive = function clearSaveRecive() {
  tool.removeStorage(_constant.RecordKey);
};

/***/ })

/******/ });
});