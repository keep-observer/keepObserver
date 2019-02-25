import * as tool from '../../../../tool/index.js';
import { htmlTabMap } from './tab.js'
import md5 from 'md5'


//cache
var nodeInfoCache = {};
var attrSelectFlag = 'keepObserverSelecteElementSgin'
var attrCacheSelect = 'keepObserverCacheSelecteElementSgin'


var createXPath = function(element){
    //id
    if(element.id){
        return `//*[@id="${element.id}"]`
    }
    //body
    if(element.nodeName.toLowerCase() === 'body'){
        return `/html/${element.nodeName.toLowerCase()}`
    }
    var index = 1;
    var brotherList = element.parentNode.children 
    element.setAttribute(attrSelectFlag,true)
    for(var i=0,len=brotherList.length; i<len; i++){
        var item = brotherList[i]
        if(item.getAttribute(attrSelectFlag)){
            element.removeAttribute(attrSelectFlag)
            return `${createXPath(element.parentNode)}/${element.nodeName.toLowerCase()}${index>1?'['+index+']':''}`
        }else if(item.nodeName.toLowerCase() === element.nodeName.toLowerCase()){
            index++
        }
    }
}




var createElementNodeInfo = function(element){
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
        return nodeInfoCache[element.getAttribute(attrCacheSelect)]
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
    nodeInfoCache[element.getAttribute(attrCacheSelect)] = nodeInfo 
    return nodeInfo 
}






export default createElementNodeInfo


