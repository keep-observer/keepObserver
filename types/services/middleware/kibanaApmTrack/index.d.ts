import { KeepObserverPublic } from '@util/index';
declare class KeepObserverMiddlewareKibanaApmTrack extends KeepObserverPublic {
    private _config;
    private sendMessage;
    private _handleReciceReportMessage;
    private _handleTrackLog;
    private _handleTrackNetwork;
    private _handleTrackHtmlElementActive;
    private _handleTrackError;
    constructor(config?: {});
    apply({ sendMessage, useExtendMiddle }: {
        sendMessage: any;
        useExtendMiddle: any;
    }): void;
}
export default KeepObserverMiddlewareKibanaApmTrack;
