import defaultConfig from './defaultConfig';
import { KeepObserverPublic,tool } from '@util/index'


import { 
    handleAnalyseDomList,
    getDomTitle
} from './dom'
import {
    registerAnalyseDomEvent,
    _handleEventTarget,
    _recoverEventTarget
} from './event'
import {
    begine,
    destroy,
    triggerAcitveReport,
    triggerInitReport,
    createReportData
} from './handle'
import {
    stopAnalyse,
    startAnalyse,
    clearSaveRecive,
} from './api'


type reportDataType = {
    id: string,                         //唯一浏览器标识
    repeatCountAll:number,              //总的统计次数
    repeatCount:number,                 //访问次数
    useActives:any    
}



//简单H5页面埋点分析
class KeepObserverSimpleH5Analyse extends KeepObserverPublic{
    private _config:any;
    private _addEventListener:any;
    private _removeEventListener:any;
    private _domListener:any;
    private analyseDomList: any;
    private uniqueId: string;
    private reportData:reportDataType;
    private addReportListener:any; //继承中属性
    //method
    private getDomTitle = getDomTitle.bind(this)
    private handleAnalyseDomList = handleAnalyseDomList.bind(this)
    private stopAnalyse = stopAnalyse.bind(this)
    private startAnalyse = startAnalyse.bind(this)
    private clearSaveRecive = clearSaveRecive.bind(this)
    private registerAnalyseDomEvent = registerAnalyseDomEvent.bind(this)
    private  _handleEventTarget = _handleEventTarget.bind(this)
    private _recoverEventTarget = _recoverEventTarget.bind(this)
    private begine = begine.bind(this)
    private destroy = destroy.bind(this)
    private triggerAcitveReport = triggerAcitveReport.bind(this)
    private triggerInitReport = triggerInitReport.bind(this)
    private createReportData = createReportData.bind(this)

    //构造函数
    constructor(config={}) {
        super(config)
        //初始化上传相关实例
        const { simpleH5AnalyseCustom=false } = config as any
        var simpleH5AnalyseCustomConfig = simpleH5AnalyseCustom || config;
        this._config = tool.extend(defaultConfig, simpleH5AnalyseCustomConfig)
        //原生方法
        this._addEventListener = false;
        this._removeEventListener = false;
        //拦截DOM列表
        /*
            eventList: object
            target: element
         */
        this._domListener = {};
        //需要监听的dom列表
        /*
            destroyEvent: function
            getActiveStauts: function 
            title: string
        */
        this.analyseDomList  = {};
        this.uniqueId = tool.getUniqueID();
        /*上报内容*/
        this.reportData = {
            id: tool.getUniqueID(),         //唯一浏览器标识
            repeatCountAll: 0,              //总的统计次数
            repeatCount: 0,                 //访问次数
            useActives:{}                   //行为事件
        }
        //启动
        var begin = this._handleEventTarget()
        if(begin && this._config.initBegine && this._config.begineConfig){
            this.startAnalyse(this._config.begineConfig);
        }
    }

    //提供一个挂载入口
    public apply(pipe) {
        this.addReportListener(pipe.sendPipeMessage)
        return {
            $simpleH5AnalyseClearSaveRecive: this.clearSaveRecive,
            $simpleH5AnalyseStop: this.stopAnalyse,
            $simpleH5AnalyseBegine: this.startAnalyse,
        }
    }
}







export default KeepObserverSimpleH5Analyse




