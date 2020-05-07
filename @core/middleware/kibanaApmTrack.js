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

/***/ "./src/services/middleware/kibanaApmTrack/api.ts":
/*!*******************************************************!*\
  !*** ./src/services/middleware/kibanaApmTrack/api.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.cancelTrack = function () {
  this.isCancelTrack = true;
};

exports.startTrack = function () {
  this.isCancelTrack = false;
};

exports.cancelPatch = function () {
  window.removeEventListener("hashchange", this._handleHashPageChange);
  window.history.pushState = this._pushState;
  window.history.replaceState = this._replaceState;
};

/***/ }),

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
exports["default"] = {
  //是否中断掉正常的catch内容
  isInterruptNormal: false,
  //是否自动开始上报
  automaticStart: true,
  //上报时间format
  reportDateFormat: 'yyyy-MM-dd hh:mm:ss'
};

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

    var isInterruptNormal = _this._config.isInterruptNormal;

    var _a = __read(params, 1),
        _b = _a[0],
        message = _b === void 0 ? {} : _b;

    var _c = message.type,
        type = _c === void 0 ? false : _c,
        typeName = message.typeName; //中间件执行中会屏蔽发起的sendMessage

    _this.isSendlock = true; //valid message

    if (_this.isCancelTrack || !type || !index_1.Tools.isString(type) || type !== 'monitor') {
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

      case 'kibanaApmTrack':
        return next.apply(void 0, __spread(params));

      default:
        index_1.consoleTools.warnError("is no support track typeName:" + typeName);
        return next.apply(void 0, __spread(params));
    }

    return isInterruptNormal ? interrupt(false) : next.apply(void 0, __spread(params));
  };
};

exports._handleTrackLog = function (params) {
  this.trackList.push(params); //判断是否是error类型

  var type = params.data.type;

  if (type === 'error') {
    this.isWaitSend = 'pageError';
    this.errorContent = index_1.Tools.objectStringify(params.data);

    this._handleSendTrackMessage();
  }
};

exports._handleTrackNetwork = function (params) {
  this.trackList.push(params); //判断是否是请求出错

  var isError = params.data.isError;

  if (isError) {
    this.isWaitSend = 'pageError';
    this.errorContent = index_1.Tools.objectStringify(params.data);

    this._handleSendTrackMessage();
  }
};

exports._handleTrackHtmlElementActive = function (params) {
  this.trackList.push(params);
};

exports._handleTrackError = function (params) {
  this.trackList.push(params);
  this.isWaitSend = 'pageError';
  this.errorContent = index_1.Tools.objectStringify(params.data);

  this._handleSendTrackMessage();
}; //send 


exports._handleSendTrackMessage = function () {
  var reportData = null;
  var develop = this._config.develop;

  switch (this.isWaitSend) {
    case 'pageError':
      if (this.isSendlock) return;
      this.isWaitSend = false;
      reportData = this._handleCreateReport('pageError');
      this.errorContent = '';
      break;

    case 'pageHashChange':
      if (this.isSendlock) return;
      this.isWaitSend = false;
      reportData = this._handleCreateReport('pageHashChange');
      break;
  }

  if (!reportData) return;

  if (reportData.data && reportData.data.type === 'pageHashChange') {
    this.trackList = [];
    this.isPageChangeHandle = false;
  } //send


  if (develop) {
    index_1.consoleTools.log('track-reportData', reportData);
  }

  this.sendMessage(reportData);
};

