import { kibanaApmUserContext } from '../../../types/report';
declare class TracerTransaction {
    private serviceFactory;
    private Initialized;
    private PerformanceMonitoring;
    private ApmServer;
    constructor(config: any);
    createTransaction: (name: string, type: string) => any;
    private initCustomTransaction;
    setCustomTransactionUserInfo: (userInfo: kibanaApmUserContext) => void;
    createCustomEventTransaction: (name: string, options?: any) => any;
}
export default TracerTransaction;
