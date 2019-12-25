(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/services/monitor/vue/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/services/monitor/vue/api.ts":
/*!*****************************************!*\
  !*** ./src/services/monitor/vue/api.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
        停止监听
*/

exports.stopObserver = function () {
  if (this._vue.config) {
    if (this._originErrorHandle) {
      this._vue.config.errorHandler = this._originErrorHandle;
      this._originErrorHandle = false;
    } else {
      this._vue.config.errorHandler = null;
    }
  }
};
/*
    开始监听
 */


exports.startObserver = function () {
  //开启vue错误监听
  this._handleInit();
};

/***/ }),

/***/ "./src/services/monitor/vue/handle.ts":
/*!********************************************!*\
  !*** ./src/services/monitor/vue/handle.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tool = __importStar(__webpack_require__(/*! ../../../util/tool */ "./src/util/tool.ts"));
/*
        开始监控vue
 */


exports._handleInit = function () {
  var _self = this;

  if (_self._vue.config) {
    if (_self._vue.config.errorHandler && tool.isFunction(_self._vue.config.errorHandler)) {
      _self._originErrorHandle = _self._vue.config.errorHandler;
    }

    _self._vue.config.errorHandler = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      _self._handleVueError.apply(_self, __spread(args));

      if (_self._originErrorHandle) {
        try {
          _self._originErrorHandle.apply(_self, __spread(args));
        } catch (e) {}
      }
    };
  }
};
/*
    处理监控vue错误信息
 */


exports._handleVueError = function (err, vm, info) {
  var _self = this;

  var errInfo = {};
  errInfo.infoMsg = tool.toString(info); //是否存在堆栈信息

  if (tool.isObject(err) && err.stack && err.message) {
    errInfo.errMsg = tool.toString(err.message);
    errInfo.stackMsg = tool.toString(err.stack);
  } else {
    errInfo.errMsg = tool.toString(err);
  }

  errInfo.isError = true; //上报

  _self.noticeReport(errInfo);
};

/***/ }),

/***/ "./src/services/monitor/vue/index.ts":
/*!*******************************************!*\
  !*** ./src/services/monitor/vue/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tool = __importStar(__webpack_require__(/*! ../../../util/tool */ "./src/util/tool.ts"));

var index_1 = __importDefault(__webpack_require__(/*! ../../../share/public/index */ "./src/share/public/index.ts"));

var api_1 = __webpack_require__(/*! ./api */ "./src/services/monitor/vue/api.ts");

var handle_1 = __webpack_require__(/*! ./handle */ "./src/services/monitor/vue/handle.ts");

var report_1 = __webpack_require__(/*! ./report */ "./src/services/monitor/vue/report.ts"); // 获取系统信息


var KeepObserverVue =
/** @class */
function (_super) {
  __extends(KeepObserverVue, _super); //构造函数


  function KeepObserverVue(config) {
    if (config === void 0) {
      config = {};
    }

    var _this = _super.call(this, config) || this; //method


    _this.stopObserver = api_1.stopObserver.bind(_this);
    _this.startObserver = api_1.startObserver.bind(_this);
    _this._handleInit = handle_1._handleInit.bind(_this);
    _this._handleVueError = handle_1._handleVueError.bind(_this);
    _this.handleReportData = report_1.handleReportData.bind(_this); //初始化上传相关实例

    var _a = config,
        _b = _a.vueCustom,
        vueCustom = _b === void 0 ? false : _b,
        _c = _a.vueInstance,
        vueInstance = _c === void 0 ? false : _c;
    var vueConfig = vueCustom || {};
    vueConfig.vueInstance = vueInstance; //判断是否存在实例

    if (vueConfig.vueInstance) {
      return _this;
    } //存混合配置


    _this._config = tool.extend({}, vueConfig); //上报名

    _this._typeName = 'vue'; //vue实例

    _this._vue = _this._config.vueInstance; // 开启vue拦截

    _this.startObserver();

    return _this;
  } //提供一个挂载入口


  KeepObserverVue.prototype.apply = function (pipe) {
    this.addReportListener(pipe.sendPipeMessage);
    return {
      $vueStop: this.stopObserver,
      $vueStart: this.startObserver
    };
  };

  return KeepObserverVue;
}(index_1["default"]);

