# The online demo

### Introducing a front-end SDK

0. Install KeepObserver in your project

```TypeScript
    npm install keep-observers
```

1. Create the monitor.js file as follows

```TypeScript
    import KeepObserver,{
        KeepObserverLog,
        KeepObserverNetwork,
        KeepObserverHtmlElementActive,
        KeepObserverMiddlewareKibanaApmTrack,
        KeepObserverKibanaApmReport,
    } from 'keep-observers'
    //Instance initialization, see the documentation for more config information
    var ko = new KeepObserver({ 
        isPrint:false,                          // The printed part of the console is not displayed
        isInterruptNormal:false,                //Full capture report
        isGlobalElementActionCatch:true,        //Whether all HTML interactive capture
        serviceName: `demo`,                    //Report the service name and query the index
        //Note that online Demo-elk periodically deletes data, please do not use this demo server as your online application
        //https
        // serverUrl: "https://apm.notcore.com",
        //http
        serverUrl: "http://114.115.236.50:8200",   //Report the address
        agentVersion: "0.0.0",                     //The version number of the reported service is different from that of ABtest
    })
    // Register monitoring infrastructure services
    ko.use(KeepObserverLog)
    ko.use(KeepObserverNetwork)
    ko.use(KeepObserverHtmlElementActive)
    // Register the ELK reporting service
    ko.use(KeepObserverKibanaApmReport)
    // User behavior tracking
    ko.use(KeepObserverMiddlewareKibanaApmTrack)
    //export instance
    export default ko
```

2. In your project, import the file and run it
```TypeScript
  //index.js
  import ko from './monitor.js'
```

### Visit Kibana to view logs and report data
ps: Online demo service, regularly delete data, only for demo use, please do not apply this service in your online project

Demo background Kibana address

http://114.115.236.50:5601/

Kibana query log tutorial: https://www.elastic.co/guide/cn/kibana/current/discover.html

Index Patten please use APM *

On the right, click the APM menu to view the summary of all mounted log services. And page-load information for the service

Reporting services, indexing table (filter field in the table) : https://github.com/keep-observer/keepObserver/blob/master/document-cn/ElasticsearchKibana-cn.md


### Deploy your proprietary Elasticsearch+ Kibana service with one click
Docker deployment tutorial: https://github.com/keep-observer/keepObserver/blob/master/document-cn/ElasticsearchKibana-cn.md

