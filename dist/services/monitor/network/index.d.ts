declare class KeepObserverNetwork {
    private _config;
    private _typeName;
    private _open;
    private _send;
    private _setRequestHeader;
    private timeout;
    private timeoutRequest;
    private eventListener;
    private networkList;
    private stopObserver;
    private startObserver;
    private _handleInit;
    private _handleXMLAjax;
    private _handleTimeout;
    private _handleDoneXML;
    private _handleJudgeDisbale;
    private addReportListener;
    private handleReportData;
    private noticeReport;
    constructor(config: any);
    apply(pipe: any): {
        $networkStop: any;
        $networkStart: any;
    };
}
export default KeepObserverNetwork;
