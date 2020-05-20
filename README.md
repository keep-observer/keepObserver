# Keep-observer


[![Build Status](https://travis-ci.com/keep-observer/keepObserver.svg?branch=master)](https://travis-ci.com/keep-observer/keepObserver)
[![Coverage Status](https://coveralls.io/repos/github/keep-observer/keepObserver/badge.svg)](https://coveralls.io/github/keep-observer/keepObserver)

[中文说明](https://github.com/keep-observer/keepObserver/blob/master/README-cn.md)

##### **This is a monitoring service applied to the web side** 

- **About keep-observer:**    
  - This is a javascript-based tool written for online environment monitoring, for web:PC and mobile embedded capture and continuous tracking of user interactions，
  - Support Elasticsearch+kibana data visualization background display to provide quick private docker deployment
  - Provides fine-grained time dimension analysis and key field index search
  - Provide single user tracking record, continuous tracking of a series of events
  - Provides PageLoad first screen load analysis, time dimension, multi-version comparison
  - The middleware extension interface is provided by means of plug-in service composition
  - Support can freely combine the monitoring content, and allow custom extension control capture service, custom escalation service, etc。
  -  Configuration information and apis as well as custom services, see [keepObserver](https://github.com/keep-observer/keepObserver/blob/master/document/KeepObserver.md)
- **Why do you need a keep-observer?**
    - Your business needs: **business monitoring, abnormal alarm, error tracking**
    - Your business needs: **analyze the performance information of the first screen, and provide data analysis of the results of grayscale tests such as ABtest**
    - You need: **log fine-grained searches as well as queries, and provide visual data reports**
    - You need: **user behavior action trace, exception error backtrace query**
    - Your team: **no back-end resources are provided, completely operated by the front-end team**
    - **can provide fast access monitoring, rapid deployment of back-end services, no complex server operations, front-end technicians can install deployment**
    - **high degree of custom extension, allowing custom extension of other services**
  
- **Function:**  
  - keepObserverLog
    - Intercept capture global ***console*** Related log, including (error, log, warn, time, timeEnd, clear, info, debug), etc
    - See configuration information and API details [keepObserverLog](https://github.com/keep-observer/keepObserver/blob/master/document/keepObserverLog.md)
  - keepObserverNetwork
    - Global ***XMLHttpRequest*** and ***fetch*** requests
    - See configuration information and API details [keepObserverNetwork](https://github.com/keep-observer/keepObserver/blob/master/document/keepObserverNetwork.md)
  - KeepObserverHtmlElementActive
    - Capture user dom interaction (click,change) events and provide xPath path tracing
    - See configuration information and API details [KeepObserverHtmlElementActive](https://github.com/keep-observer/keepObserver/blob/master/document/KeepObserverHtmlElementActive.md)
  - KeepObserverKibanaApmReport
    - This service is required using Elasticsearch+kibana. Rely on kibana APM to report data 
    - See configuration information and API details [KeepObserverKibanaApmReport](https://github.com/keep-observer/keepObserver/blob/master/document/KeepObserverKibanaApmReport.md)
  - KeepObserverMiddlewareKibanaApmTrack
    - Middleware extension service to provide kibana timeline trace logging
    - See configuration information and API details [KeepObserverMiddlewareKibanaApmTrack](https://github.com/keep-observer/keepObserver/blob/master/document/KeepObserverMiddlewareKibanaApmTrack.md)
    
- **Compatibility and Support :** compatibility with all the current mainstream framework running version, **vue angular react** and other frameworks. **IE 678 has not been tested yet **



## Use And reportMonitorData

#### 	About keepObserver:
KeepObserver itself only maintains one **pipeMQ** and the related **middlewareServer** service. All the monitoring and capture services and escalation services are provided by plug-ins, and the middleware extension interface and the extended information channel are provided
#####  The structural design is as follows
- **ProducerServer**:  Provide capture data. For example, log network error is related to catch
- **ConsumerServer**:  Processing received data. Check in to the background server kibanaAPM above
- **MiddlerwareServer**:   When ProducerServer initiates a message, it is processed by MiddlerwareServerArray before finally reaching ConsumerServer. MiddlerwareServer has the properties of interrupt and next and controls whether the message reaches the next MiddlerwareServer or is interrupted

![image](https://raw.githubusercontent.com/wangkai1995/img-lib/master/img/keepObserver.png)

The MiddlerwareServer is constructed as follows</br>

![image](https://raw.githubusercontent.com/wangkai1995/img-lib/master/img/keepObserver_middleService.png)

####  About Elasticsearch+kibana
Data storage stage, the core of usage scenario is that different data dimension of flexible query, analysis step by step in each dimension data quickly to the positioning problem, which can use elasticsearch retrieval features, even for a minimal set of elasticsearch cluster, also can more easily implement every day must level of log volume of storage and query, and supporting kibana complete data visualization, and query search related log content, as well as provide rapid privatization deployment docker

The simplest log query, providing a fine-grained time dimension and search for related fields</br>

![image](https://raw.githubusercontent.com/wangkai1995/img-lib/master/img/kibana.jpg)</br>

Detailed single user behavior tracking</br>

![image](https://raw.githubusercontent.com/wangkai1995/img-lib/master/img/track.jpg)</br>

Query analysis for page-load</br>

![image](https://raw.githubusercontent.com/wangkai1995/img-lib/master/img/page-load.jpg)

## Installation

```
	npm install keep-observers
```



## Examples

#### 	A simple example of use

```javascript
import KeepObserver,{
    KeepObserverLog,
    KeepObserverNetwork,
    KeepObserverHtmlElementActive,
    KeepObserverMiddlewareKibanaApmTrack,
    KeepObserverKibanaApmReport,
} from 'keep-observers'
//The instance
const ko = new KeepObserver({ 
    isInterruptNormal:true,         //KeepObserverMiddlewareKibanaApmTrack use
    isGlobalElementActionCatch:true, //KeepObserverHtmlElementActive use
    serverUrl:'http://localhost:8200', //KeepObserverKibanaApmReport use
    serviceName: "push-test", //KeepObserverKibanaApmReport use
    agentVersion: "step_1",   //KeepObserverKibanaApmReport use
})
// sign up for monitoring services
ko.use(KeepObserverLog)
ko.use(KeepObserverNetwork)
ko.use(KeepObserverHtmlElementActive)
// register with kibanaApm to report
ko.use(KeepObserverKibanaApmReport)
// register middleware timeline tracking service
ko.use(KeepObserverMiddlewareKibanaApmTrack)
```

#### Custom service examples

```javascript
import KeepObserver,{
    KeepObserverLog,
    KeepObserverNetwork,
    KeepObserverHtmlElementActive,
    KeepObserverMiddlewareKibanaApmTrack,
    KeepObserverKibanaApmReport,
} from 'keep-observers'

//A simple local storage plug-in
/*
    This captures the extended middleware services
    Ps: note that the middleware services thus acquired cannot be Shared with other plug-ins
    
    import { KeepObserverPublic } from 'keep-observers/@util/index'
    class LocalstorageMiddlewareServer extends KeepObserverPublic{
        apply(){
            
        }
    }
    const server = new LocalstorageMiddlewareServer()
    server.useMiddle //register
    server.runMiddle //exec
*/
class LocalstorageMiddlewareServer {
    constructor(config) {
        /*
        config={
            isInterruptNormal:true,
            isGlobalElementActionCatch:true,
            serverUrl:'http://localhost:8200',
            serviceName: "push-test",
            agentVersion: "step_1"
        }
        */
    }
    apply({
        //See Documentation for more parameters
        sendMessage,                //Send message method
        useExtendMiddle,            //Registration middleware extension, equivalent ko.usemiddle ()
        middleScopeNames,           //middleScopeNames
        registerSendDoneCallback    //Register the send end idle callback
    }) {
        const [sendMessageName] = middleScopeNames
        //Registry middleware service
        useExtendMiddle(sendMessageNamem,(interrupt,next)=>(message)=>{
            //This is just a simple example of using an example
            var value = JSON.stringify(message)
            localStorage.setItem('message', value);
            // move on to the next middleware
            // interrupt(message) simply bypasses the processing of the subordinate middleware and enters the kibanaApm escalation
            // interrupt(false) will simply skip the processing of the subordinate middleware and ignore the message
            next(message)
        })
        /*
            If there is a return
            return {
                remove:(key)=>localStorage.removeItem(key)
            }
            This return method can be called through  ko.apis('remove','message')
        */
    }
}

//The instance
const ko = new KeepObserver({ 
    isInterruptNormal:true,
    isGlobalElementActionCatch:true,
    serverUrl:'http://localhost:8200',
    serviceName: "push-test",
    agentVersion: "step_1",
})
// sign up for monitoring services
ko.use(KeepObserverLog)
ko.use(KeepObserverNetwork)
ko.use(KeepObserverHtmlElementActive)
// register with kibanaApm to report
ko.use(KeepObserverKibanaApmReport)
// register middleware timeline tracking service
ko.use(KeepObserverMiddlewareKibanaApmTrack)
// sign up for custom services
// You can also  ko.use(new LocalstorageMiddlewareServer ())
ko.use(LocalstorageMiddlewareServer)
```
##### 	For more config configuration details, and related apis, please refer to Documentation.

