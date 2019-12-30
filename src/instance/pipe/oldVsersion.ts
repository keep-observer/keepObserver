import { consoleTools,tool } from '@util/index'
import { Provider } from '../../types/instance'


/*
    注入对象方法挂载到keepObserver中
    ps-> old-version  Compatibility method 
    params 
    @scope  type object 
        explan:this指向
    @renders type object
        explan:render mounted keepObserver method list
 */
export var oldVsersion_Danger_MixinKoInstance = function(scope, renders) {
    var _self = this;
    if (!renders || tool.isEmptyObject(renders)) {
        consoleTools.warnError('injection ApplyFn return Object is undefined')
        return false;
    }
    var keepObserver = _self.$keepObserver
    for (var key in renders) {
        //检查方法
        var fn = renders[key]
        if (!fn || !tool.isFunction(fn)) {
            consoleTools.warnError('injection ApplyFn return Object attr' + key + 'is not right')
        }
        //是否存在同名方法
        if (keepObserver[key]) {
            consoleTools.warnError('injection Discover namesake methods')
            continue;
        }
        //挂载到keepObserver 实例
        Object.defineProperty(keepObserver,key,{
            configurable: false,
            enumerable: true,
            value:(function(fn) {
                return function(){
                    var agrs = tool.toArray(arguments)
                    try {
                        return fn.apply(scope,agrs)
                    } catch (e) {
                        consoleTools.warnError('injection  methods ' + key + ' runing find error' + e)
                    } 
                }  
            })(fn)
        })
    }
}


