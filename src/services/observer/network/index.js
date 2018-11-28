import defaultConfig from './defaultConfig.js';
import * as tool from '../../../tool/index.js';

import * as handleServer from './handle.js'
import * as apiServer from './api.js'
import * as reportServer from './report.js'

import KeepObserverDetault from '../../../default/index.js';


// 获取系统信息
class KeepObserverNetwork extends KeepObserverDetault {
    //构造函数
    constructor(config) {
        super()
        var networkConfig = config.networkCustom || {};
        //存混合配置
        this._config = tool.extend(defaultConfig, networkConfig)
        //上报名
        this._typeName = 'network'
        //监听列表
        this.eventListener = [];
        //监控的数据列表
        //key 为 请求ID
        //value :{
        //	method:   			请求方法
        //	url:      			请求baseUrl
        //	requestHead:     	请求头
        //  responseHead:       请求响应头
        //	params:   			请求URL上携带的参数
        //	data:       		请求postData
        //	status:         	请求状态码
        //	startTime:      	请求开始时间
        //	endTime:        	请求结束时间
        //	costTime:       	请求耗时
        //	response: 			请求原始响应数据
        //	responseType    	请求响应类型
        //	handleResData:     	如果配置中传入 自定义处理响应数据 那么这里将保持处理后的响应数据
        //	handleReqData:      如果配置中传入 自定义处理发送数据 那么这里将保持处理后的发送数据
        //	isTimeout:          是否超时 如果存在这个字段 则说明已经上报,忽略处理
        //	timeout:            如果超时 这里是设置的超时时间
        //	isError:            这个请求是否出现错误
        //	errorContent:       错误信息
        //}
        this.networkList = {};
        //替换window.XMLHttpRequest变量
        this._open = false;
        this._send = false;
        this._setRequestHeader = false;
        //辅助捕获超时
        this.timeout = {};
        this.timeoutRequest = {};
        //混入自身方法
        this.$mixin(handleServer)
        this.$mixin(apiServer)
        this.$mixin(reportServer)
            // 开启网络拦截监控
        this.startObserver();
    }


    //提供一个挂载入口
    apply(pipe) {
        this.addReportListener(pipe.sendPipeMessage)
        return {
            $networkStop: this.stopObserver,
            $networkStart: this.startObserver
        }
    }
}




export default KeepObserverNetwork