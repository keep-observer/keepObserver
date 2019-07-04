import * as tool from '../../../util/tool'


/*
    	开始监控vue
 */
export var _handleInit = function() {
    var that = this;
    if (that._vue.config) {
        if(that._vue.config.errorHandler && tool.isFunction(that._vue.config.errorHandler) ){
            that._originErrorHandle = that._vue.config.errorHandler
        }
        that._vue.config.errorHandler = (...args) => {
            that._handleVueError(...args)
            if(that._originErrorHandle){
                try{
                    that._originErrorHandle(...args);
                }catch(e){}
            }
        }
    }
}


/*
	处理监控vue错误信息
 */
export var _handleVueError = function(err, vm, info) {
    var that = this;
    var errInfo:any = {}
    errInfo.infoMsg = tool.toString(info);
    //是否存在堆栈信息
    if (tool.isObject(err) && err.stack && err.message) {
        errInfo.errMsg = tool.toString(err.message)
        errInfo.stackMsg = tool.toString(err.stack)
    } else {
        errInfo.errMsg = tool.toString(err);
    }
    errInfo.isError = true
    //上报
    that.noticeReport(errInfo)
}