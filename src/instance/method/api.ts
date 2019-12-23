import * as tool from '../../util/tool';
import * as consoleTools from '../../util/console'




export const registerApi = function(apiName:string,cb:(...args:any[])=>any){
    var _self = this;
    if(_self.apis[apiName]){
        return consoleTools.warnError(`apiName:${apiName} is defined`)
    }
    _self.apis[apiName] = cb
}


export const apis = function(apiName:string,...args:any[]){
    var _self = this;
    if(!_self.apis[apiName]){
        return consoleTools.warnError(`apiName:${apiName} is undefined`)
    }
    const callback = _self.apis[apiName]
    return callback(...args)
}