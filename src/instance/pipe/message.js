import * as tool from '../../tool/index.js';


//注册管道接收数据函数
//屏蔽自发自收消息
export var registerRecivePipeMessage = function(pipeIndex) {
    var that = this;
    //修正索引
    if (that.pipeUserListener[pipeIndex]) {
        return false;
    }
    //创建一个用来接收消息消息的函数
    var onReciveMessage = false;
    var runingScope = false;
    //添加到管道消息队列
    that.pipeUserListener[pipeIndex] = function() {
        var agrs = tool.toArray(arguments);
        //如果未注册
        if (!onReciveMessage) {
            return false;
        }
        //是否传入作用域
        if (runingScope) {
            return onReciveMessage.apply(runingScope, agrs)
        }
        return onReciveMessage(...agrs)
    };
    //返回一个闭包函数用来接收注册函数
    return function(fn, scope) {
        //接收函数
        if (fn && tool.isFunction(fn)) {
            onReciveMessage = fn
        }
        //函数作用域
        if (scope) {
            runingScope = scope
        }
    }
}




//发送消息在管道内流通
export var sendPipeMessage = function(pipeIndex, msg, options) {
    var that = this;
    //消息通知
    that.pipeUserListener.map(function(item, index) {
        //不允许自发自收
        if (pipeIndex === index) {
            return false;
        }
        try {
            item(msg, options)
        } catch (e) {
            that.$devError('keepObserver use pipe message notice is runing error:' + e)
        }
    })
}