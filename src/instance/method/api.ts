
import { consoleTools } from '@util/index'


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
        const errorMsg = `apiName:${apiName} is undefined`
        consoleTools.warnError(errorMsg)
        return _self.runMiddle('error',errorMsg)
    }
    const callback = _self.apis[apiName]
    var res = null
    try{
       var res =  callback(...args)
    }catch(e){
        const errorMsg = `apiName:${apiName} is run find error:${e}`
        consoleTools.warnError(errorMsg)
        _self.runMiddle('error',errorMsg)
    }
    return res
}

