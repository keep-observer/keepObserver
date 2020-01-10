import { consoleTools,tool } from '@util/index'


import {
    reportParams,
} from '../../../types/report'




/*
    receive the report data
*/
export var _getReportContent = function(params:reportParams) {
    const _self = this
    const { develop } = _self._config
    //判断数据合法性
    if (!params || !params.type || !params.typeName || !params.data) {
        consoleTools.devLog(develop,'[keepObserver] reportServer receive reportData is not right : typeName and type and data is undefined ')
        return false;
    }
    //是否是开发模式需要打印
    if (develop) {
        var log = tool.extend({}, params)
        consoleTools.devLog(develop,'[keepObserver] get' + log.type + 'type:' + log.typeName + " of monitor data")
    }
    //上报
    _self._handleReport(params);
}




