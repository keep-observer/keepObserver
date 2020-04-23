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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/services/monitor/log/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/services/monitor/log/api.ts":
/*!*****************************************!*\
  !*** ./src/services/monitor/log/api.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");
/*
    停止监听
 */


exports.stopObserver = function () {
  if (!this.console || this.console && index_1.Tools.isEmptyObject(this.console)) {
    return this.console = null;
  }

  window.console.log = this.console.log;
  window.console.error = this.console.error;
  window.console.info = this.console.info;
  window.console.debug = this.console.debug;
  window.console.warn = this.console.warn;
  window.console.time = this.console.time;
  window.console.timeEnd = this.console.timeEnd;
  window.console.clear = this.console.clear;
  this.console = null;
};
/*
    开始监听
 */


exports.startObserver = function () {
  var _this = this;

  if (this.console) {
    return;
  }

  this.console = {};
  setTimeout(function () {
    //启动监听
    if (!index_1.Tools.isEmptyObject(_this.console) || !_this.console) {
      return;
    }

    _this._handleInit();
  });
};

/***/ }),

/***/ "./src/services/monitor/log/defaultConfig.ts":
/*!***************************************************!*\
  !*** ./src/services/monitor/log/defaultConfig.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 
    observer log 实例默认配置数据
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {};

/***/ }),

/***/ "./src/services/monitor/log/handle.ts":
/*!********************************************!*\
  !*** ./src/services/monitor/log/handle.ts ***!
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
    初始化替换相关信息
*/


exports._handleInit = function () {
  var _self = this; //替换window.console变量


  var baseLogList = ['log', 'info', 'warn', 'debug', 'error'];
  _self.console = {};

  if (!window.console) {
    window.console = {};
  }

  baseLogList.map(function (method) {
    _self.console[method] = window.console[method];
  });
  _self.console.time = window.console.time;
  _self.console.timeEnd = window.console.timeEnd;
  _self.console.clear = window.console.clear;
  baseLogList.map(function (method) {
    window.console[method] = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var _a; //是否处于开发模式下


      if (_self._develop && _self.console[method] && index_1.Tools.isFunction(_self.console[method])) {
        (_a = _self.console)[method].apply(_a, __spread(args));
      } //交给拦截处理信息


      _self._handleMessage(method, args);
    };
  }); //处理time timeEnd clear

  var timeLog = {};

  window.console.time = function (label) {
    timeLog[label] = Date.now();
  };

  window.console.timeEnd = function (label) {
    var pre = timeLog[label];
    var type = 'timeEnd';

    if (pre) {
      var content = label + ':' + (Date.now() - pre) + 'ms';

      _self._handleMessage(type, [content]); //开发模式下打印


      if (_self._develop && _self.console.log && index_1.Tools.isFunction(_self.console.log)) {
        _self.console.log(content);
      }
    } else {
      var content = label + ': 0ms';

      _self._handleMessage(type, [content]); //开发模式下打印


      if (_self._develop && _self.console.log && index_1.Tools.isFunction(_self.console.log)) {
        _self.console.log(content);
      }
    }
  };

  window.console.clear = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    _self._handleMessage('clear', args);

    _self.console.clear.apply(window.console, args);
  };
};
/*
    处理打印信息
    上报报文如下
    @: type string  (log|info|debug.... jsError)
    @: data string  (JSON格式对象报文)
 */


exports._handleMessage = function (type, agrs) {
  var _self = this;

  var reportData = {
    type: '',
    data: ''
  };
  var separate = ',';
  var data = '['; //agrs不是数组 或是空数组 则不处理

  if (!index_1.Tools.isArray(agrs) || agrs.length === 0) {
    return false;
  }

  reportData.type = type; //直接转成字符串形式

  agrs.forEach(function (el, index) {
    try {
      if (index_1.Tools.isObject(el) || index_1.Tools.isArray(el)) {
        data += "" + (index === 0 ? '' : separate) + index_1.Tools.objectStringify(el);
      } else {
        data += (index === 0 ? '' : separate) + "\"" + index_1.Tools.toString(el) + "\"";
      }
    } catch (err) {
      data += (index === 0 ? '' : separate) + "\"toString is err:" + index_1.Tools.toString(err).replace(/[\s\r\n\t]/g, '') + "\"";
    }
  });
  data += ']';
  reportData.data = data; //上报

  _self.sendMessage({
    type: "monitor",
    typeName: 'log',
    data: reportData
  });
};

/***/ }),

/***/ "./src/services/monitor/log/index.ts":
/*!*******************************************!*\
  !*** ./src/services/monitor/log/index.ts ***!
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

var defaultConfig_1 = __importDefault(__webpack_require__(/*! ./defaultConfig */ "./src/services/monitor/log/defaultConfig.ts"));

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var api_1 = __webpack_require__(/*! ./api */ "./src/services/monitor/log/api.ts");

var handle_1 = __webpack_require__(/*! ./handle */ "./src/services/monitor/log/handle.ts"); // 获取系统信息


var KeepObserverLog =
/** @class */
function (_super) {
  __extends(KeepObserverLog, _super); //构造函数


  function KeepObserverLog(config) {
    if (config === void 0) {
      config = {};
    }

    var _this = _super.call(this, config) || this; //method


    _this._handleInit = handle_1._handleInit.bind(_this);
    _this._handleMessage = handle_1._handleMessage.bind(_this);
    _this.stopObserver = api_1.stopObserver.bind(_this);
    _this.startObserver = api_1.startObserver.bind(_this); //初始化上传相关实例

    var _a = config,
        _b = _a.logCustom,
        logCustom = _b === void 0 ? false : _b,
        _c = _a.develop,
        develop = _c === void 0 ? false : _c;
    var logConfig = logCustom || config; //是否是开发模式

    logConfig.develop = develop; //存混合配置

    _this._config = index_1.Tools.extend(__assign({}, defaultConfig_1["default"]), logConfig); //替换window.console

    _this.console = null; //发送方法

    _this.sendMessage = function () {
      return index_1.consoleTools.warnError('sendMessage is not active, apply receive sendPipeMessage fail ');
    };

    return _this;
  } //提供一个挂载入口


  KeepObserverLog.prototype.apply = function (_a) {
    var sendMessage = _a.sendMessage;
    this.sendMessage = sendMessage; //启动监控

    this.startObserver();
    return {
      logStop: this.stopObserver,
      logStart: this.startObserver
    };
  };

  return KeepObserverLog;
}(index_1.KeepObserverPublic);

exports["default"] = KeepObserverLog;

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