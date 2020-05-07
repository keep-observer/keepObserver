import { consoleTools,Tools } from '@util/index'
import Transaction  from 'elastic-apm-js-core/src/performance-monitoring/transaction'
import {
    reportParams,
} from '../../../types/report'


import { networkType } from '../../../types/network'
import { logType } from '../../../types/log'
import { elementActiveInfoType } from '../../../types/htmlElementActive'
import { trackInfoType } from '../../../types/kibanaApmTrack'



export const _handleMonitor = function(params:reportParams<any>){
    const _self = this;
    switch(params.typeName){
        case 'log':
            return _self._handleMonitorLog(params);
        case 'network':
            return _self._handleMonitorNetwork(params)
        case 'htmlElementActive':
            return _self._handleHtmlElementActive(params)
        case 'kibanaApmTrack':
            return _self._handleKibanaApmTrack(params)
        case 'error':
            return consoleTools.warnError('kibanaAPM has a error is monitor of self, is not handle monitor error report')
        default:
            return;
    }
}



export const _handleMonitorLog = function(reportParams:reportParams<logType>){
    const { type='',data='' } = reportParams.data
    const taskName = `${reportParams.type}-${reportParams.typeName}`
    const task = this.tracerTransaction.createCustomEventTransaction(taskName,reportParams.typeName)
    //tag index limt key
    task.addTags({
        type,
        data
    })
    task.end();
}
export const _handleMonitorNetwork = function(reportParams:reportParams<networkType>){
    const {  
        method='',
        statusType='',
        type='',   			            
        url='',    			           
        requestHead=null,     	               
        responseHead=null,                     
        params=null,  			               
        body='',      		            
        status=0,      	               
        startTime=0,     	                
        endTime=0,       	           
        costTime=0,      	            
        response='',			                
        responseType='',   	            
        timeout=0,                      
        errorContent='',                     
        isTimeout=false,                 
        isError=false,
    } = reportParams.data 
    // request no report 
    if(statusType === 'request'){
        return 
    }
    const taskName = `${reportParams.type}-${reportParams.typeName}`
    const task = this.tracerTransaction.createCustomEventTransaction(taskName,reportParams.typeName)                     
    //tag index limt key
    task.addTags({
        method,
        url,
        statusType,
        type,
        requestHead: Tools.objectStringify(requestHead),
        responseHead: Tools.objectStringify(responseHead),
        params: Tools.objectStringify(params),
        body,
        status,
        startTime,
        endTime,
        costTime,
        response,
        responseType,
        timeout,
        errorContent,
        isTimeout,
        isError,
    })
    task.end();
}
export const _handleHtmlElementActive = function(reportParams:reportParams<elementActiveInfoType>){
    const taskName = `${reportParams.type}-${reportParams.typeName}`
    const task = this.tracerTransaction.createCustomEventTransaction(taskName,reportParams.typeName)
    const { 
        type,
        title,
        xPath,
        value,
    } = reportParams.data
    task.addTags({
        type,
        title,
        xPath,
        value,
    })
    task.end();
}
export const _handleKibanaApmTrack = function(reportParams:reportParams<trackInfoType>){
    const taskName = `${reportParams.type}-${reportParams.typeName}`
    const task = this.tracerTransaction.createCustomEventTransaction(taskName,reportParams.typeName)
    const { 
        tags,
        spans,
        type,
        url,
    } = reportParams.data
    task.addTags({
        ...tags,
        type,
        url,
    })
    spans.forEach( span=>{
        task.startSpan(span.name,span.type)
    })
    task.end();
}




