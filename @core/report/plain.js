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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/services/report/plain/index.ts");
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

/***/ "./src/services/report/plain/ajax.ts":
/*!*******************************************!*\
  !*** ./src/services/report/plain/ajax.ts ***!
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

var tool = __importStar(__webpack_require__(/*! ../../../util/tool */ "./src/util/tool.ts"));
/*
    处理url挂载参数
    handle url paramns
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
    report data Ajax request
    上报ajax请求
    params
        config = {
            url: 			上报url 				report url
            data:  			上报数据 				report data
            params: 		上报url上是否挂载参数 	report url on params
            customeHead:    上报自定义请求头     	report custome request header
        }
    return
        Promise
 */


var AjaxServer = function AjaxServer(config) {
  //创建一个Promise回调
  //new Promise
  var defer = new Promise(function (res, rej) {
    var url = config.url,
        data = config.data,
        params = config.params,
        customeHead = config.customeHead;
    var resHead = {};
    var synchroTime = false; //judge data

    if (!url || !data) {
      rej('report data fail, report url and report data is exist undefined!');
      return false;
    } //can is use params


    if (params && tool.isObject(params)) {
      url = handleUrlParams(url, params);
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true); //handle request header flag

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

    xhr.onreadystatechange = function (e) {
      if (xhr.readyState == 4) {
        //防止跨域等问题  触发错误导致死循环
        //Prevent problems such as cross-domain triggering errors _self lead to dead loops
        try {
          //handle response headers
          if (xhr && xhr.getAllResponseHeaders) {
            var header = xhr.getAllResponseHeaders() || '',
                headerArr = header.split("\n"); //get data

            for (var i = 0; i < headerArr.length; i++) {
              var line = headerArr[i];

              if (!line) {
                continue;
              }

              var arr = line.split(': ');
              var key_1 = arr[0],
                  value = arr.slice(1).join(': ');
              resHead[key_1] = value;
            }
          }

          if (xhr.status == 200) {
            var result = {
              head: resHead,
              data: xhr.responseText
            };
            res(result);
          } else {
            rej('Ajax request process find error! error status code:' + xhr.status);
          }
        } catch (e) {
          rej('Ajax request process find error!' + e);
        } //end

      }
    };

    xhr.onerror = function (e) {
      rej('Ajax request process find error!' + e);
    }; //send data


    var sendData = JSON.stringify(data);
    xhr.send(sendData);
  });
  return defer;
};

exports["default"] = AjaxServer;

/***/ }),

/***/ "./src/services/report/plain/api.ts":
/*!******************************************!*\
  !*** ./src/services/report/plain/api.ts ***!
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

var tool = __importStar(__webpack_require__(/*! ../../../util/tool */ "./src/util/tool.ts"));
/*
        接受自定义上报内容
        model1: arguments[0]  type object
        model2: arguments[0]  type boolean
                will extend preData  arguments[...]=extend data
        合并到this._customeInfo中
     */


exports.$setCustomeReportData = function (params) {
  var _self = this; //判断数据正确性


  var args = tool.toArray(arguments);

  if (!args || args.length === 0) {
    return false;
  }

  if (!_self._customeInfo) {
    _self._customeInfo = {};
  }

  var params = args[0]; //如果是普通添加

  if (tool.isObject(params) && !tool.isEmptyObject(params)) {
    //设置用户自定义上报内容
    _self._customeInfo = tool.extend(_self._customeInfo, params);
    return false;
  } //如果是修改并覆盖之前的数据


  if (tool.isBoolean(params) && params && args.length > 1) {
    params = args.slice(1, args.length);
    params.map(function (item) {
      if (tool.isObject(item) && !tool.isEmptyObject(item)) {
        _self._customeInfo = tool.extend(_self._customeInfo, item);
      }
    });
  }
};

/***/ }),

/***/ "./src/services/report/plain/defaultConfig.ts":
/*!****************************************************!*\
  !*** ./src/services/report/plain/defaultConfig.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! ../../../constants/index */ "./src/constants/index.ts");

exports["default"] = {
  /******************** 公共相关配置 *******************/
  //上报的类型
  $observer_Type: index_1.reportType,
  //如果取不到缓存长度的默认长度
  max_cache: 3,
  //默认log数组缓存长度
  max_log_cache: 5,
  //默认vue数组缓存长度
  max_vue_cache: 1,
  //默认network数组缓存长度
  max_network_cache: 3,

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
  //上传服务器后返回处理钩子      function (resultInfo,reportUrl,resHead)
  onReportResultHook: false
};

