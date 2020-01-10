import KeepObserver from '../../@core/instance'
import KeepObserverLog from '../../@core/monitor/log'
import KeepObserverReport from '../../@core/report/plain'
import KeepObserverNetwork from '../../@core/monitor/network'
import KeepObserverError from '../../@core/monitor/error'

import axios from 'axios'

const reportReceive = 'http://localhost:9003/reportReceive'

const tesrRequest = 'http://localhost:9003/report'
const testTimeout = 'http://localhost:9003/timeout'
const test404 = 'http://localhost:9003/404'
const test500 = 'http://localhost:9003/500'

// debugger;

//实例
const ko = new KeepObserver({ 
    develop:true,
    reportUrl:[reportReceive] 
})

//注册一个log服务插件
ko.use(KeepObserverLog)
ko.use(KeepObserverError)
ko.use(KeepObserverReport)
ko.use(KeepObserverNetwork)


ko.useMiddle('reportBefore',(interrupt,next)=>(...params)=>{
    var [ reportParams ] = params
    reportParams.params = {
        test:'123',
    }
    next(reportParams)
})





//发起一个log
setTimeout(()=>{
    // debugger
    console.log('aaaaaaaa',ko,ko.useMiddle)
    // debugger
    axios.get(tesrRequest).then(res=>{
        console.log('ajax',res)
        return axios.get(testTimeout)
    }).then((res)=>{
        console.log('ajax timeout resolve',res)
        return fetch(test500)
    },(err)=>{
        console.log('ajax timeout reject',err)
    }).catch(err=>{
        throw new Error(err)
    })

    axios.get(test404).then((res)=>{
        console.log('ajax 404 resolve',res)
    },(err)=>{
        console.log('ajax 404 reject',err)
    })


},100)



