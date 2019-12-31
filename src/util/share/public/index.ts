import * as tool from '../../../util/tool';
import { warnError,devLog } from '../../../util/console'
import  KeepObserverMiddleWare  from '../middleware/index'


import {
    reportParams
} from '../../../types/report'
import {
    middlesFn
} from '../../../types/middle'



class KeepObserverPublic {
    private _middleWareInstance: KeepObserverMiddleWare;
    public _publicMiddleScopeNames: string[];
    public _develop :boolean;


    constructor(config={}) {
        const { develop = false, } =config as any
        //当前是否处于开发模式
        this._develop = develop;
        //公共中间件事件
        this._publicMiddleScopeNames = [ 'noticeReport' ];
        //注册中间件实例
        this._middleWareInstance = new KeepObserverMiddleWare(config)
    }
    

    //注册中间件逻辑
    public useMiddle(scopeName:string,middlesFn:middlesFn):any{
        var _self = this;
        _self._middleWareInstance.use(scopeName,middlesFn)
        return _self
    }
    //执行中间件逻辑
    public runMiddle(scopeName:string,...args:any[]):any{
        var _self = this;
        _self._middleWareInstance.run(scopeName,...args)
        return _self
    }

    
    
    //兼容老版本做保留,内部使用中间件替换
    public addReportListener(callback) {
        var _self = this;
        if (callback) {
            const [ scopeName ] = _self._publicMiddleScopeNames
            //  1 -> 2 -> 3 -> 2 -> 1
            this.useMiddle(scopeName,(interrupt,next)=>(reportParams:reportParams)=>{
                devLog(_self._develop,reportParams)
                next(reportParams)
                return callback(reportParams)
            })
        }
    }
    //run noticeReort middle
    public noticeReport(reportParams:reportParams) {
        var _self = this;
        //执行中间件
        const [ scopeName ] = _self._publicMiddleScopeNames
        this.runMiddle(scopeName,reportParams)
    }


}





export default KeepObserverPublic

