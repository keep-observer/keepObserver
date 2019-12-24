import * as tool from '../../util/tool';
import { warnError,devLog } from '../../util/console'
import  KeepObserverMiddleWare  from '../middleware/index'


import {
    pipeOptons
} from '../../types/pipe'
import {
    reportParams
} from '../../types/report'
import {
    middlesFn
} from '../../types/middle'



class KeepObserverPublic {
    private _middleWareInstance: KeepObserverMiddleWare;
    private _eventListener : any[];
    private _publicMiddleScopeNames: string[];
    public _develop :boolean;


    constructor(config={}) {
        const { develop = false, } =config as any
        //当前是否处于开发模式
        this._develop = develop;
        //事件队列
        this._eventListener = [];
        //公共中间件事件
        this._publicMiddleScopeNames = [ 'noticeReport' ];
        //注册中间件实例
        this._middleWareInstance = new KeepObserverMiddleWare(config)
    }
    

    //注册中间件逻辑
    public useMiddle(scopeName:string,middlesFn:middlesFn):any{
        var _self = this;
        return _self._middleWareInstance.use(scopeName,middlesFn)
    }
    //检查中间件是否存在
    public checkMiddle(scopeName:string):boolean{
        var _self = this;
        return _self._middleWareInstance.check(scopeName)
    }
    //执行中间件逻辑
    public runMiddle(scopeName:string,...args:any[]):any{
        var _self = this;
        return _self._middleWareInstance.run(scopeName,...args)
    }

    
    public addReportListener(callback) {
        var _self = this;
        if (callback) {
            _self._eventListener.push(callback)
        }
    }
    public noticeReport(reportParams:reportParams,control:pipeOptons) {
        var _self = this;
        if (_self._eventListener.length === 0) {
            return false;
        }
        //通知上报
        return  Promise.all(_self._eventListener.map( (item)=>{
            if (tool.isFunction(item)) {
                //执行中间件
                const [ scopeName ] = _self._publicMiddleScopeNames
                if(_self.checkMiddle(scopeName)){
                    const reuslt:{ reportParams:reportParams,control:pipeOptons } = this.runMiddle(scopeName,reportParams,control)
                    if(reuslt && !tool.isEmptyObject(reuslt) && reuslt['reportParams'] && reuslt['control'] ){
                        reportParams = reuslt['reportParams'] 
                        control = reuslt['control'] 
                    }   
                }
                devLog(_self._develop,reportParams,control)
                //通用中间件执行位置
                return item(reportParams, control);
            }
            const message = `eventListener ${tool.toString(item)} is not Function`
            warnError(message,_self._develop)
            return Promise.reject(message)
        }))
    }

}





export default KeepObserverPublic


