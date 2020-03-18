import { KeepObserverPublic,KeepObserverMiddleWare,tool,getDeviceId } from '@util/index'
import defaultConfig from '../defaultConfig';
import { Provider } from '../../types/instance'

//type
import {
    middlesFn
} from '../../types/middle'



//拓展中间件实例
export const extendMiddleScopeName = function(_middleScopeNames:string[]){
    const { middleScopeNames } = this
    if(tool.isEmptyArray(_middleScopeNames)) return;
    return this.middleScopeNames = tool.toArray(new Set(middleScopeNames.concat(_middleScopeNames)))
}


//主实例重载中间件服务
export const useMiddle = function(scopeName:string,middlesFn:middlesFn){
    return KeepObserverMiddleWare.usePublishMiddles(scopeName,middlesFn)
}

