


export type trackInfoType = {
    type:'pageHashChange'|'PageError',
    url:string,
    tags: pageChangeInfoType|pageErrorInfoType,
    spans:{name:string,type:string}[]
}


export type pageChangeInfoType = {
    startUrl:string,
    startDate:number,
    nextUrl:string,
    nextDate:number
}


export type pageErrorInfoType ={
    startUrl:string,
    startDate:number,
    findErrorDate:number,
    errorContent:string,
}


export type trackReportType = {
    type: 'monitor'; 
    typeName: 'kibanaApmTrack';
    data: trackInfoType;
    //标识项
    isError?: boolean;
}


