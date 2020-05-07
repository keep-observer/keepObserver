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
    停止捕获
*/

exports.stopObserver = function () {
  this.isCatch = false;
};
/*
    开始捕获
 */


exports.startObserver = function () {
  this.isCatch = true;
};
/*
    取消拦截
*/


exports.cancelPatch = function () {
  //这种方式会和angular 6的zone 等polyfills.js产生冲突
  window.XMLHttpRequest.prototype.open = this._open;
  window.XMLHttpRequest.prototype.send = this._send;
  window.XMLHttpRequest.prototype.setRequestHeader = this._setRequestHeader;
  window.fetch = this._fetch;
  this._open = null;
  this._send = null;
  this._setRequestHeader = null;
  this._fetch = null;
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
  ignoreRequestList: [],
  //是否捕获响应内容
  isCatchResponseContent: true,
  //是否自动开始上报
  automaticStart: true
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
/*
    初始化ajax请求监控
    在这里替换window.XMLHttpRequest变量进行监控
*/


exports._init = function () {
  //拦截Ajax以及fetch
  this._patchXMLAjax();

  this._patchFetch();
};
/*
    拦截XML AJax信息
 */


exports._patchXMLAjax = function () {
  var _self = this;

  var isCatchResponseContent = _self._config.isCatchResponseContent;
  var _XMLHttp = window.XMLHttpRequest; //不支持 ajax 不进行监控

  if (!_XMLHttp) {
    return false;
  }

  _self._open = window.XMLHttpRequest.prototype.open;
  _self._send = window.XMLHttpRequest.prototype.send;
  _self._setRequestHeader = window.XMLHttpRequest.prototype.setRequestHeader; //拦截原生open

  window.XMLHttpRequest.prototype.open = function (method, url) {
    var XML = this;
    var args = index_1.Tools.toArray(arguments); //定时器

    var timer = null; //获取请求唯一ID

    var id = index_1.Tools.getUniqueID(); //获取方法

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

        var _a = networkTool.handleReqUrl(XML._url),
            url_1 = _a.url,
            params = _a.params; //处理请求url和params


        item.url = url_1;
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
        item.endTime = +new Date(), item.costTime = item.endTime - (item.startTime || item.endTime);
        item.response = isCatchResponseContent ? XML.response : 'no-catch-responseContent'; //请求结束完成

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
  }; //拦截原始设置请求头


  window.XMLHttpRequest.prototype.setRequestHeader = function (header) {
    var XML = this;
    var args = index_1.Tools.toArray(arguments);

    if (XML._id && XML._setHead) {
      var setHead = XML._setHead[XML._id];
      var key = args[0] ? args[0] : 'unkownRequestHead';
      var value = args[1] ? args[1] : '';
      setHead[key] = value;
      XML._setHead[XML._id] = setHead;
    }

    return _self._setRequestHeader.apply(XML, args);
  }; //拦截原生send


  window.XMLHttpRequest.prototype.send = function () {
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
    } //type ajax


    _self.networkList[id].type = 'ajax'; //保存请求方法

    _self.networkList[id].method = method;

    var _a = networkTool.handleReqUrl(url),
        url = _a.url,
        params = _a.params; //处理请求url和params


    _self.networkList[id].url = url;
    _self.networkList[id].params = params; //保存自定义请求头

    if (requestHead) {
      _self.networkList[id].requestHead = index_1.Tools.extend({}, requestHead);
      delete XML._setHead[id];
    } //如果是post数据保存


    if (method === 'POST') {
      if (index_1.Tools.isString(data)) {
        saveData = data;
      }
    }

    _self.networkList[id].body = saveData; //发送

    _self._handleSendXML(id); //开启定时器 判断接口是否超时


    _self._handleTimeout(id);

    return _self._send.apply(XML, args);
  };
};
/*
    拦截fetch信息
 */


