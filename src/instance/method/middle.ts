import { KeepObserverPublic,KeepObserverMiddleWare,tool,getDeviceId } from '@util/index'
import defaultConfig from '../defaultConfig';
import { Provider } from '../../types/instance'

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