/***/ }),

/***/ "./src/services/report/plain/handle.ts":
/*!*********************************************!*\
  !*** ./src/services/report/plain/handle.ts ***!
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

var tool = __importStar(__webpack_require__(/*! ../../../util/tool */ "./src/util/tool.ts"));
/*
    receive the report data
    params
    @object  = {
        type:  string                   //类型,observer or performance
        typeName:  string               //类型名,vue  or log or network
        location:string                 //捕获位置
        environment:string              //运行环境信息
        data:object                     //捕获数据
        reportTime: int                 //捕获时间搓
    }
    @ .control null and object = {
        @ .isReport:boolean                 //是否需要上报 内部reportServer需要使用
        @ .lazy:boolean                     //是否懒上报, （手动trackExtend合并上报,或者trackExtend合并上报）,不立即上报
        @ .trackExtend:boolean              //是否合并之前保存的lazy信息一起上报
        @ .isError:boolean                  //是否是错误信息
        @ .isPerformance:boolean            //是否是性能捕获分析
        @ .preDelete:boolean                //是否删除之前的信息
        @ .ignore:boolean                   //本条数据是否忽略
    }
*/


exports._getReportContent = function (params, control) {
  //判断数据合法性
  if (!params || !params.type || !params.typeName || !params.data || !tool.isObject(params.data)) {
    this.$devLog('[keepObserver] reportServer receive reportData is not right');
    return false;
  }

  if (!control) {
    this.$deveWarn('[keepObserver] reportServer receive pipeDate control options is  undefined');
    return false;
  } //是否是开发模式需要打印


  if (this.develop && this.developGetMsgLog) {
    var log = tool.extend({}, params);
    log.develop_title = '[keepObserver] get' + log.type + 'type:' + log.typeName + " of monitor data";
    this.$devLog(log);
  } //是否删除之前保存的数据


  if (params.type === 'monitor' && control.preDelete) {
    this._removeReportData(params.typeName);
  } //是否忽略本条数据


  if (control.ignore) {
    return false;
  } //是否懒上报


  if (params.type === 'monitor' && control.lazy) {
    this._saveReportData(params);

    return false;
  }

  if (control.isReport) {
    //上报
    this._handleReport(params, control);
  }
};
/*
    保存处理上报数据
    params type object
    @ .typeName string   	  (no null)	      上报类型名
    @ .data  array or object  (no null) 	  上报内容
    @ .lazy bollen          				  是延时上报(由手动上传合并上报或者又下一次该上报合并上报) 不传立即上报
    **********************************
    # return  当前保存数据长度
 */


exports._saveReportData = function (params) {
  var type = params.typeName; //如果没有该上报类型,那么属于未知内容

  if (!this.reportData[type]) {
    type = 'unKownType';
  }

  var reportData = this.reportData[type]; //是否延时上报,如果没有添加到上报数据中

  var maxCache = this._config['max_' + type + '_cache'];
  maxCache = maxCache ? maxCache : this._config['max_cache']; //如果当前存储超过长度 那么弹出最早的数据

  if (reportData.length + 1 > maxCache) {
    var discard = reportData.shift(); //开发模式打印

    if (this.develop && this.develogDiscardLog) {
      discard.develop_title = '[keepObserver] observer ' + type + 'type monitor data overstep cache limit will discard';
      this.$devLog(discard);
    }
  }

  reportData.push(params);
  this.reportData[type] = reportData; //保存到locationStorage中

  tool.setStorage(type, reportData);
};
/*
    删除保存的上报数据
    @params type string    上报类型
*/


exports._removeReportData = function (type) {
  if (this.reportData[type]) {
    this.reportData[type] = [];
    tool.removeStorage(type); //开发模式下打印

    if (this.develop && this.develogDeleteLog) {
      this._$devLog('[keepObserver] observer ' + type + 'type Of monitor data is clean up');
    }
  }
};

/***/ }),

/***/ "./src/services/report/plain/index.ts":
/*!********************************************!*\
  !*** ./src/services/report/plain/index.ts ***!
  \********************************************/
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

