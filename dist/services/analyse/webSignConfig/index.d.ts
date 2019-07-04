declare class KeepObserverWebSignConfig {
    private _config;
    private eventListener;
    private correspondFlag;
    private receiveSginConfigFlag;
    private sourceTarget;
    private sourceOrigin;
    private proxyMessageHandleEvent;
    private preventDefault;
    private activeDomList;
    private nodeInfoCaches;
    private selectDom;
    private startCorrespond;
    private checkOrigin;
    private registerMessage;
    private removeMessage;
    private handleMessage;
    private sendMessage;
    private confirmConcatRequestSginData;
    private handleElementEventPreventDefault;
    private receiveSignConfigData;
    private reportNodeSelect;
    private confirmNodeSelect;
    private initDomEvent;
    private createElementNodeInfo;
    private selectElement;
    private activeElement;
    private addReportListener;
    private handleReportData;
    private noticeReport;
    constructor(config: any);
    apply(pipe: any): {
        $startWebSginConfig: any;
    };
}
export default KeepObserverWebSignConfig;
