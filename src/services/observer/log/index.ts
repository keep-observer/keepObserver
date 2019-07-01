import defaultConfig from './defaultConfig';
import * as tool from '../../../util/tool';


import {
    stopObserver,
    startObserver
} from './api'
import {
    _handleInit,
    _handleMessage,
    _handleError,
} from './handle'
import {
    addReportListener,
    handleReportData,
    noticeReport
} from './report'



// 获取系统信息
class KeepObserverLog{
    private _config: any;
    private _typeName :string;
    private _develop :boolean;
    private eventListener : any[];
    private console: any;
    private $createElement : any|boolean;
    //method
    private stopObserver = stopObserver.bind(this)
    private startObserver = startObserver.bind(this)
    private _handleInit = _handleInit.bind(this)
    private _handleMessage = _handleMessage.bind(this)
    private _handleError = _handleError.bind(this)
    private addReportListener = addReportListener.bind(this)
    private handleReportData = handleReportData.bind(this)
    private noticeReport = noticeReport.bind(this)


    //构造函数
    constructor(config) {
        //初始化上传相关实例
        var logConfig = config.logCustom || {};
        //是否是开发模式
        logConfig.develop = config.develop ? true : false;
        //存混合配置
        this._config = tool.extend(defaultConfig, logConfig)
        //当前是否处于开发模式
        this._develop = this._config.develop;
        //上报名
        this._typeName = 'log'
        //监听列表
        this.eventListener = [];
        //替换window.console
        this.console = {};
        //替换 doucment.createElement 插入script .crossOrigin = 'anonymous';
        this.$createElement = false;
        //启动监控
        this.startObserver();
    }


    //提供一个挂载入口
    public apply(pipe) {
        this.addReportListener(pipe.sendPipeMessage)
        return {
            $logStop: this.stopObserver,
            $logStart: this.startObserver
        }
    }   
}





export default KeepObserverLog


