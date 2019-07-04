declare class KeepObserverVue {
    private _config;
    private _typeName;
    private _vue;
    private _originErrorHandle;
    private eventListener;
    private stopObserver;
    private startObserver;
    private _handleInit;
    private _handleVueError;
    private addReportListener;
    private handleReportData;
    private noticeReport;
    constructor(config: any);
    apply(pipe: any): {
        $vueStop: any;
        $vueStart: any;
    };
}
export default KeepObserverVue;
