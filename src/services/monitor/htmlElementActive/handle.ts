import { Tools } from '@util/index'

var CN_CodeReg = /[\u4e00-\u9fa5\w]/ig;
var Clear_CN_CodeReg = /[^\u4e00-\u9fa5\w]/ig;



export const  queryFlagElement = function(el){
    const { elementActionTaslFalg } = this._config
    if(!Tools.isElement(el) || el.tagName.toLowerCase() === 'body'){
        return false;
    }
    var flag = el.getAttribute(elementActionTaslFalg)
    return flag?el:(el.parentNode?queryFlagElement(el.parentNode):false)
}


export const createXPath = function(element){
    const { attrSelectFlag } = this._config;
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
    element.setAttribute(attrSelectFlag,true)
    for(var i=0,len=brotherList.length; i<len; i++){
        var item = brotherList[i]
        if(item.getAttribute(attrSelectFlag)){
            element.removeAttribute(attrSelectFlag)
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
    content = content.length > 30?(content.substring(0,20)+'...'):content
    return  type+':'+content;
}   


export const createSendMessage = function(type,element){
    let title = this.createTitle(element);
    let xPath = this.createXPath(element);
    let value = type ==='change'? element.value:'';
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
    //是否全量捕获
    if(isGlobalElementActionCatch){
        this.sendMessage({
            type : "monitor",
            typeName : 'htmlElementActive',
            data: this.createSendMessage(type,target) ,
        })
        return 
    }
    //标记捕获
    var flag = queryFlagElement(target)
    if(!flag){
        return false;
    }
    this.sendMessage({
        type : "monitor",
        typeName : 'htmlElementActive',
        data: this.createSendMessage(type,target) ,
    })
}


