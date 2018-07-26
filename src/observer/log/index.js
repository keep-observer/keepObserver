

import defaultConfig from './defaultConfig.js';
import * as tool from '../../tool/tool.js';



// 获取系统信息
class KeepObserverLog {
	//构造函数
	constructor(config){
		//存混合配置
		this._config  = tool.extend(defaultConfig,config)
		//上报名
		this._typeName = 'log'
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
	_init(){
		var self = this;
		//替换window.console变量
		var baseLogList = ['log','info','warn','debug','error'];

		if(!window.console){
			window.console = {};
		}

		baseLogList.map(function(method){
			self.console[method] = window.console[method];
		})
		self.console.time = window.console.time;
		self.console.timeEnd = window.console.timeEnd;
		self.console.clear = window.console.clear;

		baseLogList.map(method =>{
			window.console[method] = (...args) =>{
				//是否处于开发模式下
				if(self._develop && self.console[method] && tool.isFunction(self.console[method])){
					self.console[method](...args);
				}
				//交给拦截处理信息
				self._handleMessage(method,args);
			}
		})
		//处理time timeEnd clear
		var timeLog = {};
		window.console.time = function(label){
			timeLog[label] = Date.now();
		}
		window.console.timeEnd = function(label){
			var pre = timeLog[label];
			var type = 'timeEnd'
			if(pre){
				var content = label+':'+(Date.now() - pre)+'ms';
				self._handleMessage(type,[content]);
				//开发模式下打印
				if(self._develop && self.console.log && tool.isFunction(self.console.log)){
					self.console.log(content);
				}
			}else{
				var content = label+': 0ms';
				self._handleMessage(type,[content]);
				//开发模式下打印
				if(self._develop && self.console.log && tool.isFunction(self.console.log)){
					self.console.log(content);
				}
			}
		}
		window.console.clear = (...args) =>{
			self._handleMessage('clear',args);
			self.console.clear.apply(window.console, args);
		}
		//是否需要捕获跨域JS错误
		if(self._config.catchCrossDomain && !self.$createElement){
			//侵入document.createElement  实现跨域JS捕获错误信息
			if(window.document || window.document.createElement){
				self.$createElement = window.document.createElement
				window.document.createElement = function(type){
					var resultDom = self.$createElement.call(window.document,type)
					if(type === 'script'){
						resultDom.crossOrigin = 'anonymous';
					}
					return resultDom
				}
			}
		}
		//监控window.onerror
		if (typeof window.addEventListener != 'undefined') { 
			window.addEventListener('error',(...args) =>{self._handleError(...args)},true); 
		} else { 
			window.attachEvent('onerror',(...args) =>{self._handleError(...args)}) 
		}
	}
	/*
		处理打印信息
		上报报文如下
		@: type string  (log|info|debug.... jsError)
		@: data string  (JSON格式对象报文)
	 */
	_handleMessage(type,agrs){
		var self = this;
		var reportData = {}
		//agrs不是数组 或是空数组 则不处理
		if(!tool.isArray(agrs) || agrs.length === 0){
			return false;
		}
		reportData.type = type;
		//直接转成JSON
		reportData.data = JSON.stringify(agrs);
		//上报
		self.noticeReport(reportData)
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
	_handleError(errorEvent){
		var self = this;
		var errorObj = {};
		var url = errorEvent.filename || errorEvent.url || false
		//可能是跨域资源JS出现错误 这获取不到详细信息
		if(errorEvent.message === 'Script error.' && !url){
			errorObj.errMsg = 'jsError!可能是跨域资源的JS出现错误,无法获取到错误URL定位,错误信息为:'+errorEvent.message;
			errorObj.url = '';
			errorObj.line = 0;
			errorObj.colum = 0;
			setTimeout(function(){
				self._handleMessage('jsError',[errorObj])
			})
			return false;
		}
		//处理错误信息
		errorObj.errMsg = errorEvent.message || '未获取到错误信息'
		errorObj.url = url;
		errorObj.line = errorEvent.lineno || '未获取到错误行'
		errorObj.colum = errorEvent.colno || '未获取到错误列'
		setTimeout(function(){
			self._handleMessage('jsError',[errorObj])
		})
    	return true;
	}
	/*
		停止监听
	 */
	stopObserver(){
		window.console.log = this.console.log
		window.console.error = this.console.error
		window.console.info = this.console.info
		window.console.debug = this.console.debug
		window.console.warn = this.console.warn
		window.console.time = this.console.time 
		window.console.timeEnd = this.console.timeEnd 
		window.console.clear = this.console.clear
		this.console = {};
		if(this._config.catchCrossDomain){
			window.document.createElement = this.$createElement
			this.$createElement = false;
		}
	}
	/*
		开始监听
	 */
	startObserver(){
		//启动监听
		this._init();
	}
	/***************  上报相关  ******************/
	//注册上报监听
	addReportListener(callback){
		if(callback){
			this.eventListener.push(callback)
		}
	}
	/*
		通知上报
	 */
	noticeReport(content){
		if(this.eventListener.length === 0){
			return false;
		}
		//通知上报
		this.eventListener.map(function(item){
			if(tool.isFunction(item)){
				item(content);
			}
		})
	}
}




export default KeepObserverLog



