/*
	停止监听
 */
export var stopObserver = function() {
    if (this._config.catchCrossDomain) {
        window.document.createElement = this.$createElement
        this.$createElement = false;
    }
}



/*
	开始监听
 */
export var startObserver = function() {
    //启动监听
    var _self = this;
    _self._handleInit();
}