exports["default"] = KeepObserverVue;

/***/ }),

/***/ "./src/services/monitor/vue/report.ts":
/*!********************************************!*\
  !*** ./src/services/monitor/vue/report.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); //处理整理数据

exports.handleReportData = function (content) {
  var reportParams = {
    type: "monitor",
    typeName: 'vue',
    data: content,
    location: window.location.href,
    environment: window.navigator.userAgent,
    reportTime: new Date().getTime()
  };
  var control = {}; //option

  control.lazy = true;

  if (content.isError) {
    control.lazy = false;
    control.baseExtend = true;
    control.isError = true;
    control.isReport = true;
  }

  return {
    reportParams: reportParams,
    control: control
  };
};

/***/ }),

/***/ "./src/share/middleware/index.ts":
/*!***************************************!*\
  !*** ./src/share/middleware/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var console_1 = __webpack_require__(/*! ../../util/console */ "./src/util/console.ts");

var KeepObserverMiddleWare =
/** @class */
function () {
  function KeepObserverMiddleWare(_a) {
    var _b = _a.develop,
        develop = _b === void 0 ? false : _b; //当前是否处于开发模式

    this._develop = develop; //中间件初始化

    this._middles = {}; //中间件执行过程中 禁止重复触发 loop

    this._runMiddleBuff = {};
  }

  KeepObserverMiddleWare.prototype.run = function (scopeName) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    var _self = this;

    if (!_self._middles[scopeName]) {
      console_1.warnError(scopeName + " middles function is undefined", this._develop);
      return false;
    }

    if (_self._runMiddleBuff[scopeName]) {
      console_1.devWarn(this._develop, scopeName + " middles is run");
      return false;
    }

    _self._runMiddleBuff[scopeName] = true;
    var middlesQueue = _self._middles[scopeName];
    var len = middlesQueue.length;
    var index = 1; // 中断方法，停止执行剩下的中间件,直接返回

    var interrupt = function interrupt() {
      var result = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
      }

      index = len;
      _self._runMiddleBuff[scopeName] = false;
      return result;
    }; //向下执行中间件


    var runNext = function runNext(next) {
      return function () {
        var params = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          params[_i] = arguments[_i];
        }

        if (index === len) {
          return params;
        }

        index++;
        return next.apply(void 0, __spread(params));
      };
    };

    var exec = middlesQueue.reduce(function (a, b) {
      return function () {
        var params = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          params[_i] = arguments[_i];
        }

        return a(interrupt, runNext(b.apply(void 0, __spread(params))));
      };
    });
    return exec(interrupt, interrupt).apply(void 0, __spread(args));
  };

  KeepObserverMiddleWare.prototype.use = function (scopeName, middlesFn) {
    var _self = this;

    if (_self._middles[scopeName]) {
      return _self._middles[scopeName].push(middlesFn);
    }

    _self._middles[scopeName] = [];
    return _self._middles[scopeName].push(middlesFn);
  };

  return KeepObserverMiddleWare;
}();

exports["default"] = KeepObserverMiddleWare;

/***/ }),

/***/ "./src/share/public/index.ts":
/*!***********************************!*\
  !*** ./src/share/public/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tool = __importStar(__webpack_require__(/*! ../../util/tool */ "./src/util/tool.ts"));

var console_1 = __webpack_require__(/*! ../../util/console */ "./src/util/console.ts");

var index_1 = __importDefault(__webpack_require__(/*! ../middleware/index */ "./src/share/middleware/index.ts"));

