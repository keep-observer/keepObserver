import * as tool from '../../../util/tool'


/*
    	开始监控vue
 */
export var _handleInit = function() {
    var _self = this;
    if (_self._vue.config) {
        if(_self._vue.config.errorHandler && tool.isFunction(_self._vue.config.errorHandler) ){
            _self._originErrorHandle = _self._vue.config.errorHandler
        }
        _self._vue.config.errorHandler = (...args) => {
            _self._handleVueError(...args)
            if(_self._originErrorHandle){
                try{
                    _self._originErrorHandle(...args);
                }catch(e){}
            }
        }
    }
}


/*
	处理监控vue错误信息
 */
export var _handleVueError = function(err, vm, info) {
    var _self = this;
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
    _self.noticeReport(errInfo)
}