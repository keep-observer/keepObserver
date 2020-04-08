import defaultConfig from './defaultConfig';
import { KeepObserverPublic,Tools } from '@util/index'



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
    private sendMessage:Function;
    private addReportListener:any;  //继承中属性
    //method
    private _handleInit = _handleInit.bind(this)
    private _handleMessage = _handleMessage.bind(this)
    public stopObserver = stopObserver.bind(this)
    public startObserver = startObserver.bind(this)


    //构造函数
    constructor(config={}) {
        super(config)
        //初始化上传相关实例
        const { logCustom=false,develop=false } = config as any
        var logConfig:any = logCustom || config;
        //是否是开发模式
        logConfig.develop = develop
        //存混合配置
        this._config = Tools.extend(defaultConfig, logConfig)
        //替换window.console
        this.console = null;
        //发送方法
        this.sendMessage = ()=>null
        //启动监控
        this.startObserver();
    }


    //提供一个挂载入口
    public apply({sendMessage}) {
        this.sendMessage = sendMessage
        return {
            $logStop: this.stopObserver,
            $logStart: this.startObserver
        }
    }   
}





export default KeepObserverLog


