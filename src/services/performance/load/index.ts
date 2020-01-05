import defaultConfig from './defaultConfig';
import { KeepObserverPublic,tool } from '@util/index'

import {
    getSystemInfo,
    getWebPerformance,
    checkIsOneDay,
    recordReport,
} from './handle'



// 获取系统信息
class KeepObserverLoad extends KeepObserverPublic {
    private _config:any;
    private _systemInfo:any;
    private addReportListener:any; //继承中属性
    //method
    private getSystemInfo = getSystemInfo.bind(this)
    private getWebPerformance = getWebPerformance.bind(this)
    private checkIsOneDay = checkIsOneDay.bind(this)
    private recordReport = recordReport.bind(this)



    //构造函数
    constructor(config={}) {
        super(config)
        const { LoadCustom=false,develop=false  } = config as any
        var LoadCustomConfig = LoadCustom || config;
        //是否是开发模式
        LoadCustomConfig.develop = develop
        //存混合配置
        this._config = tool.extend(defaultConfig, LoadCustomConfig)
        //系统信息
        this._systemInfo = false;
        //开始获取系统信息
        this.getSystemInfo();
    }

    //提供一个挂载入口
    public apply(pipe) {
        this.addReportListener(pipe.sendPipeMessage)
    }
}




export default KeepObserverLoad

