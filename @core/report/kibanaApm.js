(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@util/index"));
	else if(typeof define === 'function' && define.amd)
		define(["@util/index"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@util/index")) : factory(root["@util/index"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__util_index__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/services/report/kibanaApm/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/elastic-apm-js-core/node_modules/error-stack-parser/error-stack-parser.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/node_modules/error-stack-parser/error-stack-parser.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! stackframe */ "./node_modules/elastic-apm-js-core/node_modules/stackframe/stackframe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/node_modules/stackframe/stackframe.js":
/*!********************************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/node_modules/stackframe/stackframe.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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
    getFunctionName: function () {
      return this.functionName;
    },
    setFunctionName: function (v) {
      this.functionName = String(v);
    },
    getArgs: function () {
      return this.args;
    },
    setArgs: function (v) {
      if (Object.prototype.toString.call(v) !== '[object Array]') {
        throw new TypeError('Args must be an Array');
      }

      this.args = v;
    },
    // NOTE: Property name may be misleading as it includes the path,
    // but it somewhat mirrors V8's JavaScriptStackTraceApi
    // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
    // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
    getFileName: function () {
      return this.fileName;
    },
    setFileName: function (v) {
      this.fileName = String(v);
    },
    getLineNumber: function () {
      return this.lineNumber;
    },
    setLineNumber: function (v) {
      if (!_isNumber(v)) {
        throw new TypeError('Line Number must be a Number');
      }

      this.lineNumber = Number(v);
    },
    getColumnNumber: function () {
      return this.columnNumber;
    },
    setColumnNumber: function (v) {
      if (!_isNumber(v)) {
        throw new TypeError('Column Number must be a Number');
      }

      this.columnNumber = Number(v);
    },
    getSource: function () {
      return this.source;
    },
    setSource: function (v) {
      this.source = String(v);
    },
    toString: function () {
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

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/common/apm-server.js":
/*!*******************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/common/apm-server.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var Queue = __webpack_require__(/*! ./queue */ "./node_modules/elastic-apm-js-core/src/common/queue.js");

var throttle = __webpack_require__(/*! ./throttle */ "./node_modules/elastic-apm-js-core/src/common/throttle.js");

var utils = __webpack_require__(/*! ./utils */ "./node_modules/elastic-apm-js-core/src/common/utils.js");

var NDJSON = __webpack_require__(/*! ./ndjson */ "./node_modules/elastic-apm-js-core/src/common/ndjson.js");

var xhrIgnore = __webpack_require__(/*! ./patching/patch-utils */ "./node_modules/elastic-apm-js-core/src/common/patching/patch-utils.js").XHR_IGNORE;

class ApmServer {
  constructor(configService, loggingService) {
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

  init() {
    if (this.initialized) {
      return;
    }

    this.initialized = true;
    this.initErrorQueue();
    this.initTransactionQueue();
  }

  createServiceObject() {
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

  _postJson(endPoint, payload) {
    return this._makeHttpRequest('POST', endPoint, payload, {
      'Content-Type': 'application/x-ndjson'
    });
  }

  _makeHttpRequest(method, url, payload, headers) {
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

  _createQueue(onFlush) {
    var queueLimit = this._configService.get('queueLimit');

    var flushInterval = this._configService.get('flushInterval');

    return new Queue(onFlush, {
      queueLimit: queueLimit,
      flushInterval: flushInterval
    });
  }

  initErrorQueue() {
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

  initTransactionQueue() {
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

  addError(error) {
    if (this._configService.isActive()) {
      if (!this.errorQueue) {
        this.initErrorQueue();
      }

      this.throttleAddError(error);
    }
  }

  addTransaction(transaction) {
    if (this._configService.isActive()) {
      if (!this.transactionQueue) {
        this.initTransactionQueue();
      }

      this.throttleAddTransaction(transaction);
    }
  }

  warnOnce(logObject) {
    if (logObject.level === 'warn') {
      logObject.level = 'debug';

      this._loggingService.warn(logObject.message);
    } else {
      this._loggingService.debug(logObject.message);
    }
  }

  ndjsonErrors(errors) {
    return errors.map(function (error) {
      return NDJSON.stringify({
        error: error
      });
    });
  }

  sendErrors(errors) {
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

  ndjsonTransactions(transactions) {
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

  sendTransactions(transactions) {
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

}

module.exports = ApmServer;

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/common/config-service.js":
/*!***********************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/common/config-service.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const {
  getCurrentScript,
  sanitizeString,
  setTag,
  merge
} = __webpack_require__(/*! ./utils */ "./node_modules/elastic-apm-js-core/src/common/utils.js");

const Subscription = __webpack_require__(/*! ../common/subscription */ "./node_modules/elastic-apm-js-core/src/common/subscription.js");

const constants = __webpack_require__(/*! ./constants */ "./node_modules/elastic-apm-js-core/src/common/constants.js");

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

      var camelCasedkey = key.split('-').map((value, index) => {
        return index > 0 ? value.charAt(0).toUpperCase() + value.substring(1) : value;
      }).join('');
      dataAttrs[camelCasedkey] = attr.value || attr.nodeValue;
    }
  }

  return dataAttrs;
}

class Config {
  constructor() {
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

  init() {
    var scriptData = getConfigFromScript();
    this.setConfig(scriptData);
  }

  isActive() {
    return this.get('active');
  }

  addFilter(cb) {
    if (typeof cb !== 'function') {
      throw new Error('Argument to must be function');
    }

    this.filters.push(cb);
  }

  applyFilters(data) {
    for (var i = 0; i < this.filters.length; i++) {
      data = this.filters[i](data);

      if (!data) {
        return;
      }
    }

    return data;
  }

  get(key) {
    return key.split('.').reduce((obj, objKey) => {
      return obj && obj[objKey];
    }, this.config);
  }

  getEndpointUrl() {
    var url = this.get('serverUrl') + this.get('serverUrlPrefix');
    return url;
  }

  set(key, value) {
    var levels = key.split('.');
    var maxLevel = levels.length - 1;
    var target = this.config;

    for (let i = 0; i < maxLevel + 1; i++) {
      const level = levels[i];

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

  setUserContext(userContext) {
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

  setCustomContext(customContext) {
    if (customContext && typeof customContext === 'object') {
      this.set('context.custom', customContext);
    }
  }

  setTag(key, value) {
    if (!key) return;

    if (!this.config.context.tags) {
      this.config.context.tags = {};
    }

    setTag(key, value, this.config.context.tags);
  }

  addTags(tags) {
    var keys = Object.keys(tags);
    keys.forEach(k => {
      this.setTag(k, tags[k]);
    });
  }

  setConfig(properties) {
    properties = properties || {};
    this.config = merge({}, this.defaults, this.config, properties);

    this._changeSubscription.applyAll(this, [this.config]);
  }

  subscribeToChange(fn) {
    return this._changeSubscription.subscribe(fn);
  }

  isValid() {
    const requiredKeys = ['serviceName', 'serverUrl'];

    for (let i = 0; i < requiredKeys.length; i++) {
      const key = requiredKeys[i];

      if (this.config[key] == null || this.config[key] === '') {
        return false;
      }
    }

    return true;
  }

}

module.exports = Config;

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/common/constants.js":
/*!******************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/common/constants.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
const SCHEDULE = 'schedule';
const INVOKE = 'invoke';
const CLEAR = 'clear';
/**
 * Request Sources
 */

const FETCH_SOURCE = 'fetch';
const XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
/**
 * Event listener methods
 */

const ADD_EVENT_LISTENER_STR = 'addEventListener';
const REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/**
 * Others
 */

const serverStringLimit = 1024;
module.exports = {
  SCHEDULE,
  INVOKE,
  CLEAR,
  FETCH_SOURCE,
  XMLHTTPREQUEST_SOURCE,
  ADD_EVENT_LISTENER_STR,
  REMOVE_EVENT_LISTENER_STR,
  serverStringLimit
};

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/common/logging-service.js":
/*!************************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/common/logging-service.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const {
  noop
} = __webpack_require__(/*! ./utils */ "./node_modules/elastic-apm-js-core/src/common/utils.js");

class LoggingService {
  constructor(spec) {
    if (!spec) spec = {};
    this.levels = ['trace', 'debug', 'info', 'warn', 'error'];
    this.level = spec.level || 'info';
    this.prefix = spec.prefix || '';
    this.resetLogMethods();
  }

  shouldLog(level) {
    return this.levels.indexOf(level) >= this.levels.indexOf(this.level);
  }

  setLevel(level) {
    this.level = level;
    this.resetLogMethods();
  }

  resetLogMethods() {
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

}

module.exports = LoggingService;

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/common/ndjson.js":
/*!***************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/common/ndjson.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
class NDJSON {
  static stringify(object) {
    return JSON.stringify(object) + '\n';
  }

}

module.exports = NDJSON;

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/common/patching/fetch-patch.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/common/patching/fetch-patch.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const {
  globalState
} = __webpack_require__(/*! ./patch-utils */ "./node_modules/elastic-apm-js-core/src/common/patching/patch-utils.js");

const {
  SCHEDULE,
  INVOKE,
  FETCH_SOURCE
} = __webpack_require__(/*! ../constants */ "./node_modules/elastic-apm-js-core/src/common/constants.js");

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

    const task = {
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

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/common/patching/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/common/patching/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var patchXMLHttpRequest = __webpack_require__(/*! ./xhr-patch */ "./node_modules/elastic-apm-js-core/src/common/patching/xhr-patch.js").patchXMLHttpRequest;

var patchFetch = __webpack_require__(/*! ./fetch-patch */ "./node_modules/elastic-apm-js-core/src/common/patching/fetch-patch.js").patchFetch;

var Subscription = __webpack_require__(/*! ../subscription */ "./node_modules/elastic-apm-js-core/src/common/subscription.js");

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
  patchAll,
  subscription
};

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/common/patching/patch-utils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/common/patching/patch-utils.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

  const delegateName = apmSymbol(name);
  var delegate;

  if (proto && !(delegate = proto[delegateName])) {
    delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
    // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

    const desc = proto && Object.getOwnPropertyDescriptor(proto, name);

    if (isPropertyWritable(desc)) {
      const patchDelegate = patchFn(delegate, delegateName, name);

      proto[name] = function () {
        return patchDelegate(this, arguments);
      };

      attachOriginToPatched(proto[name], delegate);
    }
  }

  return delegate;
}

module.exports = {
  apmSymbol,
  patchMethod,
  globalState,
  XHR_IGNORE: apmSymbol('xhrIgnore'),
  XHR_SYNC: apmSymbol('xhrSync'),
  XHR_URL: apmSymbol('xhrURL'),
  XHR_METHOD: apmSymbol('xhrMethod')
};

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/common/patching/xhr-patch.js":
/*!***************************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/common/patching/xhr-patch.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const {
  apmSymbol,
  patchMethod,
  XHR_SYNC,
  XHR_URL,
  XHR_METHOD,
  XHR_IGNORE
} = __webpack_require__(/*! ./patch-utils */ "./node_modules/elastic-apm-js-core/src/common/patching/patch-utils.js");

const {
  SCHEDULE,
  INVOKE,
  CLEAR,
  XMLHTTPREQUEST_SOURCE,
  ADD_EVENT_LISTENER_STR,
  REMOVE_EVENT_LISTENER_STR
} = __webpack_require__(/*! ../constants */ "./node_modules/elastic-apm-js-core/src/common/constants.js");

const XHR_TASK = apmSymbol('xhrTask');
const XHR_LISTENER = apmSymbol('xhrListener');
const XHR_SCHEDULED = apmSymbol('xhrScheduled');
var alreadyPatched = false;

function patchXMLHttpRequest(callback) {
  if (alreadyPatched) {
    return;
  }

  alreadyPatched = true;
  const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
  let oriAddListener = XMLHttpRequestPrototype[ADD_EVENT_LISTENER_STR];
  let oriRemoveListener = XMLHttpRequestPrototype[REMOVE_EVENT_LISTENER_STR];

  if (!oriAddListener) {
    const XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

    if (XMLHttpRequestEventTarget) {
      const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
      oriAddListener = XMLHttpRequestEventTargetPrototype[ADD_EVENT_LISTENER_STR];
      oriRemoveListener = XMLHttpRequestEventTargetPrototype[REMOVE_EVENT_LISTENER_STR];
    }
  }

  const READY_STATE_CHANGE = 'readystatechange';

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

    const data = task.data;
    const target = data.target; // remove existing event listener

    const listener = target[XHR_LISTENER];

    if (!oriAddListener) {
      oriAddListener = target[ADD_EVENT_LISTENER_STR];
      oriRemoveListener = target[REMOVE_EVENT_LISTENER_STR];
    }

    if (listener) {
      oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
    }

    const newListener = target[XHR_LISTENER] = () => {
      if (target.readyState === target.DONE) {
        // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
        // readyState=4 multiple times, so we need to check task state here
        if (!data.aborted && XMLHttpRequest[XHR_SCHEDULED] && task.state === SCHEDULE) {
          invokeTask(task);
        }
      }
    };

    oriAddListener.call(target, READY_STATE_CHANGE, newListener);
    const storedTask = target[XHR_TASK];

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
    const data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
    // to prevent it from firing. So instead, we store info for the event listener.

    data.aborted = true;
  }

  const openNative = patchMethod(XMLHttpRequestPrototype, 'open', () => function (self, args) {
    self[XHR_METHOD] = args[0];
    self[XHR_URL] = args[1];
    self[XHR_SYNC] = args[2] === false;
    return openNative.apply(self, args);
  });
  const sendNative = patchMethod(XMLHttpRequestPrototype, 'send', () => function (self, args) {
    const task = {
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
  });
  const abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', () => function (self, args) {
    const task = self[XHR_TASK];

    if (task && typeof task.type === 'string') {
      // If the XHR has already been aborted, do nothing.
      if (task.data && task.data.aborted) {
        return;
      }

      clearTask(task);
    }

    return abortNative.apply(self, args);
  });
}

module.exports = {
  patchXMLHttpRequest: patchXMLHttpRequest
};

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/common/queue.js":
/*!**************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/common/queue.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
class Queue {
  constructor(onFlush, opts) {
    if (!opts) opts = {};
    this.onFlush = onFlush;
    this.items = [];
    this.queueLimit = opts.queueLimit || -1;
    this.flushInterval = opts.flushInterval || 0;
    this.timeoutId = undefined;
  }

  _setTimer() {
    this.timeoutId = setTimeout(() => {
      this.flush();
    }, this.flushInterval);
  }

  flush() {
    this.onFlush(this.items);

    this._clear();
  }

  _clear() {
    if (typeof this.timeoutId !== 'undefined') {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }

    this.items = [];
  }

  add(item) {
    this.items.push(item);

    if (this.queueLimit !== -1 && this.items.length >= this.queueLimit) {
      this.flush();
    } else {
      if (typeof this.timeoutId === 'undefined') {
        this._setTimer();
      }
    }
  }

}

module.exports = Queue;

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/common/service-factory.js":
/*!************************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/common/service-factory.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const ApmServer = __webpack_require__(/*! ./apm-server */ "./node_modules/elastic-apm-js-core/src/common/apm-server.js");

const ConfigService = __webpack_require__(/*! ./config-service */ "./node_modules/elastic-apm-js-core/src/common/config-service.js");

const LoggingService = __webpack_require__(/*! ./logging-service */ "./node_modules/elastic-apm-js-core/src/common/logging-service.js");

const patchUtils = __webpack_require__(/*! ./patching/patch-utils */ "./node_modules/elastic-apm-js-core/src/common/patching/patch-utils.js");

const utils = __webpack_require__(/*! ./utils */ "./node_modules/elastic-apm-js-core/src/common/utils.js");

class ServiceFactory {
  constructor() {
    this._serviceCreators = {};
    this._serviceInstances = {};
    this.initialized = false;
  }

  registerCoreServices() {
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

  init() {
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

  registerServiceCreator(name, creator) {
    this._serviceCreators[name] = creator;
  }

  registerServiceInstance(name, instance) {
    this._serviceInstances[name] = instance;
  }

  getService(name) {
    if (!this._serviceInstances[name]) {
      if (typeof this._serviceCreators[name] === 'function') {
        this._serviceInstances[name] = this._serviceCreators[name](this);
      } else {
        throw new Error('Can not get service, No creator for: ' + name);
      }
    }

    return this._serviceInstances[name];
  }

}

module.exports = ServiceFactory;

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/common/subscription.js":
/*!*********************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/common/subscription.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
class Subscription {
  constructor() {
    this.subscriptions = [];
  }

  subscribe(fn) {
    this.subscriptions.push(fn);
    return () => {
      var index = this.subscriptions.indexOf(fn);

      if (index > -1) {
        this.subscriptions.splice(index, 1);
      }
    };
  }

  applyAll(applyTo, applyWith) {
    this.subscriptions.forEach(fn => {
      try {
        fn.apply(applyTo, applyWith);
      } catch (error) {
        console.log(error, error.stack);
      }
    }, this);
  }

}

module.exports = Subscription;

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/common/throttle.js":
/*!*****************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/common/throttle.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/common/url.js":
/*!************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/common/url.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
const RULES = [['#', 'hash'], ['?', 'query'], ['/', 'path'], [NaN, 'host', 1] //
];
const PROTOCOL_REGEX = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;

class Url {
  constructor(url) {
    let {
      protocol,
      address,
      slashes
    } = this.extractProtocol(url || '');
    const relative = !protocol && !slashes;
    const location = this.getLocation();
    const instructions = RULES.slice(); // Sanitize what is left of the address

    address = address.replace('\\', '/');
    let index;

    for (let i = 0; i < instructions.length; i++) {
      const instruction = instructions[i];
      const parse = instruction[0];
      const key = instruction[1];

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

  getLocation() {
    var globalVar = {};

    if (typeof window !== 'undefined') {
      globalVar = window;
    }

    return globalVar.location;
  }

  extractProtocol(url) {
    const match = PROTOCOL_REGEX.exec(url);
    return {
      protocol: match[1] ? match[1].toLowerCase() : '',
      slashes: !!match[2],
      address: match[3]
    };
  }

}

module.exports = Url;

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/common/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/common/utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const constants = __webpack_require__(/*! ./constants */ "./node_modules/elastic-apm-js-core/src/common/constants.js");

const slice = [].slice;

const Url = __webpack_require__(/*! ../common/url */ "./node_modules/elastic-apm-js-core/src/common/url.js");

const rng = __webpack_require__(/*! uuid/lib/rng-browser */ "./node_modules/uuid/lib/rng-browser.js");

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
  const dtVersion = '00';
  const dtUnSampledFlags = '00'; // 00000001 ->  '01' -> recorded

  const dtSampledFlags = '01';

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
      sampled
    };
  }
}

function isDtHeaderValid(header) {
  return /^[\da-f]{2}-[\da-f]{32}-[\da-f]{16}-[\da-f]{2}$/.test(header) && header.slice(3, 35) !== '00000000000000000000000000000000' && header.slice(36, 52) !== '0000000000000000';
}

function checkSameOrigin(source, target) {
  let isSame = false;

  if (typeof target === 'string') {
    const src = new Url(source);
    const tar = new Url(target);
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
    } else if (typeof value === 'object') {
      value = sanitizeObjectStrings(value, limit, required, placeholder);
    }

    obj[k] = value;
  });
  return obj;
}

