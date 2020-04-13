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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/instance/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); //上报数据类型

exports.reportType = ['unKownType', 'log', 'network', 'vue']; //版本号

exports.version = '2.0.0-beta.1'; //公共中间件

exports.publicMiddleScopeNames = ['sendMessage', 'error'];

/***/ }),

/***/ "./src/instance/defaultConfig.ts":
/*!***************************************!*\
  !*** ./src/instance/defaultConfig.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
    keepObserver 默认配置
*/

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var index_2 = __webpack_require__(/*! ../constants/index */ "./src/constants/index.ts");

exports["default"] = {
  //更新版本是否清除缓存
  updateVersionClearCache: false,
  //kibana apm
  projectName: "",
  projectVersion: "",
  version: index_2.version,
  //唯一设备id
  deviceID: index_1.getDeviceId()
};

/***/ }),

/***/ "./src/instance/index.ts":
/*!*******************************!*\
  !*** ./src/instance/index.ts ***!
  \*******************************/
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

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var defaultConfig_1 = __importDefault(__webpack_require__(/*! ./defaultConfig */ "./src/instance/defaultConfig.ts"));

var index_2 = __importDefault(__webpack_require__(/*! ./pipe/index */ "./src/instance/pipe/index.ts"));

var update_1 = __webpack_require__(/*! ./method/update */ "./src/instance/method/update.ts");

var api_1 = __webpack_require__(/*! ./method/api */ "./src/instance/method/api.ts");

var middle_1 = __webpack_require__(/*! ./method/middle */ "./src/instance/method/middle.ts");

var base_1 = __webpack_require__(/*! ./method/base */ "./src/instance/method/base.ts");

var KeepObserver =
/** @class */
function (_super) {
  __extends(KeepObserver, _super);

  function KeepObserver(config) {
    if (config === void 0) {
      config = {};
    }

    var _this = _super.call(this, config = index_1.Tools.extend(defaultConfig_1["default"], config)) || this; //method


    _this.updateVersionClearCache = update_1.updateVersionClearCache.bind(_this);
    _this.registerApi = api_1.registerApi.bind(_this); //api

    _this.apis = api_1.apis.bind(_this); //主实例重载中间件服务

    _this.useMiddle = middle_1.useMiddle.bind(_this);
    _this.getRunMiddle = middle_1.getRunMiddle.bind(_this); //扩展上报属性

    _this.extendReportParams = base_1.extendReportParams.bind(_this); //挂载插件服务

    _this.use = base_1.use.bind(_this); //获取实例配置

    _this._config = config; //管道实例

    _this._pipe = new index_2["default"](_this, _this._config); //扩展上报内容

    var _a = _this._config,
        projectName = _a.projectName,
        projectVersion = _a.projectVersion,
        version = _a.version;

    _this.extendReportParams({
      projectName: projectName,
      projectVersion: projectVersion,
      version: version
    }); //扩展中间件


    _this.middleScopeNames = _this.middleScopeNames.concat(_this._publicMiddleScopeNames); //是否需要更新版本清除缓存

    if (_this._config.projectVersion && _this._config.updateVersionClearCache) {
      _this.updateVersionClearCache();
    }

    return _this;
  }

  return KeepObserver;
}(index_1.KeepObserverPublic);

exports["default"] = KeepObserver;

/***/ }),

/***/ "./src/instance/method/api.ts":
/*!************************************!*\
  !*** ./src/instance/method/api.ts ***!
  \************************************/
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

exports.registerApi = function (apiName, cb) {
  var _self = this;

  if (_self.apis[apiName]) {
    return index_1.consoleTools.warnError("apiName:" + apiName + " is defined");
  }

  _self.apis[apiName] = cb;
};

