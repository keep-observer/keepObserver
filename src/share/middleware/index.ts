import * as tool from '../../util/tool';
import { warnError } from '../../util/console'

import {
    middlesFn,
    middles
} from '../../types/middle'



class KeepObserverMiddleWare {
    public _develop :boolean;
    private _middles: middles;


    constructor({ develop=false }) {
        //当前是否处于开发模式
        this._develop = develop;
        //中间件初始化
        this._middles = {}
    }


    public static extend(_middless:middles){
        // var _self = super
        // return _self._middles = tool.extend({},_middless,_self._middles)
    }


    public check(scopeName:string):boolean{
        var _self = this
        return !!_self._middles[scopeName]
    }


    public run(scopeName:string,...args:any[]):any{
        var _self = this
        if(!_self._middles[scopeName]){
            return warnError(`${scopeName} middles function is undefined`,this._develop)
        }
        const middlesQueue = _self._middles[scopeName]
        const  len = middlesQueue.length 
        var index = 1;
        // 中断方法，停止执行剩下的中间件,直接返回
        const interrupt = (...result)=>{
            // res(component)
            index = len;
            return result
        }
        //向下执行中间件
        const runNext = (next)=>(...params)=>{
            if(index === len){
                return;
            }
            index++
            return next(...params)
        }  
        const exec = middlesQueue.reduce((a , b)=>(...params)=>a(interrupt,runNext(b(...params))))
        return exec(interrupt,interrupt)(...args)
    }



    public use(scopeName:string,middlesFn:middlesFn):any{
        var _self = this
        if(_self._middles[scopeName]){
            return _self._middles[scopeName].push(middlesFn)
        }
        _self._middles[scopeName] = []
        return _self._middles[scopeName].push(middlesFn)
    }


}






export default KeepObserverMiddleWare



