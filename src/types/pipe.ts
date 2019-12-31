

export type pipeUser = {
    pipeIndex: any;
    receiveCallback: any;
    sendPipeMessage: any;
    registerRecivePipeMessage: any
}



  


export interface catchParams  {
    type: 'monitor'|'performance'|'analyse'|'response';                     //类型,	     monitor | performance| analyse | response
    typeName: string;                                                       //类型名,    monitor(vue|log|network|error)
    location: string;                                                       //捕获位置	
    environment: string;                                                    //捕获环境
    data: any;                                                              //捕获数据
    reportTime: number                                                      //捕获时间搓  
    isError?: boolean;                                                      //是否是错误信息
} 