exports.apis = function (apiName) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  var _self = this;

  if (!_self.apis[apiName]) {
    var errorMsg = "apiName:" + apiName + " is undefined";
    index_1.consoleTools.warnError(errorMsg);
    return _self.runMiddle('error', errorMsg);
  }

  var callback = _self.apis[apiName];
  var res = null;

  try {
    var res = callback.apply(void 0, __spread(args));
  } catch (e) {
    var errorMsg = "apiName:" + apiName + " is run find error:" + e;
    index_1.consoleTools.warnError(errorMsg);

    _self.runMiddle('error', errorMsg);
  }

  return res;
};

/***/ }),

/***/ "./src/instance/method/base.ts":
/*!*************************************!*\
  !*** ./src/instance/method/base.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index"); //扩展上报属性


exports.extendReportParams = function (params) {
  return index_1.KeepObserverPublic.extendReport(params);
}; //挂载插件服务


exports.use = function (Provider) {
  return this._pipe.use(Provider);
};

/***/ }),

/***/ "./src/instance/method/middle.ts":
/*!***************************************!*\
  !*** ./src/instance/method/middle.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index"); //主实例重载中间件服务


exports.useMiddle = function (scopeName, middlesFn) {
  if (this.middleScopeNames.indexOf(scopeName) === -1) {
    this.middleScopeNames.push(scopeName);
  }

  return index_1.KeepObserverMiddleWare.usePublishMiddles(scopeName, middlesFn);
}; //当前正在运行的中间件实例


exports.getRunMiddle = function () {
  return index_1.KeepObserverMiddleWare.currentRunMiddle;
};

/***/ }),

/***/ "./src/instance/method/update.ts":
/*!***************************************!*\
  !*** ./src/instance/method/update.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var updateVersionRecordKey = 'versionRecord';
var keepObserverRecordReg = /^keepObserverData/i;

exports.updateVersionClearCache = function () {
  var oldVersion = index_1.Tools.getStorage(updateVersionRecordKey);

  if (!this._config.projectVersion || this._config.projectVersion === oldVersion) {
    return false;
  }

  if (!window.localStorage) {
    return false;
  }

  for (var key in window.localStorage) {
    if (keepObserverRecordReg.test(key)) {
      localStorage.removeItem(key);
      this.$devWarn('[keepObserver] updateVersionRecord key:' + key);
    }
  }

  index_1.Tools.setStorage(updateVersionRecordKey, this._config.projectVersion);
};

/***/ }),

/***/ "./src/instance/pipe/MQ/index.ts":
/*!***************************************!*\
  !*** ./src/instance/pipe/MQ/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var triggerQueue_1 = __webpack_require__(/*! ./triggerQueue */ "./src/instance/pipe/MQ/triggerQueue.ts");

var receiveQueue_1 = __webpack_require__(/*! ./receiveQueue */ "./src/instance/pipe/MQ/receiveQueue.ts");

var MessageQueue =
/** @class */
function () {
  function MessageQueue(config, $pipe) {
    //method
    this.noticeListener = triggerQueue_1.noticeListener.bind(this);
    this.sendPipeMessage = triggerQueue_1.sendPipeMessage.bind(this);
    this.registerRecivePipeMessage = receiveQueue_1.registerRecivePipeMessage.bind(this); //消息是否在执行

    this.isRun = false; //消息队列

    this.messageQueue = []; //管道实例

    this.$pipe = $pipe; //消费者集合

    this.consumerMap = {};
  }

  return MessageQueue;
}();

exports["default"] = MessageQueue;

/***/ }),

/***/ "./src/instance/pipe/MQ/receiveQueue.ts":
/*!**********************************************!*\
  !*** ./src/instance/pipe/MQ/receiveQueue.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index"); //注册管道接收数据函数


exports.registerRecivePipeMessage = function (id, scope) {
  var _self = this; //修正索引


  if (_self.consumerMap[id]) {
    var errMsg = 'register recive pipe index is Occupy';
    index_1.consoleTools.warnError(errMsg);

    _self.$pipe.$keepObserver.runMiddle('error', errMsg);

    return false;
  } //返回一个闭包函数用来接收注册函数


  return function (fn) {
    //接收函数
    if (!fn || !index_1.Tools.isFunction(fn)) {
      var errMsg = 'registerRecivePipeMessage method receive function is not right';
      index_1.consoleTools.warnError(errMsg);

      _self.$pipe.$keepObserver.runMiddle('error', errMsg);

      return;
    } //内部修改作用域调用


    _self.consumerMap[id] = function () {
      var agrs = index_1.Tools.toArray(arguments); //向注册进来的接收函数发送数据

      return fn.apply(scope, agrs);
    };
  };
};

/***/ }),

