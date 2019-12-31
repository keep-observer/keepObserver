import { reportParams } from '../../../types/report';
import { middlesFn } from '../../../types/middle';
declare class KeepObserverPublic {
    private _middleWareInstance;
    _publicMiddleScopeNames: string[];
    _develop: boolean;
    constructor(config?: {});
    useMiddle(scopeName: string, middlesFn: middlesFn): any;
    runMiddle(scopeName: string, ...args: any[]): any;
    addReportListener(callback: any): void;
    noticeReport(reportParams: reportParams): void;
}
export default KeepObserverPublic;
