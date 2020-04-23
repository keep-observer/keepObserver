import { kibanaApmUserContext } from '../../../types/report';
export declare function setUserInfo(userContext: kibanaApmUserContext): void;
export declare function captureError(error: string): any;
export declare function createCustomLog(name: string, type?: string, options?: any): any;