/***/ "./src/instance/pipe/MQ/triggerQueue.ts":
/*!**********************************************!*\
  !*** ./src/instance/pipe/MQ/triggerQueue.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index"); //发送消息在管道内流通


exports.sendPipeMessage = function (id, params) {
  var _self = this;

  var msgItem = {
    id: id,
    params: params
  }; //如果正在执行

  if (_self.isRun) {
    return false;
  } //是否消息队列加锁,并且防止异常消息
  //进入消息队列


  _self.messageQueue.push(msgItem); //异步执行消息队列分发


  setTimeout(function () {
    //获取消息队列数组快照
    var queue = _self.messageQueue.map(function (e) {
      return e;
    }); //清空队列


    _self.messageQueue = []; //通知监听

    exports.noticeListener.call(_self, queue);
  });
}; //通知监听


exports.noticeListener = function (queue) {
  var _self = this;

  if (!index_1.Tools.isArray(queue) || queue.length === 0) {
    return false;
  } //接收消息进入等待状态


  _self.isRun = true; //分发处理消息

  Promise.all(queue.map(function (item) {
    var id = item.id,
        params = item.params; //消息分发

    return Promise.all(index_1.Tools.mapToArray(_self.consumerMap, function (cb, pipeId) {
      //判断是否是正确注册接收函数
      if (!index_1.Tools.isFunction(cb)) {
        return false;
      } //不允许自发自收


      if (id === pipeId) {
        return false;
      } //分发


      try {
        //执行分发
        return cb(params) || false;
      } catch (e) {
        var errMsg = 'handle message is runing error:' + e;
        index_1.consoleTools.warnError(errMsg);

        _self.$pipe.$keepObserver.runMiddle('error', errMsg);
      }
    }));
  }))["finally"](function () {
    //执行状态结束，放到下个阶段，屏蔽处理阶段立即发起的消息
    _self.isRun = false;
  });
};

/***/ }),

/***/ "./src/instance/pipe/PipeUser/index.ts":
/*!*********************************************!*\
  !*** ./src/instance/pipe/PipeUser/index.ts ***!
  \*********************************************/
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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var index_2 = __webpack_require__(/*! @util/index */ "@util/index");

var index_3 = __importDefault(__webpack_require__(/*! ../WatchDog/index */ "./src/instance/pipe/WatchDog/index.ts"));

var PipeUser =
/** @class */
function (_super) {
  __extends(PipeUser, _super);

  function PipeUser(index, $pipe, scope) {
    var _this = _super.call(this) || this; //index


    _this.pipeIndex = index; //register watchDog

    var $watchDog = new index_3["default"](); //provide sendMessage

    _this.sendMessage = $watchDog.sendMessageLimtWatch(
    /* watch fn */
    function (catchParams) {
      //mq handle process message ignore
      if ($pipe.$mq.isRun) return; //send message

      var isError = true;

      var _a = __read($pipe._publicMiddleScopeNames, 1),
          sendMessage = _a[0];

      var reportParams = _this.handleReportData(catchParams); //  1 -> 2 -> 3 -> 2 -> 1


      return _this.runMiddle(sendMessage, reportParams).then(function (middleReportParams) {
        isError = false;
        index_2.consoleTools.devLog($pipe._develop, middleReportParams);
        $pipe.$mq.sendPipeMessage(index, middleReportParams);
      }) //check error
      ["finally"](function () {
        if (isError) {
          index_2.consoleTools.devLog($pipe._develop, reportParams);
          $pipe.$mq.sendPipeMessage(index, reportParams);
        }
      });
    },
    /* anomaly callback */
    function (anomalyMessage) {
      $pipe.$keepObserver.runMiddle('error', anomalyMessage);
    }); //extend middle

    _this.runExtendMiddle = function (scopeName) {
      var args = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }

      var _a;

      return (_a = $pipe.$keepObserver).runMiddle.apply(_a, __spread([scopeName], args));
    };

    _this.useExtendMiddle = function (scopeName, middlesFn) {
      return $pipe.$keepObserver.useMiddle(scopeName, middlesFn);
    }; //extend report params


    _this.extendsReportParams = function (params) {
      return $pipe.$keepObserver.extendReportParams(params);
    }; //provide reciveMessage 


    _this.registerReciveMessage = $pipe.$mq.registerRecivePipeMessage(index, scope);
    return _this;
  }

  return PipeUser;
}(index_1.KeepObserverPublic);

