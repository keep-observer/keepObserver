
import  KeepObserver  from '../../@core/instance'
import  KeepObserverNetwork from '../../@core/monitor/network'
import  { KeepObserverPublic,KeepObserverMiddleWare }  from '@util/index'
import  { consoleTools }  from '@util/index'
import axios from 'axios'



const testRequest = 'http://localhost:9003/report?time=2000'
const testTimeout = 'http://localhost:9003/timeout'
const test404 = 'http://localhost:9003/404'
const test500 = 'http://localhost:9003/500'


describe("KeepObserverNetwork service",function(){
    //init service
    var testInstance = null
    var network = new KeepObserverNetwork()
    beforeEach(function () {
        //config
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000
        //init service
        KeepObserverMiddleWare.publicMiddles = {}
        KeepObserverPublic.extendReportParams = {}
        testInstance = new KeepObserver({
            runMiddleTimeOut: 3000,
            projectName: 'test',
            projectVersion: 'test-version'
        })
        network.startObserver()
    })



    it('KeepObserverNetwork api',function(){
        spyOn(network,'stopObserver').and.callThrough();
        spyOn(network,'startObserver').and.callThrough();
        testInstance.use(network)
        testInstance.apis('networkStart')
        testInstance.apis('networkStop')
        expect(network.startObserver).toHaveBeenCalled()
        expect(network.stopObserver).toHaveBeenCalled()
    })



    it('KeepObserverNetwork ajax catch',function(done){
        console.log('start KeepObserverNetwork ajax catch')
        var receiveCount = 0;
        class ConsumerService{
            getMessage(message){
                expect(message.type).toBe(`monitor`)
                expect(message.typeName).toBe(`network`)
                expect(message.testAdd).toBe(1)
                expect(message.data.type).toBe('ajax')
                switch(++receiveCount){
                    case 1:
                        expect(message.data.status).toBe(0)
                        expect(message.data.method).toBe("POST")
                        expect(message.data.params).toEqual({time:'2000'})
                        expect(message.data.statusType).toBe("request")
                        expect(message.data.url).toBe("http://localhost:9003/report")
                        expect(message.data.body).toBe('{"test":111,"params":{"type":"post"}}')
                        return
                    case 2:
                        expect(message.data.status).toBe(200)
                        expect(message.data.method).toBe("POST")
                        expect(message.data.params).toEqual({time:'2000'})
                        expect(message.data.statusType).toBe("response")
                        expect(message.data.costTime).toBeGreaterThan(10)
                        expect(message.data.url).toBe("http://localhost:9003/report")
                        expect(message.data.body).toBe('{"test":111,"params":{"type":"post"}}')
                        expect(message.data.response).toBe('{"code":2000,"data":{"test":111}}')
                        return
                    case 3:
                        expect(message.data.method).toBe("GET")
                        expect(message.data.status).toBe(0)
                        expect(message.data.params).toBe('')
                        expect(message.data.statusType).toBe("request")
                        expect(message.data.url).toBe("http://localhost:9003/404")
                        expect(message.data.body).toBe('')
                        return
                    case 4:
                        expect(message.data.status).toBe(404)
                        expect(message.data.method).toBe("GET")
                        expect(message.data.params).toBe('')
                        expect(message.data.statusType).toBe("response")
                        expect(message.data.url).toBe("http://localhost:9003/404")
                        expect(message.data.body).toBe('')
                        expect(message.data.isError).toBeTrue()
                        expect(message.data.response).toBe('ajax request error! error statusCode:404')
                        return
                    case 5:
                        expect(message.data.method).toBe("GET")
                        expect(message.data.status).toBe(0)
                        expect(message.data.params).toBe('')
                        expect(message.data.statusType).toBe("request")
                        expect(message.data.url).toBe("http://localhost:9003/500")
                        expect(message.data.body).toBe('')
                        return 
                    case 6:
                        expect(message.data.status).toBe(500)
                        expect(message.data.method).toBe("GET")
                        expect(message.data.params).toBe('')
                        expect(message.data.statusType).toBe("response")
                        expect(message.data.url).toBe("http://localhost:9003/500")
                        expect(message.data.isError).toBeTrue()
                        expect(message.data.body).toBe('')
                        expect(message.data.response).toBe('ajax request error! error statusCode:500')
                        return
                    case 7:
                        expect(message.data.method).toBe("GET")
                        expect(message.data.status).toBe(0)
                        expect(message.data.params).toBe('')
                        expect(message.data.statusType).toBe("request")
                        expect(message.data.url).toBe("http://localhost:9003/timeout")
                        expect(message.data.body).toBe('')
                        return
                    case 8:
                        expect(message.data.status).toBe(0)
                        expect(message.data.method).toBe("GET")
                        expect(message.data.params).toBe('')
                        expect(message.data.statusType).toBe("response")
                        expect(message.data.url).toBe("http://localhost:9003/timeout")
                        expect(message.data.body).toBe('')
                        expect(message.data.isError).toBeTrue()
                        expect(message.data.timeout).toBe(20000)                                    //default timeout 20000 ms
                        expect(message.data.response).toBe('ajax request timeout，time:20000(ms)')
                        expect(message.data.errorContent).toBe('ajax request timeout，time:20000(ms)')
                        setTimeout(()=>{
                            testInstance.apis('networkStop')
                            done()
                        },200)
                        return 
                    default:
                        fail('receive error message')
                }
            }
            apply(pipe,config){
                const { registerReciveMessage } = pipe
                registerReciveMessage(this.getMessage)
            }
        }
        testInstance.useMiddle('sendMessage',(interrupt,next)=>(message)=>{
            message['testAdd'] = 1;
            next(message)
        })
        testInstance.use(network)
        testInstance.use(ConsumerService)
        //ajax
        axios.post(testRequest,{test:111,params:{type:'post'}})
        .finally(()=>new Promise((res)=>setTimeout(()=>axios.get(test404).finally(res),200)))
        .finally(()=>new Promise((res)=>setTimeout(()=>axios.get(test500).finally(res),200)))
        .finally(()=>new Promise((res)=>setTimeout(()=>axios.get(testTimeout).finally(res),200)))
    })

    
    it('KeepObserverNetwork fetch catch',function(done){
        console.log('start KeepObserverNetwork fetch catch')
        var receiveCount = 0;
        class ConsumerService{
            getMessage(message){
                expect(message.type).toBe(`monitor`)
                expect(message.typeName).toBe(`network`)
                expect(message.testAdd).toBe(2)
                expect(message.data.type).toBe('fetch')
                switch(++receiveCount){
                    case 1:
                        expect(message.data.status).toBe(0)
                        expect(message.data.method).toBe("POST")
                        expect(message.data.params).toEqual({time:'2000'})
                        expect(message.data.statusType).toBe("request")
                        expect(message.data.url).toBe("http://localhost:9003/report")
                        expect(message.data.body).toBe('{"test":111,"params":{"type":"post"}}')
                        return
                    case 2:
                        expect(message.data.status).toBe(200)
                        expect(message.data.method).toBe("POST")
                        expect(message.data.params).toEqual({time:'2000'})
                        expect(message.data.statusType).toBe("response")
                        expect(message.data.costTime).toBeGreaterThan(5)
                        expect(message.data.url).toBe("http://localhost:9003/report")
                        expect(message.data.body).toBe('{"test":111,"params":{"type":"post"}}')
                        expect(message.data.response).toBe('{"code":2000,"data":{"test":111}}')
                        return
                    case 3:
                        expect(message.data.method).toBe("GET")
                        expect(message.data.status).toBe(0)
                        expect(message.data.params).toBe('')
                        expect(message.data.statusType).toBe("request")
                        expect(message.data.url).toBe("http://localhost:9003/404")
                        expect(message.data.body).toBe('')
                        return
                    case 4:
                        expect(message.data.status).toBe(404)
                        expect(message.data.method).toBe("GET")
                        expect(message.data.params).toBe('')
                        expect(message.data.statusType).toBe("response")
                        expect(message.data.url).toBe("http://localhost:9003/404")
                        expect(message.data.body).toBe('')
                        expect(message.data.isError).toBeTrue()
                        expect(message.data.response).toBe('fetch error:Not Found')
                        expect(message.data.errorContent).toBe('ajax request error! error statusCode:404')
                        return
                    case 5:
                        expect(message.data.method).toBe("GET")
                        expect(message.data.status).toBe(0)
                        expect(message.data.params).toBe('')
                        expect(message.data.statusType).toBe("request")
                        expect(message.data.url).toBe("http://localhost:9003/500")
                        expect(message.data.body).toBe('')
                        return 
                    case 6:
                        expect(message.data.status).toBe(500)
                        expect(message.data.method).toBe("GET")
                        expect(message.data.params).toBe('')
                        expect(message.data.statusType).toBe("response")
                        expect(message.data.url).toBe("http://localhost:9003/500")
                        expect(message.data.body).toBe('')
                        expect(message.data.isError).toBeTrue()
                        expect(message.data.response).toBe('fetch error:Internal Server Error')
                        expect(message.data.errorContent).toBe('ajax request error! error statusCode:500')
                        return
                    case 7:
                        expect(message.data.method).toBe("GET")
                        expect(message.data.status).toBe(0)
                        expect(message.data.params).toBe('')
                        expect(message.data.statusType).toBe("request")
                        expect(message.data.url).toBe("http://localhost:9003/timeout")
                        expect(message.data.body).toBe('')
                        return
                    case 8:
                        expect(message.data.status).toBe(0)
                        expect(message.data.method).toBe("GET")
                        expect(message.data.params).toBe('')
                        expect(message.data.statusType).toBe("response")
                        expect(message.data.url).toBe("http://localhost:9003/timeout")
                        expect(message.data.body).toBe('')
                        expect(message.data.isError).toBeTrue()
                        expect(message.data.timeout).toBe(20000)                                    //default timeout 20000 ms
                        expect(message.data.response).toBe('ajax request timeout，time:20000(ms)')
                        expect(message.data.errorContent).toBe('ajax request timeout，time:20000(ms)')
                        setTimeout(()=>{
                            testInstance.apis('networkStop')
                            done()
                        },200)
                        return 
                    default:
                        fail('receive error message')
                }
            }
            apply(pipe,config){
                const { registerReciveMessage } = pipe
                registerReciveMessage(this.getMessage)
            }
        }
        testInstance.useMiddle('sendMessage',(interrupt,next)=>(message)=>{
            message['testAdd'] = 2;
            next(message)
        })
        testInstance.use(network)
        testInstance.use(ConsumerService)
        //fetch
        fetch(testRequest,{method:'post',body:{test:111,params:{type:'post'}}})
        .finally(()=>new Promise((res)=>setTimeout(()=>fetch(test404).finally(res),200)))
        .finally(()=>new Promise((res)=>setTimeout(()=>fetch(test500).finally(res),200)))
        .finally(()=>new Promise((res)=>setTimeout(()=>fetch(testTimeout).finally(res),200)))
    })



});


