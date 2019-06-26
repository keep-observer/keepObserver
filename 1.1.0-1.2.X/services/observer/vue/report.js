import * as tool from '../../../tool/index.js';



//注册上报监听
export var addReportListener = function(callback) {
    if (callback) {
        this.eventListener.push(callback)
    }
}




//处理整理数据
export var handleReportData = function(content) {
    var reportParams = {};
    var control = {};
    reportParams.type = "monitor"
    reportParams.typeName = 'vue';
    reportParams.location = window.location.href;
    reportParams.environment = window.navigator.userAgent;
    reportParams.data = content;
    reportParams.reportTime = new Date().getTime();
    //option
    control.lazy = true;
    if (content.isError) {
        control.lazy = false;
        control.baseExtend = true;
        control.isError = true;
        control.isReport = true;
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