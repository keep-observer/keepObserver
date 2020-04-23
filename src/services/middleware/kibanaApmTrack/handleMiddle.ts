
import { Tools,consoleTools } from '@util/index'

import {
    reportParams,
} from '../../../types/report'
import { networkType } from '../../../types/network'
import { logType } from '../../../types/log'
import { elementActiveInfoType } from '../../../types/htmlElementActive'
import { errorType } from '../../../types/error'



export const _handleReciceReportMessage = function (interrupt:Function,next:Function){return(...params)=>{
    const [ message={} ] = params
    const { type =false,typeName } = message
    //valid message
    if(!type || !Tools.isString(type) || type !== 'monitor'){
        next(...params)
        return
    }
    //handle message
    switch(typeName){
        case 'log':
            this._handleTrackLog(message)
            break;
        case 'network':
            this._handleTrackNetwork(message)
            break;
        case 'htmlElementActive':
            this._handleTrackHtmlElementActive(message)
            break;
        case 'error':
            this._handleTrackError(message)
            break;
        default:
            consoleTools.warnError(`is no support track typeName:${typeName}`)
    }
    next(...params)
}}



export const _handleTrackLog = function(params:reportParams<logType>){ 
    consoleTools.log(params)
    //判断是否是error类型
}

export const _handleTrackNetwork = function(params:reportParams<networkType>){ 
    consoleTools.log(params)
    //判断是否是请求出错
}

export const _handleTrackHtmlElementActive = function(params:reportParams<elementActiveInfoType>){ 
    consoleTools.log(params)
}

export const _handleTrackError = function(params:reportParams<errorType>){ 
    consoleTools.log(params)
}


