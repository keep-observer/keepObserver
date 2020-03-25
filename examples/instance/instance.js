// import KeepObserver from '../../@core/instance'
// import KeepObserverLog from '../../@core/monitor/log'
// import KeepObserverError from '../../@core/monitor/error'

// debugger;
// //实例
// const ko = new KeepObserver({ develop:true })

// //注册一个log服务插件
// const log = new KeepObserverLog({ develop:true })
// //二次劫持,插件的劫持无法插件内共享，只能自己的notice中使用
// log.useMiddle('noticeReport',(interrupt,next)=>(...params)=>{
//     debugger
//     const [ reportParams ] = params
//     reportParams.testdwawdw = 'aaaaaa'
//     next(reportParams)
// })
// ko.use(log)

// //简单注册一个error服务插件
// ko.use(KeepObserverError)


// //添加用户信息
// ko.setUserInfo({
//     id:'9527',
//     name:'test-user'
// })


// //中间件劫持   ko的中间件将在log之前执行， 实例的中间件是全部插件共享的
// ko.useMiddle('noticeReport',(interrupt,next)=>(...params)=>{
//     debugger
//     const [ reportParams ] = params
//     reportParams.test = 'aaaaaa'
//     next(reportParams)
// })



// //发起一个log
// setTimeout(()=>{
//     debugger
//     console.log('aaaaaaaa',ko,ko.useMiddle)
// },100)
