import { KeepObserverPublic } from '@util/index';
declare class keepObserverPipe extends KeepObserverPublic {
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
    private oldVsersion_Danger_MixinKoInstance;
    private sendPipeMessage;
    private noticeListener;
    private isLock;
    private openLock;
    private closeLock;
    private preventStackError;
    private judgeAnomaly;
    private resetStackCount;
    constructor(keepObserver: any, config: any);
    use: any;
}
export default keepObserverPipe;
