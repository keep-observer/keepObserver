import * as tool from '../../../../tool/index.js';
import md5 from 'md5'
import * as styleServer from './style.js'



var selectClassNameReg = new RegExp('(\\s|^)'+styleServer.selectClassName+'(\\s|$)')
var activeClassNameReg = new RegExp('(\\s|^)'+styleServer.activeClassName+'(\\s|$)')
//cache
var nodeInfoCache = {};


// return #xxx
var getId = function(el){
    return el.id? `#${el.id}` :false;
}



// return {nodeType}.xxx...
var getClassName = function(el){
    var className = el.className.replace(selectClassNameReg,'')
    className = className.replace(activeClassNameReg,'')
    className = className.replace(/^|\s(?!$)/g,'.')
    return `${el.tagName.toLowerCase()}${className}`
}



//check el is parentEL UniqueClass
var checkParentNodeUniqueClassOrFirst = function(parent,el){
    el.setAttribute('selectNodeId',true)
    var nodeType = el.tagName.toLowerCase()
    for(var i=0,len = parent.children.length ; i<len ; i++){
        var item = parent.children[i]
        var selectSgin =  item.getAttribute('selectNodeId')
        //parent first child
        if(selectSgin && i === 0){
            el.removeAttribute('selectNodeId')
            return true
        }
        //check uniqueClass
        if(!selectSgin && item.className.indexOf(el.className) > -1){
            el.removeAttribute('selectNodeId')
            return false
        }
    }      
    el.removeAttribute('selectNodeId')
    return true;
}




//递归查找路径
var getNodeNthChildIndex =function(parent,el){
    var saveEl = el;
    while(!parent.id && !parent.tagName.toLowerCase() === 'body' && !checkParentNodeUniqueClassOrFirst(parent,el)){
        el = parent
        parent = el.parentNode
    }

    var conent = getId(parent)?getId(parent): (parent.tagName.toLowerCase() === 'body'? 'body':getClassName(parent))
    var childList = document.querySelectorAll(`${conent} > ${saveEl.tagName.toLowerCase()}`)
    console.log(childList,parent,saveEl )   `   `

    debugger
    return {
        count: index,
        parent: parent
    }

}



// return 递归获取path
var getNodePath = function(el){
    var id = getId(el)
    var parent = el.parentNode
    //遇到id结束
    if(id){
        return id
    }
    //body 到根元素结束
    if(el.tagName.toLowerCase() === 'body' ){
        return el.tagName.toLowerCase()
    }
    //父节点唯一class或是第一个元素
    if(checkParentNodeUniqueClassOrFirst(parent,el)){
        return `${getNodePath(parent)} > ${getClassName(el)}`
    }
    //递归查找路径
    var result = getNodeNthChildIndex(parent,el)
    return  `${getNodePath(result.parent)} > ${el.tagName.toLowerCase()}:nth-child(${result.count})`;
}





/*
    优先级: id  > root  body
 */
var createCSSPath = function(element){
    return getNodePath(element)
}




var createElementNodeInfo = function(element){
    if(!tool.isElement(element)){
        return false;
    }    
    var cssPath = createCSSPath(element)
    console.log(cssPath)
}






export default createElementNodeInfo


