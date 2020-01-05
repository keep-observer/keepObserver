import { KeepObserverPublic,tool } from '@util/index'

import {
    stopObserver,
    startObserver
} from './api'
import {
    _handleInit,
    _handleVueError,
} from './handle'





// 获取系统信息
class KeepObserverVue  extends KeepObserverPublic{
    private  _config: any;
    private  _vue: any;
    private _originErrorHandle: any;
    private addReportListener:any; //继承中属性
    //method
    private stopObserver = stopObserver.bind(this);
    private startObserver = startObserver.bind(this);
    private _handleInit = _handleInit.bind(this);
    private _handleVueError = _handleVueError.bind(this);
    

    //构造函数
    constructor(config={}) {
        super(config)
        //初始化上传相关实例
        const { vueCustom=false ,Vue=false } = config as any
        var vueConfig:any = vueCustom || config;
        vueConfig.vueInstance = Vue;
        //判断是否存在实例
        if (!vueConfig.vueInstance) {
            return this;
        }
        //存混合配置
        this._config = tool.extend({}, vueConfig)
        //vue实例
        this._vue = this._config.vueInstance;
        // 开启vue拦截
        this.startObserver();
    }

    //提供一个挂载入口
    public apply(pipe) {
        this.addReportListener(pipe.sendPipeMessage)
        return {
            $vueStop: this.stopObserver,
            $vueStart: this.startObserver
        }
    }

}





export default KeepObserverVue




