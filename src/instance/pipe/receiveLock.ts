import * as tool from '../../util/tool';



//默认定时打开消息锁
var receiveTime = false;



export var isLock = function() {
    return this.receiveLock
}




export var openLock = function() {
    var _self = this;
    if (_self.receiveLock && _self._config.queueLock) {
        return false;
    }
    _self.receiveLock = true;
    //是否定时强制解锁
    if (_self._config.timeOutUnlock) {
        setTimeout(function() {
            _self.closeLock()
        }, _self._config.receiveUnlockTime)
    }
}




export var closeLock = function() {
    if (!this.receiveLock) {
        return false;
    }
    //恢复定时器
    if (receiveTime) {
        (<any>window).cleanTimeout(receiveTime)
        receiveTime = false;
    }
    this.receiveLock = false;
}