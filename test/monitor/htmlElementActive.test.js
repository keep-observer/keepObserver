
import  KeepObserver  from '../../@core/instance'
import  KeepObserverHtmlElementActive from '../../@core/monitor/htmlElementActive'
import  { KeepObserverPublic,KeepObserverMiddleWare }  from '@util/index'



describe("KeepObserverHtmlElementActive service",function(){
    //init service
    var testInstance = null
    beforeEach(function () {
        //config
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000
        //init service
        KeepObserverMiddleWare.publicMiddles = {}
        KeepObserverPublic.extendReportParams = {}
        testInstance = new KeepObserver({
            runMiddleTimeOut: 3000,
            isCheckRepeatUse:false,
            projectName: 'test',
            projectVersion: 'test-version'
        })
    })


    it('KeepObserverHtmlElementActive api',function(){
        var serviceInstance =  new KeepObserverHtmlElementActive()
        spyOn(serviceInstance,'stopObserver').and.callThrough();
        spyOn(serviceInstance,'startObserver').and.callThrough();
        testInstance.use(serviceInstance)
        testInstance.apis('htmlElementActiveStart')
        testInstance.apis('htmlElementActiveStop')
        expect(serviceInstance.startObserver).toHaveBeenCalled()
        expect(serviceInstance.stopObserver).toHaveBeenCalled()
        serviceInstance = null
    })


    it('KeepObserverHtmlElementActive send Dom active Message -config isGlobalElementActionCatch:true',function(done){
        var receiveCount = 0;
        var serviceInstance =  new KeepObserverHtmlElementActive({isGlobalElementActionCatch:true})
        class ConsumerService{
            getMessage(message){
                expect(message.type).toBe(`monitor`)
                expect(message.typeName).toBe(`htmlElementActive`)
                expect(message.testAdd).toBe(1)
                switch(++receiveCount){
                    case 1:
                        expect(message.data).toEqual({
                            type: "change",
                            title: "input:",
                            xPath: "/html/body/input",
                            value: "test",
                        })
                        break;
                    case 2:
                        expect(message.data).toEqual({
                            type: "click",
                            title: "button:",
                            xPath: "/html/body/button",
                            value: "",
                        })
                        break;
                    case 3:
                        expect(message.data).toEqual({
                            type: "change",
                            title: "input:",
                            xPath: "/html/body/input[2]",
                            value: true,
                        })
                        break;
                    case 4:
                        expect(message.data).toEqual({
                            type: "change",
                            title: "input:",
                            xPath: "/html/body/input[3]",
                            value: true,
                        })
                        break;
                    case 5:
                        expect(message.data).toEqual({
                            type: "change",
                            title: "input:",
                            xPath: "/html/body/input[3]",
                            value: false,
                        })
                        break;
                    case 6:
                        expect(message.data).toEqual({
                            type: "change",
                            title: "textarea:",
                            xPath: "/html/body/textarea",
                            value: "test"
                        })
                        break;
                    case 7:
                        expect(message.data).toEqual({
                            type: "click",
                            title: "a:",
                            xPath: "/html/body/a",
                            value: ""
                        })
                        break;
                    case 8:
                        expect(message.data).toEqual({
                            type: "click",
                            title: "div:",
                            xPath: "/html/body/div",
                            value: ""
                        })
                        setTimeout(()=>{
                            testInstance.apis('htmlElementActiveStop')
                            serviceInstance = null
                            done()
                        },200)
                        break;
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
        testInstance.use(serviceInstance)
        testInstance.use(ConsumerService)
        //start
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
        },200)
    })


    it('KeepObserverHtmlElementActive send Dom active Message -config isGlobalElementActionCatch:false',function(done){
        var receiveCount = 0;
        var elementActionTaslFalg = 'KO-tracer-flag'
        var serviceInstance =  new KeepObserverHtmlElementActive()
        class ConsumerService{
            getMessage(message){
                expect(message.type).toBe(`monitor`)
                expect(message.typeName).toBe(`htmlElementActive`)
                expect(message.testAdd).toBe(1)
                switch(++receiveCount){
                    case 1:
                        expect(message.data).toEqual({
                            type: "change",
                            title: "input:",
                            xPath: "/html/body/input",
                            value: "test",
                        })
                        break;
                    case 2:
                        expect(message.data).toEqual({
                            type: "change",
                            title: "input:",
                            xPath: "/html/body/input[2]",
                            value: true,
                        })
                        break;
                    case 3:
                        expect(message.data).toEqual({
                            type: "change",
                            title: "textarea:",
                            xPath: "/html/body/textarea",
                            value: "test"
                        })
                        break;
                    case 4:
                        expect(message.data).toEqual({
                            type: "click",
                            title: "div:",
                            xPath: "/html/body/div",
                            value: ""
                        })
                        setTimeout(()=>{
                            testInstance.apis('htmlElementActiveStop')
                            done()
                        },200)
                        break;
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
        testInstance.use(serviceInstance)
        testInstance.use(ConsumerService)
        //start
        setTimeout(()=>{
            var inputText= document.createElement('input')
            document.body.appendChild(inputText)
            inputText.setAttribute(elementActionTaslFalg,'')
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
            inputCheckout.setAttribute(elementActionTaslFalg,'')
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
            textarea.setAttribute(elementActionTaslFalg,'')
            textarea.value = 'test'
            textarea.dispatchEvent(new Event('change', { 'bubbles': true }));
            //a
            var a= document.createElement('a')
            document.body.appendChild(a)
            a.dispatchEvent(new Event('click', { 'bubbles': true }));
            //div
            var div= document.createElement('div')
            document.body.appendChild(div)
            div.setAttribute(elementActionTaslFalg,'')
            div.dispatchEvent(new Event('click', { 'bubbles': true }));
            //remove
            document.body.removeChild(inputText)
            document.body.removeChild(button)
            document.body.removeChild(inputCheckout)
            document.body.removeChild(inputRadio)
            document.body.removeChild(textarea)
            document.body.removeChild(a)
            document.body.removeChild(div)
        },200)
    })
    
    
});


