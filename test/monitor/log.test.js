
import  KeepObserver  from '../../@core/instance'
import  KeepObserverLog from '../../@core/monitor/log'
import  { KeepObserverPublic,KeepObserverMiddleWare }  from '@util/index'
import  { consoleTools }  from '@util/index'
import  { version } from '../../src/constants/index.ts';


describe("KeepObserverLog service",function(){
    //init service
    var testInstance 
    var logInstance
    beforeEach(function () {
        //config
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000
        //init service
        KeepObserverMiddleWare.publicMiddles = {}
        KeepObserverPublic.extendReportParams = {}
        testInstance = new KeepObserver({
            runTimeOut: 3000,
            projectName: 'test',
            projectVersion: 'test-version'
        })
        logInstance = new KeepObserverLog()
    })


    it('KeepObserverLog api',function(){
        spyOn(logInstance,'stopObserver').and.callThrough();
        spyOn(logInstance,'startObserver').and.callThrough();

        testInstance.use(logInstance)
        testInstance.apis('$logStart')
        testInstance.apis('$logStop')

        expect(logInstance.startObserver).toHaveBeenCalled()
        expect(logInstance.stopObserver).toHaveBeenCalled()
    })


    it('keepObserverLog  send log Message',function(done){
        class ConsumerService{
            getMessage(message){
                consoleTools.log(message)
                setTimeout(()=>done(),200)
            }
            apply(pipe,config){
                const { registerReciveMessage } = pipe
                registerReciveMessage(this.getMessage)
            }
        }
        testInstance.useMiddle('sendMessage',(interrupt,next)=>(...params)=>{
            const [message] = params
            next(...params)
        })
        testInstance.use(logInstance)
        testInstance.use(ConsumerService)
        //after init is no Immediately catch message
        setTimeout(()=>{
            console.log('test log')
            console.log({test:'test',test2:[1,2,3,4,5]})
        })
    })

    
    



});


