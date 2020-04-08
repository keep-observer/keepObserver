export declare type networkType = {
    method: string;
    url: string;
    requestHead: any;
    responseHead: any;
    params: any;
    body: string;
    status: number;
    startTime: number;
    endTime: number;
    costTime: number;
    response: any;
    statusType: 'request' | 'response';
    responseType: string;
    timeout?: number;
    errorContent?: any;
    isTimeout?: boolean;
    isError?: boolean;
};
export interface networkRecordType {
    type: 'ajax' | 'fetch';
    url: string;
    method: string;
    data: any;
    requestHead: any;
    status?: number;
    response: string;
    startTime: number;
    costTime: number;
    endTime: number;
}
export declare type networkListType = {
    [propName: string]: networkRecordType;
};
