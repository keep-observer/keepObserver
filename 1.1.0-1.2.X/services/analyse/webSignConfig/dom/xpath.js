import * as tool from '../../../../tool/index.js';



export var attrSelectFlag = 'keepObserverSelecteElementSgin'
export var attrCacheSelect = 'keepObserverCacheSelecteElementSgin'



export  var createXPath = function(element){
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




// parse xpath
// params = xpath (string)
// return = element
export var parseXpath = function(xPath){
    var targetNode = false;
    var contextNode = false; 
    var step = 1;
    var errorMax = 1000;
    var idReg = /^\/\/\*\[@id=(?:'|"){1}(.*)+(?:'|"){1}\]/
    var pathStartReg = /^\/html\/body\//
    var nodePathReg = /([a-z\-]+)+(?:\[(\d+)+\])?\//
    var pathEndReg = /([a-z\-]+)+(?:\[(\d+)+\])?$/
    var subStringNext = function(str,context){
        var len = str.length
        return context.substring(len)
    }
    //validate
    if(!xPath || !tool.isString(xPath) ){
        return false;
    }
    //id start
    if(idReg.test(xPath)){
        var content = xPath.match(idReg)
        var str = content[0]
        var id = content[1]
        xPath = subStringNext(str,xPath)
        //get element
        targetNode = document.querySelector('#'+id)
        contextNode = targetNode 
    }
    //html start
    if(pathStartReg.test(xPath)){
        var content = xPath.match(pathStartReg)
        var str = content[0]
        xPath = subStringNext(str,xPath)
        //get element
        targetNode = document.body
        contextNode = targetNode 
    }
    //get target element
    while( contextNode && 
            (nodePathReg.test(xPath) || pathEndReg.test(xPath))  && 
                step < errorMax 
    ){
        step++;
        targetNode = false;
        var parseResult = xPath.match(nodePathReg)
        parseResult =  parseResult?parseResult:xPath.match(pathEndReg)
        // path info
        var str = parseResult[0]
        var nodeType = parseResult[1]
        var index = parseResult[2]?parseInt(parseResult[2]):1
        //query target element
        var count = 1;
        var children = tool.toArray(contextNode.children)
        children.forEach(function(item){
            if(targetNode){
                return false;
            }
            //query
            var itemType = item.nodeName.toLowerCase()
            if(itemType === nodeType && index === count){
                targetNode = item
            }else if(itemType === nodeType){
                count++
            }
        })
        contextNode = targetNode
        //next
        xPath = subStringNext(str,xPath)
    }

    return targetNode
}






