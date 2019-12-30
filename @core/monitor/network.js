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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/services/monitor/network/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/services/monitor/network/api.ts":
/*!*********************************************!*\
  !*** ./src/services/monitor/network/api.ts ***!
  \*********************************************/
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
  window.XMLHttpRequest.prototype.open = this._open(window).XMLHttpRequest.prototype.send = this._send(window).XMLHttpRequest.prototype.setRequestHeader = this._setRequestHeader;
  this._open = null;
  this._send = null;
  this.__setRequestHeader = null;
};
/*
    开始监听
 */


exports.startObserver = function () {
  //开启网络拦截监控
  this._handleInit();
};

/***/ }),

/***/ "./src/services/monitor/network/defaultConfig.ts":
/*!*******************************************************!*\
  !*** ./src/services/monitor/network/defaultConfig.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
    observer newwork 实例默认配置数据
 */

exports["default"] = {
  //默认超时时间 20S;
  timeout: 20000,
  //屏蔽URL
  ignoreRequestList: false,
  //自定义判断接口返回是否正确
  onHandleJudgeResponse: false,
  //自定义处理响应数据 
  onHandleResponseData: false,
  //自定义处理请求数据
  onHandleRequestData: false
};

/***/ }),

/***/ "./src/services/monitor/network/handle.ts":
/*!************************************************!*\
  !*** ./src/services/monitor/network/handle.ts ***!
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

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var networkTool = __importStar(__webpack_require__(/*! ./tool */ "./src/services/monitor/network/tool.ts"));

var reportFlag = 'keepObserver-reportAjax';
/*
    初始化ajax请求监控
    在这里替换window.XMLHttpRequest变量进行监控
*/

exports._handleInit = function () {
  var _self = this;

  var _XMLHttp = window.XMLHttpRequest; //不支持 ajax 不进行监控

  if (!_XMLHttp) {
    return false;
  }

  _self._open = window.XMLHttpRequest.prototype.open;
  _self._send = window.XMLHttpRequest.prototype.send;
  _self._setRequestHeader = window.XMLHttpRequest.prototype.setRequestHeader; //处理Ajax

  _self._handleXMLAjax();
};
/*
    拦截XML AJax信息
 */


