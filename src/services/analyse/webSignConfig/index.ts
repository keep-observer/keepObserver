import defaultConfig from './defaultConfig.js';
import * as tool from '../../../util/tool';

import {
    startCorrespond
} from './api'
import {
    checkOrigin
} from './check'
import {
    registerMessage,
    removeMessage,
    handleMessage,
    sendMessage
} from './correspond'
import {
    confirmConcatRequestSginData,
    handleElementEventPreventDefault,
    receiveSignConfigData,
    reportNodeSelect,
    confirmNodeSelect
} from './handle'
import {
    initDomEvent,
    createElementNodeInfo,
    selectElement,
    activeElement,
} from './dom/index'
import {
    addReportListener,
    handleReportData,
    noticeReport
} from './report'



//可视化配置页面埋点
class KeepObserverWebSignConfig {
    private  _config :any
    private  eventListener: any[]
    private correspondFlag: boolean
    private receiveSginConfigFlag: boolean
    private sourceTarget: any
    private sourceOrigin: any
    private proxyMessageHandleEvent: any
    private preventDefault: any
    private activeDomList: any[]
    private nodeInfoCaches: any
    private selectDom: any
    //method
    private startCorrespond = startCorrespond.bind(this)
    private checkOrigin = checkOrigin.bind(this)
    private registerMessage = registerMessage.bind(this)
    private removeMessage = removeMessage.bind(this)
    private handleMessage = handleMessage.bind(this)
    private sendMessage = sendMessage.bind(this)
    private confirmConcatRequestSginData = confirmConcatRequestSginData.bind(this)
    private handleElementEventPreventDefault = handleElementEventPreventDefault.bind(this)
    private receiveSignConfigData = receiveSignConfigData.bind(this)
    private reportNodeSelect = reportNodeSelect.bind(this)
    private confirmNodeSelect = confirmNodeSelect.bind(this)
    private initDomEvent = initDomEvent.bind(this)
    private createElementNodeInfo = createElementNodeInfo.bind(this)
    private selectElement = selectElement.bind(this)
    private activeElement = activeElement.bind(this)
    private addReportListener = addReportListener.bind(this)
    private handleReportData = handleReportData.bind(this)
    private noticeReport = noticeReport.bind(this)

    //构造函数
    constructor(config) {
        //初始化上传相关实例
        var webSignConfigCustom = config.webSignConfigCustom || {};
        this._config = tool.extend(defaultConfig, webSignConfigCustom)
        //监听列表
        this.eventListener = [];
        //flag
        this.correspondFlag = false;
        this.receiveSginConfigFlag = false;
        //iframe container target
        this.sourceTarget = false;
        this.sourceOrigin  = false;
        //meeage event 
        this.proxyMessageHandleEvent = false;
        //dom
        this.preventDefault = true;
        this.activeDomList = []
        this.nodeInfoCaches = {}
        this.selectDom = false;
        //mixin
    }



    //提供一个挂载入口
    public apply(pipe) {
        this.addReportListener(pipe.sendPipeMessage)
        return {
            $startWebSginConfig: this.startCorrespond
        }
    }
}








export default KeepObserverWebSignConfig







