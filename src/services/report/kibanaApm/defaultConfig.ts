
export default {
    //上报url
    serverUrl: null,
    //服务名
    serviceName: 'undefined',
    //版本
    agentVersion: 'undefined',
    //是否自动启动
    automaticStart:true,
    //是否启动pageload检测
    isCatchPageload:true,
    //是否启动错误捕获
    isCatchError:true,
    //上传相关配置
    transactionDurationThreshold : 999999999999999999999, //ms
    flushInterval:0,
    errorThrottleInterval:0,
    transactionThrottleInterval:0,
}

