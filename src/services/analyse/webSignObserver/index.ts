import defaultConfig from './defaultConfig.js';
import * as tool from '../../../util/tool';


import {
    beginObserverAnalyse
} from './api'
import {
    loadRequestSginData,
    registerDomAnaylseListener,
    triggerAcitveReport
} from './handle'
import {
    _handleHook
} from './hook'
import {
    _getReportContent
} from './response'
import {
    initPatchNodeEvent,
    addNodeEventPatchHandle,
    removeNodeEventPatchHandle,
    addNodeObserverListener
} from './dom/index'
import {
    addReportListener,
    handleReportData,
    noticeReport
} from './report'


//页面埋点分析
class keepObserverWebSignAnalyse  {
    private _config : any;
    private _addEventListener : any;
    private _removeEventListener : any;
    private _patchEventListenerMap : any;
    private elementSginListenerMap : any;
    private typeName: string;
    private eventListener: any[];
    //method
    private beginObserverAnalyse = beginObserverAnalyse.bind(this)
    private loadRequestSginData = loadRequestSginData.bind(this)
    private registerDomAnaylseListener = registerDomAnaylseListener.bind(this)
    private triggerAcitveReport = triggerAcitveReport.bind(this)
    private _handleHook = _handleHook.bind(this)
    private _getReportContent = _getReportContent.bind(this)
    private initPatchNodeEvent = initPatchNodeEvent.bind(this)
    private addNodeEventPatchHandle = addNodeEventPatchHandle.bind(this)
    private removeNodeEventPatchHandle = removeNodeEventPatchHandle.bind(this)
    private addNodeObserverListener = addNodeObserverListener.bind(this)
    private addReportListener = addReportListener.bind(this)
    private handleReportData = handleReportData.bind(this)
    private noticeReport = noticeReport.bind(this)

    //构造函数
    constructor(config) {
        //初始化上传相关实例
        var webSignAnalyseCustom = config.webSignAnalyseCustom || {};
        this._config = tool.extend(defaultConfig, webSignAnalyseCustom)
        //type 
        this.typeName = 'webSignAnalyse'
        //监听列表
        this.eventListener = [];
        //原生方法
        this._addEventListener = false;
        this._removeEventListener = false;
        //拦截到的方法集合
        this._patchEventListenerMap = {}
        //埋点element map
        this.elementSginListenerMap = {}
        //init
        this.initPatchNodeEvent()
    }


    //提供一个挂载入口
    public apply(pipe) {
        var that = this;
        pipe.registerRecivePipeMessage(that._getReportContent, that)
        that.addReportListener(pipe.sendPipeMessage)
        //在挂载后进行初始化load
        setTimeout(function(){
            that.loadRequestSginData()
        })
        return {
            $beginObserverAnalyse: that.beginObserverAnalyse  
        }
    }

}








export default keepObserverWebSignAnalyse