var defaultConfig_1 = __importDefault(__webpack_require__(/*! ./defaultConfig */ "./src/services/report/plain/defaultConfig.ts"));

var tool = __importStar(__webpack_require__(/*! ../../../util/tool */ "./src/util/tool.ts"));

var index_1 = __importDefault(__webpack_require__(/*! ../../../share/public/index */ "./src/share/public/index.ts"));

var api_1 = __webpack_require__(/*! ./api */ "./src/services/report/plain/api.ts");

var handle_1 = __webpack_require__(/*! ./handle */ "./src/services/report/plain/handle.ts");

var report_1 = __webpack_require__(/*! ./report */ "./src/services/report/plain/report.ts");

var response_1 = __webpack_require__(/*! ./response */ "./src/services/report/plain/response.ts");

var kpConfigs = {
  reportCustom: false,
  develop: false,
  test: false,
  developGetMsgLog: false,
  develogDiscardLog: false,
  develogDeleteLog: false
}; // report Server 

var KeepObserverReport =
/** @class */
function (_super) {
  __extends(KeepObserverReport, _super); //constructor


  function KeepObserverReport(config) {
    if (config === void 0) {
      config = kpConfigs;
    }

    var _this = _super.call(this, config) || this; //method


    _this.$setCustomeReportData = api_1.$setCustomeReportData.bind(_this);
    _this._getReportContent = handle_1._getReportContent.bind(_this);
    _this._saveReportData = handle_1._saveReportData.bind(_this);
    _this._removeReportData = handle_1._removeReportData.bind(_this);
    _this._handleReport = report_1._handleReport.bind(_this);
    _this._handleResponse = report_1._handleResponse.bind(_this);
    _this._createReportData = report_1._createReportData.bind(_this);
    _this._handleHook = report_1._handleHook.bind(_this);
    _this._handleReportFail = report_1._handleReportFail.bind(_this);
    _this.handleReportDataResponse = response_1.handleReportDataResponse.bind(_this);
    var _a = config,
        reportCustom = _a.reportCustom,
        develop = _a.develop,
        developGetMsgLog = _a.developGetMsgLog,
        develogDiscardLog = _a.develogDiscardLog,
        develogDeleteLog = _a.develogDeleteLog; //存混合配置

    var reportConfig = reportCustom || {}; //是否是开发模式

    reportConfig.develop = develop ? true : false; //开发环境下获取报文是否打印

    reportConfig.developGetMsgLog = developGetMsgLog ? true : false; //开发环境下丢弃数据 是否打印出来

    reportConfig.develogDiscardLog = develogDiscardLog ? true : false; //开发环境下删除出数据 是否打印出来

    reportConfig.develogDeleteLog = develogDeleteLog ? true : false; //混合默认配置

    _this._config = tool.extend(defaultConfig_1["default"], reportConfig); //监听事件
    //上传数据保存

    _this.reportData = {}; //用户自定义上传参数

    _this._customeInfo = false; //项目

    _this._project = _this._config.project || 'unKnow'; //项目版本

    _this._projectVersion = _this._config.projectVersion || 'unknow-version'; //当前是否处于开发模式

    _this.develop = _this._config.develop;
    _this.developGetMsgLog = _this._config.developGetMsgLog;
    _this.develogDeleteLog = _this._config.develogDeleteLog;
    _this.develogDiscardLog = _this._config.develogDiscardLog; //初始化

    _this._init();

    return _this;
  } //初始化上报类参数 复制this.reportData并从strong里面复原数据 


  KeepObserverReport.prototype._init = function () {
    var _self = this; //初始化this.reportData


    var handleType = _self._config.$observer_Type;
    handleType.forEach(function (type) {
      var cacheData = tool.getStorage(type);
      _self.reportData[type] = [];

      if (cacheData) {
        _self.reportData[type] = cacheData;
      }
    });
  };
  /*
      提供一个挂载方法在注入中使用
      return
          $getCustomeReport
   */


  KeepObserverReport.prototype.apply = function (pipe) {
    var _self = this;

    pipe.registerRecivePipeMessage(_self._getReportContent, _self);

    _self.addReportListener(pipe.sendPipeMessage);

    return {
      $setCustomeReportData: this.$setCustomeReportData
    };
  };

  return KeepObserverReport;
}(index_1["default"]);

