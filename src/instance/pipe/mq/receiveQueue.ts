import { consoleTools,Tools } from '@util/index'


//注册管道接收数据函数
export var registerRecivePipeMessage = function(id:number,scope:any) {
    var _self = this;
    //修正索引
    if (_self.consumerMap[id]) {
        const errMsg = 'register recive pipe index is Occupy'
        consoleTools.warnError(errMsg)
        _self.$pipe.$keepObserver.runMiddle('error',errMsg)
        return false;
    }
    //返回一个闭包函数用来接收注册函数
    return function(fn:Function) {
        //接收函数
        if (!fn || !Tools.isFunction(fn)) {
            const errMsg = 'registerRecivePipeMessage method receive function is not right'
            consoleTools.warnError(errMsg)
            _self.$pipe.$keepObserver.runMiddle('error',errMsg)
            return ;
        }
        //内部修改作用域调用
        _self.consumerMap[id] = function() {
            var agrs = Tools.toArray(arguments);
            //向注册进来的接收函数发送数据
            return fn.apply(scope, agrs)
        };
    }
}