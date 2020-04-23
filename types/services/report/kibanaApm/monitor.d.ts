import { reportParams } from '../../../types/report';
import { networkType } from '../../../types/network';
import { logType } from '../../../types/log';
import { elementActiveInfoType } from '../../../types/htmlElementActive';
export declare const _handleMonitor: (params: reportParams<any>) => any;
export declare const _handleMonitorLog: (params: reportParams<logType>, task: any) => void;
export declare const _handleMonitorNetwork: (reportParams: reportParams<networkType>, task: any) => void;
export declare const _handleHtmlElementActive: (params: reportParams<elementActiveInfoType>, task: any) => void;
