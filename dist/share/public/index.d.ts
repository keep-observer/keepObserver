import { pipeOptons } from '../../types/pipe';
import { reportParams } from '../../types/report';
import { middlesFn } from '../../types/middle';
declare class KeepObserverPublic {
    private _middleWareInstance;
    private _eventListener;
    private _publicMiddleScopeNames;
    _develop: boolean;
    constructor(config?: {});
    useMiddle(scopeName: string, middlesFn: middlesFn): any;
    checkMiddle(scopeName: string): boolean;
    runMiddle(scopeName: string, ...args: any[]): any;
    addReportListener(callback: any): void;
    noticeReport(reportParams: reportParams, control: pipeOptons): false | Promise<any[]>;
}
export default KeepObserverPublic;
