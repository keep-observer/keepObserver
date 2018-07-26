


import * as tool from '../tool/index.js';
//继承通信类
import keepObserverReport from '../report/index.js';


//相关监控初始化 和一些处理
import _initSystem from './_system.js';
import _initNetWork from './_network.js';
import _initLog from './_log.js';
import _initVue from './_vue.js';




class KeepObserver extends keepObserverReport {
	//构造函数
	constructor(config){
		//上报配置
		var CustomConfig = config.reportCusom || {};
		//是否是开发模式
		CustomConfig.develop = config.develop? true : false;
		//开发环境下获取报文是否打印
		CustomConfig.developGetMsgLog = config.developGetMsgLog? true : false,
		//开发环境下丢弃数据 是否打印出来
		CustomConfig.develogDiscardLog = config.develogDiscardLog? true : false,
		//开发环境下删除出数据 是否打印出来
		CustomConfig.develogDeleteLog  = config.develogDeleteLog? true : false,
		//继承上报类
		super(CustomConfig)
		/********************  开始本实例配置  *******************/
		//获取实例配置
		this._config = config
		
		//版本号
		this._version = '1.0.1';
		//项目
		this._project = config.project || 'unKnow';
		//监听内容
		this.observerKey = {};
		//初始化系统详情和首屏分析
		this._initSyStem()
		//初始化网络拦截分解
		this._initNetWork();
		//初始化日志拦截
		this._initLog();
		//判断是否开启vue监控
		if(this._config.isVue && this._config.vueInstance){
			this._initVue();
		}
	}
	/*****************以下监控默认开启*****************/
	/*
		开始识别系统
		开始后将识别平台系统
		支持performance的系统,将开启平台监控
	 */
	_initSyStem(){
		_initSystem.call(this);
	}
	/*
		开始监控网络
		开始后将替换window.XMLHttpRequest相关原生方法
	 */
	_initNetWork(){
		_initNetWork.call(this);
		this.observerKey.network = true;
	}
	/*
		开始监控日志
		开始后将替换window.console相关原生方法
	 */
	_initLog(){
		_initLog.call(this);
		this.observerKey.log = true;
	}
	/*
		开始监控vue
		监控vue运行错误和警告
		performance暂时未做
	 */
	_initVue(){
		_initVue.call(this);
		this.observerKey.vue = true;		
	}
	/*************** end observer *******************/
	//设置自定义上报内容
	setCustomReport(params){
		if(this.$getCustomeReport){
			this.$getCustomeReport(params);
		}
	}
	//停止监听
	stopObserver(key){
		if(this.observerKey[key] && this['$'+key].stopObserver){
			this['$'+key].stopObserver();
			this.observerKey[key] = false;
		}
	}
	//停止全部监听
	stopAllObserver(){
		for(var key in this.observerKey){
			if(this['$'+key].stopObserver){
				this['$'+key].stopObserver();
				this.observerKey[key] = false;
			}
		}
	}
	//打开监听
	startObserver(key){
		if(!this.observerKey[key] && this['$'+key].startObserver){
			this['$'+key].startObserver();
			this.observerKey[key] = true;
		}
	}
	//打开全部监听
	startAllObserver(){
		for(var key in this.observerKey){
			if(this['$'+key].startObserver){
				this['$'+key].startObserver();
				this.observerKey[key] = true;
			}
		}
	}
}







export default KeepObserver;



