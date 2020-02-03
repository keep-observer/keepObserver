export declare type pipeUser = {
    pipeIndex: number;
    receiveCallback: Function | any;
    sendPipeMessage: Function;
    registerMiddleScopeName: Function;
    registerRecivePipeMessage: Function;
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
