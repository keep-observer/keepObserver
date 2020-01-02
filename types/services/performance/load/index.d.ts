import { KeepObserverPublic } from '@util/index';
declare class KeepObserverLoad extends KeepObserverPublic {
    private _config;
    private _systemInfo;
    private addReportListener;
    private getSystemInfo;
    private getWebPerformance;
    private checkIsOneDay;
    private recordReport;
    private handleReportData;
    constructor(config?: {});
    apply(pipe: any): void;
}
export default KeepObserverLoad;
