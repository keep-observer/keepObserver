import * as tool from '../../../util/tool';

import {
    pipeOptons
} from '../../../types/pipe'
import {
    reportType
} from '../../../types/report'




//注册上报监听
export var addReportListener = function(callback) {
    if (callback) {
        this.eventListener.push(callback)
    }
}




//处理整理数据
export var handleReportData = function(content,load) {
    var { typeName } = this
    var reportParams:reportType = {
        type : "analyse",
        typeName : typeName,
        data : content,
        location : window.location.href,
        environment : window.navigator.userAgent,
        reportTime : new Date().getTime(),
    };
    var control:pipeOptons = {};
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
export var noticeReport = function(content,load) {
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
            } = that.handleReportData(content,load)
            item(reportParams, control);
        }
    })
}
















