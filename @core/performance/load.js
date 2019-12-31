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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/services/performance/load/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/services/performance/load/defaultConfig.ts":
/*!********************************************************!*\
  !*** ./src/services/performance/load/defaultConfig.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 
    observer System 实例默认配置数据
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  //是否每天只记录一次
  isOneDay: true,
  //是否启动性能分析 
  isPerformance: true,
  //是否检查缓存读取内容
  isPerformanceRequest: true,
  //获取到load信息是否立即上报
  immediatelyiReport: true
};

/***/ }),

/***/ "./src/services/performance/load/handle.ts":
/*!*************************************************!*\
  !*** ./src/services/performance/load/handle.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var saveFlag = 'loadRecordReportDate'; //获取系统信息

exports.getSystemInfo = function () {
  var _self = this;

  var oneDayFlag = this.checkIsOneDay(); //判断是否每天最多获取上传一次

  if (this._config.isOneDay && oneDayFlag) {
    return false;
  } //开始获取系统信息


  if (_self._config.isPerformance) {
    _self.getWebPerformance(function (Result) {
      _self._systemInfo = Result; //上报

      _self.noticeReport(_self._systemInfo); //记录


      _self.recordReport();
    });
  }
}; //获取首屏性能分析


exports.getWebPerformance = function (onCallback) {
  var _self = this; //异步实现,等待完全加载完成


  var performance = function performance() {
    var info = {};
    var performance = window.performance || window.msPerformance || window.webkitPerformance;
    var timing = window.performance && window.performance.timing;
    var navigation = window.performance && window.performance.navigation; //获取性能分析

    if (performance && timing) {
      //重定向次数：
      info.redirectCount = navigation ? navigation.redirectCount + '次' : '未知'; //跳转耗时：

      info.redirectTime = timing.redirectEnd - timing.redirectStart + 'ms'; //APP CACHE 耗时：

      info.appcacheTime = Math.max(timing.domainLookupStart - timing.fetchStart, 0) + 'ms'; //DNS 解析耗时：

      info.dns = timing.domainLookupEnd - timing.domainLookupStart + 'ms'; //TCP 链接耗时：

      info.tcp = timing.connectEnd - timing.connectStart + 'ms'; //等待服务器响应耗时（注意是否存在cache）：

      info.request = timing.responseStart - timing.requestStart + 'ms'; //内容加载耗时（注意是否存在cache）:

      info.response = timing.responseEnd - timing.responseStart + 'ms'; //总体网络交互耗时，即开始跳转到服务器资源下载完成：

      info.network = timing.responseEnd - timing.navigationStart + 'ms'; //渲染处理：

      info.DOMrender = (timing.domComplete || timing.domLoading) - timing.domLoading + 'ms'; //抛出 load 事件：

      info.onloadTime = timing.loadEventEnd - timing.loadEventStart + 'ms'; //总耗时：

      info.total = (timing.loadEventEnd || timing.loadEventStart || timing.domComplete || timing.domLoading) - timing.navigationStart + 'ms'; //可交互：

      info.DOMactive = timing.domInteractive - timing.navigationStart + 'ms'; //请求响应耗时，即 T0，注意cache：

      info.webResponse = timing.responseStart - timing.navigationStart + 'ms'; //首次出现内容，即 T1：

      info.webLoad = timing.domLoading - timing.navigationStart + 'ms'; //内容加载完毕，即 T3：

      info.webLoadEnd = timing.loadEventEnd - timing.navigationStart + 'ms';
    } //是否获取加载资源内容


    if (performance && _self._config.isPerformanceRequest) {
      info.requestPerformance = [];

      if (performance.getEntries) {
        var requestPerformance = performance.getEntries(); //只检查initiatorType  script css xmlhttprequest

        if (index_1.tool.isArray(requestPerformance)) {
          requestPerformance.map(function (item) {
            if (item.initiatorType) {
              var time = item.duration;
              var size = item.encodedBodySize;
              time = isNaN(time.toFixed(2)) ? time : time.toFixed(2);
              size = isNaN(size.toFixed(2)) ? size : (size / 1000).toFixed(2);
              var perInfo = {
                type: item.initiatorType,
                name: item.name,
                time: time + 'ms',
                size: size + 'kb'
              };
              info.requestPerformance.push(perInfo);
            }
          });
        }

        if (onCallback) {
          onCallback(info);
        }
      }
    }
  }; //挂载在 window.onload 中


  if (typeof window.addEventListener != 'undefined') {
    window.addEventListener('load', function () {
      setTimeout(performance, 0);
    }, false);
  } else {
    window.attachEvent('onload', function () {
      setTimeout(performance, 0);
    });
  }
}; //验证今天是否已经获取上传了一次用户信息了


exports.checkIsOneDay = function () {
  var reportDate = index_1.tool.getStorage(saveFlag);
  var date = index_1.tool.dateFormat(new Date(), 'yyyy-MM-dd'); //如果没获取上报过

  if (!reportDate) {
    return false;
  } else if (reportDate !== date) {
    return false;
  }

  return true;
}; //记录当天已经上报


exports.recordReport = function () {
  if (this._config.isOneDay) {
    var date = index_1.tool.dateFormat(new Date(), 'yyyy-MM-dd');
    index_1.tool.setStorage(saveFlag, date);
  }
};

/***/ }),

/***/ "./src/services/performance/load/index.ts":
/*!************************************************!*\
  !*** ./src/services/performance/load/index.ts ***!
  \************************************************/
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

var defaultConfig_1 = __importDefault(__webpack_require__(/*! ./defaultConfig */ "./src/services/performance/load/defaultConfig.ts"));

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var handle_1 = __webpack_require__(/*! ./handle */ "./src/services/performance/load/handle.ts");

var report_1 = __webpack_require__(/*! ./report */ "./src/services/performance/load/report.ts"); // 获取系统信息


var KeepObserverLoad =
/** @class */
function (_super) {
  __extends(KeepObserverLoad, _super); //构造函数


  function KeepObserverLoad(config) {
    if (config === void 0) {
      config = {};
    }

    var _this = _super.call(this, config) || this; //method


    _this.getSystemInfo = handle_1.getSystemInfo.bind(_this);
    _this.getWebPerformance = handle_1.getWebPerformance.bind(_this);
    _this.checkIsOneDay = handle_1.checkIsOneDay.bind(_this);
    _this.recordReport = handle_1.recordReport.bind(_this);
    _this.handleReportData = report_1.handleReportData.bind(_this);
    var _a = config.LoadCustom,
        LoadCustom = _a === void 0 ? false : _a;
    var LoadCustomConfig = LoadCustom || config; //存混合配置

    _this._config = index_1.tool.extend(defaultConfig_1["default"], LoadCustomConfig); //系统信息

    _this._systemInfo = false; //上报名

    _this._typeName = 'Load'; //开始获取系统信息

    _this.getSystemInfo();

    return _this;
  } //提供一个挂载入口


  KeepObserverLoad.prototype.apply = function (pipe) {
    this.addReportListener(pipe.sendPipeMessage);
  };

  return KeepObserverLoad;
}(index_1.KeepObserverPublic);

exports["default"] = KeepObserverLoad;

/***/ }),

/***/ "./src/services/performance/load/report.ts":
/*!*************************************************!*\
  !*** ./src/services/performance/load/report.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); //处理整理数据

exports.handleReportData = function (content) {
  var reportParams = {
    type: "performance",
    typeName: 'load',
    data: content,
    location: window.location.href,
    environment: window.navigator.userAgent,
    reportTime: new Date().getTime()
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