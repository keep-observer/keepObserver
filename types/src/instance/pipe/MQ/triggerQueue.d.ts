import { catchParams } from '../../../types/pipe';
export declare var sendPipeMessage: (id: number, params: catchParams) => Promise<{}>;
export declare var noticeListener: (queue: any) => Promise<[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]>;
