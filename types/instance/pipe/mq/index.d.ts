declare class MessageQueue {
    private waiting;
    private messageQueue;
    private customerMap;
    private noticeListener;
    sendPipeMessage: any;
    registerRecivePipeMessage: any;
    constructor(config: any);
}
export default MessageQueue;
