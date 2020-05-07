import defaultConfig from './defaultConfig';
import { KeepObserverPublic,Tools,consoleTools } from '@util/index'



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
        //存混合配置
        this._config = Tools.extend({...defaultConfig}, {
            ...logConfig,
            develop
        })
        //替换window.console
        this.console = null;
        //发送方法
        this.sendMessage =  ()=>consoleTools.warnError('sendMessage is not active, apply receive sendPipeMessage fail ')
    }


    //提供一个挂载入口
    public apply({sendMessage}) {
        const { automaticStart } = this._config
        this.sendMessage = sendMessage
        //启动监控
        if(automaticStart){
            this.startObserver()
        }
        return {
            logStop: this.stopObserver,
            logStart: this.startObserver
        }
    }   
}





export default KeepObserverLog


