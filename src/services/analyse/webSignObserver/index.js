import defaultConfig from './defaultConfig.js';
import * as tool from '../../../tool/index.js';

import * as apiServer from './api.js'
import * as reportServer from './report.js'
import * as responseServer from './response.js'
import domServer from './dom/index.js'

import KeepObserverDetault from '../../../default/index.js';





//页面埋点分析
class keepObserverWebSignAnalyse extends KeepObserverDetault {
    //构造函数
    constructor(config) {
        super()
        //初始化上传相关实例
        var WebSignAnalyseCustom = config.WebSignAnalyseCustom || {};
        this._config = tool.extend(defaultConfig, WebSignAnalyseCustom)
        //type 
        this.typeName = 'webSignObserver'
        //监听列表
        this.eventListener = [];
        //原生方法
        this._addEventListener = false;
        this._removeEventListener = false;
        //拦截到的方法集合
        this._patchEventListenerMap = {}
        //埋点element map
        this.sginElementMap = {}
        //mixin
        this.$mixin(apiServer)
        this.$mixin(reportServer)
        this.$mixin(responseServer)
        this.$mixin(domServer)
        //init
        this.initPatchNodeEvent()
    }


    //提供一个挂载入口
    apply(pipe) {
        var that = this;
        pipe.registerRecivePipeMessage(that._getReportContent, that)
        that.addReportListener(pipe.sendPipeMessage)
        return {
            $beginObserverAnalyse: that.beginObserverAnalyse  
        }
    }

}








export default keepObserverWebSignAnalyse







