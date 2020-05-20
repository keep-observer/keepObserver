export declare type userInfo = {
    id: string;
    email?: string;
    name?: string;
};
export declare type reportParams<T> = {
    type: 'monitor' | 'performance' | 'analyse' | 'report' | 'custome' | 'undefined';
    typeName: string;
    data: T;
    location: string;
    reportTime: number;
    environment: string;
    contendHashCode: string;
    projectName?: string;
    projectVersion?: string;
    version?: string;
    userInfo?: userInfo;
    isError?: boolean;
    isPerformance?: boolean;
    isAnalyse?: boolean;
};
export declare type kibanaApmUserContext = {
    id: string;
    username: string;
    email: string;
};
