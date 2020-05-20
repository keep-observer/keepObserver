import { KeepObserverPublic } from '@util/index';
declare class KeepObserverNetwork extends KeepObserverPublic {
    private _config;
    private _open;
    private _send;
    private _setRequestHeader;
    private _fetch;
    private timeout;
    private timeoutRequest;
    private networkList;
    private sendMessage;
    private isCatch;
    stopObserver: any;
    startObserver: any;
    cancelPatch: any;
    private _init;
    private _patchXMLAjax;
    private _patchFetch;
    private _handleTimeout;
    private _handleDoneXML;
    private _handleSendXML;
    private _handleJudgeDisbale;
    constructor(config?: {});
    apply({ sendMessage }: {
        sendMessage: any;
    }): {
        networkStop: any;
        networkStart: any;
        networkCancelPatch: any;
    };
}
export default KeepObserverNetwork;
