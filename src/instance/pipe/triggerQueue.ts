import { consoleTools,tool } from '@util/index'

import { catchParams } from '../../types/pipe'


//发送消息在管道内流通
export var sendPipeMessage = function(pipeIndex:number, params:catchParams,) {
    var _self = this;
    var msgItem = {
        pipeIndex: pipeIndex,
        params: params,
    };
    //是否消息队列加锁,并且防止异常消息
    if (_self.isLock() || _self.preventStackError(msgItem)) {
        return false;
    }
    //进入消息队列
    _self.messageQueue.push(msgItem);
    //如果正在执行
    if (_self.waiting) {
        return false;
    }
    //异步执行消息队列分发
    setTimeout(function() {
        //获取消息队列数组快照
        var queue = tool.extend([], _self.messageQueue);
        //清空队列
        _self.messageQueue = [];
        //通知监听
        noticeListener.call(_self, queue)
    })
}





//通知监听
export var noticeListener = function(queue) {
    var _self = this;
    if (!tool.isArray(queue) || queue.length === 0) {
        return false;
    }
    //接收消息进入等待状态
    _self.waiting = true;
    //分发处理消息
    for (var i = 0; i < queue.length; i++) {
        var {
            pipeIndex,
            params,
        } = queue[i];
        //消息分发
        _self.pipeUser.map(function(item, index) {
            //判断是否是正确注册接收函数
            if (!item || !item.receiveCallback || !tool.isFunction(item.receiveCallback)) {
                return false;
            }
            //不允许自发自收
            if (pipeIndex === index) {
                return false;
            }
            var receiveCallback = item.receiveCallback;
            //分发
            try {
                //消息队列加锁
                _self.openLock();
                //执行分发
                var result = receiveCallback(params);
                //消息队列解锁
                //如果返回值是promise或者存在then将解锁放入回调
                if (result &&
                    tool.isObject(result) &&
                    (result instanceof Promise ||
                        (result.then && tool.isFunction(result.then)))) {
                    result.then(_self.closeLock, _self.closeLock)
                } else {
                    _self.closeLock()
                }
            } catch (e) {
                _self.closeLock()
                consoleTools.warnError('use pipe message notice is runing error:' + e)
            }
        });
    }
    //等待状态结束
    _self.waiting = false;
}



