

import * as tool from '../tool/index.js';
//网络请求拦截分析
import KeepObserverNetwork from '../observer/network/index.js';




var _initNetWork  = function(){
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
			control.isError = ajaxInfo.isTimeout? false :true;
		}
		self.$getReportContent(reportParams,control)
	})
}




export default _initNetWork;

