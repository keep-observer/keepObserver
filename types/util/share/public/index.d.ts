import { catchParams } from '../../../types/pipe';
import { reportParams } from '../../../types/report';
import { middlesFn } from '../../../types/middle';
declare class KeepObserverPublic {
    private _middleWareInstance;
    private _publicMiddleScopeNames;
    _develop: boolean;
    middleScopeNames: string[];
    constructor(config?: {});
    static extendReportParams: {};
    static extendReport(params: any): any;
    useMiddle(scopeName: string, middlesFn: middlesFn): any;
    runMiddle(scopeName: string, ...args: any[]): any;
    addReportListener(callback: any): void;
    handleReportData(params: catchParams): reportParams;
    noticeReport(catchParams: catchParams): void;
}
export default KeepObserverPublic;
