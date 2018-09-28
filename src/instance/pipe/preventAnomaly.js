import * as tool from '../../tool/index.js';
import md5 from '../../tool/md5.js'

//防止堆栈错误
export var preventStackError = function(msgItem) {
    var {
        msg,
        pipeIndex
    } = msgItem
    if (!msg || !pipeIndex || !msg.data) {
        return true;
    }
    //是否该消息已经进入屏蔽阶段
    if (this.ignoreBuff[pipeIndex]) {
        //是否是开发环境
        if (this._config.develop) {
            this.$devError('[keepObserver] send pipe Message Maybe happend Endless loop , will ignore in the message')
        }
        return true
    }
    //json解析成字符串加密为KEY 这里可能存在JSON转义出现错误的可能
    try {
        var key = JSON.stringify(msg.data)
    } catch (e) {
        this.$devError('[keepObserver] find error : ' + e)
        return true
    }
    //触发计数
    if (!this.stackCountBuff[key]) {
        this.stackCountBuff[key] = 1;
    } else {
        this.stackCountBuff[key]++;
    }
    //启动定时器每秒恢复一次计数
    this.resetStackCount()
    return this.judgeAnomaly(this.stackCountBuff[key], msgItem)
}



//判断是否出现异常错误
export var judgeAnomaly = function(count, msgItem) {
    var {
        msg,
        pipeIndex
    } = msgItem
    if (count > 15 && count < 30) {
        this.$devWarn('[keepObserver] send  pipe Message during 1000ms in Over 15 times. maybe Anomaly ')
        return false
    }
    if (count > 30) {
        //进入屏蔽
        this.ignoreBuff[pipeIndex] = true
        this.pipeUserListener[pipeIndex] = true
        this.$devError('[keepObserver] send pipe Message during 1000ms in Over 30 times,maybe happend Endless loop');
        return true
    }
    return false;
}



//恢复计数
export var resetStackCount = function() {
    var that = this;
    //启动定时器每秒清理一次计数
    if (!that.stackTimeFlag) {
        that.stackTimeFlag = true;
        setTimeout(function() {
            that.stackCountBuff = {}
            that.stackTimeFlag = false;
        }, 1000)
    }
}