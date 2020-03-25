// import KeepObserver from '../../@core/instance'
// import KeepObserverVue from '../../@core/monitor/vue'


// debugger;
// //实例
// const ko = new KeepObserver({ develop:true,Vue:Vue })
// ko.use(KeepObserverVue)



// //中间件劫持   ko的中间件将在插件之前执行， 实例的中间件是全部插件共享的
// ko.useMiddle('noticeReport',(interrupt,next)=>(...params)=>{
//     debugger
//     const [ reportParams ] = params
//     reportParams.test = 'vue'
//     next(reportParams)
// })



// const test = new Vue({
//     el:'#app',
//     data(){
//         return {
//             test:'keep-vue-test',
//         }
//     },
//     method:{
//         throwError(){
//             console.log(aaaaaa)
//         }
//     },
//     mounted:()=>{
//         console.log('vue run')
//         this.throwError()
//     }
// })

