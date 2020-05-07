import { consoleTools,tool } from '@util/index'


import {
    reportParams,
} from '../../../types/report'
import {
    errorType
} from '../../../types/error'



export const _getReportContent = function(params:reportParams<any>){
    const _self = this
    //判断数据合法性
    if (!params || !params.type || !params.typeName || !params.data) {
        consoleTools.warnError('reportServer receive reportData is not right : typeName and type and data is undefined ')
        return false;
    }
    //处理上报
    switch(params.type){
        case 'monitor':
            this._handleMonitor(params)
            break;
        case 'custome':
            this._handleCustome(params)
            break;
        //以下暂缺，kibanaApm暂时不处理
        case 'analyse':
        case 'performance':
        case 'undefined':
        default:
            consoleTools.warnError(params.type+'is no handle type')
    }
}


export const _handleCatchError = function(){
    var _self = this
    this.tracerTransaction.watchCatchError((errorMessage:errorType)=>{
        //通知发送错误
        _self.sendMessage({
            type : "monitor",
            typeName : 'error',
            data: errorMessage,
        })
    })
}