var KeepObserverPublic =
/** @class */
function () {
  function KeepObserverPublic(config) {
    if (config === void 0) {
      config = {};
    }

    var _a = config.develop,
        develop = _a === void 0 ? false : _a; //当前是否处于开发模式

    this._develop = develop; //公共中间件事件

    this._publicMiddleScopeNames = ['noticeReport']; //注册中间件实例

    this._middleWareInstance = new index_1["default"](config);
  } //注册中间件逻辑


  KeepObserverPublic.prototype.useMiddle = function (scopeName, middlesFn) {
    var _self = this;

    return _self._middleWareInstance.use(scopeName, middlesFn);
  }; //执行中间件逻辑


  KeepObserverPublic.prototype.runMiddle = function (scopeName) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    var _a;

    var _self = this;

    return (_a = _self._middleWareInstance).run.apply(_a, __spread([scopeName], args));
  }; //兼容老版本做保留,内部使用中间件替换


  KeepObserverPublic.prototype.addReportListener = function (callback) {
    var _self = this;

    if (callback) {
      var _a = __read(_self._publicMiddleScopeNames, 1),
          scopeName = _a[0]; //  1 -> 2 -> 3 -> 2 -> 1


      this.useMiddle(scopeName, function (interrupt, next) {
        return function (reportParams, control) {
          var _a;

          var resultParams = next(reportParams, control);

          if (!tool.isEmptyArray(resultParams) && resultParams.length === 2) {
            _a = __read(resultParams, 2), reportParams = _a[0], control = _a[1];
          }

          return callback(reportParams, control);
        };
      });
    }
  };

  KeepObserverPublic.prototype.noticeReport = function (reportParams, control) {
    var _self = this;

    console_1.devLog(_self._develop, reportParams, control); //执行中间件

    var _a = __read(_self._publicMiddleScopeNames, 1),
        scopeName = _a[0];

    this.runMiddle(scopeName, reportParams, control);
  };

  return KeepObserverPublic;
}();

exports["default"] = KeepObserverPublic;

/***/ }),

/***/ "./src/util/console.ts":
/*!*****************************!*\
  !*** ./src/util/console.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
var $log = window.console.log;
var $wran = window.console.warn;
var $error = window.console.error;

window.console.log = function () {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  $log.apply(window.console, args);
};

window.console.error = function () {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  $error.apply(window.console, args);
};

window.console.warn = function () {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  $wran.apply(window.console, args);
};

exports.log = $log;
exports.error = $error;
exports.wran = $wran;

exports.devLog = function (develop) {
  if (develop === void 0) {
    develop = true;
  }

  var arg = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    arg[_i - 1] = arguments[_i];
  }

  if (!develop) return;
  return exports.log.apply(void 0, __spread(["[keepObserver] log message:"], arg));
};

exports.devWarn = function (develop) {
  if (develop === void 0) {
    develop = true;
  }

  var arg = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    arg[_i - 1] = arguments[_i];
  }

  if (!develop) return;
  return exports.wran.apply(void 0, __spread(["[keepObserver] wran message:"], arg));
};

exports.warnError = function (msg, develop) {
  if (develop === void 0) {
    develop = true;
  }

  if (!develop) return;
  return exports.error("[keepObserver] find error! message: " + msg);
};

/***/ }),

/***/ "./src/util/tool.ts":
/*!**************************!*\
  !*** ./src/util/tool.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var console_1 = __webpack_require__(/*! ./console */ "./src/util/console.ts");
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

  date = date instanceof Date ? date : typeof date === 'number' || typeof date === 'string' ? new Date(date) : new Date(); //解析

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

exports.dateFormat = dateFormat;
/**
 * 检查script基本数据类型
 * @param mixed value
 * @return boolean
 */

function isNumber(value) {
  return Object.prototype.toString.call(value) == '[object Number]';
}

exports.isNumber = isNumber;

function isString(value) {
  return Object.prototype.toString.call(value) == '[object String]';
}

exports.isString = isString;

function isArray(value) {
  return Object.prototype.toString.call(value) == '[object Array]';
}

exports.isArray = isArray;

function isBoolean(value) {
  return Object.prototype.toString.call(value) == '[object Boolean]';
}

exports.isBoolean = isBoolean;

function isRegExp(value) {
  return Object.prototype.toString.call(value) == "[object RegExp]";
}

exports.isRegExp = isRegExp;

function isDateObject(value) {
  return Object.prototype.toString.call(value) == "[object Date]";
}

exports.isDateObject = isDateObject;

function isUndefined(value) {
  return value === undefined;
}

