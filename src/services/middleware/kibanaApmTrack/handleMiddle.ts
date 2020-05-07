
import { Tools,consoleTools } from '@util/index'

import { reportParams} from '../../../types/report'
import { networkType } from '../../../types/network'
import { logType } from '../../../types/log'
import { elementActiveInfoType } from '../../../types/htmlElementActive'
import { errorType } from '../../../types/error'



export const _handleReciceReportMessage = function (interrupt:Function,next:Function){return(...params)=>{
    const { isInterruptNormal } = this._config
    const [ message={} ] = params
    const { type =false,typeName } = message
    //中间件执行中会屏蔽发起的sendMessage
    this.isSendlock = true;
    //valid message
    if(this.isCancelTrack || !type || !Tools.isString(type) || type !== 'monitor'){
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
        case 'kibanaApmTrack': return next(...params);
        default:
            consoleTools.warnError(`is no support track typeName:${typeName}`)
            return next(...params)
    }
    return isInterruptNormal?interrupt(false):next(...params)
}}
export const _handleTrackLog = function(params:reportParams<logType>){ 
    this.trackList.push(params)
    //判断是否是error类型
    const { type } = params.data
    if(type === 'error'){
        this.isWaitSend = 'pageError'
        this._handleSendTrackMessage()
    }
}
export const _handleTrackNetwork = function(params:reportParams<networkType>){ 
    this.trackList.push(params)
    //判断是否是请求出错
    const { isError } = params.data
    if(isError){
        this.isWaitSend = 'pageError'
        this._handleSendTrackMessage()
    }
}
export const _handleTrackHtmlElementActive = function(params:reportParams<elementActiveInfoType>){ 
    this.trackList.push(params)
}
export const _handleTrackError = function(params:reportParams<errorType>){ 
    this.trackList.push(params)
    this.isWaitSend = 'pageError'
    this._handleSendTrackMessage()
}



//send 
export const _handleSendTrackMessage = function(){
    let reportData = null
    const { develop } = this._config
    switch(this.isWaitSend){
        case 'pageError':
            if(this.isSendlock) return
            this.isWaitSend = false;
            reportData = this._handleCreateReport('pageError')
            break;
        case 'pageHashChange':
            if(this.isSendlock) return 
            this.isWaitSend = false;
            reportData = this._handleCreateReport('pageHashChange')
            break;
    }
    if(!reportData) return
    if(reportData.data && reportData.data.type === 'pageHashChange'){
        this.trackList = [];
        this.isPageChangeHandle = false
    }
    //send
    if(develop){
        consoleTools.log('track-reportData',reportData)
    }
    this.sendMessage(reportData)   
}
export const _handleCreateReport = function(type:'pageHashChange'|'pageError'){
    const  { reportDateFormat } = this._config
    let now = new Date().getTime()
    let trackInfo = {
        type,
        url: window.location.href,
    }
    switch(type){
        case 'pageHashChange':
            trackInfo['tags'] = this.pageInfo
            break;
        case 'pageError':
            const errorSpan = this.trackList[this.trackList.length-1]
            trackInfo['tags'] = {
                startUrl: this.pageInfo.startUrl,
                startDate: this.pageInfo.startDate,
                findErrorDate: Tools.dateFormat(now,reportDateFormat),
                errorContent: Tools.objectStringify(errorSpan.data)
            }
            break;
        default:
            return false;
    }
    trackInfo['spans'] = this.trackList.map(span=>{
        const  { reportDateFormat } = this._config
        const { typeName,reportTime,data } = span
        let name= 'undefined'
        let type= `${span.type}-${typeName}:${Tools.dateFormat(reportTime,reportDateFormat)}`
        switch(typeName){
            case 'log':
                name = `${data.type}->${Tools.substringLimt(data.data)}`
                break;
            case 'network':
                name = `${data.type}->${data.method}:${data.url}(${data.statusType}:${data.status}${data.response?`->${Tools.substringLimt(data.response)})`:')'}`
                break;
            case 'htmlElementActive':
                name = `${data.type}->${data.title}(xpath:${data.xPath})${data.type==='change'?('->'+Tools.substringLimt(data.value)):''}`
                break;
            case 'error':
                name = `Error->${data.message}${data.filename?('('+data.filename+')'):''}`
                break;
        }
        return {
            name,
            type,
        }
    })
    return {
        type: 'monitor',
        typeName: 'kibanaApmTrack',
        data:trackInfo,
        isError: type==='pageError'?true:false
    }
}



