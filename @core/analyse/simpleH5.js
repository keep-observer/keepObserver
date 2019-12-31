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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/services/analyse/simpleH5/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/services/analyse/simpleH5/api.ts":
/*!**********************************************!*\
  !*** ./src/services/analyse/simpleH5/api.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var constant_1 = __webpack_require__(/*! ./constant */ "./src/services/analyse/simpleH5/constant.ts");
/*
        停止监听
*/


exports.stopAnalyse = function () {
  this.destroy();
};
/*
    开始监听
 */


exports.startAnalyse = function (config) {
  var begin = true; //拦截事件监听

  if (!this._addEventListener) {
    begin = this._handleEventTarget();
  } //start


  if (begin) {
    this.begine(config);
  }
};
/*
    清除缓存
 */


exports.clearSaveRecive = function () {
  index_1.tool.removeStorage(constant_1.RecordKey);
};

/***/ }),

/***/ "./src/services/analyse/simpleH5/constant.ts":
/*!***************************************************!*\
  !*** ./src/services/analyse/simpleH5/constant.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); //storge-key

exports.RecordKey = 'simpleH5Analyse-' + window.location.href;
exports.RecordDataKey = 'simpleH5AnalyseDate-' + window.location.href; //切换后台标志

exports.exitBackstageFlag = 'backstageFlag';

/***/ }),

/***/ "./src/services/analyse/simpleH5/defaultConfig.ts":
/*!********************************************************!*\
  !*** ./src/services/analyse/simpleH5/defaultConfig.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
    实例默认配置数据
 */

exports["default"] = {
  //是否初始化就启动,并且从配置中读取分析参数
  initBegine: false,
  //延时分发时间
  timeoutDispatchEvent: 200
};

/***/ }),

/***/ "./src/services/analyse/simpleH5/dom.ts":
/*!**********************************************!*\
  !*** ./src/services/analyse/simpleH5/dom.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var CN_CodeReg = /[\u4e00-\u9fa5\w]/ig;
var Clear_CN_CodeReg = /[^\u4e00-\u9fa5\w]/ig;
var domIndex = 1;
var repeatIndex = 1; //处理监听DOM事件

exports.handleAnalyseDomList = function (analyseDomList, activeFn) {
  var _self = this;

  var newAnalyseDomList = {};
  var statusBuff = {}; //for start

  analyseDomList.forEach(function (item) {
    //check type
    if (!index_1.tool.isString(item) && !index_1.tool.isElement(item)) {
      index_1.consoleTools.warnError('analyseServer simpleH5 config analyseDomList item is not string or not domElement');
      return false;
    }

    var el = index_1.tool.isElement(item) ? item : document.querySelector(item);

    if (!el || !index_1.tool.isElement(el)) {
      index_1.consoleTools.warnError('analyseServer simpleH5 config analyseDomList item is not find domElement');
      return false;
    } //handle el


    var title = _self.getDomTitle(el);

    if (newAnalyseDomList[title]) {
      title += '-' + repeatIndex;
      repeatIndex++;
    }

    statusBuff[title] = false; //register actice use event

    var destroyEvent = _self.registerAnalyseDomEvent(el, function (event) {
      statusBuff[title] = true;

      if (activeFn && index_1.tool.isFunction(activeFn)) {
        activeFn(event);
      }
    });

    var getActiveStauts = function getActiveStauts(title) {
      return function () {
        return statusBuff[title];
      };
    }; //return dom


    newAnalyseDomList[title] = {
      destroyEvent: destroyEvent,
      getActiveStauts: getActiveStauts(title)
    };
  }); //end

  return newAnalyseDomList;
}; //获取dom-title标记


exports.getDomTitle = function (el) {
  var type = el.tagName.toLowerCase();
  var content = ''; //获取内容

  if (el.outerText && CN_CodeReg.test(el.outerText)) {
    content = el.outerText;
    content = content.replace(Clear_CN_CodeReg, '');
  } else if (el.textContent && CN_CodeReg.test(el.textContent)) {
    content = el.textContent.replace(Clear_CN_CodeReg, '');
  } else if (el.className !== '') {
    content = '.' + el.className;
  } else {
    content = '' + domIndex;
    domIndex++;
  }

  return type + ':' + content;
};

/***/ }),

