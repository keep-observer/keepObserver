import { KeepObserverPublic } from '@util/index';
import keepObserverPipe from '../index';
import { catchParams } from '../../../types/pipe';
import { middlesFn } from '../../../types/middle';
declare class PipeUser extends KeepObserverPublic {
    private handleReportData;
    readonly pipeIndex: number;
    readonly middleScopeNames: string[];
    sendMessage: (catchParams: catchParams) => Promise<{}>;
    extendsReportParams: (params: any) => any;
    registerReciveMessage: (fn: Function, scope?: any) => void;
    registerSendDoneCallback: (fn: Function) => void;
    useExtendMiddle: (scopeName: string, middlesFn: middlesFn) => any;
    runExtendMiddle: (scopeName: string, ...args: any[]) => Promise<{}>;
    static onSendDoneCallbackMap: any[];
    static emitSendDoneCallback: () => void;
    constructor(index: number, $pipe: keepObserverPipe, scope: any);
}
export default PipeUser;
