import { kibanaApmUserContext } from '../../../types/report';
declare class TracerTransaction {
    private serviceFactory;
    private customServiceFactory;
    private configService;
    private Initialized;
    private Customonitoring;
    private ApmServer;
    constructor(config: any);
    private initCustomTransaction;
    private resetApmServiceLog;
    createTransaction: (name: string, type: string) => any;
    pageLoad(): void;
    catchError(): void;
    setUserInfo: (userInfo: kibanaApmUserContext) => void;
    captureError(error: string): any;
    watchCatchError(callback: (message: any) => void): void;
    createCustomEventTransaction: (name: string, type: string, options?: any) => any;
}
export default TracerTransaction;
