import * as tool from '../../../util/tool';

import {
    pipeOptons
} from '../../../types/pipe'
import {
    reportParams
} from '../../../types/report'



//处理整理数据
export var handleReportData = function(content) {
    var reportParams:reportParams = {
        type : "monitor",
        typeName : 'log',
        data : content,
        location : window.location.href,
        environment : window.navigator.userAgent,
        reportTime : new Date().getTime(),
    };
    var control:pipeOptons = {};
    //option
    control.lazy = true;
    //如果是clear,清除之前的console.log相关信息
    if (content.type === 'clear') {
        control.preDelete = true;
        control.ignore = true
    }
    //如果是JS运行报错,或者打印错误error合并上报所有内容
    if (content.type === 'jsError' || content.type === 'error') {
        control.lazy = false;
        control.trackExtend = true;
        control.isError = true;
        control.isReport = true;
    }
    return {
        reportParams: reportParams,
        control: control
    }
}


