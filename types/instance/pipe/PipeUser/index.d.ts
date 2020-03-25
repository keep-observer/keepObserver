import { KeepObserverPublic } from '@util/index';
import keepObserverPipe from '../index';
import { catchParams } from '../../../types/pipe';
import { middlesFn } from '../../../types/middle';
declare class PipeUser extends KeepObserverPublic {
    readonly pipeIndex: number;
    private handleReportData;
    private useMiddle;
    private runMiddle;
    sendMessage: (catchParams: catchParams) => Promise<{}>;
    extendsReportParams: (params: any) => any;
    registerReciveMessage: (fn: Function, scope?: any) => void;
    useExtendMiddle: (scopeName: string, middlesFn: middlesFn) => any;
    runExtendMiddle: (scopeName: string, ...args: any[]) => Promise<{}>;
    constructor(index: number, $pipe: keepObserverPipe, scope: any);
}
export default PipeUser;
