import { KeepObserverPublic } from '@util/index';
declare class KeepObserverLog extends KeepObserverPublic {
    private _config;
    private console;
    private sendMessage;
    private addReportListener;
    private _handleInit;
    private _handleMessage;
    stopObserver: any;
    startObserver: any;
    constructor(config?: {});
    apply({ sendMessage }: {
        sendMessage: any;
    }): {
        $logStop: any;
        $logStart: any;
    };
}
export default KeepObserverLog;
