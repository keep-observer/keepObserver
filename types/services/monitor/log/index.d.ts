import { KeepObserverPublic } from '@util/index';
declare class KeepObserverLog extends KeepObserverPublic {
    private _config;
    private console;
    private sendMessage;
    private addReportListener;
    private stopObserver;
    private startObserver;
    private _handleInit;
    private _handleMessage;
    constructor(config?: {});
    apply({ sendMessage }: {
        sendMessage: any;
    }): {
        $logStop: any;
        $logStart: any;
    };
}
export default KeepObserverLog;
