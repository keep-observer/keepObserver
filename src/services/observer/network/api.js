/*
    	停止监听
     */
export var stopObserver = function() {
    window.XMLHttpRequest.prototype.open = this._open
    window.XMLHttpRequest.prototype.send = this._send
    window.XMLHttpRequest.prototype.setRequestHeader = this._setRequestHeader
    this._open = null;
    this._send = null
    this.__setRequestHeader = null;
}



/*
	开始监听
 */
export var startObserver = function() {
    //开启网络拦截监控
    this._handleInit();
}