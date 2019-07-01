import * as tool from '../../util/tool';
import {
    pipeOptons
} from '../../types/pipe'
import {
    reportType
} from '../../types/report'





//注册上报监听
export var addReportListener = function(callback) {
    if (callback) {
        this.eventListener.push(callback)
    }
}





//处理整理数据
export var handleReportDataResponse = function(type,content,url) {
    var reportParams:reportType = {
        type : "response",
        typeName : type,
        data : content,
        location : url,
        environment : window.navigator.userAgent,
        reportTime : new Date().getTime(),
    };
    var control:pipeOptons = {};
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
















