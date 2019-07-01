import defaultConfig from './defaultConfig';
import * as tool from '../../../util/tool';


import { 
    stopObserver,
    startObserver
} from './api';
import {
    _handleInit,
    _handleXMLAjax,
    _handleTimeout,
    _handleDoneXML,
    _handleJudgeDisbale
} from './handle';
import {
    addReportListener,
    handleReportData,
    noticeReport,
} from './report';



// 获取系统信息
class KeepObserverNetwork{
    private _config: any;
    private _typeName: string;
    private _open: boolean| any;
    private _send: boolean| any;
    private _setRequestHeader: boolean| any;
    private timeout: any;
    private timeoutRequest: any;
    private eventListener: any[];
    private networkList: any;
    //method
    private stopObserver = stopObserver.bind(this);
    private startObserver = startObserver.bind(this);
    private _handleInit = _handleInit.bind(this);
    private _handleXMLAjax = _handleXMLAjax.bind(this);
    private _handleTimeout = _handleTimeout.bind(this);
    private _handleDoneXML = _handleDoneXML.bind(this);
    private _handleJudgeDisbale = _handleJudgeDisbale.bind(this);
    private addReportListener = addReportListener.bind(this);
    private handleReportData = handleReportData.bind(this);
    private noticeReport = noticeReport.bind(this);


    //构造函数
    constructor(config) {
        var networkConfig = config.networkCustom || {};
        //存混合配置
        this._config = tool.extend(defaultConfig, networkConfig)
        //上报名
        this._typeName = 'network'
        //监听列表
        this.eventListener = [];
        //监控的数据列表
        this.networkList = {};
        //替换window.XMLHttpRequest变量
        this._open = false;
        this._send = false;
        this._setRequestHeader = false;
        //辅助捕获超时
        this.timeout = {};
        this.timeoutRequest = {};
        // 开启网络拦截监控
        this.startObserver();
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