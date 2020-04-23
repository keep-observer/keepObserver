import defaultConfig from './defaultConfig';
import { KeepObserverPublic,Tools,consoleTools } from '@util/index'
import {
    reportParams,
} from '../../../types/report'

import {
    _handleReciceReportMessage,
    _handleTrackLog,
    _handleTrackNetwork,
    _handleTrackHtmlElementActive,
    _handleTrackError,
} from './handleMiddle'




// 获取系统信息
class KeepObserverMiddlewareKibanaApmTrack extends KeepObserverPublic{
    private _config: any;
    private sendMessage:Function;
    private trackList:reportParams<any>[]
    //method
    private _handleReciceReportMessage = _handleReciceReportMessage.bind(this)
    private _handleTrackLog = _handleTrackLog.bind(this)
    private _handleTrackNetwork = _handleTrackNetwork.bind(this)
    private _handleTrackHtmlElementActive = _handleTrackHtmlElementActive.bind(this)
    private _handleTrackError = _handleTrackError.bind(this)


    //构造函数
    constructor(config={}) {
        super(config)
        //存混合配置
        this._config = Tools.extend({...defaultConfig}, config)
        //发送方法
        this.sendMessage =  ()=>consoleTools.warnError('sendMessage is not active, apply receive sendPipeMessage fail ')
    }


    //提供一个挂载入口
    public apply( {sendMessage,useExtendMiddle} ) {
        this.sendMessage = sendMessage
        //receive message
        useExtendMiddle('sendMessage',this._handleReciceReportMessage)
    }
    
    
}






export default KeepObserverMiddlewareKibanaApmTrack

