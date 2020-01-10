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
    registerApi,
    apis
} from './method/api'

//type
import {
    middlesFn
} from '../types/middle'
import {
    userInfo
} from '../types/report'



class KeepObserver extends KeepObserverPublic{
    private _config: any
    private _pipe: any
    private _apis: { apiName:string,cb:(...args:any[])=>any }
    private middleScopeNames: string[]           //继承属性
    private _publicMiddleScopeNames: string[]    //继承属性
    //method
    private updateVersionClearCache = updateVersionClearCache.bind(this);
    private registerApi = registerApi.bind(this)


    constructor(config={}) {
        super(config = tool.extend(defaultConfig ,{
            projectName:"",
            projectVersion:"",
            version,
            deviceID: getDeviceId()
        },config))
        //获取实例配置
        this._config = config
        //管道实例
        this._pipe = new keepObserverPipe(this, this._config)
        //扩展上报内容
        const { projectName,projectVersion } = this._config
        this.extendReportParams({
            projectName,
            projectVersion,
            version,
        })
        this.extendMiddleScopeName(this._publicMiddleScopeNames)
        //是否需要更新版本清除缓存
        if(this._config.projectVersion && this._config.updateVersionClearCache){
            this.updateVersionClearCache();
        }
    }
    

    //主实例重载中间件服务
    public useMiddle(scopeName:string,middlesFn:middlesFn){
        return KeepObserverMiddleWare.usePublishMiddles(scopeName,middlesFn)
    }
    //扩展上报属性
    public extendReportParams(params:any){
        return KeepObserverPublic.extendReport(params)
    }
    //设置用户信息
    public setUserInfo(userInfo:userInfo){
        return KeepObserverPublic.extendReport({
            userInfo:userInfo
        })
    }
    //拓展中间件实例
    public extendMiddleScopeName(_middleScopeNames:string[]){
        const { middleScopeNames } = this
        if(tool.isEmptyArray(_middleScopeNames)) return;
        return this.middleScopeNames = tool.toArray(new Set(middleScopeNames.concat(_middleScopeNames)))
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



