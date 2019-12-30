import { consoleTools,tool } from '@util/index'
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
        typeName : 'network',
        data : content,
        location : window.location.href,
        environment : window.navigator.userAgent,
        reportTime : new Date().getTime(),
    };
    var control:pipeOptons = {};
    //option
    control.lazy = true;
    //是否请求出错
    if (content.isError) {
        control = {};
        control.lazy = false;
        control.isReport = true;
        //是否是超时请求,超时请求不合并上报
        control.trackExtend = content.isTimeout ? false : true;
        control.isError = content.isTimeout ? false : true;
    }
    return {
        reportParams: reportParams,
        control: control
    }
}