exports["default"] = PipeUser;

/***/ }),

/***/ "./src/instance/pipe/WatchDog/index.ts":
/*!*********************************************!*\
  !*** ./src/instance/pipe/WatchDog/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var WatchDog =
/** @class */
function () {
  function WatchDog(config) {
    if (config === void 0) {
      config = {};
    }

    this._config = config;
  } //api


  WatchDog.prototype.sendMessageLimtWatch = function (fn, anomalyCallback) {
    var anomaly = false;
    var countBuff = {};
    var resetCountFn = index_1.Tools.debounceWrap(1000)(function () {
      return countBuff = {};
    });
    var resetAnomaly = index_1.Tools.throttleWrap(3000)(function () {
      return anomaly = false;
    });

    var limtJudgeAnomaly = function limtJudgeAnomaly(count, catchParams, anomalyCallback) {
      //启动定时器每秒恢复一次计数
      resetCountFn();

      if (count === 10) {
        var msg = 'send  Message during 1000ms in Over 10 times,maybe Anomaly';
        index_1.consoleTools.warnError(msg, catchParams);
        anomalyCallback(msg);
        return false;
      }

      if (count > 20) {
        var msg = 'send  Message during 1000ms in Over 20 times,maybe happend Endless loop';
        index_1.consoleTools.warnError(msg, catchParams);
        anomalyCallback(msg);
        return true;
      }

      return false;
    };

    var watchWrap = function watchWrap(catchParams) {
      var _a = catchParams || {},
          _b = _a.isIgnoreSendRepeat,
          isIgnoreSendRepeat = _b === void 0 ? false : _b,
          _c = _a.type,
          type = _c === void 0 ? "undefined" : _c,
          _d = _a.typeName,
          typeName = _d === void 0 ? "undefined" : _d,
          _e = _a.data,
          data = _e === void 0 ? {} : _e;

      var key = isIgnoreSendRepeat ? 'ignore' : type + "_" + typeName + "_" + index_1.Tools.getHashCode(data);
      var count = countBuff[key] ? ++countBuff[key] : countBuff[key] = 1;
      anomaly = !anomaly ? limtJudgeAnomaly(count, catchParams, anomalyCallback) : true;

      if (anomaly) {
        resetAnomaly();
        return Promise.reject('send  Message during 1000ms in Over 20 times,maybe happend Endless loop');
      }

      return fn(catchParams);
    };

    return watchWrap;
  };

  return WatchDog;
}();

exports["default"] = WatchDog;

/***/ }),

/***/ "./src/instance/pipe/index.ts":
/*!************************************!*\
  !*** ./src/instance/pipe/index.ts ***!
  \************************************/
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

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var index_2 = __importDefault(__webpack_require__(/*! ./MQ/index */ "./src/instance/pipe/MQ/index.ts"));

var injection_1 = __webpack_require__(/*! ./injection */ "./src/instance/pipe/injection.ts");

