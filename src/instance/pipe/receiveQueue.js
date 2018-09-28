import * as tool from '../../tool/index.js';




//发送消息在管道内流通
export var sendPipeMessage = function(pipeIndex, msg, options) {
    var that = this;
    var msgItem = {
        pipeIndex: pipeIndex,
        msg: msg,
        options: options,
    };
    //是否消息队列加锁,并且防止异常消息
    if (that.isLock() || that.preventStackError(msgItem)) {
        return false;
    }
    //进入消息队列
    that.messageQueue.push(msgItem);
    //如果正在执行
    if (that.waiting) {
        return false;
    }
    //异步执行消息队列分发
    setTimeout(function() {
        //获取消息队列数组快照
        var queue = tool.extend([], that.messageQueue);
        //清空队列
        that.messageQueue = [];
        //通知监听
        noticeListener.call(that, queue)
    })
}


//通知监听
export var noticeListener = function(queue) {
    var that = this;
    if (!tool.isArray(queue) || queue.length === 0) {
        return false;
    }
    //接收消息进入等待状态
    that.waiting = true;
    //分发处理消息
    for (var i = 0; i < queue.length; i++) {
        var {
            pipeIndex,
            msg,
            options
        } = queue[i];
        //消息分发
        that.pipeUserListener.map(function(itemFn, index) {
            //判断是否是正确注册接收函数
            if (!itemFn || !tool.isFunction(itemFn)) {
                return false;
            }
            //不允许自发自收
            if (pipeIndex === index) {
                return false;
            }
            //分发
            try {
                //消息队列加锁
                that.openLock();
                //执行分发
                var result = itemFn(msg, options);
                //消息队列解锁
                //如果返回值是promise或者存在then将解锁放入回调
                if (result &&
                    tool.isObject(result) &&
                    (result instanceof Promise ||
                        (result.then && tool.isFunction(result.then)))) {
                    result.then(that.closeLock, that.closeLock)
                } else {
                    that.closeLock()
                }
            } catch (e) {
                that.closeLock()
                that.$devError('[keepObserver] use pipe message notice is runing error:' + e)
            }
        });
    }
    //等待状态结束
    that.waiting = false;
}