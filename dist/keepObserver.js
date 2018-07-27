(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.dateFormat = dateFormat;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isSymbol = isSymbol;
exports.isObject = isObject;
exports.isEmptyObject = isEmptyObject;
exports.isEmptyArray = isEmptyArray;
exports.isFunction = isFunction;
exports.isElement = isElement;
exports.isWindow = isWindow;
exports.isPlainObject = isPlainObject;
exports.toArray = toArray;
exports.toString = toString;
exports.setStorage = setStorage;
exports.getStorage = getStorage;
exports.removeStorage = removeStorage;
exports.extend = extend;


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
  date = date instanceof Date ? date : typeof date === 'number' || typeof date === 'string' ? new Date(date) : new Date();
  //解析
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

/**
 * 检查script基本数据类型
 * @param mixed value
 * @return boolean
 */
function isNumber(value) {
  return Object.prototype.toString.call(value) == '[object Number]';
}
function isString(value) {
  return Object.prototype.toString.call(value) == '[object String]';
}
function isArray(value) {
  return Object.prototype.toString.call(value) == '[object Array]';
}
function isBoolean(value) {
  return Object.prototype.toString.call(value) == '[object Boolean]';
}
function isUndefined(value) {
  return value === undefined;
}
function isNull(value) {
  return value === null;
}
function isSymbol(value) {
  return Object.prototype.toString.call(value) == '[object Symbol]';
}
function isObject(value) {
  return Object.prototype.toString.call(value) == '[object Object]' ||
  // if it isn't a primitive value, then it is a common object
  !isNumber(value) && !isString(value) && !isBoolean(value) && !isArray(value) && !isNull(value) && !isFunction(value) && !isUndefined(value) && !isSymbol(value);
}
function isEmptyObject(obj) {
  if (!isObject(obj)) {
    return true;
  }
  for (var key in obj) {
    return false;
  }
  return true;
}
function isEmptyArray(array) {
  if (!isArray(array)) {
    return true;
  }
  return array.length > 0 ? false : true;
}
function isFunction(value) {
  return Object.prototype.toString.call(value) == '[object Function]';
}
function isElement(value) {
  return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? value instanceof HTMLElement : //DOM2
  value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object" && value !== null && value.nodeType === 1 && typeof value.nodeName === "string";
}
function isWindow(value) {
  var toString = Object.prototype.toString.call(value);
  return toString == '[object global]' || toString == '[object Window]' || toString == '[object DOMWindow]';
}
/**
 * 检查是否是普通空对象
 * @param object obj
 * @return boolean
 */
function isPlainObject(obj) {
  var hasOwn = Object.prototype.hasOwnProperty;
  // Must be an Object.
  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj.nodeType || isWindow(obj)) {
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

/*
  转换工具
 */
function toArray(array) {
  return Array.prototype.slice.call(array);
}
function toString(content) {
  if (!content) {
    return '';
  }
  if (typeof content === 'string') {
    return content;
  }
  return content.toString();
}

/*
    辅助存储保存监控数据
    localStorage
*/
function setStorage(key, value) {
  if (!window.localStorage) {
    return;
  }
  key = 'keepObserverData_' + key;
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
}
function getStorage(key) {
  if (!window.localStorage) {
    return;
  }
  key = 'keepObserverData_' + key;
  var value = localStorage.getItem(key);
  return value ? JSON.parse(value) : '';
}
function removeStorage(key) {
  if (!window.localStorage) {
    return;
  }
  key = 'keepObserverData_' + key;
  localStorage.removeItem(key);
}

/*
    深度合并内容
    引用类型克隆合并
    arguments[0] = target
    arguments type is Object Or Array
    多内容合并覆盖优先级: arguments[0]<arguments[1]<arguments[2]..
    如果sources 不是数组或者对象 则直接忽略
 */
function extend() {
  var args = toArray(arguments);
  if (args.length === 0) {
    console.error('extends params is undefined');
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
    }
    //如果内容是对象 
    if (isObject(item)) {
      //开始遍历
      for (var key in item) {
        //如果内容是对象
        if (isObject(item[key])) {
          //修正数据
          target[key] = target[key] && isObject(target[key]) ? target[key] : {};
          target[key] = extend(target[key], item[key]);
        } else if (isArray(item)) {
          //修正数据
          target[key] = target[key] && isArray(target[key]) ? target[key] : [];
          target[key] = extend(target[key], item[key]);
        } else {
          //基本类型直接赋值
          target[key] = item[key];
        }
      }
    } else if (isArray(item)) {
      for (var i = 0; i < item.length; i++) {
        //如果内容是对象
        if (isObject(item[i])) {
          //修正数据
          target[i] = target[i] && isObject(target[i]) ? target[i] : {};
          target[i] = extend(target[i], item[i]);
        } else if (isArray(item)) {
          //修正数据
          target[i] = target[i] && isArray(target[i]) ? target[i] : [];
          target[i] = extend(target[i], item[i]);
        } else {
          //基本类型直接赋值
          target[i] = item[i];
        }
      }
    }
    //其他类型直接忽略  
  });
  return target;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _index2 = __webpack_require__(18);

var _index3 = _interopRequireDefault(_index2);

var _system = __webpack_require__(5);

var _system2 = _interopRequireDefault(_system);

var _network = __webpack_require__(4);

var _network2 = _interopRequireDefault(_network);

var _log = __webpack_require__(3);

var _log2 = _interopRequireDefault(_log);

var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//继承通信类


//相关监控初始化 和一些处理


var KeepObserver = function (_keepObserverReport) {
	_inherits(KeepObserver, _keepObserverReport);

	//构造函数
	function KeepObserver(config) {
		var _this;

		_classCallCheck(this, KeepObserver);

		//上报配置
		var CustomConfig = config.reportCustom || {};
		//是否是开发模式
		CustomConfig.develop = config.develop ? true : false;
		//开发环境下获取报文是否打印
		CustomConfig.developGetMsgLog = config.developGetMsgLog ? true : false,
		//开发环境下丢弃数据 是否打印出来
		CustomConfig.develogDiscardLog = config.develogDiscardLog ? true : false,
		//开发环境下删除出数据 是否打印出来
		CustomConfig.develogDeleteLog = config.develogDeleteLog ? true : false, (_this = _possibleConstructorReturn(this, (KeepObserver.__proto__ || Object.getPrototypeOf(KeepObserver)).call(this, CustomConfig)), _this);
		/********************  开始本实例配置  *******************/
		//获取实例配置
		_this._config = config;

		//版本号
		_this._version = '1.0.4';
		//项目
		_this._project = config.project || 'unKnow';
		//监听内容
		_this.observerKey = {};
		//初始化系统详情和首屏分析
		_this._initSyStem();
		//初始化网络拦截分解
		_this._initNetWork();
		//初始化日志拦截
		_this._initLog();
		//判断是否开启vue监控
		if (_this._config.isVue && _this._config.vueInstance) {
			_this._initVue();
		}
		return _this;
	}
	/*****************以下监控默认开启*****************/
	/*
 	开始识别系统
 	开始后将识别平台系统
 	支持performance的系统,将开启平台监控
  */


	_createClass(KeepObserver, [{
		key: '_initSyStem',
		value: function _initSyStem() {
			_system2.default.call(this);
		}
		/*
  	开始监控网络
  	开始后将替换window.XMLHttpRequest相关原生方法
   */

	}, {
		key: '_initNetWork',
		value: function _initNetWork() {
			_network2.default.call(this);
			this.observerKey.network = true;
		}
		/*
  	开始监控日志
  	开始后将替换window.console相关原生方法
   */

	}, {
		key: '_initLog',
		value: function _initLog() {
			_log2.default.call(this);
			this.observerKey.log = true;
		}
		/*
  	开始监控vue
  	监控vue运行错误和警告
  	performance暂时未做
   */

	}, {
		key: '_initVue',
		value: function _initVue() {
			_vue2.default.call(this);
			this.observerKey.vue = true;
		}
		/*************** end observer *******************/
		//设置自定义上报内容

	}, {
		key: 'setCustomReport',
		value: function setCustomReport(params) {
			if (this.$getCustomeReport) {
				this.$getCustomeReport(params);
			}
		}
		//停止监听

	}, {
		key: 'stopObserver',
		value: function stopObserver(key) {
			if (this.observerKey[key] && this['$' + key].stopObserver) {
				this['$' + key].stopObserver();
				this.observerKey[key] = false;
			}
		}
		//停止全部监听

	}, {
		key: 'stopAllObserver',
		value: function stopAllObserver() {
			for (var key in this.observerKey) {
				if (this['$' + key].stopObserver) {
					this['$' + key].stopObserver();
					this.observerKey[key] = false;
				}
			}
		}
		//打开监听

	}, {
		key: 'startObserver',
		value: function startObserver(key) {
			if (!this.observerKey[key] && this['$' + key].startObserver) {
				this['$' + key].startObserver();
				this.observerKey[key] = true;
			}
		}
		//打开全部监听

	}, {
		key: 'startAllObserver',
		value: function startAllObserver() {
			for (var key in this.observerKey) {
				if (this['$' + key].startObserver) {
					this['$' + key].startObserver();
					this.observerKey[key] = true;
				}
			}
		}
	}]);

	return KeepObserver;
}(_index3.default);

exports.default = KeepObserver;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//公共默认类
//提供一些全局公共方法
var KeepObserverDefault = function () {
	function KeepObserverDefault(config) {
		_classCallCheck(this, KeepObserverDefault);

		//开发模式下的log 替换window.console.log
		this.$devLog = false;
		//开发模式写error log 替换window.console.error
		this.$devError = false;

		this._defaultinit();
	}

	_createClass(KeepObserverDefault, [{
		key: "_defaultinit",
		value: function _defaultinit() {
			var self = this;
			//初始化$devLog
			self.$devLog = window.console.log;
			window.console.log = function () {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				self.$devLog.apply(window.console, args);
			};
			//初始化$$devError
			self.$devError = window.console.error;
			window.console.error = function () {
				for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					args[_key2] = arguments[_key2];
				}

				self.$devError.apply(window.console, args);
			};
		}
	}]);

	return KeepObserverDefault;
}();