exports.isUndefined = isUndefined;

function isNull(value) {
  return value === null;
}

exports.isNull = isNull;

function isExist(value) {
  return !isUndefined(value) && !isNull(value);
}

exports.isExist = isExist;

function isSymbol(value) {
  return Object.prototype.toString.call(value) == '[object Symbol]';
}

exports.isSymbol = isSymbol;

function isSVGElement(value) {
  return isElement(value) && (value instanceof SVGElement || value.ownerSVGElement);
}

exports.isSVGElement = isSVGElement;

function isObject(value) {
  return Object.prototype.toString.call(value) == '[object Object]' || // if it isn't a primitive value, then it is a common object
  !isNumber(value) && !isString(value) && !isBoolean(value) && !isDateObject(value) && !isRegExp(value) && !isArray(value) && !isNull(value) && !isFunction(value) && !isUndefined(value) && !isSymbol(value);
}

exports.isObject = isObject;

function isEmptyObject(obj) {
  if (!isObject(obj)) {
    return true;
  }

  for (var key in obj) {
    return false;
  }

  return true;
}

exports.isEmptyObject = isEmptyObject;

function isEmptyArray(array) {
  if (!isArray(array)) {
    return true;
  }

  return array.length > 0 ? false : true;
}

exports.isEmptyArray = isEmptyArray;

function isFunction(value) {
  return Object.prototype.toString.call(value) == '[object Function]';
}

exports.isFunction = isFunction;

function isElement(value) {
  return (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === 'object' ? value instanceof HTMLElement : //DOM2
  value && _typeof(value) === "object" && value !== null && value.nodeType === 1 && typeof value.nodeName === "string";
}

exports.isElement = isElement;

function isWindow(value) {
  var toString = Object.prototype.toString.call(value);
  return toString == '[object global]' || toString == '[object Window]' || toString == '[object DOMWindow]';
}

exports.isWindow = isWindow;
/**
 * 检查是否是普通空对象
 * @param object obj
 * @return boolean
 */

function isPlainObject(obj) {
  var hasOwn = Object.prototype.hasOwnProperty; // Must be an Object.

  if (!obj || _typeof(obj) !== 'object' || obj.nodeType || isWindow(obj)) {
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

exports.isPlainObject = isPlainObject;
/*
 * 检查是否是class 实例对象
*/

function isClassObject(obj) {
  return isObject(obj) && !isPlainObject(obj) ? true : false;
}

exports.isClassObject = isClassObject;
/*
  转换工具
 */

function toArray(array) {
  return Array.prototype.slice.call(array);
}

exports.toArray = toArray;

function toString(content) {
  if (!content) {
    return '';
  }

  if (typeof content === 'string') {
    return content;
  }

  return content.toString();
}

exports.toString = toString;
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

exports.setSessionStorage = setSessionStorage;

function getSessionStorage(key) {
  if (!window.sessionStorage) {
    return;
  }

  key = 'keepObserverData_' + key;
  var value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : '';
}

exports.getSessionStorage = getSessionStorage;

function removeSessionStorage(key) {
  if (!window.sessionStorage) {
    return;
  }

  key = 'keepObserverData_' + key;
  sessionStorage.removeItem(key);
}

exports.removeSessionStorage = removeSessionStorage; //localStorage

function setStorage(key, value) {
  if (!window.localStorage) {
    return;
  }

  key = 'keepObserverData_' + key;
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
}

exports.setStorage = setStorage;

function getStorage(key) {
  if (!window.localStorage) {
    return;
  }

  key = 'keepObserverData_' + key;
  var value = localStorage.getItem(key);
  return value ? JSON.parse(value) : '';
}

exports.getStorage = getStorage;

function removeStorage(key) {
  if (!window.localStorage) {
    return;
  }

  key = 'keepObserverData_' + key;
  localStorage.removeItem(key);
}

exports.removeStorage = removeStorage;
/*
    参考Vconsole 生产唯一ID
 */

function getUniqueID() {
  var id = 'xxxxxxxx-xxx-t-xxx--xxxxxxxx'.replace(/[xyt]/g, function (c) {
    var r = Math.random() * 16 | 0,
        t = new Date().getTime(),
        v = c == 'x' ? r : c == 't' ? t : r & 0x3 | 0x8;
    return v.toString(16);
  });
  return id;
}

exports.getUniqueID = getUniqueID;
/*
    深度合并内容
    引用类型克隆合并
    arguments[0] = target
    arguments type is Object Or Array
    多内容合并覆盖优先级: arguments[0]<arguments[1]<arguments[2]..
    如果sources 不是数组或者对象 则直接忽略
 */

function extend() {
  var arg = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    arg[_i] = arguments[_i];
  }

  var args = toArray(arguments);

  if (args.length === 0) {
    console.error("extends params is undefined");
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
    } //如果内容是对象


    if (isObject(item)) {
      //开始遍历
      for (var key in item) {
        //如果内容是对象
        if (isObject(item[key]) && !isEmptyObject(item[key])) {
          //修正数据
          target[key] = target[key] && isObject(target[key]) ? target[key] : {};
          target[key] = extend(target[key], item[key]);
        } else if (isArray(item[key]) && !isEmptyArray(item[key])) {
          //修正数据
          target[key] = target[key] && isArray(target[key]) ? target[key] : [];
          target[key] = extend(target[key], item[key]);
        } else if (isObject(item[key]) && isEmptyObject(item[key])) {
          target[key] = {};
        } else if (isArray(item[key]) && isEmptyArray(item[key])) {
          target[key] = [];
        } else {
          //基本类型直接赋值
          target[key] = item[key];
        }
      }
    } else if (isArray(item)) {
      for (var i = 0; i < item.length; i++) {
        //如果内容是对象
        if (isObject(item[i]) && !isEmptyObject(item[i])) {
          //修正数据
          target[i] = target[i] && isObject(target[i]) ? target[i] : {};
          target[i] = extend(target[i], item[i]);
        } else if (isArray(item[i]) && !isEmptyArray(item[i])) {
          //修正数据
          target[i] = target[i] && isArray(target[i]) ? target[i] : [];
          target[i] = extend(target[i], item[i]);
        } else if (isObject(item[i]) && isEmptyObject(item[i])) {
          target[i] = {};
        } else if (isArray(item[i]) && isEmptyArray(item[i])) {
          target[i] = [];
        } else {
          //基本类型直接赋值
          target[i] = item[i];
        }
      }
    } //其他类型直接忽略

  });
  return target;
}

