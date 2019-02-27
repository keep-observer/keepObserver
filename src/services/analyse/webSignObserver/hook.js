import * as tool from '../../../tool/index.js';



/*
    调用钩子
    @arguments[0] = onHooK
    @arguments[...] = params
    return
        onHook result
 */
export var _handleHook = function() {
    var args = tool.toArray(arguments);
    if (!args || args.length === 0 || !tool.isFunction(args[0])) {
        return false;
    }
    var onHook = args[0];
    var params = args.length === 2? args[1]: args.slice(1, args.length);
    try {
        var result = onHook(params);
    } catch (err) {
        //报错
        this.$devError(onHook.name + 'callback hook is runing error:' + err)
        return false;
    }
    return result
}


