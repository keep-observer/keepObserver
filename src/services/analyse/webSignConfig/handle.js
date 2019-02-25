import * as tool from '../../../tool/index.js';




//confirmConfig and requestSignData
export var confirmConcatRequestSginData = function(){
    var that = this;
    that.sendMessage({type:'confirmConfig', payload:null})
    //延时100ms发送请求配置
    setTimeout(function(){
        that.sendMessage({type:'requestSignData', payload:null})
    },100)
}  



// set element event
export var handleElementEventPreventDefault = function(payload){
    if(tool.isBoolean(payload)){
        this.preventDefault = payload
        this.sendMessage({type:'confirmConfig', payload:this.preventDefault})
    }
}



//receive sign config data
export var receiveSignConfigData = function(payload){
    var that = this;
    if(tool.isEmptyArray(payload)){
        return false;
    }
    //active dom
    that.activeDomList = payload
    //foreach el
    var nodeIdList = []
    that.activeDomList.forEach(function(item){
        if(!item.nodeId || !item.xPath){
            return false;
        }
        nodeIdList.push(item.nodeId)
        that.activeElement(item)
    })
    //confirm
    that.sendMessage({type:'confirmConfig', payload:nodeIdList})
}




//report iframe container select node
export var reportNodeSelect = function(nodeInfo){
    this.sendMessage({type:'selectNodeSgin', payload:nodeInfo})
}



//save active element sgin
export var confirmNodeSelect = function(nodeId){
    if(!nodeId || !tool.isString(nodeId)){
        return false;
    }
    var nodeInfo = this.nodeInfoCaches[nodeId]
    if(!nodeInfo){
        return false;
    }
    this.activeElement(nodeInfo)
    this.activeDomList.push(nodeInfo)
    this.sendMessage({type:'confirmConfig', payload:nodeId})
}





