import * as tool from '../../../util/tool'
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
        typeName : 'vue',
        data : content,
        location : window.location.href,
        environment : window.navigator.userAgent,
        reportTime : new Date().getTime(),
    };
    var control:pipeOptons = {};
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




