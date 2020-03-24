
import { KeepObserverMiddleWare } from '../../@util/index'


describe("KeepObserverMiddleWare service",function(){
    //init service
    var middle
    var testMiddleScopeName= 'testMiddle'
    beforeEach(function () {
        //config
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000
        middle = new KeepObserverMiddleWare({develop:true})
    })



    it("init instance",function(){
        expect(middle._develop).toEqual(true)
        expect(middle._middles).toEqual({})
        expect(middle._runMiddleBuff).toEqual({})
    })


    it('register middle sucess and target sucess',function(done){
        var middleHandleFn_1 = (interrupt,next)=>(...params)=>{
            expect(...params).toEqual( {test:111} )
            next({test:222})
        }
        //register
        middle.use(testMiddleScopeName,middleHandleFn_1)
        expect(middle._middles[testMiddleScopeName]).toBeDefined()
        expect(middle._middles[testMiddleScopeName]).toEqual( [middleHandleFn_1] )
        //targer
        middle.run(testMiddleScopeName,{test:111}).then((result)=>{
            expect(result).toEqual( {test:222} )
            done()
        })
    })
    
    
    it('middles next change params value',function(done){
        var middle_1 = (interrupt,next)=>(...params)=>{
            const [ value ] = params
            expect(value).toEqual( {test:'no_1'} )
            next({
                ...value,
                addParams:'test'
            })
        }
        var middle_2 = (interrupt,next)=>(...params)=>{
            expect(...params).toEqual( {test:'no_1',addParams:'test'} )
            next(...params)
        }
        var middleName = 'testChangeMiddleParams'
        //register
        middle.use(middleName,middle_2)
        middle.use(middleName,middle_1)
        expect(middle._middles[middleName]).toEqual( [middle_1,middle_2] )
        //targer
        middle.run(middleName,{test:'no_1'}).then((result)=>{
            expect(result).toEqual( {test:'no_1',addParams:'test'} )
            done()
        })
    })


    it('middles interrupt apply flow',function(done){
        var middleInterrupt = (interrupt,next)=>(...params)=>{
            var [ value ] = params
            expect(value).toEqual( [1,2,3] )
            value.push(4)
            value.push(5)
            value.push(6)
            interrupt(value)
        }
        var middleInterruptFail = (interrupt,next)=>(...params)=>{
            fail('interrupt fail')
            done()
        }
        var middleInterruptName = 'testInterrupt'
        //register
        middle.use(middleInterruptName,middleInterruptFail)
        middle.use(middleInterruptName,middleInterrupt)
        expect(middle._middles[middleInterruptName]).toEqual( [middleInterrupt,middleInterruptFail] )
        //targer
        middle.run(middleInterruptName,[1,2,3]).then((result)=>{
            expect(result).toEqual( [1,2,3,4,5,6] )
            done()
        })
    })


});



