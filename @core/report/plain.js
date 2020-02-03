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
    var resHead = {}; //judge data

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
exports["default"] = {
  //上报url
  reportUrl: [],
  //是否需要通知响应
  isNoticeResponse: false
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
*/


exports._getReportContent = function (params) {
  var _self = this;

  var develop = _self._config.develop; //判断数据合法性

  if (!params || !params.type || !params.typeName || !params.data) {
    index_1.consoleTools.devLog(develop, '[keepObserver] reportServer receive reportData is not right : typeName and type and data is undefined ');
    return false;
  } //上报


  _self._handleReport(params);
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

var handle_1 = __webpack_require__(/*! ./handle */ "./src/services/report/plain/handle.ts");

var report_1 = __webpack_require__(/*! ./report */ "./src/services/report/plain/report.ts"); // report Server 


var KeepObserverReport =
/** @class */
function (_super) {
  __extends(KeepObserverReport, _super); //constructor


  function KeepObserverReport(config) {
    if (config === void 0) {
      config = {};
    }

    var _this = _super.call(this, config) || this; //method


    _this._getReportContent = handle_1._getReportContent.bind(_this);
    _this._handleReport = report_1._handleReport.bind(_this);
    _this._handleResponse = report_1._handleResponse.bind(_this);
    var _a = config,
        _b = _a.reportCustom,
        reportCustom = _b === void 0 ? false : _b,
        _c = _a.develop,
        develop = _c === void 0 ? false : _c; //存混合配置

    var reportConfig = reportCustom || config; //是否是开发模式

    reportConfig.develop = develop; //混合默认配置

    _this._config = index_1.tool.extend(defaultConfig_1["default"], reportConfig); //重载中间件命名空间

    _this.middleScopeNames = ['reportBefore', 'reportFinish', 'reportFail'];
    return _this;
  }
  /*
      提供一个挂载方法在注入中使用
      return
          $getCustomeReport
   */


  KeepObserverReport.prototype.apply = function (pipe) {
    var _self = this;

    pipe.registerRecivePipeMessage(_self._getReportContent, _self);
    pipe.registerMiddleScopeName(_self.middleScopeNames);

    _self.addReportListener(pipe.sendPipeMessage);

    return {};
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


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

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
 */


exports._handleReport = function (reportData) {
  var _this = this;

  var _self = this;

  var _a = __read(_self.middleScopeNames, 3),
      reportBefore = _a[0],
      reportFinish = _a[1],
      reportFail = _a[2]; //如果未传入数据类型


  if (!reportData || !index_1.tool.isObject(reportData)) {
    return false;
  } //上传到服务器


  var reportUrl = this._config.reportUrl; //如果没有设置上传URL 那么停止上传

  if (!reportUrl || index_1.tool.isEmptyArray(reportUrl)) {
    return false;
  } //遍历URL上传列表开始依次上传


  reportUrl.map(function (item) {
    return __awaiter(_this, void 0, void 0, function () {
      var _a, reportConfig;

      var _this = this;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            reportConfig = {
              url: item,
              data: reportData,
              params: undefined,
              customeHead: undefined
            };
            return [4
            /*yield*/
            , _self.runMiddle(reportBefore, reportConfig) //上传
            ];

          case 1:
            //上传前hook位
            _a = __read.apply(void 0, [_b.sent() //上传
            , 1]), reportConfig = _a[0]; //上传

            try {
              ajax_1["default"](reportConfig).then(function (result) {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , _self.runMiddle(reportFinish, result) //response data
                        ];

                      case 1:
                        //上报结束hook位
                        result = _a.sent(); //response data

                        _self._handleResponse(reportData, item, result);

                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              }, function (err) {
                //上传失败回调hook位
                _self.runMiddle(reportFail, err, reportData);
              });
            } catch (err) {
              //上传报错
              index_1.consoleTools.warnError('report Server Process find error:' + err);
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  }); // map url end
};
/*
    处理响应
    @url                    //request url
    @responseData           //response data
    -------------------------------------------
    ps: control.isResponse 才进行处理
 */


exports._handleResponse = function (params, url, response) {
  var _self = this;

  var isNoticeResponse = _self._config.isNoticeResponse; //如果未传入数据类型

  if (!params || !index_1.tool.isObject(params)) {
    return false;
  }

  if (!params.typeName || !url || !response) {
    return false;
  }

  if (!isNoticeResponse) {
    return false;
  } //handle push message quenen


  _self.noticeReport({
    type: "report",
    typeName: 'response',
    data: {
      params: params,
      response: response,
      url: url
    }
  });
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