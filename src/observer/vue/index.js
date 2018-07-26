

import defaultConfig from './defaultConfig.js';
import * as tool from '../../tool/index.js';



// 获取系统信息
class KeepObserverVue {
	//构造函数
	constructor(config){
		//存混合配置
		this._config  = tool.extend(defaultConfig,config)
		//上报名
		this._typeName = 'vue'
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
	_init(){
		var self = this;
		if(self._vue.config){
			self._vue.config.errorHandler = (...args) => {self._handleVueError(...args)}
		}
	}
	/*
		处理监控vue错误信息
	 */
	_handleVueError(err,vm,info){
		var self = this;
		var errInfo = {}
		errInfo.infoMsg =  tool.toString(info);
		//是否存在堆栈信息
		if(tool.isObject(err) && err.stack && err.message){
			errInfo.errMsg = tool.toString(err.message)
			errInfo.stackMsg = tool.toString(err.stack)
		}else{
			errInfo.errMsg = tool.toString(err);
		}
		errInfo.isError = true
		//上报
		self.noticeReport(errInfo)
	}
	/*
		停止监听
	 */
	stopObserver(){
		if(this._vue.config){
			this._vue.config.errorHandler = null;
		}
	}
	/*
		开始监听
	 */
	startObserver(){
		//开启vue错误监听
		this._init();
	}
	/***************  上报相关  ******************/
	//注册上报监听
	addReportListener(callback){
		if(callback){
			this.eventListener.push(callback)
		}
	}
	//通知上报
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




export default KeepObserverVue

