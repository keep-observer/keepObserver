import KeepObserverPublic from '../../../share/public/index';
declare class KeepObserverLoad extends KeepObserverPublic {
    private _config;
    private _systemInfo;
    private _typeName;
    private getSystemInfo;
    private getWebPerformance;
    private checkIsOneDay;
    private recordReport;
    private handleReportData;
    constructor(config?: {});
    apply(pipe: any): void;
}
export default KeepObserverLoad;
