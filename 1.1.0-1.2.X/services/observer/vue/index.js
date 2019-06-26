import defaultConfig from './defaultConfig.js';
import * as tool from '../../../tool/index.js';


import * as handleServer from './handle.js'
import * as apiServer from './api.js'
import * as reportServer from './report.js'

import KeepObserverDetault from '../../../default/index.js';



// 获取系统信息
class KeepObserverVue extends KeepObserverDetault {
    //构造函数
    constructor(config) {
        super()
        //初始化上传相关实例
        var vueConfig = config.vueCustom || {};
        vueConfig.vueInstance = config.vueInstance;
        //判断是否存在实例
        if (!vueConfig.vueInstance) {
            return false;
        }
        //存混合配置
        this._config = tool.extend(defaultConfig, vueConfig)
        //上报名
        this._typeName = 'vue'
        //vue实例
        this._vue = this._config.vueInstance;
        //监听列表
        this.eventListener = [];
        //混入自身方法
        this.$mixin(handleServer)
        this.$mixin(apiServer)
        this.$mixin(reportServer)
        // 开启vue拦截
        this.startObserver();
    }

    //提供一个挂载入口
    apply(pipe) {
        this.addReportListener(pipe.sendPipeMessage)
        return {
            $vueStop: this.stopObserver,
            $vueStart: this.startObserver
        }
    }
}




export default KeepObserverVue