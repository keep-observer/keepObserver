import { consoleTools,Tools } from '@util/index'





/*
	停止监听
 */
export var stopObserver = function() {
    if(!this.console || (this.console && Tools.isEmptyObject(this.console))){
        return this.console = null;
    }
    window.console.log = this.console.log
    window.console.error = this.console.error
    window.console.info = this.console.info
    window.console.debug = this.console.debug
    window.console.warn = this.console.warn
    window.console.time = this.console.time
    window.console.timeEnd = this.console.timeEnd
    window.console.clear = this.console.clear
    this.console = null;
}



/*
	开始监听
 */
export var startObserver = function() {
    if(this.console){
        return 
    }
    this.console = {}
    setTimeout(()=>{
        //启动监听
        if(!Tools.isEmptyObject(this.console) || !this.console){
            return
        }
        this._handleInit();
    })
}



