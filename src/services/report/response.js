import * as tool from '../../tool/index.js';




//注册上报监听
export var addReportListener = function(callback) {
    if (callback) {
        this.eventListener.push(callback)
    }
}





//处理整理数据
export var handleReportDataResponse = function(type,content,url) {
    var reportParams = {};
    var control = {};
    reportParams.type = "response"
    reportParams.typeName = type;
    reportParams.location = url;
    reportParams.environment = null;
    reportParams.data = content;
    reportParams.reportTime = new Date().getTime();
    //option
    return {
        reportParams: reportParams,
        control: control
    }
}






//通知上报
export var noticeResponse = function(type,content,url) {
    var that = this;
    if (that.eventListener.length === 0) {
        return false;
    }
    //通知消息队列
    that.eventListener.map(function(item) {
        if (tool.isFunction(item)) {
            var {
                reportParams,
                control
            } = that.handleReportDataResponse(type,content,url)
            item(reportParams, control);
        }
    })
}
















