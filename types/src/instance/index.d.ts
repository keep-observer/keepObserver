import { KeepObserverPublic } from '@util/index';
import keepObserverPipe from './pipe/index';
import PipeUser from './pipe/PipeUser/index';
import WatchDog from './pipe/WatchDog/index';
import MessageQueue from './pipe/MQ/index';
export { keepObserverPipe, PipeUser, WatchDog, MessageQueue };
declare class KeepObserver extends KeepObserverPublic {
    private _config;
    private _pipe;
    private _apis;
    private middleScopeNames;
    readonly _publicMiddleScopeNames: string[];
    private updateVersionClearCache;
    private registerApi;
    apis: any;
    useMiddle: any;
    getRunMiddle: any;
    extendReportParams: any;
    use: any;
    constructor(config?: {});
}
export default KeepObserver;
