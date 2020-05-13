import { reportParams } from '../../../types/report';
import { networkType } from '../../../types/network';
import { logType } from '../../../types/log';
import { elementActiveInfoType } from '../../../types/htmlElementActive';
import { trackInfoType } from '../../../types/kibanaApmTrack';
import { errorType } from '../../../types/error';
export declare const _handleReciceReportMessage: (interrupt: Function, next: Function) => (...params: any[]) => any;
export declare const _handleTrackLog: (params: reportParams<logType>) => void;
export declare const _handleTrackNetwork: (params: reportParams<networkType>) => void;
export declare const _handleTrackHtmlElementActive: (params: reportParams<elementActiveInfoType>) => void;
export declare const _handleTrackError: (params: reportParams<errorType>) => void;
export declare const _handleSendTrackMessage: () => void;
export declare const _handleCreateReport: (type: "pageHashChange" | "pageError") => false | {
    type: string;
    typeName: string;
    data: trackInfoType;
    isError: boolean;
};
