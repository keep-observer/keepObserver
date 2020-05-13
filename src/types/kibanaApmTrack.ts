

export type spansTagNetworkType = {
    method: string;   			            //请求方法
    url: string;     			            //请求baseUrl
    params: any;  			                //请求URL上携带的参数
    body: string;      		            //请求postData
    status:  number;       	                //请求状态码
    startTime:number;     	                //请求开始时间
    endTime: number;       	            //请求结束时间
    costTime: number;      	            //请求耗时
    response: string;			            //请求原始响应数据
    timeout?:number                      //超时时间
}

export type spansTagLogType = {
    type:string,
    data:string,
}

export type spansTagElementActiveType = {
    type: 'click'|'change',
    title:string,
    xPath:string,
    value:string|number|boolean,
}

export type spansTagErrorType = {
    message:string,
    filename?:string,
}

export type trackInfoType = {
    type:'pageHashChange'|'PageError',
    url:string,
    tags: pageChangeInfoType|pageErrorInfoType,
    spans:{
        name:string,
        type:string,
        tags?:{
            type:'log'|'network'|'htmlElementActive'|'error',
            content:spansTagNetworkType|spansTagLogType|spansTagElementActiveType|spansTagErrorType
        }
    }[]
}


export type pageChangeInfoType = {
    startUrl:string,
    startDate:number,
    nextUrl:string,
    nextDate:number
}


export type pageErrorInfoType ={
    startUrl:string,
    startDate:number,
    findErrorDate:number,
    errorContent:string,
}


export type trackReportType = {
    type: 'monitor'; 
    typeName: 'kibanaApmTrack';
    data: trackInfoType;
    //标识项
    isError?: boolean;
}


