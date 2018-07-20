

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
		//监控window.onerror
		if (typeof window.addEventListener != 'undefined') { 
			window.addEventListener('error',self._handleError,true); 
		} else { 
			window.attachEvent('onerror',self._handleError) 
		} 
	}
	/*
		处理打印信息
	 */
	_handleMessage(type,agrs){
		var self = this;
		self.console.log(type,agrs);
	}
	/*
		监听 window.onerror,并处理错误信息
		@err 		:错误信息
		@source     :错误来源
		@line       :代码错误行
		@colno      :代码错误列
		@stack      :部分浏览器包含这条堆栈信息 这里熟悉支持不全面
	 */
	_handleError(err,source,line,colno,stack){
		console.log(err,source,'error');
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
		上报报文如下
		@: type string  (log|info|debug.... jsError)
		@: data string  (JSON格式对象报文)
		@: baseExtend  Boolean
		@: preDelete   Boolean
		@: ignore 	   Boolean
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



