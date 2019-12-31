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
