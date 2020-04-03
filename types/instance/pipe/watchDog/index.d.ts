import { catchParams } from '../../../types/pipe';
declare class WatchDog {
    private _config;
    constructor(config?: {});
    sendMessageLimtWatch(fn: Function, anomalyCallback: Function): (catchParams: catchParams) => any;
}
export default WatchDog;
