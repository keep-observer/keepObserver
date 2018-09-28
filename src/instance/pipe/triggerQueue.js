import * as tool from '../../tool/index.js';


//注册管道接收数据函数
export var registerRecivePipeMessage = function(pipeIndex) {
    var that = this;
    //修正索引
    if (that.pipeUserListener[pipeIndex]) {
        that.$devError('[keepObsever] register recive pipe index is Occupy')
        return false;
    }
    //临时占用
    that.pipeUserListener[pipeIndex] = true;
    //返回一个闭包函数用来接收注册函数
    return function(fn, scope) {
        //接收函数
        if (!fn || !tool.isFunction(fn)) {
            that.$devError('[keepObsever] registerRecivePipeMessage method receive function is not right')
            return false;
        }
        //内部修改作用域调用
        that.receivePipeMessage(fn, scope, pipeIndex)
    }
}




//接收管道消息
export var receivePipeMessage = function(fn, scope, pipeIndex) {
    var that = this;
    //解除占用，注册消息接收
    that.pipeUserListener[pipeIndex] = function() {
        var agrs = tool.toArray(arguments);
        //向注册进来的接收函数发送数据
        if (scope) {
            return fn.apply(scope, agrs)
        }
        return fn(...agrs)
    };
}