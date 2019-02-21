import * as tool from '../../../tool/index.js';


export var registerMessage = function(){
    var that = this;
    var { correspondWaitTimeout } = that._config
    //proxy
    that.proxyMessageHandleEvent  = function(event){
        that.handleMessage(event)
    }
    //start listener
    window.addEventListener('message',that.proxyMessageHandleEvent,false)
    //concat timeout
    setTimeout(function(){
        if(!that.correspondFlag){
            that.$devError('keepObserver KeepObserverWebSignConfig  iframe correspond Connection timeout')
            that.removeMessage()
        }
    },correspondWaitTimeout)
}




export var removeMessage = function(){
    this.correspondFlag = false;
    this.sourceTarget = false;
    this.sourceOrigin = false;
    window.removeEventListener('message', this.proxyMessageHandleEvent)
}




export var handleMessage = function(event){
    var that = this
    var origin = event.origin || event.originalEvent.origin; 
    var data = event.data
    var source = event.source
    //validate
    if(!that.checkOrigin(origin)){
        that.$devError('keepObserver KeepObserverWebSignConfig  iframe message origin is error')
        that.removeMessage()
    }
    if(!tool.isExist(data) || tool.isEmptyObject(data) || !data.type){
        that.$devError('keepObserver KeepObserverWebSignConfig  iframe correspond receive is error')
        that.removeMessage()
    }
    if(!that.correspondFlag){   
        that.correspondFlag = true;
        that.sourceTarget = source
        that.sourceOrigin = origin
    }
    //flow work
    switch(data.type){
        case 'requestConfig':
            that.confirmConcatRequestSginData();
            break;
        case 'sendSignData':
            that.receiveSignConfigData(data.payload)
            break;
        case 'confirmNodeSgin':
            that.confirmNodeSelect(data.payload)
            break;
        default:
            that.$devError('keepObserver KeepObserverWebSignConfig  iframe correspond receive is error : data.type is error type')
            that.removeMessage()
    }
}





export var sendMessage = function(data){
    if(!data || tool.isEmptyObject(data) || !data.type){
        return false;
    }
    this.sourceTarget.postMessage(data,this.sourceOrigin)
}







