import { middlesFn } from '../../types/middle';
declare class KeepObserverMiddleWare {
    _develop: boolean;
    private _middles;
    private _runMiddleBuff;
    constructor({ develop }: {
        develop?: boolean;
    });
    run(scopeName: string, ...args: any[]): any;
    use(scopeName: string, middlesFn: middlesFn): any;
}
export default KeepObserverMiddleWare;
