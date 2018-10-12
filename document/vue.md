# KeepObserverVue

### Function

​	keepObserver初始化时必须传入vue实例配置，如vueInstance：Vue,不然无效！服务监听vue错误信息

### Config	

```javascript
//vueCustom:  not config
vueInstance ： instanceof  (import Vue from 'vue')
```

### Api 

```javascript
	/*
		停止监听	
		params: null,
		return: null
		explain: 
	*/
    $vueStop
    /*
    	开始监听 
    	params: null,
		return: null
		explain: 
    */
    $vueStart
```

### pipeQueueReportData

```
{
	infoMsg				//详细信息
	errMsg				//错误信息
	stackMsg			//如果存在堆栈信息则存在
}
```

​	