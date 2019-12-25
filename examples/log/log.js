import KeepObserver from '../../@core/instance'
import KeepObserverLog from '../../@core/monitor/log'

debugger;

const ko = new KeepObserver({
    develop:true
})
const log = new KeepObserverLog({
    develop:true
})
ko.use(log)


log.useMiddle('noticeReport',(interrupt,next)=>(...params)=>{
    debugger
    console.log(111111111)
})




setTimeout(()=>{
    console.log('aaaaaaaa',ko,ko.useMiddle)
})



