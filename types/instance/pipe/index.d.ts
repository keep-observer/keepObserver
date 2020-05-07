import { KeepObserverPublic } from '@util/index';
import MessageQueue from './MQ/index';
import KeepObserver from '../index';
declare class keepObserverPipe extends KeepObserverPublic {
    private _config;
    $keepObserver: any;
    $mq: MessageQueue;
    private pipeUser;
    private pipeMap;
    readonly _publicMiddleScopeNames: string[];
    useMiddle: Function;
    runMiddle: Function;
    _develop: boolean;
    handleReportData: Function;
    private injection;
    use: any;
    constructor(keepObserver: KeepObserver, config: any);
}
export default keepObserverPipe;
