declare class keepObserverWebSignAnalyse {
    private _config;
    private _addEventListener;
    private _removeEventListener;
    private _patchEventListenerMap;
    private elementSginListenerMap;
    private typeName;
    private eventListener;
    private beginObserverAnalyse;
    private loadRequestSginData;
    private registerDomAnaylseListener;
    private triggerAcitveReport;
    private _handleHook;
    private _getReportContent;
    private initPatchNodeEvent;
    private addNodeEventPatchHandle;
    private removeNodeEventPatchHandle;
    private addNodeObserverListener;
    private addReportListener;
    private handleReportData;
    private noticeReport;
    constructor(config: any);
    apply(pipe: any): {
        $beginObserverAnalyse: any;
    };
}
export default keepObserverWebSignAnalyse;
