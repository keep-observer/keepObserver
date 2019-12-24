import KeepObserver from '../../@core/instance'
import KeepObserverLog from '../../@core/monitor/log'

debugger;

const ko = new KeepObserver({
    develop:true
})
ko.use(KeepObserverLog)



ko.useMiddle('noticeReport',(interrupt,next)=>(...params)=>{
    console.log(32333333)
})




setTimeout(()=>{
    console.log('aaaaaaaa',ko,ko.useMiddle)
})



