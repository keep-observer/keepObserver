import * as tool from '../../tool/index.js';



/*
    receive Plug-ins Server
    params
    @Provider  type es6 class
    explan: Provider class render apply function ,apply runing return method object ,on mounted is keepObsever class 
 */
export var use = function(Provider) {
    if (!Provider || !tool.isFunction(Provider)) {
        this.$devError('[keepObserver] use method receive provider is not right')
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
    } else {
        this.$devError('[keepObserver] use method receive provider is not apply method')
        return false;
    }
}




/*
    注入管道
    params
    @scope  type object 
        explan:this指向
    @applyFn type function
        explan: apply function
 */
export var injection = function(scope, applyFn) {
    var that = this;
    //当前用户索引
    var pipeIndex = that.pipeUserListener.length;
    //验证数据
    if (!applyFn || !tool.isFunction(applyFn)) {
        that.$devError('[keepObserver] injection receive ApplyFn is undefined or no function')
        return false;
    }
    try {
        //提供管道方法
        var pipeMethod = {
            //添加到pipeUserListener,并返回一个接受消息的回调
            registerRecivePipeMessage: that.registerRecivePipeMessage(pipeIndex),
            //用于发送消息
            sendPipeMessage: function() {
                return that.sendPipeMessage(pipeIndex, ...arguments)
            }
        };
        //提供开发方法
        var devMethod = {
            $devLog: function() {
                return that.$devLog(...arguments)
            },
            $devWarn: function() {
                return that.$devWarn(...arguments)
            },
            $devError: function() {
                return that.$devError(...arguments)
            }
        };
        // runing apply
        var userRenderMethod = applyFn.call(scope, pipeMethod, devMethod);
        //mounte method
        that.mixinKoInstance(scope, userRenderMethod);
    } catch (e) {
        that.$devError('[keepObserver] injection receive ApplyFn is runing find error:' + e)
    }
}





/*
    注入对象方法挂载到keepObserver中
    params
    @scope  type object 
        explan:this指向
    @renders type object
        explan:render mounted keepObserver method list
 */
export var mixinKoInstance = function(scope, renders) {
    var that = this;
    if (!renders || tool.isEmptyObject(renders)) {
        that.$devWarn('[keepObserver] injection ApplyFn return Object is undefined')
        return false;
    }
    var keepObserver = that.$keepObserver
    for (var key in renders) {
        //验证挂载方法
        var fn = renders[key]
        if (!fn || !tool.isFunction(fn)) {
            that.$devError('[keepObserver] injection ApplyFn return Object attr' + key + 'is not right')
            continue;
        }
        //是否存在同名方法
        if (keepObserver[key]) {
            that.$devError('[keepObserver] injection Discover namesake methods')
            continue;
        }
        //挂载到keepObserver 实例
        keepObserver[key] = function() {
            var agrs = tool.toArray(arguments)
            try {
                fn.apply(scope, ...agrs)
            } catch (e) {
                that.$devError('[keepObserver] injection  methods ' + key + ' runing find error' + e)
            }
        }
    }
}