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

var tool = __importStar(__webpack_require__(/*! ../util/tool */ "./src/util/tool.ts"));

var deviceID_1 = __importDefault(__webpack_require__(/*! ../util/deviceID */ "./src/util/deviceID.ts"));

var defaultConfig_1 = __importDefault(__webpack_require__(/*! ./defaultConfig */ "./src/instance/defaultConfig.ts"));

var index_1 = __importDefault(__webpack_require__(/*! ../share/public/index */ "./src/share/public/index.ts"));

var index_2 = __importDefault(__webpack_require__(/*! ./pipe/index */ "./src/instance/pipe/index.ts"));

var index_3 = __webpack_require__(/*! ../constants/index */ "./src/constants/index.ts");

var update_1 = __webpack_require__(/*! ./method/update */ "./src/instance/method/update.ts");

var init_1 = __webpack_require__(/*! ./method/init */ "./src/instance/method/init.ts");

var api_1 = __webpack_require__(/*! ./method/api */ "./src/instance/method/api.ts");

var KeepObserver =
/** @class */
function (_super) {
  __extends(KeepObserver, _super);

  function KeepObserver(config) {
    if (config === void 0) {
      config = {};
    }

    var _this = _super.call(this, config = tool.extend(defaultConfig_1["default"], config, {
      version: index_3.version,
      deviceID: deviceID_1["default"]()
    })) || this; //method


    _this.init = init_1.init.bind(_this);
    _this.updateVersionClearCache = update_1.updateVersionClearCache.bind(_this);
    _this.registerApi = api_1.registerApi.bind(_this);
    _this.apis = api_1.apis.bind(_this); //获取实例配置

    _this._config = config; //管道实例

    _this._pipe = new index_2["default"](_this, _this._config); //中间件事件

    _this._middleScopeNames = tool.extend([], _this._publicMiddleScopeNames, ['use']); //init

    _this.init();

    return _this;
  } //api


  KeepObserver.prototype.use = function (Provider) {
    return this._pipe.use(Provider);
  };

  return KeepObserver;
}(index_1["default"]);

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

var consoleTools = __importStar(__webpack_require__(/*! ../../util/console */ "./src/util/console.ts"));

exports.registerApi = function (apiName, cb) {
  var _self = this;

  if (_self.apis[apiName]) {
    return consoleTools.warnError("apiName:" + apiName + " is defined");
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
    return consoleTools.warnError("apiName:" + apiName + " is undefined");
  }

  var callback = _self.apis[apiName];
  return callback.apply(void 0, __spread(args));
};

/***/ }),

/***/ "./src/instance/method/init.ts":
/*!*************************************!*\
  !*** ./src/instance/method/init.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); //隔离开初始化服务,不对外提供

function init() {
  //是否需要更新版本清除缓存
  if (this._config.projectVersion && this._config.updateVersionClearCache) {
    this.updateVersionClearCache();
  }
}

exports.init = init;

/***/ }),

/***/ "./src/instance/method/update.ts":
/*!***************************************!*\
  !*** ./src/instance/method/update.ts ***!
  \***************************************/
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

var tool = __importStar(__webpack_require__(/*! ../../util/tool */ "./src/util/tool.ts"));

var updateVersionRecordKey = 'versionRecord';
var keepObserverRecordReg = /^keepObserverData/i;

