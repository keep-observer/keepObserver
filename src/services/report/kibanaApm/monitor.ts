import { consoleTools,tool } from '@util/index'
import Transaction  from 'elastic-apm-js-core/src/performance-monitoring/transaction'
import {
    reportParams,
} from '../../../types/report'



export const _handleMonitor = function(params:reportParams){
    const _self = this;
    const { type,typeName } = params
    const taskName = `${type}-${typeName}`
    const task = _self.tracerTransaction.createCustomEventTransaction(taskName,typeName)
    switch(params.typeName){
        case 'log':
            return _self._handleMonitorLog(params,task);
        case 'error':
            return consoleTools.warnError('kibanaAPM has a error is monitor of self, is not handle monitor error report')
        default:
            return;
    }
}



export const _handleMonitorLog = function(params:reportParams,task:Transaction){
    const { data } = params
    task.addTags(data)
    task.end();
}



export const _handleMonitorNetwork = function(params:reportParams,task:Transaction){
    const { data } = params
    for(let key in data){
        task.startSpan(data[key],key);
    }
    task.addTags(data)
    task.end();
}
