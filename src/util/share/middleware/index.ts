import * as Tools from '../../../util/tool';
import * as consoleTools from '../../../util/console'
import { publicMiddleScopeNames } from '../../../constants/index'

import {
    middlesFn,
    middles
} from '../../../types/middle'



class KeepObserverMiddleWare {
    public _develop :boolean;
    private _middles: middles;
    private _runMiddleBuff: any
    private _runTimeOut: number


    constructor({ develop=false,runTimeOut=30000 }) {
        //当前是否处于开发模式
        this._develop = develop;
        //中间件超时时间
        this._runTimeOut = runTimeOut;
        //中间件初始化
        this._middles = {}
        //中间件执行过程中 禁止重复触发 loop
        this._runMiddleBuff = {}
    }


    //公共方法和部分
    static publicMiddles = {}
    static currentRunMiddle = false;
    static usePublishMiddles(scopeName:string,middlesFn:middlesFn):any{
        const _staticSelf = this
        if(_staticSelf.publicMiddles[scopeName]){
            _staticSelf.publicMiddles[scopeName].unshift(middlesFn)
            return _staticSelf.publicMiddles
        }
        _staticSelf.publicMiddles[scopeName] = []
        _staticSelf.publicMiddles[scopeName].unshift(middlesFn)
        return _staticSelf.publicMiddles
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
            if(publicMiddleScopeNames.indexOf(scopeName) > -1){
                return new Promise((resolve)=>resolve(...args))
            }
            consoleTools.warnError(`${scopeName} middles function is undefined`)
            return Promise.reject(`${scopeName} middles function is undefined`)
        }
        if(_self._runMiddleBuff[scopeName]){
            consoleTools.warnError(`${scopeName} middles is run`)
            return Promise.reject(`${scopeName} middles is run`)
        }
        //合并中间件队列
        const publicMiddleQueue = publicMiddles[scopeName] || []
        const middlesQueue = publicMiddleQueue.concat( (_self._middles[scopeName]||[]) )
        const len = middlesQueue.length 
        var index = 1;
        //开始执行
        _self._runMiddleBuff[scopeName] = true;
        (this.constructor as any).currentRunMiddle = scopeName
        return new Promise((resolve,reject)=>{
            //设置超时
            var runTimeout =  setTimeout(()=>{
                index = len;
                _self._runMiddleBuff[scopeName] = false
                const errorMsg = `${scopeName} middles exec is timeout ${this._runTimeOut}ms`
                consoleTools.warnError(errorMsg)
                if(scopeName !== 'error'){
                    _self.throwError(errorMsg)
                }
                reject(errorMsg)
            },this._runTimeOut)
             // 中断方法，停止执行剩下的中间件,直接返回
            const interrupt = (...result)=>{
                index = len;
                clearTimeout(runTimeout)
                _self._runMiddleBuff[scopeName] = false
                return resolve(...result)
            }
            try{
                //向下执行中间件
                const runNext = (next)=>(...params)=>{
                    if(index === len){
                        return params;
                    }
                    index++
                    return next(...params)
                }  
                const exec = middlesQueue.reduce((a , b)=>(...params)=>a(interrupt,runNext(b(...params))))
                exec(interrupt,interrupt)(...args)
            }catch(err){
                _self._runMiddleBuff[scopeName] = false
                clearTimeout(runTimeout)
                const errorMsg = `${scopeName} middles exec is error:`+Tools.toString(err)
                consoleTools.warnError(errorMsg)
                if(scopeName !== 'error'){
                    _self.throwError(errorMsg)
                }
                reject(errorMsg)
            }
        }).finally(()=>{
            (this.constructor as any).currentRunMiddle = false
        })
    }

    

    //抛出中间件错误
    public throwError(...err:any[]){
        this.run('error',...err)
    };
    



}






export default KeepObserverMiddleWare



