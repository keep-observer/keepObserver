import { consoleTools,tool } from '@util/index'


//注册管道接收数据函数
export var registerRecivePipeMessage = function(id:number,scope:any) {
    var _self = this;
    //修正索引
    if (_self.consumerMap[id]) {
        consoleTools.warnError('register recive pipe index is Occupy')
        return false;
    }
    //返回一个闭包函数用来接收注册函数
    return function(fn:Function) {
        //接收函数
        if (!fn || !tool.isFunction(fn)) {
            consoleTools.warnError('registerRecivePipeMessage method receive function is not right')
            return ;
        }
        //内部修改作用域调用
        _self.consumerMap[id] = function() {
            var agrs = tool.toArray(arguments);
            //向注册进来的接收函数发送数据
            return fn.apply(scope, agrs)
        };
    }
}