import defaultConfig from './defaultConfig';
import { KeepObserverPublic,tool } from '@util/index'

import { networkListType } from '../../../types/network'

import { 
    stopObserver,
    startObserver
} from './api';
import {
    _init,
    _patchXMLAjax,
    _patchFetch,
    _handleTimeout,
    _handleDoneXML,
    _handleJudgeDisbale
} from './handle';
import {
    handleReportData,
} from './report';



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
    private isCatch: boolean;
    private addReportListener: any; //继承中属性
    //method
    private stopObserver = stopObserver.bind(this);
    private startObserver = startObserver.bind(this);
    private _init = _init.bind(this);
    private _patchXMLAjax = _patchXMLAjax.bind(this);
    private _patchFetch = _patchFetch.bind(this);
    private _handleTimeout = _handleTimeout.bind(this);
    private _handleDoneXML = _handleDoneXML.bind(this);
    private _handleJudgeDisbale = _handleJudgeDisbale.bind(this);
    private handleReportData = handleReportData.bind(this);


    //构造函数
    constructor(config={}) {
        super(config)
        //存混合配置
        const { networkCustom=false ,reportCustom=false } = config as any
        const reportUrl = (reportCustom && reportCustom.reportUrl)? reportCustom.reportUrl:[]
        var networkConfig = tool.extend({ reportUrl }, networkCustom || config)
        this._config = tool.extend(defaultConfig, networkConfig)
        this._config.ignoreRequestList = this._config.ignoreRequestList.concat(reportUrl)
        //是否开启捕获
        this.isCatch = true
        //监控的数据列表
        this.networkList = {};
        //辅助捕获超时
        this.timeout = {};
        this.timeoutRequest = {};
        // 开启网络拦截监控
        this._init();
    }


    //提供一个挂载入口
    public apply(pipe) {
        this.addReportListener(pipe.sendPipeMessage)
        return {
            $networkStop: this.stopObserver,
            $networkStart: this.startObserver
        }
    }
}




export default KeepObserverNetwork