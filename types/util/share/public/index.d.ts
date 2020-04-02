import { catchParams } from '../../../types/pipe';
import { reportParams } from '../../../types/report';
import { middlesFn } from '../../../types/middle';
declare class KeepObserverPublic {
    private _middleWareInstance;
    readonly _publicMiddleScopeNames: string[];
    _develop: boolean;
    middleScopeNames: string[];
    constructor(config?: {});
    static extendReportParams: {};
    static extendReport(params: any): any;
    useMiddle(scopeName: string, middlesFn: middlesFn): any;
    runMiddle(scopeName: string, ...args: any[]): Promise<{}>;
    handleReportData(params: catchParams): reportParams;
}
export default KeepObserverPublic;
