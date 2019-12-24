import KeepObserverPublic from '../../../share/public/index';
declare class KeepObserverSimpleH5Analyse extends KeepObserverPublic {
    private _config;
    private _addEventListener;
    private _removeEventListener;
    private _domListener;
    private analyseDomList;
    private uniqueId;
    private reportData;
    private getDomTitle;
    private handleAnalyseDomList;
    private stopAnalyse;
    private startAnalyse;
    private clearSaveRecive;
    private handleReportData;
    private registerAnalyseDomEvent;
    private _handleEventTarget;
    private _recoverEventTarget;
    private begine;
    private destroy;
    private triggerAcitveReport;
    private triggerInitReport;
    private createReportData;
    constructor(config?: {});
    apply(pipe: any): {
        $simpleH5AnalyseClearSaveRecive: any;
        $simpleH5AnalyseStop: any;
        $simpleH5AnalyseBegine: any;
    };
}
export default KeepObserverSimpleH5Analyse;
