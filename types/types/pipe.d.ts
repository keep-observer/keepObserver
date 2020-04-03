export interface catchContent {
    type: string;
    [propName: string]: any;
}
export interface catchParams {
    type: 'monitor' | 'performance' | 'analyse' | 'report' | 'custome' | 'undefined';
    typeName: string;
    data: catchContent;
    location?: string;
    environment?: string;
    reportTime?: number;
    isIgnoreSendRepeat?: boolean;
    isError?: boolean;
    isPerformance?: boolean;
    isAnalyse?: boolean;
}
