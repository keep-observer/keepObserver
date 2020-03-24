import keepObserverPipe from '../index';
import { catchParams } from '../../../types/pipe';
import { middlesFn } from '../../../types/middle';
declare class PipeUser {
    readonly pipeIndex: number;
    sendPipeMessage: (catchParams: catchParams) => Promise<{}>;
    extendsReportParams: (params: any) => any;
    registerRecivePipeMessage: (fn: Function, scope?: any) => void;
    useMiddle: (scopeName: string, middlesFn: middlesFn) => any;
    runMiddle: (scopeName: string, ...args: any[]) => Promise<{}>;
    constructor(index: number, $pipe: keepObserverPipe);
}
export default PipeUser;
