import * as tool from '../../../util/tool';





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
    this.receiveLock = false;
}