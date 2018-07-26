


import * as tool from '../tool/index.js';

//系统信息和首屏分析
import KeepObserverSystem from '../observer/system/index.js';



var _initSystem = function(){
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




export default _initSystem;
