import * as tool from '../tool/index.js'

//公共默认类
//提供一些全局公共方法
class KeepObserverDefault {

    constructor(config) {
        //开发模式下的log 替换window.console.log
        this.$devLog = false;
        //开发模式写error log 替换window.console.error
        this.$devError = false;

        this._keeepObserverDetaultInit();
    }


    _keeepObserverDetaultInit() {
        var that = this;
        //初始化$devLog
        that.$devLog = window.console.log
        window.console.log = (...args) => {
            that.$devLog.apply(window.console, args);
        };
        //初始化$devError
        that.$devError = window.console.error
        window.console.error = (...args) => {
            that.$devError.apply(window.console, args);
        };
        //初始化$devWarn
        that.$devWarn = window.console.warn
        window.console.warn = (...args) => {
            that.$devWarn.apply(window.console, args);
        };
    }



    $mixin(provider) {
        if (!provider || !tool.isObject(provider) || tool.isEmptyObject(provider)) {
            this.$devError('keepObserver $mixin receive params not right')
        }
        for (var key in provider) {
            if (this[key]) {
                this.$devError('keepObserver $mixin method key: '+key+' is exist')
                continue
            }
            this[key] = provider[key]
        }
    }

}






export default KeepObserverDefault;