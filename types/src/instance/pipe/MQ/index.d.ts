import keepObserverPipe from '../index';
declare class MessageQueue {
    isRun: boolean;
    private messageQueue;
    private $pipe;
    private consumerMap;
    private noticeListener;
    sendPipeMessage: any;
    registerRecivePipeMessage: any;
    constructor(config: any, $pipe: keepObserverPipe);
}
export default MessageQueue;
