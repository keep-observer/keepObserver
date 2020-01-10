import * as tool from '../../../util/tool';
import { warnError,devWarn } from '../../../util/console'

import {
    middlesFn,
    middles
} from '../../../types/middle'



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


    //公共方法和部分
    static publicMiddles = {}
    static usePublishMiddles(scopeName:string,middlesFn:middlesFn):any{
        const _staticSelf = this
        if(_staticSelf.publicMiddles[scopeName]){
            return _staticSelf.publicMiddles[scopeName].unshift(middlesFn)
        }
        _staticSelf.publicMiddles[scopeName] = []
        return _staticSelf.publicMiddles[scopeName].unshift(middlesFn)
    }


    //unshift 从前向后执行 第一个加入的中间件最后一个执行
    public use(scopeName:string,middlesFn:middlesFn):any{
        var _self = this
        if(_self._middles[scopeName]){
            return _self._middles[scopeName].unshift(middlesFn)
        }
        _self._middles[scopeName] = []
        return _self._middles[scopeName].unshift(middlesFn)
    }


    //中间件异步执行
    public run(scopeName:string,...args:any[]):Promise<{}>{
        var _self = this
        //获取到公共中间件聚合
        const publicMiddles =  (this.constructor as any).publicMiddles
        if(!_self._middles[scopeName] && !publicMiddles[scopeName]){
            devWarn(this._develop,`${scopeName} middles function is undefined`)
            return Promise.resolve(args)
        }
        if(_self._runMiddleBuff[scopeName]){
            devWarn(this._develop,`${scopeName} middles is run`)
            return Promise.reject(`${scopeName} middles is run`)
        }
        _self._runMiddleBuff[scopeName] = true;
        //合并中间件队列
        const publicMiddleQueue = publicMiddles[scopeName] || []
        const middlesQueue = publicMiddleQueue.concat( (_self._middles[scopeName]||[]) )
        const len = middlesQueue.length 
        var index = 1;
        return new Promise((resolve,reject)=>{
             // 中断方法，停止执行剩下的中间件,直接返回
            const interrupt = (...result)=>{
                index = len;
                _self._runMiddleBuff[scopeName] = false
                return resolve(result)
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
            try{
                exec(interrupt,interrupt)(...args)
            }catch(err){
                warnError(`${scopeName} middles exec is error:`+tool.toString(err),_self._develop)
                reject(`${scopeName} middles exec is error:`+tool.toString(err))
            }
        })
    }



}






export default KeepObserverMiddleWare



