import  KeepObserver,{PipeUser}  from '../../@core/instance'
import  KeepObserverLog from '../../@core/monitor/log'
import  KeepObserverNetwork from '../../@core/monitor/network'
import  KeepObserverHtmlElementActive from '../../@core/monitor/htmlElementActive'
import  KeepObserverMiddlewareKibanaApmTrack from '../../@core/middleware/kibanaApmTrack'

import  { KeepObserverPublic,KeepObserverMiddleWare }  from '@util/index'
import  { consoleTools,Tools }  from '@util/index'


import axios from 'axios'


describe("KeepObserverMiddlewareKibanaApmTrack service",function(){
    //init service
    var ko = null
    var testHashChange = false
    beforeEach(function () {
        //config
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000
        //init service
        KeepObserverMiddleWare.publicMiddles = {}
        KeepObserverPublic.extendReportParams = {}
        PipeUser.onSendDoneCallbackMap = []
        ko = null
    })
    afterAll(function(){
        KeepObserverMiddleWare.publicMiddles = {}
        KeepObserverPublic.extendReportParams = {}
        PipeUser.onSendDoneCallbackMap = []
    })


    it('KeepObserverMiddlewareKibanaApmTrack api',function(){
        var serviceInstance =  new KeepObserverMiddlewareKibanaApmTrack()
        ko = new KeepObserver({
            isCheckRepeatUse:false,
        })
        expect(serviceInstance.startTrack).toBeDefined()
        expect(serviceInstance.cancelTrack).toBeDefined()
        expect(serviceInstance.cancelPatch).toBeDefined()
        spyOn(serviceInstance,'startTrack').and.callThrough();
        spyOn(serviceInstance,'cancelTrack').and.callThrough();
        spyOn(serviceInstance,'cancelPatch').and.callThrough();
        ko.use(serviceInstance)
        ko.apis('startTrack')
        ko.apis('cancelTrack')
        ko.apis('cancelHashChangePatch')
        expect(serviceInstance.startTrack).toHaveBeenCalled()
        expect(serviceInstance.cancelTrack).toHaveBeenCalled()
        expect(serviceInstance.cancelPatch).toHaveBeenCalled()
        serviceInstance = null
    })


    it('KeepObserverMiddlewareKibanaApmTrack config{isInterruptNormal = true} with pageError handle log',function(done){
        ko = new KeepObserver({ 
            isInterruptNormal:true,
            reportDateFormat:'yyyy-MM-dd hh',
            isGlobalElementActionCatch:true,
            serviceName: "dev-test",
            agentVersion: "step_1",
        })
        ko.use(KeepObserverLog)
        ko.use(KeepObserverMiddlewareKibanaApmTrack)
        //start
        var receiveCount = 0;
        var time
        class ConsumerService{
            getMessage(message){
                if(testHashChange) teturn
                expect(message.type).toBe(`monitor`)
                expect(message.typeName).toBe(`kibanaApmTrack`)              
                switch(++receiveCount){
                    case 1:
                        expect(message.data.type).toBe(`pageError`)
                        expect(message.data.tags.errorContent).toBe('{"type":"error","data":"[\\"errorTest\\"]"}')
                        expect(message.data.tags.findErrorDate).toBe(time)
                        expect(message.data.spans.length).toBe(3)
                        expect(message.data.spans).toEqual([
                            {name:'log->["logTest"]',type:jasmine.stringMatching(`monitor-log:${time}`)},
                            {name:'warn->["warnTest"]',type:jasmine.stringMatching(`monitor-log:${time}`)},
                            {name:'error->["errorTest"]',type:jasmine.stringMatching(`monitor-log:${time}`)},
                        ])
                        setTimeout(()=>{
                            ko.apis('logStop')
                            ko.apis('cancelTrack')
                            done()
                        },200)
                        break;
                    default:
                        fail('receive error message')
                }
                return 
            }
            apply(pipe,config){
                const { registerReciveMessage } = pipe
                registerReciveMessage(this.getMessage)
            }
        }
        ko.use(ConsumerService)
        setTimeout(()=>{
            console.log('logTest')
            console.warn('warnTest')
            console.error('errorTest')
            time = Tools.dateFormat(new Date(),'yyyy-MM-dd hh')
        })
    })


    it('KeepObserverMiddlewareKibanaApmTrack config{isInterruptNormal = false} with pageError handle log',function(done){
        ko = new KeepObserver({ 
            isGlobalElementActionCatch:true,
            serviceName: "dev-test",
            reportDateFormat:'yyyy-MM-dd hh',
            agentVersion: "step_1",
        })
        ko.use(KeepObserverLog)
        ko.use(KeepObserverMiddlewareKibanaApmTrack)
        //start
        var receiveCount = 0;
        var time
        class ConsumerService{
            getMessage(message){
                expect(message.priorityExec).toBe(true)          
                switch(++receiveCount){
                    case 1:
                        expect(message.type).toBe(`monitor`)
                        expect(message.typeName).toBe(`log`)
                        expect(message.data).toEqual({type: 'log', data: '["logTest"]'})
                        break;
                    case 2:
                        expect(message.type).toBe(`monitor`)
                        expect(message.typeName).toBe(`log`)
                        expect(message.data).toEqual({type: 'warn', data: '["warnTest"]'})
                        break;
                    case 3:
                        expect(message.type).toBe(`monitor`)
                        expect(message.typeName).toBe(`log`)
                        expect(message.data).toEqual({type: 'error', data: '["errorTest"]'})
                        break;
                    case 4:
                        expect(message.type).toBe(`monitor`)
                        expect(message.typeName).toBe(`kibanaApmTrack`)  
                        expect(message.data.type).toBe(`pageError`)
                        expect(message.data.tags.errorContent).toBe('{"type":"error","data":"[\\"errorTest\\"]"}')
                        expect(message.data.tags.findErrorDate).toBe(time)
                        expect(message.data.spans.length).toBe(3)
                        expect(message.data.spans).toEqual([
                            {name:'log->["logTest"]',type:jasmine.stringMatching(`monitor-log:${time}`)},
                            {name:'warn->["warnTest"]',type:jasmine.stringMatching(`monitor-log:${time}`)},
                            {name:'error->["errorTest"]',type:jasmine.stringMatching(`monitor-log:${time}`)},
                        ])
                        setTimeout(()=>{
                            ko.apis('logStop')
                            ko.apis('cancelTrack')
                            done()
                        },200)
                        break;
                    default:
                        fail('receive error message')
                }
                return 
            }
            apply(pipe,config){
                const { registerReciveMessage } = pipe
                registerReciveMessage(this.getMessage)
            }
        }
        ko.use(ConsumerService)
        // add middle Priority exec -> KeepObserverMiddlewareKibanaApmTrack middle exec
        ko.useMiddle('sendMessage',(interrupt,next)=>(message)=>{
            message['priorityExec'] = true;
            next(message)
        })
        setTimeout(()=>{
            console.log('logTest')
            console.warn('warnTest')
            console.error('errorTest')
            time = Tools.dateFormat(new Date(),'yyyy-MM-dd hh')
        })
    })

    
    it('KeepObserverMiddlewareKibanaApmTrack  pageError  handle netowrk',function(done){
        const testRequest = 'http://localhost:9003/report'
        const testTimeout = 'http://localhost:9003/timeout'
        const test404 = 'http://localhost:9003/404'
        const test500 = 'http://localhost:9003/500'
        ko = new KeepObserver({ 
            isInterruptNormal:true,
            reportDateFormat:'yyyy-MM-dd hh',
            isGlobalElementActionCatch:true,
            timeout: 25000,
            serviceName: "dev-test",
            agentVersion: "step_1",
        })
        ko.use(KeepObserverNetwork)
        ko.use(KeepObserverMiddlewareKibanaApmTrack)
        //start
        var receiveCount = 0;
        var time_200
        var time_404 
        var time_500
        var time_Timeout
        class ConsumerService{
            getMessage(message){
                expect(message.type).toBe(`monitor`)
                expect(message.typeName).toBe(`kibanaApmTrack`)            
                switch(++receiveCount){
                    case 1:
                        expect(message.data.type).toBe(`pageError`)
                        expect(message.data.tags.errorContent).toEqual(jasmine.stringMatching(`"method":"GET","url":"http://localhost:9003/404","params":"","status":404`))
                        expect(message.data.tags.findErrorDate).toBe(time_404)
                        expect(message.data.spans.length).toBe(4)
                        expect(message.data.spans).toEqual([
                            {name:'ajax->POST:http://localhost:9003/report(request:0)',type:jasmine.stringMatching(`monitor-network:${time_200}`)},
                            {name:'ajax->POST:http://localhost:9003/report(response:200->{"code":2000,"data":{"test":111}})',type:jasmine.stringMatching(`monitor-network:${time_200}`)},
                            {name:'ajax->GET:http://localhost:9003/404(request:0)',type:jasmine.stringMatching(`monitor-network:${time_404}`)},
                            {name:'ajax->GET:http://localhost:9003/404(response:404->ajax request error! error statusCode:404)',type:jasmine.stringMatching(`monitor-network:${time_404}`)},
                        ])
                        break;
                    case 2:
                        expect(message.data.type).toBe(`pageError`)
                        expect(message.data.tags.errorContent).toEqual(jasmine.stringMatching(`"method":"GET","url":"http://localhost:9003/500","params":"","status":500`))
                        expect(message.data.tags.findErrorDate).toBe(time_500)
                        expect(message.data.spans.length).toBe(6)
                        expect(message.data.spans).toEqual([
                            {name:'ajax->POST:http://localhost:9003/report(request:0)',type:jasmine.stringMatching(`monitor-network:${time_200}`)},
                            {name:'ajax->POST:http://localhost:9003/report(response:200->{"code":2000,"data":{"test":111}})',type:jasmine.stringMatching(`monitor-network:${time_200}`)},
                            {name:'ajax->GET:http://localhost:9003/404(request:0)',type:jasmine.stringMatching(`monitor-network:${time_404}`)},
                            {name:'ajax->GET:http://localhost:9003/404(response:404->ajax request error! error statusCode:404)',type:jasmine.stringMatching(`monitor-network:${time_404}`)},
                            {name:'ajax->GET:http://localhost:9003/500(request:0)',type:jasmine.stringMatching(`monitor-network:${time_500}`)},
                            {name:'ajax->GET:http://localhost:9003/500(response:500->ajax request error! error statusCode:500)',type:jasmine.stringMatching(`monitor-network:${time_500}`)},
                        ])
                        break;
                    case 3:
                        let time_Timeout_Done = Tools.dateFormat(new Date(  (new Date(time_Timeout).getTime()+20000)  ),'yyyy-MM-dd hh')
                        expect(message.data.type).toBe(`pageError`)
                        expect(message.data.tags.errorContent).toEqual(jasmine.stringMatching(`"method":"GET","url":"http://localhost:9003/timeout","params":"","status":0`))
                        expect(message.data.tags.findErrorDate).toBe(time_Timeout_Done)
                        expect(message.data.spans.length).toBe(8)
                        expect(message.data.spans).toEqual([
                            {name:'ajax->POST:http://localhost:9003/report(request:0)',type:jasmine.stringMatching(`monitor-network:${time_200}`)},
                            {name:'ajax->POST:http://localhost:9003/report(response:200->{"code":2000,"data":{"test":111}})',type:jasmine.stringMatching(`monitor-network:${time_200}`)},
                            {name:'ajax->GET:http://localhost:9003/404(request:0)',type:jasmine.stringMatching(`monitor-network:${time_404}`)},
                            {name:'ajax->GET:http://localhost:9003/404(response:404->ajax request error! error statusCode:404)',type:jasmine.stringMatching(`monitor-network:${time_404}`)},
                            {name:'ajax->GET:http://localhost:9003/500(request:0)',type:jasmine.stringMatching(`monitor-network:${time_500}`)},
                            {name:'ajax->GET:http://localhost:9003/500(response:500->ajax request error! error statusCode:500)',type:jasmine.stringMatching(`monitor-network:${time_500}`)},
                            {name:'ajax->GET:http://localhost:9003/timeout(request:0)',type:jasmine.stringMatching(`monitor-network:${time_Timeout_Done}`)},
                            {name:'ajax->GET:http://localhost:9003/timeout(response:0->ajax request timeout，time:25000(ms))',type:jasmine.stringMatching(`monitor-network:${time_Timeout_Done}`)},
                        ])
                        setTimeout(()=>{
                            ko.apis('networkStop')
                            ko.apis('networkCancelPatch')
                            ko.apis('cancelTrack')
                            done()
                        },200)
                        break;
                    default:
                        fail('receive error message')
                }
                return 
            }
            apply(pipe,config){
                const { registerReciveMessage } = pipe
                registerReciveMessage(this.getMessage)
            }
        }
        ko.use(ConsumerService)
        //ajax exec
        var requestExec = axios.post(testRequest,{test:111,params:{type:'post'}})
        time_200 = Tools.dateFormat(new Date(),'yyyy-MM-dd hh')
        requestExec.finally(()=>{
            return new Promise((res)=>setTimeout(()=>{
                axios.get(test404).finally(res),
                time_404 = Tools.dateFormat(new Date(),'yyyy-MM-dd hh')
            },200))
        })
        .finally(()=>{
            return new Promise((res)=>setTimeout(()=>{
                axios.get(test500).finally(res),
                time_500 = Tools.dateFormat(new Date(),'yyyy-MM-dd hh')
            },200))
        })
        .finally(()=>{
            return new Promise((res)=>setTimeout(()=>{
                axios.get(testTimeout).finally(res),
                time_Timeout = new Date()
            },200))
        })
    })


    it('KeepObserverMiddlewareKibanaApmTrack  pageError  handle htmlElementActive with  handle errorCatch',function(done){
        ko = new KeepObserver({ 
            isInterruptNormal:true,
            reportDateFormat:'yyyy-MM-dd hh',
            isGlobalElementActionCatch:true,
            serviceName: "dev-test",
            agentVersion: "step_1",
        })
        ko.use(KeepObserverHtmlElementActive)
        ko.use(KeepObserverMiddlewareKibanaApmTrack)
        //start
        var receiveCount = 0;
        var time 
        class ConsumerService{
            getMessage(message){    
                switch(++receiveCount){
                    case 1:
                        expect(message.type).toBe(`monitor`)
                        expect(message.typeName).toBe(`kibanaApmTrack`)    
                        expect(message.data.type).toBe(`pageError`)
                        expect(message.data.tags.errorContent).toEqual(`{"message":"test error message","filename":"kibanaApmTrack.test.js"}`)
                        expect(message.data.tags.findErrorDate).toBe(time)
                        expect(message.data.spans.length).toBe(9)
                        expect(message.data.spans).toEqual([
                            {name:'change->input:(xpath:/html/body/input)->test',type:jasmine.stringMatching(`monitor-htmlElementActive:${time}`)},
                            {name:'click->button:(xpath:/html/body/button)',type:jasmine.stringMatching(`monitor-htmlElementActive:${time}`)},
                            {name:'change->input:(xpath:/html/body/input[2])->true',type:jasmine.stringMatching(`monitor-htmlElementActive:${time}`)},
                            {name:'change->input:(xpath:/html/body/input[3])->true',type:jasmine.stringMatching(`monitor-htmlElementActive:${time}`)},
                            {name:'change->input:(xpath:/html/body/input[3])->false',type:jasmine.stringMatching(`monitor-htmlElementActive:${time}`)},
                            {name:'change->textarea:(xpath:/html/body/textarea)->test',type:jasmine.stringMatching(`monitor-htmlElementActive:${time}`)},
                            {name:'click->a:(xpath:/html/body/a)',type:jasmine.stringMatching(`monitor-htmlElementActive:${time}`)},
                            {name:'click->div:(xpath:/html/body/div)',type:jasmine.stringMatching(`monitor-htmlElementActive:${time}`)},
                            {name:'Error->test error message(kibanaApmTrack.test.js)',type:jasmine.stringMatching(`monitor-error:${time}`)},
                        ])    
                        setTimeout(()=>{
                            ko.apis('htmlElementActiveStop')
                            ko.apis('cancelTrack')
                            done()
                        },200)
                        break;
                    default:
                        fail('receive error message')
                }
                return 
            }
            apply(pipe,config){
                const { registerReciveMessage } = pipe
                registerReciveMessage(this.getMessage)
            }
        }
        class SimulateCatchErrorService{
            constructor(){
                this.sendMessage = undefined
            }
            targetSendMessage(message,filename){
                this.sendMessage({
                    type : "monitor",
                    typeName : 'error',
                    data: {
                        message,
                        filename
                    },
                })
            }
            apply(pipe,config){
                const { sendMessage } = pipe
                this.sendMessage = sendMessage
                return{
                    targetSendMessage:this.targetSendMessage,
                }
            }
        }
        ko.use(ConsumerService)
        ko.use(SimulateCatchErrorService)
        //elementActive exec
        setTimeout(()=>{
            var inputText= document.createElement('input')
            document.body.appendChild(inputText)
            inputText.value = 'test'
            inputText.dispatchEvent(new Event('change', { 'bubbles': true }));
            //click
            var button = document.createElement('button')
            document.body.appendChild(button)
            button.dispatchEvent(new Event('click', { 'bubbles': true }));
            button.dispatchEvent(new Event('click', { 'bubbles': true }));
            //checkbox
            var inputCheckout = document.createElement('input')
            inputCheckout.setAttribute('type','checkbox')
            inputCheckout.checked = true
            document.body.appendChild(inputCheckout)
            inputCheckout.dispatchEvent(new Event('change', { 'bubbles': true }));
            //radio
            var inputRadio = document.createElement('input')
            inputRadio.setAttribute('type','radio')
            inputRadio.checked = true
            document.body.appendChild(inputRadio)
            inputRadio.dispatchEvent(new Event('change', { 'bubbles': true }));
            inputRadio.checked = false
            inputRadio.dispatchEvent(new Event('change', { 'bubbles': true }));
            //textarea
            var textarea= document.createElement('textarea')
            document.body.appendChild(textarea)
            textarea.value = 'test'
            textarea.dispatchEvent(new Event('change', { 'bubbles': true }));
            //a
            var a= document.createElement('a')
            document.body.appendChild(a)
            a.dispatchEvent(new Event('click', { 'bubbles': true }));
            //div
            var div= document.createElement('div')
            document.body.appendChild(div)
            div.dispatchEvent(new Event('click', { 'bubbles': true }));
            //remove
            document.body.removeChild(inputText)
            document.body.removeChild(button)
            document.body.removeChild(inputCheckout)
            document.body.removeChild(inputRadio)
            document.body.removeChild(textarea)
            document.body.removeChild(a)
            document.body.removeChild(div)
            //throw error
            time = Tools.dateFormat(new Date(),'yyyy-MM-dd hh')
            ko.apis('targetSendMessage','test error message','kibanaApmTrack.test.js')
        },200)
    })


    it('KeepObserverMiddlewareKibanaApmTrack  pageHashChange',function(done){
        const testRequest = 'http://localhost:9003/report'
        ko = new KeepObserver({ 
            isInterruptNormal:true,
            reportDateFormat:'yyyy-MM-dd hh',
            isGlobalElementActionCatch:true,
            serviceName: "dev-test",
            agentVersion: "step_1",
        })
        ko.use(KeepObserverHtmlElementActive)
        ko.use(KeepObserverLog)
        ko.use(KeepObserverNetwork)
        ko.use(KeepObserverMiddlewareKibanaApmTrack)
        //start
        var receiveCount = 0;
        var startTime
        var logTime
        var clickTime
        var inputTime
        var nextTime
        var requestTime 
        class ConsumerService{
            getMessage(message){         
                switch(++receiveCount){
                    case 1:
                        expect(message.type).toBe(`monitor`)
                        expect(message.typeName).toBe(`kibanaApmTrack`)    
                        expect(message.data.type).toBe(`pageHashChange`)
                        expect(message.data.url).toBe(window.location.origin + window.location.pathname)
                        expect(message.data.tags.startUrl).toBe(window.location.origin + window.location.pathname)
                        expect(message.data.tags.startDate).toBe(startTime)
                        expect(message.data.tags.nextUrl).toBe(window.location.origin + window.location.pathname + '#hasChange')
                        expect(message.data.tags.nextDate).toBe(nextTime)
                        expect(message.data.tags.errorContent).toBeUndefined()
                        expect(message.data.tags.findErrorDate).toBeUndefined()
                        expect(message.data.spans.length).toBe(5)
                        expect(message.data.spans).toEqual([
                            {name:'warn->["warnTest"]',type:jasmine.stringMatching(`monitor-log:${logTime}`)},
                            {name:'click->button:(xpath:/html/body/button)',type:jasmine.stringMatching(`monitor-htmlElementActive:${clickTime}`)},
                            {name:'ajax->POST:http://localhost:9003/report(request:0)',type:jasmine.stringMatching(`monitor-network:${requestTime}`)},
                            {name:'change->textarea:(xpath:/html/body/textarea)->test',type:jasmine.stringMatching(`monitor-htmlElementActive:${inputTime}`)},
                            {name:'ajax->POST:http://localhost:9003/report(response:200->{"code":2000,"data":{"test":111}})',type:jasmine.stringMatching(`monitor-network:${inputTime}`)},
                        ])    
                        setTimeout(()=>{
                            ko.apis('htmlElementActiveStop')
                            ko.apis('networkStop')
                            ko.apis('logStop')
                            ko.apis('cancelTrack')
                            ko.apis('networkCancelPatch')
                            done()
                        },200)
                        break;
                    default:
                        fail('receive error message')
                }
                return 
            }
            apply(pipe,config){
                const { registerReciveMessage } = pipe
                registerReciveMessage(this.getMessage)
            }
        }
        ko.use(ConsumerService)
        //elementActive exec
        startTime = Tools.dateFormat(new Date(),'yyyy-MM-dd hh')
        setTimeout(()=>{
            //log
            logTime = Tools.dateFormat(new Date(),'yyyy-MM-dd hh')
            console.warn('warnTest')
            //click
            clickTime = Tools.dateFormat(new Date(),'yyyy-MM-dd hh')
            var button = document.createElement('button')
            document.body.appendChild(button)
            button.dispatchEvent(new Event('click', { 'bubbles': true }));
            button.dispatchEvent(new Event('click', { 'bubbles': true }));
            //request
            var requestExec = axios.post(testRequest,{test:111,params:{type:'post'}})
            requestTime = Tools.dateFormat(new Date(),'yyyy-MM-dd hh')
            requestExec.then(()=>{
                //textarea input
                inputTime = Tools.dateFormat(new Date(),'yyyy-MM-dd hh')
                var textarea= document.createElement('textarea')
                document.body.appendChild(textarea)
                textarea.value = 'test'
                textarea.dispatchEvent(new Event('change', { 'bubbles': true }));
                //remove     
                document.body.removeChild(button)
                document.body.removeChild(textarea)
                // aysn middle Immediately pushState will  Loss response
                setTimeout(()=>{
                    // hashChange
                    nextTime = Tools.dateFormat(new Date(),'yyyy-MM-dd hh')
                    // window.location.href = window.location.origin + window.location.pathname + '#hasChange'
                    window.history.pushState(null,null,window.location.origin + window.location.pathname + '#hasChange')
                },100)
            })
        },200)
    })


});


