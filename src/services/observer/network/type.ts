
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
    handleResData?:  any;    	    //如果配置中传入 自定义处理响应数据 那么这里将保持处理后的响应数据
    handleReqData?: any;            //如果配置中传入 自定义处理发送数据 那么这里将保持处理后的发送数据
    isTimeout?: boolean;            //是否超时 如果存在这个字段 则说明已经上报,忽略处理
    timeout?: number;               //如果超时 这里是设置的超时时间
    isError?: boolean;              //这个请求是否出现错误
    errorContent?: any;             //错误信息
}


