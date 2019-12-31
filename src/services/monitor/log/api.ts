/*
	停止监听
 */
export var stopObserver = function() {
    window.console.log = this.console.log
    window.console.error = this.console.error
    window.console.info = this.console.info
    window.console.debug = this.console.debug
    window.console.warn = this.console.warn
    window.console.time = this.console.time
    window.console.timeEnd = this.console.timeEnd
    window.console.clear = this.console.clear
    this.console = {};
}



/*
	开始监听
 */
export var startObserver = function() {
    //启动监听
    var _self = this;
    setTimeout(function(){
        _self._handleInit();
    })
}