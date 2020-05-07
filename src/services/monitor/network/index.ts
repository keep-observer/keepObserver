import defaultConfig from './defaultConfig';
import { KeepObserverPublic,Tools,consoleTools } from '@util/index'

import { networkListType } from '../../../types/network'

import { 
    stopObserver,
    startObserver,
    cancelPatch
} from './api';
import {
    _init,
    _patchXMLAjax,
    _patchFetch,
    _handleTimeout,
    _handleDoneXML,
    _handleSendXML,
    _handleJudgeDisbale
} from './handle';




// 获取系统信息
class KeepObserverNetwork extends KeepObserverPublic{
    private _config: any;
    private _open: boolean| any;
    private _send: boolean| any;
    private _setRequestHeader: boolean| any;
    private _fetch: any;
    private timeout: any;
    private timeoutRequest: any;
    private networkList: networkListType;
    private sendMessage: Function; 
    private isCatch: boolean;
    //method
    public stopObserver = stopObserver.bind(this);
    public startObserver = startObserver.bind(this);
    public cancelPatch = cancelPatch.bind(this)
    private _init = _init.bind(this);
    private _patchXMLAjax = _patchXMLAjax.bind(this);
    private _patchFetch = _patchFetch.bind(this);
    private _handleTimeout = _handleTimeout.bind(this);
    private _handleDoneXML = _handleDoneXML.bind(this);
    private _handleSendXML = _handleSendXML.bind(this);
    private _handleJudgeDisbale = _handleJudgeDisbale.bind(this);


    //构造函数
    constructor(config={}) {
        super(config)
        //存混合配置
        const { networkCustom=false ,reportCustom=false } = config as any
        const reportUrl = (reportCustom && reportCustom.reportUrl)? reportCustom.reportUrl:[]
        var networkConfig = Tools.extend({ reportUrl }, networkCustom || config)
        this._config = Tools.extend({...defaultConfig}, networkConfig)
        this._config.ignoreRequestList = this._config.ignoreRequestList.concat(reportUrl)
        //kabanaApm serverUrl
        if(this._config.serverUrl){
            this._config.ignoreRequestList.push(this._config.serverUrl)
        }
        //是否开启捕获
        this.isCatch = false
        //监控的数据列表
        this.networkList = {};
        //辅助捕获超时
        this.timeout = {};
        this.timeoutRequest = {};
        // 发送消息
        this.sendMessage = ()=>consoleTools.warnError('sendMessage is not active, apply receive sendPipeMessage fail ')
        // 开启网络拦截监控
        this._init();
    }


    //提供一个挂载入口
    public apply({sendMessage}) {
        const { automaticStart } = this._config
        this.sendMessage = sendMessage
        //开启捕获
        if(automaticStart){
            this.startObserver()
        }
        return {
            networkStop: this.stopObserver,
            networkStart: this.startObserver,
            networkCancelPatch:this.cancelPatch
        }
    }
}




export default KeepObserverNetwork