exports.extend = extend;
/*
    mixin calss method and params
*/

function mixin(origin, provider) {
  if (!provider || !isObject(provider) || isEmptyObject(provider)) {
    console_1.warnError('keepObserver $mixin receive params not right');
  }

  for (var key in provider) {
    if (origin[key]) {
      console_1.warnError('keepObserver $mixin method key: ' + key + ' is exist');
      continue;
    } //不允许重写


    Object.defineProperty(origin, key, {
      configurable: false,
      enumerable: true,
      value: provider[key]
    });
  }
}

exports.mixin = mixin;
/**
 * @filter:
 * @param obj { array and object}
 * @param call { array.filter(callback)}
 * @return: new obj
 */

function filter(obj, callback) {
  if (!isArray(obj) && !isObject(obj) || !isFunction(callback)) {
    return obj;
  }

  if (isArray(obj)) {
    return obj.filter(callback);
  }

  var newObje = {};

  for (var key in obj) {
    var value = obj[key];

    if (callback(value, key)) {
      newObje[key] = value;
    }
  }

  return newObje;
}

exports.filter = filter;
/**
 * @map:
 * @param obj { array and object}
 * @param call { array.filter(callback)}
 * @return: new obj
 */

function map(obj, callback) {
  if (!isArray(obj) && !isObject(obj) || !isFunction(callback)) {
    return obj;
  }

  if (isArray(obj)) {
    return obj.map(callback);
  }

  var newObje = {};

  for (var key in obj) {
    var value = obj[key];
    newObje[key] = callback(value, key);
  }

  return newObje;
}

exports.map = map;

/***/ })

/******/ });
});