exports._handleXMLAjax = function () {
  var _self = this; //拦截原生open


  window.XMLHttpRequest.prototype.open = function (method, url) {
    var XML = this;
    var args = index_1.tool.toArray(arguments); //定时器

    var timer = null; //获取请求唯一ID

    var id = index_1.tool.getUniqueID(); //获取方法

    var method = args[0]; //获取url

    var url = args[1]; //保存下 在send中使用

    XML._url = url;
    XML._method = method;
    XML._id = id; //保存下请求头 在拦截请求头处使用

    XML._setHead = {};
    XML._setHead[id] = {}; //拦截处理响应回调

    var _onreadystatechange = XML.onreadystatechange || function () {}; // start onreadystatechange


    var onreadystatechange = function onreadystatechange() {
      var item = _self.networkList[id] ? _self.networkList[id] : false; //如果不存在 可能略过了send 会导致丢失部分数据

      if (!item) {
        item = {}; //保存请求方法

        item.method = method;

        var _a = networkTool.handleReqUrl(url),
            url = _a.url,
            params = _a.params; //处理请求url和params


        item.url = url;
        item.params = params;
      } //更新状态


      item.status = 0;

      if (XML.readyState > 1) {
        item.status = XML.status;
      }

      item.responseType = XML.responseType; //判断请求状态

      if (XML.readyState == 0) {
        // 未开始
        if (!item.startTime) {
          item.startTime = +new Date();
        }
      } else if (XML.readyState == 1) {
        // 打开
        if (!item.startTime) {
          item.startTime = +new Date();
        }
      } else if (XML.readyState == 2) {// 发送		          	
      } else if (XML.readyState == 3) {//loading
      } else if (XML.readyState == 4) {
        //结束超时捕获
        _self._handleTimeout(id); //处理响应头


        item.responseHead = {};
        var header = XML.getAllResponseHeaders() || '',
            headerArr = header.split("\n"); //提取数据

        for (var i = 0; i < headerArr.length; i++) {
          var line = headerArr[i];

          if (!line) {
            continue;
          }

          var arr = line.split(': ');
          var key = arr[0],
              value = arr.slice(1).join(': ');
          item.responseHead[key] = value;
        } //完成


        clearInterval(timer);
        item.endTime = +new Date(), item.costTime = item.endTime - (item.startTime || item.endTime) + 'ms';
        item.response = XML.response; //请求结束完成

        setTimeout(function () {
          //是否是超时接口 超时的接口不做处理
          if (!_self.timeoutRequest[id]) {
            _self._handleDoneXML(id);
          }
        });
      } else {
        clearInterval(timer);
      } //如果这个接口已经超时处理了 那么不记录


      if (!_self.timeoutRequest[id]) {
        _self.networkList[id] = item;
      }

      return _onreadystatechange.apply(XML, arguments);
    };

    XML.onreadystatechange = onreadystatechange; //end onreadystatechange
    //防止第三方库更改状态
    //定时查看请求状态

    var preState = -1;
    timer = setInterval(function () {
      if (preState != XML.readyState) {
        preState = XML.readyState;
        onreadystatechange.call(XML);
      }
    }, 10);
    return _self._open.apply(XML, args);
  }(window).XMLHttpRequest.prototype.setRequestHeader = function (header) {
    var XML = this;
    var args = index_1.tool.toArray(arguments);

    if (XML._id && XML._setHead) {
      var setHead = XML._setHead[XML._id];
      var key = args[0] ? args[0] : 'unkownRequestHead';
      var value = args[1] ? args[1] : '';
      setHead[key] = value;
      XML._setHead[XML._id] = setHead; //如果是上报头,标记，则忽略设置

      if (key === reportFlag) {
        return;
      }
    }

    return _self._setRequestHeader.apply(XML, args);
  }(window).XMLHttpRequest.prototype.send = function () {
    var XML = this;
    var id = XML._id;

    var method = XML._method.toUpperCase();

    var requestHead = XML._setHead[id];
    var url = XML._url;
    var args = [].slice.call(arguments),
        data = args[0],
        saveData = ''; //监听列表中创建一条请求

    if (!_self.networkList[id]) {
      _self.networkList[id] = {};
    } //保存请求方法


    _self.networkList[id].method = method;

    var _a = networkTool.handleReqUrl(url),
        url = _a.url,
        params = _a.params; //处理请求url和params


    _self.networkList[id].url = url;
    _self.networkList[id].params = params; //保存自定义请求头

    if (requestHead) {
      _self.networkList[id].requestHead = index_1.tool.extend({}, requestHead);
      delete XML._setHead[id];
    } //如果是post数据保存


    if (method === 'POST') {
      if (index_1.tool.isString(data)) {
        saveData = data;
      }
    }

    _self.networkList[id].data = saveData; //开启定时器 判断接口是否超时

    _self._handleTimeout(id);

    return _self._send.apply(XML, args);
  };
};
/*
    处理接口请求超时
 */


exports._handleTimeout = function (id) {
  var _self = this;

  var timeout = _self._config.timeout;
  var isTimeout = _self.timeoutRequest[id] ? _self.timeoutRequest[id] : false;
  var time = _self.timeout[id] ? _self.timeout[id] : false;
  var item = _self.networkList[id]; //如果不存在 不做处理

  if (!item || isTimeout) {
    return false;
  }

  if (!time) {
    //如果没有那么创建检测超时定时器
    time = setTimeout(function () {
      //接口返回超时
      item.isTimeout = true;
      item.timeout = timeout;
      item.isError = true;
      item.errorContent = 'ajax request timeout，time:' + timeout + '(ms)'; //这里直接完成添加到超时列表 停止后续处理

      _self._handleDoneXML(id);

      _self.timeoutRequest[id] = true;
    }, timeout);
  } else {
    //如果存在 则说明已经回调 取消超时定时器
    clearTimeout(time);
  }
};
/*
    处理请求完成的数据
    @id:拦截请求唯一ID
 */


