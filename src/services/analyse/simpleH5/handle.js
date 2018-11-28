import * as tool from '../../../tool/index.js';
import * as assist from './tool.js'
import { RecordKey,exitBackstageFlag } from './constant.js'



var windowRegisterEventDestroy = false;



//开始
export var begine = function(config){
    var { analyseDomList } = config
    //receive start Time
    this.startTime  = new Date().getTime();
    //handle dom list
    if(analyseDomList || tool.isArray(analyseDomList)){
        this.analyseDomList = this.handleAnalyseDomList(analyseDomList)
    }else{
        this.$devWarn('[keepObserver] analyseServer simpleH5 is analyse dom list is no exist or is no arrayType')
    }
    // register window exit or backState event
    var that = this;
    windowRegisterEventDestroy = this.registerBrowserEndEvent(function(){
        //restReportData
        that.resetReportData();
        //handle report data
        that.reportData = that.createReportData()
        that.noticeReport(that.reportData)
        that.destroy();
    })   
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
    if(windowRegisterEventDestroy && tool.isFunction(windowRegisterEventDestroy)){
        windowRegisterEventDestroy()
        windowRegisterEventDestroy = false;
    }
    this.analyseDomList = {};
    this.startTime = false;
}






//创建上报数据
export var createReportData = function(){
    var that = this;
    var endTime = new Date().getTime();
    var reportData = this.reportData
    //handle report date
    if(!reportData['id']){
        reportData.id = this.uniqueId
    }
    reportData.startTime = this.startTime;
    reportData.useTime = endTime - this.startTime;
    if(!reportData['repeatCount']){
        reportData.repeatCount = 1;
    }
    if(!tool.isObject(reportData['useActives'])){
        reportData['useActives'] = {}
    }
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








//修正上报对象
export var resetReportData = function(){
    //尝试读取缓存数据
    var saveRecord = tool.getStorage(RecordKey)
    var backStageFlag = tool.getSessionStorage(exitBackstageFlag)
    if(saveRecord){
        this.reportData  = tool.extend(this.reportData,saveRecord)
        if(!backStageFlag){
            this.reportData.repeatCount += 1;
        }
    }
}











