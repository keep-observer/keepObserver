import { KeepObserverPublic } from '@util/index';
declare class KeepObserverLog extends KeepObserverPublic {
    private _config;
    private _typeName;
    private console;
    private addReportListener;
    private stopObserver;
    private startObserver;
    private _handleInit;
    private _handleMessage;
    private handleReportData;
    constructor(config?: {});
    apply(pipe: any): {
        $logStop: any;
        $logStart: any;
    };
}
export default KeepObserverLog;