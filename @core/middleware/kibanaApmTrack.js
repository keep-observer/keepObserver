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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/services/middleware/kibanaApmTrack/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/services/middleware/kibanaApmTrack/defaultConfig.ts":
/*!*****************************************************************!*\
  !*** ./src/services/middleware/kibanaApmTrack/defaultConfig.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {};

/***/ }),

/***/ "./src/services/middleware/kibanaApmTrack/handleMiddle.ts":
/*!****************************************************************!*\
  !*** ./src/services/middleware/kibanaApmTrack/handleMiddle.ts ***!
  \****************************************************************/
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

exports._handleReciceReportMessage = function (interrupt, next) {
  var _this = this;

  return function () {
    var params = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }

    var _a = __read(params, 1),
        _b = _a[0],
        message = _b === void 0 ? {} : _b;

    var _c = message.type,
        type = _c === void 0 ? false : _c,
        typeName = message.typeName; //valid message

    if (!type || !index_1.Tools.isString(type) || type !== 'monitor') {
      next.apply(void 0, __spread(params));
      return;
    } //handle message


    switch (typeName) {
      case 'log':
        _this._handleTrackLog(message);

        break;

      case 'network':
        _this._handleTrackNetwork(message);

        break;

      case 'htmlElementActive':
        _this._handleTrackHtmlElementActive(message);

        break;

      case 'error':
        _this._handleTrackError(message);

        break;

      default:
        index_1.consoleTools.warnError("is no support track typeName:" + typeName);
    }

    next.apply(void 0, __spread(params));
  };
};

exports._handleTrackLog = function (params) {
  index_1.consoleTools.log(params);
};

exports._handleTrackNetwork = function (params) {
  index_1.consoleTools.log(params);
};

exports._handleTrackHtmlElementActive = function (params) {
  index_1.consoleTools.log(params);
};

exports._handleTrackError = function (params) {
  index_1.consoleTools.log(params);
};

/***/ }),

/***/ "./src/services/middleware/kibanaApmTrack/index.ts":
/*!*********************************************************!*\
  !*** ./src/services/middleware/kibanaApmTrack/index.ts ***!
  \*********************************************************/
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

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var defaultConfig_1 = __importDefault(__webpack_require__(/*! ./defaultConfig */ "./src/services/middleware/kibanaApmTrack/defaultConfig.ts"));

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var handleMiddle_1 = __webpack_require__(/*! ./handleMiddle */ "./src/services/middleware/kibanaApmTrack/handleMiddle.ts"); // 获取系统信息


var KeepObserverMiddlewareKibanaApmTrack =
/** @class */
function (_super) {
  __extends(KeepObserverMiddlewareKibanaApmTrack, _super); //构造函数


  function KeepObserverMiddlewareKibanaApmTrack(config) {
    if (config === void 0) {
      config = {};
    }

    var _this = _super.call(this, config) || this; //method


    _this._handleReciceReportMessage = handleMiddle_1._handleReciceReportMessage.bind(_this);
    _this._handleTrackLog = handleMiddle_1._handleTrackLog.bind(_this);
    _this._handleTrackNetwork = handleMiddle_1._handleTrackNetwork.bind(_this);
    _this._handleTrackHtmlElementActive = handleMiddle_1._handleTrackHtmlElementActive.bind(_this);
    _this._handleTrackError = handleMiddle_1._handleTrackError.bind(_this); //存混合配置

    _this._config = index_1.Tools.extend(__assign({}, defaultConfig_1["default"]), config); //发送方法

    _this.sendMessage = function () {
      return index_1.consoleTools.warnError('sendMessage is not active, apply receive sendPipeMessage fail ');
    };

    return _this;
  } //提供一个挂载入口


  KeepObserverMiddlewareKibanaApmTrack.prototype.apply = function (_a) {
    var sendMessage = _a.sendMessage,
        useExtendMiddle = _a.useExtendMiddle;
    this.sendMessage = sendMessage; //receive message

    useExtendMiddle('sendMessage', this._handleReciceReportMessage);
  };

  return KeepObserverMiddlewareKibanaApmTrack;
}(index_1.KeepObserverPublic);

exports["default"] = KeepObserverMiddlewareKibanaApmTrack;

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