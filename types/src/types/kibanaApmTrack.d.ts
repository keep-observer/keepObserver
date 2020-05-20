export declare type spansTagNetworkType = {
    method: string;
    url: string;
    params: any;
    body: string;
    status: number;
    startTime: number;
    endTime: number;
    costTime: number;
    response: string;
    timeout?: number;
};
export declare type spansTagLogType = {
    type: string;
    data: string;
};
export declare type spansTagElementActiveType = {
    type: 'click' | 'change';
    title: string;
    xPath: string;
    value: string | number | boolean;
};
export declare type spansTagErrorType = {
    message: string;
    filename?: string;
};
export declare type trackInfoType = {
    type: 'pageHashChange' | 'PageError';
    url: string;
    tags: pageChangeInfoType | pageErrorInfoType;
    spans: {
        name: string;
        type: string;
        tags?: {
            type: 'log' | 'network' | 'htmlElementActive' | 'error';
            content: spansTagNetworkType | spansTagLogType | spansTagElementActiveType | spansTagErrorType;
        };
    }[];
};
export declare type pageChangeInfoType = {
    startUrl: string;
    startDate: number;
    nextUrl: string;
    nextDate: number;
};
export declare type pageErrorInfoType = {
    startUrl: string;
    startDate: number;
    findErrorDate: number;
    errorContent: string;
};
export declare type trackReportType = {
    type: 'monitor';
    typeName: 'kibanaApmTrack';
    data: trackInfoType;
    isError?: boolean;
};
