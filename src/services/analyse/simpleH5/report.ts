import * as tool from '../../../util/tool';

import {
    pipeOptons
} from '../../../types/pipe'
import {
    reportParams,
} from '../../../types/report'





//处理整理数据
export var handleReportData = function(content) {
    var reportParams:reportParams = {
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


















