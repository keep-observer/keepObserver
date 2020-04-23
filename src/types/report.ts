

export type userInfo = {
    id:string,
    email?:string,
    name?:string,
}





export type reportParams<T> = {
    type: 'monitor'|'performance'|'analyse'|'report'|'custome'|'undefined'; 
    typeName: string;
    data: T;
    location: string;
    reportTime: number;
    environment: string;
    //扩展项
    projectName?: string;
    projectVersion?: string;
    version?: string;
    userInfo?: userInfo;
    //标识项
    isError?: boolean;
    isPerformance?: boolean;
    isAnalyse?: boolean;
}


export type kibanaApmUserContext = {
    id: string;
    username: string;
    email: string;
}
