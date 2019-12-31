(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@util/index"));
	else if(typeof define === 'function' && define.amd)
		define(["@util/index"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@util/index")) : factory(root["@util/index"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__util_index__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/services/monitor/error/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/services/monitor/error/api.ts":
/*!*******************************************!*\
  !*** ./src/services/monitor/error/api.ts ***!
  \*******************************************/
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
  if (this._config.catchCrossDomain) {
    window.document.createElement = this.$createElement;
    this.$createElement = false;
  }
};
/*
    开始监听
 */


exports.startObserver = function () {
  //启动监听
  var _self = this;

  _self._handleInit();
};

/***/ }),

/***/ "./src/services/monitor/error/defaultConfig.ts":
/*!*****************************************************!*\
  !*** ./src/services/monitor/error/defaultConfig.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 
    observer log 实例默认配置数据
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  //是否捕获跨域JS错误
  catchCrossDomain: true,
  //未知错误是否捕获
  unknowErrorCatch: false
};

/***/ }),

/***/ "./src/services/monitor/error/handle.ts":
/*!**********************************************!*\
  !*** ./src/services/monitor/error/handle.ts ***!
  \**********************************************/
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

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");
/*
    初始化替换相关信息
*/


exports._handleInit = function () {
  var _self = this; //替换window.console变量


  var baseLogList = ['log', 'info', 'warn', 'debug', 'error']; //是否需要捕获跨域JS错误

  if (_self._config.catchCrossDomain && !_self.$createElement) {
    //侵入document.createElement  实现跨域JS捕获错误信息
    if (window.document || window.document.createElement) {
      _self.$createElement = window.document.createElement;

      window.document.createElement = function (type) {
        var resultDom = _self.$createElement.call(window.document, type);

        if (type === 'script') {
          resultDom.crossOrigin = 'anonymous';
        }

        return resultDom;
      };
    }
  } //监控window.onerror


  if (typeof window.addEventListener != 'undefined') {
    window.addEventListener('error', function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      _self._handleError.apply(_self, __spread(args));
    }, true);
  } else {
    window.attachEvent('onerror', function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      _self._handleError.apply(_self, __spread(args));
    });
  }
};
/*
    处理打印信息
    上报报文如下
    @: type string  (log|info|debug.... jsError)
    @: data string  (JSON格式对象报文)
 */


exports._handleMessage = function (type, agrs) {
  var _self = this;

  var reportData = {};
  var separate = ' , ';
  var data = ''; //agrs不是数组 或是空数组 则不处理

  if (!index_1.tool.isArray(agrs) || agrs.length === 0) {
    return false;
  }

  reportData.type = type; //直接转成字符串形式

  agrs.forEach(function (el, index) {
    try {
      if (index_1.tool.isObject(el)) {
        data += "" + (index === 0 ? '' : separate) + JSON.stringify(el);
      } else {
        data += "" + (index === 0 ? '' : separate) + index_1.tool.toString(el).replace(/[\s\r\n\t]/g, '');
      }
    } catch (err) {
      data += (index === 0 ? '' : separate) + "toString is err:" + index_1.tool.toString(err).replace(/[\s\r\n\t]/g, '');
    }
  });
  reportData.data = data;

  var _a = _self.handleReportData(reportData),
      reportParams = _a.reportParams,
      control = _a.control; //上报


  _self.noticeReport(reportParams, control);
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


exports._handleError = function (errorEvent) {
  var _self = this;

  var errorObj = {};
  var url = errorEvent.filename || errorEvent.url || false; //可能是跨域资源JS出现错误 这获取不到详细信息

  if ((!errorEvent.message || errorEvent.message === 'Script error.') && !url) {
    //有可能是资源加载错误被捕获
    if (errorEvent.target && !index_1.tool.isWindow(errorEvent.target) && errorEvent.target.nodeName && errorEvent.target.src) {
      errorObj.errMsg = 'loadError! web request Resource loading error';
      errorObj.nodeName = errorEvent.target.nodeName;
      errorObj.url = errorEvent.target.src;
      setTimeout(function () {
        _self._handleMessage('loadError', [errorObj]);
      });
      return false;
    } //未知错误是否捕获


    if (!_self._config.unknowErrorCatch) return false;
    errorObj.errMsg = 'jsError!There may be an error in the JS for cross-domain resources, and the error URL location cannot be obtained. The error message is:' + errorEvent.message;
    errorObj.url = '';
    errorObj.line = 0;
    errorObj.colum = 0;
    setTimeout(function () {
      _self._handleMessage('jsError', [errorObj]);
    });
    return false;
  } //处理错误信息


  errorObj.errMsg = errorEvent.message || 'Error detail info not obtained';
  errorObj.url = url;
  errorObj.line = errorEvent.lineno || 'Error row not obtained';
  errorObj.colum = errorEvent.colno || 'Error column not obtained';
  setTimeout(function () {
    _self._handleMessage('jsError', [errorObj]);
  });
  return true;
};

/***/ }),

