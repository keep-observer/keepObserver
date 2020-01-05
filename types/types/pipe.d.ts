export declare type pipeUser = {
    pipeIndex: any;
    receiveCallback: any;
    sendPipeMessage: any;
    registerRecivePipeMessage: any;
};
export interface catchParams {
    type: 'monitor' | 'performance' | 'analyse' | 'report' | 'custome' | 'undefined';
    typeName: string;
    data: any;
    location?: string;
    environment?: string;
    reportTime?: number;
    isError?: boolean;
    isPerformance?: boolean;
    isAnalyse?: boolean;
}
