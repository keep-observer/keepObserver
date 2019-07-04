declare class KeepObserverLoad {
    private _config;
    private _systemInfo;
    private _typeName;
    private eventListener;
    private getSystemInfo;
    private getWebPerformance;
    private checkIsOneDay;
    private recordReport;
    private addReportListener;
    private handleReportData;
    private noticeReport;
    constructor(config: any);
    apply(pipe: any): void;
}
export default KeepObserverLoad;
