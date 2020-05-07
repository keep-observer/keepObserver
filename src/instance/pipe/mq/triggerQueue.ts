import { consoleTools,Tools } from '@util/index'

import { catchParams } from '../../../types/pipe'


//发送消息在管道内流通
export var sendPipeMessage = function(id:number, params:catchParams,) {
    var _self = this;
    var msgItem = {
        id: id,
        params: params,
    };
    return new Promise((res,rej)=>{
        //如果正在执行
        if (_self.isRun) {
            return rej(false);
        }
        //是否消息队列加锁,并且防止异常消息
        //进入消息队列
        _self.messageQueue.push(msgItem);
        //异步执行消息队列分发
        setTimeout(function() {
            //获取消息队列数组快照
            var queue = _self.messageQueue.map(e=>e);
            //清空队列
            _self.messageQueue = [];
            //通知监听
            _self.noticeListener(queue).then(res,res)
        })
    })
}





//通知监听
export var noticeListener = function(queue) {
    var _self = this;
    if (!Tools.isArray(queue) || queue.length === 0) {
        return Promise.reject();
    }
    //接收消息进入等待状态
    _self.isRun = true;
    //分发处理消息
    return Promise.all(queue.map((item)=>{
        var {
            id,
            params,
        } = item;
        //消息分发
        return Promise.all(Tools.mapToArray(_self.consumerMap,(cb,pipeId)=>{
            //id修正
            pipeId = !Tools.isNumber(pipeId)? parseInt(pipeId):false
            if(!Tools.isNumber(pipeId)){
                return false;
            }
            //判断是否是正确注册接收函数
            if (!Tools.isFunction(cb)) {
                return false;
            }
            //不允许自发自收
            if (id === pipeId) {
                return false;
            }
            //分发
            try {
                //执行分发
                return cb(params) || Promise.resolve()
            } catch (e) {
                const errMsg = 'handle message is runing error:' + e
                consoleTools.warnError(errMsg)
                _self.$pipe.$keepObserver.runMiddle('error',errMsg)
            }
        }))
    })).finally(()=>{
        //执行状态结束，放到下个阶段，屏蔽处理阶段立即发起的消息
        _self.isRun = false;
    })
}



