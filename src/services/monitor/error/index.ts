import defaultConfig from './defaultConfig';
import { KeepObserverPublic,Tools,consoleTools } from '@util/index'


import {
    stopObserver,
    startObserver
} from './api'
import {
    _handleInit,
    _handleMessage,
    _handleError,
} from './handle'




// 获取系统信息
class KeepObserverError extends KeepObserverPublic{
    private _config: any;
    private console: any;
    private $createElement : any|boolean;
    private sendMessage: Function; 
    //method
    private stopObserver = stopObserver.bind(this)
    private startObserver = startObserver.bind(this)
    private _handleInit = _handleInit.bind(this)
    private _handleMessage = _handleMessage.bind(this)
    private _handleError = _handleError.bind(this)


    //构造函数
    constructor(config={}) {
        super(config)
        //初始化上传相关实例
        const { errorCustom=false,develop=false } = config as any
        var errorConfig:any = errorCustom || config;
        //是否是开发模式
        errorConfig.develop = develop
        //存混合配置
        this._config = Tools.extend(defaultConfig, errorConfig)
        //替换 doucment.createElement 插入script .crossOrigin = 'anonymous';
        this.$createElement = false;
         // 发送消息
         this.sendMessage = ()=>consoleTools.warnError('sendMessage is not active, apply receive sendPipeMessage fail ')
        //启动监控
        this.startObserver();
    }


    //提供一个挂载入口
    public apply({sendMessage}) {
        this.sendMessage = sendMessage
        return {
            $errorStop: this.stopObserver,
            $errorStart: this.startObserver
        }
    }   
}





export default KeepObserverError


