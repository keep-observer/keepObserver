

export type pipeUser = {
    pipeIndex: any;
    receiveCallback: any;
    sendPipeMessage: any;
    registerRecivePipeMessage: any
}



export type pipeMsg = {
    type: string;                   //类型,	  monitor | performance| anaylse | response
    typeName: string;               //类型名,    monitor  ->(vue  or log or network)
    location: string;               //捕获位置	response->  null
    data: any;                      //捕获数据
    reportTime: number              //捕获时间搓   response->  null
} 


export type pipeOptons = {  
    isReport?: boolean;                     //是否需要上报 内部reportServer需要使用
    lazy?: boolean;                         //是否懒上报, （手动trackExtend合并上报,或者trackExtend合并上报）,不立即上报
    trackExtend?: boolean;                  //是否合并之前保存的lazy信息一起上报
    isError?: boolean;                      //是否是错误信息
    isPerformance?: boolean;                //是否是性能捕获分析
    preDelete?: boolean;                    //是否删除之前的信
    ignore?: boolean;                       //本条数据是否忽略
    isResponse?: boolean;                   //report是否需要响应信息
    baseExtend?: boolean;                   //默认合并发送
}
