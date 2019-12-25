import * as tool from '../../util/tool';
import { warnError,devWarn } from '../../util/console'

import {
    middlesFn,
    middles
} from '../../types/middle'



class KeepObserverMiddleWare {
    public _develop :boolean;
    private _middles: middles;
    private _runMiddleBuff: any


    constructor({ develop=false }) {
        //当前是否处于开发模式
        this._develop = develop;
        //中间件初始化
        this._middles = {}
        //中间件执行过程中 禁止重复触发 loop
        this._runMiddleBuff = {}
    }



    public run(scopeName:string,...args:any[]):any{
        var _self = this
        if(!_self._middles[scopeName]){
            warnError(`${scopeName} middles function is undefined`,this._develop)
            return false
        }
        if(_self._runMiddleBuff[scopeName]){
            devWarn(this._develop,`${scopeName} middles is run`)
            return false
        }
        _self._runMiddleBuff[scopeName] = true
        const middlesQueue = _self._middles[scopeName]
        const  len = middlesQueue.length 
        var index = 1;
        // 中断方法，停止执行剩下的中间件,直接返回
        const interrupt = (...result)=>{
            index = len;
            _self._runMiddleBuff[scopeName] = false
            return result
        }
        //向下执行中间件
        const runNext = (next)=>(...params)=>{
            if(index === len){
                return params;
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



