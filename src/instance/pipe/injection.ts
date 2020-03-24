import { consoleTools,tool,devLog} from '@util/index'
import PipeUser from './PipeUser/index'


import { Provider } from '../../types/instance'
import { catchParams } from '../../types/pipe'
import { reportParams } from '../../types/report'




/*
    receive Plug-ins Server
    params
    @Provider  type es6 class  or classInstance 
    explan: Provider class render apply function ,apply runing return method object ,on mounted is keepObsever class 
 */
export const use = function(Provider:Provider) {
    if (!Provider || (!tool.isFunction(Provider) && !tool.isClassObject(Provider)) ) {
        consoleTools.warnError('use method receive provider is not right')
        return false;
    }
    //初始化注入服务
    var config = this._config
    var providerInstalcen = tool.isFunction(Provider)? new Provider(config) : Provider
    //检查注入方法是否存在存在apply,存在则加入到管道流中
    //并检查是否存在返回方法，挂载在自身中,用于对外提供
    var {
        apply = null
    } = providerInstalcen
    if (apply && tool.isFunction(apply)) {
        this.injection(providerInstalcen, apply)
    } else {
        consoleTools.warnError('use method receive provider is not apply method')
        return false;
    }
}





/*
    注入管道
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
    if (!applyFn || !tool.isFunction(applyFn)) {
        consoleTools.warnError('injection receive ApplyFn is undefined or no function')
        return false;
    }
    //cerate pipeUser and add quenen
    const pipeUser = new PipeUser(_self.pipeUser.length,_self)
    _self.pipeUser[_self.pipeUser.length] = pipeUser;
    try {
        // runing apply
        var userRenderMethod = applyFn.call(scope, pipeUser, config);
        //new version mounte api method
        // 1. $keepObserver.registerApi 
        // 2. userRenderMethod : {apiName:callback}
        if(_self.$keepObserver.registerApi && tool.isObject(userRenderMethod) && !tool.isEmptyObject(userRenderMethod)){
            tool.map(userRenderMethod,(callback:Function,apiName:String) => {
                if(!apiName || !callback){
                    return consoleTools.warnError(`apiName is '' or callback is undefined`)
                }
                _self.$keepObserver.registerApi(apiName,callback.bind(scope))
            })
        }
    } catch (e) {
        consoleTools.warnError('injection receive ApplyFn is runing find error:' + e)
    }
}






