import KeepObserver from '../../@core/instance'
import KeepObserverLog from '../../@core/monitor/log'
import KeepObserverNetwork from '../../@core/monitor/network'
import KeepObserverError from '../../@core/monitor/error'

import KeepObserverKibanaApmReport from '../../@core/report/kibanaApm'

import axios from 'axios'

const reportReceive = 'http://localhost:8200'

const tesrRequest = 'http://localhost:9003/report'
const testTimeout = 'http://localhost:9003/timeout'
const test404 = 'http://localhost:9003/404'
const test500 = 'http://localhost:9003/500'



//实例
const ko = new KeepObserver({ 
    develop:true,
    serverUrl:reportReceive,
    serviceName: "dev-test",
    agentVersion: "step_1",
})
ko.use(KeepObserverKibanaApmReport)
//注册服务插件
ko.use(KeepObserverLog)
ko.use(KeepObserverError)
ko.use(KeepObserverNetwork)






//发起一个log
setTimeout(()=>{
    // debugger
    console.log('aaaaaaaa',ko,ko.useMiddle)
    setTimeout(()=>{
        console.log('throw',throwTest)
    })
},100)



