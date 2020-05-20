import { middlesFn } from '../../../types/middle';
declare class KeepObserverMiddleWare {
    _develop: boolean;
    private _middles;
    private _runMiddleBuff;
    private _runMiddleTimeOut;
    constructor({ develop, runMiddleTimeOut }: {
        develop?: boolean;
        runMiddleTimeOut?: number;
    });
    static publicMiddles: {};
    static currentRunMiddle: boolean;
    static usePublishMiddles(scopeName: string, middlesFn: middlesFn): {
        [propName: string]: middlesFn[];
    };
    use(scopeName: string, middlesFn: middlesFn): any;
    run(scopeName: string, ...args: any[]): Promise<{}>;
    throwError(...err: any[]): void;
}
export default KeepObserverMiddleWare;
