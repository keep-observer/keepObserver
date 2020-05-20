import { KeepObserverPublic } from '@util/index';
declare class KeepObserverKibanaApmReport extends KeepObserverPublic {
    private _config;
    private tracerTransaction;
    private sendMessage;
    private _getReportContent;
    private _handleCatchError;
    private _handleMonitor;
    private _handleMonitorLog;
    private _handleMonitorNetwork;
    private _handleHtmlElementActive;
    private _handleKibanaApmTrack;
    setUserInfo: any;
    captureError: any;
    createCustomLog: any;
    constructor(config?: {});
    apply({ registerReciveMessage, sendMessage }: {
        registerReciveMessage: any;
        sendMessage: any;
    }): {
        setUserInfo: any;
        captureError: any;
        createCustomLog: any;
    };
}
export default KeepObserverKibanaApmReport;
