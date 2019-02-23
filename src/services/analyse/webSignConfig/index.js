import defaultConfig from './defaultConfig.js';
import * as tool from '../../../tool/index.js';

import * as apiServer from './api.js'
import * as handleServer from './handle.js'
import * as reportServer from './report.js'
import * as checkServer from './check.js'
import * as correspondServer from './correspond.js'
import domServer from './dom/index.js'

import KeepObserverDetault from '../../../default/index.js';



//简单H5页面埋点分析
class KeepObserverWebSignConfig extends KeepObserverDetault {
    //构造函数
    constructor(config) {
        super()
        //初始化上传相关实例
        var webSignConfigCustom = config.webSignConfigCustom || {};
        this._config = tool.extend(defaultConfig, webSignConfigCustom)
        //监听列表
        this.eventListener = [];
        //flag
        this.correspondFlag = false;
        this.receiveSginConfigFlag = false;
        //iframe container target
        this.sourceTarget = false;
        this.sourceOrigin  = false;
        //meeage event 
        this.proxyMessageHandleEvent = false;
        //dom
        this.preventDefault = true;
        this.activeDomList = []
        this.selectDom = false;
        //mixin
        this.$mixin(apiServer)
        this.$mixin(handleServer)
        this.$mixin(reportServer)
        this.$mixin(checkServer)
        this.$mixin(correspondServer)
        this.$mixin(domServer)
    }



    //提供一个挂载入口
    apply(pipe) {
        this.addReportListener(pipe.sendPipeMessage)
        return {
            $startWebSginConfig: this.startCorrespond
        }
    }
}








export default KeepObserverWebSignConfig







