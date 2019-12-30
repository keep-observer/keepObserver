import { KeepObserverPublic,KeepObserverMiddleWare,tool,getDeviceId } from '@util/index'
import defaultConfig from './defaultConfig';
import { Provider } from '../types/instance'


import keepObserverPipe from './pipe/index';

import {
    version
} from '../constants/index';
import {
    updateVersionClearCache,
} from './method/update';
import {
    init
} from './method/init'
import {
    registerApi,
    apis
} from './method/api'

//type
import {
    middlesFn
} from '../types/middle'




class KeepObserver extends KeepObserverPublic{
    private _config: any
    private _pipe: any
    private _apis: { apiName:string,cb:(...args:any[])=>any }
    private _middleScopeNames: string[] 
    //method
    private init = init.bind(this)
    private updateVersionClearCache = updateVersionClearCache.bind(this);
    private registerApi = registerApi.bind(this)


    constructor(config={}) {
        super(config = tool.extend(defaultConfig, config ,{
            version: version,
            deviceID: getDeviceId()
        }))
        //获取实例配置
        this._config = config
        //管道实例
        this._pipe = new keepObserverPipe(this, this._config)
        //init
        this.init()
    }
    

    //主实例重载中间件服务
    public useMiddle(scopeName:string,middlesFn:middlesFn){
        return KeepObserverMiddleWare.usePublishMiddles(scopeName,middlesFn)
    }


    //挂载插件服务
    public use(Provider:Provider){
        return this._pipe.use(Provider)
    }

    //api
    public apis = apis.bind(this)
}









module.exports = KeepObserver
module.exports.default = module.exports;