const navigationTimingKeys = ['fetchStart', 'domainLookupStart', 'domainLookupEnd', 'connectStart', 'connectEnd', 'secureConnectionStart', 'requestStart', 'responseStart', 'responseEnd', 'domLoading', 'domInteractive', 'domContentLoadedEventStart', 'domContentLoadedEventEnd', 'domComplete', 'loadEventStart', 'loadEventEnd'];

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
  return value !== null && typeof value === 'object';
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
  extend,
  merge,
  isUndefined,
  noop,
  baseExtend,
  bytesToHex,
  isCORSSupported,
  isObject,
  isFunction,
  isPlatformSupported,
  isDtHeaderValid,
  parseDtHeaderValue,
  getNavigationTimingMarks,
  getPaintTimingMarks,
  getDtHeaderValue,
  getPageMetadata,
  getCurrentScript,
  getElasticScript,
  getTimeOrigin,
  generateRandomId,
  rng,
  checkSameOrigin,
  sanitizeString,
  sanitizeObjectStrings,
  setTag,
  stripQueryStringFromUrl,
  find,
  removeInvalidChars
};

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/error-logging/error-logging.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/error-logging/error-logging.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var StackTraceService = __webpack_require__(/*! ./stack-trace-service */ "./node_modules/elastic-apm-js-core/src/error-logging/stack-trace-service.js");

