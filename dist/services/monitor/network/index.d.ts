import { KeepObserverPublic } from '@util/index';
declare class KeepObserverNetwork extends KeepObserverPublic {
    private _config;
    private _typeName;
    private _open;
    private _send;
    private _setRequestHeader;
    private timeout;
    private timeoutRequest;
    private networkList;
    private addReportListener;
    private stopObserver;
    private startObserver;
    private _handleInit;
    private _handleXMLAjax;
    private _handleTimeout;
    private _handleDoneXML;
    private _handleJudgeDisbale;
    private handleReportData;
    constructor(config?: {});
    apply(pipe: any): {
        $networkStop: any;
        $networkStart: any;
    };
}
export default KeepObserverNetwork;