exports.updateVersionClearCache = function () {
  var oldVersion = tool.getStorage(updateVersionRecordKey);

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

  tool.setStorage(updateVersionRecordKey, this._config.projectVersion);
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

var index_1 = __importDefault(__webpack_require__(/*! ../../share/public/index */ "./src/share/public/index.ts"));

var oldVsersion_1 = __webpack_require__(/*! ./oldVsersion */ "./src/instance/pipe/oldVsersion.ts");

var injection_1 = __webpack_require__(/*! ./injection */ "./src/instance/pipe/injection.ts");

var receiveQueue_1 = __webpack_require__(/*! ./receiveQueue */ "./src/instance/pipe/receiveQueue.ts");

var triggerQueue_1 = __webpack_require__(/*! ./triggerQueue */ "./src/instance/pipe/triggerQueue.ts");

var receiveLock_1 = __webpack_require__(/*! ./receiveLock */ "./src/instance/pipe/receiveLock.ts");

var preventAnomaly_1 = __webpack_require__(/*! ./preventAnomaly */ "./src/instance/pipe/preventAnomaly.ts");

var keepObserverPipe =
/** @class */
function (_super) {
  __extends(keepObserverPipe, _super);

  function keepObserverPipe(keepObserver, config) {
    var _this = _super.call(this, config) || this; //method


    _this.injection = injection_1.injection.bind(_this);
    _this.registerPipeListenerUser = injection_1.registerPipeListenerUser.bind(_this);
    _this.registerRecivePipeMessage = receiveQueue_1.registerRecivePipeMessage.bind(_this);
    _this.oldVsersion_Danger_MixinKoInstance = oldVsersion_1.oldVsersion_Danger_MixinKoInstance.bind(_this);
    _this.sendPipeMessage = triggerQueue_1.sendPipeMessage.bind(_this);
    _this.noticeListener = triggerQueue_1.noticeListener.bind(_this);
    _this.isLock = receiveLock_1.isLock.bind(_this);
    _this.openLock = receiveLock_1.openLock.bind(_this);
    _this.closeLock = receiveLock_1.closeLock.bind(_this);
    _this.preventStackError = preventAnomaly_1.preventStackError.bind(_this);
    _this.judgeAnomaly = preventAnomaly_1.judgeAnomaly.bind(_this);
    _this.resetStackCount = preventAnomaly_1.resetStackCount.bind(_this); // api

    _this.use = injection_1.use.bind(_this); //获取实例配置

    _this._config = config; //获取kp实例

    _this.$keepObserver = keepObserver; //消息是否在等待

    _this.waiting = false; //消息接收锁

    _this.receiveLock = false; //堆栈计数对象

    _this.stackCountBuff = {}; //堆栈运行定时器

    _this.stackTimeFlag = false; //消息队列

    _this.messageQueue = []; //管道用户

    _this.pipeUser = [];
    return _this;
  }

  return keepObserverPipe;
}(index_1["default"]);

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

var tool = __importStar(__webpack_require__(/*! ../../util/tool */ "./src/util/tool.ts"));

var consoleTools = __importStar(__webpack_require__(/*! ../../util/console */ "./src/util/console.ts"));
/*
    receive Plug-ins Server
    params
    @Provider  type es6 class  or classInstance
    explan: Provider class render apply function ,apply runing return method object ,on mounted is keepObsever class
 */


exports.use = function (Provider) {
  if (!Provider || !tool.isFunction(Provider) && !tool.isClassObject(Provider)) {
    consoleTools.warnError('use method receive provider is not right');
    return false;
  } //初始化注入服务


  var config = this._config;
  var providerInstalcen = tool.isFunction(Provider) ? new Provider(config) : Provider; //检查注入方法是否存在存在apply,存在则加入到管道流中
  //并检查是否存在返回方法，挂载在自身中,用于对外提供

  var _a = providerInstalcen.apply,
      apply = _a === void 0 ? null : _a;

  if (apply && tool.isFunction(apply)) {
    this.injection(providerInstalcen, apply);
  } else {
    consoleTools.warnError('use method receive provider is not apply method');
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

  if (!applyFn || !tool.isFunction(applyFn)) {
    consoleTools.warnError('injection receive ApplyFn is undefined or no function');
    return false;
  } //cerate pipe listener


  var pipeMethod = _self.registerPipeListenerUser();

  try {
    // runing apply
    var userRenderMethod = applyFn.call(scope, pipeMethod, config); //mounte method

    if (tool.isObject && !tool.isEmptyObject(userRenderMethod)) {
      _self.oldVsersion_Danger_MixinKoInstance(scope, userRenderMethod);

      return;
    } //new version mounte api method
    // 1. $keepObserver.registerApi 
    // 2. userRenderMethod : [{apiName,callback}...]


    if (_self.$keepObserver.registerApi && tool.isArray(userRenderMethod) && !tool.isEmptyArray(userRenderMethod)) {
      userRenderMethod.forEach(function (el) {
        if (tool.isObject(el) && !tool.isEmptyObject(el)) {
          var _a = el.apiName,
              apiName = _a === void 0 ? '' : _a,
              _b = el.callback,
              callback = _b === void 0 ? undefined : _b;

          if (!apiName || !callback) {
            return consoleTools.warnError("apiName is '' or callback is undefined");
          }

          _self.registerApi(apiName, callback);
        }
      });
    }
  } catch (e) {
    consoleTools.warnError('injection receive ApplyFn is runing find error:' + e);
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
    //receiveCallBack
    receiveCallback: null,
    //send message
    sendPipeMessage: function sendPipeMessage() {
      return _self.sendPipeMessage.apply(_self, __spread([pipeIndex], arguments));
    },
    //register message
    registerRecivePipeMessage: null
  }; //add listener

  _self.pipeUser[pipeIndex] = pipeUser; //register receive message listener

  pipeUser.registerRecivePipeMessage = _self.registerRecivePipeMessage(pipeIndex); //render pipe method

  var renderMethod = {
    registerRecivePipeMessage: function registerRecivePipeMessage() {
      if (!_self.pipeUser[pipeIndex]) return false;
      return pipeUser.registerRecivePipeMessage.apply(pipeUser, __spread(arguments));
    },
    sendPipeMessage: function sendPipeMessage() {
      if (!_self.pipeUser[pipeIndex]) return false;
      return pipeUser.sendPipeMessage.apply(pipeUser, __spread(arguments));
    }
  };
  return renderMethod;
};

/***/ }),

