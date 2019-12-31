
import {
    version
} from '../../../constants/index'

import defaultConfig from './defaultConfig';
import { KeepObserverPublic,tool } from '@util/index'

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
    handleReportDataResponse,
} from './response'




// report Server 
class KeepObserverReport  extends KeepObserverPublic  {
    private _config: any;
    private _customeInfo: any;
    private _project: string;
    private _projectVersion: string;
    private reportData: any;
    private develop: boolean;
    private addReportListener:any; //继承中属性
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
    private handleReportDataResponse = handleReportDataResponse.bind(this);

    //初始化上报类参数 复制this.reportData并从strong里面复原数据 
    private _init() {
        var _self = this;
        //初始化this.reportData
        var handleType = _self._config.$observer_Type
        handleType.forEach(function(type) {
            var cacheData = tool.getStorage(type)
            _self.reportData[type] = [];
            if (cacheData) {
                _self.reportData[type] = cacheData
            }
        });
    }


    //constructor
    constructor(config = {}){
        super(config)
        const { reportCustom=false,develop=false } = config as any
        //存混合配置
        var reportConfig:any = reportCustom || {};
        //是否是开发模式
        reportConfig.develop = develop
        //混合默认配置
        this._config = tool.extend(defaultConfig, reportConfig);
        //监听事件
        //上传数据保存
        this.reportData = {};
        //用户自定义上传参数
        this._customeInfo = false;
        //项目
        this._project = this._config.project || 'unKnow';
        //项目版本
        this._projectVersion = this._config.projectVersion || 'unknow-version'
        //当前是否处于开发模式
        this.develop = this._config.develop;
        //初始化
        this._init();
    }
    
    /*
        提供一个挂载方法在注入中使用
        return 
            $getCustomeReport
     */
    public apply(pipe) {
        var _self = this;
        pipe.registerRecivePipeMessage(_self._getReportContent, _self)
        _self.addReportListener(pipe.sendPipeMessage)
        return {
            $setCustomeReportData: this.$setCustomeReportData
        }
    }
}




export default KeepObserverReport