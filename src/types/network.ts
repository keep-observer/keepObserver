
export type networkType = {
    method: string;   			    //请求方法
    url: string;     			    //请求baseUrl
    requestHead: any;     	        //请求头
    responseHead: any;              //请求响应头
    params: any;  			        //请求URL上携带的参数
    data: any;      		        //请求postData
    status:  number;       	        //请求状态码
    startTime:number;     	        //请求开始时间
    endTime: number;       	        //请求结束时间
    costTime: number;      	        //请求耗时
    response: any;			        //请求原始响应数据
    responseType: string;   	    //请求响应类型
    isTimeout?: boolean;            //是否超时 如果存在这个字段 则说明已经上报,忽略处理
    timeout?: number;               //如果超时 这里是设置的超时时间
    isError?: boolean;              //这个请求是否出现错误
    errorContent?: any;             //错误信息
}


export interface networkRecordType {
    type: 'ajax'|'fetch',
    url: string,
    method: string,
    data: any,
    requestHead: any 
    status?: number,
    response: string,
    startTime: number,
    costTime: number,
    endTime: number,
}

export type networkListType = {
    [propName: string]:networkRecordType
}
