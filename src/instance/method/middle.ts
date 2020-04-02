import { KeepObserverMiddleWare } from '@util/index'


//type
import {
    middlesFn
} from '../../types/middle'




//主实例重载中间件服务
export const useMiddle = function(scopeName:string,middlesFn:middlesFn){
    if(this.middleScopeNames.indexOf(scopeName)=== -1){
        this.middleScopeNames.push(scopeName)
    }
    return KeepObserverMiddleWare.usePublishMiddles(scopeName,middlesFn)
}

//当前正在运行的中间件实例
export const getRunMiddle = function(){
    return KeepObserverMiddleWare.currentRunMiddle
}
