import { consoleTools,tool } from '@util/index'
import { RecordKey,exitBackstageFlag,RecordDataKey } from './constant'
import * as assist from './tool'


var  nowDate = assist.createDataRecord()



//开始
export var begine = function(config){
    var _self = this;
    var { analyseDomList } = config
    //handle dom list
    if(analyseDomList || tool.isArray(analyseDomList)){
        _self.analyseDomList = _self.handleAnalyseDomList(analyseDomList,function(event){
            _self.triggerAcitveReport(event);
        })
    }else{
        _self.$devWarn('[keepObserver] analyseServer simpleH5 is analyse dom list is no exist or is no arrayType')
    } 
    //reset report data and init report
    _self.triggerInitReport();
}






//销毁
export var destroy = function(){
    if( !tool.isEmptyObject(this.analyseDomList) ){
        for(var key in this.analyseDomList){
            var item = this.analyseDomList[key]
            if(item.destroyEvent && tool.isFunction(item.destroyEvent)){
                item.destroyEvent();
            }
        }
    }
    this._recoverEventTarget()
    this.analyseDomList = {};
    // 这里清除停止监听在恢复的时候会可能导致触发两次
    this._domListener = {};
}






//监控dom激活触发
export var triggerAcitveReport = function(event){
    var event = event || window.event;
    var el = event.target;
    var nodeName = el.nodeName.toLowerCase();
    var timeoutDispatchEvent = this._config.timeoutDispatchEvent
    //如果是a标签类型,并且携带href，那么不跳转,延时跳转
    if(nodeName === 'a' && el.href){
        var url = el.href
        event.preventDefault()
        setTimeout(function(){
            window.location.href = url
        },timeoutDispatchEvent)
    }
    //上报
    this.reportData = this.createReportData();
    this.noticeReport(this.reportData);
}





//初始化上报
export var triggerInitReport = function(){
    //尝试读取缓存数据
    var saveRecord = tool.getStorage(RecordKey)
    var backStageFlag = tool.getSessionStorage(exitBackstageFlag)
    var dateRecord = tool.getStorage(RecordDataKey)
    if(saveRecord){
        this.reportData  = tool.extend(this.reportData,saveRecord)
    }
    if(!backStageFlag){
        this.reportData.repeatCount += 1;
        this.reportData.repeatCountAll += 1;
        this.reportData = this.createReportData();
        this.noticeReport(this.reportData);
        tool.setSessionStorage(exitBackstageFlag,true);
    }
    // update now day data
    if(!dateRecord){
        tool.setStorage(RecordDataKey,nowDate)
    }else if(parseInt(dateRecord) < nowDate){
        this.reportData.repeatCount = 0;
        if( !tool.isEmptyObject(this.reportData.useActives) ){
            for(var key in this.reportData.useActives){
                this.reportData.useActives[key].activeCount = 0;
            }
        }
        tool.setStorage(RecordDataKey,nowDate)
    }
}







//创建上报数据
export var createReportData = function(){
    var _self = this;
    var reportData = this.reportData
    // handle dom observer info
    if(!tool.isEmptyObject(this.analyseDomList)){
        for(var key in this.analyseDomList){
            var item = this.analyseDomList[key]
            // no exist
            if(!reportData.useActives[key]){
                reportData.useActives[key] = {
                    activeCount: item.getActiveStauts()? 1: 0,
                    activeCountAll: item.getActiveStauts()? 1: 0,
                }
            }else if( tool.isExist( reportData.useActives[key].activeCount) ){
                if(item.getActiveStauts()){
                    reportData.useActives[key].activeCount += 1;
                    reportData.useActives[key].activeCountAll += 1;
                }
            }else{
                reportData.useActives[key].activeCount = 0
                reportData.useActives[key].activeCountAll = 0;
            }
        }
    }
    //save storage
    tool.setStorage(RecordKey,reportData)
    return reportData;
}













