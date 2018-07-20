
/*
 
 	report 实例默认配置数据
	config params:
 */ 

const type = ['unKownType','system','log','network','storage','vue'];


export default {
	/******** 公共相关配置   *********/
	//上报的类型
	$observer_Type: type,
	//如果取不到缓存长度的默认长度
	max_cache: 5,

	/******** system相关配置   *********/
	//默认system数组缓存长度
	max_system_cache: 1,
	//缓存数据满了是否上传
	max_system_fillIsReport: true,

	/******** network相关配置   *********/
	//默认network数组缓存长度
	max_network_cache: 30,
	//缓存数据满了是否上传
	max_system_fillIsReport: false,
}






