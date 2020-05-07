export declare type trackInfoType = {
    type: 'pageHashChange' | 'PageError';
    url: string;
    tags: pageChangeInfoType | pageErrorInfoType;
    spans: {
        name: string;
        type: string;
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