/***/ "./src/services/analyse/simpleH5/event.ts":
/*!************************************************!*\
  !*** ./src/services/analyse/simpleH5/event.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var attributeKey = 'keepObserverUniqueID' + index_1.tool.getUniqueID().substring(0, 8); //注册相关DOM埋点检测事件服务

exports.registerAnalyseDomEvent = function (el, fn) {
  var _self = this;

  var type = el.tagName.toLowerCase();
  var timeoutDispatchEvent = _self._config.timeoutDispatchEvent; //修正激活元素的事件

  var event = 'click';

  if (type === 'input' || type === 'textarea' || type === 'select') {
    event = 'change';
  } //重新挂载事件


  _self._addEventListener.apply(el, [event, fn]); //set sgin


  el.setAttribute(attributeKey, true); //return destroyEvent

  return function () {
    if (el && index_1.tool.isElement(el)) {
      _self._removeEventListener.apply(el, [event, fn]);
    }

    event = null;
    type = null;
  };
}; //拦截原生方法EventTarget


exports._handleEventTarget = function () {
  var _self = this;

  var timeoutDispatchEvent = _self._config.timeoutDispatchEvent;

  if (window.Node && Node.prototype.addEventListener) {
    //替换
    _self._addEventListener = Node.prototype.addEventListener;
    _self._removeEventListener = Node.prototype.removeEventListener; //拦截

    Node.prototype.addEventListener = function () {
      var target = this;
      var args = index_1.tool.toArray(arguments);
      /*
          validata params
          [0] = string eventName
          [1] = function eventHandleFunction
      */

      if (args.length < 2 || !index_1.tool.isString(args[0]) || !index_1.tool.isFunction(args[1])) {
        index_1.consoleTools.warnError('element addEventListener params error');
        return false;
      } //patch = args[1] = eventHandleFunction setTimeout 


      var handle = args[1];

      args[1] = function () {
        var sgin = target.getAttribute(attributeKey);
        var handleArgs = index_1.tool.toArray(arguments); // observer target dom

        if (sgin) {
          return setTimeout(function () {
            handle.apply(target, handleArgs);
          }, timeoutDispatchEvent);
        }

        return handle.apply(target, handleArgs);
      }; //挂载原生方法上


      return _self._addEventListener.apply(target, args);
    };

    Node.prototype.removeEventListener = function () {
      var target = this;
      var args = index_1.tool.toArray(arguments);
      /*
          validata params
          [0] = string eventName
          [1] = function eventHandleFunction
      */

      if (args.length < 2 || !index_1.tool.isString(args[0]) || !index_1.tool.isFunction(args[1])) {
        index_1.consoleTools.warnError('element removeEventListener params error');
        return false;
      }

      return _self._removeEventListener.apply(target, args);
    };
  } else {
    index_1.consoleTools.warnError('analyseServer simpleH5: borwser not can EventTarget.prototype.addEventListener');
    return false;
  }

  return true;
}; //恢复原生方法


exports._recoverEventTarget = function () {
  if (window.Node && Node.prototype.addEventListener) {
    Node.prototype.addEventListener = this._addEventListener;
    Node.prototype.removeEventListener = this._removeEventListener;
  } else {
    index_1.consoleTools.warnError('analyseServer simpleH5: borwser not can EventTarget.prototype.addEventListener');
    return false;
  }

  this._removeEventListener = false;
  this._addEventListener = false;
};

/***/ }),

/***/ "./src/services/analyse/simpleH5/handle.ts":
/*!*************************************************!*\
  !*** ./src/services/analyse/simpleH5/handle.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var constant_1 = __webpack_require__(/*! ./constant */ "./src/services/analyse/simpleH5/constant.ts");

var assist = __importStar(__webpack_require__(/*! ./tool */ "./src/services/analyse/simpleH5/tool.ts"));

var nowDate = assist.createDataRecord(); //开始

exports.begine = function (config) {
  var _self = this;

  var analyseDomList = config.analyseDomList; //handle dom list

  if (analyseDomList || index_1.tool.isArray(analyseDomList)) {
    _self.analyseDomList = _self.handleAnalyseDomList(analyseDomList, function (event) {
      _self.triggerAcitveReport(event);
    });
  } else {
    _self.$devWarn('[keepObserver] analyseServer simpleH5 is analyse dom list is no exist or is no arrayType');
  } //reset report data and init report


  _self.triggerInitReport();
}; //销毁


