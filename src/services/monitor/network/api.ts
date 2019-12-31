

/*
    停止捕获
*/
export var stopObserver = function() {
     //这种方式会和angular 6的zone 等polyfills.js产生冲突
    // (<any>window).XMLHttpRequest.prototype.open = this._open
    // (<any>window).XMLHttpRequest.prototype.send = this._send
    // (<any>window).XMLHttpRequest.prototype.setRequestHeader = this._setRequestHeader
    // this._open = null;
    // this._send = null
    // this.__setRequestHeader = null;
    this.isCatch = false
}




/*
	开始捕获
 */
export var startObserver = function() {
    this.isCatch = true
}