exports._handleCreateReport = function (type) {
  var _this = this;

  var reportDateFormat = this._config.reportDateFormat;
  var now = new Date().getTime();
  var trackInfo = {
    type: type,
    url: window.location.href
  };

  switch (type) {
    case 'pageHashChange':
      trackInfo['tags'] = this.pageInfo;
      break;

    case 'pageError':
      trackInfo['tags'] = {
        startUrl: this.pageInfo.startUrl,
        startDate: this.pageInfo.startDate,
        findErrorDate: index_1.Tools.dateFormat(now, reportDateFormat),
        errorContent: this.errorContent
      };
      break;

    default:
      return false;
  }

  trackInfo['spans'] = this.trackList.map(function (span) {
    var reportDateFormat = _this._config.reportDateFormat;
    var typeName = span.typeName,
        reportTime = span.reportTime,
        data = span.data;
    var name = 'undefined';
    var type = span.type + "-" + typeName + ":" + index_1.Tools.dateFormat(reportTime, reportDateFormat);

    switch (typeName) {
      case 'log':
        name = data.type + "->" + index_1.Tools.substringLimt(data.data);
        break;

      case 'network':
        name = data.type + "->" + data.method + ":" + data.url + "(" + data.statusType + ":" + data.status + (data.response ? "->" + index_1.Tools.substringLimt(data.response) + ")" : ')');
        break;

      case 'htmlElementActive':
        name = data.type + "->" + data.title + "(xpath:" + data.xPath + ")" + (data.type === 'change' ? '->' + index_1.Tools.substringLimt(data.value) : '');
        break;

      case 'error':
        name = "Error->" + data.message + (data.filename ? '(' + data.filename + ')' : '');
        break;
    }

    return {
      name: name,
      type: type
    };
  });
  return {
    type: 'monitor',
    typeName: 'kibanaApmTrack',
    data: trackInfo,
    isError: type === 'pageError' ? true : false
  };
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

var handleMiddle_1 = __webpack_require__(/*! ./handleMiddle */ "./src/services/middleware/kibanaApmTrack/handleMiddle.ts");

var pageHashChange_1 = __webpack_require__(/*! ./pageHashChange */ "./src/services/middleware/kibanaApmTrack/pageHashChange.ts");

var api_1 = __webpack_require__(/*! ./api */ "./src/services/middleware/kibanaApmTrack/api.ts");

var KeepObserverMiddlewareKibanaApmTrack =
/** @class */
function (_super) {
  __extends(KeepObserverMiddlewareKibanaApmTrack, _super); //构造函数


  function KeepObserverMiddlewareKibanaApmTrack(config) {
    if (config === void 0) {
      config = {};
    }

    var _this = _super.call(this, config) || this;

    _this.isSendlock = true;
    _this.isWaitSend = false;
    _this.isPageChangeHandle = false;
    _this.isCancelTrack = true;
    _this.trackInfo = undefined;
    _this.pageInfo = null;
    _this.errorContent = '';
    _this.trackList = [];
    _this.resgisterPageHashChangeEventListener = pageHashChange_1.resgisterPageHashChangeEventListener.bind(_this);
    _this.checkPageHashUrlChange = pageHashChange_1.checkPageHashUrlChange.bind(_this);
    _this._handleHashPageChange = pageHashChange_1._handleHashPageChange.bind(_this);
    _this._pageStart = pageHashChange_1._pageStart.bind(_this);
    _this._pageHashNext = pageHashChange_1._pageHashNext.bind(_this); //send

    _this._handleSendTrackMessage = handleMiddle_1._handleSendTrackMessage.bind(_this);
    _this._handleCreateReport = handleMiddle_1._handleCreateReport.bind(_this); //method

    _this._handleReciceReportMessage = handleMiddle_1._handleReciceReportMessage.bind(_this);
    _this._handleTrackLog = handleMiddle_1._handleTrackLog.bind(_this);
    _this._handleTrackNetwork = handleMiddle_1._handleTrackNetwork.bind(_this);
    _this._handleTrackHtmlElementActive = handleMiddle_1._handleTrackHtmlElementActive.bind(_this);
    _this._handleTrackError = handleMiddle_1._handleTrackError.bind(_this); //api

    _this.cancelTrack = api_1.cancelTrack.bind(_this);
    _this.startTrack = api_1.startTrack.bind(_this);
    _this.cancelPatch = api_1.cancelPatch.bind(_this);
    var _a = config.develop,
        develop = _a === void 0 ? false : _a; //存混合配置

    _this._config = index_1.Tools.extend(__assign({}, defaultConfig_1["default"]), __assign({}, config, {
      develop: develop
    }));
    var reportDateFormat = _this._config.reportDateFormat;
    _this.pageInfo = {
      startUrl: '',
      startDate: index_1.Tools.dateFormat(new Date().getTime(), reportDateFormat),
      nextUrl: '',
      nextDate: 0
    }; //发送方法

    _this.sendMessage = function () {
      return index_1.consoleTools.warnError('sendMessage is not active, apply receive sendPipeMessage fail ');
    }; //注册pageHashChange事件


    _this.resgisterPageHashChangeEventListener();

    return _this;
  } //提供一个挂载入口


  KeepObserverMiddlewareKibanaApmTrack.prototype.apply = function (_a) {
    var _this = this;

    var sendMessage = _a.sendMessage,
        useExtendMiddle = _a.useExtendMiddle,
        registerSendDoneCallback = _a.registerSendDoneCallback;
    var automaticStart = this._config.automaticStart;
    this.sendMessage = sendMessage; //receive message

    useExtendMiddle('sendMessage', this._handleReciceReportMessage); //send wait

    registerSendDoneCallback(function () {
      _this.isSendlock = false;
      if (!_this.isWaitSend) return;

      _this._handleSendTrackMessage();
    });

    if (automaticStart) {
      this.startTrack();
    }

    return {
      cancelTrack: this.cancelTrack,
      startTrack: this.startTrack,
      cancelHashChangePatch: this.cancelPatch
    };
  };

  return KeepObserverMiddlewareKibanaApmTrack;
}(index_1.KeepObserverPublic);

exports["default"] = KeepObserverMiddlewareKibanaApmTrack;

/***/ }),

