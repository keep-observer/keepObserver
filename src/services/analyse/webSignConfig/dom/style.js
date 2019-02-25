
import * as tool from '../../../../tool/index.js';

export var selectClassName = 'keepObserver-webSgin-SelectNode'
export var activeClassName = 'keepObserver-webSgin-ActiveNode'

var styleContent = `
    .${selectClassName}{
        box-sizing: border-box !important;
        border: 1px dashed #ff3300 !important;
        background-color: rgba(255,165,0,0.8) !important;
    }
    .${activeClassName}{
        box-sizing: border-box !important;
        border: 1px dashed #ff3300 !important;
        background-color: rgba(255,51,0,0.8) !important;
    }
`



var hasClass = function(el,Class){
    return el.className.match(new RegExp('(\\s|^)'+Class+'(\\s|$)'));
};
var addClass = function(el,className){
    if(!tool.isElement(el) || !tool.isString(className) || tool.isSVGElement(el) ){
        return false;
    }
    if(hasClass(el,className) && el.className.match){
        return false;
    }
    el.className += ' '+className;
}
var removeClass = function(el,className){
    if(!tool.isElement(el) || !tool.isString(className) || tool.isSVGElement(el) ){
        return false;
    }
    if(!hasClass(el,className)){
        return false;
    }
    el.className = el.className.replace(new RegExp('(\\s|^)'+className+'(\\s|$)'),'')
}




export var loadStyle = function(){
    var style = document.createElement('style')
    var head = document.querySelector('head')
    style.innerHTML = styleContent
    head.appendChild(style)
}




export var addSelelctNodeClass = function(el){
    return addClass(el,selectClassName)
}

export var removeSelelctNodeClass = function(el){
    return removeClass(el,selectClassName)
}

