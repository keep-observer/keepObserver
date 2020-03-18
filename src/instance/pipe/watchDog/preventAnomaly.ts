import { consoleTools,tool } from '@util/index'

//防止堆栈错误
export var preventStackError = function(msgItem) {
    var {
        params,
        pipeIndex
    } = msgItem
    if (!params || !tool.isExist(pipeIndex) || !tool.isExist(params.data)){
        return true;
    }
    //是否该消息已经进入屏蔽阶段
    if (!this.pipeUser[pipeIndex]) {
        //是否是开发环境
        if (this._config.develop) {
            consoleTools.warnError('send pipe Message Maybe happend Endless loop , will ignore in the message')
        }
        return true
    }
    //json解析成字符串加密为KEY 这里可能存在JSON转义出现错误的可能
    //这里暂时有点疑问，data里面可能出现window之类的 会导致json解析失败
    try {
        var key = JSON.stringify(params.data)
    } catch (e) {
        consoleTools.warnError('find error : ' + e)
        // return true
        const { type='undefined' ,typeName='undefined' } = params
        var key = type+typeName+tool.toString(e)
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
        pipeIndex
    } = msgItem
    if (count > 10 && count < 20) {
        consoleTools.warnError('send  pipe Message during 1000ms in Over 20 times. maybe Anomaly ')
        return false
    }
    if (count > 20) {
        //从管道中卸载
        this.pipeUser[pipeIndex] = null
        consoleTools.warnError('send pipe Message during 1000ms in Over 20 times,maybe happend Endless loop');
        return true
    }
    return false;
}



//恢复计数
export var resetStackCount = function() {
    var _self = this;
    //启动定时器每秒清理一次计数
    if (!_self.stackTimeFlag) {
        _self.stackTimeFlag = true;
        setTimeout(function() {
            _self.stackCountBuff = {}
            _self.stackTimeFlag = false;
        }, 1000)
    }
}

