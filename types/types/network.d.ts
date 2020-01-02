export declare type networkType = {
    method: string;
    url: string;
    requestHead: any;
    responseHead: any;
    params: any;
    data: any;
    status: number;
    startTime: number;
    endTime: number;
    costTime: number;
    response: any;
    responseType: string;
    isTimeout?: boolean;
    timeout?: number;
    isError?: boolean;
    errorContent?: any;
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
