// import axios from 'axios'

// import KeepObserver from '../../@core/instance'
// import KeepObserverNetwork from '../../@core/monitor/network'


// const tesrRequest = 'http://localhost:9003/report'
// const testTimeout = 'http://localhost:9003/timeout'
// const test404 = 'http://localhost:9003/404'
// const test500 = 'http://localhost:9003/500'

// debugger;
// //实例
// const ko = new KeepObserver({ develop:true })



// /*
//     simple
//     ------------
//     ko.use(KeepObserverError)
//  */
// ko.use(KeepObserverNetwork)
// //注册一个log服务插件
// // const error = new KeepObserverError({ develop:true })



// //中间件劫持   ko的中间件将在插件之前执行， 实例的中间件是全部插件共享的
// ko.useMiddle('noticeReport',(interrupt,next)=>(...params)=>{
//     debugger
//     const [ reportParams ] = params
//     reportParams.test = 'aaaaaa'
//     next(reportParams)
// })



// //发出请求
// debugger
// axios.get(tesrRequest).then(res=>{
//     console.log('ajax',res)
//     return axios.get(testTimeout)
// }).then((res)=>{
//     console.log('ajax timeout resolve',res)
// },(err)=>{
//     console.log('ajax timeout reject',err)
// })

// axios.get(test404).then((res)=>{
//     console.log('ajax 404 resolve',res)
// },(err)=>{
//     console.log('ajax 404 reject',err)
// })


// axios.get(test500).then((res)=>{
//     console.log('ajax 500 resolve',res)
// },(err)=>{
//     console.log('ajax 500 reject',err)
// })




// fetch(tesrRequest).then(  function(response) {
//     if(response.ok){
//         response.text().then((text)=>console.log('fetch resolve', text),err=>console.log('fetch reject', err))
//     }
//     return fetch(testTimeout)
// }).then((res)=>{
//     if(res.ok){
//         res.text().then((text)=>console.log('fetch timeout resolve', text),err=>console.log('fetch timeout reject', err))
//     }
// },(err)=>{
//     console.log('fetch timeout reject',err)
// })
// fetch(test404).then((res)=>{
//     console.log('fetch 404 resolve',res)
// },(err)=>{
//     console.log('fetch 404 reject',err)
// })
// fetch(test500).then((res)=>{
//     console.log('fetch 500 resolve',res)
// },(err)=>{
//     console.log('fetch 500 reject',err)
// })