import { publicMiddleScopeNames } from '../../../constants/index'
import  KeepObserverMiddleWare  from '../middleware/index'
import * as Tools from '../../tool'


import {
    catchParams
} from '../../../types/pipe'
import {
    reportParams
} from '../../../types/report'
import {
    middlesFn
} from '../../../types/middle'



class KeepObserverPublic {
    private _middleWareInstance: KeepObserverMiddleWare;
    readonly _publicMiddleScopeNames: string[]
    public _develop :boolean;
    public middleScopeNames :string[]


    constructor(config={}) {
        const { develop = false,runMiddleTimeOut=30000  } =config as any
        //当前是否处于开发模式
        this._develop = develop;
        //由子元素继承并重载
        this.middleScopeNames = []
        //由子元素继承
        this._publicMiddleScopeNames = publicMiddleScopeNames
        //注册中间件实例
        this._middleWareInstance = new KeepObserverMiddleWare(Tools.extend({
            develop,
            runMiddleTimeOut 
        },config))
    }

    static extendReportParams = {};
    static extendReport(params:any){
        const newParams = {
            ...this.extendReportParams,
            ...params
        }
        this.extendReportParams = newParams
        return newParams
    }
    

    //注册中间件逻辑
    public useMiddle(scopeName:string,middlesFn:middlesFn):any{
        var _self = this;
        _self._middleWareInstance.use(scopeName,middlesFn)
        return _self
    }
    //执行中间件逻辑
    public runMiddle(scopeName:string,...args:any[]):Promise<{}>{
        var _self = this;
        return _self._middleWareInstance.run(scopeName,...args)
    }
    //整理上报数据
    public handleReportData(params:catchParams){
        const defaultParams = { 
            data:undefined,
            type:'undefined',
            typeName:'undefined'
        }
        //获取到公共中间件聚合
        const extendParams =  (this.constructor as any).extendReportParams
        var reportParams:reportParams<any> = {
            ...defaultParams,
            location : window.location.href,
            environment : window.navigator.userAgent,
            reportTime : new Date().getTime(),
            ...params,
            ...extendParams
        };
        return reportParams
    }


}





export default KeepObserverPublic


