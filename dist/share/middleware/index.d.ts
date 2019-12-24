import { middlesFn, middles } from '../../types/middle';
declare class KeepObserverMiddleWare {
    _develop: boolean;
    private _middles;
    constructor({ develop }: {
        develop?: boolean;
    });
    extend(_middless: middles): any;
    check(scopeName: string): boolean;
    run(scopeName: string, ...args: any[]): any;
    use(scopeName: string, middlesFn: middlesFn): any;
}
export default KeepObserverMiddleWare;
