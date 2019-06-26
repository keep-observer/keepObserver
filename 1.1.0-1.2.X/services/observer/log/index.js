import defaultConfig from './defaultConfig.js';
import * as tool from '../../../tool/index.js';

import KeepObserverDetault from '../../../default/index.js';


import * as handleServer from './handle.js'
import * as apiServer from './api.js'
import * as reportServer from './report.js'

// 获取系统信息
class KeepObserverLog extends KeepObserverDetault {
    //构造函数
    constructor(config) {
        super()
        //初始化上传相关实例
        var logConfig = config.logCustom || {};
        //是否是开发模式
        logConfig.develop = config.develop ? true : false;
        //存混合配置
        this._config = tool.extend(defaultConfig, logConfig)
        //上报名
        this._typeName = 'log'
        //监听列表
        this.eventListener = [];
        //当前是否处于开发模式
        this._develop = this._config.develop;
        //替换window.console
        this.console = {};
        //替换 doucment.createElement 插入script .crossOrigin = 'anonymous';
        this.$createElement = false;
        //启动
        this.$mixin(handleServer)
        this.$mixin(apiServer)
        this.$mixin(reportServer)
        //启动监控
        this.startObserver();
    }


    //提供一个挂载入口
    apply(pipe) {
        this.addReportListener(pipe.sendPipeMessage)
        return {
            $logStop: this.stopObserver,
            $logStart: this.startObserver
        }
    }
}




export default KeepObserverLog

