# KeepObserverVue

### Function

	the vue instance must be passed when initializing keepObserver, for example vueInstance:Vue, otherwise it's invalid! The service for listening vue error information

### Config	

```javascript
//vueCustom:  not config
vueInstance ： instanceof  (import Vue from 'vue')
```

### Api 

```javascript
	/*
		stop monitor	
		params: null,
		return: null
		explain: 
	*/
    $vueStop
    /*
    	start monitor 
    	params: null,
		return: null
		explain: 
    */
    $vueStart
```

### pipeQueueReportData

```
{
	infoMsg				//the detailed information
	errMsg				//the error information
	stackMsg			//it's existent if there is stack information
}
```

​	