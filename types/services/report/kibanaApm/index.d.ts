import { KeepObserverPublic } from '@util/index';
declare class KeepObserverKibanaApmReport extends KeepObserverPublic {
    private _config;
    private develop;
    private tracerTransaction;
    private addReportListener;
    readonly middleScopeNames: string[];
    constructor(config?: {});
    apply(pipe: any): {};
}
export default KeepObserverKibanaApmReport;
