import { consoleTools,tool } from '@util/index'
import {
    reportParams,
} from '../../../types/report'



export const _getReportContent = function(params:reportParams){
    const _self = this
    const { develop } = _self._config
    //判断数据合法性
    if (!params || !params.type || !params.typeName || !params.data) {
        consoleTools.devLog(develop,'[keepObserver] reportServer receive reportData is not right : typeName and type and data is undefined ')
        return false;
    }
    //处理上报
    debugger
    switch(params.type){
        case 'monitor':
            this._handleMonitor(params)
            break;
        case 'performance':
            this._handlePerformance(params)
            break;
        case 'custome':
            this._handleCustome(params)
            break;
        //以下暂缺，kibanaApm暂时不处理
        case 'analyse':
        case 'undefined':
        default:
            consoleTools.warnError(params.type+'is no handle type')
    }
}