var keepObserverPipe =
/** @class */
function (_super) {
  __extends(keepObserverPipe, _super);

  function keepObserverPipe(keepObserver, config) {
    var _this = _super.call(this, config) || this; //method


    _this.injection = injection_1.injection.bind(_this); // api

    _this.use = injection_1.use.bind(_this); //获取实例配置

    _this._config = config; //获取kp实例

    _this.$keepObserver = keepObserver; //消息队列实例

    _this.$mq = new index_2["default"](config, _this
    /* $pipe */
    ); //管道用户

    _this.pipeUser = [];
    return _this;
  }

  return keepObserverPipe;
}(index_1.KeepObserverPublic);

exports["default"] = keepObserverPipe;

/***/ }),

/***/ "./src/instance/pipe/injection.ts":
/*!****************************************!*\
  !*** ./src/instance/pipe/injection.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var index_2 = __importDefault(__webpack_require__(/*! ./PipeUser/index */ "./src/instance/pipe/PipeUser/index.ts"));
/*
    receive Plug-ins Server
    params
    @Provider  type es6 class  or classInstance
    explan: Provider class render apply function ,apply runing return method object ,on mounted is keepObsever class
 */


exports.use = function (Provider) {
  var _self = this;

  if (!Provider || !index_1.Tools.isFunction(Provider) && !index_1.Tools.isClassObject(Provider)) {
    var errorMsg = "use method receive provider is not right";
    index_1.consoleTools.warnError(errorMsg);
    return _self.$keepObserver.runMiddle('error', errorMsg);
  } //初始化注入服务


  var config = _self._config;
  var providerInstalcen = index_1.Tools.isFunction(Provider) ? new Provider(config) : Provider; //检查注入方法是否存在存在apply,存在则加入到管道流中
  //并检查是否存在返回方法，挂载在自身中,用于对外提供

  var _a = providerInstalcen.apply,
      apply = _a === void 0 ? null : _a;

  if (apply && index_1.Tools.isFunction(apply)) {
    this.injection(providerInstalcen, apply);
  } else {
    var errorMsg = "use method receive provider is not apply method";
    index_1.consoleTools.warnError(errorMsg);
    return _self.$keepObserver.runMiddle('error', errorMsg);
  }
};
/*
    注入
    params
    @scope  type object
        explan:this指向
    @applyFn type function
        explan: apply function
 */


exports.injection = function (scope, applyFn) {
  var _self = this;

  var config = this._config; //check data

  if (!applyFn || !index_1.Tools.isFunction(applyFn)) {
    var errorMsg = "injection receive because Provider apply is undefined or no function";
    index_1.consoleTools.warnError(errorMsg);
    return _self.$keepObserver.runMiddle('error', errorMsg);
  } //cerate pipeUser and add quenen


  var pipeUser = new index_2["default"](_self.pipeUser.length, _self, scope);

  try {
    // runing apply
    var userRenderMethod = applyFn.call(scope, pipeUser, config); //new version mounte api method
    // 1. $keepObserver.registerApi 
    // 2. userRenderMethod : {apiName:callback}

    if (_self.$keepObserver.registerApi && index_1.Tools.isObject(userRenderMethod) && !index_1.Tools.isEmptyObject(userRenderMethod)) {
      index_1.Tools.map(userRenderMethod, function (callback, apiName) {
        if (!apiName || !callback) {
          var errorMsg = "apiName is '' or callback is undefined";
          index_1.consoleTools.warnError(errorMsg);
          return _self.$keepObserver.runMiddle('error', errorMsg);
        }

        _self.$keepObserver.registerApi(apiName, callback.bind(scope));
      });
    }

    _self.pipeUser[_self.pipeUser.length] = pipeUser;
  } catch (e) {
    var errorMsg = 'injection receive Provider apply is runing find error:' + e;
    index_1.consoleTools.warnError(errorMsg);
    return _self.$keepObserver.runMiddle('error', errorMsg);
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