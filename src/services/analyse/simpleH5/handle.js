import * as tool from '../../../tool/index.js';
import * as assist from './tool.js'
import { RecordKey,exitBackstageFlag } from './constant.js'





//开始
export var begine = function(config){
    var that = this;
    var { analyseDomList } = config
    //handle dom list
    if(analyseDomList || tool.isArray(analyseDomList)){
        that.analyseDomList = that.handleAnalyseDomList(analyseDomList,function(event){
            that.triggerAcitveReport(event);
        })
    }else{
        that.$devWarn('[keepObserver] analyseServer simpleH5 is analyse dom list is no exist or is no arrayType')
    } 
    //reset report data and init report
    that.triggerInitReport();
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
    this.analyseDomList = {};
}





//监控dom激活触发
export var triggerAcitveReport = function(event){
    var event = event || window.event;
    var el = event.target;
    var nodeName = el.nodeName.toLowerCase();
    //如果是a标签类型,并且携带href，那么不跳转,延时跳转
    if(nodeName === 'a' && el.href){
        var url = el.href
        event.preventDefault()
        setTimeout(function(){
            window.location.href = url
        },100)
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
    if(saveRecord){
        this.reportData  = tool.extend(this.reportData,saveRecord)
    }
    if(!backStageFlag){
        this.reportData.repeatCount += 1;
        this.reportData = this.createReportData();
        this.noticeReport(this.reportData);
        tool.setSessionStorage(exitBackstageFlag,true);
    }
}






//创建上报数据
export var createReportData = function(){
    var that = this;
    var reportData = this.reportData
    // handle dom observer info
    if(!tool.isEmptyObject(this.analyseDomList)){
        for(var key in this.analyseDomList){
            var item = this.analyseDomList[key]
            // no exist
            if(!reportData['useActives'][key]){
                reportData['useActives'][key] = {
                    activeCount: item.getActiveStauts()? 1: 0,
                }
            }else if( tool.isExist( reportData['useActives'][key].activeCount) ){
                if(item.getActiveStauts()){
                    reportData['useActives'][key].activeCount += 1;
                }
            }else{
                reportData['useActives'][key].activeCount = 0
            }
        }
    }
    //save storage
    tool.setStorage(RecordKey,reportData)
    return reportData;
}
















