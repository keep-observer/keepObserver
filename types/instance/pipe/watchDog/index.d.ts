declare class WatchDog {
    private _config;
    constructor(config?: {});
    limtWatch(fn: Function, anomalyCallback: Function): (...params: any[]) => any;
}
export default WatchDog;
