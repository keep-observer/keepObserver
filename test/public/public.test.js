
import { KeepObserverPublic } from '../../@util/index'



class Test extends KeepObserverPublic{
    constructor(config) {
        super(config)
    }
    testExtendReport(params){
        KeepObserverPublic.extendReport(params)
    }
}






describe("KeepObserverPublic service",function(){
    //test class
    var testMiddleScopeName= 'testMiddle'
    var testInstance


    beforeEach(function () {
        //config
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000
        //api method
        testInstance = new Test({
            develop:true
        })
        spyOn(testInstance,'useMiddle').and.callThrough();
        spyOn(testInstance,'runMiddle').and.callThrough();
        spyOn(testInstance,'handleReportData').and.callThrough();
        spyOn(KeepObserverPublic,'extendReport').and.callThrough();
    })



    it("init instance props",function(){
        expect(testInstance._develop).toEqual(true)
        expect(testInstance.middleScopeNames).toEqual([])
        testInstance.middleScopeNames.push(testMiddleScopeName)
        expect(testInstance.middleScopeNames).toEqual([testMiddleScopeName])
    })


    it("handle propt params and extends params",function(){
        var testCatchParams = {
            type: 'monitor',                 
            typeName: 'test',                                                                      
            data: {
                type:'testData',
                value:1111
            }
        }
        var test_1_value = testInstance.handleReportData(testCatchParams)
        expect(testInstance.handleReportData).toHaveBeenCalledWith(testCatchParams)
        expect(test_1_value.type).toBe(testCatchParams.type)
        expect(test_1_value.typeName).toBe(testCatchParams.typeName)
        expect(test_1_value.data).toEqual(testCatchParams.data)
        //extend params
        var extendParams = {
            test:111,
            test2:2222,
        }
        testInstance.testExtendReport(extendParams)
        var test_2_value = testInstance.handleReportData(testCatchParams)
        expect(KeepObserverPublic.extendReport).toHaveBeenCalledWith(extendParams)
        expect(test_2_value.test).toBe(extendParams.test)
        expect(test_2_value.test2).toBe(extendParams.test2)
    })



    it('register middle sucess and target sucess',function(done){
        var middleHandleFn_1 = (interrupt,next)=>(...params)=>{
            expect(...params).toEqual( {test:111} )
            next({test:222})
        }
        //register
        testInstance.useMiddle(testMiddleScopeName,middleHandleFn_1)
        expect(testInstance.useMiddle).toHaveBeenCalledWith(testMiddleScopeName,middleHandleFn_1)
        //targer
        testInstance.runMiddle(testMiddleScopeName,{test:111}).then((result)=>{
            expect(result).toEqual( {test:222} )
            done()
        })
        expect(testInstance.runMiddle).toHaveBeenCalledWith(testMiddleScopeName,{test:111})
    })



});



