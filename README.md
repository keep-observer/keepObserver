# Keep-observer


[![Build Status](https://travis-ci.com/keep-observer/keepObserver.svg?branch=master)](https://travis-ci.com/keep-observer/keepObserver)
[![Coverage Status](https://coveralls.io/repos/github/keep-observer/keepObserver/badge.svg)](https://coveralls.io/github/keep-observer/keepObserver)

[中文说明](https://github.com/keep-observer/keepObserver/blob/master/README-cn.md)

##### **This is a monitor service using for javascript web application** 

- **about keep-observer:**    
  - this is a monitor service based on javascript, using for monitoring product envoriment application, which applies to web, pc and mobile application with imperceptible inset and capture.
  - use combination way of slot service, to capture report data of corresponding service that circulates in message pipe and reported by report service which receives captured message and report to server optionally
  - in favor of combining monitored content freely and extending monitor capture service, custom report service etc.
- **function:**  
  - keepObserverLog related service
    - intercept and capture global ***console*** related log, including(error,log,warn,time,timeEnd,clear,info,debug) etc.
    - capture javascript global error during the application is running: ***JSerror*** and other error message
  - keepObserverNetwork related service
    - capture global ***XMLHttpRequest*** request
  - keepObserverVue related service
    - capture ***vue project*** related error
  - keepObserverLoad related service
    - capture performance analysis ***first loading performance analysis and other performance analyses*** 
  - keepObserverReport related service
    - apply to intercept data packet and report to the corresponding background server
    - read the following for more detailed information: **about reporting service**
- **compatibility and support:**   compatible with all main current frames of running version, **vue angular react** and other frames. **IE 678 have not been tested yet**



## Use and report MonitorData

#### About using keepObserver:

- keepObserver supports custom configuration monitoring services and loads all services by default without custom configuration services,contains keep(keepObserverLog，keepObserverNetwork， keepObserverVue，keepObserverLoad，keepObserverReport）etc.
- after keepObserver create an instance new keepObserver() : **start running monitoring。trying to read system screen load information, embed the methods related to intercepting window.console and window.XMLHttpRequest to monitor log and ajax network request **
- Noted that during the keepObserver run, **if you do not set develop = true,it defaults in production environment **, the interface printing message related to window.console will be intercepted by keepObserver, **and will not display in  the console**
- in the meanwhile, the interface printing message related to window.console and each request of the window.XMLHttpRequest method, will be intercepted and recorded in the localStorage, which is packaged and reported as needed when it is reported.



#### About Reporting Server：

##### keepObserverReport  will report to server in the following situations:

##### Monitor Type：(while merging errors, it will merging the few normal related request and window.console information ahead, which is used to provide forward tracking errors)

```javascript
			： intercept js error:  script Error
            
        	： console.error(): called and print out error message	
            
			： ajax request timeout:  network timeout

			： ajax request occur error:  status !== 200
			
			: if you configure the custom judgment Ajax request onHandleJudgeResponse Hook,it is judged that the Ajax request is incorrect when the hook return does not equal false

			： if you need to monitor vue, after vue intercepts the error message
```

**Performance Type： the following contents will be uploaded directly without merging trace information**

```javascript
			: related information about first screen load performance, will be reported daily for the first time
```

------

**For more configuration information and report parameters, please refer to Documentation.**

## Installation

```
install related package
```

```
	npm install keep-observers
```



## Examples

#### a simple example 

```javascript
import KeepObserver from 'keep-observers';
//start
var keepObserver = new KeepObserver({
	project:'netcar',
	develop:true,
	//network monitor configuration
	networkCustom:{
		timeout:30000,
	},
	//data upload configuration
	reportCustom:{
		reportUrl:['http://localhost:3000/api/v1/keepObserver/report'],
	}
});
```

#### example of custom service

```javascript
import keepObserver from 'keep-observers/dist/keepObserver.js'
import keepObserverReport from 'keep-observers/dist/keepObserverReport.js'
import KeepObserverLog from 'keep-observers/dist/KeepObserverLog.js'
import KeepObserverNetwork from 'keep-observers/dist/KeepObserverNetwork.js'
//import KeepObserverVue from 'keep-observers/dist/KeepObserverVue.js'
import KeepObserverLoad from 'keep-observers/dist/KeepObserverLoad.js'

var keepObserver = new KeepObserver({
	project:'netcar',
	develop:true,
	//network monitor configuration
	networkCustom:{
		timeout:30000,
	},
	//data upload configuration
	reportCustom:{
		reportUrl:['http://localhost:3000/api/v1/keepObserver/report'],
	}
});
// not Monitor vue
keepObserver.use(keepObserverReport)
keepObserver.use(KeepObserverLog)
keepObserver.use(KeepObserverNetwork)
//keepObserver.use(KeepObserverVue)
keepObserver.use(KeepObserverLoad)
```

##### For more details on config configuration and related API, please refer to Documentation.



## Documentation

#### instruction of related documents

- **related custom plug-in service and keepObserver instance**   **[keepObserver](https://github.com/keep-observer/keepObserver/blob/master/document/keepObserver.md)**
- **reporting service:**   **[keepObserverReport](https://github.com/keep-observer/keepObserver/blob/master/document/report.md)**
- **related monitoring service about window.console and jsError:**   **[KeepObserverLog](https://github.com/keep-observer/keepObserver/blob/master/document/log.md)**
- **related monitoring service about XMLHttpRequest**   **[KeepObserverNetwork](https://github.com/keep-observer/keepObserver/blob/master/document/network.md)**
- **related intercepting service about vue error:**   **[KeepObserverVue](https://github.com/keep-observer/keepObserver/blob/master/document/vue.md)**
- **related onload service about first screen loading analysis:**   **[KeepObserverLoad](https://github.com/keep-observer/keepObserver/blob/master/document/load.md)**