exports._handleDoneXML = function (id) {
  var _self = this;

  var ajaxItem = index_1.tool.extend({}, _self.networkList[id]);
  var _a = _self._config,
      onHandleJudgeResponse = _a.onHandleJudgeResponse,
      onHandleRequestData = _a.onHandleRequestData,
      onHandleResponseData = _a.onHandleResponseData; //空的对象不做处理

  if (index_1.tool.isEmptyObject(ajaxItem)) {
    return false;
  }
  /******   这里开始处理数据  *****/
  //判断当前请求数据url是否需要屏蔽


  if (!_self._handleJudgeDisbale(ajaxItem)) {
    _self.networkList[id];
    return false;
  } //如果存在自定义处理 请求data配置


  if (onHandleRequestData) {
    try {
      ajaxItem.handleReqData = onHandleRequestData(ajaxItem);
    } catch (err) {
      ajaxItem.handleReqData = 'Custom handleRequestData find error:' + err;
    }
  } //判断状态码是否出错


  var status = ajaxItem.status;

  if (!networkTool.validateStatus(status) && !ajaxItem.isError) {
    ajaxItem.isError = true;
    ajaxItem.errorContent = 'ajax request error! error statusCode:' + status;
  } //如果存在自定义处理 响应data配置


  if (onHandleResponseData && !ajaxItem.isError) {
    try {
      ajaxItem.handleResData = onHandleResponseData(ajaxItem);
    } catch (err) {
      ajaxItem.handleResData = 'Custom handleResponseData find error:' + err;
    }
  } //如果存在自定义处理响应数据是否出错


  if (onHandleJudgeResponse && !ajaxItem.isError) {
    try {
      ajaxItem.isError = onHandleJudgeResponse(ajaxItem);

      if (ajaxItem.isError) {
        ajaxItem.errorContent = ajaxItem.isError;
        ajaxItem.isError = true;
      }
    } catch (err) {
      ajaxItem.isError = true;
      ajaxItem.errorContent = 'Custom handleJudgeResponse find error:' + err;
    }
  } //通知上传


  _self.noticeReport(ajaxItem); //上报后删除记录


  delete _self.networkList[id];
};
/*
    判断该请求是否是屏蔽请求
    params
        ajaxInfo :即将上报的数据
    return
        忽略返回 false;
        不忽略返回 true
 */


exports._handleJudgeDisbale = function (ajaxInfo) {
  var ignoreRequestList = this._config.ignoreRequestList; //判断是否是是屏蔽url

  if (ignoreRequestList && index_1.tool.isArray(ignoreRequestList)) {
    var url = ajaxInfo.url;
    var unReport = false;
    ignoreRequestList.forEach(function (item) {
      if (url.indexOf(item) > -1) {
        unReport = true;
        return false;
      }
    });

    if (unReport) {
      return false;
    }
  } //判断是否是keepObserver的上报请求


  if (ajaxInfo.requestHead && ajaxInfo.requestHead[reportFlag]) {
    return false;
  }

  return true;
};

/***/ }),

/***/ "./src/services/monitor/network/index.ts":
/*!***********************************************!*\
  !*** ./src/services/monitor/network/index.ts ***!
  \***********************************************/
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

var defaultConfig_1 = __importDefault(__webpack_require__(/*! ./defaultConfig */ "./src/services/monitor/network/defaultConfig.ts"));

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var api_1 = __webpack_require__(/*! ./api */ "./src/services/monitor/network/api.ts");

var handle_1 = __webpack_require__(/*! ./handle */ "./src/services/monitor/network/handle.ts");

var report_1 = __webpack_require__(/*! ./report */ "./src/services/monitor/network/report.ts"); // 获取系统信息