exports.default = KeepObserverDefault;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _index2 = __webpack_require__(8);

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _initLog = function _initLog() {
	var self = this;
	//初始化上传相关实例
	var CustomConfig = self._config.logCustom ? self._config.logCustom : {};
	//是否是开发模式
	CustomConfig.develop = self._config.develop ? true : false;
	self.$log = new _index3.default(CustomConfig);
	//注册监听
	self.$log.addReportListener(function (logInfo) {
		var reportParams = {};
		var control = null;
		reportParams.typeName = 'log';
		reportParams.location = window.location.href;
		reportParams.data = logInfo;
		//如果是clear,清除之前的console.log相关信息
		if (logInfo.type === 'clear') {
			control = {};
			control.preDelete = true;
			control.ignore = true;
		}
		//如果是JS运行报错,或者打印错误error合并上报所有内容
		if (logInfo.type === 'jsError' || logInfo.type === 'error') {
			control = {};
			control.lazy = false;
			control.baseExtend = true;
			control.isError = true;
		}
		self.$getReportContent(reportParams, control);
	});
};

//日志拦截请求分享
exports.default = _initLog;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _index2 = __webpack_require__(10);

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _initNetWork = function _initNetWork() {
	var self = this;
	//初始化上传相关实例
	var CustomConfig = self._config.networkCustom ? self._config.networkCustom : {};
	self.$network = new _index3.default(CustomConfig);
	//注册监听
	self.$network.addReportListener(function (ajaxInfo) {
		var reportParams = {};
		var control = null;
		reportParams.typeName = 'network';
		reportParams.location = window.location.href;
		reportParams.data = ajaxInfo;
		//是否请求出错
		if (ajaxInfo.isError) {
			control = {};
			control.lazy = false;
			//是否是超时请求,超时请求不合并上报
			control.baseExtend = ajaxInfo.isTimeout ? false : true;
			control.isError = ajaxInfo.isTimeout ? false : true;
		}
		self.$getReportContent(reportParams, control);
	});
};
//网络请求拦截分析
exports.default = _initNetWork;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _index2 = __webpack_require__(13);

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _initSystem = function _initSystem() {
	var self = this;
	//初始化上传相关实例
	var CustomConfig = self._config.systemCustom ? self._config.systemCustom : {};
	self.$system = new _index3.default(CustomConfig);
	//注册监听
	self.$system.addReportListener(function (systemInfo) {
		var reportParams = {};
		reportParams.typeName = 'system';
		reportParams.location = window.location.href;
		reportParams.data = systemInfo;
		//系统信息和首屏性能立即上报
		var control = {};
		control.lazy = false;
		self.$getReportContent(reportParams, control);
	});
};

//系统信息和首屏分析
exports.default = _initSystem;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _initVue = function _initVue() {
	var self = this;
	//初始化上传相关实例
	var CustomConfig = self._config.vueCustom ? self._config.vueCustom : {};
	CustomConfig.vueInstance = self._config.vueInstance;
	//判断是否存在实例
	if (!CustomConfig.vueInstance) {
		return false;
	}
	//注册监听
	self.$vue = new _index2.default(CustomConfig);
	//注册监听
	self.$vue.addReportListener(function (vueInfo) {
		var reportParams = {};
		reportParams.typeName = 'vue';
		reportParams.location = window.location.href;
		reportParams.data = vueInfo;
		var control = {};
		if (vueInfo.isError) {
			control.lazy = false;
			control.baseExtend = true;
			control.isError = true;
		}
		self.$getReportContent(reportParams, control);
	});
};

//vue错误监控和性能分析
exports.default = _initVue;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/*
 
 	observer log 实例默认配置数据
 */