exports["default"] = KeepObserverReport;

/***/ }),

/***/ "./src/services/report/plain/report.ts":
/*!*********************************************!*\
  !*** ./src/services/report/plain/report.ts ***!
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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tool = __importStar(__webpack_require__(/*! ../../../util/tool */ "./src/util/tool.ts"));

var consoleTools = __importStar(__webpack_require__(/*! ../../../util/console */ "./src/util/console.ts"));

var ajax_1 = __importDefault(__webpack_require__(/*! ./ajax */ "./src/services/report/plain/ajax.ts"));
/*
    处理上报
    params:
    @params  = {
        type:  string                   //类型, observer | performance| anaylse | response
        typeName:  string               //类型名, observer  ->(vue  or log or network)
        location:string                 //捕获位置
        environment:string              //运行环境信息
        data:object                     //捕获数据
        reportTime: int                 //捕获时间搓
    }
    @.control = {
        @ .isReport:boolean                 //是否需要上报 内部reportServer需要使用
        @ .lazy:boolean                     //是否懒上报, （手动trackExtend合并上报,或者trackExtend合并上报）,不立即上报
        @ .trackExtend:boolean              //是否合并之前保存的lazy信息一起上报
        @ .isError:boolean                  //是否是错误信息
        @ .isPerformance:boolean            //是否是性能捕获分析
        @ .preDelete:boolean                //是否删除之前的信息
        @ .ignore:boolean                   //本条数据是否忽略
        @ .isResponse:boolean               //report是否需要响应信息
    }
 */


exports._handleReport = function (params, control) {
  var _self = this; //如果未传入数据类型


  if (!params || !control || !tool.isObject(params) || !tool.isObject(control)) {
    return false;
  } //获得上传数据


  var reportData = _self._createReportData(params, control); //上传到服务器


  var _a = this._config,
      reportUrl = _a.reportUrl,
      onReportFail = _a.onReportFail,
      onReportBeforeSetUrl = _a.onReportBeforeSetUrl,
      onReportBeforeSetHead = _a.onReportBeforeSetHead,
      onReportBeforeHook = _a.onReportBeforeHook,
      onReportResultHook = _a.onReportResultHook; //如果没有设置上传URL 那么停止上传

  if (!reportUrl || !tool.isArray(reportUrl)) {
    _self._handleReportFail(onReportFail, reportData, null);

    return false;
  } //遍历URL上传列表
  //开始依次上传


  reportUrl.map(function (item) {
    var reportConfig = {}; //是否有上传前修改URL回调

    if (onReportBeforeSetUrl) {
      var url = _self._handleHook(onReportBeforeSetUrl, item);
    } else {
      url = item;
    }

    if (!tool.isString(url)) {
      _self._handleReportFail(onReportFail, reportData, null);

      return false;
    }

    reportConfig.url = url; //获取自定义请求头

    var customeHead = onReportBeforeSetHead ? _self._handleHook(onReportBeforeSetHead, item) : false;

    if (customeHead && tool.isObject(customeHead) && !tool.isEmptyObject(customeHead)) {
      reportConfig.customeHead = customeHead;
    } //获取请求


    reportConfig.data = reportData;

    _self._handleHook(onReportBeforeHook, reportData, reportConfig.url, reportConfig.customeHead); //上传到服务器


    try {
      ajax_1["default"](reportConfig).then(function (result) {
        //response data
        _self._handleResponse(params, control, url, result.data); //hook


        _self._handleHook(onReportResultHook, result.data, reportConfig.url, result.head);
      }, function (err) {
        _self._handleReportFail(onReportFail, reportData, reportConfig.url);
      });
    } catch (err) {
      //上传报错
      consoleTools.warnError('report Server Process find error:' + err);
    } //end

  }); // map url end
};
/*
    处理响应
    @params                 //同上
    @control                //同上
    @url                    //request url
    @responseData           //response data
    -------------------------------------------
    ps: control.isResponse 才进行处理
 */


