import { KeepObserverPublic } from '@util/index';
declare class keepObserverPipe extends KeepObserverPublic {
    private _config;
    private $keepObserver;
    private $mq;
    private pipeUser;
    private injection;
    private registerPipeListenerUser;
    private oldVsersion_Danger_MixinKoInstance;
    constructor(keepObserver: any, config: any);
    use: any;
}
export default keepObserverPipe;
