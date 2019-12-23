

export type reportParams = {
    type: string;
    typeName: string;
    location: string;
    reportTime: number;
    environment: string;
    data: any;
    project?: string;
    deviceID?: string;
    projectVersion?: string;
    customeInfo?: any;
    preTrackData?: any;
    //标识项
    isMonitorError?: boolean;
    isPerformance?: boolean;
    isAnalyse?: boolean;

}

