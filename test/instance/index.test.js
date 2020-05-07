
import  KeepObserver,{PipeUser}  from '../../@core/instance'
import  { KeepObserverPublic,KeepObserverMiddleWare,Tools }  from '@util/index'
import { version } from '../../src/constants/index.ts';



describe("KeepObserver service",function(){
    //init service
    var testInstance 
    beforeEach(function () {
        //config
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000
        //init service
        KeepObserverMiddleWare.publicMiddles = {}
        KeepObserverPublic.extendReportParams = {}
        PipeUser.onSendDoneCallbackMap = []
        testInstance = new KeepObserver({
            runMiddleTimeOut: 3000,
            isCheckRepeatUse:false,
            projectName: 'test',
            projectVersion: 'test-version'
        })
    })
    afterEach(function () {
        testInstance._pipe.pipeMap = {}
    })
    afterAll(function(){
        KeepObserverMiddleWare.publicMiddles = {}
        KeepObserverPublic.extendReportParams = {}
        PipeUser.onSendDoneCallbackMap = []
    })


    it('create KeepObserver instance',function(){
        //instance
        expect(testInstance._config).toBeDefined()
        expect(testInstance._config.version).toBe(version)
        expect(testInstance._config.projectName).toBe('test')
        expect(testInstance._config.projectVersion).toBe('test-version')
        expect(testInstance.middleScopeNames).toEqual(testInstance._publicMiddleScopeNames)
        expect(testInstance.use).toBeDefined() 
        expect(testInstance.useMiddle).toBeDefined() 
        expect(testInstance.apis).toBeDefined() 
        expect(testInstance.extendReportParams).toBeDefined() 
        //pipe
        expect(testInstance._pipe).toBeDefined() 
        expect(testInstance._pipe.$mq).toBeDefined()
        expect(testInstance._pipe.$keepObserver).toBe(testInstance)
        expect(testInstance._pipe._config).toEqual(testInstance._config)
        expect(testInstance._pipe.pipeUser).toEqual([])
        expect(testInstance._pipe.injection).toBeDefined() 
    })



    it('ProducerService register api',function(){
        class ProducerService {
            testApi(){ return false}
            testApi2(count){return ++count}
            apply(pipe,config){
                return{
                    testApi:this.testApi,
                    testApi2:this.testApi2
                }
            }
        }
        class NoInstanceService{
            static testApi(){
                return true
            }
            apply(pipe,config){
                return{
                    testApi3:this.constructor.testApi,
                }
            }
        }
        //init
        const productServiceInstance = new ProducerService()
        spyOn(productServiceInstance,'testApi').and.callThrough();
        spyOn(productServiceInstance,'testApi2').and.callThrough();
        spyOn(productServiceInstance,'apply').and.callThrough();
        spyOn(NoInstanceService,'testApi').and.callThrough();
        spyOn(NoInstanceService,'apply').and.callThrough();
        //register service
        testInstance.use(productServiceInstance)
        testInstance.use(NoInstanceService)
        expect(testInstance._pipe.pipeUser.length).toBe(2)
        expect(productServiceInstance.apply).toHaveBeenCalledWith(testInstance._pipe.pipeUser[0],testInstance._config)
        //target api
        const value1 = testInstance.apis('testApi')
        expect(productServiceInstance.testApi).toHaveBeenCalled()
        expect(value1).toBeFalse()
        const value2 = testInstance.apis('testApi2',2)
        expect(productServiceInstance.testApi).toHaveBeenCalledWith()
        expect(value2).toBe(3)
        const value3 = testInstance.apis('testApi3')
        expect(NoInstanceService.testApi).toHaveBeenCalledWith()
        expect(value3).toBeTrue()

    })


    it('repeat register server or error params',function(done){
        testInstance = new KeepObserver({
            runMiddleTimeOut: 3000,
            projectName: 'test',
            projectVersion: 'test-version'
        })
        var receiveCount = 0
        var errorParams = function(){}
        class RepeatServer {
            apply(){}
        }
        testInstance.useMiddle('error',(interrupt,next)=>(message)=>{
            switch(++receiveCount){
                case 1:
                    expect(message).toBe('Provider.constructor is undefined')
                    break;
                case 2:
                    expect(message).toBe(`${new RepeatServer().constructor.name} already injection server`)
                    done();
                    break;
            }
            next(message)
        })
        testInstance.use(errorParams)
        //repeat register server
        testInstance.use(RepeatServer)
        testInstance.use(RepeatServer)
    })


    it('service use MiddleService',function(done){
        const extendScopeName = 'test_11'
        class ExtendMiddleService {
            constructor(){
                this.runMiddle = undefined
                this.targetParams = {test:'no_1'}
            }
            targetMiddle(){
                return this.runMiddle(extendScopeName,this.targetParams)
            }
            apply(pipe,config){
                const { runExtendMiddle,useExtendMiddle } = pipe
                //get target middle method
                this.runMiddle = runExtendMiddle
                //register middle
                useExtendMiddle(extendScopeName,(interrupt,next)=>(...params)=>{
                    const [ value ] = params
                    let toEqualValue = {
                        ...this.targetParams,
                        res:'1111'
                    }
                    expect(value).toEqual(toEqualValue)
                        //change value
                    next({
                        ...value,
                        res:'2222'
                    })
                })
                return {
                    targetMiddle:this.targetMiddle
                }
            }
        }
        const extendMiddleServiceInstace = new ExtendMiddleService()
        testInstance.use(extendMiddleServiceInstace)
        //extend scuess
        const extendMiddleScopeName = testInstance._publicMiddleScopeNames.concat([extendScopeName])
        expect(testInstance.middleScopeNames).toEqual(extendMiddleScopeName)
        expect(extendMiddleServiceInstace.runMiddle).toBeDefined()
        //keepObserver instace use middle
        testInstance.useMiddle(extendScopeName,(interrupt,next)=>(...params)=>{
            const [ value ] = params
            expect(value).toEqual(extendMiddleServiceInstace.targetParams)
            //change value
            next({
                ...value,
                res:'1111'
            })
        })
        //service Inside target middle
        testInstance.apis('targetMiddle').then((res)=>{
            let toEqualValue = {
                ...extendMiddleServiceInstace.targetParams,
                res:'2222'
            }
            expect(res).toEqual(toEqualValue)
            done()
        },e=>fail(e))
    })



    it('ProducerService send message and consumerService receive',function(done){
        const now = new Date().getTime()
        //create message
        const sendParams = {
            type:'custome',
            typeName:'test',
            location:'localhost://test',
            environment:'dev-test',
            reportTime:now,
            data:{
                type:'test',
                content:'karam-test'
            }
        }
        const contendHashCode = Tools.getHashCode(sendParams.data)
        const messageValue = {
            ...sendParams,
            contendHashCode,
            //extendParams
            projectName:'test',
            projectVersion:'test-version',
            version,
        }
        class ProducerService {
            constructor(){
                this.sendMessage = undefined
            }
            targetSendMessage(params){ 
                this.sendMessage(params)
            }
            apply(pipe,config){
                const { sendMessage } = pipe
                this.sendMessage = sendMessage
                return{
                    targetSendMessage:this.targetSendMessage,
                }
            }
        }
        class ConsumerService{
            getMessage(message){
                expect(message).toEqual(messageValue)
                done()
            }
            apply(pipe,config){
                const { registerReciveMessage } = pipe
                registerReciveMessage(this.getMessage)
            }
        }
        const producerServiceInstace = new ProducerService()
        const consumerServiceInstace = new ConsumerService()
        spyOn(producerServiceInstace,'targetSendMessage').and.callThrough();
        spyOn(consumerServiceInstace,'getMessage').and.callThrough();
        testInstance.use(producerServiceInstace)
        testInstance.use(consumerServiceInstace)
        //add flag
        expect(producerServiceInstace.sendMessage).toBeDefined()
        spyOn(producerServiceInstace,'sendMessage').and.callThrough();
        //add middle
        testInstance.useMiddle('sendMessage',(interrupt,next)=>(...params)=>{
            const [ value ] = params
            expect(value).toEqual(messageValue)
            next(...params)
        })
        //target
        testInstance.apis('targetSendMessage',sendParams)
        expect(producerServiceInstace.sendMessage).toHaveBeenCalledWith(sendParams)
    })



    it('consumerService receive Message handle process sendMessage',function(done){
        const now = new Date().getTime()
        var sendErrorMessage = false
        //create message
        const sendParams = {
            type:'custome',
            typeName:'test',
            location:'localhost://test',
            environment:'dev-test',
            reportTime:now,
            data:{
                type:'test',
                content:'karam-test'
            }
        }
        const contendHashCode = Tools.getHashCode(sendParams.data)
        const messageValue = {
            ...sendParams,
            contendHashCode,
            //extendParams
            projectName:'test',
            projectVersion:'test-version',
            version,
        }
        class ProducerService {
            constructor(){
                this.sendMessage = undefined
            }
            targetSendMessage(params){ 
                this.sendMessage(params)
            }
            apply(pipe,config){
                const { sendMessage } = pipe
                this.sendMessage = sendMessage
                return{
                    targetSendMessage:this.targetSendMessage,
                }
            }
        }
        const producerServiceInstace = new ProducerService()
        class ConsumerService{
            getMessage(message){
                if(!sendErrorMessage){
                    expect(message).toEqual(messageValue)
                }else{
                    fail('receive error message')
                    return 
                }
                sendErrorMessage = true
                producerServiceInstace.targetSendMessage('error')
                setTimeout(()=>{
                    done()
                },300)
            }
            apply(pipe,config){
                const { registerReciveMessage } = pipe
                registerReciveMessage(this.getMessage)
            }
        }
        const consumerServiceInstace = new ConsumerService()
        testInstance.use(producerServiceInstace)
        testInstance.use(consumerServiceInstace)
        //target
        testInstance.apis('targetSendMessage',sendParams)
        
    })



    it('ProducerService throw error',function(done){
        //is sendMessage delay 1000ms test
        var currService = 0;
        class ProducerService_noApply {
        }
        class ProducerService_applyThrowError {
            apply(){
                throw new Error('test apply error')
            }
        }
        class ProducerService_apiThrowError {
            throwError(){
                throw new Error('test error')
            }
            apply(){
                return {
                    throwError:this.throwError
                }
            }
        }
        class ProducerService_sendMessageMiddleError{
            apply(pipe){
                const { sendMessage } = pipe
                sendMessage({
                    type:'custome',
                    typeName:'test',
                    location:'localhost://test',
                    environment:'dev-test',
                    reportTime:new Date().getTime(),
                    data:{
                        type:'test',
                        content:'karam-test'
                    }
                })
            }
        }
        testInstance.useMiddle('error',(interrupt,next)=>(...params)=>{
            const [ value ] = params
            switch(++currService){
                case 1:
                    expect(value).toBe('use method receive provider is not apply method')
                    break;
                case 2:
                    expect(value).toBe('injection receive Provider apply is runing find error:'+'Error: test apply error')
                    break;
                case 3:
                    expect(value).toBe('apiName:throwError is run find error:'+'Error: test error')
                    break;
                case 4:
                    expect(value).toBe('sendMessage middles exec is error:'+'Error: test middle error')
                    done()
                    break;
                case 5:
                    fail('error repeat find')
            }
            next(...params)
        })
        Promise.resolve().then(()=>{
            testInstance.use(ProducerService_noApply)
            return new Promise((res)=>setTimeout(res,200))
        }).then(()=>{
            testInstance.use(ProducerService_applyThrowError)
            return new Promise((res)=>setTimeout(res,200))
        }).then(()=>{
            testInstance.use(ProducerService_apiThrowError)
            testInstance.apis('throwError')
            return new Promise((res)=>setTimeout(res,200))
        }).then(()=>{
            const res = testInstance.useMiddle('sendMessage',(interrupt,next)=>(...params)=>{
                throw new Error('test middle error')
            })
            testInstance.use(ProducerService_sendMessageMiddleError)
        })
    })



    it('middleService timeout',function(done){
        const scopeName = 'timeout'
        testInstance.useMiddle(scopeName,(interrupt,next)=>(...params)=>{
        })
        testInstance.useMiddle('error',(interrupt,next)=>(...params)=>{
            const [ message ] = params
            expect(message).toBe(`${scopeName} middles exec is timeout 3000ms`)
            next()
            done()
        })
        testInstance.runMiddle(scopeName)
    })

    

    it('sendMessage limt ctr',function(done){
        const now = new Date().getTime()
        var isStopSendMessage = false
        var sendCount = 0
        class ProducerService {
            constructor(){
                this.sendMessage = undefined
            }
            targetSendMessage(params){ 
                this.sendMessage(params)
            }
            apply(pipe,config){
                const { sendMessage } = pipe
                this.sendMessage = sendMessage
                return{
                    targetSendMessage:this.targetSendMessage,
                }
            }
        }
        class ConsumerService{
            getMessage(message){
                if(isStopSendMessage){
                    setTimeout(()=>done(),200)
                }
            }
            apply(pipe,config){
                const { registerReciveMessage } = pipe
                registerReciveMessage(this.getMessage)
            }
        }
        testInstance.useMiddle('error',(interrupt,next)=>(...params)=>{
            const [ errorMessage ] = params
            if(sendCount> 10 && sendCount< 20){
                expect(errorMessage).toBe('send  Message during 1000ms in Over 10 times,maybe Anomaly')
                next(...params)
                return
            }
            if(sendCount > 20){
                expect(errorMessage).toBe('send  Message during 1000ms in Over 20 times,maybe happend Endless loop')
                isStopSendMessage = true
                next(...params)
                return
            }
            next(...params)
            if(sendCount>21){
                fail('limt ctr error than 21 count')
            }
        })
        testInstance.use(ProducerService)
        testInstance.use(ConsumerService)
        for(var i=0; i<25; i++){
            sendCount++
            testInstance.apis('targetSendMessage')
        }
        for(var i=0; i<25; i++){
            sendCount++
            testInstance.apis('targetSendMessage',{
                data:{
                    sendCount
                }
            })
        }
        setTimeout(()=>testInstance.apis('targetSendMessage'),3200)
    })


    
    it('middle server sendDone callback',function(done){
        var isCallbackSendMessage = false
        var isDone = false;
        var sendCount = 0
        class MiddlewareService_1 {
            constructor(){
                this.sendMessage = undefined
            }
            targetSendMessage(params){ 
                this.sendMessage(params)
            }
            sendDoneCallback(){
                if(!isCallbackSendMessage){
                    this.sendMessage({ data:{sendCount:++sendCount} })
                }
            }
            apply(pipe,config){
                const { sendMessage,registerSendDoneCallback,useExtendMiddle } = pipe
                this.sendMessage = sendMessage
                //receive message
                useExtendMiddle('sendMessage',(interrupt,next)=>(params)=>{
                    const { sendCount } = params.data
                    next({
                        ...params,
                        data:{
                            sendCount: sendCount+1
                        }
                    })
                })
                registerSendDoneCallback(this.sendDoneCallback.bind(this))
                return{
                    targetSendMessage:this.targetSendMessage,
                }
            }
        }
        class MiddlewareService_2 {
            constructor(){
                this.sendMessage = undefined
            }
            sendDoneCallback(){
                if(!isCallbackSendMessage){
                    isCallbackSendMessage = true
                    this.sendMessage({ data:{sendCount:++sendCount} })
                }
            }
            apply(pipe,config){
                const { sendMessage,registerSendDoneCallback,useExtendMiddle } = pipe
                this.sendMessage = sendMessage
                //receive message
                useExtendMiddle('sendMessage',(interrupt,next)=>(params)=>{
                    const { sendCount } = params.data
                    next({
                        ...params,
                        data:{
                            sendCount:sendCount+1
                        }
                    })
                })
                registerSendDoneCallback(this.sendDoneCallback.bind(this))
            }
        }
        class ConsumerService{
            getMessage(message){
                const { sendCount } = message.data
                if(isCallbackSendMessage){
                    if(!isDone){
                        isDone = true
                        expect(sendCount).toBe(4)
                    }else{
                        expect(sendCount).toBe(5)
                    }
                    setTimeout(()=>{
                        done()
                    },200)
                }else{
                    expect(sendCount).toBe(3)
                }
            }
            apply(pipe,config){
                const { registerReciveMessage } = pipe
                registerReciveMessage(this.getMessage)
            }
        }
        testInstance.useMiddle('error',(interrupt,next)=>(message)=>{
            fail(`middleware send find error: ${message}`)
            next(message)
        })
        testInstance.use(MiddlewareService_1)
        testInstance.use(MiddlewareService_2)
        testInstance.use(ConsumerService)
        testInstance.apis('targetSendMessage',{ data:{sendCount:++sendCount} })
    })


});


