import defaultConfig from './defaultConfig';
import { KeepObserverPublic,tool } from '@util/index'



import {
    _getReportContent,
} from './handle'
import {
    _handleReport,
    _handleResponse,
} from './report'




// report Server 
class KeepObserverReport  extends KeepObserverPublic  {
    private _config: any;
    private develop: boolean;
    private addReportListener:any;  //继承中属性
    //method
    private _getReportContent = _getReportContent.bind(this);
    private _handleReport = _handleReport.bind(this);
    private _handleResponse = _handleResponse.bind(this);



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
    }
    


    /*
        提供一个挂载方法在注入中使用
        return 
            $getCustomeReport
     */
    public apply(pipe) {
        var _self = this;
        pipe.registerRecivePipeMessage(_self._getReportContent, _self)
        _self.addReportListener(pipe.sendPipeMessage)
        return {}
    }
}





export default KeepObserverReport

