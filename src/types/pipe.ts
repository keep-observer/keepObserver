


export interface catchContent {
    type:string,
    [propName: string]: any;
}

  


export interface catchParams{
    type: 'monitor'|'performance'|'analyse'|'report'|'custome'|'undefined';                 //类型,	     monitor | performance| analyse | report
    typeName: string;                                                                       //类型名,    monitor(vue|log|network|error)
    data: catchContent;                                                                     //捕获数据
    location?: string;                                                                      //捕获位置	
    environment?: string;                                                                   //捕获环境                                                           
    reportTime?: number                                                                     //捕获时间搓
    //标识项
    isIgnoreSendRepeat?: boolean;                                                           //是否忽略发送信息重复
    isError?: boolean;                                                                      //是否是错误信息
    isPerformance?: boolean;                                                                //是否是性能信息
    isAnalyse?: boolean;                                                                    //是否是分析信息
} 


