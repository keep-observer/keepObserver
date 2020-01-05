export declare type userInfo = {
    id: string;
    email?: string;
    name?: string;
};
export declare type reportParams = {
    type: string;
    typeName: string;
    data: any;
    location: string;
    reportTime: number;
    environment: string;
    projectName?: string;
    projectVersion?: string;
    version?: string;
    userInfo?: userInfo;
    isError?: boolean;
    isPerformance?: boolean;
    isAnalyse?: boolean;
};
