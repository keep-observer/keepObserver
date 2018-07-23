
import * as tool from '../tool/tool.js';

//继承通信类
import keepObserverReport from '../report/index.js';

/********  子类  ********/
//系统信息和首屏分析
import KeepObserverSystem from '../observer/system/index.js';
//网络请求拦截分析
import KeepObserverNetwork from '../observer/network/index.js';
//日志拦截请求分享
import KeepObserverLog from '../observer/log/index.js';
//vue错误监控和性能分析
import KeepObserverVue from '../observer/vue/index.js';




//keepObserver 配置类  实例函数派生父类
class  keepObserverConfig extends keepObserverReport {

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
		this._version = '0.0.1';
		//项目
		this._project = config.project || 'unKnow';
		//初始化系统详情和首屏分析
		this.initSyStem()
		//初始化网络拦截分解
		this.initNetWork();
		//初始化日志拦截
		this.initLog();
		//判断是否开启vue监控
		if(this._config.isVue && !tool.isEmptyObject(this._config.vueInstance)){
			this.initVue();
		}
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
			//系统信息和首屏性能立即上报
			var control = {};
			control.lazy = false;
			self.$getReportContent(reportParams,control)
		})
	}
	/*
		开始监控网络
		开始后将替换window.XMLHttpRequest相关原生方法
	 */
	initNetWork(){
		var self = this;
		//初始化上传相关实例
		var CustomConfig = self._config.networkCusom? self._config.networkCusom: {};
		self.$network = new KeepObserverNetwork(CustomConfig)
		//注册监听
		self.$network.addReportListener(function(ajaxInfo){
			var reportParams = {};
			var control = null;
			reportParams.typeName = 'network';
			reportParams.location = window.location.href;
			reportParams.data = ajaxInfo;
			//是否请求出错
			if(ajaxInfo.isError){
				control = {};
				control.lazy = false;
				//是否是超时请求,超时请求不合并上报
				control.baseExtend = ajaxInfo.isTimeout? false :true;
			}
			self.$getReportContent(reportParams,control)
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
		self.$log.addReportListener(function(logInfo){
			var reportParams = {};
			var control = null;
			reportParams.typeName = 'log';
			reportParams.location = window.location.href;
			reportParams.data = logInfo;
			//如果是clear,清除之前的console.log相关信息
			if(logInfo.type === 'clear'){
				control = {};
				control.preDelete = true;
				control.ignore = true
			}
			//如果是JS运行报错,或者打印错误error合并上报所有内容
			if(logInfo.type === 'jsError' || logInfo.type === 'error'){
				control = {};
				control.lazy = false;
				control.baseExtend = true;
			}
			self.$getReportContent(reportParams,control)
		})
	}
	/*
		开始监控vue
		监控vue运行错误和警告
		performance暂时未做
	 */
	initVue(){
		var self = this;
		//初始化上传相关实例
		var CustomConfig = self._config.vueCusom? self._config.vueCusom: {};
		CustomConfig.vueInstance = self._config.vueInstance;
		//判断是否存在实例
		if(!CustomConfig.vueInstance.vue){
			return false;
		}
		//注册监听
		self.$vue = new KeepObserverVue(CustomConfig)
		//注册监听
		self.$vue.addReportListener(function(vueInfo){
			var reportParams = {};
			reportParams.typeName = 'vue';
			reportParams.location = window.location.href;
			reportParams.data = vueInfo;
			var control = {};
			if(vueInfo.isError){
				control.lazy = false;
				control.baseExtend = true;
			}
			self.$getReportContent(reportParams,control)
		})
	}
	/*************** end observer *******************/
}




export default keepObserverConfig;


