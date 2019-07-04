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
export var handleReportData = function(content) {
    var reportParams:reportType = {
        type : "analyse",
        typeName : 'simpleH5',
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
