var utils = __webpack_require__(/*! ../common/utils */ "./node_modules/elastic-apm-js-core/src/common/utils.js");

class ErrorLogging {
  constructor(apmServer, configService, loggingService, transactionService) {
    this._apmServer = apmServer;
    this._configService = configService;
    this._loggingService = loggingService;
    this._transactionService = transactionService;
    this._stackTraceService = new StackTraceService(configService, loggingService);
  } // errorEvent = {message, filename, lineno, colno, error}


  createErrorDataModel(errorEvent) {
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

    if (errorEvent.error && typeof errorEvent.error === 'object') {
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

  logErrorEvent(errorEvent, sendImmediately) {
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

  registerGlobalEventListener() {
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

  logError(messageOrError) {
    var errorEvent = {};

    if (typeof messageOrError === 'string') {
      errorEvent.message = messageOrError;
    } else {
      errorEvent.error = messageOrError;
    }

    return this.logErrorEvent(errorEvent);
  }

  _getErrorProperties(error) {
    var properties = {};
    Object.keys(error).forEach(function (key) {
      if (key === 'stack') return;
      var val = error[key];
      if (val === null) return; // null is typeof object and well break the switch below

      switch (typeof val) {
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

}

module.exports = ErrorLogging;

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/error-logging/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/error-logging/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const ErrorLogging = __webpack_require__(/*! ./error-logging */ "./node_modules/elastic-apm-js-core/src/error-logging/error-logging.js");

module.exports = {
  ErrorLogging: ErrorLogging,
  registerServices: function registerServices(serviceFactory) {
    serviceFactory.registerServiceCreator('ErrorLogging', function () {
      const apmService = serviceFactory.getService('ApmServer');
      const configService = serviceFactory.getService('ConfigService');
      const loggingService = serviceFactory.getService('LoggingService');
      const transactionService = serviceFactory.getService('TransactionService');
      return new ErrorLogging(apmService, configService, loggingService, transactionService);
    });
  }
};

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/error-logging/stack-trace-service.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/error-logging/stack-trace-service.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var errorStackParser = __webpack_require__(/*! error-stack-parser */ "./node_modules/elastic-apm-js-core/node_modules/error-stack-parser/error-stack-parser.js");

class StackTraceService {
  constructor(configService, loggingService) {
    this._configService = configService;
    this._loggingService = loggingService;
  }

  createStackTraces(errorEvent) {
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
        function: stack.functionName || '<anonymous>',
        lineno: stack.lineNumber,
        colno: stack.columnNumber
      };
    });
    return stackTraces;
  }

  filterInvalidFrames(frames) {
    var result = [];

    if (Array.isArray(frames)) {
      result = frames.filter(function (f) {
        return typeof f['filename'] !== 'undefined' && typeof f['lineno'] !== 'undefined';
      });
    }

    return result;
  }

  filePathToFileName(fileUrl) {
    var origin = window.location.origin || window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');

    if (fileUrl.indexOf(origin) > -1) {
      fileUrl = fileUrl.replace(origin + '/', '');
    }

    return fileUrl;
  }

  cleanFilePath(filePath) {
    if (!filePath) {
      filePath = '';
    }

    if (filePath === '<anonymous>') {
      filePath = '';
    }

    return filePath;
  }

  isFileInline(fileUrl) {
    if (fileUrl) {
      return window.location.href.indexOf(fileUrl) === 0;
    } else {
      return false;
    }
  }

}

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

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var ErrorLogging = __webpack_require__(/*! ./error-logging */ "./node_modules/elastic-apm-js-core/src/error-logging/index.js");

var PerformanceMonitoring = __webpack_require__(/*! ./performance-monitoring */ "./node_modules/elastic-apm-js-core/src/performance-monitoring/index.js");

var ServiceFactory = __webpack_require__(/*! ./common/service-factory */ "./node_modules/elastic-apm-js-core/src/common/service-factory.js");

var utils = __webpack_require__(/*! ./common/utils */ "./node_modules/elastic-apm-js-core/src/common/utils.js");

var patching = __webpack_require__(/*! ./common/patching */ "./node_modules/elastic-apm-js-core/src/common/patching/index.js");

module.exports = {
  createServiceFactory: function () {
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

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/performance-monitoring/capture-hard-navigation.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/performance-monitoring/capture-hard-navigation.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const Span = __webpack_require__(/*! ./span */ "./node_modules/elastic-apm-js-core/src/performance-monitoring/span.js");

const Url = __webpack_require__(/*! ../common/url */ "./node_modules/elastic-apm-js-core/src/common/url.js");

const eventPairs = [['domainLookupStart', 'domainLookupEnd', 'Domain lookup'], ['connectStart', 'connectEnd', 'Making a connection to the server'], ['requestStart', 'responseEnd', 'Requesting and receiving the document'], ['domLoading', 'domInteractive', 'Parsing the document, executing sync. scripts'], ['domContentLoadedEventStart', 'domContentLoadedEventEnd', 'Fire "DOMContentLoaded" event'], ['loadEventStart', 'loadEventEnd', 'Fire "load" event']];
const spanThreshold = 5 * 60 * 1000;

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

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/performance-monitoring/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/performance-monitoring/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var PerformanceMonitoring = __webpack_require__(/*! ./performance-monitoring */ "./node_modules/elastic-apm-js-core/src/performance-monitoring/performance-monitoring.js");

var TransactionService = __webpack_require__(/*! ./transaction-service */ "./node_modules/elastic-apm-js-core/src/performance-monitoring/transaction-service.js");

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

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/performance-monitoring/performance-monitoring.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/performance-monitoring/performance-monitoring.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const {
  sanitizeObjectStrings,
  sanitizeString,
  checkSameOrigin,
  isDtHeaderValid,
  getDtHeaderValue,
  merge,
  stripQueryStringFromUrl,
  parseDtHeaderValue
} = __webpack_require__(/*! ../common/utils */ "./node_modules/elastic-apm-js-core/src/common/utils.js");

const patchingSub = __webpack_require__(/*! ../common/patching */ "./node_modules/elastic-apm-js-core/src/common/patching/index.js").subscription;

const {
  globalState
} = __webpack_require__(/*! ../common/patching/patch-utils */ "./node_modules/elastic-apm-js-core/src/common/patching/patch-utils.js");

const {
  SCHEDULE,
  INVOKE,
  XMLHTTPREQUEST_SOURCE,
  FETCH_SOURCE
} = __webpack_require__(/*! ../common/constants */ "./node_modules/elastic-apm-js-core/src/common/constants.js");

class PerformanceMonitoring {
  constructor(apmServer, configService, loggingService, transactionService) {
    this._apmServer = apmServer;
    this._configService = configService;
    this._logginService = loggingService;
    this._transactionService = transactionService;
  }

  init() {
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

  getXhrPatchSubFn() {
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

  injectDtHeader(span, target) {
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

  extractDtHeader(target) {
    var configService = this._configService;
    var headerName = configService.get('distributedTracingHeaderName');

    if (target) {
      return parseDtHeaderValue(target[headerName]);
    }
  }

  setTransactionContext(transaction) {
    var context = this._configService.get('context');

    if (context) {
      transaction.addContext(context);
    }
  }

  filterTransaction(tr) {
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

  prepareTransaction(transaction) {
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

  createTransactionDataModel(transaction) {
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

  createTransactionPayload(transaction) {
    this.prepareTransaction(transaction);
    var filtered = this.filterTransaction(transaction);

    if (filtered) {
      return this.createTransactionDataModel(transaction);
    }
  }

  sendTransactions(transactions) {
    var payload = transactions.map(this.createTransactionPayload.bind(this)).filter(function (tr) {
      return tr;
    });

    this._logginService.debug('Sending Transactions to apm server.', transactions.length); // todo: check if transactions are already being sent


    var promise = this._apmServer.sendTransactions(payload);

    return promise;
  }

  convertTransactionsToServerModel(transactions) {
    return transactions.map(this.createTransactionDataModel.bind(this));
  }

  groupSmallContinuouslySimilarSpans(transaction, threshold) {
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

  checkBrowserResponsiveness(transaction, interval, buffer) {
    var counter = transaction.browserResponsivenessCounter;

    if (typeof interval === 'undefined' || typeof counter === 'undefined') {
      return true;
    }

    var duration = transaction.duration();
    var expectedCount = Math.floor(duration / interval);
    var wasBrowserResponsive = counter + buffer >= expectedCount;
    return wasBrowserResponsive;
  }

}

module.exports = PerformanceMonitoring;

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/performance-monitoring/span-base.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/performance-monitoring/span-base.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const {
  isUndefined,
  generateRandomId,
  setTag,
  merge
} = __webpack_require__(/*! ../common/utils */ "./node_modules/elastic-apm-js-core/src/common/utils.js");

class SpanBase {
  // context
  constructor(name, type, options) {
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

  ensureContext() {
    if (!this.context) {
      this.context = {};
    }
  }

  addTags(tags) {
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

  addContext(context) {
    if (!context) return;
    this.ensureContext();
    merge(this.context, context);
  }

  end() {
    if (this.ended) {
      return;
    }

    this.ended = true;
    this._end = window.performance.now();
    this.callOnEnd();
  }

  callOnEnd() {
    if (typeof this.onEnd === 'function') {
      this.onEnd(this);
    }
  }

  duration() {
    if (isUndefined(this._end) || isUndefined(this._start)) {
      return null;
    }

    var diff = this._end - this._start;
    return parseFloat(diff);
  }

}

module.exports = SpanBase;

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/performance-monitoring/span.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/performance-monitoring/span.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const BaseSpan = __webpack_require__(/*! ./span-base */ "./node_modules/elastic-apm-js-core/src/performance-monitoring/span-base.js");

class Span extends BaseSpan {
  constructor(name, type, options) {
    super(name, type, options);
    this.parentId = this.options.parentId;
    this.subType = undefined;
    this.action = undefined;

    if (this.type.indexOf('.') !== -1) {
      var fields = this.type.split('.', 3);
      this.type = fields[0];
      this.subType = fields[1];
      this.action = fields[2];
    }

    this.sync = this.options.sync;
  }

}

module.exports = Span;

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/performance-monitoring/transaction-service.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/performance-monitoring/transaction-service.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var Transaction = __webpack_require__(/*! ./transaction */ "./node_modules/elastic-apm-js-core/src/performance-monitoring/transaction.js");

var utils = __webpack_require__(/*! ../common/utils */ "./node_modules/elastic-apm-js-core/src/common/utils.js");

var Subscription = __webpack_require__(/*! ../common/subscription */ "./node_modules/elastic-apm-js-core/src/common/subscription.js");

var captureHardNavigation = __webpack_require__(/*! ./capture-hard-navigation */ "./node_modules/elastic-apm-js-core/src/performance-monitoring/capture-hard-navigation.js").captureHardNavigation;

class TransactionService {
  constructor(logger, config) {
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

  shouldCreateTransaction() {
    return this._config.isActive();
  }

  getOrCreateCurrentTransaction() {
    if (!this.shouldCreateTransaction()) {
      return;
    }

    var tr = this.getCurrentTransaction();

    if (!utils.isUndefined(tr) && !tr.ended) {
      return tr;
    }

    return this.createZoneTransaction();
  }

  getCurrentTransaction() {
    return this.currentTransaction;
  }

  setCurrentTransaction(value) {
    this.currentTransaction = value;
  }

  createTransaction(name, type, options) {
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

  createZoneTransaction() {
    return this.createTransaction('ZoneTransaction', 'transaction');
  }

  startCounter(transaction) {
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

  sendPageLoadMetrics(name) {
    var tr = this.startTransaction(name, 'page-load');
    tr.detectFinish();
    return tr;
  }

  capturePageLoadMetrics(tr) {
    var self = this;

    var capturePageLoad = self._config.get('capturePageLoad');

    if (capturePageLoad && !self._alreadyCapturedPageLoad && tr.isHardNavigation) {
      tr.addMarks(self.marks);
      captureHardNavigation(tr);
      self._alreadyCapturedPageLoad = true;
      return true;
    }
  }

  startTransaction(name, type, options) {
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

  applyAsync(fn, applyThis, applyArgs) {
    return this.runOuter(function () {
      return Promise.resolve().then(function () {
        return fn.apply(applyThis, applyArgs);
      }, function (reason) {
        console.log(reason);
      });
    });
  }

  shouldIgnoreTransaction(transactionName) {
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

  startSpan(name, type, options) {
    var trans = this.getOrCreateCurrentTransaction();

    if (trans) {
      this._logger.debug('TransactionService.startSpan', name, type);

      var span = trans.startSpan(name, type, options);
      return span;
    }
  }

  add(transaction) {
    if (!this._config.isActive()) {
      return;
    }

    this._subscription.applyAll(this, [transaction]);

    this._logger.debug('TransactionService.add', transaction);
  }

  subscribe(fn) {
    return this._subscription.subscribe(fn);
  }

  addTask(taskId) {
    var tr = this.getOrCreateCurrentTransaction();

    if (tr) {
      tr.addTask(taskId);

      this._logger.debug('TransactionService.addTask', taskId);
    }

    return taskId;
  }

  removeTask(taskId) {
    var tr = this.getCurrentTransaction();

    if (!utils.isUndefined(tr) && !tr.ended) {
      tr.removeTask(taskId);

      this._logger.debug('TransactionService.removeTask', taskId);
    }
  }

  detectFinish() {
    var tr = this.getCurrentTransaction();

    if (!utils.isUndefined(tr) && !tr.ended) {
      tr.detectFinish();

      this._logger.debug('TransactionService.detectFinish');
    }
  }

  runOuter(fn, applyThis, applyArgs) {
    return fn.apply(applyThis, applyArgs);
  }

}

module.exports = TransactionService;

/***/ }),

/***/ "./node_modules/elastic-apm-js-core/src/performance-monitoring/transaction.js":
/*!************************************************************************************!*\
  !*** ./node_modules/elastic-apm-js-core/src/performance-monitoring/transaction.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const Span = __webpack_require__(/*! ./span */ "./node_modules/elastic-apm-js-core/src/performance-monitoring/span.js");

const SpanBase = __webpack_require__(/*! ./span-base */ "./node_modules/elastic-apm-js-core/src/performance-monitoring/span-base.js");

const {
  generateRandomId,
  getNavigationTimingMarks,
  getPaintTimingMarks,
  merge,
  extend,
  getPageMetadata,
  removeInvalidChars
} = __webpack_require__(/*! ../common/utils */ "./node_modules/elastic-apm-js-core/src/common/utils.js");

class Transaction extends SpanBase {
  constructor(name, type, options) {
    super(name, type, options);
    this.traceId = generateRandomId();
    this.marks = undefined;
    this.spans = [];
    this._activeSpans = {};
    this._scheduledTasks = {};
    this.nextAutoTaskId = 0;
    this.isHardNavigation = false;
    this.sampled = Math.random() <= this.options.transactionSampleRate;
  }

  addNavigationTimingMarks() {
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
        agent
      });
    }
  }

  addMarks(obj) {
    this.marks = merge(this.marks || {}, obj);
  }

  mark(key) {
    var skey = removeInvalidChars(key);

    var now = window.performance.now() - this._start;

    var custom = {};
    custom[skey] = now;
    this.addMarks({
      custom
    });
  }

  redefine(name, type, options) {
    this.name = name;
    this.type = type;
    this.options = options;
  }

  startSpan(name, type, options) {
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

  isFinished() {
    var scheduledTasks = Object.keys(this._scheduledTasks);
    return scheduledTasks.length === 0;
  }

  detectFinish() {
    if (this.isFinished()) this.end();
  }

  end() {
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

  addTask(taskId) {
    // todo: should not accept more tasks if the transaction is alreadyFinished]
    if (typeof taskId === 'undefined') {
      taskId = 'autoId' + this.nextAutoTaskId++;
    }

    this._scheduledTasks[taskId] = taskId;
    return taskId;
  }

  removeTask(taskId) {
    delete this._scheduledTasks[taskId];
    this.detectFinish();
  }

  addEndedSpans(existingSpans) {
    this.spans = this.spans.concat(existingSpans);
  }

  resetSpans() {
    this.spans = [];
  }

  _onSpanEnd(span) {
    this.spans.push(span); // Remove span from _activeSpans

    delete this._activeSpans[span.id];
  }

  _adjustEndToLatestSpan() {
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

  _adjustStartToEarliestSpan() {
    var span = getEarliestSpan(this.spans);

    if (span && span._start < this._start) {
      this._start = span._start;
    }
  }

}

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

/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/services/report/kibanaApm/api.ts":
/*!**********************************************!*\
  !*** ./src/services/report/kibanaApm/api.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "./src/services/report/kibanaApm/defaultConfig.ts":
/*!********************************************************!*\
  !*** ./src/services/report/kibanaApm/defaultConfig.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "./src/services/report/kibanaApm/handle.ts":
/*!*************************************************!*\
  !*** ./src/services/report/kibanaApm/handle.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

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

/***/ }),

/***/ "./src/services/report/kibanaApm/index.ts":
/*!************************************************!*\
  !*** ./src/services/report/kibanaApm/index.ts ***!
  \************************************************/
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

var defaultConfig_1 = __importDefault(__webpack_require__(/*! ./defaultConfig */ "./src/services/report/kibanaApm/defaultConfig.ts"));

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

var transaction_1 = __importDefault(__webpack_require__(/*! ./transaction */ "./src/services/report/kibanaApm/transaction.ts"));

var handle_1 = __webpack_require__(/*! ./handle */ "./src/services/report/kibanaApm/handle.ts");

var api_1 = __webpack_require__(/*! ./api */ "./src/services/report/kibanaApm/api.ts");

var monitor_1 = __webpack_require__(/*! ./monitor */ "./src/services/report/kibanaApm/monitor.ts"); // report Server 


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

/***/ }),

/***/ "./src/services/report/kibanaApm/monitor.ts":
/*!**************************************************!*\
  !*** ./src/services/report/kibanaApm/monitor.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

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
    //不能用布尔值
    isTimeout: index_1.Tools.toString(isTimeout),
    isError: index_1.Tools.toString(isError)
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
      typeName: reportParams.type + "-" + (tags ? tags.type : '')
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

/***/ }),

/***/ "./src/services/report/kibanaApm/transaction.ts":
/*!******************************************************!*\
  !*** ./src/services/report/kibanaApm/transaction.ts ***!
  \******************************************************/
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
}); //elastic-apm-js-core 的ServiceFactory提供的TransactionService是返回的单例模式
//暂时只能从源代码库中拉取原始Transaction

var transaction_1 = __importDefault(__webpack_require__(/*! elastic-apm-js-core/src/performance-monitoring/transaction */ "./node_modules/elastic-apm-js-core/src/performance-monitoring/transaction.js"));

var elastic_apm_js_core_1 = __webpack_require__(/*! elastic-apm-js-core */ "./node_modules/elastic-apm-js-core/src/index.js");

var index_1 = __webpack_require__(/*! @util/index */ "@util/index");

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