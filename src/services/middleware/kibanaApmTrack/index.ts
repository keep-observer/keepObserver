import defaultConfig from './defaultConfig';
import { KeepObserverPublic,Tools,consoleTools } from '@util/index'
import {
    reportParams,
} from '../../../types/report'
import {
    trackInfoType,
    trackReportType,
    pageChangeInfoType,
} from '../../../types/kibanaApmTrack'


import {
    _handleReciceReportMessage,
    _handleSendTrackMessage,
    _handleCreateReport,
    /*-------*/
    _handleTrackLog,
    _handleTrackNetwork,
    _handleTrackHtmlElementActive,
    _handleTrackError,
} from './handleMiddle'
import {
    resgisterPageHashChangeEventListener,
    checkPageHashUrlChange,
    _handleHashPageChange,
    _pageStart,
    _pageHashNext,
} from './pageHashChange'
import {
    cancelTrack,
    startTrack,
    cancelPatch,
} from './api'




class KeepObserverMiddlewareKibanaApmTrack extends KeepObserverPublic{
    private _config: any;
    private sendMessage:Function;
    private isSendlock: boolean = true;
    private isWaitSend: false |'pageError'|'pageHashChange' = false;
    private isPageChangeHandle:boolean = false;
    private isCancelTrack:boolean = true;
    private trackInfo: trackInfoType = undefined
    private pageInfo: pageChangeInfoType = null
    private errorContent: string = ''
    private trackList: reportParams<any>[] = [];
    //pageHashChange
    private _pushState: Function;
    private _replaceState: Function;
    private resgisterPageHashChangeEventListener = resgisterPageHashChangeEventListener.bind(this)
    private checkPageHashUrlChange = checkPageHashUrlChange.bind(this)
    private _handleHashPageChange = _handleHashPageChange.bind(this)
    private _pageStart = _pageStart.bind(this)
    private _pageHashNext = _pageHashNext.bind(this)
    //send
    private _handleSendTrackMessage = _handleSendTrackMessage.bind(this)
    private _handleCreateReport:(type:'pageHashChange'|'pageError')=>trackReportType|void = _handleCreateReport.bind(this)
    //method
    private _handleReciceReportMessage = _handleReciceReportMessage.bind(this)
    private _handleTrackLog = _handleTrackLog.bind(this)
    private _handleTrackNetwork = _handleTrackNetwork.bind(this)
    private _handleTrackHtmlElementActive = _handleTrackHtmlElementActive.bind(this)
    private _handleTrackError = _handleTrackError.bind(this)
    //api
    public cancelTrack = cancelTrack.bind(this)
    public startTrack = startTrack.bind(this)
    public cancelPatch = cancelPatch.bind(this)


    //构造函数
    constructor(config={}) {
        super(config)
        const { develop=false } = config as any
        //存混合配置
        this._config = Tools.extend({...defaultConfig}, {
            ...config,
            develop
        })
        const { reportDateFormat } =  this._config
        this.pageInfo = { startUrl:'', startDate:Tools.dateFormat(new Date().getTime(),reportDateFormat), nextUrl:'', nextDate:0 }
        //发送方法
        this.sendMessage = ()=>consoleTools.warnError('sendMessage is not active, apply receive sendPipeMessage fail ')
        //注册pageHashChange事件
        this.resgisterPageHashChangeEventListener()
    }


    //提供一个挂载入口
    public apply( {sendMessage,useExtendMiddle,registerSendDoneCallback} ) {
        const { automaticStart } = this._config
        this.sendMessage = sendMessage
        //receive message
        useExtendMiddle('sendMessage',this._handleReciceReportMessage)
        //send wait
        registerSendDoneCallback(()=>{
            this.isSendlock = false;
            if(!this.isWaitSend) return
            this._handleSendTrackMessage()
        })
        if(automaticStart){
            this.startTrack()
        }
        return {
            cancelTrack:this.cancelTrack,
            startTrack:this.startTrack,
            cancelHashChangePatch:this.cancelPatch
        }
    }
    
    
}








export default KeepObserverMiddlewareKibanaApmTrack




