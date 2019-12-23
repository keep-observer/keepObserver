import * as tool from '../../util/tool';
import * as consoleTools from '../../util/console'
import { Provider } from '../../types/instance'

import { pipeUser } from '../../types/pipe'


/*
    receive Plug-ins Server
    params
    @Provider  type es6 class  or classInstance 
    explan: Provider class render apply function ,apply runing return method object ,on mounted is keepObsever class 
 */
export var use = function(Provider:Provider,) {
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
export var injection = function(scope, applyFn) {
    var _self = this;
    var config = this._config
    //check data
    if (!applyFn || !tool.isFunction(applyFn)) {
        consoleTools.warnError('injection receive ApplyFn is undefined or no function')
        return false;
    }
    //cerate pipe listener
    var pipeMethod = _self.registerPipeListenerUser();
    try {
        // runing apply
        var userRenderMethod = applyFn.call(scope, pipeMethod, config);
        //mounte method
        if(tool.isObject && !tool.isEmptyObject(userRenderMethod)){
            _self.oldVsersion_Danger_MixinKoInstance(scope, userRenderMethod);
            return 
        }
        //new version mounte api method
        // 1. $keepObserver.registerApi 
        // 2. userRenderMethod : [{apiName,callback}...]
        if(_self.$keepObserver.registerApi && tool.isArray(userRenderMethod) && !tool.isEmptyArray(userRenderMethod)){
            userRenderMethod.forEach(el => {
                if(tool.isObject(el) && !tool.isEmptyObject(el)){
                    const { apiName='', callback=undefined } = el
                    if(!apiName || !callback){
                        return consoleTools.warnError(`apiName is '' or callback is undefined`)
                    }
                    _self.registerApi(apiName,callback)
                }
            });
        }
    } catch (e) {
        consoleTools.warnError('injection receive ApplyFn is runing find error:' + e)
    }
}


/*
    注册管道用户方法
    params
    null
    ***********************
    return pipeMethod {
        registerRecivePipeMessage
        sendPipeMessage
    }
 */
export var registerPipeListenerUser = function() {
    var _self = this;
    //pipe index
    var pipeIndex = _self.pipeUser.length;
    //pipe user obj
    var pipeUser:pipeUser = {
        //index
        pipeIndex: pipeIndex,
        //receiveCallBack
        receiveCallback: null,
        //send message
        sendPipeMessage: function() {
            return _self.sendPipeMessage(pipeIndex, ...arguments)
        },
        //register message
        registerRecivePipeMessage:null
    };
    //add listener
    _self.pipeUser[pipeIndex] = pipeUser;
    //register receive message listener
    pipeUser.registerRecivePipeMessage = _self.registerRecivePipeMessage(pipeIndex);
    //render pipe method
    var renderMethod = {
        registerRecivePipeMessage: function() {
            if (!_self.pipeUser[pipeIndex]) return false;
            return pipeUser.registerRecivePipeMessage(...arguments)
        },
        sendPipeMessage: function() {
            if (!_self.pipeUser[pipeIndex]) return false;
            return pipeUser.sendPipeMessage(...arguments)
        }
    };
    return renderMethod
}




