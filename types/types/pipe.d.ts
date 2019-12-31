export declare type pipeUser = {
    pipeIndex: any;
    receiveCallback: any;
    sendPipeMessage: any;
    registerRecivePipeMessage: any;
};
export interface catchParams {
    type: 'monitor' | 'performance' | 'analyse' | 'response';
    typeName: string;
    location: string;
    environment: string;
    data: any;
    reportTime: number;
    isError?: boolean;
}
