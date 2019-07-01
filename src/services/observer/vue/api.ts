/*
    	停止监听
*/
export var stopObserver = function() {
    if (this._vue.config) {
        if(this._originErrorHandle){
            this._vue.config.errorHandler = this._originErrorHandle
            this._originErrorHandle = false;
        }else{
            this._vue.config.errorHandler = null;
        }
    }
}




/*
	开始监听
 */
export var startObserver = function() {
    //开启vue错误监听
    this._handleInit();
}