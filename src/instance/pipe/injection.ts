import { consoleTools,Tools} from '@util/index'



import PipeUser from './PipeUser/index'
import { Provider } from '../../types/instance'




/*
    receive Plug-ins Server
    params
    @Provider  type es6 class  or classInstance 
    explan: Provider class render apply function ,apply runing return method object ,on mounted is keepObsever class 
 */
export const use = function(Provider:Provider):Promise<{}>{
    var _self = this;
    const { isCheckRepeatUse } = _self._config
    if (!Provider || (!Tools.isFunction(Provider) && !Tools.isClassObject(Provider)) ) {
        const errorMsg = `use method receive provider is not right`
        consoleTools.warnError(errorMsg)
        return _self.$keepObserver.runMiddle('error',errorMsg)
    }
    //初始化注入服务
    var config = _self._config
    var providerInstalcen = Tools.isFunction(Provider)? new Provider(config) : Provider
    //校验重复注入
    //mind UglifyJS  class = n o a b c ...
    if(isCheckRepeatUse){
        const providerName = Tools.isObject(providerInstalcen)&&providerInstalcen.constructor?providerInstalcen.constructor.name:undefined
        const serverId = providerName+'-'+Tools.getHashCode(providerInstalcen)
        if(!providerName || this.pipeMap[serverId]){
            const errorMsg = !providerName?`Provider.constructor is undefined`:`${providerName} already injection server`
            consoleTools.warnError(errorMsg)
            return _self.$keepObserver.runMiddle('error',errorMsg)
        }
        this.pipeMap[serverId] = true
    }
    //检查注入方法是否存在存在apply,存在则加入到管道流中
    //并检查是否存在返回方法，挂载在自身中,用于对外提供
    var {
        apply = null
    } = providerInstalcen
    if (apply && Tools.isFunction(apply)) {
        this.injection(providerInstalcen, apply)
        return Promise.resolve(providerInstalcen)
    } else {
        const errorMsg = `use method receive provider is not apply method`
        consoleTools.warnError(errorMsg)
        return _self.$keepObserver.runMiddle('error',errorMsg)
    }
}





/*
    注入
    params
    @scope  type object 
        explan:this指向
    @applyFn type function
        explan: apply function
 */
export const injection = function(scope, applyFn) {
    var _self = this;
    var config = this._config
    //check data
    if (!applyFn || !Tools.isFunction(applyFn)) {
        const errorMsg = `injection receive because Provider apply is undefined or no function`
        consoleTools.warnError(errorMsg)
        return _self.$keepObserver.runMiddle('error',errorMsg)
    }
    //cerate pipeUser and add quenen
    const pipeUser = new PipeUser(_self.pipeUser.length,_self,scope)
    try {
        // runing apply
        var userRenderMethod = applyFn.call(scope, pipeUser, config);
        //new version mounte api method
        // 1. $keepObserver.registerApi 
        // 2. userRenderMethod : {apiName:callback}
        if(_self.$keepObserver.registerApi && Tools.isObject(userRenderMethod) && !Tools.isEmptyObject(userRenderMethod)){
            Tools.map(userRenderMethod,(callback:Function,apiName:String) => {
                if(!apiName || !callback){
                    const errorMsg = `apiName is '' or callback is undefined`
                    consoleTools.warnError(errorMsg)
                    return _self.$keepObserver.runMiddle('error',errorMsg)
                }
                _self.$keepObserver.registerApi(apiName,callback.bind(scope))
            })
        }
        _self.pipeUser[_self.pipeUser.length] = pipeUser;
    } catch (e) {
        const errorMsg = 'injection receive Provider apply is runing find error:' + e
        consoleTools.warnError(errorMsg)
        return _self.$keepObserver.runMiddle('error',errorMsg)
    }
}






