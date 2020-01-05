import { KeepObserverPublic } from '@util/index';
declare class KeepObserverReport extends KeepObserverPublic {
    private _config;
    private develop;
    private addReportListener;
    private _getReportContent;
    private _handleReport;
    private _handleResponse;
    constructor(config?: {});
    apply(pipe: any): {};
}
export default KeepObserverReport;
