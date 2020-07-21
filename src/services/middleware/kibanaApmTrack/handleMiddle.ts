
import { Tools,consoleTools } from '@util/index'

import { reportParams} from '../../../types/report'
import { networkType } from '../../../types/network'
import { logType } from '../../../types/log'
import { elementActiveInfoType } from '../../../types/htmlElementActive'
import { trackInfoType } from '../../../types/kibanaApmTrack'
import { errorType } from '../../../types/error'



export const _handleReciceReportMessage = function (interrupt:Function,next:Function){return(...params)=>{
    const { isInterruptNormal,onInterruptJudge } = this._config
    const [ message={} ] = params
    const { type =false,typeName,isError=false } = message
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
    //是否中断判断
    if(onInterruptJudge && Tools.isFunction(onInterruptJudge) && !isError){
        return onInterruptJudge(message)?interrupt(false):next(...params)
    }
    return isInterruptNormal && !isError?interrupt(false):next(...params)
}}
export const _handleTrackLog = function(params:reportParams<logType>){ 
    this.trackList.push(params)
    //判断是否是error类型
    const { type } = params.data
    if(type === 'error'){
        this.isWaitSend = 'pageError'
        this.errorContent = Tools.objectStringify(params.data)
        this._handleSendTrackMessage()
    }
}
export const _handleTrackNetwork = function(params:reportParams<networkType>){ 
    this.trackList.push(params)
    //判断是否是请求出错
    const { isError } = params.data
    if(isError){
        this.isWaitSend = 'pageError'
        this.errorContent = Tools.objectStringify(params.data)
        this._handleSendTrackMessage()
    }
}
export const _handleTrackHtmlElementActive = function(params:reportParams<elementActiveInfoType>){ 
    this.trackList.push(params)
}
export const _handleTrackError = function(params:reportParams<errorType>){ 
    this.trackList.push(params)
    this.isWaitSend = 'pageError'
    this.errorContent = Tools.objectStringify(params.data)
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
            //clear
            this.errorContent = ''
            break;
        case 'pageHashChange':
            if(this.isSendlock) return 
            this.isWaitSend = false;
            reportData = this._handleCreateReport('pageHashChange')
            //update url
            this._pageStart()
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
//create Data
export const _handleCreateReport = function(type:'pageHashChange'|'pageError'){
    const  { reportDateFormat,isInterruptNormal } = this._config
    let now = new Date().getTime()
    let trackInfo:trackInfoType = {
        type: type as any,
        url: window.location.href,
        tags:null,
        spans:[]
    }
    switch(type){
        case 'pageHashChange':
            trackInfo['tags'] = this.pageInfo
            break;
        case 'pageError':
            trackInfo['tags'] = {
                startUrl: this.pageInfo.startUrl,
                startDate: this.pageInfo.startDate,
                findErrorDate: Tools.dateFormat(now,reportDateFormat),
                errorContent: this.errorContent,
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
        let tags = null
        switch(typeName){
            case 'log':
                name = `${data.type}->${Tools.substringLimt(data.data)}`
                tags = {
                    type:typeName,
                    content:data
                }
                break;
            case 'network':
                let { method="",url="",params=null,status=0,response="",body="",startTime=0,endTime=0,costTime=0,timeout=undefined } = data
                name = `${data.type}->${method}:${url}(${data.statusType}:${status}${response?`->${Tools.substringLimt(response)})`:')'}`
                tags = {
                    type:typeName,
                    content:{
                        method,   			           
                        url,     			            
                        params:params?Tools.objectStringify(params):'',  			                
                        body,      		            
                        status,       	                
                        startTime,     	                
                        endTime,       	            
                        costTime,      	           
                        response,			            
                        timeout                      
                    }
                }
                break;
            case 'htmlElementActive':
                name = `${data.type}->${data.title}(xpath:${data.xPath})${data.type==='change'?('->'+Tools.substringLimt(data.value)):''}`
                tags = {
                    type:typeName,
                    content:data
                }
                break;
            case 'error':
                name = `Error->${data.message}${data.filename?('('+data.filename+')'):''}`
                tags = {
                    type:typeName,
                    content:{
                        message:data.message,
                        filename:data.filename
                    }
                }
                break;
        }
        return {
            name,
            type,
            tags:isInterruptNormal?tags:null
        }
    })
    return {
        type: 'monitor',
        typeName: 'kibanaApmTrack',
        data:trackInfo,
        isError: type==='pageError'?true:false
    }
}



