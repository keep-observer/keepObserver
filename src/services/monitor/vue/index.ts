
import * as tool from '../../../util/tool'


import {
    stopObserver,
    startObserver
} from './api'
import {
    _handleInit,
    _handleVueError,
} from './handle'
import {
    addReportListener,
    handleReportData,
    noticeReport,
} from './report';




// 获取系统信息
class KeepObserverVue {
    private  _config: any;
    private _typeName: string;
    private  _vue: any;
    private _originErrorHandle: any;
    private eventListener: any[];
    //method
    private stopObserver = stopObserver.bind(this);
    private startObserver = startObserver.bind(this);
    private _handleInit = _handleInit.bind(this);
    private _handleVueError = _handleVueError.bind(this);
    private addReportListener = addReportListener.bind(this);
    private handleReportData = handleReportData.bind(this);
    private noticeReport = noticeReport.bind(this);

    //构造函数
    constructor(config) {
        //初始化上传相关实例
        var vueConfig = config.vueCustom || {};
        vueConfig.vueInstance = config.vueInstance;
        //判断是否存在实例
        if (vueConfig.vueInstance) {
            return this;
        }
        //存混合配置
        this._config = tool.extend({}, vueConfig)
        //上报名
        this._typeName = 'vue'
        //vue实例
        this._vue = this._config.vueInstance;
        //监听列表
        this.eventListener = [];
        // 开启vue拦截
        this.startObserver();
    }

    //提供一个挂载入口
    public apply(pipe) {
        this.addReportListener(pipe.sendPipeMessage)
        return {
            $vueStop: this.stopObserver,
            $vueStart: this.startObserver
        }
    }
}





export default KeepObserverVue


