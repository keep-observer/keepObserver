

/*
    停止捕获
*/
export var stopObserver = function() {
    this.isCatch = false
}




/*
	开始捕获
 */
export var startObserver = function() {
    this.isCatch = true
}



/*
    取消拦截
*/
export var cancelPatch = function(){
    //这种方式会和angular 6的zone 等polyfills.js产生冲突
    (window as any).XMLHttpRequest.prototype.open = this._open;
    (window as any).XMLHttpRequest.prototype.send = this._send;
    (window as any).XMLHttpRequest.prototype.setRequestHeader = this._setRequestHeader;
    (window as any).fetch = this._fetch;
    this._open = null;
    this._send = null
    this._setRequestHeader = null;
    this._fetch = null
}