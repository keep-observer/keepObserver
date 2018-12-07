import KeepObserverDetault from '../../default/index.js';
import * as tool from '../../tool/index.js';


import * as updateServer from './update.js'




class keepObserverMethod extends KeepObserverDetault {

    constructor(keepObserver, config) {
        super()
        //获取实例配置
        this._config = config;
        //获取kp实例
        this.$keepObserver = keepObserver;
        //混入自身方法
        this.$mixin(updateServer)
    }


    //提供需要挂载在keepObserver上的方法
    apply() {
        return {
            updateVersionClearCache: this.updateVersionClearCache
        }
    }
}






//提供混合方法入口
var mixinMethod = function(keepObserver, config) {
    //这里不用做判断,最初的模块挂载到实例
    var Pipe = new keepObserverMethod(keepObserver, config)
    var applyInjection = Pipe.apply()
        //循环挂载到keepobserver上
    for (var key in applyInjection) {
        keepObserver[key] = function() {
            var agrs = tool.toArray(arguments)
            var fn = applyInjection[key]
            return fn.apply(Pipe, agrs)
        }
    }
}





export default mixinMethod


