


//继承通信类
import keepObserverReport from '../report/index.js';

/********  子类  ********/
//系统信息和首屏分析
import KeepObserverSystem from '../observer/system/index.js';
//网络请求拦截分析
import KeepObserverNetwork from '../observer/network/index.js';
//日志拦截请求分享
import KeepObserverLog from '../observer/log/index.js';




//keepObserver 配置类  实例函数派生父类
class  keepObserverConfig extends keepObserverReport {

	constructor(config){
		//上报配置
		var CustomConfig = config.reportCusom || {};
		//是否是开发模式
		CustomConfig.develop = config.develop? true : false;
		//继承上报类
		super(CustomConfig)
		/********************  开始本实例配置  *******************/
		//获取实例配置
		this._config = config
		//版本号
		this._version = '0.0.1';
		//项目
		this._project = config.project?config.project:'unKnow';
		//初始化系统详情和首屏分析
		this.initSyStem()
		//初始化网络拦截分解
		this.initNetWork();
		//初始化日志拦截
		this.initLog();
	}

	/*****************以下监控默认开启*****************/
	/*
		开始识别系统
		开始后将识别平台系统
		支持performance的系统,将开启平台监控
	 */
	initSyStem(){
		var self = this;
		//初始化上传相关实例
		var CustomConfig = self._config.systemCusom? self._config.systemCusom: {};
		self.$system = new KeepObserverSystem(CustomConfig)
		//注册监听
		self.$system.addReportListener(function(systemInfo){
			var reportParams = {};
			reportParams.typeName = 'system';
			reportParams.location = window.location.href;
			reportParams.data = systemInfo;
			self.$getReportContent(reportParams)
		})
	}
	/*
		开始监控网络
		开始后将替换window.console相关原生方法
	 */
	initNetWork(){
		var self = this;
		//初始化上传相关实例
		var CustomConfig = self._config.networkCusom? self._config.networkCusom: {};
		self.$network = new KeepObserverNetwork(CustomConfig)
		//注册监听
		self.$network.addReportListener(function(ajaxInfo){
			var reportParams = {};
			reportParams.typeName = 'network';
			reportParams.location = window.location.href;
			reportParams.lazy = true;
			reportParams.data = ajaxInfo;
			if(ajaxInfo.isError){
				reportParams.lazy = false;
			}
			self.$getReportContent(reportParams)
		})
	}
	/*
		开始监控日志
		开始后将替换window.console相关原生方法
	 */
	initLog(){
		var self = this;
		//初始化上传相关实例
		var CustomConfig = self._config.logCusom? self._config.logCusom: {};
		//是否是开发模式
		CustomConfig.develop = self._config.develop? true : false;
		self.$log = new KeepObserverLog(CustomConfig)
		//注册监听
	}
}




export default keepObserverConfig;


