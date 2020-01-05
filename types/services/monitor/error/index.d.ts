import { KeepObserverPublic } from '@util/index';
declare class KeepObserverError extends KeepObserverPublic {
    private _config;
    private console;
    private $createElement;
    private addReportListener;
    private stopObserver;
    private startObserver;
    private _handleInit;
    private _handleMessage;
    private _handleError;
    constructor(config?: {});
    apply(pipe: any): {
        $errorStop: any;
        $errorStart: any;
    };
}
export default KeepObserverError;