exports.default = {
  //是否捕获跨域JS错误
  catchCrossDomain: true
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = __webpack_require__(7);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 获取系统信息
var KeepObserverLog = function () {
	//构造函数
	function KeepObserverLog(config) {
		_classCallCheck(this, KeepObserverLog);

		//存混合配置
		this._config = tool.extend(_defaultConfig2.default, config);
		//上报名
		this._typeName = 'log';
		//监听列表
		this.eventListener = [];
		//当前是否处于开发模式
		this._develop = this._config.develop;
		//替换window.console
		this.console = {};
		//替换 doucment.createElement 插入script .crossOrigin = 'anonymous';
		this.$createElement = false;
		//启动
		this._init();
	}
	/*
 	初始化替换相关信息
  */


	_createClass(KeepObserverLog, [{
		key: '_init',
		value: function _init() {
			var self = this;
			//替换window.console变量
			var baseLogList = ['log', 'info', 'warn', 'debug', 'error'];

			if (!window.console) {
				window.console = {};
			}

			baseLogList.map(function (method) {
				self.console[method] = window.console[method];
			});
			self.console.time = window.console.time;
			self.console.timeEnd = window.console.timeEnd;
			self.console.clear = window.console.clear;

			baseLogList.map(function (method) {
				window.console[method] = function () {
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
					}

					//是否处于开发模式下
					if (self._develop && self.console[method] && tool.isFunction(self.console[method])) {
						var _self$console;

						(_self$console = self.console)[method].apply(_self$console, args);
					}
					//交给拦截处理信息
					self._handleMessage(method, args);
				};
			});
			//处理time timeEnd clear
			var timeLog = {};
			window.console.time = function (label) {
				timeLog[label] = Date.now();
			};
			window.console.timeEnd = function (label) {
				var pre = timeLog[label];
				var type = 'timeEnd';
				if (pre) {
					var content = label + ':' + (Date.now() - pre) + 'ms';
					self._handleMessage(type, [content]);
					//开发模式下打印
					if (self._develop && self.console.log && tool.isFunction(self.console.log)) {
						self.console.log(content);
					}
				} else {
					var content = label + ': 0ms';
					self._handleMessage(type, [content]);
					//开发模式下打印
					if (self._develop && self.console.log && tool.isFunction(self.console.log)) {
						self.console.log(content);
					}
				}
			};
			window.console.clear = function () {
				for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					args[_key2] = arguments[_key2];
				}

				self._handleMessage('clear', args);
				self.console.clear.apply(window.console, args);
			};
			//是否需要捕获跨域JS错误
			if (self._config.catchCrossDomain && !self.$createElement) {
				//侵入document.createElement  实现跨域JS捕获错误信息
				if (window.document || window.document.createElement) {
					self.$createElement = window.document.createElement;
					window.document.createElement = function (type) {
						var resultDom = self.$createElement.call(window.document, type);
						if (type === 'script') {
							resultDom.crossOrigin = 'anonymous';
						}
						return resultDom;
					};
				}
			}
			//监控window.onerror
			if (typeof window.addEventListener != 'undefined') {
				window.addEventListener('error', function () {
					self._handleError.apply(self, arguments);
				}, true);
			} else {
				window.attachEvent('onerror', function () {
					self._handleError.apply(self, arguments);
				});
			}
		}
		/*
  	处理打印信息
  	上报报文如下
  	@: type string  (log|info|debug.... jsError)
  	@: data string  (JSON格式对象报文)
   */

	}, {
		key: '_handleMessage',
		value: function _handleMessage(type, agrs) {
			var self = this;
			var reportData = {};
			//agrs不是数组 或是空数组 则不处理
			if (!tool.isArray(agrs) || agrs.length === 0) {
				return false;
			}
			reportData.type = type;
			//直接转成JSON
			reportData.data = JSON.stringify(agrs);
			//上报
			self.noticeReport(reportData);
		}
		/*
  	监听 window.onerror,并处理错误信息
  	@errorEvent 		:错误信息对象
  	////////  上报error对象 /////////
  	errorObj object = {
  		errMsg: 			错误信息
  		url:                错误文件
  		line:         		错误所在行
  		colum:              错误所在列
  	}
   */

	}, {
		key: '_handleError',
		value: function _handleError(errorEvent) {
			var self = this;
			var errorObj = {};
			var url = errorEvent.filename || errorEvent.url || false;
			//可能是跨域资源JS出现错误 这获取不到详细信息
			if (errorEvent.message === 'Script error.' && !url) {
				errorObj.errMsg = 'jsError!可能是跨域资源的JS出现错误,无法获取到错误URL定位,错误信息为:' + errorEvent.message;
				errorObj.url = '';
				errorObj.line = 0;
				errorObj.colum = 0;
				setTimeout(function () {
					self._handleMessage('jsError', [errorObj]);
				});
				return false;
			}
			//处理错误信息
			errorObj.errMsg = errorEvent.message || '未获取到错误信息';
			errorObj.url = url;
			errorObj.line = errorEvent.lineno || '未获取到错误行';
			errorObj.colum = errorEvent.colno || '未获取到错误列';
			setTimeout(function () {
				self._handleMessage('jsError', [errorObj]);
			});
			return true;
		}
		/*
  	停止监听
   */

	}, {
		key: 'stopObserver',
		value: function stopObserver() {
			window.console.log = this.console.log;
			window.console.error = this.console.error;
			window.console.info = this.console.info;
			window.console.debug = this.console.debug;
			window.console.warn = this.console.warn;
			window.console.time = this.console.time;
			window.console.timeEnd = this.console.timeEnd;
			window.console.clear = this.console.clear;
			this.console = {};
			if (this._config.catchCrossDomain) {
				window.document.createElement = this.$createElement;
				this.$createElement = false;
			}
		}
		/*
  	开始监听
   */

	}, {
		key: 'startObserver',
		value: function startObserver() {
			//启动监听
			this._init();
		}
		/***************  上报相关  ******************/
		//注册上报监听

	}, {
		key: 'addReportListener',
		value: function addReportListener(callback) {
			if (callback) {
				this.eventListener.push(callback);
			}
		}
		/*
  	通知上报
   */

	}, {
		key: 'noticeReport',
		value: function noticeReport(content) {
			if (this.eventListener.length === 0) {
				return false;
			}
			//通知上报
			this.eventListener.map(function (item) {
				if (tool.isFunction(item)) {
					item(content);
				}
			});
		}
	}]);

	return KeepObserverLog;
}();

exports.default = KeepObserverLog;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});


/*
 	observer newwork 实例默认配置数据
 */