/***/ "./src/services/middleware/kibanaApmTrack/pageHashChange.ts":
/*!******************************************************************!*\
  !*** ./src/services/middleware/kibanaApmTrack/pageHashChange.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

exports.resgisterPageHashChangeEventListener = function () {
  //监听相关内容
  var self = this; //hashchange

  window.addEventListener("hashchange", this._handleHashPageChange); //pushStateModel  replaceStateModel

  self._pushState = window.history.pushState;

  window.history.pushState = function (state, title, url) {
    var oldURL = window.location.href;
    var newURL = url ? url : oldURL; // hook 

    self._handleHashPageChange({
      eventName: 'pushState',
      oldURL: oldURL,
      newURL: newURL,
      state: state,
      title: title
    }); //run 


    return self._pushState.apply(window.history, arguments);
  };

  self._replaceState = window.history.replaceState;

  window.history.replaceState = function (state, title, url) {
    var oldURL = window.location.href;
    var newURL = url ? url : oldURL; // hook 

    self._handleHashPageChange({
      eventName: 'replaceState',
      oldURL: oldURL,
      newURL: newURL,
      state: state,
      title: title
    });

    return self._replaceState.apply(window.history, arguments);
  }; //start receive


  this._pageStart();
};

exports.checkPageHashUrlChange = function (oldUrl, newUrL) {
  //其中某一次不存在
  if (!oldUrl || !newUrL || !index_1.Tools.isString(oldUrl) || !index_1.Tools.isString(newUrL)) {
    return false;
  } //has path没有变化


  var newPath = newUrL.indexOf('?') > -1 ? newUrL.split('?')[0] : newUrL;
  var oldPath = oldUrl.indexOf('?') > -1 ? oldUrl.split('?')[0] : oldUrl;

  if (newPath === oldPath) {
    return false;
  }

  return true;
};

exports._handleHashPageChange = function (event) {
  if (this.isPageChangeHandle) {
    return false;
  }

  var newURL = event.newURL,
      oldURL = event.oldURL;
  if (this.isCancelTrack || !this.checkPageHashUrlChange(oldURL, newURL)) return; // next page

  this.isPageChangeHandle = true;

  this._pageHashNext(newURL);
}; // page status


exports._pageStart = function () {
  var reportDateFormat = this._config.reportDateFormat;
  var startUrl = window.location.href;
  var startDate = index_1.Tools.dateFormat(new Date().getTime(), reportDateFormat);
  this.pageInfo = __assign({}, this.pageInfo, {
    startUrl: startUrl,
    startDate: startDate
  });
};

exports._pageHashNext = function (nextHash) {
  var reportDateFormat = this._config.reportDateFormat;
  var nextUrl = nextHash || window.location.href;
  var nextDate = index_1.Tools.dateFormat(new Date().getTime(), reportDateFormat);
  this.pageInfo = __assign({}, this.pageInfo, {
    nextUrl: nextUrl,
    nextDate: nextDate
  }); //开启pageHashChange上报
  //如果有pageError未发生的就忽略

  if (!this.isWaitSend) {
    this.isWaitSend = 'pageHashChange';

    this._handleSendTrackMessage();
  }
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