exports.destroy = function () {
  if (!index_1.tool.isEmptyObject(this.analyseDomList)) {
    for (var key in this.analyseDomList) {
      var item = this.analyseDomList[key];

      if (item.destroyEvent && index_1.tool.isFunction(item.destroyEvent)) {
        item.destroyEvent();
      }
    }
  }

  this._recoverEventTarget();

  this.analyseDomList = {}; // 这里清除停止监听在恢复的时候会可能导致触发两次

  this._domListener = {};
}; //监控dom激活触发


exports.triggerAcitveReport = function (event) {
  var event = event || window.event;
  var el = event.target;
  var nodeName = el.nodeName.toLowerCase();
  var timeoutDispatchEvent = this._config.timeoutDispatchEvent; //如果是a标签类型,并且携带href，那么不跳转,延时跳转

  if (nodeName === 'a' && el.href) {
    var url = el.href;
    event.preventDefault();
    setTimeout(function () {
      window.location.href = url;
    }, timeoutDispatchEvent);
  } //上报


  this.reportData = this.createReportData();
  this.noticeReport(this.reportData);
}; //初始化上报


exports.triggerInitReport = function () {
  //尝试读取缓存数据
  var saveRecord = index_1.tool.getStorage(constant_1.RecordKey);
  var backStageFlag = index_1.tool.getSessionStorage(constant_1.exitBackstageFlag);
  var dateRecord = index_1.tool.getStorage(constant_1.RecordDataKey);

  if (saveRecord) {
    this.reportData = index_1.tool.extend(this.reportData, saveRecord);
  }

  if (!backStageFlag) {
    this.reportData.repeatCount += 1;
    this.reportData.repeatCountAll += 1;
    this.reportData = this.createReportData();
    this.noticeReport(this.reportData);
    index_1.tool.setSessionStorage(constant_1.exitBackstageFlag, true);
  } // update now day data


  if (!dateRecord) {
    index_1.tool.setStorage(constant_1.RecordDataKey, nowDate);
  } else if (parseInt(dateRecord) < nowDate) {
    this.reportData.repeatCount = 0;

    if (!index_1.tool.isEmptyObject(this.reportData.useActives)) {
      for (var key in this.reportData.useActives) {
        this.reportData.useActives[key].activeCount = 0;
      }
    }

    index_1.tool.setStorage(constant_1.RecordDataKey, nowDate);
  }
}; //创建上报数据


exports.createReportData = function () {
  var _self = this;

  var reportData = this.reportData; // handle dom observer info

  if (!index_1.tool.isEmptyObject(this.analyseDomList)) {
    for (var key in this.analyseDomList) {
      var item = this.analyseDomList[key]; // no exist

      if (!reportData.useActives[key]) {
        reportData.useActives[key] = {
          activeCount: item.getActiveStauts() ? 1 : 0,
          activeCountAll: item.getActiveStauts() ? 1 : 0
        };
      } else if (index_1.tool.isExist(reportData.useActives[key].activeCount)) {
        if (item.getActiveStauts()) {
          reportData.useActives[key].activeCount += 1;
          reportData.useActives[key].activeCountAll += 1;
        }
      } else {
        reportData.useActives[key].activeCount = 0;
        reportData.useActives[key].activeCountAll = 0;
      }
    }
  } //save storage


  index_1.tool.setStorage(constant_1.RecordKey, reportData);
  return reportData;
};

/***/ }),

/***/ "./src/services/analyse/simpleH5/index.ts":
/*!************************************************!*\
  !*** ./src/services/analyse/simpleH5/index.ts ***!
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

var defaultConfig_1 = __importDefault(__webpack_require__(/*! ./defaultConfig */ "./src/services/analyse/simpleH5/defaultConfig.ts"));

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var dom_1 = __webpack_require__(/*! ./dom */ "./src/services/analyse/simpleH5/dom.ts");

var event_1 = __webpack_require__(/*! ./event */ "./src/services/analyse/simpleH5/event.ts");

var handle_1 = __webpack_require__(/*! ./handle */ "./src/services/analyse/simpleH5/handle.ts");