var KeepObserverNetwork =
/** @class */
function (_super) {
  __extends(KeepObserverNetwork, _super); //构造函数


  function KeepObserverNetwork(config) {
    if (config === void 0) {
      config = {};
    }

    var _this = _super.call(this, config) || this; //method


    _this.stopObserver = api_1.stopObserver.bind(_this);
    _this.startObserver = api_1.startObserver.bind(_this);
    _this._handleInit = handle_1._handleInit.bind(_this);
    _this._handleXMLAjax = handle_1._handleXMLAjax.bind(_this);
    _this._handleTimeout = handle_1._handleTimeout.bind(_this);
    _this._handleDoneXML = handle_1._handleDoneXML.bind(_this);
    _this._handleJudgeDisbale = handle_1._handleJudgeDisbale.bind(_this);
    _this.handleReportData = report_1.handleReportData.bind(_this); //存混合配置

    var _a = config.networkCustom,
        networkCustom = _a === void 0 ? false : _a;
    var networkConfig = networkCustom || {};
    _this._config = index_1.tool.extend(defaultConfig_1["default"], networkConfig); //上报名

    _this._typeName = 'network'; //监控的数据列表

    _this.networkList = {}; //替换window.XMLHttpRequest变量

    _this._open = false;
    _this._send = false;
    _this._setRequestHeader = false; //辅助捕获超时

    _this.timeout = {};
    _this.timeoutRequest = {}; // 开启网络拦截监控

    _this.startObserver();

    return _this;
  } //提供一个挂载入口


  KeepObserverNetwork.prototype.apply = function (pipe) {
    this.addReportListener(pipe.sendPipeMessage);
    return {
      $networkStop: this.stopObserver,
      $networkStart: this.startObserver
    };
  };

  return KeepObserverNetwork;
}(index_1.KeepObserverPublic);

exports["default"] = KeepObserverNetwork;

/***/ }),

/***/ "./src/services/monitor/network/report.ts":
/*!************************************************!*\
  !*** ./src/services/monitor/network/report.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); //处理整理数据

exports.handleReportData = function (content) {
  var reportParams = {
    type: "monitor",
    typeName: 'network',
    data: content,
    location: window.location.href,
    environment: window.navigator.userAgent,
    reportTime: new Date().getTime()
  };
  var control = {}; //option

  control.lazy = true; //是否请求出错

  if (content.isError) {
    control = {};
    control.lazy = false;
    control.isReport = true; //是否是超时请求,超时请求不合并上报

    control.trackExtend = content.isTimeout ? false : true;
    control.isError = content.isTimeout ? false : true;
  }

  return {
    reportParams: reportParams,
    control: control
  };
};

/***/ }),

/***/ "./src/services/monitor/network/tool.ts":
/*!**********************************************!*\
  !*** ./src/services/monitor/network/tool.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
    处理URL
    分离base url 和params
    @return {
        url:  string
        params: object or string('')
    }
 */

var __values = this && this.__values || function (o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

function handleReqUrl(url) {
  var e_1, _a; //处理下解码URL


  url = window.decodeURIComponent(url);
  var params = '';
  var baseUrl = ''; //判断URL后面是否存在参数

  if (url.indexOf('?') === -1) {
    baseUrl = url;
  } else {
    var query = url.indexOf('?');
    baseUrl = url.substring(0, query);
    query = url.substring(query + 1, url.length);
    params = {};
    query = query.split('&'); // => ['b=c', 'd=?e']

    try {
      for (var query_1 = __values(query), query_1_1 = query_1.next(); !query_1_1.done; query_1_1 = query_1.next()) {
        var q = query_1_1.value;
        q = q.split('=');
        params[q[0]] = q[1];
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (query_1_1 && !query_1_1.done && (_a = query_1["return"])) _a.call(query_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  }

  return {
    url: baseUrl,
    params: params
  };
}

exports.handleReqUrl = handleReqUrl;
/*
    检查状态码是否正确
 */

function validateStatus(status) {
  return status >= 200 && status < 300;
}

exports.validateStatus = validateStatus;

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