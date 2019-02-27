import KeepObserverDetault from '../../default/index.js';
import * as tool from '../../tool/index.js';


import * as injectionServer from './injection.js'
import * as receiveServer from './receiveQueue.js'
import * as triggerServer from './triggerQueue.js'
import * as queueLockServer from './receiveLock.js'
import * as preventAnomaly from './preventAnomaly.js'





class keepObserverPipe extends KeepObserverDetault {

    constructor(keepObserver, config,props) {
        super()

        //获取实例配置
        this._config = config;
        //获取实例属性
        this._props = props;
        //获取kp实例
        this.$keepObserver = keepObserver;
        //消息是否在等待
        this.waiting = false;
        //消息接收锁
        this.receiveLock = false;

        //堆栈计数对象
        this.stackCountBuff = {};
        //堆栈运行定时器
        this.stackTimeFlag = false;
        //消息队列
        this.messageQueue = [];
        //管道用户
        this.pipeUser = [];


        //混入自身方法
        this.$mixin(injectionServer)
        this.$mixin(receiveServer)
        this.$mixin(triggerServer)
        this.$mixin(queueLockServer)
        this.$mixin(preventAnomaly)
    }


    //提供需要挂载在keepObserver上的方法
    apply() {
        return {
            use: this.use
        }
    }
}






//提供混合管道入口
var mixinPipe = function(keepObserver, config ,props) {
    //这里不用做判断,最初的模块挂载到实例
    var Pipe = new keepObserverPipe(keepObserver, config ,props)
    var applyInjection = Pipe.apply()
        //循环挂载到keepobserver上
    for (var key in applyInjection) {
        Object.defineProperty(keepObserver,key,{
            configurable: false,
            enumerable: true,
            value:(function(key){
                return function(){
                    var agrs = tool.toArray(arguments)
                    var fn = applyInjection[key]
                    return fn.apply(Pipe, agrs)
                }
            })(key)
        })
    }
}
export default mixinPipe