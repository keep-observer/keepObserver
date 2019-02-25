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
export var receiveSignConfigData = function(){
}




//report iframe container select node
export var reportNodeSelect = function(nodeInfo){
    console.log(nodeInfo)
}





export var confirmNodeSelect = function(){
}