/***/ "./src/instance/pipe/oldVsersion.ts":
/*!******************************************!*\
  !*** ./src/instance/pipe/oldVsersion.ts ***!
  \******************************************/
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

var tool = __importStar(__webpack_require__(/*! ../../util/tool */ "./src/util/tool.ts"));

var consoleTools = __importStar(__webpack_require__(/*! ../../util/console */ "./src/util/console.ts"));
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

  if (!renders || tool.isEmptyObject(renders)) {
    consoleTools.warnError('injection ApplyFn return Object is undefined');
    return false;
  }

  var keepObserver = _self.$keepObserver;

  for (var key in renders) {
    //检查方法
    var fn = renders[key];

    if (!fn || !tool.isFunction(fn)) {
      consoleTools.warnError('injection ApplyFn return Object attr' + key + 'is not right');
    } //是否存在同名方法


    if (keepObserver[key]) {
      consoleTools.warnError('injection Discover namesake methods');
      continue;
    } //挂载到keepObserver 实例


    Object.defineProperty(keepObserver, key, {
      configurable: false,
      enumerable: true,
      value: function (fn) {
        return function () {
          var agrs = tool.toArray(arguments);

          try {
            return fn.apply(scope, agrs);
          } catch (e) {
            consoleTools.warnError('injection  methods ' + key + ' runing find error' + e);
          }
        };
      }(fn)
    });
  }
};

/***/ }),

/***/ "./src/instance/pipe/preventAnomaly.ts":
/*!*********************************************!*\
  !*** ./src/instance/pipe/preventAnomaly.ts ***!
  \*********************************************/
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

var tool = __importStar(__webpack_require__(/*! ../../util/tool */ "./src/util/tool.ts"));

var consoleTools = __importStar(__webpack_require__(/*! ../../util/console */ "./src/util/console.ts")); //防止堆栈错误


