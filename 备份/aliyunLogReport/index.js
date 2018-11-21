import KeepObserverDefault from '../../default/index.js';

import {
    version
} from '../../constants/index'

import defaultConfig from './defaultConfig.js';
import * as tool from '../../tool/index.js';


import * as initServer from './init.js'
import * as sdkServer from './sdk.js'
// import * as reportServer from './report.js'



// report Server 
class KeepObserverAliyunReport extends KeepObserverDefault {
    //constructor
    constructor(config) {
        super(config);
        //存混合配置
        var reportConfig = config.aliyunReportCustom || {};
        this.$report_config = tool.extend(defaultConfig, reportConfig);
        //请求队列
        this.requestQueue = [];
        //初始化
        this.$mixin(initServer);
        this.$mixin(sdkServer);
        // this.$mixin(reportServer);
        this._init();
    }

    /*
        提供一个挂载方法在注入中使用
        return 
            $getCustomeReport
     */
    apply(pipe){
        var that = this;
        pipe.registerRecivePipeMessage(function(msg,options){
            // console.log(msg)
        }, that)
        //mount api
        return {
        }
    }
}





export default KeepObserverAliyunReport


