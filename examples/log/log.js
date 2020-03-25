// import KeepObserver from '../../@core/instance'
// import KeepObserverLog from '../../@core/monitor/log'


// debugger;
// //实例
// const ko = new KeepObserver({ develop:true })

// /*
//     simple
//     ------------
//  */
// //注册一个log服务插件
// const log = new KeepObserverLog({ develop:true })
// ko.use(KeepObserverLog)

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

// setTimeout(()=>{
//     debugger
//     console.error('tttttttt',ko,ko.useMiddle)
// },200)

