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
    private stopObserver;
    private startObserver;
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
        $networkStop: any;
        $networkStart: any;
    };
}
export default KeepObserverNetwork;
