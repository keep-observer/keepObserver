import KeepObserver from '../../@core/instance'
import KeepObserverLog from '../../@core/monitor/log'



//实例
// const ko = new KeepObserver({ develop:true })

/*
    simple
    ------------
 */
//注册一个log服务插件
// ko.use(KeepObserverLog)


// const [ sendMessage ] = ko.middleScopeNames
// //中间件劫持   ko的中间件将在log之前执行， 实例的中间件是全部插件共享的
// ko.useMiddle(sendMessage,(interrupt,next)=>(...params)=>{
//     debugger
//     const [ reportParams ] = params
//     reportParams.test = 'aaaaaa'
//     next(reportParams)
// })


// //发起一个log
// setTimeout(()=>{
//     debugger
//     console.log('aaaaaaaa',ko,ko.useMiddle)
//     console.log({test:111,test2:'string',test3:"test string"})
// },100)


// setTimeout(()=>{
//     debugger
//     console.error('tttttttt',ko,ko.useMiddle)
// },200)



var testInstance = new KeepObserver({
    runMiddleTimeOut: 3000,
    projectName: 'test',
    projectVersion: 'test-version'
})

var logInstance = new KeepObserverLog()

class ConsumerService{
    getMessage(message){
        console.log(message,11111)
    }
    apply(pipe,config){
        const { registerReciveMessage } = pipe
        registerReciveMessage(this.getMessage)
    }
}
testInstance.use(logInstance)
testInstance.use(ConsumerService)
// testInstance.apis('$logStart')
// testInstance.apis('$logStop')

setTimeout(()=>{
    debugger
    console.log('test log')
    console.log({test:'test',test2:[1,2,3,4,5]})
},200)
