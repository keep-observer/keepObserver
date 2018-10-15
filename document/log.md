# KeepObserverLog

### Function

	inset related funcitons of browser's window.console(log, error, info, debug, warn, time, timeEnd, clear), and monitor the global function window.onerror to capture JS runtime error


### Config	

```javascript
logCustom :{	
	/*
		whether capture the JS error of cross-origin
		default: true,
		explain: function window.error will not be able to capture the detailed error information of loading cross-origin script if not allowe to capture the JS error of cross-origin
	*/
    catchCrossDomain: Boolean,
    /*
		whether capture the unknown error
    	default: false,
		explain: in the content captured by some running script, there is a situation that it's not be albe to capture the detailed error information and locate the error's line and error's position. It will not be captured and reported if this kind of error is set to false
    */
    unknowErrorCatch: Boolean
}
```

### Api 

```javascript
	/*
		stop monitor	
		params: null,
		return: null
		explain: 
	*/
    $logStop
    /*
    	start monitor 
    	params: null,
		return: null
		explain: 
    */
    $logStart
```

### pipeQueueReportData

```
{
        type:   			the function of capturing content(log,warn,error,jsError) etc.
		data:				detailed content
}
```

