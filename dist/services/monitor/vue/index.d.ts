import KeepObserverPublic from '../../../share/public/index';
declare class KeepObserverVue extends KeepObserverPublic {
    private _config;
    private _typeName;
    private _vue;
    private _originErrorHandle;
    private stopObserver;
    private startObserver;
    private _handleInit;
    private _handleVueError;
    private handleReportData;
    constructor(config?: {});
    apply(pipe: any): {
        $vueStop: any;
        $vueStart: any;
    };
}
export default KeepObserverVue;
