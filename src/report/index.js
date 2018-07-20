



import defaultConfig from './defaultConfig.js';
import * as tool from '../tool/tool.js';



// 上报服务器相关
class KeepObserverReport {
	//构造函数
	constructor(config){
		//存混合配置
		this.$report_config  = tool.extend(defaultConfig,config)
		//上传数据保存
		this.reportData = {};

		//当前是否处于开发模式
		this.develop = this.$report_config.develop;
		this.develogDeleteLog = this.$report_config.develogDeleteLog;
		this.develogDiscardLog = this.$report_config.develogDiscardLog
		//开发模式下的log 替换window.console.log
		this.$devLog = false;

		//初始化
		this.$init();
	}
	/*
		初始化上报类参数
		复制this.reportData并从strong里面复原数据
		如果是开发模式 替换window.console.log
	 */
	$init(){
		var self = this;
		//初始化this.reportData
		var handleType = self.$report_config.$observer_Type
		handleType.forEach( function(type) {
			var cacheData = tool.getStorage(type)
			self.reportData[type] = [];
			if(cacheData){
				self.reportData[type] = cacheData
			}
		});
		//如果是开发模式 替换window.console.log
		if(self.develop){
			self.$devLog = window.console.log
			window.console.log = (...args) => {
		      	self.$devLog.apply(window.console, args);
		    };
		}
	}
	/*
		接受需要上报的内容
		@params  object  = {
			@ .typeName string   	  (no null)	      上报类型名
			@ .data  array or object  (no null) 	  上报内容
		}
		@ .control null and object = {
			@ .lazy       Boolean          		      是延时上报(由手动上传合并上报或者又下一次该上报合并上报) 不传立即上报
			@ .baseExtend Boolean					  是否合并基础监控信息包括log以及network信息一起上报
			@ .preDelete  Boolean                     是否删除之前保存typeName的缓存数据
			@ .ignore     Boolean					  是否忽略本条数据
		}
	 */
	$getReportContent(params,control){
		//判断数据合法性
		if(!params || !params.typeName || !params.data || (!tool.isArray(params.data) && !tool.isObject(params.data))){
			return false;
		}
		//添加上传时间搓
		params.reportTime = new Date().getTime();
		//是否是开发模式需要打印
		if(this.develop){
			var log = tool.extend({},params)
			log.title= '获得'+log.typeName+"类型监控数据";
			this.handleDevelopLog(log)
		}
		//是否删除之前保存的数据
		if(control && control.preDelete){
			this.removeReportData(params.typeName)
		}
		//是否忽略本条数据
		if(control && control.ignore){
			return false;
		}
		//保存到上报数据中
		var cacheLen = this.saveReportData(params);
		var maxCache = this.$report_config['max_'+params.typeName+'_cache'];
		var isReport = this.$report_config['max_'+params.typeName+'_fillIsReport'];
		//是否立即上报 或者缓存已满上报
		if( (control && !control.lazy) || (isReport && cacheLen === maxCache)){
			//是否合并上报
			if(control && control.baseExtend ){
				this.handleAllReport();
			}else{
				this.handleReport(params.typeName);
			}
		}
	}
	/* 
		保存处理上报数据
		@params type object
		@ .typeName string   	  (no null)	      上报类型名
		@ .data  array or object  (no null) 	  上报内容
		@ .lazy bollen          				  是延时上报(由手动上传合并上报或者又下一次该上报合并上报) 不传立即上报
		**********************************
		# return  当前保存数据长度
	 */
	saveReportData(params){
		var type = params.typeName
		//如果没有该上报类型,那么属于未知内容
		if(!this.reportData[type]){
			type = 'unKownType'
		}
		var reportData = this.reportData[type];
		//是否延时上报,如果没有添加到上报数据中
		var maxCache = this.$report_config['max_'+type+'_cache'];
		maxCache = maxCache? maxCache:this.$report_config['max_cache'];
		//如果当前存储超过长度 那么弹出最早的数据
		if(reportData.length +1 >maxCache){
			var discard = reportData.shift()
			//开发模式打印
			if(this.develop && this.develogDiscardLog){
				discard.title = type+'类型监控数据超出缓存长度丢弃内容';
				this.handleDevelopLog(discard)
			}
		}
		reportData.push(params)
		this.reportData[type] = reportData;
		//保存到locationStorage中
		tool.setStorage(type,reportData)
		return reportData.length;
	}
	/*
		删除保存的上报数据
		@params type string    上报类型
	 */
	removeReportData(type){
		if(this.reportData[type]){
			this.reportData[type] = [];
			tool.removeStorage(type)
			//开发模式下打印
			if(this.develop && this.develogDeleteLog){
				this.$devLog(type+'类型监控数据已清除')
			}
		}
	}
	/* 
		开发模式打印
		@params type object
		@ .typeName string   	  (no null)	      上报类型名
		@ .data  array or object  (no null) 	  上报内容
		@ .title string                           打印说明
	 */
	handleDevelopLog(logParams){
		//简单的打印出来
		this.$devLog(logParams)
	}
	/*
		处理上报
		@params type string    上报类型
	 */
	handleReport(type){
		var self = this;
		var reportData = {}
		reportData.data = tool.extend({},self.reportData[type]);
		//处理上报类型, 添加信息头
		reportData.reportType = type;
		reportData.project = this._project;
		reportData.projectVersion = this._version
		reportData.reportTime = new Date().getTime();
		//开发模式下打印上报数据
		if(self.develop){
			var log = tool.extend({},reportData)
			log.title = type+"类型即将上报服务器,上报内容在data中"
			this.handleDevelopLog(log)
		}
		//删除相关数据
		self.removeReportData(type)
		//上传到服务器。。 暂时未做	
	}
	/*
		上报全部信息
	*/
	handleAllReport(){
		var self = this;
		var reportData  = {}
		reportData.data = {}
		reportData.reportType = 'all';
		reportData.project = this._project;
		reportData.projectVersion = this._version
		reportData.reportTime = new Date().getTime();	
		for(var key in self.reportData){
			var value = self.reportData[key];
			if(tool.isArray(value) && value.length > 0){
				reportData.data[key] = tool.extend({},value);
				//删除相关数据
				self.removeReportData(key)
			}
		}
		//开发模式下打印上报数据
		if(self.develop){
			var log = tool.extend({},reportData)
			log.title = reportData.reportType+"类型即将上报服务器,上报内容在data中"
			this.handleDevelopLog(log)
		}
		//上报到服务器。。 暂时未做
	}

	
}




export default KeepObserverReport