exports._handleResponse = function (params, control, url, responseData) {
  var _self = this; //如果未传入数据类型


  if (!params || !control || !tool.isObject(params) || !tool.isObject(control)) {
    return false;
  }

  if (!control.isResponse || !params.typeName || !url || !responseData) {
    return false;
  } //handle push message quenen


  _self.noticeResponse(params.typeName, responseData, url);
};
/*
    生成上报数据头
    params:
    @params  = {
        type:  string                   //类型,observer or performance
        typeName:  string               //类型名,vue  or log or network
        location:string                 //捕获位置
        environment:string              //运行环境信息
        data:object                     //捕获数据
        reportTime: int //捕获时间搓
    }
    @.control = {
        @ .isReport:boolean                 //是否需要上报 内部reportServer需要使用
        @ .lazy:boolean                     //是否懒上报, （手动trackExtend合并上报,或者trackExtend合并上报）,不立即上报
        @ .trackExtend:boolean              //是否合并之前保存的lazy信息一起上报
        @ .isError:boolean                  //是否是错误信息
        @ .isPerformance:boolean            //是否是性能捕获分析
        @ .preDelete:boolean                //是否删除之前的信息
        @ .ignore:boolean                   //本条数据是否忽略
    }
    *****************************************************
    return
    reportData {
        //以下参数必定存在
        @.type string                       上报的大的类型
        @.reportType string                 上报的具体类型名
        @.project string                    上报项目名
        @.projectVersion string             上报项目版本
        @.reportTime number                 上报时间时间搓
        @.data  object                      上报内容
        @.environment string                上报项目运行环境
        @.location string                   上报的位置
        //一下参数可能存在
        @.customeInfo all                   用户自定义设置上传参数
        @.preTrackData object               合并之前保存的监控数据对象
    }
*/


exports._createReportData = function (params, control) {
  var _self = this;

  var reportData = {}; //添加类型

  reportData.type = params.type;
  reportData.reportType = params.typeName;
  reportData.isMonitorError = params.type === 'monitor' ? true : false;
  reportData.isPerformance = params.type === 'performance' ? true : false;
  reportData.isAnalyse = params.type === 'analyse' ? true : false; //基本信息

  reportData.project = _self._project;
  reportData.projectVersion = _self._projectVersion;
  reportData.reportTime = params.reportTime;
  reportData.deviceID = _self._config.deviceID;
  reportData.location = params.location;
  reportData.environment = params.environment;
  reportData.data = params.data; //处理自定义信息

  if (_self._customeInfo) {
    reportData.customeInfo = tool.extend({}, _self._customeInfo);
  } //处理上报数据是否合并上报


  if (control.trackExtend) {
    reportData.preTrackData = {};

    for (var key in _self.reportData) {
      var value = _self.reportData[key];

      if (tool.isArray(value) && value.length > 0) {
        reportData.preTrackData[key] = tool.extend({}, value); //删除相关数据

        _self._removeReportData(key);
      }
    } //修正数据


    reportData.preTrackData = tool.isEmptyObject(reportData.preTrackData) ? null : reportData.preTrackData;
  } //开发模式下打印上报数据


  if (_self.develop) {
    var log = tool.extend({}, reportData);
    log.develop_title = params.type + " type " + params.typeName + " will report Server,report Data in the data ";

    _self.$devLog(log);
  }

  return reportData;
};
/*
    调用钩子
    @arguments[0] = onHooK
    @arguments[...] = params
    return
        onHook result
 */


exports._handleHook = function () {
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
    consoleTools.warnError(onHook.name + 'callback hook is runing error:' + err);
  }

  return result;
};
/*
    处理上传失败
    params
        onFail      function        	失败的回调 没有则忽略直接跳过
        reportData 	obj or arr          需要上传的数据
        reportUrl 	string     			上传的url地址 (有可能存在)
 */


exports._handleReportFail = function (onFail, reportData, reportUrl) {
  if (!onFail) {
    return false;
  }

  try {
    onFail(reportData, reportUrl);
  } catch (err) {
    consoleTools.warnError('report Server callback hook is runing error:' + err);
  }
};

/***/ }),

/***/ "./src/services/report/plain/response.ts":
/*!***********************************************!*\
  !*** ./src/services/report/plain/response.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); //处理整理数据

exports.handleReportDataResponse = function (type, content, url) {
  var reportParams = {
    type: "response",
    typeName: type,
    data: content,
    location: url,
    environment: window.navigator.userAgent,
    reportTime: new Date().getTime()
  };
  var control = {}; //option

  return {
    reportParams: reportParams,
    control: control
  };
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