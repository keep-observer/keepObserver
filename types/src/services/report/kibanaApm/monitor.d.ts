import { reportParams } from '../../../types/report';
import { networkType } from '../../../types/network';
import { logType } from '../../../types/log';
import { elementActiveInfoType } from '../../../types/htmlElementActive';
import { trackInfoType } from '../../../types/kibanaApmTrack';
export declare const _handleMonitor: (params: reportParams<any>) => any;
export declare const _handleMonitorLog: (reportParams: reportParams<logType>) => void;
export declare const _handleMonitorNetwork: (reportParams: reportParams<networkType>) => void;
export declare const _handleHtmlElementActive: (reportParams: reportParams<elementActiveInfoType>) => void;
export declare const _handleKibanaApmTrack: (reportParams: reportParams<trackInfoType>) => void;
