export declare type networkType = {
    type: 'ajax' | 'fetch';
    statusType: 'request' | 'response';
    method: string;
    url: string;
    requestHead?: any;
    responseHead?: any;
    params?: any;
    body?: string;
    status: number;
    startTime?: number;
    endTime?: number;
    costTime?: number;
    response?: string;
    responseType?: string;
    timeout?: number;
    errorContent?: string;
    isTimeout?: boolean;
    isError?: boolean;
};
export declare type networkListType = {
    [propName: string]: networkType;
};
