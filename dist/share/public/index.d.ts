import { pipeOptons } from '../../types/pipe';
import { reportParams } from '../../types/report';
declare class KeepObserverPublic {
    private eventListener;
    private middleWareInstance;
    _develop: boolean;
    constructor(config: any);
    useMiddle(): void;
    runMiddle(): void;
    addReportListener(callback: any): void;
    noticeReport(reportParams: reportParams, control: pipeOptons): false | Promise<any[]>;
}
export default KeepObserverPublic;