exports.default = {
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = __webpack_require__(9);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _tool = __webpack_require__(11);

var networkTool = _interopRequireWildcard(_tool);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 获取系统信息
var KeepObserverNetwork = function () {
	//构造函数
	function KeepObserverNetwork(config) {
		_classCallCheck(this, KeepObserverNetwork);

		//存混合配置
		this._config = tool.extend(_defaultConfig2.default, config);
		//上报名
		this._typeName = 'network';
		//监听列表
		this.eventListener = [];
		//监控的数据列表
		//key 为 请求ID
		//value :{
		//	method:   			请求方法
		//	url:      			请求baseUrl
		//	reqHead:     		请求头
		//	resHead:        	请求响应头
		//	params:   			请求URL上携带的参数
		//	data:       		请求postData
		//	status:         	请求状态码
		//	startTime:      	请求开始时间
		//	endTime:        	请求结束时间
		//	costTime:       	请求耗时
		//	response: 			请求原始响应数据
		//	responseType    	请求响应类型
		//	handleResData:     	如果配置中传入 自定义处理响应数据 那么这里将保持处理后的响应数据
		//	handleReqData:      如果配置中传入 自定义处理发送数据 那么这里将保持处理后的发送数据
		//	isTimeout:          是否超时 如果存在这个字段 则说明已经上报,忽略处理
		//	timeout:            如果超时 这里是设置的超时时间
		//	isError:            这个请求是否出现错误
		//	errorContent:       错误信息
		//}
		this.networkList = {};
		//替换window.XMLHttpRequest变量
		this._open = false;
		this._send = false;
		this._setRequestHeader = false;
		//辅助捕获超时
		this.timeout = {};
		this.timeoutRequest = {};
		//开启网络拦截监控
		this._init();
	}
	/*
 	初始化ajax请求监控
 	在这里替换window.XMLHttpRequest变量进行监控
  */


	_createClass(KeepObserverNetwork, [{
		key: '_init',
		value: function _init() {
			var self = this;
			var _XMLHttp = window.XMLHttpRequest;
			//不支持 ajax 不进行监控
			if (!_XMLHttp) {
				return false;
			}
			self._open = window.XMLHttpRequest.prototype.open;
			self._send = window.XMLHttpRequest.prototype.send;
			self._setRequestHeader = window.XMLHttpRequest.prototype.setRequestHeader;
			//处理Ajax
			self._handleXMLAjax();
		}
		/*
  	拦截XML AJax信息
   */

	}, {
		key: '_handleXMLAjax',
		value: function _handleXMLAjax() {
			var self = this;
			//拦截原生open
			window.XMLHttpRequest.prototype.open = function () {
				var XML = this;
				var args = tool.toArray(arguments);
				//定时器
				var timer = null;
				//获取请求唯一ID
				var id = networkTool.getUniqueID();
				//获取方法
				var method = args[0];
				//获取url
				var url = args[1];

				//保存下 在send中使用
				XML._url = url;
				XML._method = method;
				XML._id = id;
				//保存下请求头 在拦截请求头处使用
				XML._setHead = {};
				XML._setHead[id] = {};

				//拦截处理响应回调
				var _onreadystatechange = XML.onreadystatechange || function () {};
				// start onreadystatechange
				var onreadystatechange = function onreadystatechange() {
					var item = self.networkList[id] ? self.networkList[id] : false;
					//如果不存在 可能略过了send 会导致丢失部分数据
					if (!item) {
						item = {};
						//保存请求方法
						item.method = method;

						var _networkTool$handleRe = networkTool.handleReqUrl(url),
						    url = _networkTool$handleRe.url,
						    params = _networkTool$handleRe.params;
						//处理请求url和params


						item.url = url;
						item.params = params;
					}
					//更新状态
					item.status = 0;
					if (XML.readyState > 1) {
						item.status = XML.status;
					}
					item.responseType = XML.responseType;
					//判断请求状态
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
					} else if (XML.readyState == 2) {
						// 发送		          	
					} else if (XML.readyState == 3) {
						//loading
					} else if (XML.readyState == 4) {
						//结束超时捕获
						self._handleTimeout(id);
						//处理响应头
						item.resHead = {};
						var header = XML.getAllResponseHeaders() || '',
						    headerArr = header.split("\n");
						//提取数据
						for (var i = 0; i < headerArr.length; i++) {
							var line = headerArr[i];
							if (!line) {
								continue;
							}
							var arr = line.split(': ');
							var key = arr[0],
							    value = arr.slice(1).join(': ');
							item.resHead[key] = value;
						}
						//完成
						clearInterval(timer);
						item.endTime = +new Date(), item.costTime = item.endTime - (item.startTime || item.endTime) + 'ms';
						item.response = XML.response;
						//请求结束完成
						setTimeout(function () {
							//是否是超时接口 超时的接口不做处理
							if (!self.timeoutRequest[id]) {
								self._handleDoneXML(id);
							}
						});
					} else {
						clearInterval(timer);
					}
					//如果这个接口已经超时处理了 那么不记录
					if (!self.timeoutRequest[id]) {
						self.networkList[id] = item;
					}
					return _onreadystatechange.apply(XML, arguments);
				};
				XML.onreadystatechange = onreadystatechange;
				//end onreadystatechange
				//防止第三方库更改状态
				//定时查看请求状态
				var preState = -1;
				timer = setInterval(function () {
					if (preState != XML.readyState) {
						preState = XML.readyState;
						onreadystatechange.call(XML);
					}
				}, 10);
				return self._open.apply(XML, args);
			};
			//拦截原始设置请求头
			window.XMLHttpRequest.prototype.setRequestHeader = function () {
				var XML = this;
				var args = tool.toArray(arguments);
				if (XML._id && XML._setHead) {
					var setHead = XML._setHead[XML._id];
					var key = args[0] ? args[0] : 'unkownRequestHead';
					var value = args[1] ? args[1] : '';
					setHead[key] = value;
					XML._setHead[XML._id] = setHead;
				}
				return self._setRequestHeader.apply(XML, args);
			};
			//拦截原生send
			window.XMLHttpRequest.prototype.send = function () {
				var XML = this;
				var id = XML._id;
				var method = XML._method.toUpperCase();
				var requestHead = XML._setHead[id];
				var url = XML._url;
				var args = [].slice.call(arguments),
				    data = args[0],
				    saveData = '';
				//监听列表中创建一条请求
				if (!self.networkList[id]) {
					self.networkList[id] = {};
				}
				//保存请求方法
				self.networkList[id].method = method;

				var _networkTool$handleRe2 = networkTool.handleReqUrl(url),
				    url = _networkTool$handleRe2.url,
				    params = _networkTool$handleRe2.params;
				//处理请求url和params


				self.networkList[id].url = url;
				self.networkList[id].params = params;
				//保存自定义请求头
				if (requestHead) {
					self.networkList[id].reqHead = tool.extend({}, requestHead);
					delete XML._setHead[id];
				}
				//如果是post数据保存
				if (method === 'POST') {
					if (tool.isString(data)) {
						saveData = data;
					}
				}
				self.networkList[id].data = saveData;
				//开启定时器 判断接口是否超时
				self._handleTimeout(id);
				return self._send.apply(XML, args);
			};
		}
		/*
  	处理接口请求超时
   */

	}, {
		key: '_handleTimeout',
		value: function _handleTimeout(id) {
			var self = this;
			var timeout = self._config.timeout;
			var isTimeout = self.timeoutRequest[id] ? self.timeoutRequest[id] : false;
			var time = self.timeout[id] ? self.timeout[id] : false;
			var item = self.networkList[id];
			//如果不存在 不做处理
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
					item.errorContent = '接口响应超时，超时时间:' + timeout + '(ms)';
					//这里直接完成添加到超时列表 停止后续处理
					self._handleDoneXML(id);
					self.timeoutRequest[id] = true;
				}, timeout);
			} else {
				//如果存在 则说明已经回调 取消超时定时器
				clearTimeout(time);
			}
		}
		/*
  	处理请求完成的数据
  	@id:拦截请求唯一ID
   */

	}, {
		key: '_handleDoneXML',
		value: function _handleDoneXML(id) {
			var self = this;
			var ajaxItem = tool.extend({}, self.networkList[id]);
			var _self$_config = self._config,
			    onHandleJudgeResponse = _self$_config.onHandleJudgeResponse,
			    onHandleRequestData = _self$_config.onHandleRequestData,
			    onHandleResponseData = _self$_config.onHandleResponseData;
			//空的对象不做处理

			if (tool.isEmptyObject(ajaxItem)) {
				return false;
			}
			/******   这里开始处理数据  *****/
			//判断当前请求数据url是否需要屏蔽
			if (!self._handleJudgeDisbale(ajaxItem)) {
				self.networkList[id];
				return false;
			}
			//
			//如果存在自定义处理 请求data配置
			if (onHandleRequestData) {
				try {
					ajaxItem.handleReqData = onHandleRequestData(ajaxItem);
				} catch (err) {
					ajaxItem.handleReqData = '自定义handleRequestData出错:' + err;
				}
			}
			//判断状态码是否出错
			var status = ajaxItem.status;
			if (!networkTool.validateStatus(status) && !ajaxItem.isError) {
				ajaxItem.isError = true;
				ajaxItem.errorContent = 'http请求错误!错误状态码:' + status;
			}
			//如果存在自定义处理响应数据是否出错
			if (onHandleJudgeResponse && !ajaxItem.isError) {
				try {
					ajaxItem.isError = onHandleJudgeResponse(ajaxItem);
					if (ajaxItem.isError) {
						ajaxItem.errorContent = ajaxItem.isError;
						ajaxItem.isError = true;
					}
				} catch (err) {
					ajaxItem.isError = true;
					ajaxItem.errorContent = '自定义判断handleJudgeResponse出错:' + err;
				}
			}
			//如果存在自定义处理 响应data配置
			if (onHandleResponseData && !ajaxItem.isError) {
				try {
					ajaxItem.handleResData = onHandleResponseData(ajaxItem);
				} catch (err) {
					ajaxItem.handleResData = '自定义handleResponseData出错:' + err;
				}
			}
			//通知上传
			self.noticeReport(ajaxItem);
			//上报后删除记录
			delete self.networkList[id];
		}
		/*
  	判断该请求是否是屏蔽请求
  	params
  		ajaxInfo :即将上报的数据
  	return
  		忽略返回 false;
  		不忽略返回 true
   */

	}, {
		key: '_handleJudgeDisbale',
		value: function _handleJudgeDisbale(ajaxInfo) {
			var ignoreRequestList = this._config.ignoreRequestList;
			//判断是否是是屏蔽url

			if (ignoreRequestList && tool.isArray(ignoreRequestList)) {
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
			//判断是否是keepObserver的上报请求
			if (ajaxInfo.reqHead && ajaxInfo.reqHead['keepObserver-reportAjax']) {
				return false;
			}
			return true;
		}
		/*
  	停止监听
   */

	}, {
		key: 'stopObserver',
		value: function stopObserver() {
			window.XMLHttpRequest.prototype.open = this._open;
			window.XMLHttpRequest.prototype.send = this._send;
			window.XMLHttpRequest.prototype.setRequestHeader = this._setRequestHeader;
			this._open = null;
			this._send = null;
			this.__setRequestHeader = null;
		}
		/*
  	开始监听
   */

	}, {
		key: 'startObserver',
		value: function startObserver() {
			//开启网络拦截监控
			this._init();
		}
		/********************  上报相关  ***********************/
		//注册上报监听

	}, {
		key: 'addReportListener',
		value: function addReportListener(callback) {
			if (callback) {
				this.eventListener.push(callback);
			}
		}
		//通知上报

	}, {
		key: 'noticeReport',
		value: function noticeReport(content) {
			if (this.eventListener.length === 0) {
				return false;
			}
			//通知上报
			this.eventListener.map(function (item) {
				if (tool.isFunction(item)) {
					item(content);
				}
			});
		}
	}]);

	return KeepObserverNetwork;
}();

