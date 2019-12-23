import * as tool from '../../util/tool';
import { warnError } from '../../util/console'
import  KeepObserverMiddleWare  from '../middleware/index'

import {
    pipeOptons
} from '../../types/pipe'
import {
    reportParams
} from '../../types/report'



class KeepObserverPublic {
    private eventListener : any[];
    private middleWareInstance: KeepObserverMiddleWare;
    public _develop :boolean;

    constructor(config:any) {
        const { develop = false } =config
        //当前是否处于开发模式
        this._develop = develop;
        //注册中间件
        this.middleWareInstance = new KeepObserverMiddleWare(config)
    }
    
    //注册中间件逻辑
    public useMiddle(){
    }
    //执行中间件逻辑
    public runMiddle(){
    }

    
    public addReportListener(callback) {
        if (callback) {
            this.eventListener.push(callback)
        }
    }
    public noticeReport(reportParams:reportParams,control:pipeOptons) {
        var _self = this;
        if (_self.eventListener.length === 0) {
            return false;
        }
        //通知上报
        return Promise.all(_self.eventListener.map(function(item) {
            if (tool.isFunction(item)) {
                return item(reportParams, control);
            }
            const message = `eventListener ${tool.toString(item)} is not Function`
            warnError(message,_self._develop)
            return Promise.reject(message)
        }))
    }

}




export default KeepObserverPublic

