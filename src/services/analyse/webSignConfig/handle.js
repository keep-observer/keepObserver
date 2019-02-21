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





//receive sign config data
export var receiveSignConfigData = function(){
}





export var reportNodeSelect = function(){
}





export var confirmNodeSelect = function(){
}





