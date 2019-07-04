export declare type pipeUser = {
    pipeIndex: any;
    receiveCallback: any;
    sendPipeMessage: any;
    registerRecivePipeMessage: any;
};
export declare type pipeMsg = {
    type: string;
    typeName: string;
    location: string;
    data: any;
    reportTime: number;
};
export declare type pipeOptons = {
    isReport?: boolean;
    lazy?: boolean;
    trackExtend?: boolean;
    isError?: boolean;
    isPerformance?: boolean;
    preDelete?: boolean;
    ignore?: boolean;
    isResponse?: boolean;
    baseExtend?: boolean;
};
