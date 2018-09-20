

import KeepObserverDefault from '../default/index.js';


import defaultConfig from './defaultConfig.js';
import * as tool from '../tool/index.js';
import AjaxServer from './ajax.js';



// 上报服务器相关
class KeepObserverReport extends KeepObserverDefault {
	//构造函数
	constructor(config){
		super(config)
		//存混合配置
		this.$report_config  = tool.extend(defaultConfig,config)
		//上传数据保存
		this.reportData = {};
		//用户自定义上传参数
		this._customeInfo = false;

		//当前是否处于开发模式
		this.develop = this.$report_config.develop;
		this.developGetMsgLog = this.$report_config.developGetMsgLog;
		this.develogDeleteLog = this.$report_config.develogDeleteLog;
		this.develogDiscardLog = this.$report_config.develogDiscardLog


		//初始化
		this._init();
	}
	/********************   对外提供函数  **********************/
	/*
		接受需要上报的内容
		params  
		@object  = {
			@ .typeName string   	  (no null)	      上报类型名
			@ .data  array or object  (no null) 	  上报内容
		}
		@ .control null and object = {
			@ .lazy       Boolean          		      是延时上报(由手动上传合并上报或者又下一次该上报合并上报) 不传立即上报
			@ .isError    Boolean					  是否是出错信息 (保留未启用)
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
		if(this.develop && this.developGetMsgLog){
			var log = tool.extend({},params)
			log.title= '获得'+log.typeName+"类型监控数据";
			this.$devLog(log)
		}
		//是否删除之前保存的数据
		if(control && control.preDelete){
			this._removeReportData(params.typeName)
		}
		//是否忽略本条数据
		if(control && control.ignore){
			return false;
		}
		//保存到上报数据中
		var cacheLen = this._saveReportData(params);
		var maxCache = this.$report_config['max_'+params.typeName+'_cache'];
		var isReport = this.$report_config['max_'+params.typeName+'_fillIsReport'];
		//是否立即上报 或者缓存已满上报
		if( (control && !control.lazy) || (isReport && cacheLen === maxCache)){
			//是否合并上报
			this._handleReport(params.typeName,control);
		}
	}
	/*
		接受自定义上报内容
		params type object
		合并到this._customeInfo中
	 */
	$getCustomeReport(params){
		//判断数据正确性
		if(!params || !tool.isObject(params) || tool.isEmptyObject(params)){
			return false;
		}
		if(!this._customeInfo){
			this._customeInfo = {};
		}
		//设置用户自定义上报内容
		this._customeInfo = tool.extend(this._customeInfo,params);
	}
	/****************   内部使用函数  *************/
	/*
		初始化上报类参数
		复制this.reportData并从strong里面复原数据
		如果是开发模式 替换window.console.log
	 */
	_init(){
		var that = this;
		//初始化this.reportData
		var handleType = that.$report_config.$observer_Type
		handleType.forEach( function(type) {
			var cacheData = tool.getStorage(type)
			that.reportData[type] = [];
			if(cacheData){
				that.reportData[type] = cacheData
			}
		});
	}
	/* 
		保存处理上报数据
		params type object
		@ .typeName string   	  (no null)	      上报类型名
		@ .data  array or object  (no null) 	  上报内容
		@ .lazy bollen          				  是延时上报(由手动上传合并上报或者又下一次该上报合并上报) 不传立即上报
		**********************************
		# return  当前保存数据长度
	 */
	_saveReportData(params){
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
				this.$devLog(discard)
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
	_removeReportData(type){
		if(this.reportData[type]){
			this.reportData[type] = [];
			tool.removeStorage(type)
			//开发模式下打印
			if(this.develop && this.develogDeleteLog){
				this._$devLog(type+'类型监控数据已清除')
			}
		}
	}
	/********************   上报相关   **********************/
	/*
		生成上报数据头
		params:
			@ .type  string								上报数据类型
			@ .control object 							上报控制
		return     
			reportData  {
				//以下参数必定存在
				@ .type  string							上报数据类型
				@ .project  string              		上报项目名
				@ .projectVersion string 				keepObserver版本
				@ .reportTime  number  					上报时间时间搓
				@ .data array or data                   上报内容
				//一下参数可能存在
				@ .customeInfo   all  					用户自定义设置上传参数 
			}     					
	 */
	_createReportData(type,control){
		var that = this;
		var reportData = {};
		//添加基本信息
		reportData.reportType = type;
		reportData.project = that._project;
		reportData.projectVersion = that._version
		reportData.reportTime = new Date().getTime();
		//处理自定义信息
		if(that._customeInfo){
			reportData.customeInfo = tool.extend({},that._customeInfo);
		}
		//处理上报数据  是否合并上报
		if(control.baseExtend){
			reportData.data = {}
			for(var key in that.reportData){
				var value = that.reportData[key];
				if(tool.isArray(value) && value.length > 0){
					reportData.data[key] = tool.extend({},value);
					//删除相关数据
					that._removeReportData(key)
				}
			}
		}else{
			reportData.data = tool.extend({},that.reportData[type]);
			that._removeReportData(type)
		}
		//开发模式下打印上报数据
		if(that.develop){
			var log = tool.extend({},reportData)
			log.title = type+"类型即将上报服务器,上报内容在data中"
			that.$devLog(log)
		}
		return reportData
	}
	/*
		调用钩子
		@arguments[0] = onHooK
		@arguments[...] = params
		return
			onHook result
	 */
	_handleHook(){
		var args = tool.toArray(arguments);
		if(!args || args.length === 0 || !tool.isFunction(args[0]) ){
			return false;
		}
		var onHook = args[0];
		var params = args.slice(1,args.length);
		try{
			var result = onHook(params);
		}catch(err){
			//报错
			this.$devError(onHook.name+'回调钩子运行出现错误:'+err)
		}
		return result
	}
	/*  
		处理上传失败
		params
			onFail      function        	失败的回调 没有则忽略直接跳过
			reportData 	obj or arr          需要上传的数据
			reportUrl 	string     			上传的url地址 (有可能存在)
	 */
	_handleReportFail(onFail,reportData,reportUrl){
		if(!onFail){
			return false;
		}
		try{
			onFail(reportData,reportUrl)
		}catch(e){
			this.$devError('上传错误回调钩子运行出现错误:'+err)
		}
	}
	/*
		处理上报
		params 
			type string    		上报类型
			control object 		上报控制
	 */
	_handleReport(type,control){
		var that = this;
		//如果未传入数据类型
		if(!type || !tool.isString(type)){
			return false;
		}
		//获得上传数据
		var reportData = that._createReportData(type,control)
		//上传到服务器
		var { 
				reportUrl,
				onReportFail,
				onReportBeforeSetUrl,
				onReportBeforeSetHead,
				onReportBeforeHook,
				onReportResultHook,
			} = this.$report_config
		//如果没有设置上传URL 那么停止上传
		if(!reportUrl || !tool.isArray(reportUrl)){
			that._handleReportFail(onReportFail,reportData,null)
			return false;
		}
		//遍历URL上传列表
		//开始依次上传
		reportUrl.map(function(item){
			var reportConfig = {};
			//是否有上传前修改URL回调
			if(onReportBeforeSetUrl){
				var url = that._handleHook(onReportBeforeSetUrl,item);
			}else{
				url = item;
			}
			if(!tool.isString(url)){
				that._handleReportFail(onReportFail,reportData,null)
				return false;
			}
			reportConfig.url = url;
			//获取自定义请求头
			var  customeHead = onReportBeforeSetHead?that._handleHook(onReportBeforeSetHead,item):false;
			if(customeHead && tool.isObject(customeHead) && !tool.isEmptyObject(customeHead)){
				reportConfig.customeHead = customeHead
			}
			//获取请求
			reportConfig.data = reportData;
			that._handleHook(onReportBeforeHook,reportData,reportConfig.url,reportConfig.customeHead)
			//上传到服务器
			try{
				AjaxServer(reportConfig).then(function(result){
					that._handleHook(onReportResultHook,result.data,reportConfig.url,result.head);
				},function(err){
					that._handleReportFail(onReportFail,reportData,reportConfig.url);
				})
			}catch(err){
				//上传报错
				that.$devError('上传数据出现错误:'+err)
			}
			//end
		})
		// map url end
	}
}




export default KeepObserverReport