exports.default = KeepObserverNetwork;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getUniqueID = getUniqueID;
exports.handleReqUrl = handleReqUrl;
exports.validateStatus = validateStatus;

/*
   Vconsole
   * generate an unique id string (32)
   * @private
   * @return string
*/
function getUniqueID() {
	var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0,
		    v = c == 'x' ? r : r & 0x3 | 0x8;
		return v.toString(16);
	});
	return id;
}

/*
	处理URL
	分离base url 和params
	@return {
		url:  string
		params: object or string('')
	}
 */

function handleReqUrl(url) {
	//处理下解码URL
	url = window.decodeURIComponent(url);
	var params = '';
	var baseUrl = '';
	//判断URL后面是否存在参数
	if (url.indexOf('?') === -1) {
		baseUrl = url;
	} else {
		var query = url.indexOf('?');
		baseUrl = url.substring(0, query);
		query = url.substring(query + 1, url.length);
		params = {};
		query = query.split('&'); // => ['b=c', 'd=?e']
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = query[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var q = _step.value;

				q = q.split('=');
				params[q[0]] = q[1];
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}
	return {
		url: baseUrl,
		params: params
	};
}

/*
	检查状态码是否正确
 */
function validateStatus(status) {
	return status >= 200 && status < 300;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});


/*
 
 	observer System 实例默认配置数据
 */

