

//vue错误监控和性能分析
import KeepObserverVue from '../observer/vue/index.js';



var _initVue = function(){
	var that = this;
	//初始化上传相关实例
	var CustomConfig = that._config.vueCustom? that._config.vueCustom: {};
	CustomConfig.vueInstance = that._config.vueInstance;
	//判断是否存在实例
	if(!CustomConfig.vueInstance){
		return false;
	}
	//注册监听
	that.$vue = new KeepObserverVue(CustomConfig)
	//注册监听
	that.$vue.addReportListener(function(vueInfo){
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
		that.$getReportContent(reportParams,control)
	})
}




export default _initVue;