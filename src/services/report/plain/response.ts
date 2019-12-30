import { consoleTools,tool } from '@util/index'
import {
    pipeOptons
} from '../../../types/pipe'
import {
    reportParams
} from '../../../types/report'







//处理整理数据
export var handleReportDataResponse = function(type,content,url) {
    var reportParams:reportParams = {
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




















