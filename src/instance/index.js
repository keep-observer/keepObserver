


import keepObserverConfig from './config.js';


class KeepObserver extends keepObserverConfig {
	//构造函数
	constructor(config){
		//初始化配置相关内容
		//返回的监控实例在这里集成
		super(config)


		setTimeout(function(){
			var test = {
				a:111,
				d:23232,
				c:[{
					a:111,
				},23,44,55.3,'strt'],
				d:'strgaaa',
			}
			console.log('test',test)
		},1000)

	}
}







export default KeepObserver;



