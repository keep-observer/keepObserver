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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/services/monitor/htmlElementActive/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/services/monitor/htmlElementActive/api.ts":
/*!*******************************************************!*\
  !*** ./src/services/monitor/htmlElementActive/api.ts ***!
  \*******************************************************/
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
  this.isObserver = false;
  document.removeEventListener('click', this.handleElementEvent);
  document.removeEventListener('change', this.handleElementEvent);
};
/*
    开始监听
 */


exports.startObserver = function () {
  if (this.isObserver) return;
  this.isObserver = true;
  document.addEventListener('click', this.handleElementEvent);
  document.addEventListener('change', this.handleElementEvent);
};

/***/ }),

/***/ "./src/services/monitor/htmlElementActive/defaultConfig.ts":
/*!*****************************************************************!*\
  !*** ./src/services/monitor/htmlElementActive/defaultConfig.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 
observer htmlElement 实例默认配置数据
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  attrSelectFlag: 'KO_tracer_xPathFlag',
  elementActionTaslFalg: 'KO-tracer-flag',
  isGlobalElementActionCatch: false
};

/***/ }),

/***/ "./src/services/monitor/htmlElementActive/handle.ts":
/*!**********************************************************!*\
  !*** ./src/services/monitor/htmlElementActive/handle.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var CN_CodeReg = /[\u4e00-\u9fa5\w]/ig;
var Clear_CN_CodeReg = /[^\u4e00-\u9fa5\w]/ig;

exports.queryFlagElement = function (el) {
  var elementActionTaslFalg = this._config.elementActionTaslFalg;

  if (!index_1.Tools.isElement(el) || el.tagName.toLowerCase() === 'body') {
    return false;
  }

  var flag = el.getAttribute(elementActionTaslFalg);
  return index_1.Tools.isExist(flag) ? el : el.parentNode ? this.queryFlagElement(el.parentNode) : false;
};

exports.filterRepeat = function (elementActiveInfo) {
  if (!this.previouActiveElement) {
    this.previouActiveElement = elementActiveInfo;
    return true;
  }

  var type = elementActiveInfo.type,
      xPath = elementActiveInfo.xPath; //repeate click

  var preType = this.previouActiveElement.type;
  var preXpath = this.previouActiveElement.xPath;

  if (type === 'click' && type === preType && preXpath === xPath) {
    this.previouActiveElement = elementActiveInfo;
    return false;
  }

  this.previouActiveElement = elementActiveInfo;
  return true;
};

exports.createXPath = function (element) {
  var attrSelectFlag = this._config.attrSelectFlag; //id

  if (element.id) {
    return "//*[@id=\"" + element.id + "\"]";
  } //body


  if (element.nodeName.toLowerCase() === 'body') {
    return "/html/" + element.nodeName.toLowerCase();
  }

  if (!element.parentNode) {
    return 'unkonw-parentNode';
  }

  var index = 1;
  var brotherList = element.parentNode.children;
  element.setAttribute(attrSelectFlag, true);

  for (var i = 0, len = brotherList.length; i < len; i++) {
    var item = brotherList[i];

    if (item.getAttribute(attrSelectFlag)) {
      element.removeAttribute(attrSelectFlag);
      return this.createXPath(element.parentNode) + "/" + element.nodeName.toLowerCase() + (index > 1 ? '[' + index + ']' : '');
    } else if (item.nodeName.toLowerCase() === element.nodeName.toLowerCase()) {
      index++;
    }
  }
};

exports.createTitle = function (el) {
  var type = el.tagName.toLowerCase();
  var content = ''; //获取内容

  if (el.outerText && CN_CodeReg.test(el.outerText)) {
    content = el.outerText;
    content = content.replace(Clear_CN_CodeReg, '');
  } else if (el.textContent && CN_CodeReg.test(el.textContent)) {
    content = el.textContent.replace(Clear_CN_CodeReg, '');
  } else if (el.className !== '') {
    content = '.' + el.className;
  }

  content = content.length > 30 ? content.substring(0, 20) + '...' : content;
  return type + ':' + content;
};

exports.createSendMessage = function (type, element) {
  var title = this.createTitle(element);
  var xPath = this.createXPath(element);
  var value = type === 'change' ? element.value : ''; //change input checkbox radio 

  if (element.nodeName.toLowerCase() === 'input' && (element.type === 'checkbox' || element.type === 'radio')) {
    value = element.checked;
  }

  return {
    type: type,
    title: title,
    xPath: xPath,
    value: value
  };
};

exports.handleElementEvent = function (event) {
  var target = event.target,
      type = event.type;
  var isGlobalElementActionCatch = this._config.isGlobalElementActionCatch;
  var flag = isGlobalElementActionCatch ? true : this.queryFlagElement(target);
  if (!flag) return; //create message info

  var elementActiveInfo = this.createSendMessage(type, target); //filter repeate  click

  if (!this.filterRepeat(elementActiveInfo)) return;
  this.sendMessage({
    type: "monitor",
    typeName: 'htmlElementActive',
    data: elementActiveInfo
  });
};

/***/ }),

/***/ "./src/services/monitor/htmlElementActive/index.ts":
/*!*********************************************************!*\
  !*** ./src/services/monitor/htmlElementActive/index.ts ***!
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

var defaultConfig_1 = __importDefault(__webpack_require__(/*! ./defaultConfig */ "./src/services/monitor/htmlElementActive/defaultConfig.ts"));

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var api_1 = __webpack_require__(/*! ./api */ "./src/services/monitor/htmlElementActive/api.ts");

var handle_1 = __webpack_require__(/*! ./handle */ "./src/services/monitor/htmlElementActive/handle.ts");

var KeepObserverHtmlElementActive =
/** @class */
function (_super) {
  __extends(KeepObserverHtmlElementActive, _super); //构造函数


  function KeepObserverHtmlElementActive(config) {
    if (config === void 0) {
      config = {};
    }

    var _this = _super.call(this, config) || this; //method


    _this.queryFlagElement = handle_1.queryFlagElement.bind(_this);
    _this.filterRepeat = handle_1.filterRepeat.bind(_this);
    _this.createXPath = handle_1.createXPath.bind(_this);
    _this.createTitle = handle_1.createTitle.bind(_this);
    _this.createSendMessage = handle_1.createSendMessage.bind(_this);
    _this.handleElementEvent = handle_1.handleElementEvent.bind(_this);
    _this.stopObserver = api_1.stopObserver.bind(_this);
    _this.startObserver = api_1.startObserver.bind(_this); //初始化上传相关实例

    var _a = config,
        _b = _a.htmlElementCustom,
        htmlElementCustom = _b === void 0 ? false : _b,
        _c = _a.develop,
        develop = _c === void 0 ? false : _c;
    var htmlElementConfig = htmlElementCustom || config; //是否是开发模式

    htmlElementConfig.develop = develop; //存混合配置

    _this._config = index_1.Tools.extend(__assign({}, defaultConfig_1["default"]), htmlElementConfig); //是否开始监听

    _this.isObserver = false; //发送方法

    _this.sendMessage = function () {
      return null;
    }; //开始


    _this.startObserver();

    return _this;
  } //提供一个挂载入口


  KeepObserverHtmlElementActive.prototype.apply = function (_a) {
    var sendMessage = _a.sendMessage;
    this.sendMessage = sendMessage;
    return {
      $htmlElementActiveStop: this.stopObserver,
      $htmlElementActiveStart: this.startObserver
    };
  };

  return KeepObserverHtmlElementActive;
}(index_1.KeepObserverPublic);

exports["default"] = KeepObserverHtmlElementActive;

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