//公共默认类
//提供一些全局公共方法
class KeepObserverDefault {

    constructor(config) {
        //开发模式下的log 替换window.console.log
        this.$devLog = false;
        //开发模式写error log 替换window.console.error
        this.$devError = false;

        this._defaultinit();
    }


    _defaultinit() {
        var that = this;
        //初始化$devLog
        that.$devLog = window.console.log
        window.console.log = (...args) => {
            that.$devLog.apply(window.console, args);
        };
        //初始化$$devError
        that.$devError = window.console.error
        window.console.error = (...args) => {
            that.$devError.apply(window.console, args);
        };
    }


}






export default KeepObserverDefault;