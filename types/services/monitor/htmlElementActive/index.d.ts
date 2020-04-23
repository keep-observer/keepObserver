import { KeepObserverPublic } from '@util/index';
declare class KeepObserverHtmlElementActive extends KeepObserverPublic {
    private _config;
    private sendMessage;
    private previouActiveElement;
    private isObserver;
    private queryFlagElement;
    private filterRepeat;
    private createXPath;
    private createTitle;
    private createSendMessage;
    private handleElementEvent;
    stopObserver: any;
    startObserver: any;
    constructor(config?: {});
    apply({ sendMessage }: {
        sendMessage: any;
    }): {
        htmlElementActiveStop: any;
        htmlElementActiveStart: any;
    };
}
export default KeepObserverHtmlElementActive;
