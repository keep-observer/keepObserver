import defaultConfig from './defaultConfig';
import { KeepObserverPublic,tool } from '@util/index'



import {
    stopObserver,
    startObserver
} from './api'
import {
    _handleInit,
    _handleMessage,
} from './handle'




// 获取系统信息
class KeepObserverLog extends KeepObserverPublic{
    private _config: any;
    private console: any;
    private addReportListener:any;  //继承中属性
    //method
    private stopObserver = stopObserver.bind(this)
    private startObserver = startObserver.bind(this)
    private _handleInit = _handleInit.bind(this)
    private _handleMessage = _handleMessage.bind(this)



    //构造函数
    constructor(config={}) {
        super(config)
        //初始化上传相关实例
        const { logCustom=false,develop=false } = config as any
        var logConfig:any = logCustom || config;
        //是否是开发模式
        logConfig.develop = develop
        //存混合配置
        this._config = tool.extend(defaultConfig, logConfig)
        //替换window.console
        this.console = {};
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


