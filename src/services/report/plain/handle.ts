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
    //上报
    _self._handleReport(params);
}




