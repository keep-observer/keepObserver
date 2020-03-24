import { KeepObserverPublic } from '@util/index';
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
    extendReportParams: any;
    use: any;
    constructor(config?: {});
}
export default KeepObserver;
