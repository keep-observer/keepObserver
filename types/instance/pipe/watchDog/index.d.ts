import { catchParams } from '../../../types/pipe';
declare class WatchDog {
    private _config;
    constructor(config?: {});
    sendMessageLimtWatch(fn: (catchParams: catchParams, contendHashCode: string) => Promise<any>, anomalyCallback: (msg: string) => Promise<any>): (catchParams: catchParams) => Promise<any>;
}
export default WatchDog;
