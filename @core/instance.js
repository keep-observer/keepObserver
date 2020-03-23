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

exports.version = '2.0.0-beta.1';

/***/ }),

/***/ "./src/instance/defaultConfig.ts":
/*!***************************************!*\
  !*** ./src/instance/defaultConfig.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
    keepObserver 默认配置
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  //分发队列情况下,是否允许接收消息队列加锁
  queueLock: true,
  //是否允许定时强制解锁
  timeOutUnlock: true,
  //接收消息队列默认解锁时间
  forceUnlockTime: 1000,
  //更新版本是否清除缓存
  updateVersionClearCache: false
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

var index_3 = __webpack_require__(/*! ../constants/index */ "./src/constants/index.ts");

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

    var _this = _super.call(this, config = index_1.tool.extend(defaultConfig_1["default"], {
      projectName: "",
      projectVersion: "",
      version: index_3.version,
      deviceID: index_1.getDeviceId()
    }, config)) || this; //method


    _this.updateVersionClearCache = update_1.updateVersionClearCache.bind(_this);
    _this.registerApi = api_1.registerApi.bind(_this); //api

    _this.apis = api_1.apis.bind(_this); //拓展中间件实例

    _this.extendMiddleScopeName = middle_1.extendMiddleScopeName.bind(_this); //主实例重载中间件服务

    _this.useMiddle = middle_1.useMiddle.bind(_this); //扩展上报属性

    _this.extendReportParams = base_1.extendReportParams.bind(_this); //设置用户信息

    _this.setUserInfo = base_1.setUserInfo.bind(_this); //挂载插件服务

    _this.use = base_1.use.bind(_this); //获取实例配置

    _this._config = config; //管道实例

    _this._pipe = new index_2["default"](_this, _this._config); //扩展上报内容

    var _a = _this._config,
        projectName = _a.projectName,
        projectVersion = _a.projectVersion;

    _this.extendReportParams({
      projectName: projectName,
      projectVersion: projectVersion,
      version: index_3.version
    });

    _this.extendMiddleScopeName(_this._publicMiddleScopeNames); //是否需要更新版本清除缓存


    if (_this._config.projectVersion && _this._config.updateVersionClearCache) {
      _this.updateVersionClearCache();
    }

    return _this;
  }

  return KeepObserver;
}(index_1.KeepObserverPublic);

module.exports = KeepObserver;
module.exports["default"] = module.exports;

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
    return index_1.consoleTools.warnError("apiName:" + apiName + " is undefined");
  }

  var callback = _self.apis[apiName];
  return callback.apply(void 0, __spread(args));
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
}; //设置用户信息


