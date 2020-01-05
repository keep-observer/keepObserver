import { KeepObserverPublic } from '@util/index';
declare class KeepObserverVue extends KeepObserverPublic {
    private _config;
    private _vue;
    private _originErrorHandle;
    private addReportListener;
    private stopObserver;
    private startObserver;
    private _handleInit;
    private _handleVueError;
    constructor(config?: {});
    apply(pipe: any): {
        $vueStop: any;
        $vueStart: any;
    };
}
export default KeepObserverVue;
