
import  KeepObserver  from '../../@core/instance'
import { version } from '../../src/constants/index.ts';





describe("KeepObserver service",function(){
    //init service
    var testInstance 
    beforeEach(function () {
        //config
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000
        //init service
        testInstance = new KeepObserver({
            projectName:'test',
            projectVersion:'test-version'
        })
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



    it('ProductService register api',function(){
        class ProductService {
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
        const productServiceInstance = new ProductService()
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




    it('ProductService use MiddleService',function(done){
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
                const { runMiddle,useMiddle } = pipe
                //get target middle method
                this.runMiddle = runMiddle
                //register middle
                useMiddle(extendScopeName,(interrupt,next)=>(...params)=>{
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


    


});



