import { consoleTools,tool } from '@util/index'

import { catchParams } from '../../../types/pipe'


//发送消息在管道内流通
export var sendPipeMessage = function(id:number, params:catchParams,) {
    var _self = this;
    var msgItem = {
        id: id,
        params: params,
    };
    //是否消息队列加锁,并且防止异常消息
    //进入消息队列
    _self.messageQueue.push(msgItem);
    //如果正在执行
    if (_self.waiting) {
        return false;
    }
    //异步执行消息队列分发
    setTimeout(function() {
        //获取消息队列数组快照
        var queue = _self.messageQueue.map(e=>e);
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
            id,
            params,
        } = queue[i];
        //消息分发
        tool.map(_self.consumerMap,(cb,pipeId)=>{
            //判断是否是正确注册接收函数
            if (!tool.isFunction(cb)) {
                return false;
            }
            //不允许自发自收
            if (id === pipeId) {
                return false;
            }
            //分发
            try {
                //执行分发
                var result = cb(params);
            } catch (e) {
                consoleTools.warnError('use pipe message notice is runing error:' + e)
            }
        })
    }
    //等待状态结束
    _self.waiting = false;
}



