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
  tool.removeStorage(constant_1.RecordKey);
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

var consoleTools = __importStar(__webpack_require__(/*! ../../../util/console */ "./src/util/console.ts"));

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
    if (!tool.isString(item) && !tool.isElement(item)) {
      consoleTools.warnError('analyseServer simpleH5 config analyseDomList item is not string or not domElement');
      return false;
    }

    var el = tool.isElement(item) ? item : document.querySelector(item);

    if (!el || !tool.isElement(el)) {
      consoleTools.warnError('analyseServer simpleH5 config analyseDomList item is not find domElement');
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

      if (activeFn && tool.isFunction(activeFn)) {
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

var consoleTools = __importStar(__webpack_require__(/*! ../../../util/console */ "./src/util/console.ts"));

var attributeKey = 'keepObserverUniqueID' + tool.getUniqueID().substring(0, 8); //注册相关DOM埋点检测事件服务

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
    if (el && tool.isElement(el)) {
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
      var args = tool.toArray(arguments);
      /*
          validata params
          [0] = string eventName
          [1] = function eventHandleFunction
      */

      if (args.length < 2 || !tool.isString(args[0]) || !tool.isFunction(args[1])) {
        consoleTools.warnError('element addEventListener params error');
        return false;
      } //patch = args[1] = eventHandleFunction setTimeout 


      var handle = args[1];

      args[1] = function () {
        var sgin = target.getAttribute(attributeKey);
        var handleArgs = tool.toArray(arguments); // observer target dom

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
      var args = tool.toArray(arguments);
      /*
          validata params
          [0] = string eventName
          [1] = function eventHandleFunction
      */

      if (args.length < 2 || !tool.isString(args[0]) || !tool.isFunction(args[1])) {
        consoleTools.warnError('element removeEventListener params error');
        return false;
      }

      return _self._removeEventListener.apply(target, args);
    };
  } else {
    consoleTools.warnError('analyseServer simpleH5: borwser not can EventTarget.prototype.addEventListener');
    return false;
  }

  return true;
}; //恢复原生方法


exports._recoverEventTarget = function () {
  if (window.Node && Node.prototype.addEventListener) {
    Node.prototype.addEventListener = this._addEventListener;
    Node.prototype.removeEventListener = this._removeEventListener;
  } else {
    consoleTools.warnError('analyseServer simpleH5: borwser not can EventTarget.prototype.addEventListener');
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

var tool = __importStar(__webpack_require__(/*! ../../../util/tool */ "./src/util/tool.ts"));

var assist = __importStar(__webpack_require__(/*! ./tool */ "./src/services/analyse/simpleH5/tool.ts"));

var constant_1 = __webpack_require__(/*! ./constant */ "./src/services/analyse/simpleH5/constant.ts");

var nowDate = assist.createDataRecord(); //开始

exports.begine = function (config) {
  var _self = this;

  var analyseDomList = config.analyseDomList; //handle dom list

  if (analyseDomList || tool.isArray(analyseDomList)) {
    _self.analyseDomList = _self.handleAnalyseDomList(analyseDomList, function (event) {
      _self.triggerAcitveReport(event);
    });
  } else {
    _self.$devWarn('[keepObserver] analyseServer simpleH5 is analyse dom list is no exist or is no arrayType');
  } //reset report data and init report


  _self.triggerInitReport();
}; //销毁


exports.destroy = function () {
  if (!tool.isEmptyObject(this.analyseDomList)) {
    for (var key in this.analyseDomList) {
      var item = this.analyseDomList[key];

      if (item.destroyEvent && tool.isFunction(item.destroyEvent)) {
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
  var saveRecord = tool.getStorage(constant_1.RecordKey);
  var backStageFlag = tool.getSessionStorage(constant_1.exitBackstageFlag);
  var dateRecord = tool.getStorage(constant_1.RecordDataKey);

  if (saveRecord) {
    this.reportData = tool.extend(this.reportData, saveRecord);
  }

  if (!backStageFlag) {
    this.reportData.repeatCount += 1;
    this.reportData.repeatCountAll += 1;
    this.reportData = this.createReportData();
    this.noticeReport(this.reportData);
    tool.setSessionStorage(constant_1.exitBackstageFlag, true);
  } // update now day data


  if (!dateRecord) {
    tool.setStorage(constant_1.RecordDataKey, nowDate);
  } else if (parseInt(dateRecord) < nowDate) {
    this.reportData.repeatCount = 0;

    if (!tool.isEmptyObject(this.reportData.useActives)) {
      for (var key in this.reportData.useActives) {
        this.reportData.useActives[key].activeCount = 0;
      }
    }

    tool.setStorage(constant_1.RecordDataKey, nowDate);
  }
}; //创建上报数据


exports.createReportData = function () {
  var _self = this;

  var reportData = this.reportData; // handle dom observer info

  if (!tool.isEmptyObject(this.analyseDomList)) {
    for (var key in this.analyseDomList) {
      var item = this.analyseDomList[key]; // no exist

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
  } //save storage


  tool.setStorage(constant_1.RecordKey, reportData);
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

var defaultConfig_1 = __importDefault(__webpack_require__(/*! ./defaultConfig */ "./src/services/analyse/simpleH5/defaultConfig.ts"));

var tool = __importStar(__webpack_require__(/*! ../../../util/tool */ "./src/util/tool.ts"));

var index_1 = __importDefault(__webpack_require__(/*! ../../../share/public/index */ "./src/share/public/index.ts"));

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
    var simpleH5AnalyseCustomConfig = simpleH5AnalyseCustom || {};
    _this._config = tool.extend(defaultConfig_1["default"], simpleH5AnalyseCustomConfig); //原生方法

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
    _this.uniqueId = tool.getUniqueID();
    /*上报内容*/

    _this.reportData = {
      id: tool.getUniqueID(),
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
}(index_1["default"]);

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
  };
  var control = {}; //option

  control.lazy = false;
  control.isError = false;
  control.isReport = true;
  return {
    reportParams: reportParams,
    control: control
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