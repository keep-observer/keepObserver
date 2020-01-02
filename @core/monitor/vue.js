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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");
/*
        开始监控vue
 */


exports._handleInit = function () {
  var _self = this;

  if (_self._vue.config) {
    if (_self._vue.config.errorHandler && index_1.tool.isFunction(_self._vue.config.errorHandler)) {
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
  errInfo.infoMsg = index_1.tool.toString(info); //是否存在堆栈信息

  if (index_1.tool.isObject(err) && err.stack && err.message) {
    errInfo.errMsg = index_1.tool.toString(err.message);
    errInfo.stackMsg = index_1.tool.toString(err.stack);
  } else {
    errInfo.errMsg = index_1.tool.toString(err);
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

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
    var vueConfig = vueCustom || config;
    vueConfig.vueInstance = vueInstance; //判断是否存在实例

    if (vueConfig.vueInstance) {
      return _this;
    } //存混合配置


    _this._config = index_1.tool.extend({}, vueConfig); //vue实例

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
}(index_1.KeepObserverPublic);

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