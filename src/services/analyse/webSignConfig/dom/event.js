import * as tool from '../../../../tool/index.js';
import * as styleServer from './style.js'
import createElementNodeInfo from './nodeInfo.js'



export var initDomEvent = function(){
    var that = this;
    //load style
    styleServer.loadStyle();
    //register click event
    document.addEventListener('click',function(event){that.selectElement(event)},false)
} 




export var selectElement = function(event){
    var that = this;
    var el = event.target
    if(that.preventDefault){
        event.preventDefault()
    }
    //sgin element
    if(that.selectDom){
        styleServer.removeSelelctNodeClass(that.selectDom)
    }
    styleServer.addSelelctNodeClass(el)
    that.selectDom = el
    //create node info
    var nodeInfo = createElementNodeInfo(el)
}







