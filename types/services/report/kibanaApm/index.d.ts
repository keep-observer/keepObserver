import { KeepObserverPublic } from '@util/index';
declare class KeepObserverKibanaApmReport extends KeepObserverPublic {
    private _config;
    private develop;
    private tracerTransaction;
    private addReportListener;
    readonly middleScopeNames: string[];
    private _getReportContent;
    private _handleCustome;
    private _handlePerformance;
    private _handleMonitor;
    private _handleMonitorLog;
    constructor(config?: {});
    apply(pipe: any): {};
}
export default KeepObserverKibanaApmReport;
