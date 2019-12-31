import { consoleTools,tool } from '@util/index'


import {
    catchParams,
} from '../../../types/pipe'




//处理整理数据
export var handleReportData = function(content) {
    var reportParams:catchParams = {
        type : "monitor",
        typeName : 'network',
        data : content,
        location : window.location.href,
        environment : window.navigator.userAgent,
        reportTime : new Date().getTime(),
        isError : (content.isTimeout || content.isError) ? true : false,
    };
    return {
        reportParams: reportParams,
    }
}



