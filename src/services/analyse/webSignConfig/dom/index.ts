import md5 from 'md5'
import * as tool from '../../../../util/tool';
import * as styleServer from './style.js'
import { htmlTabMap } from './tab.js'
import { attrSelectFlag,attrCacheSelect,createXPath,parseXpath } from './xpath.js'



export var initDomEvent = function(){
    var that = this;
    //load style
    styleServer.loadStyle();
    //register click event
    document.addEventListener('click',function(event){that.selectElement(event)},false)
} 





export var createElementNodeInfo = function(element){
    var that = this;
    if(!tool.isElement(element)){
        return false;
    }
    //validate element nodeType
    if(!htmlTabMap(element.nodeName.toLowerCase())){
        console.error('element.nodeType:'+element.nodeName.toLowerCase()+' unsupport select sgin')
        return false;
    }
    //get cache
    if(element.getAttribute(attrCacheSelect)){
        return that.nodeInfoCaches[element.getAttribute(attrCacheSelect)]
    }
    //create
    var xPath = createXPath(element)
    var nodeInfo = {
        nodeType : element.nodeName.toLowerCase(),
        xPath : xPath,
        nodeId : md5(xPath)
    }
    //save cache
    element.setAttribute(attrCacheSelect,nodeInfo.nodeId)
    that.nodeInfoCaches[element.getAttribute(attrCacheSelect)] = nodeInfo 
    return nodeInfo 
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
    var nodeInfo = that.createElementNodeInfo(el)
    //report iframe container select Node
    that.reportNodeSelect(nodeInfo)
}





export var activeElement = function(nodeInfo){
    //parse Xpath get element
    var { xPath } = nodeInfo
    var el = parseXpath(xPath)
    if(!el){
        this.$devError('xPath no find element: xPath:'+xPath)
        return false;
    }
    //active element
    styleServer.addActiveNodeClass(el)
    return el
}



