import defaultConfig from './defaultConfig';
import * as tool from '../../../util/tool';


import {
    getSystemInfo,
    getWebPerformance,
    checkIsOneDay,
    recordReport,
} from './handle'
import {
    addReportListener,
    handleReportData,
    noticeReport,
} from './report';



// 获取系统信息
class KeepObserverLoad {
    private _config:any;
    private _systemInfo:any;
    private _typeName:string;
    private eventListener: any[];
    //method
    private getSystemInfo = getSystemInfo.bind(this)
    private getWebPerformance = getWebPerformance.bind(this)
    private checkIsOneDay = checkIsOneDay.bind(this)
    private recordReport = recordReport.bind(this)
    private addReportListener = addReportListener.bind(this);
    private handleReportData = handleReportData.bind(this);
    private noticeReport = noticeReport.bind(this);


    //构造函数
    constructor(config) {
        var LoadCustom = config.LoadCustom || {};
        //存混合配置
        this._config = tool.extend(defaultConfig, LoadCustom)
        //系统信息
        this._systemInfo = false;
        //上报名
        this._typeName = 'Load'
        //监听列表
        this.eventListener = [];
        //开始获取系统信息
        this.getSystemInfo();
    }

    //提供一个挂载入口
    public apply(pipe) {
        this.addReportListener(pipe.sendPipeMessage)
    }
}




export default KeepObserverLoad