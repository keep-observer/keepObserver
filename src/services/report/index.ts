
import {
    version
} from '../../constants/index'

import defaultConfig from './defaultConfig';
import * as tool from '../../util/tool';

import {
    $setCustomeReportData,
} from './api'
import {
    _getReportContent,
    _saveReportData,
    _removeReportData
} from './handle'
import {
    _handleReport,
    _handleResponse,
    _createReportData,
    _handleHook,
    _handleReportFail
} from './report'
import {
    addReportListener,
    handleReportDataResponse,
    noticeResponse
} from './response'

// report Server 
class KeepObserverReport  {
    private _config: any;
    private _customeInfo: any;
    private _project: string;
    private _projectVersion: string;
    private eventListener: any[];
    private reportData: any;
    private develop: boolean;
    private developGetMsgLog: boolean;
    private develogDeleteLog: boolean;
    private develogDiscardLog: boolean;
    //method
    private $setCustomeReportData = $setCustomeReportData.bind(this);
    private _getReportContent = _getReportContent.bind(this);
    private _saveReportData = _saveReportData.bind(this);
    private _removeReportData = _removeReportData.bind(this);
    private _handleReport = _handleReport.bind(this);
    private _handleResponse = _handleResponse.bind(this);
    private _createReportData = _createReportData.bind(this);
    private _handleHook = _handleHook.bind(this);
    private _handleReportFail = _handleReportFail.bind(this);
    private addReportListener = addReportListener.bind(this);
    private handleReportDataResponse = handleReportDataResponse.bind(this);
    private noticeResponse = noticeResponse.bind(this);

    //初始化上报类参数 复制this.reportData并从strong里面复原数据 
    private _init() {
        var that = this;
        //初始化this.reportData
        var handleType = that._config.$observer_Type
        handleType.forEach(function(type) {
            var cacheData = tool.getStorage(type)
            that.reportData[type] = [];
            if (cacheData) {
                that.reportData[type] = cacheData
            }
        });
    }



    //constructor
    constructor(config){
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
        this._config = tool.extend(defaultConfig, reportConfig);
        //监听事件
        this.eventListener = []
        //上传数据保存
        this.reportData = {};
        //用户自定义上传参数
        this._customeInfo = false;
        //项目
        this._project = config.project || 'unKnow';
        //项目版本
        this._projectVersion = config.projectVersion || 'unknow-version'

        //当前是否处于开发模式
        this.develop = this._config.develop;
        this.developGetMsgLog = this._config.developGetMsgLog;
        this.develogDeleteLog = this._config.develogDeleteLog;
        this.develogDiscardLog = this._config.develogDiscardLog;

        //初始化
        this._init();
    }
    
    /*
        提供一个挂载方法在注入中使用
        return 
            $getCustomeReport
     */
    public apply(pipe) {
        var that = this;
        pipe.registerRecivePipeMessage(that._getReportContent, that)
        that.addReportListener(pipe.sendPipeMessage)
        return {
            $setCustomeReportData: this.$setCustomeReportData
        }
    }
}




export default KeepObserverReport