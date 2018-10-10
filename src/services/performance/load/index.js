import defaultConfig from './defaultConfig.js';
import * as tool from '../../../tool/index.js';

import * as handleServer from './handle.js'
import * as reportServer from './report.js'

import KeepObserverDetault from '../../../default/index.js';



// 获取系统信息
class KeepObserverLoad extends KeepObserverDetault {
    //构造函数
    constructor(config) {
        super()
        var LoadCustom = config.LoadCustom || {};
        //存混合配置
        this._config = tool.extend(defaultConfig, LoadCustom)
            //系统信息
        this._systemInfo = false;
        //上报名
        this._typeName = 'Load'
            //监听列表
        this.eventListener = [];
        //混入自身方法
        this.$mixin(handleServer)
        this.$mixin(reportServer)
            //开始获取系统信息
        this.getSystemInfo();
    }

    //提供一个挂载入口
    apply(pipe) {
        this.addReportListener(pipe.sendPipeMessage)
    }
}




export default KeepObserverLoad