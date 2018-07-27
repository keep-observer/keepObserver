

//vue错误监控和性能分析
import KeepObserverVue from '../observer/vue/index.js';



var _initVue = function(){
	var self = this;
	//初始化上传相关实例
	var CustomConfig = self._config.vueCustom? self._config.vueCustom: {};
	CustomConfig.vueInstance = self._config.vueInstance;
	//判断是否存在实例
	if(!CustomConfig.vueInstance){
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
			control.isError = true;
		}
		self.$getReportContent(reportParams,control)
	})
}




export default _initVue;