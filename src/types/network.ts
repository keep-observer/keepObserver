
export type networkType = {
    type: 'ajax'|'fetch',        
    statusType: 'request'|'response'        //请求状态           
    method: string;   			            //请求方法
    url: string;     			            //请求baseUrl
    requestHead?: any;     	                //请求头
    responseHead?: any;                     //请求响应头
    params?: any;  			                //请求URL上携带的参数
    body?: string;      		            //请求postData
    status:  number;       	                //请求状态码
    startTime?:number;     	                //请求开始时间
    endTime?: number;       	            //请求结束时间
    costTime?: number;      	            //请求耗时
    response?: string;			                //请求原始响应数据
    responseType?: string;   	            //请求响应类型
    timeout?: number;                       //如果超时 这里是设置的超时时间
    errorContent?: string;                     //错误信息
    //状态
    isTimeout?: boolean;                    //是否超时 如果存在这个字段 则说明已经上报,忽略处理
    isError?: boolean;                      //这个请求是否出现错误
}



export type networkListType = {
    [propName: string]:networkType
}
