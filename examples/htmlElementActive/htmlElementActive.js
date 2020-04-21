import KeepObserver from '../../@core/instance'
import KeepObserverHtmlElementActive from '../../@core/monitor/htmlElementActive'



//实例
const ko = new KeepObserver({ develop:true})

/*
    simple
    ------------
 */
//注册一个服务插件
ko.use(KeepObserverHtmlElementActive)


//开始测试
setTimeout(()=>{
    //change
    // var inputText= document.createElement('input')
    // document.body.appendChild(inputText)
    // inputText.value = 'test'
    // inputText.dispatchEvent(new Event('change', { 'bubbles': true }));
    // //click
    // var button = document.createElement('button')
    // document.body.appendChild(button)
    // button.dispatchEvent(new Event('click', { 'bubbles': true }));
    // button.dispatchEvent(new Event('click', { 'bubbles': true }));
    // //checkbox
    // var inputCheckout = document.createElement('input')
    // inputCheckout.setAttribute('type','checkbox')
    // inputCheckout.checked = true
    // document.body.appendChild(inputCheckout)
    // inputCheckout.dispatchEvent(new Event('change', { 'bubbles': true }));
    // //radio
    // var inputRadio = document.createElement('input')
    // inputRadio.setAttribute('type','radio')
    // inputRadio.checked = true
    // document.body.appendChild(inputRadio)
    // inputRadio.dispatchEvent(new Event('change', { 'bubbles': true }));
    // inputRadio.checked = false
    // inputRadio.dispatchEvent(new Event('change', { 'bubbles': true }));
    // //textarea
    // var textarea= document.createElement('textarea')
    // document.body.appendChild(textarea)
    // textarea.value = 'test'
    // textarea.dispatchEvent(new Event('change', { 'bubbles': true }));
    // //a
    // var a= document.createElement('a')
    // document.body.appendChild(a)
    // a.dispatchEvent(new Event('click', { 'bubbles': true }));
    // //div
    // var div= document.createElement('div')
    // document.body.appendChild(div)
    // div.dispatchEvent(new Event('click', { 'bubbles': true }));

    var elementActionTaslFalg = 'KO-tracer-flag'
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
},100)