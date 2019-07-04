import { pipeOptons } from '../../types/pipe';
import { reportType } from '../../types/report';
export declare var addReportListener: (callback: any) => void;
export declare var handleReportDataResponse: (type: any, content: any, url: any) => {
    reportParams: reportType;
    control: pipeOptons;
};
export declare var noticeResponse: (type: any, content: any, url: any) => boolean;