exports.preventStackError = function (msgItem) {
  var msg = msgItem.msg,
      pipeIndex = msgItem.pipeIndex;

  if (!msg || !tool.isExist(pipeIndex) || !tool.isExist(msg.data)) {
    return true;
  } //是否该消息已经进入屏蔽阶段


  if (!this.pipeUser[pipeIndex]) {
    //是否是开发环境
    if (this._config.develop) {
      consoleTools.warnError('send pipe Message Maybe happend Endless loop , will ignore in the message');
    }

    return true;
  } //json解析成字符串加密为KEY 这里可能存在JSON转义出现错误的可能


  try {
    var key = JSON.stringify(msg.data);
  } catch (e) {
    consoleTools.warnError('find error : ' + e);
    return true;
  } //触发计数


  if (!this.stackCountBuff[key]) {
    this.stackCountBuff[key] = 1;
  } else {
    this.stackCountBuff[key]++;
  } //启动定时器每秒恢复一次计数


  this.resetStackCount();
  return this.judgeAnomaly(this.stackCountBuff[key], msgItem);
}; //判断是否出现异常错误


exports.judgeAnomaly = function (count, msgItem) {
  var msg = msgItem.msg,
      pipeIndex = msgItem.pipeIndex;

  if (count > 10 && count < 20) {
    consoleTools.warnError('send  pipe Message during 1000ms in Over 20 times. maybe Anomaly ');
    return false;
  }

  if (count > 20) {
    //从管道中卸载
    this.pipeUser[pipeIndex] = null;
    consoleTools.warnError('send pipe Message during 1000ms in Over 20 times,maybe happend Endless loop');
    return true;
  }

  return false;
}; //恢复计数


exports.resetStackCount = function () {
  var _self = this; //启动定时器每秒清理一次计数


  if (!_self.stackTimeFlag) {
    _self.stackTimeFlag = true;
    setTimeout(function () {
      _self.stackCountBuff = {};
      _self.stackTimeFlag = false;
    }, 1000);
  }
};

/***/ }),

/***/ "./src/instance/pipe/receiveLock.ts":
/*!******************************************!*\
  !*** ./src/instance/pipe/receiveLock.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); //默认定时打开消息锁

var receiveTime = false;

exports.isLock = function () {
  return this.receiveLock;
};

exports.openLock = function () {
  var _self = this;

  if (_self.receiveLock && _self._config.queueLock) {
    return false;
  }

  _self.receiveLock = true; //是否定时强制解锁

  if (_self._config.timeOutUnlock) {
    setTimeout(function () {
      _self.closeLock();
    }, _self._config.receiveUnlockTime);
  }
};

exports.closeLock = function () {
  if (!this.receiveLock) {
    return false;
  } //恢复定时器


  if (receiveTime) {
    window.cleanTimeout(receiveTime);
    receiveTime = false;
  }

  this.receiveLock = false;
};

/***/ }),

/***/ "./src/instance/pipe/receiveQueue.ts":
/*!*******************************************!*\
  !*** ./src/instance/pipe/receiveQueue.ts ***!
  \*******************************************/
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tool = __importStar(__webpack_require__(/*! ../../util/tool */ "./src/util/tool.ts"));

var consoleTools = __importStar(__webpack_require__(/*! ../../util/console */ "./src/util/console.ts")); //注册管道接收数据函数


exports.registerRecivePipeMessage = function (pipeIndex) {
  var _self = this; //修正索引


  if (_self.pipeUser[pipeIndex].receiveCallback) {
    consoleTools.warnError('register recive pipe index is Occupy');
    return false;
  } //返回一个闭包函数用来接收注册函数


  return function (fn, scope) {
    //接收函数
    if (!fn || !tool.isFunction(fn)) {
      consoleTools.warnError('registerRecivePipeMessage method receive function is not right');
      return false;
    } //内部修改作用域调用


    _self.pipeUser[pipeIndex].receiveCallback = function () {
      var agrs = tool.toArray(arguments); //向注册进来的接收函数发送数据

      if (scope) {
        return fn.apply(scope, agrs);
      }

      return fn.apply(void 0, __spread(agrs));
    };
  };
};

