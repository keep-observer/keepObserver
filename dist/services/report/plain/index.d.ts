import KeepObserverPublic from '../../../share/public/index';
declare class KeepObserverReport extends KeepObserverPublic {
    private _config;
    private _customeInfo;
    private _project;
    private _projectVersion;
    private reportData;
    private develop;
    private developGetMsgLog;
    private develogDeleteLog;
    private develogDiscardLog;
    private $setCustomeReportData;
    private _getReportContent;
    private _saveReportData;
    private _removeReportData;
    private _handleReport;
    private _handleResponse;
    private _createReportData;
    private _handleHook;
    private _handleReportFail;
    private handleReportDataResponse;
    private _init;
    constructor(config?: {
        reportCustom: boolean;
        develop: boolean;
        test: boolean;
        developGetMsgLog: boolean;
        develogDiscardLog: boolean;
        develogDeleteLog: boolean;
    });
    apply(pipe: any): {
        $setCustomeReportData: any;
    };
}
export default KeepObserverReport;
