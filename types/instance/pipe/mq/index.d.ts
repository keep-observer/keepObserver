declare class MessageQueue {
    private waiting;
    private messageQueue;
    private consumerMap;
    private noticeListener;
    sendPipeMessage: any;
    registerRecivePipeMessage: any;
    constructor(config: any);
}
export default MessageQueue;
