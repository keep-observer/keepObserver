import axios from 'axios'

import KeepObserver from '../../@core/instance'
import KeepObserverNetwork from '../../@core/monitor/network'


const tesrRequest = 'http://localhost:9003/report?time=2000'
const testTimeout = 'http://localhost:9003/timeout'
const test404 = 'http://localhost:9003/404'
const test500 = 'http://localhost:9003/500'

debugger;
//实例
const ko = new KeepObserver()
class ConsumerService{
    getMessage(message){
        console.log(message,11111)
    }
    apply(pipe,config){
        const { registerReciveMessage } = pipe
        registerReciveMessage(this.getMessage)
    }
}

ko.use(KeepObserverNetwork)
ko.use(ConsumerService)



//中间件劫持   ko的中间件将在插件之前执行， 实例的中间件是全部插件共享的
ko.useMiddle('sendMessage',(interrupt,next)=>(reportParams)=>{
    reportParams.test = 'aaaaaa'
    next(reportParams)
})



//发出请求
debugger
// axios.post(tesrRequest,{test:111,params:{type:'post'}})
// .finally(()=>new Promise((res)=>setTimeout(()=>axios.get(test404).finally(res),200)))
// .finally(()=>new Promise((res)=>setTimeout(()=>axios.get(test500).finally(res),200)))
// .finally(()=>new Promise((res)=>setTimeout(()=>axios.get(testTimeout).finally(res),200)))


fetch(tesrRequest,{method:'post',body:{test:111,params:{type:'post'}}})
.finally(()=>new Promise((res)=>setTimeout(()=>fetch(test404).finally(res),200)))
.finally(()=>new Promise((res)=>setTimeout(()=>fetch(test500).finally(res),200)))
.finally(()=>new Promise((res)=>setTimeout(()=>fetch(testTimeout).finally(res),200)))




// setTimeout(()=>{
//     fetch(tesrRequest,{method:'post'}).then(  function(response) {
//         if(response.ok){
//             response.text().then((text)=>console.log('fetch resolve', text))
//         }
//     })
//     fetch(testTimeout)
//     fetch(test404)
//     fetch(test500)
// },1000)
