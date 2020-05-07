import { KeepObserverPublic } from '@util/index';
declare class KeepObserverMiddlewareKibanaApmTrack extends KeepObserverPublic {
    private _config;
    private sendMessage;
    private isSendlock;
    private isWaitSend;
    private isPageChangeHandle;
    private isCancelTrack;
    private trackInfo;
    private pageInfo;
    private trackList;
    private _pushState;
    private _replaceState;
    private resgisterPageHashChangeEventListener;
    private checkPageHashUrlChange;
    private _handleHashPageChange;
    private _pageStart;
    private _pageHashNext;
    private _handleSendTrackMessage;
    private _handleCreateReport;
    private _handleReciceReportMessage;
    private _handleTrackLog;
    private _handleTrackNetwork;
    private _handleTrackHtmlElementActive;
    private _handleTrackError;
    cancelTrack: any;
    startTrack: any;
    cancelPatch: any;
    constructor(config?: {});
    apply({ sendMessage, useExtendMiddle, registerSendDoneCallback }: {
        sendMessage: any;
        useExtendMiddle: any;
        registerSendDoneCallback: any;
    }): {
        cancelTrack: any;
        startTrack: any;
        cancelHashChangePatch: any;
    };
}
export default KeepObserverMiddlewareKibanaApmTrack;
