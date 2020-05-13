import defaultConfig from './defaultConfig';
import { KeepObserverPublic,Tools,consoleTools } from '@util/index'



import TracerTransaction from './transaction'
import { 
    _getReportContent,
    _handleCatchError 
} from './handle'
import {
    setUserInfo,
    captureError,
    createCustomLog
} from './api'
import {
    _handleCustome
} from './custome'
import {
    _handleMonitor,
    _handleMonitorLog,
    _handleMonitorNetwork,
    _handleHtmlElementActive,
    _handleKibanaApmTrack
} from './monitor'





// report Server 
class KeepObserverKibanaApmReport  extends KeepObserverPublic  {
    private _config: any;
    private tracerTransaction: any;
    private sendMessage:any;
    //method
    private _getReportContent = _getReportContent.bind(this)
    private _handleCatchError = _handleCatchError.bind(this)
    private _handleCustome = _handleCustome.bind(this)
    private _handleMonitor = _handleMonitor.bind(this)
    private _handleMonitorLog = _handleMonitorLog.bind(this)
    private _handleMonitorNetwork = _handleMonitorNetwork.bind(this)
    private _handleHtmlElementActive = _handleHtmlElementActive.bind(this)
    private _handleKibanaApmTrack = _handleKibanaApmTrack.bind(this)
    //api
    public setUserInfo = setUserInfo.bind(this)
    public captureError = captureError.bind(this)
    public createCustomLog = createCustomLog.bind(this)

    
    //constructor
    constructor(config = {}){
        super(config)
        const { reportCustom=false,develop=false } = config as any
        //存混合配置
        var reportConfig:any = reportCustom || config;
        //是否是开发模式
        reportConfig.develop = develop
        //混合默认配置
        this._config = Tools.extend({...defaultConfig}, reportConfig);
        //发送方法
        this.sendMessage = ()=>consoleTools.warnError('sendMessage is not active, apply receive sendPipeMessage fail ')
        //init
        this.tracerTransaction = new TracerTransaction(this._config)
    }
    

    /*
        提供一个挂载方法在注入中使用
     */
    public apply({registerReciveMessage,sendMessage}) {
        registerReciveMessage(this._getReportContent, this)
        this.sendMessage = sendMessage
        //start
        const { isCatchPageload,isCatchError } = this._config
        if(isCatchPageload){
            this.tracerTransaction.pageLoad()
        }
        if(isCatchError){
            this.tracerTransaction.catchError()
            this._handleCatchError()
        }
        return {
            setUserInfo:this.setUserInfo,
            captureError:this.captureError,
            createCustomLog:this.createCustomLog,
        }
    }
}






export default KeepObserverKibanaApmReport




