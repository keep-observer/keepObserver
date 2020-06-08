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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else { var i, a; }
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/util/index.ts");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./node_modules/fast-safe-stringify/index.js":
      /*!***************************************************!*\
        !*** ./node_modules/fast-safe-stringify/index.js ***!
        \***************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = stringify;
        stringify.default = stringify;
        stringify.stable = deterministicStringify;
        stringify.stableStringify = deterministicStringify;
        var arr = [];
        var replacerStack = []; // Regular stringify

        function stringify(obj, replacer, spacer) {
          decirc(obj, '', [], undefined);
          var res;

          if (replacerStack.length === 0) {
            res = JSON.stringify(obj, replacer, spacer);
          } else {
            res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
          }

          while (arr.length !== 0) {
            var part = arr.pop();

            if (part.length === 4) {
              Object.defineProperty(part[0], part[1], part[3]);
            } else {
              part[0][part[1]] = part[2];
            }
          }

          return res;
        }

        function decirc(val, k, stack, parent) {
          var i;

          if (typeof val === 'object' && val !== null) {
            for (i = 0; i < stack.length; i++) {
              if (stack[i] === val) {
                var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);

                if (propertyDescriptor.get !== undefined) {
                  if (propertyDescriptor.configurable) {
                    Object.defineProperty(parent, k, {
                      value: '[Circular]'
                    });
                    arr.push([parent, k, val, propertyDescriptor]);
                  } else {
                    replacerStack.push([val, k]);
                  }
                } else {
                  parent[k] = '[Circular]';
                  arr.push([parent, k, val]);
                }

                return;
              }
            }

            stack.push(val); // Optimize for Arrays. Big arrays could kill the performance otherwise!

            if (Array.isArray(val)) {
              for (i = 0; i < val.length; i++) {
                decirc(val[i], i, stack, val);
              }
            } else {
              var keys = Object.keys(val);

              for (i = 0; i < keys.length; i++) {
                var key = keys[i];
                decirc(val[key], key, stack, val);
              }
            }

            stack.pop();
          }
        } // Stable-stringify


        function compareFunction(a, b) {
          if (a < b) {
            return -1;
          }

          if (a > b) {
            return 1;
          }

          return 0;
        }

        function deterministicStringify(obj, replacer, spacer) {
          var tmp = deterministicDecirc(obj, '', [], undefined) || obj;
          var res;

          if (replacerStack.length === 0) {
            res = JSON.stringify(tmp, replacer, spacer);
          } else {
            res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
          }

          while (arr.length !== 0) {
            var part = arr.pop();

            if (part.length === 4) {
              Object.defineProperty(part[0], part[1], part[3]);
            } else {
              part[0][part[1]] = part[2];
            }
          }

          return res;
        }

        function deterministicDecirc(val, k, stack, parent) {
          var i;

          if (typeof val === 'object' && val !== null) {
            for (i = 0; i < stack.length; i++) {
              if (stack[i] === val) {
                var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);

                if (propertyDescriptor.get !== undefined) {
                  if (propertyDescriptor.configurable) {
                    Object.defineProperty(parent, k, {
                      value: '[Circular]'
                    });
                    arr.push([parent, k, val, propertyDescriptor]);
                  } else {
                    replacerStack.push([val, k]);
                  }
                } else {
                  parent[k] = '[Circular]';
                  arr.push([parent, k, val]);
                }

                return;
              }
            }

            if (typeof val.toJSON === 'function') {
              return;
            }

            stack.push(val); // Optimize for Arrays. Big arrays could kill the performance otherwise!

            if (Array.isArray(val)) {
              for (i = 0; i < val.length; i++) {
                deterministicDecirc(val[i], i, stack, val);
              }
            } else {
              // Create a temporary object in the required way
              var tmp = {};
              var keys = Object.keys(val).sort(compareFunction);

              for (i = 0; i < keys.length; i++) {
                var key = keys[i];
                deterministicDecirc(val[key], key, stack, val);
                tmp[key] = val[key];
              }

              if (parent !== undefined) {
                arr.push([parent, k, val]);
                parent[k] = tmp;
              } else {
                return tmp;
              }
            }

            stack.pop();
          }
        } // wraps replacer function to handle values we couldn't replace
        // and mark them as [Circular]


        function replaceGetterValues(replacer) {
          replacer = replacer !== undefined ? replacer : function (k, v) {
            return v;
          };
          return function (key, val) {
            if (replacerStack.length > 0) {
              for (var i = 0; i < replacerStack.length; i++) {
                var part = replacerStack[i];

                if (part[1] === key && part[0] === val) {
                  val = '[Circular]';
                  replacerStack.splice(i, 1);
                  break;
                }
              }
            }

            return replacer.call(this, key, val);
          };
        }
        /***/

      },

      /***/
      "./node_modules/hash-string/build/hash-string.js":
      /*!*******************************************************!*\
        !*** ./node_modules/hash-string/build/hash-string.js ***!
        \*******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

        (function (root, factory) {
          if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {}
        })(this, function () {
          /**
              A string hashing function based on Daniel J. Bernstein's popular 'times 33' hash algorithm.
              @param {string} text - String to hash
              @return {number} Resulting number.
          */
          function hash(text) {
            'use strict';

            var hash = 5381,
                index = text.length;

            while (index) {
              hash = hash * 33 ^ text.charCodeAt(--index);
            }

            return hash >>> 0;
          }

          return hash;
        });
        /***/

      },

      /***/
      "./src/constants/index.ts":
      /*!********************************!*\
        !*** ./src/constants/index.ts ***!
        \********************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        }); //上报数据类型

        exports.reportType = ['unKownType', 'log', 'network', 'vue']; //版本号

        exports.version = '2.0.0-alpha.5'; //公共中间件

        exports.publicMiddleScopeNames = ['sendMessage', 'error'];
        /***/
      },

      /***/
      "./src/util/console.ts":
      /*!*****************************!*\
        !*** ./src/util/console.ts ***!
        \*****************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var __read = this && this.__read || function (o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
              r,
              ar = [],
              e;

          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
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
          for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

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

        exports.warnError = function () {
          var msg = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
          }

          return exports.error.apply(void 0, __spread(["[keepObserver] find error! message:"], msg));
        };
        /***/

      },

      /***/
      "./src/util/deviceID.ts":
      /*!******************************!*\
        !*** ./src/util/deviceID.ts ***!
        \******************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var __importStar = this && this.__importStar || function (mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
          result["default"] = mod;
          return result;
        };

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var Tools = __importStar(__webpack_require__(
        /*! ./tool */
        "./src/util/tool.ts")); //storge-key


        var RecordKey = 'deviceId';

        var getDeviceId = function () {
          return storageModel();
        }; //localStorage model


        var storageModel = function () {
          if (!window.localStorage) {
            return false;
          }

          var deviceID = Tools.getStorage(RecordKey);

          if (!deviceID) {
            deviceID = Tools.getUniqueID();
            Tools.setStorage(RecordKey, deviceID);
          }

          return deviceID;
        }; //iframe model
        //暂未开启 需要先写好iframe页面
        //这里还有个问题 iframe是异步获取deviceID 现在的流程放在instance初始化阶段, 异步获取会影响接下来一些流程
        //暂不启用, 放在第二次重构升级在启用


        var iframeModel = function () {};

        exports.default = getDeviceId;
        /***/
      },

      /***/
      "./src/util/index.ts":
      /*!***************************!*\
        !*** ./src/util/index.ts ***!
        \***************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var __importStar = this && this.__importStar || function (mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
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

        var Tools = __importStar(__webpack_require__(
        /*! ./tool */
        "./src/util/tool.ts"));

        exports.Tools = Tools;

        var consoleTools = __importStar(__webpack_require__(
        /*! ./console */
        "./src/util/console.ts"));

        exports.consoleTools = consoleTools;

        var deviceID_1 = __importDefault(__webpack_require__(
        /*! ./deviceID */
        "./src/util/deviceID.ts"));

        exports.getDeviceId = deviceID_1.default;

        var public_1 = __importDefault(__webpack_require__(
        /*! ./share/public */
        "./src/util/share/public/index.ts"));

        exports.KeepObserverPublic = public_1.default;

        var middleware_1 = __importDefault(__webpack_require__(
        /*! ./share/middleware */
        "./src/util/share/middleware/index.ts"));

        exports.KeepObserverMiddleWare = middleware_1.default;
        /***/
      },

      /***/
      "./src/util/share/middleware/index.ts":
      /*!********************************************!*\
        !*** ./src/util/share/middleware/index.ts ***!
        \********************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var __read = this && this.__read || function (o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
              r,
              ar = [],
              e;

          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
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
          for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

          return ar;
        };

        var __importStar = this && this.__importStar || function (mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
          result["default"] = mod;
          return result;
        };

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var Tools = __importStar(__webpack_require__(
        /*! ../../../util/tool */
        "./src/util/tool.ts"));

        var consoleTools = __importStar(__webpack_require__(
        /*! ../../../util/console */
        "./src/util/console.ts"));

        var index_1 = __webpack_require__(
        /*! ../../../constants/index */
        "./src/constants/index.ts");

        var KeepObserverMiddleWare =
        /** @class */
        function () {
          function KeepObserverMiddleWare(_a) {
            var _b = _a.develop,
                develop = _b === void 0 ? false : _b,
                _c = _a.runMiddleTimeOut,
                runMiddleTimeOut = _c === void 0 ? 30000 : _c; //当前是否处于开发模式

            this._develop = develop; //中间件超时时间

            this._runMiddleTimeOut = runMiddleTimeOut; //中间件初始化

            this._middles = {}; //中间件执行过程中 禁止重复触发 loop

            this._runMiddleBuff = {};
          }

          KeepObserverMiddleWare.usePublishMiddles = function (scopeName, middlesFn) {
            var _staticSelf = this;

            if (_staticSelf.publicMiddles[scopeName]) {
              _staticSelf.publicMiddles[scopeName].unshift(middlesFn);

              return _staticSelf.publicMiddles;
            }

            _staticSelf.publicMiddles[scopeName] = [];

            _staticSelf.publicMiddles[scopeName].unshift(middlesFn);

            return _staticSelf.publicMiddles;
          }; //unshift 从前向后执行 第一个加入的中间件最后一个执行


          KeepObserverMiddleWare.prototype.use = function (scopeName, middlesFn) {
            var _self = this;

            if (_self._middles[scopeName]) {
              return _self._middles[scopeName].unshift(middlesFn);
            }

            _self._middles[scopeName] = [];
            return _self._middles[scopeName].unshift(middlesFn);
          }; //中间件异步执行


          KeepObserverMiddleWare.prototype.run = function (scopeName) {
            var _this = this;

            var args = [];

            for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
            }

            var _self = this; //获取到公共中间件聚合


            var publicMiddles = this.constructor.publicMiddles;

            if (!_self._middles[scopeName] && !publicMiddles[scopeName]) {
              if (index_1.publicMiddleScopeNames.indexOf(scopeName) > -1) {
                return new Promise(function (resolve) {
                  return resolve.apply(void 0, __spread(args));
                });
              }

              consoleTools.warnError(scopeName + " middles function is undefined");
              return Promise.reject(scopeName + " middles function is undefined");
            }

            if (_self._runMiddleBuff[scopeName]) {
              _self._develop && consoleTools.warnError(scopeName + " middles is run");
              return Promise.reject(scopeName + " middles is run");
            } //合并中间件队列


            var publicMiddleQueue = publicMiddles[scopeName] || [];
            var middlesQueue = publicMiddleQueue.concat(_self._middles[scopeName] || []);
            var len = middlesQueue.length;
            var index = 1; //开始执行

            _self._runMiddleBuff[scopeName] = true;
            this.constructor.currentRunMiddle = scopeName;
            return new Promise(function (resolve, reject) {
              //设置超时
              var runTimeout = setTimeout(function () {
                index = len;
                _self._runMiddleBuff[scopeName] = false;
                var errorMsg = scopeName + " middles exec is timeout " + _this._runMiddleTimeOut + "ms";
                consoleTools.warnError(errorMsg);

                if (scopeName !== 'error') {
                  _self.throwError(errorMsg);
                }

                reject(errorMsg);
              }, _this._runMiddleTimeOut); // 中断方法，停止执行剩下的中间件,直接返回

              var interrupt = function () {
                var result = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  result[_i] = arguments[_i];
                }

                index = len;
                clearTimeout(runTimeout);
                _self._runMiddleBuff[scopeName] = false;
                return resolve.apply(void 0, __spread(result));
              };

              try {
                //向下执行中间件
                var runNext_1 = function (next) {
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

                    return a(interrupt, runNext_1(b.apply(void 0, __spread(params))));
                  };
                });
                exec(interrupt, interrupt).apply(void 0, __spread(args));
              } catch (err) {
                _self._runMiddleBuff[scopeName] = false;
                clearTimeout(runTimeout);
                var errorMsg = scopeName + " middles exec is error:" + Tools.toString(err);
                consoleTools.warnError(errorMsg);

                if (scopeName !== 'error') {
                  _self.throwError(errorMsg);
                }

                reject(errorMsg);
              }
            }).finally(function () {
              _this.constructor.currentRunMiddle = false;
            });
          }; //抛出中间件错误


          KeepObserverMiddleWare.prototype.throwError = function () {
            var err = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              err[_i] = arguments[_i];
            } //catch resolve Uncaught (in promise) error


            this.run.apply(this, __spread(['error'], err)).catch(function (e) {});
          };

          ; //公共方法和部分

          KeepObserverMiddleWare.publicMiddles = {};
          KeepObserverMiddleWare.currentRunMiddle = false;
          return KeepObserverMiddleWare;
        }();

        exports.default = KeepObserverMiddleWare;
        /***/
      },

      /***/
      "./src/util/share/public/index.ts":
      /*!****************************************!*\
        !*** ./src/util/share/public/index.ts ***!
        \****************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var __assign = this && this.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }

            return t;
          };

          return __assign.apply(this, arguments);
        };

        var __read = this && this.__read || function (o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
              r,
              ar = [],
              e;

          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
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
          for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

          return ar;
        };

        var __importDefault = this && this.__importDefault || function (mod) {
          return mod && mod.__esModule ? mod : {
            "default": mod
          };
        };

        var __importStar = this && this.__importStar || function (mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
          result["default"] = mod;
          return result;
        };

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var index_1 = __webpack_require__(
        /*! ../../../constants/index */
        "./src/constants/index.ts");

        var index_2 = __importDefault(__webpack_require__(
        /*! ../middleware/index */
        "./src/util/share/middleware/index.ts"));

        var Tools = __importStar(__webpack_require__(
        /*! ../../tool */
        "./src/util/tool.ts"));

        var KeepObserverPublic =
        /** @class */
        function () {
          function KeepObserverPublic(config) {
            if (config === void 0) {
              config = {};
            }

            var _a = config,
                _b = _a.develop,
                develop = _b === void 0 ? false : _b,
                _c = _a.runMiddleTimeOut,
                runMiddleTimeOut = _c === void 0 ? 30000 : _c; //当前是否处于开发模式

            this._develop = develop; //由子元素继承并重载

            this.middleScopeNames = []; //由子元素继承

            this._publicMiddleScopeNames = index_1.publicMiddleScopeNames; //注册中间件实例

            this._middleWareInstance = new index_2.default(Tools.extend({
              develop: develop,
              runMiddleTimeOut: runMiddleTimeOut
            }, config));
          }

          KeepObserverPublic.extendReport = function (params) {
            var newParams = __assign({}, this.extendReportParams, params);

            this.extendReportParams = newParams;
            return newParams;
          }; //注册中间件逻辑


          KeepObserverPublic.prototype.useMiddle = function (scopeName, middlesFn) {
            var _self = this;

            _self._middleWareInstance.use(scopeName, middlesFn);

            return _self;
          }; //执行中间件逻辑


          KeepObserverPublic.prototype.runMiddle = function (scopeName) {
            var args = [];

            for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
            }

            var _a;

            var _self = this; //use catch resolve Uncaught (in promise) error


            return (_a = _self._middleWareInstance).run.apply(_a, __spread([scopeName], args)).catch(function (e) {});
          }; //整理上报数据


          KeepObserverPublic.prototype.handleReportData = function (params) {
            var defaultParams = {
              data: undefined,
              type: 'undefined',
              typeName: 'undefined'
            }; //获取到公共中间件聚合

            var extendParams = this.constructor.extendReportParams;

            var reportParams = __assign({}, defaultParams, {
              location: window.location.href,
              environment: window.navigator.userAgent,
              reportTime: new Date().getTime()
            }, params, extendParams);

            return reportParams;
          };

          KeepObserverPublic.extendReportParams = {};
          return KeepObserverPublic;
        }();

        exports.default = KeepObserverPublic;
        /***/
      },

      /***/
      "./src/util/tool.ts":
      /*!**************************!*\
        !*** ./src/util/tool.ts ***!
        \**************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var __importDefault = this && this.__importDefault || function (mod) {
          return mod && mod.__esModule ? mod : {
            "default": mod
          };
        };

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var console_1 = __webpack_require__(
        /*! ./console */
        "./src/util/console.ts");

        var hash_string_1 = __importDefault(__webpack_require__(
        /*! hash-string */
        "./node_modules/hash-string/build/hash-string.js"));

        var fast_safe_stringify_1 = __importDefault(__webpack_require__(
        /*! fast-safe-stringify */
        "./node_modules/fast-safe-stringify/index.js"));
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
          return typeof HTMLElement === 'object' ? value instanceof HTMLElement : //DOM2
          value && typeof value === "object" && value !== null && value.nodeType === 1 && typeof value.nodeName === "string";
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

          if (!obj || typeof obj !== 'object' || obj.nodeType || isWindow(obj)) {
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
          if (Array.from) {
            return Array.from(array);
          }

          return Array.prototype.slice.call(array);
        }

        exports.toArray = toArray;

        function toString(content) {
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
        /**
         * @map:
         * @param obj { array and object}
         * @param call { array.filter(callback)}
         * @return: new Array
         */

        function mapToArray(obj, callback) {
          if (!isArray(obj) && !isObject(obj) || !isFunction(callback)) {
            return obj;
          }

          if (isArray(obj)) {
            return obj.map(callback);
          }

          var newArray = [];

          for (var key in obj) {
            var value = obj[key];
            newArray.push(callback(value, key));
          }

          return newArray;
        }

        exports.mapToArray = mapToArray;

        function throttleWrap(delay) {
          return function (Fn) {
            var timeout = null;
            return function () {
              var arg = arguments;

              if (timeout) {
                clearTimeout(timeout);
              }

              ;
              timeout = setTimeout(function () {
                Fn(arg);
              }, delay);
            };
          };
        }

        exports.throttleWrap = throttleWrap;

        function debounceWrap(delay) {
          return function (Fn) {
            var timeout = null;
            return function () {
              var any = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                any[_i] = arguments[_i];
              }

              var arg = arguments;

              if (timeout !== null) {
                return false;
              }

              ;
              timeout = setTimeout(function () {
                Fn(arg);
                clearTimeout(timeout);
                timeout = null;
              }, delay);
            };
          };
        }

        exports.debounceWrap = debounceWrap;

        function objectStringify(object) {
          return fast_safe_stringify_1.default(object, function (key, value) {
            if (isWindow(value)) {
              return '[Window]';
            }

            if (isElement(value)) {
              return '[DomElement]';
            }

            return value;
          });
        }

        exports.objectStringify = objectStringify;

        function getHashCode(object) {
          //Times33
          try {
            var hashCode = hash_string_1.default(objectStringify(object)); //md5(objectStringify(object))

            return toString(hashCode);
          } catch (err) {
            return toString(hash_string_1.default(toString(err))); //md5(toString(err))
          }
        }

        exports.getHashCode = getHashCode;

        function substringLimt(text, limt, flag) {
          if (limt === void 0) {
            limt = 200;
          }

          if (flag === void 0) {
            flag = true;
          }

          text = isString(text) ? text : toString(text);
          return text.substring(0, text.length > limt ? limt : text.length) + (text.length > limt && flag ? '...' : '');
        }

        exports.substringLimt = substringLimt;
        /***/
      }
      /******/

    })
  );
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(0));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i, a; }
})(this, function (__WEBPACK_EXTERNAL_MODULE__util_index__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/services/report/kibanaApm/index.ts");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./node_modules/elastic-apm-js-core/node_modules/error-stack-parser/error-stack-parser.js":
      /*!************************************************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/node_modules/error-stack-parser/error-stack-parser.js ***!
        \************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreNode_modulesErrorStackParserErrorStackParserJs(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

        (function (root, factory) {
          'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

          /* istanbul ignore next */

          if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
            /*! stackframe */
            "./node_modules/elastic-apm-js-core/node_modules/stackframe/stackframe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {}
        })(this, function ErrorStackParser(StackFrame) {
          'use strict';

          var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
          var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
          var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;

          function _map(array, fn, thisArg) {
            if (typeof Array.prototype.map === 'function') {
              return array.map(fn, thisArg);
            } else {
              var output = new Array(array.length);

              for (var i = 0; i < array.length; i++) {
                output[i] = fn.call(thisArg, array[i]);
              }

              return output;
            }
          }

          function _filter(array, fn, thisArg) {
            if (typeof Array.prototype.filter === 'function') {
              return array.filter(fn, thisArg);
            } else {
              var output = [];

              for (var i = 0; i < array.length; i++) {
                if (fn.call(thisArg, array[i])) {
                  output.push(array[i]);
                }
              }

              return output;
            }
          }

          function _indexOf(array, target) {
            if (typeof Array.prototype.indexOf === 'function') {
              return array.indexOf(target);
            } else {
              for (var i = 0; i < array.length; i++) {
                if (array[i] === target) {
                  return i;
                }
              }

              return -1;
            }
          }

          return {
            /**
             * Given an Error object, extract the most information from it.
             *
             * @param {Error} error object
             * @return {Array} of StackFrames
             */
            parse: function ErrorStackParser$$parse(error) {
              if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
                return this.parseOpera(error);
              } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
                return this.parseV8OrIE(error);
              } else if (error.stack) {
                return this.parseFFOrSafari(error);
              } else {
                throw new Error('Cannot parse given Error object');
              }
            },
            // Separate line and column numbers from a string of the form: (URI:Line:Column)
            extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
              // Fail-fast but return locations like "(native)"
              if (urlLike.indexOf(':') === -1) {
                return [urlLike];
              }

              var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
              var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
              return [parts[1], parts[2] || undefined, parts[3] || undefined];
            },
            parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
              var filtered = _filter(error.stack.split('\n'), function (line) {
                return !!line.match(CHROME_IE_STACK_REGEXP);
              }, this);

              return _map(filtered, function (line) {
                if (line.indexOf('(eval ') > -1) {
                  // Throw away eval information until we implement stacktrace.js/stackframe#8
                  line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
                }

                var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
                var locationParts = this.extractLocation(tokens.pop());
                var functionName = tokens.join(' ') || undefined;
                var fileName = _indexOf(['eval', '<anonymous>'], locationParts[0]) > -1 ? undefined : locationParts[0];
                return new StackFrame(functionName, undefined, fileName, locationParts[1], locationParts[2], line);
              }, this);
            },
            parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
              var filtered = _filter(error.stack.split('\n'), function (line) {
                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
              }, this);

              return _map(filtered, function (line) {
                // Throw away eval information until we implement stacktrace.js/stackframe#8
                if (line.indexOf(' > eval') > -1) {
                  line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
                }

                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
                  // Safari eval frames only have function names and nothing else
                  return new StackFrame(line);
                } else {
                  var tokens = line.split('@');
                  var locationParts = this.extractLocation(tokens.pop());
                  var functionName = tokens.join('@') || undefined;
                  return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
                }
              }, this);
            },
            parseOpera: function ErrorStackParser$$parseOpera(e) {
              if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
                return this.parseOpera9(e);
              } else if (!e.stack) {
                return this.parseOpera10(e);
              } else {
                return this.parseOpera11(e);
              }
            },
            parseOpera9: function ErrorStackParser$$parseOpera9(e) {
              var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
              var lines = e.message.split('\n');
              var result = [];

              for (var i = 2, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);

                if (match) {
                  result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
                }
              }

              return result;
            },
            parseOpera10: function ErrorStackParser$$parseOpera10(e) {
              var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
              var lines = e.stacktrace.split('\n');
              var result = [];

              for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);

                if (match) {
                  result.push(new StackFrame(match[3] || undefined, undefined, match[2], match[1], undefined, lines[i]));
                }
              }

              return result;
            },
            // Opera 10.65+ Error.stack very similar to FF/Safari
            parseOpera11: function ErrorStackParser$$parseOpera11(error) {
              var filtered = _filter(error.stack.split('\n'), function (line) {
                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
              }, this);

              return _map(filtered, function (line) {
                var tokens = line.split('@');
                var locationParts = this.extractLocation(tokens.pop());
                var functionCall = tokens.shift() || '';
                var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^\)]*\)/g, '') || undefined;
                var argsRaw;

                if (functionCall.match(/\(([^\)]*)\)/)) {
                  argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
                }

                var args = argsRaw === undefined || argsRaw === '[arguments not available]' ? undefined : argsRaw.split(',');
                return new StackFrame(functionName, args, locationParts[0], locationParts[1], locationParts[2], line);
              }, this);
            }
          };
        });
        /***/

      },

      /***/
      "./node_modules/elastic-apm-js-core/node_modules/stackframe/stackframe.js":
      /*!********************************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/node_modules/stackframe/stackframe.js ***!
        \********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreNode_modulesStackframeStackframeJs(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

        (function (root, factory) {
          'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

          /* istanbul ignore next */

          if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {}
        })(this, function () {
          'use strict';

          function _isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
          }

          function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
            if (functionName !== undefined) {
              this.setFunctionName(functionName);
            }

            if (args !== undefined) {
              this.setArgs(args);
            }

            if (fileName !== undefined) {
              this.setFileName(fileName);
            }

            if (lineNumber !== undefined) {
              this.setLineNumber(lineNumber);
            }

            if (columnNumber !== undefined) {
              this.setColumnNumber(columnNumber);
            }

            if (source !== undefined) {
              this.setSource(source);
            }
          }

          StackFrame.prototype = {
            getFunctionName: function getFunctionName() {
              return this.functionName;
            },
            setFunctionName: function setFunctionName(v) {
              this.functionName = String(v);
            },
            getArgs: function getArgs() {
              return this.args;
            },
            setArgs: function setArgs(v) {
              if (Object.prototype.toString.call(v) !== '[object Array]') {
                throw new TypeError('Args must be an Array');
              }

              this.args = v;
            },
            // NOTE: Property name may be misleading as it includes the path,
            // but it somewhat mirrors V8's JavaScriptStackTraceApi
            // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
            // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
            getFileName: function getFileName() {
              return this.fileName;
            },
            setFileName: function setFileName(v) {
              this.fileName = String(v);
            },
            getLineNumber: function getLineNumber() {
              return this.lineNumber;
            },
            setLineNumber: function setLineNumber(v) {
              if (!_isNumber(v)) {
                throw new TypeError('Line Number must be a Number');
              }

              this.lineNumber = Number(v);
            },
            getColumnNumber: function getColumnNumber() {
              return this.columnNumber;
            },
            setColumnNumber: function setColumnNumber(v) {
              if (!_isNumber(v)) {
                throw new TypeError('Column Number must be a Number');
              }

              this.columnNumber = Number(v);
            },
            getSource: function getSource() {
              return this.source;
            },
            setSource: function setSource(v) {
              this.source = String(v);
            },
            toString: function toString() {
              var functionName = this.getFunctionName() || '{anonymous}';
              var args = '(' + (this.getArgs() || []).join(',') + ')';
              var fileName = this.getFileName() ? '@' + this.getFileName() : '';
              var lineNumber = _isNumber(this.getLineNumber()) ? ':' + this.getLineNumber() : '';
              var columnNumber = _isNumber(this.getColumnNumber()) ? ':' + this.getColumnNumber() : '';
              return functionName + args + fileName + lineNumber + columnNumber;
            }
          };
          return StackFrame;
        });
        /***/

      },

      /***/
      "./node_modules/elastic-apm-js-core/src/common/apm-server.js":
      /*!*******************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/common/apm-server.js ***!
        \*******************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcCommonApmServerJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var Queue = __webpack_require__(
        /*! ./queue */
        "./node_modules/elastic-apm-js-core/src/common/queue.js");

        var throttle = __webpack_require__(
        /*! ./throttle */
        "./node_modules/elastic-apm-js-core/src/common/throttle.js");

        var utils = __webpack_require__(
        /*! ./utils */
        "./node_modules/elastic-apm-js-core/src/common/utils.js");

        var NDJSON = __webpack_require__(
        /*! ./ndjson */
        "./node_modules/elastic-apm-js-core/src/common/ndjson.js");

        var xhrIgnore = __webpack_require__(
        /*! ./patching/patch-utils */
        "./node_modules/elastic-apm-js-core/src/common/patching/patch-utils.js").XHR_IGNORE;

        var ApmServer =
        /*#__PURE__*/
        function () {
          function ApmServer(configService, loggingService) {
            _classCallCheck(this, ApmServer);

            this._configService = configService;
            this._loggingService = loggingService;
            this.logMessages = {
              invalidConfig: {
                message: 'Configuration is invalid!',
                level: 'warn'
              }
            };
            this.errorQueue = undefined;
            this.transactionQueue = undefined;
            this.throttleAddError = undefined;
            this.throttleAddTransaction = undefined;
            this.initialized = false;
            this.ndjsonSpan = {};
          }

          _createClass(ApmServer, [{
            key: "init",
            value: function init() {
              if (this.initialized) {
                return;
              }

              this.initialized = true;
              this.initErrorQueue();
              this.initTransactionQueue();
            }
          }, {
            key: "createServiceObject",
            value: function createServiceObject() {
              var cfg = this._configService;
              var stringLimit = cfg.get('serverStringLimit');
              var serviceObject = {
                name: utils.sanitizeString(cfg.get('serviceName'), stringLimit, true),
                version: utils.sanitizeString(cfg.get('serviceVersion'), stringLimit, false),
                agent: {
                  name: cfg.get('agentName'),
                  version: cfg.get('agentVersion')
                },
                language: {
                  name: 'javascript'
                }
              };
              return serviceObject;
            }
          }, {
            key: "_postJson",
            value: function _postJson(endPoint, payload) {
              return this._makeHttpRequest('POST', endPoint, payload, {
                'Content-Type': 'application/x-ndjson'
              });
            }
          }, {
            key: "_makeHttpRequest",
            value: function _makeHttpRequest(method, url, payload, headers) {
              return new Promise(function (resolve, reject) {
                var xhr = new window.XMLHttpRequest();
                xhr[xhrIgnore] = true;
                xhr.open(method, url, true);
                xhr.timeout = 10000;

                if (headers) {
                  for (var header in headers) {
                    if (headers.hasOwnProperty(header)) {
                      xhr.setRequestHeader(header, headers[header]);
                    }
                  }
                }

                xhr.onreadystatechange = function () {
                  if (xhr.readyState === 4) {
                    var status = xhr.status;

                    if (status === 0 || status > 399 && status < 600) {
                      // An http 4xx or 5xx error. Signal an error.
                      var err = new Error(url + ' HTTP status: ' + status);
                      err.xhr = xhr;
                      reject(err);
                    } else {
                      resolve(xhr.responseText);
                    }
                  }
                };

                xhr.onerror = function (err) {
                  reject(err);
                };

                xhr.send(payload);
              });
            }
          }, {
            key: "_createQueue",
            value: function _createQueue(onFlush) {
              var queueLimit = this._configService.get('queueLimit');

              var flushInterval = this._configService.get('flushInterval');

              return new Queue(onFlush, {
                queueLimit: queueLimit,
                flushInterval: flushInterval
              });
            }
          }, {
            key: "initErrorQueue",
            value: function initErrorQueue() {
              var apmServer = this;

              if (this.errorQueue) {
                this.errorQueue.flush();
              }

              this.errorQueue = this._createQueue(function (errors) {
                var p = apmServer.sendErrors(errors);

                if (p) {
                  p.then(undefined, function (reason) {
                    apmServer._loggingService.warn('Failed sending errors!', reason);
                  });
                }
              });

              var limit = apmServer._configService.get('errorThrottleLimit');

              var interval = apmServer._configService.get('errorThrottleInterval');

              this.throttleAddError = throttle(this.errorQueue.add.bind(this.errorQueue), function () {
                apmServer._loggingService.warn('Dropped error due to throttling!');
              }, {
                limit: limit,
                interval: interval
              });
            }
          }, {
            key: "initTransactionQueue",
            value: function initTransactionQueue() {
              var apmServer = this;

              if (this.transactionQueue) {
                this.transactionQueue.flush();
              }

              this.transactionQueue = this._createQueue(function (transactions) {
                var p = apmServer.sendTransactions(transactions);

                if (p) {
                  p.then(undefined, function (reason) {
                    apmServer._loggingService.warn('Failed sending transactions!', reason);
                  });
                }
              });

              var limit = apmServer._configService.get('transactionThrottleLimit');

              var interval = apmServer._configService.get('transactionThrottleInterval');

              this.throttleAddTransaction = throttle(this.transactionQueue.add.bind(this.transactionQueue), function () {
                apmServer._loggingService.warn('Dropped transaction due to throttling!');
              }, {
                limit: limit,
                interval: interval
              });
            }
          }, {
            key: "addError",
            value: function addError(error) {
              if (this._configService.isActive()) {
                if (!this.errorQueue) {
                  this.initErrorQueue();
                }

                this.throttleAddError(error);
              }
            }
          }, {
            key: "addTransaction",
            value: function addTransaction(transaction) {
              if (this._configService.isActive()) {
                if (!this.transactionQueue) {
                  this.initTransactionQueue();
                }

                this.throttleAddTransaction(transaction);
              }
            }
          }, {
            key: "warnOnce",
            value: function warnOnce(logObject) {
              if (logObject.level === 'warn') {
                logObject.level = 'debug';

                this._loggingService.warn(logObject.message);
              } else {
                this._loggingService.debug(logObject.message);
              }
            }
          }, {
            key: "ndjsonErrors",
            value: function ndjsonErrors(errors) {
              return errors.map(function (error) {
                return NDJSON.stringify({
                  error: error
                });
              });
            }
          }, {
            key: "sendErrors",
            value: function sendErrors(errors) {
              if (this._configService.isValid() && this._configService.isActive()) {
                if (errors && errors.length > 0) {
                  var payload = {
                    service: this.createServiceObject(),
                    errors: errors
                  };
                  payload = this._configService.applyFilters(payload);

                  if (payload) {
                    var endPoint = this._configService.getEndpointUrl('errors');

                    var ndjson = this.ndjsonErrors(payload.errors);
                    ndjson.unshift(NDJSON.stringify({
                      metadata: {
                        service: payload.service
                      }
                    }));
                    var ndjsonPayload = ndjson.join('');
                    return this._postJson(endPoint, ndjsonPayload);
                  } else {
                    this._loggingService.warn('Dropped payload due to filtering!');
                  }
                }
              } else {
                this.warnOnce(this.logMessages.invalidConfig);
              }
            }
          }, {
            key: "ndjsonTransactions",
            value: function ndjsonTransactions(transactions) {
              var ndjsonSpan = this.ndjsonSpan;
              return transactions.map(function (tr) {
                var spans = '';

                if (tr.spans) {
                  spans = tr.spans.map(function (sp) {
                    ndjsonSpan.span = sp;
                    return NDJSON.stringify(ndjsonSpan);
                  }).join('');
                  delete tr.spans;
                }

                return NDJSON.stringify({
                  transaction: tr
                }) + spans;
              });
            }
          }, {
            key: "sendTransactions",
            value: function sendTransactions(transactions) {
              if (this._configService.isValid() && this._configService.isActive()) {
                if (transactions && transactions.length > 0) {
                  var payload = {
                    service: this.createServiceObject(),
                    transactions: transactions
                  };
                  payload = this._configService.applyFilters(payload);

                  if (payload) {
                    var endPoint = this._configService.getEndpointUrl('transactions');

                    var ndjson = this.ndjsonTransactions(payload.transactions);
                    ndjson.unshift(NDJSON.stringify({
                      metadata: {
                        service: payload.service
                      }
                    }));
                    var ndjsonPayload = ndjson.join('');
                    return this._postJson(endPoint, ndjsonPayload);
                  } else {
                    this._loggingService.warn('Dropped payload due to filtering!');
                  }
                }
              } else {
                this.warnOnce(this.logMessages.invalidConfig);
              }
            }
          }]);

          return ApmServer;
        }();

        module.exports = ApmServer;
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/common/config-service.js":
      /*!***********************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/common/config-service.js ***!
        \***********************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcCommonConfigServiceJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var _webpack_require__ = __webpack_require__(
        /*! ./utils */
        "./node_modules/elastic-apm-js-core/src/common/utils.js"),
            getCurrentScript = _webpack_require__.getCurrentScript,
            sanitizeString = _webpack_require__.sanitizeString,
            _setTag = _webpack_require__.setTag,
            merge = _webpack_require__.merge;

        var Subscription = __webpack_require__(
        /*! ../common/subscription */
        "./node_modules/elastic-apm-js-core/src/common/subscription.js");

        var constants = __webpack_require__(
        /*! ./constants */
        "./node_modules/elastic-apm-js-core/src/common/constants.js");

        function getConfigFromScript() {
          var script = getCurrentScript();
          var config = getDataAttributesFromNode(script);
          return config;
        }

        function getDataAttributesFromNode(node) {
          if (!node) {
            return {};
          }

          var dataAttrs = {};
          var dataRegex = /^data-([\w-]+)$/;
          var attrs = node.attributes;

          for (var i = 0; i < attrs.length; i++) {
            var attr = attrs[i];

            if (dataRegex.test(attr.nodeName)) {
              var key = attr.nodeName.match(dataRegex)[1]; // camelCase key

              var camelCasedkey = key.split('-').map(function (value, index) {
                return index > 0 ? value.charAt(0).toUpperCase() + value.substring(1) : value;
              }).join('');
              dataAttrs[camelCasedkey] = attr.value || attr.nodeValue;
            }
          }

          return dataAttrs;
        }

        var Config =
        /*#__PURE__*/
        function () {
          function Config() {
            _classCallCheck(this, Config);

            this.config = {};
            this.defaults = {
              serviceName: '',
              serviceVersion: '',
              agentName: 'js-base',
              agentVersion: '%%agent-version%%',
              serverUrl: 'http://localhost:8200',
              serverUrlPrefix: '/intake/v2/rum/events',
              active: true,
              debug: false,
              logLevel: 'warn',
              browserResponsivenessInterval: 500,
              browserResponsivenessBuffer: 3,
              checkBrowserResponsiveness: true,
              groupSimilarSpans: true,
              similarSpanThreshold: 0.05,
              capturePageLoad: true,
              ignoreTransactions: [],
              // throttlingRequestLimit: 20,
              // throttlingInterval: 30000, // 30s
              errorThrottleLimit: 20,
              errorThrottleInterval: 30000,
              transactionThrottleLimit: 20,
              transactionThrottleInterval: 30000,
              transactionDurationThreshold: 60000,
              queueLimit: -1,
              flushInterval: 500,
              sendPageLoadTransaction: true,
              serverStringLimit: constants.serverStringLimit,
              distributedTracing: true,
              distributedTracingOrigins: [],
              distributedTracingHeaderValueCallback: undefined,
              distributedTracingHeaderName: 'elastic-apm-traceparent',
              pageLoadTraceId: undefined,
              pageLoadSpanId: undefined,
              pageLoadSampled: undefined,
              pageLoadTransactionName: undefined,
              transactionSampleRate: 1.0,
              context: {},
              platform: {}
            };
            this._changeSubscription = new Subscription();
            this.filters = [];
          }

          _createClass(Config, [{
            key: "init",
            value: function init() {
              var scriptData = getConfigFromScript();
              this.setConfig(scriptData);
            }
          }, {
            key: "isActive",
            value: function isActive() {
              return this.get('active');
            }
          }, {
            key: "addFilter",
            value: function addFilter(cb) {
              if (typeof cb !== 'function') {
                throw new Error('Argument to must be function');
              }

              this.filters.push(cb);
            }
          }, {
            key: "applyFilters",
            value: function applyFilters(data) {
              for (var i = 0; i < this.filters.length; i++) {
                data = this.filters[i](data);

                if (!data) {
                  return;
                }
              }

              return data;
            }
          }, {
            key: "get",
            value: function get(key) {
              return key.split('.').reduce(function (obj, objKey) {
                return obj && obj[objKey];
              }, this.config);
            }
          }, {
            key: "getEndpointUrl",
            value: function getEndpointUrl() {
              var url = this.get('serverUrl') + this.get('serverUrlPrefix');
              return url;
            }
          }, {
            key: "set",
            value: function set(key, value) {
              var levels = key.split('.');
              var maxLevel = levels.length - 1;
              var target = this.config;

              for (var i = 0; i < maxLevel + 1; i++) {
                var level = levels[i];

                if (!level) {
                  continue;
                }

                if (i === maxLevel) {
                  target[level] = value;
                } else {
                  var obj = target[level] || {};
                  target[level] = obj;
                  target = obj;
                }
              }
            }
          }, {
            key: "setUserContext",
            value: function setUserContext(userContext) {
              var context = {};

              if (typeof userContext.id === 'number') {
                context.id = userContext.id;
              }

              if (typeof userContext.id === 'string') {
                context.id = sanitizeString(userContext.id, this.get('serverStringLimit'));
              }

              if (typeof userContext.username === 'string') {
                context.username = sanitizeString(userContext.username, this.get('serverStringLimit'));
              }

              if (typeof userContext.email === 'string') {
                context.email = sanitizeString(userContext.email, this.get('serverStringLimit'));
              }

              this.set('context.user', context);
            }
          }, {
            key: "setCustomContext",
            value: function setCustomContext(customContext) {
              if (customContext && _typeof(customContext) === 'object') {
                this.set('context.custom', customContext);
              }
            }
          }, {
            key: "setTag",
            value: function setTag(key, value) {
              if (!key) return;

              if (!this.config.context.tags) {
                this.config.context.tags = {};
              }

              _setTag(key, value, this.config.context.tags);
            }
          }, {
            key: "addTags",
            value: function addTags(tags) {
              var _this2 = this;

              var keys = Object.keys(tags);
              keys.forEach(function (k) {
                _this2.setTag(k, tags[k]);
              });
            }
          }, {
            key: "setConfig",
            value: function setConfig(properties) {
              properties = properties || {};
              this.config = merge({}, this.defaults, this.config, properties);

              this._changeSubscription.applyAll(this, [this.config]);
            }
          }, {
            key: "subscribeToChange",
            value: function subscribeToChange(fn) {
              return this._changeSubscription.subscribe(fn);
            }
          }, {
            key: "isValid",
            value: function isValid() {
              var requiredKeys = ['serviceName', 'serverUrl'];

              for (var i = 0; i < requiredKeys.length; i++) {
                var key = requiredKeys[i];

                if (this.config[key] == null || this.config[key] === '') {
                  return false;
                }
              }

              return true;
            }
          }]);

          return Config;
        }();

        module.exports = Config;
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/common/constants.js":
      /*!******************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/common/constants.js ***!
        \******************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcCommonConstantsJs(module, exports) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */

        /**
         * Task States
         */
        var SCHEDULE = 'schedule';
        var INVOKE = 'invoke';
        var CLEAR = 'clear';
        /**
         * Request Sources
         */

        var FETCH_SOURCE = 'fetch';
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        /**
         * Event listener methods
         */

        var ADD_EVENT_LISTENER_STR = 'addEventListener';
        var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
        /**
         * Others
         */

        var serverStringLimit = 1024;
        module.exports = {
          SCHEDULE: SCHEDULE,
          INVOKE: INVOKE,
          CLEAR: CLEAR,
          FETCH_SOURCE: FETCH_SOURCE,
          XMLHTTPREQUEST_SOURCE: XMLHTTPREQUEST_SOURCE,
          ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
          REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR,
          serverStringLimit: serverStringLimit
        };
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/common/logging-service.js":
      /*!************************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/common/logging-service.js ***!
        \************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcCommonLoggingServiceJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var _webpack_require__2 = __webpack_require__(
        /*! ./utils */
        "./node_modules/elastic-apm-js-core/src/common/utils.js"),
            noop = _webpack_require__2.noop;

        var LoggingService =
        /*#__PURE__*/
        function () {
          function LoggingService(spec) {
            _classCallCheck(this, LoggingService);

            if (!spec) spec = {};
            this.levels = ['trace', 'debug', 'info', 'warn', 'error'];
            this.level = spec.level || 'info';
            this.prefix = spec.prefix || '';
            this.resetLogMethods();
          }

          _createClass(LoggingService, [{
            key: "shouldLog",
            value: function shouldLog(level) {
              return this.levels.indexOf(level) >= this.levels.indexOf(this.level);
            }
          }, {
            key: "setLevel",
            value: function setLevel(level) {
              this.level = level;
              this.resetLogMethods();
            }
          }, {
            key: "resetLogMethods",
            value: function resetLogMethods() {
              var loggingService = this;
              this.levels.forEach(function (level) {
                loggingService[level] = loggingService.shouldLog(level) ? log : noop;

                function log() {
                  var prefix = loggingService.prefix;
                  var normalizedLevel;

                  switch (level) {
                    case 'trace':
                      normalizedLevel = 'info';
                      break;

                    case 'debug':
                      normalizedLevel = 'info';
                      break;

                    default:
                      normalizedLevel = level;
                  }

                  var args = arguments;

                  if (prefix) {
                    if (typeof prefix === 'function') prefix = prefix(level);
                    args[0] = prefix + args[0];
                  }

                  if (console) {
                    var realMethod = console[normalizedLevel] ? console[normalizedLevel] : console.log;

                    if (typeof realMethod === 'function') {
                      realMethod.apply(console, args);
                    }
                  }
                }
              });
            }
          }]);

          return LoggingService;
        }();

        module.exports = LoggingService;
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/common/ndjson.js":
      /*!***************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/common/ndjson.js ***!
        \***************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcCommonNdjsonJs(module, exports) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var NDJSON =
        /*#__PURE__*/
        function () {
          function NDJSON() {
            _classCallCheck(this, NDJSON);
          }

          _createClass(NDJSON, null, [{
            key: "stringify",
            value: function stringify(object) {
              return JSON.stringify(object) + '\n';
            }
          }]);

          return NDJSON;
        }();

        module.exports = NDJSON;
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/common/patching/fetch-patch.js":
      /*!*****************************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/common/patching/fetch-patch.js ***!
        \*****************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcCommonPatchingFetchPatchJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var _webpack_require__3 = __webpack_require__(
        /*! ./patch-utils */
        "./node_modules/elastic-apm-js-core/src/common/patching/patch-utils.js"),
            globalState = _webpack_require__3.globalState;

        var _webpack_require__4 = __webpack_require__(
        /*! ../constants */
        "./node_modules/elastic-apm-js-core/src/common/constants.js"),
            SCHEDULE = _webpack_require__4.SCHEDULE,
            INVOKE = _webpack_require__4.INVOKE,
            FETCH_SOURCE = _webpack_require__4.FETCH_SOURCE;

        var alreadyPatched = false;

        function patchFetch(callback) {
          if (alreadyPatched) {
            return;
          }

          alreadyPatched = true;

          if (!window.fetch || !window.Request) {
            return;
          }

          function scheduleTask(task) {
            task.state = SCHEDULE;
            callback(SCHEDULE, task);
          }

          function invokeTask(task) {
            task.state = INVOKE;
            callback(INVOKE, task);
          }

          var nativeFetch = window.fetch;

          window.fetch = function (input, init) {
            var fetchSelf = this;
            var args = arguments;
            var request, url;

            if (typeof input === 'string') {
              request = new Request(input, init);
              url = input;
            } else if (input) {
              request = input;
              url = request.url;
            } else {
              return nativeFetch.apply(fetchSelf, args);
            }

            var task = {
              source: FETCH_SOURCE,
              state: '',
              type: 'macroTask',
              data: {
                target: request,
                method: request.method,
                sync: false,
                url: url,
                args: arguments,
                aborted: false
              }
            };
            return new Promise(function (resolve, reject) {
              globalState.fetchInProgress = true;
              scheduleTask(task);
              var promise;

              try {
                promise = nativeFetch.apply(fetchSelf, [request]);
              } catch (error) {
                reject(error);
                task.data.error = error;
                invokeTask(task);
                globalState.fetchInProgress = false;
                return;
              }

              promise.then(function (response) {
                resolve(response);
                task.data.response = response;
                invokeTask(task);
              }, function (error) {
                reject(error);
                task.data.error = error;
                invokeTask(task);
              });
              globalState.fetchInProgress = false;
            });
          };
        }

        module.exports = {
          patchFetch: patchFetch
        };
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/common/patching/index.js":
      /*!***********************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/common/patching/index.js ***!
        \***********************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcCommonPatchingIndexJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var patchXMLHttpRequest = __webpack_require__(
        /*! ./xhr-patch */
        "./node_modules/elastic-apm-js-core/src/common/patching/xhr-patch.js").patchXMLHttpRequest;

        var patchFetch = __webpack_require__(
        /*! ./fetch-patch */
        "./node_modules/elastic-apm-js-core/src/common/patching/fetch-patch.js").patchFetch;

        var Subscription = __webpack_require__(
        /*! ../subscription */
        "./node_modules/elastic-apm-js-core/src/common/subscription.js");

        var subscription = new Subscription();
        var alreadyPatched = false;

        function patchAll() {
          if (!alreadyPatched) {
            alreadyPatched = true;
            patchXMLHttpRequest(function (event, task) {
              subscription.applyAll(this, [event, task]);
            });
            patchFetch(function (event, task) {
              subscription.applyAll(this, [event, task]);
            });
          }

          return subscription;
        }

        module.exports = {
          patchAll: patchAll,
          subscription: subscription
        };
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/common/patching/patch-utils.js":
      /*!*****************************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/common/patching/patch-utils.js ***!
        \*****************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcCommonPatchingPatchUtilsJs(module, exports) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var globalState = {
          fetchInProgress: false
        };

        function apmSymbol(name) {
          return '__apm_symbol__' + name;
        }

        function isPropertyWritable(propertyDesc) {
          if (!propertyDesc) {
            return true;
          }

          if (propertyDesc.writable === false) {
            return false;
          }

          return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
        }

        function attachOriginToPatched(patched, original) {
          patched[apmSymbol('OriginalDelegate')] = original;
        }

        function patchMethod(target, name, patchFn) {
          var proto = target;

          while (proto && !proto.hasOwnProperty(name)) {
            proto = Object.getPrototypeOf(proto);
          }

          if (!proto && target[name]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = target;
          }

          var delegateName = apmSymbol(name);
          var delegate;

          if (proto && !(delegate = proto[delegateName])) {
            delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
            // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

            var desc = proto && Object.getOwnPropertyDescriptor(proto, name);

            if (isPropertyWritable(desc)) {
              var patchDelegate = patchFn(delegate, delegateName, name);

              proto[name] = function () {
                return patchDelegate(this, arguments);
              };

              attachOriginToPatched(proto[name], delegate);
            }
          }

          return delegate;
        }

        module.exports = {
          apmSymbol: apmSymbol,
          patchMethod: patchMethod,
          globalState: globalState,
          XHR_IGNORE: apmSymbol('xhrIgnore'),
          XHR_SYNC: apmSymbol('xhrSync'),
          XHR_URL: apmSymbol('xhrURL'),
          XHR_METHOD: apmSymbol('xhrMethod')
        };
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/common/patching/xhr-patch.js":
      /*!***************************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/common/patching/xhr-patch.js ***!
        \***************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcCommonPatchingXhrPatchJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var _webpack_require__5 = __webpack_require__(
        /*! ./patch-utils */
        "./node_modules/elastic-apm-js-core/src/common/patching/patch-utils.js"),
            apmSymbol = _webpack_require__5.apmSymbol,
            patchMethod = _webpack_require__5.patchMethod,
            XHR_SYNC = _webpack_require__5.XHR_SYNC,
            XHR_URL = _webpack_require__5.XHR_URL,
            XHR_METHOD = _webpack_require__5.XHR_METHOD,
            XHR_IGNORE = _webpack_require__5.XHR_IGNORE;

        var _webpack_require__6 = __webpack_require__(
        /*! ../constants */
        "./node_modules/elastic-apm-js-core/src/common/constants.js"),
            SCHEDULE = _webpack_require__6.SCHEDULE,
            INVOKE = _webpack_require__6.INVOKE,
            CLEAR = _webpack_require__6.CLEAR,
            XMLHTTPREQUEST_SOURCE = _webpack_require__6.XMLHTTPREQUEST_SOURCE,
            ADD_EVENT_LISTENER_STR = _webpack_require__6.ADD_EVENT_LISTENER_STR,
            REMOVE_EVENT_LISTENER_STR = _webpack_require__6.REMOVE_EVENT_LISTENER_STR;

        var XHR_TASK = apmSymbol('xhrTask');
        var XHR_LISTENER = apmSymbol('xhrListener');
        var XHR_SCHEDULED = apmSymbol('xhrScheduled');
        var alreadyPatched = false;

        function patchXMLHttpRequest(callback) {
          if (alreadyPatched) {
            return;
          }

          alreadyPatched = true;
          var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
          var oriAddListener = XMLHttpRequestPrototype[ADD_EVENT_LISTENER_STR];
          var oriRemoveListener = XMLHttpRequestPrototype[REMOVE_EVENT_LISTENER_STR];

          if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

            if (XMLHttpRequestEventTarget) {
              var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
              oriAddListener = XMLHttpRequestEventTargetPrototype[ADD_EVENT_LISTENER_STR];
              oriRemoveListener = XMLHttpRequestEventTargetPrototype[REMOVE_EVENT_LISTENER_STR];
            }
          }

          var READY_STATE_CHANGE = 'readystatechange';

          function invokeTask(task) {
            task.state = INVOKE;

            if (!task.ignore) {
              callback(INVOKE, task);
            }
          }

          function scheduleTask(task) {
            XMLHttpRequest[XHR_SCHEDULED] = false;
            task.state = SCHEDULE;

            if (!task.ignore) {
              callback(SCHEDULE, task);
            }

            var data = task.data;
            var target = data.target; // remove existing event listener

            var listener = target[XHR_LISTENER];

            if (!oriAddListener) {
              oriAddListener = target[ADD_EVENT_LISTENER_STR];
              oriRemoveListener = target[REMOVE_EVENT_LISTENER_STR];
            }

            if (listener) {
              oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }

            var newListener = target[XHR_LISTENER] = function () {
              if (target.readyState === target.DONE) {
                // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                // readyState=4 multiple times, so we need to check task state here
                if (!data.aborted && XMLHttpRequest[XHR_SCHEDULED] && task.state === SCHEDULE) {
                  invokeTask(task);
                }
              }
            };

            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];

            if (!storedTask) {
              target[XHR_TASK] = task;
            }

            var result = sendNative.apply(target, data.args);
            XMLHttpRequest[XHR_SCHEDULED] = true;
            return result;
          }

          function clearTask(task) {
            task.state = CLEAR;
            callback(CLEAR, task);
            var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.

            data.aborted = true;
          }

          var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
            return function (self, args) {
              self[XHR_METHOD] = args[0];
              self[XHR_URL] = args[1];
              self[XHR_SYNC] = args[2] === false;
              return openNative.apply(self, args);
            };
          });
          var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
            return function (self, args) {
              var task = {
                source: XMLHTTPREQUEST_SOURCE,
                state: '',
                type: 'macroTask',
                ignore: self[XHR_IGNORE],
                data: {
                  target: self,
                  method: self[XHR_METHOD],
                  sync: self[XHR_SYNC],
                  url: self[XHR_URL],
                  args: args,
                  aborted: false
                }
              };
              var result = scheduleTask(task);

              if (self[XHR_SYNC]) {
                invokeTask(task);
              }

              return result;
            };
          });
          var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
            return function (self, args) {
              var task = self[XHR_TASK];

              if (task && typeof task.type === 'string') {
                // If the XHR has already been aborted, do nothing.
                if (task.data && task.data.aborted) {
                  return;
                }

                clearTask(task);
              }

              return abortNative.apply(self, args);
            };
          });
        }

        module.exports = {
          patchXMLHttpRequest: patchXMLHttpRequest
        };
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/common/queue.js":
      /*!**************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/common/queue.js ***!
        \**************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcCommonQueueJs(module, exports) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var Queue =
        /*#__PURE__*/
        function () {
          function Queue(onFlush, opts) {
            _classCallCheck(this, Queue);

            if (!opts) opts = {};
            this.onFlush = onFlush;
            this.items = [];
            this.queueLimit = opts.queueLimit || -1;
            this.flushInterval = opts.flushInterval || 0;
            this.timeoutId = undefined;
          }

          _createClass(Queue, [{
            key: "_setTimer",
            value: function _setTimer() {
              var _this3 = this;

              this.timeoutId = setTimeout(function () {
                _this3.flush();
              }, this.flushInterval);
            }
          }, {
            key: "flush",
            value: function flush() {
              this.onFlush(this.items);

              this._clear();
            }
          }, {
            key: "_clear",
            value: function _clear() {
              if (typeof this.timeoutId !== 'undefined') {
                clearTimeout(this.timeoutId);
                this.timeoutId = undefined;
              }

              this.items = [];
            }
          }, {
            key: "add",
            value: function add(item) {
              this.items.push(item);

              if (this.queueLimit !== -1 && this.items.length >= this.queueLimit) {
                this.flush();
              } else {
                if (typeof this.timeoutId === 'undefined') {
                  this._setTimer();
                }
              }
            }
          }]);

          return Queue;
        }();

        module.exports = Queue;
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/common/service-factory.js":
      /*!************************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/common/service-factory.js ***!
        \************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcCommonServiceFactoryJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var ApmServer = __webpack_require__(
        /*! ./apm-server */
        "./node_modules/elastic-apm-js-core/src/common/apm-server.js");

        var ConfigService = __webpack_require__(
        /*! ./config-service */
        "./node_modules/elastic-apm-js-core/src/common/config-service.js");

        var LoggingService = __webpack_require__(
        /*! ./logging-service */
        "./node_modules/elastic-apm-js-core/src/common/logging-service.js");

        var patchUtils = __webpack_require__(
        /*! ./patching/patch-utils */
        "./node_modules/elastic-apm-js-core/src/common/patching/patch-utils.js");

        var utils = __webpack_require__(
        /*! ./utils */
        "./node_modules/elastic-apm-js-core/src/common/utils.js");

        var ServiceFactory =
        /*#__PURE__*/
        function () {
          function ServiceFactory() {
            _classCallCheck(this, ServiceFactory);

            this._serviceCreators = {};
            this._serviceInstances = {};
            this.initialized = false;
          }

          _createClass(ServiceFactory, [{
            key: "registerCoreServices",
            value: function registerCoreServices() {
              var serviceFactory = this;
              this.registerServiceCreator('ConfigService', function () {
                return new ConfigService();
              });
              this.registerServiceCreator('LoggingService', function () {
                return new LoggingService();
              });
              this.registerServiceCreator('ApmServer', function () {
                return new ApmServer(serviceFactory.getService('ConfigService'), serviceFactory.getService('LoggingService'));
              });
              this.registerServiceInstance('PatchUtils', patchUtils);
              this.registerServiceInstance('Utils', utils);
            }
          }, {
            key: "init",
            value: function init() {
              if (this.initialized) {
                return;
              }

              this.initialized = true;
              var serviceFactory = this;
              var configService = serviceFactory.getService('ConfigService');
              configService.init();
              var loggingService = serviceFactory.getService('LoggingService');

              function setLogLevel(loggingService, configService) {
                if (configService.get('debug') === true && configService.config.logLevel !== 'trace') {
                  loggingService.setLevel('debug', false);
                } else {
                  loggingService.setLevel(configService.get('logLevel'), false);
                }
              }

              setLogLevel(loggingService, configService);
              configService.subscribeToChange(function () {
                setLogLevel(loggingService, configService);
              });
              var apmServer = serviceFactory.getService('ApmServer');
              apmServer.init();
            }
          }, {
            key: "registerServiceCreator",
            value: function registerServiceCreator(name, creator) {
              this._serviceCreators[name] = creator;
            }
          }, {
            key: "registerServiceInstance",
            value: function registerServiceInstance(name, instance) {
              this._serviceInstances[name] = instance;
            }
          }, {
            key: "getService",
            value: function getService(name) {
              if (!this._serviceInstances[name]) {
                if (typeof this._serviceCreators[name] === 'function') {
                  this._serviceInstances[name] = this._serviceCreators[name](this);
                } else {
                  throw new Error('Can not get service, No creator for: ' + name);
                }
              }

              return this._serviceInstances[name];
            }
          }]);

          return ServiceFactory;
        }();

        module.exports = ServiceFactory;
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/common/subscription.js":
      /*!*********************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/common/subscription.js ***!
        \*********************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcCommonSubscriptionJs(module, exports) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var Subscription =
        /*#__PURE__*/
        function () {
          function Subscription() {
            _classCallCheck(this, Subscription);

            this.subscriptions = [];
          }

          _createClass(Subscription, [{
            key: "subscribe",
            value: function subscribe(fn) {
              var _this4 = this;

              this.subscriptions.push(fn);
              return function () {
                var index = _this4.subscriptions.indexOf(fn);

                if (index > -1) {
                  _this4.subscriptions.splice(index, 1);
                }
              };
            }
          }, {
            key: "applyAll",
            value: function applyAll(applyTo, applyWith) {
              this.subscriptions.forEach(function (fn) {
                try {
                  fn.apply(applyTo, applyWith);
                } catch (error) {
                  console.log(error, error.stack);
                }
              }, this);
            }
          }]);

          return Subscription;
        }();

        module.exports = Subscription;
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/common/throttle.js":
      /*!*****************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/common/throttle.js ***!
        \*****************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcCommonThrottleJs(module, exports) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        function throttle(fn, onThrottle, opts) {
          var context = opts.context || this;
          var limit = opts.limit;
          var interval = opts.interval;

          var countFn = opts.countFn || function () {};

          var counter = 0;
          var timeoutId;
          return function () {
            var count = typeof countFn === 'function' && countFn.apply(context, arguments);

            if (typeof count !== 'number') {
              count = 1;
            }

            counter = counter + count;

            if (typeof timeoutId === 'undefined') {
              timeoutId = setTimeout(function () {
                counter = 0;
                timeoutId = undefined;
              }, interval);
            }

            if (counter > limit) {
              if (typeof onThrottle === 'function') {
                return onThrottle.apply(context, arguments);
              }
            } else {
              return fn.apply(context, arguments);
            }
          };
        }

        module.exports = throttle;
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/common/url.js":
      /*!************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/common/url.js ***!
        \************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcCommonUrlJs(module, exports) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */

        /**
         * Bare miniaml URL parser that is not compatible with URL Api
         * in the browser
         *
         * Does not support
         * - URLSearchParams
         * - Unicode chars, Punycode
         *
         * {
         *    hash: '',
         *    host: '',
         *    origin: '',
         *    path: ''
         *    protocol: '',
         *    query: '',
         * }
         *
         * Based on code from url-parser!
         * https://github.com/unshiftio/url-parse/blob/master/index.js
         *
         */
        var RULES = [['#', 'hash'], ['?', 'query'], ['/', 'path'], [NaN, 'host', 1] //
        ];
        var PROTOCOL_REGEX = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;

        var Url =
        /*#__PURE__*/
        function () {
          function Url(url) {
            _classCallCheck(this, Url);

            var _this$extractProtocol = this.extractProtocol(url || ''),
                protocol = _this$extractProtocol.protocol,
                address = _this$extractProtocol.address,
                slashes = _this$extractProtocol.slashes;

            var relative = !protocol && !slashes;
            var location = this.getLocation();
            var instructions = RULES.slice(); // Sanitize what is left of the address

            address = address.replace('\\', '/');
            var index;

            for (var i = 0; i < instructions.length; i++) {
              var instruction = instructions[i];
              var parse = instruction[0];
              var key = instruction[1];

              if (typeof parse === 'string') {
                index = address.indexOf(parse);

                if (~index) {
                  this[key] = address.slice(index);
                  address = address.slice(0, index);
                }
              } else {
                /** NaN condition */
                this[key] = address;
              }
              /**
               * Default values for all keys from location if url is relative
               */


              this[key] = this[key] || (relative && instruction[2] ? location[key] || '' : '');
              /**
               * host should be lowercased so they can be used to
               * create a proper `origin`.
               */

              if (instruction[2]) this[key] = this[key].toLowerCase();
            }

            this.protocol = protocol || location.protocol || '';
            this.origin = this.protocol && this.host && this.protocol !== 'file:' ? this.protocol + '//' + this.host : 'null';
          }

          _createClass(Url, [{
            key: "getLocation",
            value: function getLocation() {
              var globalVar = {};

              if (typeof window !== 'undefined') {
                globalVar = window;
              }

              return globalVar.location;
            }
          }, {
            key: "extractProtocol",
            value: function extractProtocol(url) {
              var match = PROTOCOL_REGEX.exec(url);
              return {
                protocol: match[1] ? match[1].toLowerCase() : '',
                slashes: !!match[2],
                address: match[3]
              };
            }
          }]);

          return Url;
        }();

        module.exports = Url;
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/common/utils.js":
      /*!**************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/common/utils.js ***!
        \**************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcCommonUtilsJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var constants = __webpack_require__(
        /*! ./constants */
        "./node_modules/elastic-apm-js-core/src/common/constants.js");

        var slice = [].slice;

        var Url = __webpack_require__(
        /*! ../common/url */
        "./node_modules/elastic-apm-js-core/src/common/url.js");

        var rng = __webpack_require__(
        /*! uuid/lib/rng-browser */
        "./node_modules/uuid/lib/rng-browser.js");

        function isCORSSupported() {
          var xhr = new window.XMLHttpRequest();
          return 'withCredentials' in xhr;
        }

        var byteToHex = [];

        for (var i = 0; i < 256; ++i) {
          byteToHex[i] = (i + 0x100).toString(16).substr(1);
        }

        function bytesToHex(buf, offset) {
          var i = offset || 0;
          var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

          return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
        }

        function getDtHeaderValue(span) {
          var dtVersion = '00';
          var dtUnSampledFlags = '00'; // 00000001 ->  '01' -> recorded

          var dtSampledFlags = '01';

          if (span && span.traceId && span.id && span.parentId) {
            var flags = span.sampled ? dtSampledFlags : dtUnSampledFlags;
            /**
             * In the case of unsampled traces, propagate transaction id (parentId)
             * instead of span id to the downstream
             */

            var id = span.sampled ? span.id : span.parentId;
            return dtVersion + '-' + span.traceId + '-' + id + '-' + flags;
          }
        }

        function parseDtHeaderValue(value) {
          var parsed = /^([\da-f]{2})-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})$/.exec(value);

          if (parsed) {
            var flags = parsed[4];
            var sampled = flags !== '00';
            return {
              traceId: parsed[2],
              id: parsed[3],
              sampled: sampled
            };
          }
        }

        function isDtHeaderValid(header) {
          return /^[\da-f]{2}-[\da-f]{32}-[\da-f]{16}-[\da-f]{2}$/.test(header) && header.slice(3, 35) !== '00000000000000000000000000000000' && header.slice(36, 52) !== '0000000000000000';
        }

        function checkSameOrigin(source, target) {
          var isSame = false;

          if (typeof target === 'string') {
            var src = new Url(source);
            var tar = new Url(target);
            isSame = src.origin === tar.origin;
          } else if (Array.isArray(target)) {
            target.forEach(function (t) {
              if (!isSame) {
                isSame = checkSameOrigin(source, t);
              }
            });
          }

          return isSame;
        }

        function generateRandomId(length) {
          var id = bytesToHex(rng());
          return id.substr(0, length);
        }

        function isPlatformSupported() {
          return typeof window !== 'undefined' && typeof Array.prototype.forEach === 'function' && typeof JSON.stringify === 'function' && typeof Function.bind === 'function' && window.performance && typeof window.performance.now === 'function' && isCORSSupported();
        }

        function sanitizeString(value, limit, required, placeholder) {
          if (typeof value === 'number') {
            value = String(value);
          }

          if (required && !value) {
            value = placeholder || 'NA';
          }

          if (value) {
            return String(value).substr(0, limit);
          } else {
            return value;
          }
        }

        function setTag(key, value, obj) {
          if (!obj || !key) return;
          var skey = removeInvalidChars(key);
          obj[skey] = sanitizeString(value, constants.serverStringLimit);
          return obj;
        }

        function sanitizeObjectStrings(obj, limit, required, placeholder) {
          if (!obj) return obj;

          if (typeof obj === 'string') {
            return sanitizeString(obj, limit, required, placeholder);
          }

          var keys = Object.keys(obj);
          keys.forEach(function (k) {
            var value = obj[k];

            if (typeof value === 'string') {
              value = sanitizeString(obj[k], limit, required, placeholder);
            } else if (_typeof(value) === 'object') {
              value = sanitizeObjectStrings(value, limit, required, placeholder);
            }

            obj[k] = value;
          });
          return obj;
        }

        var navigationTimingKeys = ['fetchStart', 'domainLookupStart', 'domainLookupEnd', 'connectStart', 'connectEnd', 'secureConnectionStart', 'requestStart', 'responseStart', 'responseEnd', 'domLoading', 'domInteractive', 'domContentLoadedEventStart', 'domContentLoadedEventEnd', 'domComplete', 'loadEventStart', 'loadEventEnd'];

        function getNavigationTimingMarks() {
          var timing = window.performance.timing;
          var fetchStart = timing.fetchStart;
          var marks = {};
          navigationTimingKeys.forEach(function (timingKey) {
            var m = timing[timingKey];

            if (m && m >= fetchStart) {
              marks[timingKey] = m - fetchStart;
            }
          });
          return marks;
        }
        /**
         * Paint Timing Metrics that is available during page load
         * https://www.w3.org/TR/paint-timing/
         */


        function getPaintTimingMarks() {
          var paints = {};
          var perf = window.performance;

          if (perf.getEntriesByType) {
            var entries = perf.getEntriesByType('paint');

            if (entries.length > 0) {
              var timings = perf.timing;
              /**
               * To avoid capturing the unload event handler effect in paint timings
               */

              var unloadDiff = timings.fetchStart - timings.navigationStart;

              for (var i = 0; i < entries.length; i++) {
                var data = entries[i];
                var calcPaintTime = unloadDiff >= 0 ? data.startTime - unloadDiff : data.startTime;
                paints[data.name] = calcPaintTime;
              }
            }
          }

          return paints;
        }

        function getTimeOrigin() {
          return window.performance.timing.fetchStart;
        }

        function getPageMetadata() {
          return {
            page: {
              referer: document.referrer,
              url: window.location.href
            }
          };
        }

        function stripQueryStringFromUrl(url) {
          return url && url.split('?')[0];
        }

        function isObject(value) {
          // http://jsperf.com/isobject4
          return value !== null && _typeof(value) === 'object';
        }

        function isFunction(value) {
          return typeof value === 'function';
        }

        function baseExtend(dst, objs, deep) {
          for (var i = 0, ii = objs.length; i < ii; ++i) {
            var obj = objs[i];
            if (!isObject(obj) && !isFunction(obj)) continue;
            var keys = Object.keys(obj);

            for (var j = 0, jj = keys.length; j < jj; j++) {
              var key = keys[j];
              var src = obj[key];

              if (deep && isObject(src)) {
                if (!isObject(dst[key])) dst[key] = Array.isArray(src) ? [] : {};
                baseExtend(dst[key], [src], false); // only one level of deep merge
              } else {
                dst[key] = src;
              }
            }
          }

          return dst;
        }

        function getElasticScript() {
          if (typeof document !== 'undefined') {
            var scripts = document.getElementsByTagName('script');

            for (var i = 0, l = scripts.length; i < l; i++) {
              var sc = scripts[i];

              if (sc.src.indexOf('elastic') > 0) {
                return sc;
              }
            }
          }
        }

        function getCurrentScript() {
          if (typeof document !== 'undefined') {
            // Source http://www.2ality.com/2014/05/current-script.html
            var currentScript = document.currentScript;

            if (!currentScript) {
              return getElasticScript();
            }

            return currentScript;
          }
        }

        function extend(dst) {
          return baseExtend(dst, slice.call(arguments, 1), false);
        }

        function merge(dst) {
          return baseExtend(dst, slice.call(arguments, 1), true);
        }

        function isUndefined(obj) {
          return typeof obj === 'undefined';
        }

        function noop() {}

        function find(array, predicate, thisArg) {
          // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
          if (array == null) {
            throw new TypeError('array is null or not defined');
          }

          var o = Object(array);
          var len = o.length >>> 0;

          if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
          }

          var k = 0;

          while (k < len) {
            var kValue = o[k];

            if (predicate.call(thisArg, kValue, k, o)) {
              return kValue;
            }

            k++;
          }

          return undefined;
        }

        function removeInvalidChars(key) {
          return key.replace(/[.*"]/g, '_');
        }

        module.exports = {
          extend: extend,
          merge: merge,
          isUndefined: isUndefined,
          noop: noop,
          baseExtend: baseExtend,
          bytesToHex: bytesToHex,
          isCORSSupported: isCORSSupported,
          isObject: isObject,
          isFunction: isFunction,
          isPlatformSupported: isPlatformSupported,
          isDtHeaderValid: isDtHeaderValid,
          parseDtHeaderValue: parseDtHeaderValue,
          getNavigationTimingMarks: getNavigationTimingMarks,
          getPaintTimingMarks: getPaintTimingMarks,
          getDtHeaderValue: getDtHeaderValue,
          getPageMetadata: getPageMetadata,
          getCurrentScript: getCurrentScript,
          getElasticScript: getElasticScript,
          getTimeOrigin: getTimeOrigin,
          generateRandomId: generateRandomId,
          rng: rng,
          checkSameOrigin: checkSameOrigin,
          sanitizeString: sanitizeString,
          sanitizeObjectStrings: sanitizeObjectStrings,
          setTag: setTag,
          stripQueryStringFromUrl: stripQueryStringFromUrl,
          find: find,
          removeInvalidChars: removeInvalidChars
        };
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/error-logging/error-logging.js":
      /*!*****************************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/error-logging/error-logging.js ***!
        \*****************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcErrorLoggingErrorLoggingJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var StackTraceService = __webpack_require__(
        /*! ./stack-trace-service */
        "./node_modules/elastic-apm-js-core/src/error-logging/stack-trace-service.js");

        var utils = __webpack_require__(
        /*! ../common/utils */
        "./node_modules/elastic-apm-js-core/src/common/utils.js");

        var ErrorLogging =
        /*#__PURE__*/
        function () {
          function ErrorLogging(apmServer, configService, loggingService, transactionService) {
            _classCallCheck(this, ErrorLogging);

            this._apmServer = apmServer;
            this._configService = configService;
            this._loggingService = loggingService;
            this._transactionService = transactionService;
            this._stackTraceService = new StackTraceService(configService, loggingService);
          } // errorEvent = {message, filename, lineno, colno, error}


          _createClass(ErrorLogging, [{
            key: "createErrorDataModel",
            value: function createErrorDataModel(errorEvent) {
              var filePath = this._stackTraceService.cleanFilePath(errorEvent.filename);

              var fileName = this._stackTraceService.filePathToFileName(filePath);

              var culprit;

              var frames = this._stackTraceService.createStackTraces(errorEvent);

              frames = this._stackTraceService.filterInvalidFrames(frames);

              if (!fileName && frames.length) {
                var lastFrame = frames[frames.length - 1];

                if (lastFrame.filename) {
                  fileName = lastFrame.filename;
                } else {
                  // If filename empty, assume inline script
                  fileName = '(inline script)';
                }
              }

              if (this._stackTraceService.isFileInline(filePath)) {
                culprit = '(inline script)';
              } else {
                culprit = fileName;
              }

              var message = errorEvent.message || errorEvent.error && errorEvent.error.message;
              var errorType = errorEvent.error ? errorEvent.error.name : undefined;

              if (!errorType) {
                /**
                 * Try to extract type from message formatted like
                 * 'ReferenceError: Can't find variable: initHighlighting'
                 */
                if (message && message.indexOf(':') > -1) {
                  errorType = message.split(':')[0];
                } else {
                  errorType = '';
                }
              }

              var configContext = this._configService.get('context');

              var stringLimit = this._configService.get('serverStringLimit');

              var errorContext;

              if (errorEvent.error && _typeof(errorEvent.error) === 'object') {
                errorContext = this._getErrorProperties(errorEvent.error);
              }

              var browserMetadata = utils.getPageMetadata();
              var context = utils.merge({}, browserMetadata, configContext, errorContext);
              var errorObject = {
                id: utils.generateRandomId(),
                culprit: utils.sanitizeString(culprit),
                exception: {
                  message: utils.sanitizeString(message, undefined, true),
                  stacktrace: frames,
                  type: utils.sanitizeString(errorType, stringLimit, false)
                },
                context: context
              };

              var currentTransaction = this._transactionService.getCurrentTransaction();

              if (currentTransaction) {
                errorObject.trace_id = currentTransaction.traceId;
                errorObject.parent_id = currentTransaction.id;
                errorObject.transaction_id = currentTransaction.id;
                errorObject.transaction = {
                  type: currentTransaction.type,
                  sampled: currentTransaction.sampled
                };
              }

              return errorObject;
            }
          }, {
            key: "logErrorEvent",
            value: function logErrorEvent(errorEvent, sendImmediately) {
              if (this._configService.isActive()) {
                if (typeof errorEvent === 'undefined') {
                  return;
                }

                var errorObject = this.createErrorDataModel(errorEvent);

                if (typeof errorObject.exception.message === 'undefined') {
                  return;
                }

                if (sendImmediately) {
                  return this._apmServer.sendErrors([errorObject]);
                } else {
                  return this._apmServer.addError(errorObject);
                }
              }
            }
          }, {
            key: "registerGlobalEventListener",
            value: function registerGlobalEventListener() {
              var errorLogging = this;

              window.onerror = function (messageOrEvent, source, lineno, colno, error) {
                var errorEvent;

                if (typeof messageOrEvent !== 'undefined' && typeof messageOrEvent !== 'string') {
                  errorEvent = messageOrEvent;
                } else {
                  errorEvent = {
                    message: messageOrEvent,
                    filename: source,
                    lineno: lineno,
                    colno: colno,
                    error: error
                  };
                }

                errorLogging.logErrorEvent(errorEvent);
              };
            }
          }, {
            key: "logError",
            value: function logError(messageOrError) {
              var errorEvent = {};

              if (typeof messageOrError === 'string') {
                errorEvent.message = messageOrError;
              } else {
                errorEvent.error = messageOrError;
              }

              return this.logErrorEvent(errorEvent);
            }
          }, {
            key: "_getErrorProperties",
            value: function _getErrorProperties(error) {
              var properties = {};
              Object.keys(error).forEach(function (key) {
                if (key === 'stack') return;
                var val = error[key];
                if (val === null) return; // null is typeof object and well break the switch below

                switch (_typeof(val)) {
                  case 'function':
                    return;

                  case 'object':
                    // ignore all objects except Dates
                    if (typeof val.toISOString !== 'function') return;
                    val = val.toISOString();
                }

                properties[key] = val;
              });
              return properties;
            }
          }]);

          return ErrorLogging;
        }();

        module.exports = ErrorLogging;
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/error-logging/index.js":
      /*!*********************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/error-logging/index.js ***!
        \*********************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcErrorLoggingIndexJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var ErrorLogging = __webpack_require__(
        /*! ./error-logging */
        "./node_modules/elastic-apm-js-core/src/error-logging/error-logging.js");

        module.exports = {
          ErrorLogging: ErrorLogging,
          registerServices: function registerServices(serviceFactory) {
            serviceFactory.registerServiceCreator('ErrorLogging', function () {
              var apmService = serviceFactory.getService('ApmServer');
              var configService = serviceFactory.getService('ConfigService');
              var loggingService = serviceFactory.getService('LoggingService');
              var transactionService = serviceFactory.getService('TransactionService');
              return new ErrorLogging(apmService, configService, loggingService, transactionService);
            });
          }
        };
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/error-logging/stack-trace-service.js":
      /*!***********************************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/error-logging/stack-trace-service.js ***!
        \***********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcErrorLoggingStackTraceServiceJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var errorStackParser = __webpack_require__(
        /*! error-stack-parser */
        "./node_modules/elastic-apm-js-core/node_modules/error-stack-parser/error-stack-parser.js");

        var StackTraceService =
        /*#__PURE__*/
        function () {
          function StackTraceService(configService, loggingService) {
            _classCallCheck(this, StackTraceService);

            this._configService = configService;
            this._loggingService = loggingService;
          }

          _createClass(StackTraceService, [{
            key: "createStackTraces",
            value: function createStackTraces(errorEvent) {
              var stackTraceService = this;
              var error = errorEvent.error;
              var stackTraces;

              if (error) {
                try {
                  stackTraces = errorStackParser.parse(error);
                } catch (e) {
                  this._loggingService.debug('Parsing error stack failed!', e);
                }
              }

              if (!stackTraces || stackTraces.length === 0) {
                stackTraces = [{
                  fileName: errorEvent.filename,
                  lineNumber: errorEvent.lineno,
                  columnNumber: errorEvent.colno
                }];
              }

              stackTraces = ErrorStackNormalizer(stackTraces);
              stackTraces = stackTraces.map(function (stack) {
                if (!stack.fileName && !stack.lineNumber) {
                  return {};
                }

                if (!stack.columnNumber && !stack.lineNumber) {
                  return {};
                }

                var filePath = stackTraceService.cleanFilePath(stack.fileName);
                var fileName = stackTraceService.filePathToFileName(filePath);

                if (stackTraceService.isFileInline(filePath)) {
                  fileName = '(inline script)';
                }

                return {
                  abs_path: stack.fileName,
                  filename: fileName,
                  "function": stack.functionName || '<anonymous>',
                  lineno: stack.lineNumber,
                  colno: stack.columnNumber
                };
              });
              return stackTraces;
            }
          }, {
            key: "filterInvalidFrames",
            value: function filterInvalidFrames(frames) {
              var result = [];

              if (Array.isArray(frames)) {
                result = frames.filter(function (f) {
                  return typeof f['filename'] !== 'undefined' && typeof f['lineno'] !== 'undefined';
                });
              }

              return result;
            }
          }, {
            key: "filePathToFileName",
            value: function filePathToFileName(fileUrl) {
              var origin = window.location.origin || window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');

              if (fileUrl.indexOf(origin) > -1) {
                fileUrl = fileUrl.replace(origin + '/', '');
              }

              return fileUrl;
            }
          }, {
            key: "cleanFilePath",
            value: function cleanFilePath(filePath) {
              if (!filePath) {
                filePath = '';
              }

              if (filePath === '<anonymous>') {
                filePath = '';
              }

              return filePath;
            }
          }, {
            key: "isFileInline",
            value: function isFileInline(fileUrl) {
              if (fileUrl) {
                return window.location.href.indexOf(fileUrl) === 0;
              } else {
                return false;
              }
            }
          }]);

          return StackTraceService;
        }();

        function ErrorStackNormalizer(stackFrames) {
          return stackFrames.map(function (frame) {
            if (frame.functionName) {
              frame.functionName = normalizeFunctionName(frame.functionName);
            }

            return frame;
          });
        }

        function normalizeFunctionName(fnName) {
          // SpinderMonkey name convetion (https://developer.mozilla.org/en-US/docs/Tools/Debugger-API/Debugger.Object#Accessor_Properties_of_the_Debugger.Object_prototype)
          // We use a/b to refer to the b defined within a
          var parts = fnName.split('/');

          if (parts.length > 1) {
            fnName = ['Object', parts[parts.length - 1]].join('.');
          } else {
            fnName = parts[0];
          } // a< to refer to a function that occurs somewhere within an expression that is assigned to a.


          fnName = fnName.replace(/.<$/gi, '.<anonymous>'); // Normalize IE's 'Anonymous function'

          fnName = fnName.replace(/^Anonymous function$/, '<anonymous>'); // Always use the last part

          parts = fnName.split('.');

          if (parts.length > 1) {
            fnName = parts[parts.length - 1];
          } else {
            fnName = parts[0];
          }

          return fnName;
        }

        module.exports = StackTraceService;
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/index.js":
      /*!*******************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/index.js ***!
        \*******************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcIndexJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        // export public core APIs.
        var ErrorLogging = __webpack_require__(
        /*! ./error-logging */
        "./node_modules/elastic-apm-js-core/src/error-logging/index.js");

        var PerformanceMonitoring = __webpack_require__(
        /*! ./performance-monitoring */
        "./node_modules/elastic-apm-js-core/src/performance-monitoring/index.js");

        var ServiceFactory = __webpack_require__(
        /*! ./common/service-factory */
        "./node_modules/elastic-apm-js-core/src/common/service-factory.js");

        var utils = __webpack_require__(
        /*! ./common/utils */
        "./node_modules/elastic-apm-js-core/src/common/utils.js");

        var patching = __webpack_require__(
        /*! ./common/patching */
        "./node_modules/elastic-apm-js-core/src/common/patching/index.js");

        module.exports = {
          createServiceFactory: function createServiceFactory() {
            var serviceFactory = new ServiceFactory();
            serviceFactory.registerCoreServices();
            ErrorLogging.registerServices(serviceFactory);
            PerformanceMonitoring.registerServices(serviceFactory);
            return serviceFactory;
          },
          ServiceFactory: ServiceFactory,
          patching: patching,
          utils: utils
        };
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/performance-monitoring/capture-hard-navigation.js":
      /*!************************************************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/performance-monitoring/capture-hard-navigation.js ***!
        \************************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcPerformanceMonitoringCaptureHardNavigationJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var Span = __webpack_require__(
        /*! ./span */
        "./node_modules/elastic-apm-js-core/src/performance-monitoring/span.js");

        var Url = __webpack_require__(
        /*! ../common/url */
        "./node_modules/elastic-apm-js-core/src/common/url.js");

        var eventPairs = [['domainLookupStart', 'domainLookupEnd', 'Domain lookup'], ['connectStart', 'connectEnd', 'Making a connection to the server'], ['requestStart', 'responseEnd', 'Requesting and receiving the document'], ['domLoading', 'domInteractive', 'Parsing the document, executing sync. scripts'], ['domContentLoadedEventStart', 'domContentLoadedEventEnd', 'Fire "DOMContentLoaded" event'], ['loadEventStart', 'loadEventEnd', 'Fire "load" event']];
        var spanThreshold = 5 * 60 * 1000;

        function isValidSpan(transaction, span) {
          var d = span.duration();
          return d < spanThreshold && d > 0 && span._start <= transaction._end && span._end <= transaction._end;
        }

        function createNavigationTimingSpans(timings, baseTime) {
          var spans = [];

          for (var i = 0; i < eventPairs.length; i++) {
            var start = timings[eventPairs[i][0]];
            var end = timings[eventPairs[i][1]];

            if (baseTime && start && end && end > start && start >= baseTime && end - start < spanThreshold && start - baseTime < spanThreshold && end - baseTime < spanThreshold) {
              var span = new Span(eventPairs[i][2], 'hard-navigation.browser-timing');

              if (eventPairs[i][0] === 'requestStart') {
                span.pageResponse = true;
              }

              span._start = start - baseTime;
              span.ended = true;
              span._end = end - baseTime;
              spans.push(span);
            }
          }

          return spans;
        }

        function createResourceTimingSpans(entries, filterUrls) {
          var spans = [];

          for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];

            if (entry.initiatorType && entry.initiatorType === 'xmlhttprequest' || !entry.name) {
              continue;
            } else if (entry.initiatorType !== 'css' && entry.initiatorType !== 'img' && entry.initiatorType !== 'script' && entry.initiatorType !== 'link') {
              // is web request? test for css/img before the expensive operation
              var foundAjaxReq = false;

              for (var j = 0; j < filterUrls.length; j++) {
                // entry.name.endsWith(ajaxUrls[j])
                var idx = entry.name.lastIndexOf(filterUrls[j]);

                if (idx > -1 && idx === entry.name.length - filterUrls[j].length) {
                  foundAjaxReq = true;
                  break;
                }
              }

              if (foundAjaxReq) {
                continue;
              }
            } else {
              var kind = 'resource';

              if (entry.initiatorType) {
                kind += '.' + entry.initiatorType;
              }

              var start = entry.startTime;
              var end = entry.responseEnd;

              if (typeof start === 'number' && typeof end === 'number' && start >= 0 && end > start && end - start < spanThreshold && start < spanThreshold && end < spanThreshold) {
                var parsedUrl = new Url(entry.name);
                var spanName = parsedUrl.origin + parsedUrl.path;
                var span = new Span(spanName || entry.name, kind);
                span.addContext({
                  http: {
                    url: entry.name
                  }
                });
                span._start = start;
                span.ended = true;
                span._end = end;
                spans.push(span);
              }
            }
          }

          return spans;
        }

        function captureHardNavigation(transaction) {
          if (transaction.isHardNavigation && window.performance && window.performance.timing) {
            var timings = window.performance.timing;
            var baseTime = timings.fetchStart; // must be zero otherwise the calculated relative _start time would be wrong

            transaction._start = 0;
            transaction.type = 'page-load';
            createNavigationTimingSpans(timings, baseTime).forEach(function (span) {
              if (isValidSpan(transaction, span)) {
                span.traceId = transaction.traceId;
                span.sampled = transaction.sampled;

                if (transaction.options.pageLoadSpanId && span.pageResponse) {
                  span.id = transaction.options.pageLoadSpanId;
                }

                transaction.spans.push(span);
              }
            });

            if (window.performance.getEntriesByType) {
              var entries = window.performance.getEntriesByType('resource');
              var ajaxUrls = transaction.spans.filter(function (span) {
                return span.type === 'external' && span.subType === 'http';
              }).map(function (span) {
                return span.name.split(' ')[1];
              });
              createResourceTimingSpans(entries, ajaxUrls).forEach(function (span) {
                if (isValidSpan(transaction, span)) {
                  transaction.spans.push(span);
                }
              });
            }

            transaction._adjustStartToEarliestSpan();

            transaction._adjustEndToLatestSpan();

            transaction.addNavigationTimingMarks();
          }
        }

        module.exports = {
          captureHardNavigation: captureHardNavigation,
          createNavigationTimingSpans: createNavigationTimingSpans,
          createResourceTimingSpans: createResourceTimingSpans
        };
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/performance-monitoring/index.js":
      /*!******************************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/performance-monitoring/index.js ***!
        \******************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcPerformanceMonitoringIndexJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var PerformanceMonitoring = __webpack_require__(
        /*! ./performance-monitoring */
        "./node_modules/elastic-apm-js-core/src/performance-monitoring/performance-monitoring.js");

        var TransactionService = __webpack_require__(
        /*! ./transaction-service */
        "./node_modules/elastic-apm-js-core/src/performance-monitoring/transaction-service.js");

        module.exports = {
          PerformanceMonitoring: PerformanceMonitoring,
          registerServices: function registerServices(serviceFactory) {
            serviceFactory.registerServiceCreator('TransactionService', function () {
              var configService = serviceFactory.getService('ConfigService');
              var loggingService = serviceFactory.getService('LoggingService');
              return new TransactionService(loggingService, configService);
            });
            serviceFactory.registerServiceCreator('PerformanceMonitoring', function () {
              var configService = serviceFactory.getService('ConfigService');
              var loggingService = serviceFactory.getService('LoggingService');
              var apmService = serviceFactory.getService('ApmServer');
              var transactionService = serviceFactory.getService('TransactionService');
              return new PerformanceMonitoring(apmService, configService, loggingService, transactionService);
            });
          }
        };
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/performance-monitoring/performance-monitoring.js":
      /*!***********************************************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/performance-monitoring/performance-monitoring.js ***!
        \***********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcPerformanceMonitoringPerformanceMonitoringJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var _webpack_require__7 = __webpack_require__(
        /*! ../common/utils */
        "./node_modules/elastic-apm-js-core/src/common/utils.js"),
            sanitizeObjectStrings = _webpack_require__7.sanitizeObjectStrings,
            sanitizeString = _webpack_require__7.sanitizeString,
            checkSameOrigin = _webpack_require__7.checkSameOrigin,
            isDtHeaderValid = _webpack_require__7.isDtHeaderValid,
            getDtHeaderValue = _webpack_require__7.getDtHeaderValue,
            merge = _webpack_require__7.merge,
            stripQueryStringFromUrl = _webpack_require__7.stripQueryStringFromUrl,
            parseDtHeaderValue = _webpack_require__7.parseDtHeaderValue;

        var patchingSub = __webpack_require__(
        /*! ../common/patching */
        "./node_modules/elastic-apm-js-core/src/common/patching/index.js").subscription;

        var _webpack_require__8 = __webpack_require__(
        /*! ../common/patching/patch-utils */
        "./node_modules/elastic-apm-js-core/src/common/patching/patch-utils.js"),
            globalState = _webpack_require__8.globalState;

        var _webpack_require__9 = __webpack_require__(
        /*! ../common/constants */
        "./node_modules/elastic-apm-js-core/src/common/constants.js"),
            SCHEDULE = _webpack_require__9.SCHEDULE,
            INVOKE = _webpack_require__9.INVOKE,
            XMLHTTPREQUEST_SOURCE = _webpack_require__9.XMLHTTPREQUEST_SOURCE,
            FETCH_SOURCE = _webpack_require__9.FETCH_SOURCE;

        var PerformanceMonitoring =
        /*#__PURE__*/
        function () {
          function PerformanceMonitoring(apmServer, configService, loggingService, transactionService) {
            _classCallCheck(this, PerformanceMonitoring);

            this._apmServer = apmServer;
            this._configService = configService;
            this._logginService = loggingService;
            this._transactionService = transactionService;
          }

          _createClass(PerformanceMonitoring, [{
            key: "init",
            value: function init() {
              var performanceMonitoring = this;

              this._transactionService.subscribe(function (tr) {
                var payload = performanceMonitoring.createTransactionPayload(tr);

                if (payload) {
                  performanceMonitoring._apmServer.addTransaction(payload);
                }
              });

              var patchSubFn = this.getXhrPatchSubFn(this._configService, this._transactionService);
              this.cancelPatchSub = patchingSub.subscribe(patchSubFn);
            }
          }, {
            key: "getXhrPatchSubFn",
            value: function getXhrPatchSubFn() {
              var configService = this._configService;
              var transactionService = this._transactionService;
              var pm = this;
              return function (event, task) {
                if (task.source === XMLHTTPREQUEST_SOURCE && !globalState.fetchInProgress || task.source === FETCH_SOURCE) {
                  if (event === SCHEDULE && task.data) {
                    var spanName = task.data.method + ' ' + stripQueryStringFromUrl(task.data.url);
                    var span = transactionService.startSpan(spanName, 'external.http');

                    if (span) {
                      var isDtEnabled = configService.get('distributedTracing');
                      var origins = configService.get('distributedTracingOrigins');
                      var isSameOrigin = checkSameOrigin(task.data.url, window.location.href) || checkSameOrigin(task.data.url, origins);
                      var target = task.data.target;

                      if (isDtEnabled && isSameOrigin && target) {
                        pm.injectDtHeader(span, target);
                      }

                      span.addContext({
                        http: {
                          method: task.data.method,
                          url: task.data.url
                        }
                      });
                      span.sync = task.data.sync;
                      task.data.span = span;
                    }
                  } else if (event === INVOKE && task.data && task.data.span) {
                    if (typeof task.data.target.status !== 'undefined') {
                      task.data.span.addContext({
                        http: {
                          status_code: task.data.target.status
                        }
                      });
                    } else if (task.data.response) {
                      task.data.span.addContext({
                        http: {
                          status_code: task.data.response.status
                        }
                      });
                    }

                    task.data.span.end();
                  }
                }
              };
            }
          }, {
            key: "injectDtHeader",
            value: function injectDtHeader(span, target) {
              var configService = this._configService;
              var headerName = configService.get('distributedTracingHeaderName');
              var headerValueCallback = configService.get('distributedTracingHeaderValueCallback');

              if (typeof headerValueCallback !== 'function') {
                headerValueCallback = getDtHeaderValue;
              }

              var headerValue = headerValueCallback(span);
              var isHeaderValid = isDtHeaderValid(headerValue);

              if (headerName && headerValue && isHeaderValid) {
                if (typeof target.setRequestHeader === 'function') {
                  target.setRequestHeader(headerName, headerValue);
                } else if (target.headers && typeof target.headers.append === 'function') {
                  target.headers.append(headerName, headerValue);
                } else {
                  target[headerName] = headerValue;
                }
              }
            }
          }, {
            key: "extractDtHeader",
            value: function extractDtHeader(target) {
              var configService = this._configService;
              var headerName = configService.get('distributedTracingHeaderName');

              if (target) {
                return parseDtHeaderValue(target[headerName]);
              }
            }
          }, {
            key: "setTransactionContext",
            value: function setTransactionContext(transaction) {
              var context = this._configService.get('context');

              if (context) {
                transaction.addContext(context);
              }
            }
          }, {
            key: "filterTransaction",
            value: function filterTransaction(tr) {
              var performanceMonitoring = this;

              var transactionDurationThreshold = this._configService.get('transactionDurationThreshold');

              var duration = tr.duration();

              if (!duration || duration > transactionDurationThreshold || !tr.spans.length) {
                return false;
              }
              /**
               * In case of unsampled transaction, send only the transaction to apm server
               *  without any spans to reduce the payload size
               */


              if (!tr.sampled) {
                tr.resetSpans();
              }

              var browserResponsivenessInterval = this._configService.get('browserResponsivenessInterval');

              var checkBrowserResponsiveness = this._configService.get('checkBrowserResponsiveness');

              if (checkBrowserResponsiveness && !tr.isHardNavigation) {
                var buffer = performanceMonitoring._configService.get('browserResponsivenessBuffer');

                var wasBrowserResponsive = performanceMonitoring.checkBrowserResponsiveness(tr, browserResponsivenessInterval, buffer);

                if (!wasBrowserResponsive) {
                  performanceMonitoring._logginService.debug('Transaction was discarded! browser was not responsive enough during the transaction.', ' duration:', duration, ' browserResponsivenessCounter:', tr.browserResponsivenessCounter, 'interval:', browserResponsivenessInterval);

                  return false;
                }
              }

              return true;
            }
          }, {
            key: "prepareTransaction",
            value: function prepareTransaction(transaction) {
              transaction.spans.sort(function (spanA, spanB) {
                return spanA._start - spanB._start;
              });

              if (this._configService.get('groupSimilarSpans')) {
                var similarSpanThreshold = this._configService.get('similarSpanThreshold');

                transaction.spans = this.groupSmallContinuouslySimilarSpans(transaction, similarSpanThreshold);
              }

              transaction.spans = transaction.spans.filter(function (span) {
                return span.duration() > 0 && span._start >= transaction._start && span._end > transaction._start && span._start < transaction._end && span._end <= transaction._end;
              });
              this.setTransactionContext(transaction);
            }
          }, {
            key: "createTransactionDataModel",
            value: function createTransactionDataModel(transaction) {
              var configContext = this._configService.get('context');

              var stringLimit = this._configService.get('serverStringLimit');

              var transactionStart = transaction._start;
              var spans = transaction.spans.map(function (span) {
                var context;

                if (span.context) {
                  context = sanitizeObjectStrings(span.context, stringLimit);
                }

                return {
                  id: span.id,
                  transaction_id: transaction.id,
                  parent_id: span.parentId || transaction.id,
                  trace_id: transaction.traceId,
                  name: sanitizeString(span.name, stringLimit, true),
                  type: sanitizeString(span.type, stringLimit, true),
                  subType: sanitizeString(span.subType, stringLimit, true),
                  action: sanitizeString(span.action, stringLimit, true),
                  sync: span.sync,
                  start: span._start - transactionStart,
                  duration: span.duration(),
                  context: context
                };
              });
              var context = merge({}, configContext, transaction.context);
              return {
                id: transaction.id,
                trace_id: transaction.traceId,
                name: sanitizeString(transaction.name, stringLimit, false),
                type: sanitizeString(transaction.type, stringLimit, true),
                duration: transaction.duration(),
                spans: spans,
                context: context,
                marks: transaction.marks,
                span_count: {
                  started: spans.length
                },
                sampled: transaction.sampled
              };
            }
          }, {
            key: "createTransactionPayload",
            value: function createTransactionPayload(transaction) {
              this.prepareTransaction(transaction);
              var filtered = this.filterTransaction(transaction);

              if (filtered) {
                return this.createTransactionDataModel(transaction);
              }
            }
          }, {
            key: "sendTransactions",
            value: function sendTransactions(transactions) {
              var payload = transactions.map(this.createTransactionPayload.bind(this)).filter(function (tr) {
                return tr;
              });

              this._logginService.debug('Sending Transactions to apm server.', transactions.length); // todo: check if transactions are already being sent


              var promise = this._apmServer.sendTransactions(payload);

              return promise;
            }
          }, {
            key: "convertTransactionsToServerModel",
            value: function convertTransactionsToServerModel(transactions) {
              return transactions.map(this.createTransactionDataModel.bind(this));
            }
          }, {
            key: "groupSmallContinuouslySimilarSpans",
            value: function groupSmallContinuouslySimilarSpans(transaction, threshold) {
              var transDuration = transaction.duration();
              var spans = [];
              var lastCount = 1;
              transaction.spans.forEach(function (span, index) {
                if (spans.length === 0) {
                  spans.push(span);
                } else {
                  var lastSpan = spans[spans.length - 1];
                  var isContinuouslySimilar = lastSpan.type === span.type && lastSpan.subType === span.subType && lastSpan.action === span.action && lastSpan.name === span.name && span.duration() / transDuration < threshold && (span._start - lastSpan._end) / transDuration < threshold;
                  var isLastSpan = transaction.spans.length === index + 1;

                  if (isContinuouslySimilar) {
                    lastCount++;
                    lastSpan._end = span._end;
                  }

                  if (lastCount > 1 && (!isContinuouslySimilar || isLastSpan)) {
                    lastSpan.name = lastCount + 'x ' + lastSpan.name;
                    lastCount = 1;
                  }

                  if (!isContinuouslySimilar) {
                    spans.push(span);
                  }
                }
              });
              return spans;
            }
          }, {
            key: "checkBrowserResponsiveness",
            value: function checkBrowserResponsiveness(transaction, interval, buffer) {
              var counter = transaction.browserResponsivenessCounter;

              if (typeof interval === 'undefined' || typeof counter === 'undefined') {
                return true;
              }

              var duration = transaction.duration();
              var expectedCount = Math.floor(duration / interval);
              var wasBrowserResponsive = counter + buffer >= expectedCount;
              return wasBrowserResponsive;
            }
          }]);

          return PerformanceMonitoring;
        }();

        module.exports = PerformanceMonitoring;
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/performance-monitoring/span-base.js":
      /*!**********************************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/performance-monitoring/span-base.js ***!
        \**********************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcPerformanceMonitoringSpanBaseJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var _webpack_require__10 = __webpack_require__(
        /*! ../common/utils */
        "./node_modules/elastic-apm-js-core/src/common/utils.js"),
            isUndefined = _webpack_require__10.isUndefined,
            generateRandomId = _webpack_require__10.generateRandomId,
            setTag = _webpack_require__10.setTag,
            merge = _webpack_require__10.merge;

        var SpanBase =
        /*#__PURE__*/
        function () {
          // context
          function SpanBase(name, type, options) {
            _classCallCheck(this, SpanBase);

            this.options = options || {};
            this.name = name || this.options.name || 'Unknown';
            this.type = type || this.options.type || 'custom';
            this.id = this.options.id || generateRandomId(16);
            this.traceId = this.options.traceId;
            this.sampled = this.options.sampled;
            this.timestamp = this.options.timestamp || Date.now();
            this.ended = false;
            this._start = window.performance.now();
            this._end = undefined;
            this.onEnd = this.options.onEnd;
          }

          _createClass(SpanBase, [{
            key: "ensureContext",
            value: function ensureContext() {
              if (!this.context) {
                this.context = {};
              }
            }
          }, {
            key: "addTags",
            value: function addTags(tags) {
              this.ensureContext();
              var ctx = this.context;

              if (!ctx.tags) {
                ctx.tags = {};
              }

              var keys = Object.keys(tags);
              keys.forEach(function (k) {
                setTag(k, tags[k], ctx.tags);
              });
            }
          }, {
            key: "addContext",
            value: function addContext(context) {
              if (!context) return;
              this.ensureContext();
              merge(this.context, context);
            }
          }, {
            key: "end",
            value: function end() {
              if (this.ended) {
                return;
              }

              this.ended = true;
              this._end = window.performance.now();
              this.callOnEnd();
            }
          }, {
            key: "callOnEnd",
            value: function callOnEnd() {
              if (typeof this.onEnd === 'function') {
                this.onEnd(this);
              }
            }
          }, {
            key: "duration",
            value: function duration() {
              if (isUndefined(this._end) || isUndefined(this._start)) {
                return null;
              }

              var diff = this._end - this._start;
              return parseFloat(diff);
            }
          }]);

          return SpanBase;
        }();

        module.exports = SpanBase;
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/performance-monitoring/span.js":
      /*!*****************************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/performance-monitoring/span.js ***!
        \*****************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcPerformanceMonitoringSpanJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var BaseSpan = __webpack_require__(
        /*! ./span-base */
        "./node_modules/elastic-apm-js-core/src/performance-monitoring/span-base.js");

        var Span =
        /*#__PURE__*/
        function (_BaseSpan) {
          _inherits(Span, _BaseSpan);

          function Span(name, type, options) {
            var _this5;

            _classCallCheck(this, Span);

            _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Span).call(this, name, type, options));
            _this5.parentId = _this5.options.parentId;
            _this5.subType = undefined;
            _this5.action = undefined;

            if (_this5.type.indexOf('.') !== -1) {
              var fields = _this5.type.split('.', 3);

              _this5.type = fields[0];
              _this5.subType = fields[1];
              _this5.action = fields[2];
            }

            _this5.sync = _this5.options.sync;
            return _this5;
          }

          return Span;
        }(BaseSpan);

        module.exports = Span;
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/performance-monitoring/transaction-service.js":
      /*!********************************************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/performance-monitoring/transaction-service.js ***!
        \********************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcPerformanceMonitoringTransactionServiceJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var Transaction = __webpack_require__(
        /*! ./transaction */
        "./node_modules/elastic-apm-js-core/src/performance-monitoring/transaction.js");

        var utils = __webpack_require__(
        /*! ../common/utils */
        "./node_modules/elastic-apm-js-core/src/common/utils.js");

        var Subscription = __webpack_require__(
        /*! ../common/subscription */
        "./node_modules/elastic-apm-js-core/src/common/subscription.js");

        var captureHardNavigation = __webpack_require__(
        /*! ./capture-hard-navigation */
        "./node_modules/elastic-apm-js-core/src/performance-monitoring/capture-hard-navigation.js").captureHardNavigation;

        var TransactionService =
        /*#__PURE__*/
        function () {
          function TransactionService(logger, config) {
            _classCallCheck(this, TransactionService);

            if (typeof config === 'undefined') {
              logger.debug('TransactionService: config is not provided');
            }

            this._config = config;
            this._logger = logger;
            this.marks = {};
            this.currentTransaction = undefined;
            this._subscription = new Subscription();
            this._alreadyCapturedPageLoad = false;
          }

          _createClass(TransactionService, [{
            key: "shouldCreateTransaction",
            value: function shouldCreateTransaction() {
              return this._config.isActive();
            }
          }, {
            key: "getOrCreateCurrentTransaction",
            value: function getOrCreateCurrentTransaction() {
              if (!this.shouldCreateTransaction()) {
                return;
              }

              var tr = this.getCurrentTransaction();

              if (!utils.isUndefined(tr) && !tr.ended) {
                return tr;
              }

              return this.createZoneTransaction();
            }
          }, {
            key: "getCurrentTransaction",
            value: function getCurrentTransaction() {
              return this.currentTransaction;
            }
          }, {
            key: "setCurrentTransaction",
            value: function setCurrentTransaction(value) {
              this.currentTransaction = value;
            }
          }, {
            key: "createTransaction",
            value: function createTransaction(name, type, options) {
              var perfOptions = options;

              if (utils.isUndefined(perfOptions)) {
                perfOptions = this._config.config;
              }

              if (!this.shouldCreateTransaction()) {
                return;
              }

              var tr = new Transaction(name, type, perfOptions);
              this.setCurrentTransaction(tr);

              if (perfOptions.checkBrowserResponsiveness) {
                this.startCounter(tr);
              }

              return tr;
            }
          }, {
            key: "createZoneTransaction",
            value: function createZoneTransaction() {
              return this.createTransaction('ZoneTransaction', 'transaction');
            }
          }, {
            key: "startCounter",
            value: function startCounter(transaction) {
              transaction.browserResponsivenessCounter = 0;

              var interval = this._config.get('browserResponsivenessInterval');

              if (typeof interval === 'undefined') {
                this._logger.debug('browserResponsivenessInterval is undefined!');

                return;
              }

              this.runOuter(function () {
                var id = setInterval(function () {
                  if (transaction.ended) {
                    window.clearInterval(id);
                  } else {
                    transaction.browserResponsivenessCounter++;
                  }
                }, interval);
              });
            }
          }, {
            key: "sendPageLoadMetrics",
            value: function sendPageLoadMetrics(name) {
              var tr = this.startTransaction(name, 'page-load');
              tr.detectFinish();
              return tr;
            }
          }, {
            key: "capturePageLoadMetrics",
            value: function capturePageLoadMetrics(tr) {
              var self = this;

              var capturePageLoad = self._config.get('capturePageLoad');

              if (capturePageLoad && !self._alreadyCapturedPageLoad && tr.isHardNavigation) {
                tr.addMarks(self.marks);
                captureHardNavigation(tr);
                self._alreadyCapturedPageLoad = true;
                return true;
              }
            }
          }, {
            key: "startTransaction",
            value: function startTransaction(name, type, options) {
              var self = this;
              var config = self._config.config;
              var perfOptions = utils.extend({
                pageLoadTraceId: config.pageLoadTraceId,
                pageLoadSampled: config.pageLoadSampled,
                pageLoadSpanId: config.pageLoadSpanId,
                pageLoadTransactionName: config.pageLoadTransactionName,
                transactionSampleRate: config.transactionSampleRate
              }, options);

              if (!type) {
                type = 'custom';
              }

              if (!name) {
                name = 'Unknown';
              } // this will create a zone transaction if possible


              var tr = this.getOrCreateCurrentTransaction();

              if (tr) {
                if (tr.name === 'ZoneTransaction') {
                  tr.redefine(name, type, perfOptions);
                } else {
                  this._logger.debug('Ending old transaction', tr);

                  tr.end();
                  tr = this.createTransaction(name, type, perfOptions);
                }
              } else {
                return;
              }

              if (type === 'page-load') {
                tr.isHardNavigation = true;

                if (perfOptions.pageLoadTraceId) {
                  tr.traceId = perfOptions.pageLoadTraceId;
                }

                if (typeof perfOptions.pageLoadSampled !== 'undefined') {
                  tr.sampled = perfOptions.pageLoadSampled;
                }

                if (tr.name === 'Unknown' && config.pageLoadTransactionName) {
                  tr.name = config.pageLoadTransactionName;
                }
              }

              this._logger.debug('TransactionService.startTransaction', tr);

              tr.onEnd = function () {
                self.applyAsync(function () {
                  self._logger.debug('TransactionService transaction finished', tr);

                  if (!self.shouldIgnoreTransaction(tr.name)) {
                    if (type === 'page-load') {
                      if (tr.name === 'Unknown' && self._config.get('pageLoadTransactionName')) {
                        tr.name = self._config.get('pageLoadTransactionName');
                      }

                      var captured = self.capturePageLoadMetrics(tr);

                      if (captured) {
                        self.add(tr);
                      }
                    } else {
                      self.add(tr);
                    }
                  }
                });
              };

              return tr;
            }
          }, {
            key: "applyAsync",
            value: function applyAsync(fn, applyThis, applyArgs) {
              return this.runOuter(function () {
                return Promise.resolve().then(function () {
                  return fn.apply(applyThis, applyArgs);
                }, function (reason) {
                  console.log(reason);
                });
              });
            }
          }, {
            key: "shouldIgnoreTransaction",
            value: function shouldIgnoreTransaction(transactionName) {
              var ignoreList = this._config.get('ignoreTransactions');

              for (var i = 0; i < ignoreList.length; i++) {
                var element = ignoreList[i];

                if (typeof element.test === 'function') {
                  if (element.test(transactionName)) {
                    return true;
                  }
                } else if (element === transactionName) {
                  return true;
                }
              }

              return false;
            }
          }, {
            key: "startSpan",
            value: function startSpan(name, type, options) {
              var trans = this.getOrCreateCurrentTransaction();

              if (trans) {
                this._logger.debug('TransactionService.startSpan', name, type);

                var span = trans.startSpan(name, type, options);
                return span;
              }
            }
          }, {
            key: "add",
            value: function add(transaction) {
              if (!this._config.isActive()) {
                return;
              }

              this._subscription.applyAll(this, [transaction]);

              this._logger.debug('TransactionService.add', transaction);
            }
          }, {
            key: "subscribe",
            value: function subscribe(fn) {
              return this._subscription.subscribe(fn);
            }
          }, {
            key: "addTask",
            value: function addTask(taskId) {
              var tr = this.getOrCreateCurrentTransaction();

              if (tr) {
                tr.addTask(taskId);

                this._logger.debug('TransactionService.addTask', taskId);
              }

              return taskId;
            }
          }, {
            key: "removeTask",
            value: function removeTask(taskId) {
              var tr = this.getCurrentTransaction();

              if (!utils.isUndefined(tr) && !tr.ended) {
                tr.removeTask(taskId);

                this._logger.debug('TransactionService.removeTask', taskId);
              }
            }
          }, {
            key: "detectFinish",
            value: function detectFinish() {
              var tr = this.getCurrentTransaction();

              if (!utils.isUndefined(tr) && !tr.ended) {
                tr.detectFinish();

                this._logger.debug('TransactionService.detectFinish');
              }
            }
          }, {
            key: "runOuter",
            value: function runOuter(fn, applyThis, applyArgs) {
              return fn.apply(applyThis, applyArgs);
            }
          }]);

          return TransactionService;
        }();

        module.exports = TransactionService;
        /***/
      },

      /***/
      "./node_modules/elastic-apm-js-core/src/performance-monitoring/transaction.js":
      /*!************************************************************************************!*\
        !*** ./node_modules/elastic-apm-js-core/src/performance-monitoring/transaction.js ***!
        \************************************************************************************/

      /*! no static exports found */

      /***/
      function node_modulesElasticApmJsCoreSrcPerformanceMonitoringTransactionJs(module, exports, __webpack_require__) {
        /**
         * MIT License
         *
         * Copyright (c) 2017-present, Elasticsearch BV
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         *
         */
        var Span = __webpack_require__(
        /*! ./span */
        "./node_modules/elastic-apm-js-core/src/performance-monitoring/span.js");

        var SpanBase = __webpack_require__(
        /*! ./span-base */
        "./node_modules/elastic-apm-js-core/src/performance-monitoring/span-base.js");

        var _webpack_require__11 = __webpack_require__(
        /*! ../common/utils */
        "./node_modules/elastic-apm-js-core/src/common/utils.js"),
            generateRandomId = _webpack_require__11.generateRandomId,
            getNavigationTimingMarks = _webpack_require__11.getNavigationTimingMarks,
            getPaintTimingMarks = _webpack_require__11.getPaintTimingMarks,
            merge = _webpack_require__11.merge,
            extend = _webpack_require__11.extend,
            getPageMetadata = _webpack_require__11.getPageMetadata,
            removeInvalidChars = _webpack_require__11.removeInvalidChars;

        var Transaction =
        /*#__PURE__*/
        function (_SpanBase) {
          _inherits(Transaction, _SpanBase);

          function Transaction(name, type, options) {
            var _this6;

            _classCallCheck(this, Transaction);

            _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Transaction).call(this, name, type, options));
            _this6.traceId = generateRandomId();
            _this6.marks = undefined;
            _this6.spans = [];
            _this6._activeSpans = {};
            _this6._scheduledTasks = {};
            _this6.nextAutoTaskId = 0;
            _this6.isHardNavigation = false;
            _this6.sampled = Math.random() <= _this6.options.transactionSampleRate;
            return _this6;
          }

          _createClass(Transaction, [{
            key: "addNavigationTimingMarks",
            value: function addNavigationTimingMarks() {
              var marks = getNavigationTimingMarks();
              var paintMarks = getPaintTimingMarks();

              if (marks) {
                var agent = {
                  timeToFirstByte: marks.responseStart,
                  domInteractive: marks.domInteractive,
                  domComplete: marks.domComplete
                };

                if (paintMarks['first-contentful-paint']) {
                  agent.firstContentfulPaint = paintMarks['first-contentful-paint'];
                }

                this.addMarks({
                  navigationTiming: marks,
                  agent: agent
                });
              }
            }
          }, {
            key: "addMarks",
            value: function addMarks(obj) {
              this.marks = merge(this.marks || {}, obj);
            }
          }, {
            key: "mark",
            value: function mark(key) {
              var skey = removeInvalidChars(key);

              var now = window.performance.now() - this._start;

              var custom = {};
              custom[skey] = now;
              this.addMarks({
                custom: custom
              });
            }
          }, {
            key: "redefine",
            value: function redefine(name, type, options) {
              this.name = name;
              this.type = type;
              this.options = options;
            }
          }, {
            key: "startSpan",
            value: function startSpan(name, type, options) {
              if (this.ended) {
                return;
              }

              var transaction = this;
              var opts = extend({}, options);

              opts.onEnd = function (trc) {
                transaction._onSpanEnd(trc);
              };

              opts.traceId = this.traceId;
              opts.sampled = this.sampled;

              if (!opts.parentId) {
                opts.parentId = this.id;
              }

              var span = new Span(name, type, opts);
              this._activeSpans[span.id] = span;
              return span;
            }
          }, {
            key: "isFinished",
            value: function isFinished() {
              var scheduledTasks = Object.keys(this._scheduledTasks);
              return scheduledTasks.length === 0;
            }
          }, {
            key: "detectFinish",
            value: function detectFinish() {
              if (this.isFinished()) this.end();
            }
          }, {
            key: "end",
            value: function end() {
              if (this.ended) {
                return;
              }

              this.ended = true;
              this._end = window.performance.now(); // truncate active spans

              for (var sid in this._activeSpans) {
                var span = this._activeSpans[sid];
                span.type = span.type + '.truncated';
                span.end();
              }

              var metadata = getPageMetadata();
              this.addContext(metadata);

              this._adjustStartToEarliestSpan();

              this._adjustEndToLatestSpan();

              this.callOnEnd();
            }
          }, {
            key: "addTask",
            value: function addTask(taskId) {
              // todo: should not accept more tasks if the transaction is alreadyFinished]
              if (typeof taskId === 'undefined') {
                taskId = 'autoId' + this.nextAutoTaskId++;
              }

              this._scheduledTasks[taskId] = taskId;
              return taskId;
            }
          }, {
            key: "removeTask",
            value: function removeTask(taskId) {
              delete this._scheduledTasks[taskId];
              this.detectFinish();
            }
          }, {
            key: "addEndedSpans",
            value: function addEndedSpans(existingSpans) {
              this.spans = this.spans.concat(existingSpans);
            }
          }, {
            key: "resetSpans",
            value: function resetSpans() {
              this.spans = [];
            }
          }, {
            key: "_onSpanEnd",
            value: function _onSpanEnd(span) {
              this.spans.push(span); // Remove span from _activeSpans

              delete this._activeSpans[span.id];
            }
          }, {
            key: "_adjustEndToLatestSpan",
            value: function _adjustEndToLatestSpan() {
              var latestSpan = findLatestNonXHRSpan(this.spans);

              if (latestSpan) {
                this._end = latestSpan._end; // set all spans that now are longer than the transaction to
                // be truncated spans

                for (var i = 0; i < this.spans.length; i++) {
                  var span = this.spans[i];

                  if (span._end > this._end) {
                    span._end = this._end;
                    span.type = span.type + '.truncated';
                  }

                  if (span._start > this._end) {
                    span._start = this._end;
                  }
                }
              }
            }
          }, {
            key: "_adjustStartToEarliestSpan",
            value: function _adjustStartToEarliestSpan() {
              var span = getEarliestSpan(this.spans);

              if (span && span._start < this._start) {
                this._start = span._start;
              }
            }
          }]);

          return Transaction;
        }(SpanBase);

        function findLatestNonXHRSpan(spans) {
          var latestSpan = null;

          for (var i = 0; i < spans.length; i++) {
            var span = spans[i];

            if (span.type && span.type.indexOf('ext') === -1 && span.type !== 'transaction' && (!latestSpan || latestSpan._end < span._end)) {
              latestSpan = span;
            }
          }

          return latestSpan;
        }

        function getEarliestSpan(spans) {
          var earliestSpan = null;
          spans.forEach(function (span) {
            if (!earliestSpan) {
              earliestSpan = span;
            }

            if (earliestSpan && earliestSpan._start > span._start) {
              earliestSpan = span;
            }
          });
          return earliestSpan;
        }

        module.exports = Transaction;
        /***/
      },

      /***/
      "./node_modules/uuid/lib/rng-browser.js":
      /*!**********************************************!*\
        !*** ./node_modules/uuid/lib/rng-browser.js ***!
        \**********************************************/

      /*! no static exports found */

      /***/
      function node_modulesUuidLibRngBrowserJs(module, exports) {
        // Unique ID creation requires a high quality random # generator.  In the
        // browser this is a little complicated due to unknown quality of Math.random()
        // and inconsistent support for the `crypto` API.  We do the best we can via
        // feature-detection
        // getRandomValues needs to be invoked in a context where "this" is a Crypto
        // implementation. Also, find the complete implementation of crypto on IE11.
        var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);

        if (getRandomValues) {
          // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
          var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

          module.exports = function whatwgRNG() {
            getRandomValues(rnds8);
            return rnds8;
          };
        } else {
          // Math.random()-based (RNG)
          //
          // If all else fails, use Math.random().  It's fast, but is of unspecified
          // quality.
          var rnds = new Array(16);

          module.exports = function mathRNG() {
            for (var i = 0, r; i < 16; i++) {
              if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
              rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
            }

            return rnds;
          };
        }
        /***/

      },

      /***/
      "./src/services/report/kibanaApm/api.ts":
      /*!**********************************************!*\
        !*** ./src/services/report/kibanaApm/api.ts ***!
        \**********************************************/

      /*! no static exports found */

      /***/
      function srcServicesReportKibanaApmApiTs(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        function setUserInfo(userContext) {
          this.tracerTransaction.setUserInfo(userContext);
        }

        exports.setUserInfo = setUserInfo;
        ;

        function captureError(error) {
          return this.tracerTransaction.captureError(error);
        }

        exports.captureError = captureError;

        function createCustomLog(name, type, options) {
          if (type === void 0) {
            type = 'custome';
          }

          return this.tracerTransaction.createCustomEventTransaction(name, type, options);
        }

        exports.createCustomLog = createCustomLog;
        /***/
      },

      /***/
      "./src/services/report/kibanaApm/defaultConfig.ts":
      /*!********************************************************!*\
        !*** ./src/services/report/kibanaApm/defaultConfig.ts ***!
        \********************************************************/

      /*! no static exports found */

      /***/
      function srcServicesReportKibanaApmDefaultConfigTs(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = {
          //上报url
          serverUrl: null,
          //服务名
          serviceName: 'undefined',
          //版本
          agentVersion: 'undefined',
          //是否自动启动
          automaticStart: true,
          //是否启动pageload检测
          isCatchPageload: true,
          //是否启动错误捕获
          isCatchError: true,
          //上传相关配置
          transactionDurationThreshold: 999999999999999999999,
          flushInterval: 0,
          errorThrottleInterval: 0,
          transactionThrottleInterval: 0
        };
        /***/
      },

      /***/
      "./src/services/report/kibanaApm/handle.ts":
      /*!*************************************************!*\
        !*** ./src/services/report/kibanaApm/handle.ts ***!
        \*************************************************/

      /*! no static exports found */

      /***/
      function srcServicesReportKibanaApmHandleTs(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        exports._getReportContent = function (params) {
          var _self = this; //判断数据合法性


          if (!params || !params.type || !params.typeName || !params.data) {
            index_1.consoleTools.warnError('reportServer receive reportData is not right : typeName and type and data is undefined ');
            return false;
          } //处理上报


          switch (params.type) {
            case 'monitor':
              this._handleMonitor(params);

              break;
            //以下暂缺，kibanaApm暂时不处理

            case 'custome':
            case 'analyse':
            case 'performance':
            case 'undefined':
            default:
              index_1.consoleTools.warnError(params.type + 'is no handle type');
          }
        };

        exports._handleCatchError = function () {
          var _self = this;

          this.tracerTransaction.watchCatchError(function (errorMessage) {
            //通知发送错误
            _self.sendMessage({
              type: "monitor",
              typeName: 'error',
              data: errorMessage,
              isError: true
            });
          });
        };
        /***/

      },

      /***/
      "./src/services/report/kibanaApm/index.ts":
      /*!************************************************!*\
        !*** ./src/services/report/kibanaApm/index.ts ***!
        \************************************************/

      /*! no static exports found */

      /***/
      function srcServicesReportKibanaApmIndexTs(module, exports, __webpack_require__) {
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

        var defaultConfig_1 = __importDefault(__webpack_require__(
        /*! ./defaultConfig */
        "./src/services/report/kibanaApm/defaultConfig.ts"));

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        var transaction_1 = __importDefault(__webpack_require__(
        /*! ./transaction */
        "./src/services/report/kibanaApm/transaction.ts"));

        var handle_1 = __webpack_require__(
        /*! ./handle */
        "./src/services/report/kibanaApm/handle.ts");

        var api_1 = __webpack_require__(
        /*! ./api */
        "./src/services/report/kibanaApm/api.ts");

        var monitor_1 = __webpack_require__(
        /*! ./monitor */
        "./src/services/report/kibanaApm/monitor.ts"); // report Server 


        var KeepObserverKibanaApmReport =
        /** @class */
        function (_super) {
          __extends(KeepObserverKibanaApmReport, _super); //constructor


          function KeepObserverKibanaApmReport(config) {
            if (config === void 0) {
              config = {};
            }

            var _this = _super.call(this, config) || this; //method


            _this._getReportContent = handle_1._getReportContent.bind(_this);
            _this._handleCatchError = handle_1._handleCatchError.bind(_this);
            _this._handleMonitor = monitor_1._handleMonitor.bind(_this);
            _this._handleMonitorLog = monitor_1._handleMonitorLog.bind(_this);
            _this._handleMonitorNetwork = monitor_1._handleMonitorNetwork.bind(_this);
            _this._handleHtmlElementActive = monitor_1._handleHtmlElementActive.bind(_this);
            _this._handleKibanaApmTrack = monitor_1._handleKibanaApmTrack.bind(_this); //api

            _this.setUserInfo = api_1.setUserInfo.bind(_this);
            _this.captureError = api_1.captureError.bind(_this);
            _this.createCustomLog = api_1.createCustomLog.bind(_this);
            var _a = config,
                _b = _a.kibanaApmConfig,
                kibanaApmConfig = _b === void 0 ? false : _b,
                _c = _a.develop,
                develop = _c === void 0 ? false : _c; //存混合配置

            var reportConfig = kibanaApmConfig || config; //是否是开发模式

            reportConfig.develop = develop; //混合默认配置

            _this._config = index_1.Tools.extend(__assign({}, defaultConfig_1["default"]), reportConfig); //发送方法

            _this.sendMessage = function () {
              return index_1.consoleTools.warnError('sendMessage is not active, apply receive sendPipeMessage fail ');
            }; //init


            _this.tracerTransaction = new transaction_1["default"](_this._config);
            return _this;
          }
          /*
              提供一个挂载方法在注入中使用
           */


          KeepObserverKibanaApmReport.prototype.apply = function (_a) {
            var registerReciveMessage = _a.registerReciveMessage,
                sendMessage = _a.sendMessage;
            registerReciveMessage(this._getReportContent, this);
            this.sendMessage = sendMessage; //start

            var _b = this._config,
                isCatchPageload = _b.isCatchPageload,
                isCatchError = _b.isCatchError;

            if (isCatchPageload) {
              this.tracerTransaction.pageLoad();
            }

            if (isCatchError) {
              this.tracerTransaction.catchError();

              this._handleCatchError();
            }

            return {
              setUserInfo: this.setUserInfo,
              captureError: this.captureError,
              createCustomLog: this.createCustomLog
            };
          };

          return KeepObserverKibanaApmReport;
        }(index_1.KeepObserverPublic);

        exports["default"] = KeepObserverKibanaApmReport;
        /***/
      },

      /***/
      "./src/services/report/kibanaApm/monitor.ts":
      /*!**************************************************!*\
        !*** ./src/services/report/kibanaApm/monitor.ts ***!
        \**************************************************/

      /*! no static exports found */

      /***/
      function srcServicesReportKibanaApmMonitorTs(module, exports, __webpack_require__) {
        "use strict";

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

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        exports._handleMonitor = function (params) {
          var _self = this;

          switch (params.typeName) {
            case 'log':
              return _self._handleMonitorLog(params);

            case 'network':
              return _self._handleMonitorNetwork(params);

            case 'htmlElementActive':
              return _self._handleHtmlElementActive(params);

            case 'kibanaApmTrack':
              return _self._handleKibanaApmTrack(params);

            case 'error':
              return index_1.consoleTools.warnError('kibanaAPM has a error is monitor of self, is not handle monitor error report');

            default:
              return;
          }
        };

        exports._handleMonitorLog = function (reportParams) {
          var _a = reportParams.data,
              _b = _a.type,
              type = _b === void 0 ? '' : _b,
              _c = _a.data,
              data = _c === void 0 ? '' : _c;
          var taskName = reportParams.type + "-" + reportParams.typeName;
          var task = this.tracerTransaction.createCustomEventTransaction(taskName, reportParams.typeName); //tag index limt key

          task.addTags({
            type: type,
            data: data
          });
          task.end();
        };

        exports._handleMonitorNetwork = function (reportParams) {
          var _a = reportParams.data,
              _b = _a.method,
              method = _b === void 0 ? '' : _b,
              _c = _a.statusType,
              statusType = _c === void 0 ? '' : _c,
              _d = _a.type,
              type = _d === void 0 ? '' : _d,
              _e = _a.url,
              url = _e === void 0 ? '' : _e,
              _f = _a.requestHead,
              requestHead = _f === void 0 ? null : _f,
              _g = _a.responseHead,
              responseHead = _g === void 0 ? null : _g,
              _h = _a.params,
              params = _h === void 0 ? null : _h,
              _j = _a.body,
              body = _j === void 0 ? '' : _j,
              _k = _a.status,
              status = _k === void 0 ? 0 : _k,
              _l = _a.startTime,
              startTime = _l === void 0 ? 0 : _l,
              _m = _a.endTime,
              endTime = _m === void 0 ? 0 : _m,
              _o = _a.costTime,
              costTime = _o === void 0 ? 0 : _o,
              _p = _a.response,
              response = _p === void 0 ? '' : _p,
              _q = _a.responseType,
              responseType = _q === void 0 ? '' : _q,
              _r = _a.timeout,
              timeout = _r === void 0 ? 0 : _r,
              _s = _a.errorContent,
              errorContent = _s === void 0 ? '' : _s,
              _t = _a.isTimeout,
              isTimeout = _t === void 0 ? false : _t,
              _u = _a.isError,
              isError = _u === void 0 ? false : _u; // request no report 

          if (statusType === 'request') {
            return;
          }

          var taskName = reportParams.type + "-" + reportParams.typeName;
          var task = this.tracerTransaction.createCustomEventTransaction(taskName, reportParams.typeName); //tag index limt key

          task.addTags({
            method: method,
            url: url,
            statusType: statusType,
            type: type,
            requestHead: index_1.Tools.objectStringify(requestHead),
            responseHead: index_1.Tools.objectStringify(responseHead),
            params: index_1.Tools.objectStringify(params),
            body: body,
            status: status,
            startTime: startTime,
            endTime: endTime,
            costTime: costTime,
            response: response,
            responseType: responseType,
            timeout: timeout,
            errorContent: errorContent,
            isTimeout: isTimeout,
            isError: isError
          });
          task.end();
        };

        exports._handleHtmlElementActive = function (reportParams) {
          var taskName = reportParams.type + "-" + reportParams.typeName;
          var task = this.tracerTransaction.createCustomEventTransaction(taskName, reportParams.typeName);
          var _a = reportParams.data,
              type = _a.type,
              title = _a.title,
              xPath = _a.xPath,
              value = _a.value;
          task.addTags({
            type: type,
            title: title,
            xPath: xPath,
            value: value
          });
          task.end();
        };

        exports._handleKibanaApmTrack = function (reportParams) {
          var taskName = reportParams.type + "-" + reportParams.typeName;
          var task = this.tracerTransaction.createCustomEventTransaction(taskName, reportParams.typeName);
          var _a = reportParams.data,
              tags = _a.tags,
              spans = _a.spans,
              type = _a.type,
              url = _a.url;
          task.addTags(__assign({}, tags, {
            type: type,
            url: url
          }));
          spans.forEach(function (span) {
            var name = span.name,
                type = span.type,
                _a = span.tags,
                tags = _a === void 0 ? null : _a;
            var spanItem = task.startSpan(name, type);
            spanItem.addTags({
              typeName: taskName
            });

            if (tags) {
              switch (tags.type) {
                case 'log':
                  var content = tags.content;
                  spanItem.addTags({
                    type: content.type,
                    data: content.data
                  });
                  return;

                case 'error':
                  var _b = tags.content,
                      message = _b.message,
                      _c = _b.filename,
                      filename = _c === void 0 ? 'Unknown' : _c;
                  spanItem.addTags({
                    message: message,
                    filename: filename
                  });

                case 'network':
                  var _d = tags.content,
                      _e = _d.method,
                      method = _e === void 0 ? '' : _e,
                      _f = _d.url,
                      url_1 = _f === void 0 ? '' : _f,
                      _g = _d.params,
                      params = _g === void 0 ? null : _g,
                      _h = _d.body,
                      body = _h === void 0 ? '' : _h,
                      _j = _d.status,
                      status_1 = _j === void 0 ? 0 : _j,
                      _k = _d.startTime,
                      startTime = _k === void 0 ? 0 : _k,
                      _l = _d.endTime,
                      endTime = _l === void 0 ? 0 : _l,
                      _m = _d.costTime,
                      costTime = _m === void 0 ? 0 : _m,
                      _o = _d.response,
                      response = _o === void 0 ? '' : _o,
                      _p = _d.timeout,
                      timeout = _p === void 0 ? 0 : _p;
                  spanItem.addTags({
                    method: method,
                    url: url_1,
                    params: params,
                    body: body,
                    status: status_1,
                    startTime: startTime,
                    endTime: endTime,
                    costTime: costTime,
                    response: response,
                    timeout: timeout
                  });
                  return;

                case 'htmlElementActive':
                  var _q = tags.content,
                      type_1 = _q.type,
                      title = _q.title,
                      xPath = _q.xPath,
                      value = _q.value;
                  spanItem.addTags({
                    type: type_1,
                    title: title,
                    xPath: xPath,
                    value: value
                  });
                  return;
              }
            }
          });
          task.end();
        };
        /***/

      },

      /***/
      "./src/services/report/kibanaApm/transaction.ts":
      /*!******************************************************!*\
        !*** ./src/services/report/kibanaApm/transaction.ts ***!
        \******************************************************/

      /*! no static exports found */

      /***/
      function srcServicesReportKibanaApmTransactionTs(module, exports, __webpack_require__) {
        "use strict";

        var __importDefault = this && this.__importDefault || function (mod) {
          return mod && mod.__esModule ? mod : {
            "default": mod
          };
        };

        Object.defineProperty(exports, "__esModule", {
          value: true
        }); //elastic-apm-js-core 的ServiceFactory提供的TransactionService是返回的单例模式
        //暂时只能从源代码库中拉取原始Transaction

        var transaction_1 = __importDefault(__webpack_require__(
        /*! elastic-apm-js-core/src/performance-monitoring/transaction */
        "./node_modules/elastic-apm-js-core/src/performance-monitoring/transaction.js"));

        var elastic_apm_js_core_1 = __webpack_require__(
        /*! elastic-apm-js-core */
        "./node_modules/elastic-apm-js-core/src/index.js");

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        var TracerTransaction =
        /** @class */
        function () {
          function TracerTransaction(config) {
            var _this = this; //part


            this.Initialized = false; // custom transcation

            this.initCustomTransaction = function (config) {
              _this.customServiceFactory = elastic_apm_js_core_1.createServiceFactory();

              var ConfigService = _this.customServiceFactory.getService("ConfigService");

              ConfigService.setConfig(config);

              _this.customServiceFactory.init();

              _this.Customonitoring = _this.customServiceFactory.getService("PerformanceMonitoring");

              _this.Customonitoring.init();

              _this.Customonitoring.cancelPatchSub();

              _this.ApmServer = _this.serviceFactory.getService('ApmServer');
              _this.Initialized = true;
            }; // api


            this.createTransaction = function (name, type) {
              var transactionService = _this.serviceFactory.getService("TransactionService");

              return transactionService.startTransaction(name, type);
            };

            this.setUserInfo = function (userInfo) {
              var configService = _this.serviceFactory.getService("ConfigService");

              configService.setUserContext(userInfo);

              var customConfigService = _this.customServiceFactory.getService("ConfigService");

              customConfigService.setUserContext(userInfo);
            };

            this.createCustomEventTransaction = function (name, type, options) {
              var self = _this;

              if (!self.Initialized) {
                return false;
              }

              var _option = index_1.Tools.extend({
                transactionSampleRate: 1
              }, options);

              var transaction = new transaction_1["default"](name, type, _option); //添加onEnd事件

              Object.defineProperty(transaction, 'onEnd', {
                enumerable: false,
                configurable: false,
                writable: false,
                value: function value() {
                  if (this instanceof transaction_1["default"]) {
                    self.Customonitoring.prepareTransaction(this);
                    var payload = self.Customonitoring.createTransactionDataModel(this);
                    self.ApmServer.addTransaction(payload);
                  }
                }
              });
              return transaction;
            };

            this.serviceFactory = elastic_apm_js_core_1.createServiceFactory();
            this.configService = this.serviceFactory.getService("ConfigService");
            this.configService.setConfig(config);
            this.serviceFactory.init(); //customTransaction

            this.initCustomTransaction(config);
          }

          TracerTransaction.prototype.pageLoad = function () {
            //加载load监听
            //挂载第一次pageload
            var performanceMonitoring = this.serviceFactory.getService("PerformanceMonitoring");
            performanceMonitoring.init(); //send page load

            if (this.configService.get("sendPageLoadTransaction")) {
              var transactionService = this.serviceFactory.getService("TransactionService");
              var tr = transactionService.startTransaction(window.location.href, "page-load");

              var sendPageLoadMetrics = function sendPageLoadMetrics() {
                // to make sure PerformanceTiming.loadEventEnd has a value
                setTimeout(function () {
                  if (tr) {
                    tr.detectFinish(); //取消elastic-apm自带的log以及xhr相关patch

                    performanceMonitoring.cancelPatchSub();
                  }
                });
              };

              if (document.readyState === "complete") {
                sendPageLoadMetrics();
              } else {
                window.addEventListener("load", sendPageLoadMetrics.bind(this));
              }
            }
          };

          TracerTransaction.prototype.catchError = function () {
            var errorLogging = this.serviceFactory.getService("ErrorLogging");
            errorLogging.registerGlobalEventListener();
          };

          TracerTransaction.prototype.captureError = function (error) {
            var errorLogging = this.serviceFactory.getService('ErrorLogging');
            return errorLogging.logError(error);
          };

          TracerTransaction.prototype.watchCatchError = function (callback) {
            var errorLogging = this.serviceFactory.getService("ErrorLogging");
            var logErrorEventPatch = errorLogging.logErrorEvent;

            errorLogging.logErrorEvent = function (errorEvent, sendImmediately) {
              callback(errorEvent);
              return logErrorEventPatch.call(errorLogging, errorEvent, sendImmediately);
            };
          };

          return TracerTransaction;
        }();

        exports["default"] = TracerTransaction;
        /***/
      },

      /***/
      "@util/index":
      /*!******************************!*\
        !*** external "@util/index" ***!
        \******************************/

      /*! no static exports found */

      /***/
      function utilIndex(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__util_index__;
        /***/
      }
      /******/

    })
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(0));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i, a; }
})(this, function (__WEBPACK_EXTERNAL_MODULE__util_index__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/services/middleware/kibanaApmTrack/index.ts");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./src/services/middleware/kibanaApmTrack/api.ts":
      /*!*******************************************************!*\
        !*** ./src/services/middleware/kibanaApmTrack/api.ts ***!
        \*******************************************************/

      /*! no static exports found */

      /***/
      function srcServicesMiddlewareKibanaApmTrackApiTs(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        exports.cancelTrack = function () {
          this.isCancelTrack = true;
        };

        exports.startTrack = function () {
          this.isCancelTrack = false;
        };

        exports.cancelPatch = function () {
          window.removeEventListener("hashchange", this._handleHashPageChange);
          window.history.pushState = this._pushState;
          window.history.replaceState = this._replaceState;
        };
        /***/

      },

      /***/
      "./src/services/middleware/kibanaApmTrack/defaultConfig.ts":
      /*!*****************************************************************!*\
        !*** ./src/services/middleware/kibanaApmTrack/defaultConfig.ts ***!
        \*****************************************************************/

      /*! no static exports found */

      /***/
      function srcServicesMiddlewareKibanaApmTrackDefaultConfigTs(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = {
          //是否中断掉正常的catch内容
          isInterruptNormal: false,
          //是否自动开始上报
          automaticStart: true,
          //上报时间format
          reportDateFormat: 'yyyy-MM-dd hh:mm:ss'
        };
        /***/
      },

      /***/
      "./src/services/middleware/kibanaApmTrack/handleMiddle.ts":
      /*!****************************************************************!*\
        !*** ./src/services/middleware/kibanaApmTrack/handleMiddle.ts ***!
        \****************************************************************/

      /*! no static exports found */

      /***/
      function srcServicesMiddlewareKibanaApmTrackHandleMiddleTs(module, exports, __webpack_require__) {
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

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        exports._handleReciceReportMessage = function (interrupt, next) {
          var _this = this;

          return function () {
            var params = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              params[_i] = arguments[_i];
            }

            var isInterruptNormal = _this._config.isInterruptNormal;

            var _a = __read(params, 1),
                _b = _a[0],
                message = _b === void 0 ? {} : _b;

            var _c = message.type,
                type = _c === void 0 ? false : _c,
                typeName = message.typeName,
                _d = message.isError,
                isError = _d === void 0 ? false : _d; //中间件执行中会屏蔽发起的sendMessage

            _this.isSendlock = true; //valid message

            if (_this.isCancelTrack || !type || !index_1.Tools.isString(type) || type !== 'monitor') {
              next.apply(void 0, __spread(params));
              return;
            } //handle message


            switch (typeName) {
              case 'log':
                _this._handleTrackLog(message);

                break;

              case 'network':
                _this._handleTrackNetwork(message);

                break;

              case 'htmlElementActive':
                _this._handleTrackHtmlElementActive(message);

                break;

              case 'error':
                _this._handleTrackError(message);

                break;

              case 'kibanaApmTrack':
                return next.apply(void 0, __spread(params));

              default:
                index_1.consoleTools.warnError("is no support track typeName:" + typeName);
                return next.apply(void 0, __spread(params));
            }

            return isInterruptNormal && !isError ? interrupt(false) : next.apply(void 0, __spread(params));
          };
        };

        exports._handleTrackLog = function (params) {
          this.trackList.push(params); //判断是否是error类型

          var type = params.data.type;

          if (type === 'error') {
            this.isWaitSend = 'pageError';
            this.errorContent = index_1.Tools.objectStringify(params.data);

            this._handleSendTrackMessage();
          }
        };

        exports._handleTrackNetwork = function (params) {
          this.trackList.push(params); //判断是否是请求出错

          var isError = params.data.isError;

          if (isError) {
            this.isWaitSend = 'pageError';
            this.errorContent = index_1.Tools.objectStringify(params.data);

            this._handleSendTrackMessage();
          }
        };

        exports._handleTrackHtmlElementActive = function (params) {
          this.trackList.push(params);
        };

        exports._handleTrackError = function (params) {
          this.trackList.push(params);
          this.isWaitSend = 'pageError';
          this.errorContent = index_1.Tools.objectStringify(params.data);

          this._handleSendTrackMessage();
        }; //send 


        exports._handleSendTrackMessage = function () {
          var reportData = null;
          var develop = this._config.develop;

          switch (this.isWaitSend) {
            case 'pageError':
              if (this.isSendlock) return;
              this.isWaitSend = false;
              reportData = this._handleCreateReport('pageError'); //clear

              this.errorContent = '';
              break;

            case 'pageHashChange':
              if (this.isSendlock) return;
              this.isWaitSend = false;
              reportData = this._handleCreateReport('pageHashChange'); //update url

              this._pageStart();

              break;
          }

          if (!reportData) return;

          if (reportData.data && reportData.data.type === 'pageHashChange') {
            this.trackList = [];
            this.isPageChangeHandle = false;
          } //send


          if (develop) {
            index_1.consoleTools.log('track-reportData', reportData);
          }

          this.sendMessage(reportData);
        }; //create Data


        exports._handleCreateReport = function (type) {
          var _this = this;

          var _a = this._config,
              reportDateFormat = _a.reportDateFormat,
              isInterruptNormal = _a.isInterruptNormal;
          var now = new Date().getTime();
          var trackInfo = {
            type: type,
            url: window.location.href,
            tags: null,
            spans: []
          };

          switch (type) {
            case 'pageHashChange':
              trackInfo['tags'] = this.pageInfo;
              break;

            case 'pageError':
              trackInfo['tags'] = {
                startUrl: this.pageInfo.startUrl,
                startDate: this.pageInfo.startDate,
                findErrorDate: index_1.Tools.dateFormat(now, reportDateFormat),
                errorContent: this.errorContent
              };
              break;

            default:
              return false;
          }

          trackInfo['spans'] = this.trackList.map(function (span) {
            var reportDateFormat = _this._config.reportDateFormat;
            var typeName = span.typeName,
                reportTime = span.reportTime,
                data = span.data;
            var name = 'undefined';
            var type = span.type + "-" + typeName + ":" + index_1.Tools.dateFormat(reportTime, reportDateFormat);
            var tags = null;

            switch (typeName) {
              case 'log':
                name = data.type + "->" + index_1.Tools.substringLimt(data.data);
                tags = {
                  type: typeName,
                  content: data
                };
                break;

              case 'network':
                var _a = data.method,
                    method = _a === void 0 ? "" : _a,
                    _b = data.url,
                    url = _b === void 0 ? "" : _b,
                    _c = data.params,
                    params = _c === void 0 ? null : _c,
                    _d = data.status,
                    status_1 = _d === void 0 ? 0 : _d,
                    _e = data.response,
                    response = _e === void 0 ? "" : _e,
                    _f = data.body,
                    body = _f === void 0 ? "" : _f,
                    _g = data.startTime,
                    startTime = _g === void 0 ? 0 : _g,
                    _h = data.endTime,
                    endTime = _h === void 0 ? 0 : _h,
                    _j = data.costTime,
                    costTime = _j === void 0 ? 0 : _j,
                    _k = data.timeout,
                    timeout = _k === void 0 ? undefined : _k;
                name = data.type + "->" + method + ":" + url + "(" + data.statusType + ":" + status_1 + (response ? "->" + index_1.Tools.substringLimt(response) + ")" : ')');
                tags = {
                  type: typeName,
                  content: {
                    method: method,
                    url: url,
                    params: params ? index_1.Tools.objectStringify(params) : '',
                    body: body,
                    status: status_1,
                    startTime: startTime,
                    endTime: endTime,
                    costTime: costTime,
                    response: response,
                    timeout: timeout
                  }
                };
                break;

              case 'htmlElementActive':
                name = data.type + "->" + data.title + "(xpath:" + data.xPath + ")" + (data.type === 'change' ? '->' + index_1.Tools.substringLimt(data.value) : '');
                tags = {
                  type: typeName,
                  content: data
                };
                break;

              case 'error':
                name = "Error->" + data.message + (data.filename ? '(' + data.filename + ')' : '');
                tags = {
                  type: typeName,
                  content: {
                    message: data.message,
                    filename: data.filename
                  }
                };
                break;
            }

            return {
              name: name,
              type: type,
              tags: isInterruptNormal ? tags : null
            };
          });
          return {
            type: 'monitor',
            typeName: 'kibanaApmTrack',
            data: trackInfo,
            isError: type === 'pageError' ? true : false
          };
        };
        /***/

      },

      /***/
      "./src/services/middleware/kibanaApmTrack/index.ts":
      /*!*********************************************************!*\
        !*** ./src/services/middleware/kibanaApmTrack/index.ts ***!
        \*********************************************************/

      /*! no static exports found */

      /***/
      function srcServicesMiddlewareKibanaApmTrackIndexTs(module, exports, __webpack_require__) {
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

        var defaultConfig_1 = __importDefault(__webpack_require__(
        /*! ./defaultConfig */
        "./src/services/middleware/kibanaApmTrack/defaultConfig.ts"));

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        var handleMiddle_1 = __webpack_require__(
        /*! ./handleMiddle */
        "./src/services/middleware/kibanaApmTrack/handleMiddle.ts");

        var pageHashChange_1 = __webpack_require__(
        /*! ./pageHashChange */
        "./src/services/middleware/kibanaApmTrack/pageHashChange.ts");

        var api_1 = __webpack_require__(
        /*! ./api */
        "./src/services/middleware/kibanaApmTrack/api.ts");

        var KeepObserverMiddlewareKibanaApmTrack =
        /** @class */
        function (_super) {
          __extends(KeepObserverMiddlewareKibanaApmTrack, _super); //构造函数


          function KeepObserverMiddlewareKibanaApmTrack(config) {
            if (config === void 0) {
              config = {};
            }

            var _this = _super.call(this, config) || this;

            _this.isSendlock = true;
            _this.isWaitSend = false;
            _this.isPageChangeHandle = false;
            _this.isCancelTrack = true;
            _this.trackInfo = undefined;
            _this.pageInfo = null;
            _this.errorContent = '';
            _this.trackList = [];
            _this.resgisterPageHashChangeEventListener = pageHashChange_1.resgisterPageHashChangeEventListener.bind(_this);
            _this.checkPageHashUrlChange = pageHashChange_1.checkPageHashUrlChange.bind(_this);
            _this._handleHashPageChange = pageHashChange_1._handleHashPageChange.bind(_this);
            _this._pageStart = pageHashChange_1._pageStart.bind(_this);
            _this._pageHashNext = pageHashChange_1._pageHashNext.bind(_this); //send

            _this._handleSendTrackMessage = handleMiddle_1._handleSendTrackMessage.bind(_this);
            _this._handleCreateReport = handleMiddle_1._handleCreateReport.bind(_this); //method

            _this._handleReciceReportMessage = handleMiddle_1._handleReciceReportMessage.bind(_this);
            _this._handleTrackLog = handleMiddle_1._handleTrackLog.bind(_this);
            _this._handleTrackNetwork = handleMiddle_1._handleTrackNetwork.bind(_this);
            _this._handleTrackHtmlElementActive = handleMiddle_1._handleTrackHtmlElementActive.bind(_this);
            _this._handleTrackError = handleMiddle_1._handleTrackError.bind(_this); //api

            _this.cancelTrack = api_1.cancelTrack.bind(_this);
            _this.startTrack = api_1.startTrack.bind(_this);
            _this.cancelPatch = api_1.cancelPatch.bind(_this);
            var _a = config.develop,
                develop = _a === void 0 ? false : _a; //存混合配置

            _this._config = index_1.Tools.extend(__assign({}, defaultConfig_1["default"]), __assign({}, config, {
              develop: develop
            }));
            var reportDateFormat = _this._config.reportDateFormat;
            _this.pageInfo = {
              startUrl: '',
              startDate: index_1.Tools.dateFormat(new Date().getTime(), reportDateFormat),
              nextUrl: '',
              nextDate: 0
            }; //发送方法

            _this.sendMessage = function () {
              return index_1.consoleTools.warnError('sendMessage is not active, apply receive sendPipeMessage fail ');
            }; //注册pageHashChange事件


            _this.resgisterPageHashChangeEventListener();

            return _this;
          } //提供一个挂载入口


          KeepObserverMiddlewareKibanaApmTrack.prototype.apply = function (_a) {
            var _this = this;

            var sendMessage = _a.sendMessage,
                useExtendMiddle = _a.useExtendMiddle,
                registerSendDoneCallback = _a.registerSendDoneCallback;
            var automaticStart = this._config.automaticStart;
            this.sendMessage = sendMessage; //receive message

            var _b = __read(this._publicMiddleScopeNames, 1),
                sendMessageName = _b[0];

            useExtendMiddle(sendMessageName, this._handleReciceReportMessage); //send wait

            registerSendDoneCallback(function () {
              _this.isSendlock = false;
              if (!_this.isWaitSend) return;

              _this._handleSendTrackMessage();
            });

            if (automaticStart) {
              this.startTrack();
            }

            return {
              cancelTrack: this.cancelTrack,
              startTrack: this.startTrack,
              cancelHashChangePatch: this.cancelPatch
            };
          };

          return KeepObserverMiddlewareKibanaApmTrack;
        }(index_1.KeepObserverPublic);

        exports["default"] = KeepObserverMiddlewareKibanaApmTrack;
        /***/
      },

      /***/
      "./src/services/middleware/kibanaApmTrack/pageHashChange.ts":
      /*!******************************************************************!*\
        !*** ./src/services/middleware/kibanaApmTrack/pageHashChange.ts ***!
        \******************************************************************/

      /*! no static exports found */

      /***/
      function srcServicesMiddlewareKibanaApmTrackPageHashChangeTs(module, exports, __webpack_require__) {
        "use strict";

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

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        exports.resgisterPageHashChangeEventListener = function () {
          //监听相关内容
          var self = this; //hashchange

          window.addEventListener("hashchange", this._handleHashPageChange); //pushStateModel  replaceStateModel

          self._pushState = window.history.pushState;

          window.history.pushState = function (state, title, url) {
            var oldURL = window.location.href;
            var newURL = url ? url : oldURL; // hook 

            self._handleHashPageChange({
              eventName: 'pushState',
              oldURL: oldURL,
              newURL: newURL,
              state: state,
              title: title
            }); //run 


            return self._pushState.apply(window.history, arguments);
          };

          self._replaceState = window.history.replaceState;

          window.history.replaceState = function (state, title, url) {
            var oldURL = window.location.href;
            var newURL = url ? url : oldURL; // hook 

            self._handleHashPageChange({
              eventName: 'replaceState',
              oldURL: oldURL,
              newURL: newURL,
              state: state,
              title: title
            });

            return self._replaceState.apply(window.history, arguments);
          }; //start receive


          this._pageStart();
        };

        exports.checkPageHashUrlChange = function (oldUrl, newUrL) {
          //其中某一次不存在
          if (!oldUrl || !newUrL || !index_1.Tools.isString(oldUrl) || !index_1.Tools.isString(newUrL)) {
            return false;
          } //has path没有变化


          var newPath = newUrL.indexOf('?') > -1 ? newUrL.split('?')[0] : newUrL;
          var oldPath = oldUrl.indexOf('?') > -1 ? oldUrl.split('?')[0] : oldUrl;

          if (newPath === oldPath) {
            return false;
          }

          return true;
        };

        exports._handleHashPageChange = function (event) {
          if (this.isPageChangeHandle) {
            return false;
          }

          var newURL = event.newURL,
              oldURL = event.oldURL;
          if (this.isCancelTrack || !this.checkPageHashUrlChange(oldURL, newURL)) return; // next page

          this.isPageChangeHandle = true;

          this._pageHashNext(newURL);
        }; // page status


        exports._pageStart = function () {
          var reportDateFormat = this._config.reportDateFormat;
          var startUrl = window.location.href;
          var startDate = index_1.Tools.dateFormat(new Date().getTime(), reportDateFormat);
          this.pageInfo = __assign({}, this.pageInfo, {
            startUrl: startUrl,
            startDate: startDate
          });
        };

        exports._pageHashNext = function (nextHash) {
          var reportDateFormat = this._config.reportDateFormat;
          var nextUrl = nextHash || window.location.href;
          var nextDate = index_1.Tools.dateFormat(new Date().getTime(), reportDateFormat);
          this.pageInfo = __assign({}, this.pageInfo, {
            nextUrl: nextUrl,
            nextDate: nextDate
          }); //开启pageHashChange上报
          //如果有pageError未发生的就忽略

          if (!this.isWaitSend) {
            this.isWaitSend = 'pageHashChange';

            this._handleSendTrackMessage();
          }
        };
        /***/

      },

      /***/
      "@util/index":
      /*!******************************!*\
        !*** external "@util/index" ***!
        \******************************/

      /*! no static exports found */

      /***/
      function utilIndex(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__util_index__;
        /***/
      }
      /******/

    })
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(0));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i, a; }
})(this, function (__WEBPACK_EXTERNAL_MODULE__util_index__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/services/monitor/htmlElementActive/index.ts");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./src/services/monitor/htmlElementActive/api.ts":
      /*!*******************************************************!*\
        !*** ./src/services/monitor/htmlElementActive/api.ts ***!
        \*******************************************************/

      /*! no static exports found */

      /***/
      function srcServicesMonitorHtmlElementActiveApiTs(module, exports, __webpack_require__) {
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
        /***/

      },

      /***/
      "./src/services/monitor/htmlElementActive/defaultConfig.ts":
      /*!*****************************************************************!*\
        !*** ./src/services/monitor/htmlElementActive/defaultConfig.ts ***!
        \*****************************************************************/

      /*! no static exports found */

      /***/
      function srcServicesMonitorHtmlElementActiveDefaultConfigTs(module, exports, __webpack_require__) {
        "use strict";
        /*
         
        observer htmlElement 实例默认配置数据
        */

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = {
          //xpath
          xpathFlag: 'KO_tracer_xPathFlag',
          //开启追踪
          elementTrackFlag: 'KO-tracer-flag',
          //全量捕获
          isGlobalElementActionCatch: false,
          //是否自动开始上报
          automaticStart: true
        };
        /***/
      },

      /***/
      "./src/services/monitor/htmlElementActive/handle.ts":
      /*!**********************************************************!*\
        !*** ./src/services/monitor/htmlElementActive/handle.ts ***!
        \**********************************************************/

      /*! no static exports found */

      /***/
      function srcServicesMonitorHtmlElementActiveHandleTs(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        var CN_CodeReg = /[\u4e00-\u9fa5\w]/ig;
        var Clear_CN_CodeReg = /[^\u4e00-\u9fa5\w]/ig;

        exports.queryFlagElement = function (el) {
          var elementTrackFlag = this._config.elementTrackFlag;

          if (!index_1.Tools.isElement(el) || el.tagName.toLowerCase() === 'body') {
            return false;
          }

          var flag = el.getAttribute(elementTrackFlag);
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

        exports.createXPath = function (element, init) {
          var xpathFlag = this._config.xpathFlag; //id

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
          element.setAttribute(xpathFlag, true);

          for (var i = 0, len = brotherList.length; i < len; i++) {
            var item = brotherList[i];

            if (item.getAttribute(xpathFlag)) {
              element.removeAttribute(xpathFlag);
              return this.createXPath(element.parentNode) + "/" + element.nodeName.toLowerCase() + (index > 1 || !init && len > 1 && index === 1 ? '[' + index + ']' : '');
            } else if (item.nodeType == 1 && item.nodeName.toLowerCase() === element.nodeName.toLowerCase()) {
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

          content = content.length > 30 ? content.substring(0, 30) + '...' : content;
          return type + ':' + content;
        };

        exports.createSendMessage = function (type, element) {
          var title = this.createTitle(element);
          var xPath = this.createXPath(element, true
          /*init*/
          );
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
        /***/

      },

      /***/
      "./src/services/monitor/htmlElementActive/index.ts":
      /*!*********************************************************!*\
        !*** ./src/services/monitor/htmlElementActive/index.ts ***!
        \*********************************************************/

      /*! no static exports found */

      /***/
      function srcServicesMonitorHtmlElementActiveIndexTs(module, exports, __webpack_require__) {
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

        var defaultConfig_1 = __importDefault(__webpack_require__(
        /*! ./defaultConfig */
        "./src/services/monitor/htmlElementActive/defaultConfig.ts"));

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        var api_1 = __webpack_require__(
        /*! ./api */
        "./src/services/monitor/htmlElementActive/api.ts");

        var handle_1 = __webpack_require__(
        /*! ./handle */
        "./src/services/monitor/htmlElementActive/handle.ts");

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
            var htmlElementConfig = htmlElementCustom || config; //存混合配置

            _this._config = index_1.Tools.extend(__assign({}, defaultConfig_1["default"]), __assign({}, htmlElementConfig, {
              develop: develop
            })); //是否开始监听

            _this.isObserver = false; //发送方法

            _this.sendMessage = function () {
              return index_1.consoleTools.warnError('sendMessage is not active, apply receive sendPipeMessage fail ');
            };

            return _this;
          } //提供一个挂载入口


          KeepObserverHtmlElementActive.prototype.apply = function (_a) {
            var sendMessage = _a.sendMessage;
            var automaticStart = this._config.automaticStart;
            this.sendMessage = sendMessage; //开始

            if (automaticStart) {
              this.startObserver();
            }

            return {
              htmlElementActiveStop: this.stopObserver,
              htmlElementActiveStart: this.startObserver
            };
          };

          return KeepObserverHtmlElementActive;
        }(index_1.KeepObserverPublic);

        exports["default"] = KeepObserverHtmlElementActive;
        /***/
      },

      /***/
      "@util/index":
      /*!******************************!*\
        !*** external "@util/index" ***!
        \******************************/

      /*! no static exports found */

      /***/
      function utilIndex(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__util_index__;
        /***/
      }
      /******/

    })
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(0));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i, a; }
})(this, function (__WEBPACK_EXTERNAL_MODULE__util_index__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/services/monitor/network/index.ts");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./src/services/monitor/network/api.ts":
      /*!*********************************************!*\
        !*** ./src/services/monitor/network/api.ts ***!
        \*********************************************/

      /*! no static exports found */

      /***/
      function srcServicesMonitorNetworkApiTs(module, exports, __webpack_require__) {
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
        /***/

      },

      /***/
      "./src/services/monitor/network/defaultConfig.ts":
      /*!*******************************************************!*\
        !*** ./src/services/monitor/network/defaultConfig.ts ***!
        \*******************************************************/

      /*! no static exports found */

      /***/
      function srcServicesMonitorNetworkDefaultConfigTs(module, exports, __webpack_require__) {
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
        /***/
      },

      /***/
      "./src/services/monitor/network/handle.ts":
      /*!************************************************!*\
        !*** ./src/services/monitor/network/handle.ts ***!
        \************************************************/

      /*! no static exports found */

      /***/
      function srcServicesMonitorNetworkHandleTs(module, exports, __webpack_require__) {
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

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        var networkTool = __importStar(__webpack_require__(
        /*! ./tool */
        "./src/services/monitor/network/tool.ts"));
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
        /***/

      },

      /***/
      "./src/services/monitor/network/index.ts":
      /*!***********************************************!*\
        !*** ./src/services/monitor/network/index.ts ***!
        \***********************************************/

      /*! no static exports found */

      /***/
      function srcServicesMonitorNetworkIndexTs(module, exports, __webpack_require__) {
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

        var defaultConfig_1 = __importDefault(__webpack_require__(
        /*! ./defaultConfig */
        "./src/services/monitor/network/defaultConfig.ts"));

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        var api_1 = __webpack_require__(
        /*! ./api */
        "./src/services/monitor/network/api.ts");

        var handle_1 = __webpack_require__(
        /*! ./handle */
        "./src/services/monitor/network/handle.ts"); // 获取系统信息


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
        /***/
      },

      /***/
      "./src/services/monitor/network/tool.ts":
      /*!**********************************************!*\
        !*** ./src/services/monitor/network/tool.ts ***!
        \**********************************************/

      /*! no static exports found */

      /***/
      function srcServicesMonitorNetworkToolTs(module, exports, __webpack_require__) {
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
        /***/
      },

      /***/
      "@util/index":
      /*!******************************!*\
        !*** external "@util/index" ***!
        \******************************/

      /*! no static exports found */

      /***/
      function utilIndex(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__util_index__;
        /***/
      }
      /******/

    })
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(0));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i, a; }
})(this, function (__WEBPACK_EXTERNAL_MODULE__util_index__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/services/monitor/log/index.ts");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./src/services/monitor/log/api.ts":
      /*!*****************************************!*\
        !*** ./src/services/monitor/log/api.ts ***!
        \*****************************************/

      /*! no static exports found */

      /***/
      function srcServicesMonitorLogApiTs(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");
        /*
            停止监听
         */


        exports.stopObserver = function () {
          if (!this.console || this.console && index_1.Tools.isEmptyObject(this.console)) {
            return this.console = null;
          }

          window.console.log = this.console.log;
          window.console.error = this.console.error;
          window.console.info = this.console.info;
          window.console.debug = this.console.debug;
          window.console.warn = this.console.warn;
          window.console.time = this.console.time;
          window.console.timeEnd = this.console.timeEnd;
          window.console.clear = this.console.clear;
          this.console = null;
        };
        /*
            开始监听
         */


        exports.startObserver = function () {
          var _this = this;

          if (this.console) {
            return;
          }

          this.console = {};
          setTimeout(function () {
            //启动监听
            if (!index_1.Tools.isEmptyObject(_this.console) || !_this.console) {
              return;
            }

            _this._handleInit();
          });
        };
        /***/

      },

      /***/
      "./src/services/monitor/log/defaultConfig.ts":
      /*!***************************************************!*\
        !*** ./src/services/monitor/log/defaultConfig.ts ***!
        \***************************************************/

      /*! no static exports found */

      /***/
      function srcServicesMonitorLogDefaultConfigTs(module, exports, __webpack_require__) {
        "use strict";
        /*
         
            observer log 实例默认配置数据
         */

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = {
          //是否打印输出
          isPrint: true,
          //是否自动开始上报
          automaticStart: true
        };
        /***/
      },

      /***/
      "./src/services/monitor/log/handle.ts":
      /*!********************************************!*\
        !*** ./src/services/monitor/log/handle.ts ***!
        \********************************************/

      /*! no static exports found */

      /***/
      function srcServicesMonitorLogHandleTs(module, exports, __webpack_require__) {
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

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");
        /*
            初始化替换相关信息
        */


        exports._handleInit = function () {
          var _self = this;

          var isPrint = this._config.isPrint; //替换window.console变量

          var baseLogList = ['log', 'info', 'warn', 'debug', 'error'];
          _self.console = {};

          if (!window.console) {
            window.console = {};
          }

          baseLogList.map(function (method) {
            _self.console[method] = window.console[method];
          });
          _self.console.time = window.console.time;
          _self.console.timeEnd = window.console.timeEnd;
          _self.console.clear = window.console.clear;
          baseLogList.map(function (method) {
            window.console[method] = function () {
              var args = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }

              var _a; //是否打印


              if (isPrint && _self.console[method] && index_1.Tools.isFunction(_self.console[method])) {
                (_a = _self.console)[method].apply(_a, __spread(args));
              } //交给拦截处理信息


              _self._handleMessage(method, args);
            };
          }); //处理time timeEnd clear

          var timeLog = {};

          window.console.time = function (label) {
            timeLog[label] = Date.now();
          };

          window.console.timeEnd = function (label) {
            var pre = timeLog[label];
            var type = 'timeEnd';

            if (pre) {
              var content = label + ':' + (Date.now() - pre) + 'ms';

              _self._handleMessage(type, [content]); //是否打印


              if (isPrint && _self.console.log && index_1.Tools.isFunction(_self.console.log)) {
                _self.console.log(content);
              }
            } else {
              var content = label + ': 0ms';

              _self._handleMessage(type, [content]); //是否打印


              if (isPrint && _self.console.log && index_1.Tools.isFunction(_self.console.log)) {
                _self.console.log(content);
              }
            }
          };

          window.console.clear = function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            _self._handleMessage('clear', args);

            _self.console.clear.apply(window.console, args);
          };
        };
        /*
            处理打印信息
            上报报文如下
            @: type string  (log|info|debug.... jsError)
            @: data string  (JSON格式对象报文)
         */


        exports._handleMessage = function (type, agrs) {
          var _self = this;

          var reportData = {
            type: '',
            data: ''
          };
          var separate = ',';
          var data = '['; //agrs不是数组 或是空数组 则不处理

          if (!index_1.Tools.isArray(agrs) || agrs.length === 0) {
            return false;
          }

          reportData.type = type; //直接转成字符串形式

          agrs.forEach(function (el, index) {
            try {
              if (index_1.Tools.isObject(el) || index_1.Tools.isArray(el)) {
                data += "" + (index === 0 ? '' : separate) + index_1.Tools.objectStringify(el);
              } else {
                data += (index === 0 ? '' : separate) + "\"" + index_1.Tools.toString(el) + "\"";
              }
            } catch (err) {
              data += (index === 0 ? '' : separate) + "\"toString is err:" + index_1.Tools.toString(err).replace(/[\s\r\n\t]/g, '') + "\"";
            }
          });
          data += ']';
          reportData.data = data; //上报

          _self.sendMessage({
            type: "monitor",
            typeName: 'log',
            data: reportData,
            isError: reportData.type === 'error' ? true : false
          });
        };
        /***/

      },

      /***/
      "./src/services/monitor/log/index.ts":
      /*!*******************************************!*\
        !*** ./src/services/monitor/log/index.ts ***!
        \*******************************************/

      /*! no static exports found */

      /***/
      function srcServicesMonitorLogIndexTs(module, exports, __webpack_require__) {
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

        var defaultConfig_1 = __importDefault(__webpack_require__(
        /*! ./defaultConfig */
        "./src/services/monitor/log/defaultConfig.ts"));

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        var api_1 = __webpack_require__(
        /*! ./api */
        "./src/services/monitor/log/api.ts");

        var handle_1 = __webpack_require__(
        /*! ./handle */
        "./src/services/monitor/log/handle.ts"); // 获取系统信息


        var KeepObserverLog =
        /** @class */
        function (_super) {
          __extends(KeepObserverLog, _super); //构造函数


          function KeepObserverLog(config) {
            if (config === void 0) {
              config = {};
            }

            var _this = _super.call(this, config) || this; //method


            _this._handleInit = handle_1._handleInit.bind(_this);
            _this._handleMessage = handle_1._handleMessage.bind(_this);
            _this.stopObserver = api_1.stopObserver.bind(_this);
            _this.startObserver = api_1.startObserver.bind(_this); //初始化上传相关实例

            var _a = config,
                _b = _a.logCustom,
                logCustom = _b === void 0 ? false : _b,
                _c = _a.develop,
                develop = _c === void 0 ? false : _c;
            var logConfig = logCustom || config; //存混合配置

            _this._config = index_1.Tools.extend(__assign({}, defaultConfig_1["default"]), __assign({}, logConfig, {
              develop: develop
            })); //替换window.console

            _this.console = null; //发送方法

            _this.sendMessage = function () {
              return index_1.consoleTools.warnError('sendMessage is not active, apply receive sendPipeMessage fail ');
            };

            return _this;
          } //提供一个挂载入口


          KeepObserverLog.prototype.apply = function (_a) {
            var sendMessage = _a.sendMessage;
            var automaticStart = this._config.automaticStart;
            this.sendMessage = sendMessage; //启动监控

            if (automaticStart) {
              this.startObserver();
            }

            return {
              logStop: this.stopObserver,
              logStart: this.startObserver
            };
          };

          return KeepObserverLog;
        }(index_1.KeepObserverPublic);

        exports["default"] = KeepObserverLog;
        /***/
      },

      /***/
      "@util/index":
      /*!******************************!*\
        !*** external "@util/index" ***!
        \******************************/

      /*! no static exports found */

      /***/
      function utilIndex(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__util_index__;
        /***/
      }
      /******/

    })
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(0));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i, a; }
})(this, function (__WEBPACK_EXTERNAL_MODULE__util_index__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/instance/index.ts");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./src/constants/index.ts":
      /*!********************************!*\
        !*** ./src/constants/index.ts ***!
        \********************************/

      /*! no static exports found */

      /***/
      function srcConstantsIndexTs(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        }); //上报数据类型

        exports.reportType = ['unKownType', 'log', 'network', 'vue']; //版本号

        exports.version = '2.0.0-alpha.5'; //公共中间件

        exports.publicMiddleScopeNames = ['sendMessage', 'error'];
        /***/
      },

      /***/
      "./src/instance/defaultConfig.ts":
      /*!***************************************!*\
        !*** ./src/instance/defaultConfig.ts ***!
        \***************************************/

      /*! no static exports found */

      /***/
      function srcInstanceDefaultConfigTs(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        /*
            keepObserver 默认配置
        */

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        var index_2 = __webpack_require__(
        /*! ../constants/index */
        "./src/constants/index.ts");

        exports["default"] = {
          projectName: '',
          projectVersion: '',
          version: index_2.version,
          //唯一设备id
          deviceID: index_1.getDeviceId(),
          //是否检查重复注入
          //这个主要用在jasmine spyOn 以及UglifyJS  class = n o a b c ..可能出现的问题
          isCheckRepeatUse: true
        };
        /***/
      },

      /***/
      "./src/instance/index.ts":
      /*!*******************************!*\
        !*** ./src/instance/index.ts ***!
        \*******************************/

      /*! no static exports found */

      /***/
      function srcInstanceIndexTs(module, exports, __webpack_require__) {
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

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        var defaultConfig_1 = __importDefault(__webpack_require__(
        /*! ./defaultConfig */
        "./src/instance/defaultConfig.ts"));

        var index_2 = __importDefault(__webpack_require__(
        /*! ./pipe/index */
        "./src/instance/pipe/index.ts"));

        exports.keepObserverPipe = index_2["default"];

        var index_3 = __importDefault(__webpack_require__(
        /*! ./pipe/PipeUser/index */
        "./src/instance/pipe/PipeUser/index.ts"));

        exports.PipeUser = index_3["default"];

        var index_4 = __importDefault(__webpack_require__(
        /*! ./pipe/WatchDog/index */
        "./src/instance/pipe/WatchDog/index.ts"));

        exports.WatchDog = index_4["default"];

        var index_5 = __importDefault(__webpack_require__(
        /*! ./pipe/MQ/index */
        "./src/instance/pipe/MQ/index.ts"));

        exports.MessageQueue = index_5["default"];

        var api_1 = __webpack_require__(
        /*! ./method/api */
        "./src/instance/method/api.ts");

        var middle_1 = __webpack_require__(
        /*! ./method/middle */
        "./src/instance/method/middle.ts");

        var base_1 = __webpack_require__(
        /*! ./method/base */
        "./src/instance/method/base.ts");

        var KeepObserver =
        /** @class */
        function (_super) {
          __extends(KeepObserver, _super);

          function KeepObserver(config) {
            if (config === void 0) {
              config = {};
            }

            var _this = _super.call(this, config = index_1.Tools.extend(__assign({}, defaultConfig_1["default"]), config)) || this; //method


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


            _this.middleScopeNames = _this.middleScopeNames.concat(_this._publicMiddleScopeNames);
            return _this;
          }

          return KeepObserver;
        }(index_1.KeepObserverPublic);

        exports["default"] = KeepObserver;
        /***/
      },

      /***/
      "./src/instance/method/api.ts":
      /*!************************************!*\
        !*** ./src/instance/method/api.ts ***!
        \************************************/

      /*! no static exports found */

      /***/
      function srcInstanceMethodApiTs(module, exports, __webpack_require__) {
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

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        exports.registerApi = function (apiName, cb) {
          var _self = this;

          if (_self.apis[apiName]) {
            index_1.consoleTools.warnError("apiName:" + apiName + " is defined");
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
        /***/

      },

      /***/
      "./src/instance/method/base.ts":
      /*!*************************************!*\
        !*** ./src/instance/method/base.ts ***!
        \*************************************/

      /*! no static exports found */

      /***/
      function srcInstanceMethodBaseTs(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index"); //扩展上报属性


        exports.extendReportParams = function (params) {
          return index_1.KeepObserverPublic.extendReport(params);
        }; //挂载插件服务


        exports.use = function (Provider) {
          return this._pipe.use(Provider);
        };
        /***/

      },

      /***/
      "./src/instance/method/middle.ts":
      /*!***************************************!*\
        !*** ./src/instance/method/middle.ts ***!
        \***************************************/

      /*! no static exports found */

      /***/
      function srcInstanceMethodMiddleTs(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index"); //主实例重载中间件服务


        exports.useMiddle = function (scopeName, middlesFn) {
          if (this.middleScopeNames.indexOf(scopeName) === -1) {
            this.middleScopeNames.push(scopeName);
          }

          return index_1.KeepObserverMiddleWare.usePublishMiddles(scopeName, middlesFn);
        }; //当前正在运行的中间件实例


        exports.getRunMiddle = function () {
          return index_1.KeepObserverMiddleWare.currentRunMiddle;
        };
        /***/

      },

      /***/
      "./src/instance/pipe/MQ/index.ts":
      /*!***************************************!*\
        !*** ./src/instance/pipe/MQ/index.ts ***!
        \***************************************/

      /*! no static exports found */

      /***/
      function srcInstancePipeMQIndexTs(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var triggerQueue_1 = __webpack_require__(
        /*! ./triggerQueue */
        "./src/instance/pipe/MQ/triggerQueue.ts");

        var receiveQueue_1 = __webpack_require__(
        /*! ./receiveQueue */
        "./src/instance/pipe/MQ/receiveQueue.ts");

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
        /***/
      },

      /***/
      "./src/instance/pipe/MQ/receiveQueue.ts":
      /*!**********************************************!*\
        !*** ./src/instance/pipe/MQ/receiveQueue.ts ***!
        \**********************************************/

      /*! no static exports found */

      /***/
      function srcInstancePipeMQReceiveQueueTs(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index"); //注册管道接收数据函数


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
        /***/

      },

      /***/
      "./src/instance/pipe/MQ/triggerQueue.ts":
      /*!**********************************************!*\
        !*** ./src/instance/pipe/MQ/triggerQueue.ts ***!
        \**********************************************/

      /*! no static exports found */

      /***/
      function srcInstancePipeMQTriggerQueueTs(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index"); //发送消息在管道内流通


        exports.sendPipeMessage = function (id, params) {
          var _self = this;

          var msgItem = {
            id: id,
            params: params
          };
          return new Promise(function (res, rej) {
            //如果正在执行
            if (_self.isRun) {
              return rej(false);
            } //是否消息队列加锁,并且防止异常消息
            //进入消息队列


            _self.messageQueue.push(msgItem); //异步执行消息队列分发


            setTimeout(function () {
              //获取消息队列数组快照
              var queue = _self.messageQueue.map(function (e) {
                return e;
              }); //清空队列


              _self.messageQueue = []; //通知监听

              _self.noticeListener(queue).then(res, res);
            });
          });
        }; //通知监听


        exports.noticeListener = function (queue) {
          var _self = this;

          if (!index_1.Tools.isArray(queue) || queue.length === 0) {
            return Promise.reject();
          } //接收消息进入等待状态


          _self.isRun = true; //分发处理消息

          return Promise.all(queue.map(function (item) {
            var id = item.id,
                params = item.params; //消息分发

            return Promise.all(index_1.Tools.mapToArray(_self.consumerMap, function (cb, pipeId) {
              //id修正
              pipeId = !index_1.Tools.isNumber(pipeId) ? parseInt(pipeId) : false;

              if (!index_1.Tools.isNumber(pipeId)) {
                return false;
              } //判断是否是正确注册接收函数


              if (!index_1.Tools.isFunction(cb)) {
                return false;
              } //不允许自发自收


              if (id === pipeId) {
                return false;
              } //分发


              try {
                //执行分发
                return cb(params) || Promise.resolve();
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
        /***/

      },

      /***/
      "./src/instance/pipe/PipeUser/index.ts":
      /*!*********************************************!*\
        !*** ./src/instance/pipe/PipeUser/index.ts ***!
        \*********************************************/

      /*! no static exports found */

      /***/
      function srcInstancePipePipeUserIndexTs(module, exports, __webpack_require__) {
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

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        var index_2 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        var index_3 = __importDefault(__webpack_require__(
        /*! ../WatchDog/index */
        "./src/instance/pipe/WatchDog/index.ts"));

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
            function (catchParams, contendHashCode) {
              //mq handle process message ignore
              if ($pipe.$mq.isRun) return Promise.reject('mq handle process message ignore'); //send message

              var isError = true;

              var _a = __read($pipe._publicMiddleScopeNames, 1),
                  sendMessage = _a[0];

              var reportParams = _this.handleReportData(__assign({}, catchParams, {
                contendHashCode: contendHashCode
              })); //  1 -> 2 -> 3 -> 2 -> 1


              return $pipe.$keepObserver.runMiddle(sendMessage, reportParams).then(function (middleReportParams) {
                isError = false;

                if (!middleReportParams) {
                  _this.constructor.emitSendDoneCallback();

                  return false;
                }

                index_2.consoleTools.devLog($pipe._develop, middleReportParams);
                $pipe.$mq.sendPipeMessage(index, middleReportParams).then(function () {
                  _this.constructor.emitSendDoneCallback();
                });
              }) //check middle exec error
              ["finally"](function () {
                if (isError) {
                  index_2.consoleTools.devLog($pipe._develop, reportParams);
                  $pipe.$mq.sendPipeMessage(index, reportParams).then(function () {
                    _this.constructor.emitSendDoneCallback();
                  });
                }
              });
            },
            /* anomaly callback */
            function (anomalyMessage) {
              return $pipe.$keepObserver.runMiddle('error', anomalyMessage);
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


            _this.registerReciveMessage = $pipe.$mq.registerRecivePipeMessage(index, scope); //register send done callback

            _this.registerSendDoneCallback = function (callback) {
              _this.constructor.onSendDoneCallbackMap.push(callback);
            }; // middleScopeNames


            _this.middleScopeNames = $pipe.$keepObserver.middleScopeNames.map(function (e) {
              return e;
            });
            return _this;
          }

          PipeUser.onSendDoneCallbackMap = [];

          PipeUser.emitSendDoneCallback = function () {
            this.onSendDoneCallbackMap.forEach(function (fn) {
              try {
                fn();
              } catch (e) {
                index_2.consoleTools.warnError("emitSendDoneCallback find error:" + e);
              }
            });
          };

          return PipeUser;
        }(index_1.KeepObserverPublic);

        exports["default"] = PipeUser;
        /***/
      },

      /***/
      "./src/instance/pipe/WatchDog/index.ts":
      /*!*********************************************!*\
        !*** ./src/instance/pipe/WatchDog/index.ts ***!
        \*********************************************/

      /*! no static exports found */

      /***/
      function srcInstancePipeWatchDogIndexTs(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

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
            var receiveCount = 1;
            var countBuff = {};
            var resetCountFn = index_1.Tools.debounceWrap(1000)(function () {
              countBuff = {}, receiveCount = 1;
            });
            var resetAnomaly = index_1.Tools.throttleWrap(3000)(function () {
              anomaly = false;
            });

            var limtJudgeAnomaly = function limtJudgeAnomaly(count, catchParams, anomalyCallback) {
              //启动定时器每秒恢复一次计数
              resetCountFn();

              if (++receiveCount > 50) {
                var msg = 'send  Message during 1000ms in Over 50 times,maybe Anomaly';
                index_1.consoleTools.warnError(msg, catchParams);
                anomalyCallback(msg);
                return false;
              } //重复技术统计


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
                  data = _e === void 0 ? {} : _e; //contendHashCode 本来不放这里的，但是因为要做校验，所以在这里生产 后面就不生成了


              var contendHashCode = index_1.Tools.getHashCode(data);
              var key = isIgnoreSendRepeat ? 'ignore' : type + "_" + typeName + "_" + contendHashCode;
              var count = countBuff[key] ? ++countBuff[key] : countBuff[key] = 1;
              anomaly = !anomaly ? limtJudgeAnomaly(count, catchParams, anomalyCallback) : true;

              if (anomaly) {
                resetAnomaly(); //catch resolve Uncaught (in promise) error

                return Promise.reject('send  Message during 1000ms in Over 20 times,maybe happend Endless loop')["catch"](function (e) {
                  return e;
                });
              } //catch resolve Uncaught (in promise) error


              return fn(catchParams, contendHashCode)["catch"](function (e) {
                return e;
              });
            };

            return watchWrap;
          };

          return WatchDog;
        }();

        exports["default"] = WatchDog;
        /***/
      },

      /***/
      "./src/instance/pipe/index.ts":
      /*!************************************!*\
        !*** ./src/instance/pipe/index.ts ***!
        \************************************/

      /*! no static exports found */

      /***/
      function srcInstancePipeIndexTs(module, exports, __webpack_require__) {
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

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        var index_2 = __importDefault(__webpack_require__(
        /*! ./MQ/index */
        "./src/instance/pipe/MQ/index.ts"));

        var injection_1 = __webpack_require__(
        /*! ./injection */
        "./src/instance/pipe/injection.ts");

        var keepObserverPipe =
        /** @class */
        function (_super) {
          __extends(keepObserverPipe, _super);

          function keepObserverPipe(keepObserver, config) {
            var _this = _super.call(this, config) || this;

            _this.pipeMap = {}; //method

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
        /***/
      },

      /***/
      "./src/instance/pipe/injection.ts":
      /*!****************************************!*\
        !*** ./src/instance/pipe/injection.ts ***!
        \****************************************/

      /*! no static exports found */

      /***/
      function srcInstancePipeInjectionTs(module, exports, __webpack_require__) {
        "use strict";

        var __importDefault = this && this.__importDefault || function (mod) {
          return mod && mod.__esModule ? mod : {
            "default": mod
          };
        };

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var index_1 = __webpack_require__(
        /*! @util/index */
        "@util/index");

        var index_2 = __importDefault(__webpack_require__(
        /*! ./PipeUser/index */
        "./src/instance/pipe/PipeUser/index.ts"));
        /*
            receive Plug-ins Server
            params
            @Provider  type es6 class  or classInstance
            explan: Provider class render apply function ,apply runing return method object ,on mounted is keepObsever class
         */


        exports.use = function (Provider) {
          var _self = this;

          var isCheckRepeatUse = _self._config.isCheckRepeatUse;

          if (!Provider || !index_1.Tools.isFunction(Provider) && !index_1.Tools.isClassObject(Provider)) {
            var errorMsg = "use method receive provider is not right";
            index_1.consoleTools.warnError(errorMsg);
            return _self.$keepObserver.runMiddle('error', errorMsg);
          } //初始化注入服务


          var config = _self._config;
          var providerInstalcen = index_1.Tools.isFunction(Provider) ? new Provider(config) : Provider; //校验重复注入
          //mind UglifyJS  class = n o a b c ...

          if (isCheckRepeatUse) {
            var providerName = index_1.Tools.isObject(providerInstalcen) && providerInstalcen.constructor ? providerInstalcen.constructor.name : undefined;
            var serverId = providerName + '-' + index_1.Tools.getHashCode(providerInstalcen);

            if (!providerName || this.pipeMap[serverId]) {
              var errorMsg = !providerName ? "Provider.constructor is undefined" : providerName + " already injection server";
              index_1.consoleTools.warnError(errorMsg);
              return _self.$keepObserver.runMiddle('error', errorMsg);
            }

            this.pipeMap[serverId] = true;
          } //检查注入方法是否存在存在apply,存在则加入到管道流中
          //并检查是否存在返回方法，挂载在自身中,用于对外提供


          var _a = providerInstalcen.apply,
              apply = _a === void 0 ? null : _a;

          if (apply && index_1.Tools.isFunction(apply)) {
            this.injection(providerInstalcen, apply);
            return Promise.resolve(providerInstalcen);
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
        /***/

      },

      /***/
      "@util/index":
      /*!******************************!*\
        !*** external "@util/index" ***!
        \******************************/

      /*! no static exports found */

      /***/
      function utilIndex(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__util_index__;
        /***/
      }
      /******/

    })
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 8 */
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

var instance_1 = __importDefault(__webpack_require__(7));

var log_1 = __importDefault(__webpack_require__(6));

exports.KeepObserverLog = log_1["default"];

var network_1 = __importDefault(__webpack_require__(5));

exports.KeepObserverNetwork = network_1["default"];

var htmlElementActive_1 = __importDefault(__webpack_require__(4));

exports.KeepObserverHtmlElementActive = htmlElementActive_1["default"];

var kibanaApmTrack_1 = __importDefault(__webpack_require__(3));

exports.KeepObserverMiddlewareKibanaApmTrack = kibanaApmTrack_1["default"];

var kibanaApm_1 = __importDefault(__webpack_require__(2));

exports.KeepObserverKibanaApmReport = kibanaApm_1["default"];
exports["default"] = instance_1["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ })
/******/ ]);
});