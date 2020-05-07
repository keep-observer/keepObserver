# KeepObserverLog

### Function

	嵌入拦截浏览器window.console相关方法（log，error，info，debug，warn，time，timeEnd，clear），并监听全局window.onerror方法，捕获js运行错误

### Config	

```javascript
logCustom :{	
	/*
		是否捕获跨域JS错误	
		default: true,
		explain: 不允许捕获跨域JS错误的话,跨域加载的script发生错误,window.error将无法捕获详细错误信息
	*/
    catchCrossDomain: Boolean,
    /*
    	未知错误是否捕获 
    	default: false,
    	explain: 某些script运行捕获的内容中，会出现无法捕获到详细错误信息,无法定位到错误行和错误位置,此类错误如果为false,将不进行捕获上报
    */
    unknowErrorCatch: Boolean
}
```

### Api 

```javascript
	/*
		停止监听	
		params: null,
		return: null
		explain: 
	*/
    $logStop
    /*
    	开始监听 
    	params: null,
		return: null
		explain: 
    */
    $logStart
```

### pipeQueueReportData

```
{
        type:   			捕获内容的方法(log,warn,error,jsError)等
		data:				详细内容
}
```

