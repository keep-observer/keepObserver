import * as tool from '../../tool/index.js';


//默认定时打开消息锁
var receiveTime = false;



export var isLock = function() {
    return this.receiveLock
}




export var openLock = function() {
    var that = this;
    if (that.receiveLock && that._config.queueLock) {
        return false;
    }
    that.receiveLock = true;
    //是否定时强制解锁
    if (that._config.timeOutUnlock) {
        setTimeout(function() {
            that.closeLock()
        }, that._config.receiveUnlockTime)
    }
}




export var closeLock = function() {
    if (!this.receiveLock) {
        return false;
    }
    //恢复定时器
    if (receiveTime) {
        cleanTimeout(receiveTime)
        receiveTime = false;
    }
    this.receiveLock = false;
}