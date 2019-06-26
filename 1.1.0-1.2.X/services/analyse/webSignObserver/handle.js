import * as tool from '../../../tool/index.js';



//初始化load
export var loadRequestSginData = function(){
    var reportData = {
        type:'load'
    }
    this.noticeReport(reportData,true/*load*/);
}



//添加观察
export var registerDomAnaylseListener = function(sginList){
    var that = this;
    if(!sginList || tool.isEmptyArray(sginList)){
        return false;
    }
    //foreach add listener
    sginList.forEach(function(item){
        if(tool.isEmptyObject(item)){
            return false;
        }
        var { nodeId } = item
        //is exits
        if(that.elementSginListenerMap[nodeId]){
            return false;
        }
        //add observer listener
        var removeListener = that.addNodeObserverListener(item,that.triggerAcitveReport)
        //save map
        that.elementSginListenerMap[nodeId] = tool.extend({},item,{removeListener:removeListener})
    })
}





//监控dom激活触发
export var triggerAcitveReport = function(event,nodeInfo){
    var el = event.target;
    var nodeName = el.nodeName.toLowerCase();
    var { timeoutDispatchEvent } = this._config
    var { xPath,signEventName,nodeId,nodeType } = nodeInfo
    //如果是a标签类型,并且携带href，那么不跳转,延时跳转
    if(nodeName === 'a' && el.href){
        var url = el.href
        event.preventDefault()
        setTimeout(function(){
            window.location.href = url
        },timeoutDispatchEvent)
    }
    var eventName = event.type && tool.isString(event.type)? event.type:signEventName
    //上报
    this.reportData = {
        type:'catch',
        nodeId: nodeId,
        nodeType: nodeType,
        eventName: eventName
    }
    this.noticeReport(this.reportData);
}