exports._patchFetch = function () {
  if (!window.fetch) {
    return false;
  }

  var _self = this;

  var isCatchResponseContent = _self._config.isCatchResponseContent;
  _self._fetch = window.fetch; //https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch#%E5%8F%82%E6%95%B0

  window.fetch = function (input, init) {
    if (init === void 0) {
      init = undefined;
    }

    var fetchSelf = this;
    var args = arguments;
    var id = index_1.Tools.getUniqueID();

    if (!_self.networkList[id]) {
      _self.networkList[id] = {};
    }

    var _a = networkTool.handleReqUrl(input.toString()),
        url = _a.url,
        params = _a.params; //处理请求url和params


    _self.networkList[id].type = 'fetch';
    _self.networkList[id].url = url;
    _self.networkList[id].status = 0;
    _self.networkList[id].params = params;

    if (init && !index_1.Tools.isEmptyObject(init)) {
      _self.networkList[id].method = init.method ? init.method.toUpperCase() : 'GET';
      _self.networkList[id].body = init.body ? index_1.Tools.objectStringify(init.body) : '';
      _self.networkList[id].requestHead = init.headers ? init.headers : undefined;
    } else {
      _self.networkList[id].method = 'GET';
      _self.networkList[id].body = '';
      _self.networkList[id].requestHead = undefined;
    }

    _self._handleSendXML(id);

    return new Promise(function (resolve, reject) {
      var promise;
      var startTime = new Date().getTime();

      var handleResponse = function handleResponse(response, content) {
        _self.networkList[id].costTime = new Date().getTime() - startTime;
        _self.networkList[id].response = isCatchResponseContent ? content : 'no-catch-responseContent';
        _self.networkList[id].status = response ? response.status : 0 || 0;
        var headers = index_1.Tools.toArray(response.headers.keys());

        if (!index_1.Tools.isEmptyArray(headers)) {
          _self.networkList[id].responseHead = {};
          headers.forEach(function (key) {
            _self.networkList[id].responseHead[key] = response.headers.get(key);
          });
        } else {
          _self.networkList[id].responseHead = undefined;
        }

        _self.networkList[id].responseType = response.type;
        setTimeout(function () {
          //是否是超时接口 超时的接口不做处理
          if (!_self.timeoutRequest[id]) {
            _self._handleDoneXML(id);
          }
        });
      };

      try {
        _self.networkList[id].startTime = startTime; //开启定时器 判断接口是否超时

        _self._handleTimeout(id);

        promise = _self._fetch.apply(fetchSelf, args);
      } catch (error) {
        _self.networkList[id].costTime = new Date().getTime() - startTime;
        _self.networkList[id].response = 'fetch error:' + error;
        _self.networkList[id].responseHead = '';
        _self.networkList[id].responseType = 'error';
        setTimeout(function () {
          _self._handleDoneXML(id);
        });
        reject(error);
        return;
      }

      promise.then(function (response) {
        resolve(response.clone()); //结束超时捕获

        _self._handleTimeout(id); //stream only


        if (response.ok) {
          response.text().then(function (content) {
            handleResponse(response, content);
          }, function (err) {
            handleResponse(response, 'fetch response.text() error:' + err);
          });
        } else {
          handleResponse(response, 'fetch error:' + response.statusText);
        }
      }, function (error) {
        //结束超时捕获
        _self._handleTimeout(id);

        _self.networkList[id].costTime = new Date().getTime() - startTime;
        _self.networkList[id].response = 'fetch error:' + error;
        _self.networkList[id].responseHead = '';
        _self.networkList[id].responseType = 'error';
        setTimeout(function () {
          //是否是超时接口 超时的接口不做处理
          if (!_self.timeoutRequest[id]) {
            _self._handleDoneXML(id);
          }
        });
        reject(error);
      });
    });
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
      item.errorContent = 'ajax request timeout，time:' + timeout + '(ms)';
      item.response = item.response || 'ajax request timeout，time:' + timeout + '(ms)'; //这里直接完成添加到超时列表 停止后续处理

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

  var ajaxItem = index_1.Tools.extend({}, _self.networkList[id]); //空的对象不做处理

  if (index_1.Tools.isEmptyObject(ajaxItem)) {
    return false;
  }

  ajaxItem.statusType = 'response';
  /******   这里开始处理数据  *****/
  //判断当前请求数据url是否需要屏蔽

  if (!this.isCatch || !_self._handleJudgeDisbale(ajaxItem)) {
    delete _self.networkList[id];
    return false;
  } //判断状态码是否出错


  var status = ajaxItem.status;

  if (!networkTool.validateStatus(status) && !ajaxItem.isError) {
    ajaxItem.isError = true;
    ajaxItem.response = ajaxItem.response || 'ajax request error! error statusCode:' + (status || 0);
    ajaxItem.errorContent = 'ajax request error! error statusCode:' + (status || 0);
  } //通知上传


  _self.sendMessage({
    type: "monitor",
    typeName: 'network',
    data: ajaxItem,
    isError: ajaxItem.isTimeout || ajaxItem.isError ? true : false
  }); //上报后删除记录


  delete _self.networkList[id];
};
/*
    处理发送的请求
    @id:拦截请求唯一ID
 */


exports._handleSendXML = function (id) {
  var _self = this;

  var ajaxItem = index_1.Tools.extend({}, _self.networkList[id]); //空的对象不做处理

  if (index_1.Tools.isEmptyObject(ajaxItem)) {
    return false;
  }

  ajaxItem.statusType = 'request'; //判断当前请求数据url是否需要屏蔽

  if (!this.isCatch || !_self._handleJudgeDisbale(ajaxItem)) {
    delete _self.networkList[id];
    return false;
  } //通知上传


  _self.sendMessage({
    type: "monitor",
    typeName: 'network',
    data: ajaxItem
  });
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

  if (ignoreRequestList && !index_1.Tools.isEmptyArray(ignoreRequestList)) {
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

var defaultConfig_1 = __importDefault(__webpack_require__(/*! ./defaultConfig */ "./src/services/monitor/network/defaultConfig.ts"));

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var api_1 = __webpack_require__(/*! ./api */ "./src/services/monitor/network/api.ts");

var handle_1 = __webpack_require__(/*! ./handle */ "./src/services/monitor/network/handle.ts"); // 获取系统信息


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
    _this.cancelPatch = api_1.cancelPatch.bind(_this);
    _this._init = handle_1._init.bind(_this);
    _this._patchXMLAjax = handle_1._patchXMLAjax.bind(_this);
    _this._patchFetch = handle_1._patchFetch.bind(_this);
    _this._handleTimeout = handle_1._handleTimeout.bind(_this);
    _this._handleDoneXML = handle_1._handleDoneXML.bind(_this);
    _this._handleSendXML = handle_1._handleSendXML.bind(_this);
    _this._handleJudgeDisbale = handle_1._handleJudgeDisbale.bind(_this); //存混合配置

    var _a = config,
        _b = _a.networkCustom,
        networkCustom = _b === void 0 ? false : _b,
        _c = _a.reportCustom,
        reportCustom = _c === void 0 ? false : _c;
    var reportUrl = reportCustom && reportCustom.reportUrl ? reportCustom.reportUrl : [];
    var networkConfig = index_1.Tools.extend({
      reportUrl: reportUrl
    }, networkCustom || config);
    _this._config = index_1.Tools.extend(__assign({}, defaultConfig_1["default"]), networkConfig);
    _this._config.ignoreRequestList = _this._config.ignoreRequestList.concat(reportUrl); //kabanaApm serverUrl

    if (_this._config.serverUrl) {
      _this._config.ignoreRequestList.push(_this._config.serverUrl);
    } //是否开启捕获


    _this.isCatch = false; //监控的数据列表

    _this.networkList = {}; //辅助捕获超时

    _this.timeout = {};
    _this.timeoutRequest = {}; // 发送消息

    _this.sendMessage = function () {
      return index_1.consoleTools.warnError('sendMessage is not active, apply receive sendPipeMessage fail ');
    }; // 开启网络拦截监控


    _this._init();

    return _this;
  } //提供一个挂载入口


  KeepObserverNetwork.prototype.apply = function (_a) {
    var sendMessage = _a.sendMessage;
    var automaticStart = this._config.automaticStart;
    this.sendMessage = sendMessage; //开启捕获

    if (automaticStart) {
      this.startObserver();
    }

    return {
      networkStop: this.stopObserver,
      networkStart: this.startObserver,
      networkCancelPatch: this.cancelPatch
    };
  };

  return KeepObserverNetwork;
}(index_1.KeepObserverPublic);

exports["default"] = KeepObserverNetwork;

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