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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");
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


    if (params && index_1.tool.isObject(params)) {
      url = handleUrlParams(url, params);
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true); //handle request header flag

    var xhrHead = {
      'Content-Type': 'application/json;charset=UTF-8'
    };

    if (customeHead && index_1.tool.isObject(customeHead)) {
      xhrHead = index_1.tool.extend(xhrHead, customeHead);
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");
/*
        接受自定义上报内容
        model1: arguments[0]  type object
        model2: arguments[0]  type boolean
                will extend preData  arguments[...]=extend data
        合并到this._customeInfo中
     */


exports.$setCustomeReportData = function (params) {
  var _self = this; //判断数据正确性


  var args = index_1.tool.toArray(arguments);

  if (!args || args.length === 0) {
    return false;
  }

  if (!_self._customeInfo) {
    _self._customeInfo = {};
  }

  var params = args[0]; //如果是普通添加

  if (index_1.tool.isObject(params) && !index_1.tool.isEmptyObject(params)) {
    //设置用户自定义上报内容
    _self._customeInfo = index_1.tool.extend(_self._customeInfo, params);
    return false;
  } //如果是修改并覆盖之前的数据


  if (index_1.tool.isBoolean(params) && params && args.length > 1) {
    params = args.slice(1, args.length);
    params.map(function (item) {
      if (index_1.tool.isObject(item) && !index_1.tool.isEmptyObject(item)) {
        _self._customeInfo = index_1.tool.extend(_self._customeInfo, item);
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");
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
  if (!params || !params.type || !params.typeName || !params.data || !index_1.tool.isObject(params.data)) {
    this.$devLog('[keepObserver] reportServer receive reportData is not right');
    return false;
  }

  if (!control) {
    this.$deveWarn('[keepObserver] reportServer receive pipeDate control options is  undefined');
    return false;
  } //是否是开发模式需要打印


  if (this.develop && this.developGetMsgLog) {
    var log = index_1.tool.extend({}, params);
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

  index_1.tool.setStorage(type, reportData);
};
/*
    删除保存的上报数据
    @params type string    上报类型
*/


exports._removeReportData = function (type) {
  if (this.reportData[type]) {
    this.reportData[type] = [];
    index_1.tool.removeStorage(type); //开发模式下打印

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var defaultConfig_1 = __importDefault(__webpack_require__(/*! ./defaultConfig */ "./src/services/report/plain/defaultConfig.ts"));

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

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

    _this._config = index_1.tool.extend(defaultConfig_1["default"], reportConfig); //监听事件
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
      var cacheData = index_1.tool.getStorage(type);
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
}(index_1.KeepObserverPublic);

exports["default"] = KeepObserverReport;

/***/ }),

/***/ "./src/services/report/plain/report.ts":
/*!*********************************************!*\
  !*** ./src/services/report/plain/report.ts ***!
  \*********************************************/
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


  if (!params || !control || !index_1.tool.isObject(params) || !index_1.tool.isObject(control)) {
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

  if (!reportUrl || !index_1.tool.isArray(reportUrl)) {
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

    if (!index_1.tool.isString(url)) {
      _self._handleReportFail(onReportFail, reportData, null);

      return false;
    }

    reportConfig.url = url; //获取自定义请求头

    var customeHead = onReportBeforeSetHead ? _self._handleHook(onReportBeforeSetHead, item) : false;

    if (customeHead && index_1.tool.isObject(customeHead) && !index_1.tool.isEmptyObject(customeHead)) {
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
      index_1.consoleTools.warnError('report Server Process find error:' + err);
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


  if (!params || !control || !index_1.tool.isObject(params) || !index_1.tool.isObject(control)) {
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
    reportData.customeInfo = index_1.tool.extend({}, _self._customeInfo);
  } //处理上报数据是否合并上报


  if (control.trackExtend) {
    reportData.preTrackData = {};

    for (var key in _self.reportData) {
      var value = _self.reportData[key];

      if (index_1.tool.isArray(value) && value.length > 0) {
        reportData.preTrackData[key] = index_1.tool.extend({}, value); //删除相关数据

        _self._removeReportData(key);
      }
    } //修正数据


    reportData.preTrackData = index_1.tool.isEmptyObject(reportData.preTrackData) ? null : reportData.preTrackData;
  } //开发模式下打印上报数据


  if (_self.develop) {
    var log = index_1.tool.extend({}, reportData);
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
  var args = index_1.tool.toArray(arguments);

  if (!args || args.length === 0 || !index_1.tool.isFunction(args[0])) {
    return false;
  }

  var onHook = args[0];
  var params = args.slice(1, args.length);

  try {
    var result = onHook(params);
  } catch (err) {
    //报错
    index_1.consoleTools.warnError(onHook.name + 'callback hook is runing error:' + err);
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
    index_1.consoleTools.warnError('report Server callback hook is runing error:' + err);
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