exports.setUserInfo = function (userInfo) {
  return index_1.KeepObserverPublic.extendReport({
    userInfo: userInfo
  });
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

var index_1 = __webpack_require__(/*! @util/index */ "@util/index"); //拓展中间件实例


exports.extendMiddleScopeName = function (_middleScopeNames) {
  var middleScopeNames = this.middleScopeNames;
  if (index_1.tool.isEmptyArray(_middleScopeNames)) return;
  return this.middleScopeNames = index_1.tool.toArray(new Set(middleScopeNames.concat(_middleScopeNames)));
}; //主实例重载中间件服务


exports.useMiddle = function (scopeName, middlesFn) {
  return index_1.KeepObserverMiddleWare.usePublishMiddles(scopeName, middlesFn);
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
  var oldVersion = index_1.tool.getStorage(updateVersionRecordKey);

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

  index_1.tool.setStorage(updateVersionRecordKey, this._config.projectVersion);
};

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

var index_2 = __importDefault(__webpack_require__(/*! ./mq/index */ "./src/instance/pipe/mq/index.ts"));

var oldVsersion_1 = __webpack_require__(/*! ./oldVsersion */ "./src/instance/pipe/oldVsersion.ts");

var injection_1 = __webpack_require__(/*! ./injection */ "./src/instance/pipe/injection.ts");

var keepObserverPipe =
/** @class */
function (_super) {
  __extends(keepObserverPipe, _super);

  function keepObserverPipe(keepObserver, config) {
    var _this = _super.call(this, config) || this; //method


    _this.injection = injection_1.injection.bind(_this);
    _this.registerPipeListenerUser = injection_1.registerPipeListenerUser.bind(_this);
    _this.oldVsersion_Danger_MixinKoInstance = oldVsersion_1.oldVsersion_Danger_MixinKoInstance.bind(_this); // api

    _this.use = injection_1.use.bind(_this); //获取实例配置

    _this._config = config; //获取kp实例

    _this.$keepObserver = keepObserver; //管道用户

    _this.pipeUser = []; //消息队列实例

    _this.$mq = new index_2["default"](config);
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
    receive Plug-ins Server
    params
    @Provider  type es6 class  or classInstance
    explan: Provider class render apply function ,apply runing return method object ,on mounted is keepObsever class
 */


exports.use = function (Provider) {
  if (!Provider || !index_1.tool.isFunction(Provider) && !index_1.tool.isClassObject(Provider)) {
    index_1.consoleTools.warnError('use method receive provider is not right');
    return false;
  } //初始化注入服务


  var config = this._config;
  var providerInstalcen = index_1.tool.isFunction(Provider) ? new Provider(config) : Provider; //检查注入方法是否存在存在apply,存在则加入到管道流中
  //并检查是否存在返回方法，挂载在自身中,用于对外提供

  var _a = providerInstalcen.apply,
      apply = _a === void 0 ? null : _a;

  if (apply && index_1.tool.isFunction(apply)) {
    this.injection(providerInstalcen, apply);
  } else {
    index_1.consoleTools.warnError('use method receive provider is not apply method');
    return false;
  }
};
/*
    注入管道
    params
    @scope  type object
        explan:this指向
    @applyFn type function
        explan: apply function
 */


exports.injection = function (scope, applyFn) {
  var _self = this;

  var config = this._config; //check data

  if (!applyFn || !index_1.tool.isFunction(applyFn)) {
    index_1.consoleTools.warnError('injection receive ApplyFn is undefined or no function');
    return false;
  } //cerate pipe listener


  var pipeUser = _self.registerPipeListenerUser();

  try {
    // runing apply
    var userRenderMethod = applyFn.call(scope, pipeUser, config); //mounte method oldVsersion

    if (index_1.tool.isObject(userRenderMethod) && !index_1.tool.isEmptyObject(userRenderMethod)) {
      _self.oldVsersion_Danger_MixinKoInstance(scope, userRenderMethod);
    } //new version mounte api method
    // 1. $keepObserver.registerApi 
    // 2. userRenderMethod : [{apiName,callback}...]


    if (_self.$keepObserver.registerApi && index_1.tool.isArray(userRenderMethod) && !index_1.tool.isEmptyArray(userRenderMethod)) {
      userRenderMethod.forEach(function (el) {
        if (index_1.tool.isObject(el) && !index_1.tool.isEmptyObject(el)) {
          var _a = el.apiName,
              apiName = _a === void 0 ? '' : _a,
              _b = el.callback,
              callback = _b === void 0 ? undefined : _b;

          if (!apiName || !callback) {
            return index_1.consoleTools.warnError("apiName is '' or callback is undefined");
          }

          _self.registerApi(apiName, callback);
        }
      });
    }
  } catch (e) {
    index_1.consoleTools.warnError('injection receive ApplyFn is runing find error:' + e);
  }
};
/*
    注册管道用户方法
    params
    null
    ***********************
    return pipeMethod {
        registerRecivePipeMessage
        sendPipeMessage
    }
 */


exports.registerPipeListenerUser = function () {
  var _self = this; //pipe index


  var pipeIndex = _self.pipeUser.length; //pipe user obj

  var pipeUser = {
    //index
    pipeIndex: pipeIndex,
    //send message
    sendPipeMessage: function sendPipeMessage() {
      var _a;

      return (_a = _self.$mq).sendPipeMessage.apply(_a, __spread([pipeIndex], arguments));
    },
    //registerMiddleScopeName
    registerMiddleScopeName: function registerMiddleScopeName(middleScopeNames) {
      return _self.$keepObserver.extendMiddleScopeName(middleScopeNames);
    },
    //register message
    registerRecivePipeMessage: _self.$mq.registerRecivePipeMessage(pipeIndex)
  }; //add listener

  _self.pipeUser[pipeIndex] = pipeUser;
  return _self;
};

/***/ }),

/***/ "./src/instance/pipe/mq/index.ts":
/*!***************************************!*\
  !*** ./src/instance/pipe/mq/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var triggerQueue_1 = __webpack_require__(/*! ./triggerQueue */ "./src/instance/pipe/mq/triggerQueue.ts");

var receiveQueue_1 = __webpack_require__(/*! ./receiveQueue */ "./src/instance/pipe/mq/receiveQueue.ts");

