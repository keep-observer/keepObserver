import defaultConfig from './defaultConfig';
import { KeepObserverPublic,tool } from '@util/index'

import TracerTransaction from './transaction'


import { _getReportContent } from './handle'
import {
    _handleCustome
} from './custome'
import {
    _handlePerformance
} from './performance'
import {
    _handleMonitor,
    _handleMonitorLog
} from './monitor'


// report Server 
class KeepObserverKibanaApmReport  extends KeepObserverPublic  {
    private _config: any;
    private develop: boolean;
    private tracerTransaction: any;
    //继承中属性
    private addReportListener:any;          
    readonly middleScopeNames:string[];     
    //method
    private _getReportContent = _getReportContent.bind(this)
    private _handleCustome = _handleCustome.bind(this)
    private _handlePerformance = _handlePerformance.bind(this)
    private _handleMonitor = _handleMonitor.bind(this)
    private _handleMonitorLog = _handleMonitorLog.bind(this)
    
    //constructor
    constructor(config = {}){
        super(config)
        const { reportCustom=false,develop=false } = config as any
        //存混合配置
        var reportConfig:any = reportCustom || config;
        //是否是开发模式
        reportConfig.develop = develop
        //混合默认配置
        this._config = tool.extend(defaultConfig, reportConfig);
        //重载中间件命名空间
        this.middleScopeNames = []
        //init
        this.tracerTransaction = new TracerTransaction( this._config)
    }
    


    /*
        提供一个挂载方法在注入中使用
     */
    public apply(pipe) {
        var _self = this;
        pipe.registerRecivePipeMessage(_self._getReportContent, _self)
        pipe.registerMiddleScopeName(_self.middleScopeNames)
        _self.addReportListener(pipe.sendPipeMessage)
        return {}
    }
}






export default KeepObserverKibanaApmReport




