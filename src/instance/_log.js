

import * as tool from '../tool/tool.js';

//日志拦截请求分享
import KeepObserverLog from '../observer/log/index.js';


var _initLog = function(){
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
			control.isError = true;
		}
		self.$getReportContent(reportParams,control)
	})
}



export default _initLog;