import { pipeOptons } from '../../../types/pipe';
import { reportType } from '../../../types/report';
export declare var addReportListener: (callback: any) => void;
export declare var handleReportData: (content: any, load: any) => {
    reportParams: reportType;
    control: pipeOptons;
};
export declare var noticeReport: (content: any, load: any) => boolean;