exports.default = {
	//是否每天只记录一次
	isOneDay: true,
	//是否启动性能分析 
	isPerformance: true,
	//是否检查缓存读取内容
	isPerformanceRequest: true,
	//获取到system信息是否立即上报
	immediatelyiReport: true
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = __webpack_require__(12);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 获取系统信息
var KeepObserverSystem = function () {
	//构造函数
	function KeepObserverSystem(config) {
		_classCallCheck(this, KeepObserverSystem);

		//存混合配置
		this._config = tool.extend(_defaultConfig2.default, config);
		//系统信息
		this._systemInfo = false;
		//上报名
		this._typeName = 'system';
		//监听列表
		this.eventListener = [];
		//开始获取系统信息
		this.getSystemInfo();
	}
	//获取系统信息


	_createClass(KeepObserverSystem, [{
		key: 'getSystemInfo',
		value: function getSystemInfo() {
			var self = this;
			var oneDayFlag = this.checkIsOneDay();
			//判断是否每天最多获取上传一次
			if (this._config.isOneDay && oneDayFlag) {
				return false;
			}
			//开始获取系统信息
			var systemInfo = window.navigator.userAgent;
			if (self._config.isPerformance) {
				self.getWebPerformance(function (Result) {
					self._systemInfo = Result;
					self._systemInfo.systemInfo = systemInfo;
					//上报
					self.noticeReport(self._systemInfo);
					//记录
					self.recordReport();
				});
			}
		}
		//获取首屏性能分析

	}, {
		key: 'getWebPerformance',
		value: function getWebPerformance(onCallback) {
			var self = this;
			//异步实现,等待完全加载完成
			var performance = function performance() {
				var info = {};
				var performance = window.performance || window.msPerformance || window.webkitPerformance;
				var timing = window.performance && window.performance.timing;
				var navigation = window.performance && window.performance.navigation;
				//获取性能分析
				if (performance && timing) {
					//重定向次数：
					info.redirectCount = navigation ? navigation.redirectCount + '次' : '未知';
					//跳转耗时：
					info.redirectTime = timing.redirectEnd - timing.redirectStart + 'ms';
					//APP CACHE 耗时：
					info.appcacheTime = Math.max(timing.domainLookupStart - timing.fetchStart, 0) + 'ms';
					//DNS 解析耗时：
					info.dns = timing.domainLookupEnd - timing.domainLookupStart + 'ms';
					//TCP 链接耗时：
					info.tcp = timing.connectEnd - timing.connectStart + 'ms';
					//等待服务器响应耗时（注意是否存在cache）：
					info.request = timing.responseStart - timing.requestStart + 'ms';
					//内容加载耗时（注意是否存在cache）:
					info.response = timing.responseEnd - timing.responseStart + 'ms';
					//总体网络交互耗时，即开始跳转到服务器资源下载完成：
					info.network = timing.responseEnd - timing.navigationStart + 'ms';
					//渲染处理：
					info.DOMrender = (timing.domComplete || timing.domLoading) - timing.domLoading + 'ms';
					//抛出 load 事件：
					info.onloadTime = timing.loadEventEnd - timing.loadEventStart + 'ms';
					//总耗时：
					info.total = (timing.loadEventEnd || timing.loadEventStart || timing.domComplete || timing.domLoading) - timing.navigationStart + 'ms';
					//可交互：
					info.DOMactive = timing.domInteractive - timing.navigationStart + 'ms';
					//请求响应耗时，即 T0，注意cache：
					info.webResponse = timing.responseStart - timing.navigationStart + 'ms';
					//首次出现内容，即 T1：
					info.webLoad = timing.domLoading - timing.navigationStart + 'ms';
					//内容加载完毕，即 T3：
					info.webLoadEnd = timing.loadEventEnd - timing.navigationStart + 'ms';
				}
				//是否获取加载资源内容
				if (self._config.isPerformanceRequest) {
					info.requestPerformance = [];
					if (performance.getEntries) {
						var requestPerformance = performance.getEntries();
						//只检查initiatorType  script css xmlhttprequest
						if (tool.isArray(requestPerformance)) {
							requestPerformance.map(function (item) {
								if (item.initiatorType) {
									var perInfo = {
										type: item.initiatorType,
										name: item.name,
										time: item.duration.toFixed(2) + 'ms',
										size: (item.encodedBodySize / 1000).toFixed(2) + 'kb'
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
			};
			//挂载在 window.onload 中
			if (typeof window.addEventListener != 'undefined') {
				window.addEventListener('load', function () {
					setTimeout(performance, 0);
				}, false);
			} else {
				window.attachEvent('onload', function () {
					setTimeout(performance, 0);
				});
			}
		}
		//验证今天是否已经获取上传了一次用户信息了

	}, {
		key: 'checkIsOneDay',
		value: function checkIsOneDay() {
			var reportDate = tool.getStorage('systemRecordReportDate');
			var date = tool.dateFormat(new Date(), 'yyyy-MM-dd');
			//如果没获取上报过
			if (!reportDate) {
				return false;
			} else if (reportDate !== date) {
				return false;
			}
			return true;
		}
		//记录当天已经上报

	}, {
		key: 'recordReport',
		value: function recordReport() {
			if (this._config.isOneDay) {
				var date = tool.dateFormat(new Date(), 'yyyy-MM-dd');
				tool.setStorage('systemRecordReportDate', date);
			}
		}
		/***************  上报相关  ******************/
		//注册上报监听

	}, {
		key: 'addReportListener',
		value: function addReportListener(callback) {
			if (callback) {
				this.eventListener.push(callback);
			}
		}
		//通知上报

	}, {
		key: 'noticeReport',
		value: function noticeReport(content) {
			if (this.eventListener.length === 0) {
				return false;
			}
			//通知上报
			this.eventListener.map(function (item) {
				if (tool.isFunction(item)) {
					item(content);
				}
			});
		}
	}]);

	return KeepObserverSystem;
}();

exports.default = KeepObserverSystem;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/*
 
 	observer vue 实例默认配置数据
 */
exports.default = {
  //是否启动性能分析   暂时未做
  isPerformance: true
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = __webpack_require__(14);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 获取系统信息
var KeepObserverVue = function () {
	//构造函数
	function KeepObserverVue(config) {
		_classCallCheck(this, KeepObserverVue);

		//存混合配置
		this._config = tool.extend(_defaultConfig2.default, config);
		//上报名
		this._typeName = 'vue';
		//vue实例
		this._vue = this._config.vueInstance;
		//监听列表
		this.eventListener = [];
		//启动
		this._init();
	}
	/*
 	开始监控vue
  */


	_createClass(KeepObserverVue, [{
		key: '_init',
		value: function _init() {
			var self = this;
			if (self._vue.config) {
				self._vue.config.errorHandler = function () {
					self._handleVueError.apply(self, arguments);
				};
			}
		}
		/*
  	处理监控vue错误信息
   */

	}, {
		key: '_handleVueError',
		value: function _handleVueError(err, vm, info) {
			var self = this;
			var errInfo = {};
			errInfo.infoMsg = tool.toString(info);
			//是否存在堆栈信息
			if (tool.isObject(err) && err.stack && err.message) {
				errInfo.errMsg = tool.toString(err.message);
				errInfo.stackMsg = tool.toString(err.stack);
			} else {
				errInfo.errMsg = tool.toString(err);
			}
			errInfo.isError = true;
			//上报
			self.noticeReport(errInfo);
		}
		/*
  	停止监听
   */

	}, {
		key: 'stopObserver',
		value: function stopObserver() {
			if (this._vue.config) {
				this._vue.config.errorHandler = null;
			}
		}
		/*
  	开始监听
   */

	}, {
		key: 'startObserver',
		value: function startObserver() {
			//开启vue错误监听
			this._init();
		}
		/***************  上报相关  ******************/
		//注册上报监听

	}, {
		key: 'addReportListener',
		value: function addReportListener(callback) {
			if (callback) {
				this.eventListener.push(callback);
			}
		}
		//通知上报

	}, {
		key: 'noticeReport',
		value: function noticeReport(content) {
			if (this.eventListener.length === 0) {
				return false;
			}
			//通知上报
			this.eventListener.map(function (item) {
				if (tool.isFunction(item)) {
					item(content);
				}
			});
		}
	}]);

	return KeepObserverVue;
}();

exports.default = KeepObserverVue;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
	处理url挂载参数
 */
var handleUrlParams = function handleUrlParams(url, params) {
	if (url.indexOf('?') === -1) {
		url += '?';
	} else {
		url += url.indexOf('&') === -1 ? '&' : '';
	}
	for (var key in params) {
		url += key + '=';
		url += params[key].toString() + '&';
	}
	url = url.substring(0, url.length - 1);
	return url;
};

/*
	上报ajax请求
	params
		config = {
			url: 			上报url
			data:  			上报数据
			params: 		上报url上是否挂载参数
			customeHead:    上报自定义请求头     
		}
	return 
		promise
 */
var AjaxServer = function AjaxServer(config) {
	//创建一个Promise回调
	var defer = new Promise(function (res, rej) {
		var url = config.url,
		    data = config.data,
		    params = config.params,
		    customeHead = config.customeHead;

		var resHead = {};
		//判断数据
		if (!url || !data) {
			rej('上报数据失败:上报url和data不能为空');
			return false;
		}
		//是否需要挂载参数
		if (params && tool.isObject(params)) {
			url = handleUrlParams(url, params);
		}
		//开始请求
		var xhr = new XMLHttpRequest();
		xhr.open('POST', url, true);
		//处理请求头
		var xhrHead = {
			'Content-Type': 'application/json;charset=UTF-8'
		};
		if (customeHead && tool.isObject(customeHead)) {
			xhrHead = tool.extend(xhrHead, customeHead);
		}
		xhrHead['keepObserver-reportAjax'] = 'yes';
		for (var key in xhrHead) {
			xhr.setRequestHeader(key, xhrHead[key]);
		}
		//监听回调
		xhr.onreadystatechange = function (e) {
			if (xhr.readyState == 4) {
				//防止跨域等问题  触发错误导致死循环
				try {
					//处理响应头
					if (xhr && xhr.getAllResponseHeaders) {
						var header = xhr.getAllResponseHeaders() || '',
						    headerArr = header.split("\n");
						//提取数据
						for (var i = 0; i < headerArr.length; i++) {
							var line = headerArr[i];
							if (!line) {
								continue;
							}
							var arr = line.split(': ');
							var _key = arr[0],
							    value = arr.slice(1).join(': ');
							resHead[_key] = value;
						}
					}
					if (xhr.status == 200) {
						var result = {
							head: resHead,
							data: xhr.responseText
						};
						res(result);
					} else {
						rej('请求出现错误!错误状态码:' + xhr.status);
					}
				} catch (e) {
					rej('请求出现错误!' + e);
				}
				//end
			}
		};
		xhr.onerror = function (e) {
			rej('请求出现错误!' + e);
		};
		//发送数据
		var data = JSON.stringify(data);
		xhr.send(data);
	});
	return defer;
};

exports.default = AjaxServer;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

/*
 
 	report 实例默认配置数据
	config params:
 */

var type = ['unKownType', 'system', 'log', 'network', 'vue'];

exports.default = {
	/******************** 公共相关配置 *******************/
	//上报的类型
	$observer_Type: type,
	//如果取不到缓存长度的默认长度
	max_cache: 3,

	/******** system相关配置   *********/
	//默认system数组缓存长度
	max_system_cache: 1,
	//缓存数据满了是否上传
	max_system_fillIsReport: true,

	/******** network相关配置   *********/
	//默认network数组缓存长度
	max_network_cache: 5,
	//缓存数据满了是否上传
	max_network_fillIsReport: false,

	/******** log相关配置   *********/
	//默认log数组缓存长度
	max_log_cache: 15,
	//缓存数据满了是否上传
	max_log_fillIsReport: false,

	/******** vue相关配置   *********/
	//默认vue数组缓存长度
	max_vue_cache: 1,
	//缓存数据满了是否上传
	max_vue_fillIsReport: true,
	/*********************   上传相关   ********************/
	//上传服务器的url列表  		array
	reportUrl: false,
	//上传失败回调				function (reportInfo,reportUrl(有可能有))
	onReportFail: false,
	//上传前自定义设置url   	function (reportUrl)   return new URl
	onReportBeforeSetUrl: false,
	//上传前自定义设置请求头， 	function (reportUrl)   return headData object
	onReportBeforeSetHead: false,
	//上传服务器前回调钩子  	function (reportInfo,reportUrl,repHead)
	onReportBeforeHook: false,
	//上传服务器后返回处理钩子  	function (resultInfo,reportUrl,resHead)
	onReportResultHook: false
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _defaultConfig = __webpack_require__(17);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _index3 = __webpack_require__(0);

var tool = _interopRequireWildcard(_index3);

var _ajax = __webpack_require__(16);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 上报服务器相关
var KeepObserverReport = function (_KeepObserverDefault) {
	_inherits(KeepObserverReport, _KeepObserverDefault);

	//构造函数
	function KeepObserverReport(config) {
		_classCallCheck(this, KeepObserverReport);

		//存混合配置
		var _this = _possibleConstructorReturn(this, (KeepObserverReport.__proto__ || Object.getPrototypeOf(KeepObserverReport)).call(this, config));

		_this.$report_config = tool.extend(_defaultConfig2.default, config);
		//上传数据保存
		_this.reportData = {};
		//用户自定义上传参数
		_this._customeInfo = false;

		//当前是否处于开发模式
		_this.develop = _this.$report_config.develop;
		_this.developGetMsgLog = _this.$report_config.developGetMsgLog;
		_this.develogDeleteLog = _this.$report_config.develogDeleteLog;
		_this.develogDiscardLog = _this.$report_config.develogDiscardLog;

		//初始化
		_this._init();
		return _this;
	}
	/********************   对外提供函数  **********************/
	/*
 	接受需要上报的内容
 	params  
 	@object  = {
 		@ .typeName string   	  (no null)	      上报类型名
 		@ .data  array or object  (no null) 	  上报内容
 	}
 	@ .control null and object = {
 		@ .lazy       Boolean          		      是延时上报(由手动上传合并上报或者又下一次该上报合并上报) 不传立即上报
 		@ .isError    Boolean					  是否是出错信息 (保留未启用)
 		@ .baseExtend Boolean					  是否合并基础监控信息包括log以及network信息一起上报
 		@ .preDelete  Boolean                     是否删除之前保存typeName的缓存数据
 		@ .ignore     Boolean					  是否忽略本条数据
 	}
  */


	_createClass(KeepObserverReport, [{
		key: '$getReportContent',
		value: function $getReportContent(params, control) {
			//判断数据合法性
			if (!params || !params.typeName || !params.data || !tool.isArray(params.data) && !tool.isObject(params.data)) {
				return false;
			}
			//添加上传时间搓
			params.reportTime = new Date().getTime();
			//是否是开发模式需要打印
			if (this.develop && this.developGetMsgLog) {
				var log = tool.extend({}, params);
				log.title = '获得' + log.typeName + "类型监控数据";
				this.$devLog(log);
			}
			//是否删除之前保存的数据
			if (control && control.preDelete) {
				this._removeReportData(params.typeName);
			}
			//是否忽略本条数据
			if (control && control.ignore) {
				return false;
			}
			//保存到上报数据中
			var cacheLen = this._saveReportData(params);
			var maxCache = this.$report_config['max_' + params.typeName + '_cache'];
			var isReport = this.$report_config['max_' + params.typeName + '_fillIsReport'];
			//是否立即上报 或者缓存已满上报
			if (control && !control.lazy || isReport && cacheLen === maxCache) {
				//是否合并上报
				this._handleReport(params.typeName, control);
			}
		}
		/*
  	接受自定义上报内容
  	params type object
  	合并到this._customeInfo中
   */

	}, {
		key: '$getCustomeReport',
		value: function $getCustomeReport(params) {
			//判断数据正确性
			if (!params || !tool.isObject(params) || tool.isEmptyObject(params)) {
				return false;
			}
			if (!this._customeInfo) {
				this._customeInfo = {};
			}
			//设置用户自定义上报内容
			this._customeInfo = tool.extend(this._customeInfo, params);
		}
		/****************   内部使用函数  *************/
		/*
  	初始化上报类参数
  	复制this.reportData并从strong里面复原数据
  	如果是开发模式 替换window.console.log
   */

	}, {
		key: '_init',
		value: function _init() {
			var self = this;
			//初始化this.reportData
			var handleType = self.$report_config.$observer_Type;
			handleType.forEach(function (type) {
				var cacheData = tool.getStorage(type);
				self.reportData[type] = [];
				if (cacheData) {
					self.reportData[type] = cacheData;
				}
			});
		}
		/* 
  	保存处理上报数据
  	params type object
  	@ .typeName string   	  (no null)	      上报类型名
  	@ .data  array or object  (no null) 	  上报内容
  	@ .lazy bollen          				  是延时上报(由手动上传合并上报或者又下一次该上报合并上报) 不传立即上报
  	**********************************
  	# return  当前保存数据长度
   */

	}, {
		key: '_saveReportData',
		value: function _saveReportData(params) {
			var type = params.typeName;
			//如果没有该上报类型,那么属于未知内容
			if (!this.reportData[type]) {
				type = 'unKownType';
			}
			var reportData = this.reportData[type];
			//是否延时上报,如果没有添加到上报数据中
			var maxCache = this.$report_config['max_' + type + '_cache'];
			maxCache = maxCache ? maxCache : this.$report_config['max_cache'];
			//如果当前存储超过长度 那么弹出最早的数据
			if (reportData.length + 1 > maxCache) {
				var discard = reportData.shift();
				//开发模式打印
				if (this.develop && this.develogDiscardLog) {
					discard.title = type + '类型监控数据超出缓存长度丢弃内容';
					this.$devLog(discard);
				}
			}
			reportData.push(params);
			this.reportData[type] = reportData;
			//保存到locationStorage中
			tool.setStorage(type, reportData);
			return reportData.length;
		}
		/*
  	删除保存的上报数据
  	@params type string    上报类型
   */

	}, {
		key: '_removeReportData',
		value: function _removeReportData(type) {
			if (this.reportData[type]) {
				this.reportData[type] = [];
				tool.removeStorage(type);
				//开发模式下打印
				if (this.develop && this.develogDeleteLog) {
					this._$devLog(type + '类型监控数据已清除');
				}
			}
		}
		/********************   上报相关   **********************/
		/*
  	生成上报数据头
  	params:
  		@ .type  string								上报数据类型
  		@ .control object 							上报控制
  	return     
  		reportData  {
  			//以下参数必定存在
  			@ .type  string							上报数据类型
  			@ .project  string              		上报项目名
  			@ .projectVersion string 				keepObserver版本
  			@ .reportTime  number  					上报时间时间搓
  			@ .data array or data                   上报内容
  			//一下参数可能存在
  			@ .customeInfo   all  					用户自定义设置上传参数 
  		}     					
   */

	}, {
		key: '_createReportData',
		value: function _createReportData(type, control) {
			var self = this;
			var reportData = {};
			//添加基本信息
			reportData.reportType = type;
			reportData.project = self._project;
			reportData.projectVersion = self._version;
			reportData.reportTime = new Date().getTime();
			//处理自定义信息
			if (self._customeInfo) {
				reportData.customeInfo = tool.extend({}, self._customeInfo);
			}
			//处理上报数据  是否合并上报
			if (control.baseExtend) {
				reportData.data = {};
				for (var key in self.reportData) {
					var value = self.reportData[key];
					if (tool.isArray(value) && value.length > 0) {
						reportData.data[key] = tool.extend({}, value);
						//删除相关数据
						self._removeReportData(key);
					}
				}
			} else {
				reportData.data = tool.extend({}, self.reportData[type]);
				self._removeReportData(type);
			}
			//开发模式下打印上报数据
			if (self.develop) {
				var log = tool.extend({}, reportData);
				log.title = type + "类型即将上报服务器,上报内容在data中";
				self.$devLog(log);
			}
			return reportData;
		}
		/*
  	调用钩子
  	@arguments[0] = onHooK
  	@arguments[...] = params
  	return
  		onHook result
   */

	}, {
		key: '_handleHook',
		value: function _handleHook() {
			var args = tool.toArray(arguments);
			if (!args || args.length === 0 || !tool.isFunction(args[0])) {
				return false;
			}
			var onHook = args[0];
			var params = args.slice(1, args.length);
			try {
				var result = onHook(params);
			} catch (err) {
				//报错
				this.$devError(onHook.name + '回调钩子运行出现错误:' + err);
			}
			return result;
		}
		/*  
  	处理上传失败
  	params
  		onFail      function        	失败的回调 没有则忽略直接跳过
  		reportData 	obj or arr          需要上传的数据
  		reportUrl 	string     			上传的url地址 (有可能存在)
   */

	}, {
		key: '_handleReportFail',
		value: function _handleReportFail(onFail, reportData, reportUrl) {
			if (!onFail) {
				return false;
			}
			try {
				onFail(reportData, reportUrl);
			} catch (e) {
				this.$devError('上传错误回调钩子运行出现错误:' + err);
			}
		}
		/*
  	处理上报
  	params 
  		type string    		上报类型
  		control object 		上报控制
   */

	}, {
		key: '_handleReport',
		value: function _handleReport(type, control) {
			var self = this;
			//如果未传入数据类型
			if (!type || !tool.isString(type)) {
				return false;
			}
			//获得上传数据
			var reportData = self._createReportData(type, control);
			//上传到服务器
			var _$report_config = this.$report_config,
			    reportUrl = _$report_config.reportUrl,
			    onReportFail = _$report_config.onReportFail,
			    onReportBeforeSetUrl = _$report_config.onReportBeforeSetUrl,
			    onReportBeforeSetHead = _$report_config.onReportBeforeSetHead,
			    onReportBeforeHook = _$report_config.onReportBeforeHook,
			    onReportResultHook = _$report_config.onReportResultHook;
			//如果没有设置上传URL 那么停止上传

			if (!reportUrl || !tool.isArray(reportUrl)) {
				self._handleReportFail(onReportFail, reportData, null);
				return false;
			}
			//遍历URL上传列表
			//开始依次上传
			reportUrl.map(function (item) {
				var reportConfig = {};
				//是否有上传前修改URL回调
				if (onReportBeforeSetUrl) {
					var url = self._handleHook(onReportBeforeSetUrl, item);
				} else {
					url = item;
				}
				if (!tool.isString(url)) {
					self._handleReportFail(onReportFail, reportData, null);
					return false;
				}
				reportConfig.url = url;
				//获取自定义请求头
				var customeHead = onReportBeforeSetHead ? self._handleHook(onReportBeforeSetHead, item) : false;
				if (customeHead && tool.isObject(customeHead) && !tool.isEmptyObject(customeHead)) {
					reportConfig.customeHead = customeHead;
				}
				//获取请求
				reportConfig.data = reportData;
				self._handleHook(onReportBeforeHook, reportData, reportConfig.url, reportConfig.customeHead);
				//上传到服务器
				try {
					(0, _ajax2.default)(reportConfig).then(function (result) {
						self._handleHook(onReportResultHook, result.data, reportConfig.url, result.head);
					}, function (err) {
						self._handleReportFail(onReportFail, reportData, reportConfig.url);
					});
				} catch (err) {
					//上传报错
					self.$devError('上传数据出现错误:' + err);
				}
				//end
			});
			// map url end
		}
	}]);

	return KeepObserverReport;
}(_index2.default);

exports.default = KeepObserverReport;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
});
//# sourceMappingURL=keepObserver.js.map