/***/ "./src/services/monitor/error/index.ts":
/*!*********************************************!*\
  !*** ./src/services/monitor/error/index.ts ***!
  \*********************************************/
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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var defaultConfig_1 = __importDefault(__webpack_require__(/*! ./defaultConfig */ "./src/services/monitor/error/defaultConfig.ts"));

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var api_1 = __webpack_require__(/*! ./api */ "./src/services/monitor/error/api.ts");

var handle_1 = __webpack_require__(/*! ./handle */ "./src/services/monitor/error/handle.ts");

var report_1 = __webpack_require__(/*! ./report */ "./src/services/monitor/error/report.ts"); // 获取系统信息


var KeepObserverError =
/** @class */
function (_super) {
  __extends(KeepObserverError, _super); //构造函数


  function KeepObserverError(config) {
    if (config === void 0) {
      config = {};
    }

    var _this = _super.call(this, config) || this; //method


    _this.stopObserver = api_1.stopObserver.bind(_this);
    _this.startObserver = api_1.startObserver.bind(_this);
    _this._handleInit = handle_1._handleInit.bind(_this);
    _this._handleMessage = handle_1._handleMessage.bind(_this);
    _this._handleError = handle_1._handleError.bind(_this);
    _this.handleReportData = report_1.handleReportData.bind(_this); //初始化上传相关实例

    var _a = config,
        _b = _a.errorCustom,
        errorCustom = _b === void 0 ? false : _b,
        _c = _a.develop,
        develop = _c === void 0 ? false : _c;
    var errorConfig = errorCustom || config; //是否是开发模式

    errorConfig.develop = develop; //存混合配置

    _this._config = index_1.tool.extend(defaultConfig_1["default"], errorConfig); //上报名

    _this._typeName = 'error'; //替换 doucment.createElement 插入script .crossOrigin = 'anonymous';

    _this.$createElement = false; //启动监控

    _this.startObserver();

    return _this;
  } //提供一个挂载入口


  KeepObserverError.prototype.apply = function (pipe) {
    this.addReportListener(pipe.sendPipeMessage);
    return {
      $errorStop: this.stopObserver,
      $errorStart: this.startObserver
    };
  };

  return KeepObserverError;
}(index_1.KeepObserverPublic);

exports["default"] = KeepObserverError;

/***/ }),

/***/ "./src/services/monitor/error/report.ts":
/*!**********************************************!*\
  !*** ./src/services/monitor/error/report.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); //处理整理数据

exports.handleReportData = function (content) {
  var reportParams = {
    type: "monitor",
    typeName: 'error',
    data: content,
    location: window.location.href,
    environment: window.navigator.userAgent,
    reportTime: new Date().getTime(),
    isError: true
  };
  return {
    reportParams: reportParams
  };
};

/***/ }),

/***/ "@util/index":
/*!******************************!*\
  !*** external "@util/index" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__util_index__;

/***/ })

/******/ });
});