/***/ }),

/***/ "./src/instance/pipe/triggerQueue.ts":
/*!*******************************************!*\
  !*** ./src/instance/pipe/triggerQueue.ts ***!
  \*******************************************/
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

var tool = __importStar(__webpack_require__(/*! ../../util/tool */ "./src/util/tool.ts"));

var consoleTools = __importStar(__webpack_require__(/*! ../../util/console */ "./src/util/console.ts")); //发送消息在管道内流通


exports.sendPipeMessage = function (pipeIndex, msg, options) {
  var _self = this;

  var msgItem = {
    pipeIndex: pipeIndex,
    msg: msg,
    options: options
  }; //是否消息队列加锁,并且防止异常消息

  if (_self.isLock() || _self.preventStackError(msgItem)) {
    return false;
  } //进入消息队列


  _self.messageQueue.push(msgItem); //如果正在执行


  if (_self.waiting) {
    return false;
  } //异步执行消息队列分发


  setTimeout(function () {
    //获取消息队列数组快照
    var queue = tool.extend([], _self.messageQueue); //清空队列

    _self.messageQueue = []; //通知监听

    exports.noticeListener.call(_self, queue);
  });
}; //通知监听


exports.noticeListener = function (queue) {
  var _self = this;

  if (!tool.isArray(queue) || queue.length === 0) {
    return false;
  } //接收消息进入等待状态


  _self.waiting = true; //分发处理消息

  for (var i = 0; i < queue.length; i++) {
    var _a = queue[i],
        pipeIndex = _a.pipeIndex,
        msg = _a.msg,
        options = _a.options; //消息分发

    _self.pipeUser.map(function (item, index) {
      //判断是否是正确注册接收函数
      if (!item || !item.receiveCallback || !tool.isFunction(item.receiveCallback)) {
        return false;
      } //不允许自发自收


      if (pipeIndex === index) {
        return false;
      }

      var receiveCallback = item.receiveCallback; //分发

      try {
        //消息队列加锁
        _self.openLock(); //执行分发


        var result = receiveCallback(msg, options); //消息队列解锁
        //如果返回值是promise或者存在then将解锁放入回调

        if (result && tool.isObject(result) && (result instanceof Promise || result.then && tool.isFunction(result.then))) {
          result.then(_self.closeLock, _self.closeLock);
        } else {
          _self.closeLock();
        }
      } catch (e) {
        _self.closeLock();

        consoleTools.warnError('use pipe message notice is runing error:' + e);
      }
    });
  } //等待状态结束


  _self.waiting = false;
};

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

/***/ "./src/util/deviceID.ts":
/*!******************************!*\
  !*** ./src/util/deviceID.ts ***!
  \******************************/
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

var tool = __importStar(__webpack_require__(/*! ./tool */ "./src/util/tool.ts")); //storge-key


var RecordKey = 'deviceId';

var getDeviceId = function getDeviceId() {
  return storageModel();
}; //localStorage model


var storageModel = function storageModel() {
  if (!window.localStorage) {
    return false;
  }

  var deviceID = tool.getStorage(RecordKey);

  if (!deviceID) {
    deviceID = tool.getUniqueID();
    tool.setStorage(RecordKey, deviceID);
  }

  return deviceID;
}; //iframe model
//暂未开启 需要先写好iframe页面
//这里还有个问题 iframe是异步获取deviceID 现在的流程放在instance初始化阶段, 异步获取会影响接下来一些流程
//暂不启用, 放在第二次重构升级在启用


var iframeModel = function iframeModel() {};

exports["default"] = getDeviceId;

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