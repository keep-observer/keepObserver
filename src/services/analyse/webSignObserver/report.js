import * as tool from '../../../tool/index.js';




//注册上报监听
export var addReportListener = function(callback) {
    if (callback) {
        this.eventListener.push(callback)
    }
}





//处理整理数据
export var handleReportData = function(content,load) {
    var reportParams = {};
    var control = {};
    var { typeName } = this
    reportParams.type = "analyse"
    reportParams.typeName = typeName;
    reportParams.location = window.location.href;
    reportParams.environment = window.navigator.userAgent;
    reportParams.data = content;
    reportParams.reportTime = new Date().getTime();
    //option
    control.lazy = false;
    control.isError = false;
    control.isReport = true;
    if(load){
        control.isResponse = true
    }
    return {
        reportParams: reportParams,
        control: control
    }
}






//通知上报
export var noticeReport = function(content) {
    var that = this;
    if (that.eventListener.length === 0) {
        return false;
    }
    //通知上报
    that.eventListener.map(function(item) {
        if (tool.isFunction(item)) {
            var {
                reportParams,
                control
            } = that.handleReportData(content)
            item(reportParams, control);
        }
    })
}
















