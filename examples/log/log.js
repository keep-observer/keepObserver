import KeepObserver from '../../@core/instance'
import KeepObserverLog from '../../@core/monitor/log'


debugger;
//实例
const ko = new KeepObserver({ develop:true })


/*
    simple
    ------------
    ko.use(KeepObserverLog)
 */
//注册一个log服务插件
const log = new KeepObserverLog({ develop:true })
//二次劫持,插件的劫持无法插件内共享，只能自己的notice中使用
log.useMiddle('noticeReport',(interrupt,next)=>(...params)=>{
    debugger
    const [ reportParams,control ] = params
    control.isErrorTest = true
    reportParams.logTestaaaa = 'aaaaaa'
    next(reportParams,control)
})
ko.use(log)



//中间件劫持   ko的中间件将在log之前执行， 实例的中间件是全部插件共享的
ko.useMiddle('noticeReport',(interrupt,next)=>(...params)=>{
    debugger
    const [ reportParams,control ] = params
    control.isError = true
    reportParams.test = 'aaaaaa'
    next(reportParams,control)
})



//发起一个log
setTimeout(()=>{
    debugger
    console.log('aaaaaaaa',ko,ko.useMiddle)
},100)



