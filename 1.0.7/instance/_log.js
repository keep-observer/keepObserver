

import * as tool from '../tool/index.js';

//日志拦截请求分享
import KeepObserverLog from '../observer/log/index.js';


var _initLog = function(){
	var that = this;
	//初始化上传相关实例
	var CustomConfig = that._config.logCustom? that._config.logCustom: {};
	//是否是开发模式
	CustomConfig.develop = that._config.develop? true : false;
	that.$log = new KeepObserverLog(CustomConfig)
	//注册监听
	that.$log.addReportListener(function(logInfo){
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
			control.isError = true;
		}
		that.$getReportContent(reportParams,control)
	})
}



export default _initLog;