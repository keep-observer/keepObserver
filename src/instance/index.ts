import { KeepObserverPublic,Tools } from '@util/index'
import defaultConfig from './defaultConfig';


import keepObserverPipe from './pipe/index';

import { updateVersionClearCache} from './method/update';
import { registerApi,apis } from './method/api'
import { useMiddle,getRunMiddle } from './method/middle'
import { extendReportParams,use } from './method/base'



class KeepObserver extends KeepObserverPublic{
    private _config: any
    private _pipe: any
    private _apis: {
        [propName: string]:(...args:any[])=>any
    }
    private middleScopeNames: string[]           //继承属性
    readonly _publicMiddleScopeNames: string[]   //继承属性
    //method
    private updateVersionClearCache = updateVersionClearCache.bind(this);
    private registerApi = registerApi.bind(this)
    //api
    public apis = apis.bind(this)
    //主实例重载中间件服务
    public useMiddle = useMiddle.bind(this)
    public getRunMiddle = getRunMiddle.bind(this)
    //扩展上报属性
    public extendReportParams = extendReportParams.bind(this)
    //挂载插件服务
    public use = use.bind(this)

    

    constructor(config={}) {
        super(config = Tools.extend({...defaultConfig},config))
        //获取实例配置
        this._config = config
        //管道实例
        this._pipe = new keepObserverPipe(this, this._config)
        //扩展上报内容
        const { projectName,projectVersion,version } = this._config
        this.extendReportParams({
            projectName,
            projectVersion,
            version,
        })
        //扩展中间件
        this.middleScopeNames = this.middleScopeNames.concat(this._publicMiddleScopeNames)
        //是否需要更新版本清除缓存
        if(this._config.projectVersion && this._config.updateVersionClearCache){
            this.updateVersionClearCache();
        }
    }
    

}








export default KeepObserver