var MessageQueue =
/** @class */
function () {
  function MessageQueue(config) {
    //method
    this.noticeListener = triggerQueue_1.noticeListener.bind(this);
    this.sendPipeMessage = triggerQueue_1.sendPipeMessage.bind(this);
    this.registerRecivePipeMessage = receiveQueue_1.registerRecivePipeMessage.bind(this); //消息是否在等待

    this.waiting = false; //消息队列

    this.messageQueue = []; //消费者集合

    this.customerMap = {};
  }

  return MessageQueue;
}();

exports["default"] = MessageQueue;

/***/ }),

/***/ "./src/instance/pipe/mq/receiveQueue.ts":
/*!**********************************************!*\
  !*** ./src/instance/pipe/mq/receiveQueue.ts ***!
  \**********************************************/
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

var index_1 = __webpack_require__(/*! @util/index */ "@util/index"); //注册管道接收数据函数


exports.registerRecivePipeMessage = function (id) {
  var _self = this; //修正索引


  if (_self.customerMap[id]) {
    index_1.consoleTools.warnError('register recive pipe index is Occupy');
    return false;
  } //返回一个闭包函数用来接收注册函数


  return function (fn, scope) {
    //接收函数
    if (!fn || !index_1.tool.isFunction(fn)) {
      index_1.consoleTools.warnError('registerRecivePipeMessage method receive function is not right');
      return false;
    } //内部修改作用域调用


    _self.customerMap[id] = function () {
      var agrs = index_1.tool.toArray(arguments); //向注册进来的接收函数发送数据

      if (scope) {
        return fn.apply(scope, agrs);
      }

      return fn.apply(void 0, __spread(agrs));
    };
  };
};

/***/ }),

/***/ "./src/instance/pipe/mq/triggerQueue.ts":
/*!**********************************************!*\
  !*** ./src/instance/pipe/mq/triggerQueue.ts ***!
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
  }; //是否消息队列加锁,并且防止异常消息
  //进入消息队列

  _self.messageQueue.push(msgItem); //如果正在执行


  if (_self.waiting) {
    return false;
  } //异步执行消息队列分发


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

  if (!index_1.tool.isArray(queue) || queue.length === 0) {
    return false;
  } //接收消息进入等待状态


  _self.waiting = true; //分发处理消息

  for (var i = 0; i < queue.length; i++) {
    var _a = queue[i],
        id = _a.id,
        params = _a.params; //消息分发

    index_1.tool.map(_self.customerMap, function (cb, pipeId) {
      //判断是否是正确注册接收函数
      if (!index_1.tool.isFunction(cb)) {
        return false;
      } //不允许自发自收


      if (id === pipeId) {
        return false;
      } //分发


      try {
        //执行分发
        var result = cb(params);
      } catch (e) {
        index_1.consoleTools.warnError('use pipe message notice is runing error:' + e);
      }
    });
  } //等待状态结束


  _self.waiting = false;
};

/***/ }),

/***/ "./src/instance/pipe/oldVsersion.ts":
/*!******************************************!*\
  !*** ./src/instance/pipe/oldVsersion.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");
/*
    注入对象方法挂载到keepObserver中
    ps-> old-version  Compatibility method
    params
    @scope  type object
        explan:this指向
    @renders type object
        explan:render mounted keepObserver method list
 */


exports.oldVsersion_Danger_MixinKoInstance = function (scope, renders) {
  var _self = this;

  if (!renders || index_1.tool.isEmptyObject(renders)) {
    index_1.consoleTools.warnError('injection ApplyFn return Object is undefined');
    return false;
  }

  var keepObserver = _self.$keepObserver;

  for (var key in renders) {
    //检查方法
    var fn = renders[key];

    if (!fn || !index_1.tool.isFunction(fn)) {
      index_1.consoleTools.warnError('injection ApplyFn return Object attr' + key + 'is not right');
    } //是否存在同名方法


    if (keepObserver[key]) {
      index_1.consoleTools.warnError('injection Discover namesake methods');
      continue;
    } //挂载到keepObserver 实例


    Object.defineProperty(keepObserver, key, {
      configurable: false,
      enumerable: true,
      value: function (fn) {
        return function () {
          var agrs = index_1.tool.toArray(arguments);

          try {
            return fn.apply(scope, agrs);
          } catch (e) {
            index_1.consoleTools.warnError('injection  methods ' + key + ' runing find error' + e);
          }
        };
      }(fn)
    });
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