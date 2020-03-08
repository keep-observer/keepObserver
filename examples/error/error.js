import KeepObserver from '../../@core/instance'
import KeepObserverError from '../../@core/monitor/error'



//实例
const ko = new KeepObserver({ develop:true })
const tesrRequest = 'http://localhost:9003/error.js'

/*
    simple
    ------------
    ko.use(KeepObserverError)
 */
ko.use(KeepObserverError)
//注册一个log服务插件
// const error = new KeepObserverError({ develop:true })



//中间件劫持   ko的中间件将在插件之前执行， 实例的中间件是全部插件共享的
ko.useMiddle('noticeReport',(interrupt,next)=>(...params)=>{
    debugger
    const [ reportParams ] = params
    reportParams.test = 'aaaaaa'
    next(reportParams)
})



//抛出一个错误
debugger
setTimeout(()=>{
    debugger
    var errorScript = document.createElement('script')
    errorScript.src = tesrRequest
    document.body.appendChild(errorScript)
},1000)
console.log('throw',throwTest)

