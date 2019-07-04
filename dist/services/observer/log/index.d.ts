declare class KeepObserverLog {
    private _config;
    private _typeName;
    private _develop;
    private eventListener;
    private console;
    private $createElement;
    private stopObserver;
    private startObserver;
    private _handleInit;
    private _handleMessage;
    private _handleError;
    private addReportListener;
    private handleReportData;
    private noticeReport;
    constructor(config: any);
    apply(pipe: any): {
        $logStop: any;
        $logStart: any;
    };
}
export default KeepObserverLog;
