import KeepObserver from '../../@core/instance'
import KeepObserverLog from '../../@core/monitor/log'
import KeepObserverNetwork from '../../@core/monitor/network'
import KeepObserverHtmlElementActive from '../../@core/monitor/htmlElementActive'
import KeepObserverKibanaApmReport from '../../@core/report/kibanaApm'
import KeepObserverMiddlewareKibanaApmTrack from '../../@core/middleware/kibanaApmTrack'


import axios from 'axios'

const reportReceive = 'http://localhost:8200'
//const reportReceive = ''

const tesrRequest = 'http://localhost:9003/report'
const testTimeout = 'http://localhost:9003/timeout'
const test404 = 'http://localhost:9003/404'
const test500 = 'http://localhost:9003/500'


//实例
const ko = new KeepObserver({ 
    // develop:true,
    isInterruptNormal:true,
    isGlobalElementActionCatch:true,
    serverUrl:reportReceive,
    serviceName: "dev-test",
    agentVersion: "step_1",
})
ko.use(KeepObserverKibanaApmReport)
//注册服务插件
ko.use(KeepObserverLog)
ko.use(KeepObserverNetwork)
ko.use(KeepObserverHtmlElementActive)
//注册中间件时间轴追踪服务
ko.use(KeepObserverMiddlewareKibanaApmTrack)



const logButton = document.querySelector('.log')
logButton.addEventListener('click',function(){
    console.log('aaaaaaaa',ko,ko.useMiddle)
    console.error(window,1212)
    console.warn(document.body,{test:'test'})
})



const networkAjaxButton = document.querySelector('.network-ajax')
networkAjaxButton.addEventListener('click',function(){
    axios.post(tesrRequest,{test:111,params:{type:'post'}})
    .finally(()=>new Promise((res)=>setTimeout(()=>axios.get(test404).finally(res),200)))
    .finally(()=>new Promise((res)=>setTimeout(()=>axios.get(test500).finally(res),200)))
    .finally(()=>new Promise((res)=>setTimeout(()=>axios.get(testTimeout).finally(res),200)))
})




const networkFetchButton = document.querySelector('.network-fetch')
networkFetchButton.addEventListener('click',function(){
    fetch(tesrRequest,{method:'post',body:{test:111,params:{type:'post'}}})
    .finally(()=>new Promise((res)=>setTimeout(()=>fetch(test404).finally(res),200)))
    .finally(()=>new Promise((res)=>setTimeout(()=>fetch(test500).finally(res),200)))
    .finally(()=>new Promise((res)=>setTimeout(()=>fetch(testTimeout).finally(res),200)))
})




var userNameValue = ''
var userIdValue = ''
var userEmailValue = ''
document.querySelector('.userName').addEventListener('input',function(e){
    userNameValue = e.target.value
})
document.querySelector('.userId').addEventListener('input',function(e){
    userIdValue = e.target.value
})
document.querySelector('.userEmail').addEventListener('input',function(e){
    userEmailValue = e.target.value
})
document.querySelector('.setUserInfo').addEventListener('click',function(e){
    ko.apis('setUserInfo',{
        id: userIdValue,
        username: userNameValue,
        email: userEmailValue,
    })
})




var captureErrorValue = ''
document.querySelector('.inputErrorMessage').addEventListener('input',function(e){
    captureErrorValue = e.target.value
})
document.querySelector('.captureError').addEventListener('click',function(e){
    ko.apis('captureError',captureErrorValue)
})



document.querySelector('.throwError').addEventListener('click',function(e){
    throw new Error('test throwError')
})



var inputHash = ''
document.querySelector('.inputHash').addEventListener('input',function(e){
    inputHash = e.target.value
})
document.querySelector('.changeHash').addEventListener('click',function(e){
    window.location.href = window.location.origin + window.location.pathname + '#'+inputHash
})
document.querySelector('.pushState').addEventListener('click',function(e){
    window.history.pushState(null,null,window.location.origin + window.location.pathname + '#'+inputHash)
})







