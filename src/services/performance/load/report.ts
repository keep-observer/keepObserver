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
        type : "performance",
        typeName : 'load',
        data : content,
        location : window.location.href,
        environment : window.navigator.userAgent,
        reportTime : new Date().getTime(),
    };
    var control:pipeOptons = {};
    //系统信息和首屏性能立即上报
    control.lazy = false;
    control.isReport = true;
    return {
        reportParams: reportParams,
        control: control
    }
}




