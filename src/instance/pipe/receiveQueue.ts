import * as tool from '../../tool/index.js';



//注册管道接收数据函数
export var registerRecivePipeMessage = function(pipeIndex) {
    var that = this;
    //修正索引
    if (that.pipeUser[pipeIndex].receiveCallback) {
        that.$devError('[keepObsever] register recive pipe index is Occupy')
        return false;
    }
    //返回一个闭包函数用来接收注册函数
    return function(fn, scope) {
        //接收函数
        if (!fn || !tool.isFunction(fn)) {
            that.$devError('[keepObsever] registerRecivePipeMessage method receive function is not right')
            return false;
        }
        //内部修改作用域调用
        that.pipeUser[pipeIndex].receiveCallback = function() {
            var agrs = tool.toArray(arguments);
            //向注册进来的接收函数发送数据
            if (scope) {
                return fn.apply(scope, agrs)
            }
            return fn(...agrs)
        };
    }
}