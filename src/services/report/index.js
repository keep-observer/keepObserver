import KeepObserverDefault from '../../default/index.js';

import {
    version
} from '../../constants/index'

import defaultConfig from './defaultConfig.js';
import * as tool from '../../tool/index.js';

import * as apiServer from './api.js'
import * as handleServer from './handle.js'
import * as reportServer from './report.js'



// report Server 
class KeepObserverReport extends KeepObserverDefault {
    //constructor
    constructor(config) {
            super(config);
            //存混合配置
            var reportConfig = config.reportCustom || {};
            //是否是开发模式
            reportConfig.develop = config.develop ? true : false;
            //开发环境下获取报文是否打印
            reportConfig.developGetMsgLog = config.developGetMsgLog ? true : false;
            //开发环境下丢弃数据 是否打印出来
            reportConfig.develogDiscardLog = config.develogDiscardLog ? true : false;
            //开发环境下删除出数据 是否打印出来
            reportConfig.develogDeleteLog = config.develogDeleteLog ? true : false;
            //混合默认配置
            this.$report_config = tool.extend(defaultConfig, reportConfig);
            //上传数据保存
            this.reportData = {};
            //用户自定义上传参数
            this._customeInfo = false;
            //项目
            this._project = config.project || 'unKnow';
            //项目版本
            this._projectVersion = config.projectVersion || 'unknow-version'

            //当前是否处于开发模式
            this.develop = this.$report_config.develop;
            this.developGetMsgLog = this.$report_config.developGetMsgLog;
            this.develogDeleteLog = this.$report_config.develogDeleteLog;
            this.develogDiscardLog = this.$report_config.develogDiscardLog;

            //混入自身方法
            this.$mixin(apiServer);
            this.$mixin(handleServer);
            this.$mixin(reportServer);
            //初始化
            this._init();
        }
        /*
            初始化上报类参数
            复制this.reportData并从strong里面复原数据
         */
    _init() {
            var that = this;
            //初始化this.reportData
            var handleType = that.$report_config.$observer_Type
            handleType.forEach(function(type) {
                var cacheData = tool.getStorage(type)
                that.reportData[type] = [];
                if (cacheData) {
                    that.reportData[type] = cacheData
                }
            });
        }
        /*
            提供一个挂载方法在注入中使用
            return 
                $getCustomeReport
         */
    apply(pipe, dev) {
        var that = this;
        pipe.registerRecivePipeMessage(that._getReportContent, that)
        return {
            $setCustomeReportData: this.$setCustomeReportData
        }
    }
}




export default KeepObserverReport