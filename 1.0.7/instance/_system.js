


import * as tool from '../tool/index.js';

//系统信息和首屏分析
import KeepObserverSystem from '../observer/system/index.js';



var _initSystem = function(){
	var that = this;
	//初始化上传相关实例
	var CustomConfig = that._config.systemCustom? that._config.systemCustom: {};
	that.$system = new KeepObserverSystem(CustomConfig)
	//注册监听
	that.$system.addReportListener(function(systemInfo){
		var reportParams = {};
		reportParams.typeName = 'system';
		reportParams.location = window.location.href;
		reportParams.data = systemInfo;
		//系统信息和首屏性能立即上报
		var control = {};
		control.lazy = false;
		that.$getReportContent(reportParams,control)
	})
}




export default _initSystem;