var api_1 = __webpack_require__(/*! ./api */ "./src/services/analyse/simpleH5/api.ts");

var report_1 = __webpack_require__(/*! ./report */ "./src/services/analyse/simpleH5/report.ts"); //简单H5页面埋点分析


var KeepObserverSimpleH5Analyse =
/** @class */
function (_super) {
  __extends(KeepObserverSimpleH5Analyse, _super); //构造函数


  function KeepObserverSimpleH5Analyse(config) {
    if (config === void 0) {
      config = {};
    }

    var _this = _super.call(this, config) || this; //method


    _this.getDomTitle = dom_1.getDomTitle.bind(_this);
    _this.handleAnalyseDomList = dom_1.handleAnalyseDomList.bind(_this);
    _this.stopAnalyse = api_1.stopAnalyse.bind(_this);
    _this.startAnalyse = api_1.startAnalyse.bind(_this);
    _this.clearSaveRecive = api_1.clearSaveRecive.bind(_this);
    _this.handleReportData = report_1.handleReportData.bind(_this);
    _this.registerAnalyseDomEvent = event_1.registerAnalyseDomEvent.bind(_this);
    _this._handleEventTarget = event_1._handleEventTarget.bind(_this);
    _this._recoverEventTarget = event_1._recoverEventTarget.bind(_this);
    _this.begine = handle_1.begine.bind(_this);
    _this.destroy = handle_1.destroy.bind(_this);
    _this.triggerAcitveReport = handle_1.triggerAcitveReport.bind(_this);
    _this.triggerInitReport = handle_1.triggerInitReport.bind(_this);
    _this.createReportData = handle_1.createReportData.bind(_this); //初始化上传相关实例

    var _a = config.simpleH5AnalyseCustom,
        simpleH5AnalyseCustom = _a === void 0 ? false : _a;
    var simpleH5AnalyseCustomConfig = simpleH5AnalyseCustom || config;
    _this._config = index_1.tool.extend(defaultConfig_1["default"], simpleH5AnalyseCustomConfig); //原生方法

    _this._addEventListener = false;
    _this._removeEventListener = false; //拦截DOM列表

    /*
        eventList: object
        target: element
     */

    _this._domListener = {}; //需要监听的dom列表

    /*
        destroyEvent: function
        getActiveStauts: function
        title: string
    */

    _this.analyseDomList = {};
    _this.uniqueId = index_1.tool.getUniqueID();
    /*上报内容*/

    _this.reportData = {
      id: index_1.tool.getUniqueID(),
      repeatCountAll: 0,
      repeatCount: 0,
      useActives: {} //行为事件

    }; //启动

    var begin = _this._handleEventTarget();

    if (begin && _this._config.initBegine && _this._config.begineConfig) {
      _this.startAnalyse(_this._config.begineConfig);
    }

    return _this;
  } //提供一个挂载入口


  KeepObserverSimpleH5Analyse.prototype.apply = function (pipe) {
    this.addReportListener(pipe.sendPipeMessage);
    return {
      $simpleH5AnalyseClearSaveRecive: this.clearSaveRecive,
      $simpleH5AnalyseStop: this.stopAnalyse,
      $simpleH5AnalyseBegine: this.startAnalyse
    };
  };

  return KeepObserverSimpleH5Analyse;
}(index_1.KeepObserverPublic);

exports["default"] = KeepObserverSimpleH5Analyse;

/***/ }),

/***/ "./src/services/analyse/simpleH5/report.ts":
/*!*************************************************!*\
  !*** ./src/services/analyse/simpleH5/report.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); //处理整理数据

exports.handleReportData = function (content) {
  var reportParams = {
    type: "analyse",
    typeName: 'simpleH5',
    data: content,
    location: window.location.href,
    environment: window.navigator.userAgent,
    reportTime: new Date().getTime()
  }; //option

  return {
    reportParams: reportParams
  };
};

/***/ }),

/***/ "./src/services/analyse/simpleH5/tool.ts":
/*!***********************************************!*\
  !*** ./src/services/analyse/simpleH5/tool.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.isHidden = isHidden;

function createDataRecord() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return parseInt(year + '' + month + '' + day);
}

exports.createDataRecord = createDataRecord;

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