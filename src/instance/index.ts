import * as tool from '../util/tool';
import getDeviceId from '../util/deviceID'
import defaultConfig from './defaultConfig';
import KeepObserverPublic from '../share/public/index'
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
        //中间件事件
        this._middleScopeNames = tool.extend([],this._publicMiddleScopeNames,[
            'use'
        ])
        //init
        this.init()
    }
    
    //api
    public use(Provider:Provider){
        return this._pipe.use(Provider)
    }
    public apis = apis.bind(this)
}







module.exports = KeepObserver
module.exports.default = module.exports;



