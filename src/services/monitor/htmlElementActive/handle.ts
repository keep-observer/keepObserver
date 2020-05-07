import { Tools } from '@util/index'
import { elementActiveInfoType } from '../../../types/htmlElementActive'

var CN_CodeReg = /[\u4e00-\u9fa5\w]/ig;
var Clear_CN_CodeReg = /[^\u4e00-\u9fa5\w]/ig;



export const  queryFlagElement = function(el){
    const { elementTrackFlag } = this._config
    if(!Tools.isElement(el) || el.tagName.toLowerCase() === 'body'){
        return false;
    }
    var flag = el.getAttribute(elementTrackFlag)
    return Tools.isExist(flag)?el:(el.parentNode?this.queryFlagElement(el.parentNode):false)
}


export const filterRepeat = function(elementActiveInfo:elementActiveInfoType):boolean{
    if(!this.previouActiveElement){
        this.previouActiveElement = elementActiveInfo
        return true
    }
    const { type,xPath } = elementActiveInfo
    //repeate click
    const preType = this.previouActiveElement.type
    const preXpath = this.previouActiveElement.xPath
    if( type==='click' && type === preType && preXpath===xPath ){
        this.previouActiveElement = elementActiveInfo
        return false
    }
    this.previouActiveElement = elementActiveInfo
    return true;
}


export const createXPath = function(element){
    const { xpathFlag } = this._config;
    //id
    if(element.id){
        return `//*[@id="${element.id}"]`
    }
    //body
    if(element.nodeName.toLowerCase() === 'body'){
        return `/html/${element.nodeName.toLowerCase()}`
    }
    if(!element.parentNode){
        return 'unkonw-parentNode';
    }
    var index = 1;
    var brotherList = element.parentNode.children 
    element.setAttribute(xpathFlag,true)
    for(var i=0,len=brotherList.length; i<len; i++){
        var item = brotherList[i]
        if(item.getAttribute(xpathFlag)){
            element.removeAttribute(xpathFlag)
            return `${this.createXPath(element.parentNode)}/${element.nodeName.toLowerCase()}${index>1?'['+index+']':''}`
        }else if(item.nodeName.toLowerCase() === element.nodeName.toLowerCase()){
            index++
        }
    }
}


export const createTitle = function(el){
    var type = el.tagName.toLowerCase();
    var content = '';
    //获取内容
    if(el.outerText && CN_CodeReg.test(el.outerText)){
        content = el.outerText
        content = content.replace(Clear_CN_CodeReg,'')
    }else if(el.textContent && CN_CodeReg.test(el.textContent)){
        content = el.textContent.replace(Clear_CN_CodeReg,'')
    }else if(el.className !== ''){
        content = '.'+el.className
    }
    content = content.length > 30?(content.substring(0,30)+'...'):content
    return  type+':'+content;
}   


export const createSendMessage = function(type,element):elementActiveInfoType{
    let title = this.createTitle(element);
    let xPath = this.createXPath(element);
    let value = type ==='change'? element.value:'';
    //change input checkbox radio 
    if(element.nodeName.toLowerCase()=== 'input' && (element.type === 'checkbox' || element.type ==='radio') ){
        value = element.checked
    }
    return {
        type,
        title,
        xPath,
        value,
    }
}


export const handleElementEvent = function(event){
    const { target ,type } = event
    const { isGlobalElementActionCatch } = this._config
    var flag = isGlobalElementActionCatch? true: this.queryFlagElement(target)
    if(!flag) return;
    //create message info
    const elementActiveInfo = this.createSendMessage(type,target)
    //filter repeate  click
    if(!this.filterRepeat(elementActiveInfo)) return;
    this.sendMessage({
        type : "monitor",
        typeName : 'htmlElementActive',
        data: elementActiveInfo,
    })
}



