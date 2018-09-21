import * as tool from '../../tool/index.js';



//接收插件服务
export var use = function(Provider) {
    if (!Provider || !tool.isFunction(Provider)) {
        this.$devError('keepObserver use method receive provider is not right')
        return false;
    }
    //初始化注入服务
    var config = this._config
    var providerInstalcen = new Provider(config)
    //检查注入方法是否存在存在apply,存在则加入到管道流中
    //并检查是否存在返回方法，挂载在自身中,用于对外提供
    var {
        apply
    } = providerInstalcen
    if (apply && tool.isFunction(apply)) {
        this.injection(providerInstalcen, apply)
    }
}




//注入管道
export var injection = function(scope, applyFn) {
    var that = this;
    var userIndex = that.pipeUserListener.length - 1;
    //验证数据
    if (!applyFn || !tool.isFunction(applyFn)) {
        that.$devError('keepObserver injection receive ApplyFn is undefined or no function')
        return false;
    }
    try {
        // runing apply
        var userRenderMethod = applyFn.call(scope, {
            onRecivePipeMessage: function() {
                return that.recivePipeMessage(...arguments)
            },
            sendPipeMessage: function() {
                return that.sendPipeMessage(...arguments)
            }
        })
        //mounte method
        that.mixinKoInstance(scope, userRenderMethod);
    } catch (e) {
        that.$devError('keepObserver injection receive ApplyFn is runing find error:' + e)
    }
}








//注入对象方法挂载到keepObserver中
export var mixinKoInstance = function(scope, renders) {
    var that = this;
    if (!renders || tool.isEmptyObject(renders)) {
        that.$devWarn('keepObserver injection ApplyFn return Object is undefined')
        return false;
    }
    var keepObserver = that.$keepObserver
    for (var key in renders) {
        //验证挂载方法
        var fn = renders[key]
        if (!fn || !tool.isFunction(fn)) {
            that.$devError('keepObserver injection ApplyFn return Object attr' + key + 'is not right')
            continue;
        }
        //是否存在同名方法
        if (keepObserver[key]) {
            that.$devError('keepObserver injection Discover namesake methods')
            continue;
        }
        //挂载到keepObserver 实例
        keepObserver[key] = function() {
            var agrs = tool.toArray(arguments)
            try {
                fn.apply(scope, ...agrs)
            } catch (e) {
                that.$devError('keepObserver injection  methods ' + key + ' runing find error' + e)
            }
        }
    }
}