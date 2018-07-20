


import keepObserverConfig from './config.js';


class KeepObserver extends keepObserverConfig {
	//构造函数
	constructor(config){
		//初始化配置相关内容
		//返回的监控实例在这里集成
		super(config)

		setTimeout(function(){
			console.warn('test')
		},1500)

	}
}







export default KeepObserver;



