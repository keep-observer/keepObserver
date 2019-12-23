import KeepObserverPublic from '../../../share/public/index';
declare class KeepObserverLog extends KeepObserverPublic {
    private _config;
    private _typeName;
    private console;
    private $createElement;
    private stopObserver;
    private startObserver;
    private _handleInit;
    private _handleMessage;
    private _handleError;
    private handleReportData;
    constructor(config: any);
    apply(pipe: any): {
        $logStop: any;
        $logStart: any;
    };
}
export default KeepObserverLog;
