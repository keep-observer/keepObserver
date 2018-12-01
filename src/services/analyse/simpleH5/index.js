import defaultConfig from './defaultConfig.js';
import * as tool from '../../../tool/index.js';


import * as handleServer from './handle.js'
import * as apiServer from './api.js'
import * as reportServer from './report.js'
import * as eventServer from './event.js'
import * as domServer from './dom.js'

import KeepObserverDetault from '../../../default/index.js';



//简单H5页面埋点分析
class KeepObserverSimpleH5Analyse extends KeepObserverDetault {
    //构造函数
    constructor(config) {
        super()
        //初始化上传相关实例
        var simpleH5AnalyseCustom = config.simpleH5AnalyseCustom || {};
        this._config = tool.extend(defaultConfig, simpleH5AnalyseCustom)
        //监听列表
        this.eventListener = [];
        //需要监听的dom列表
        /*
            destroyEvent: function
            getActiveStauts: function 
            title: string
        */
        this.analyseDomList  = {};
        this.uniqueId = tool.getUniqueID();
        /*上报内容*/
        this.reportData = {
            id: tool.getUniqueID(),     //唯一浏览器标识
            repeatCount: 0,             //访问次数
            useActives:{}               //行为事件
        }
        //混合自身方法
        this.$mixin(handleServer)
        this.$mixin(apiServer)
        this.$mixin(reportServer)
        this.$mixin(eventServer)
        this.$mixin(domServer)
        //启动
        if(this._config.initBegine && this._config.begineConfig){
            this.startAnalyse(this._config.begineConfig);
        }
    }
    //提供一个挂载入口
    apply(pipe) {
        this.addReportListener(pipe.sendPipeMessage)
        return {
            $simpleH5AnalyseClearSaveRecive: this.clearSaveRecive,
            $simpleH5AnalyseStop: this.stopAnalyse,
            $simpleH5AnalyseBegine: this.startAnalyse,
        }
    }
}







export default KeepObserverSimpleH5Analyse




