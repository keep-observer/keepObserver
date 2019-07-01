declare class keepObserverPipe {
    private _config;
    private _props;
    private $keepObserver;
    private waiting;
    private receiveLock;
    private stackCountBuff;
    private stackTimeFlag;
    private messageQueue;
    private pipeUser;
    private injection;
    private registerPipeListenerUser;
    private registerRecivePipeMessage;
    private mixinKoInstance;
    private sendPipeMessage;
    private noticeListener;
    private isLock;
    private openLock;
    private closeLock;
    private preventStackError;
    private judgeAnomaly;
    private resetStackCount;
    use: any;
    constructor(keepObserver: any, config: any);
    apply(): {
        use: any;
    };
}
export default keepObserverPipe;
