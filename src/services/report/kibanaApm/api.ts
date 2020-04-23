
import { kibanaApmUserContext } from '../../../types/report'



export function setUserInfo(userContext: kibanaApmUserContext){ 
    this.tracerTransaction.setUserInfo(userContext)
};

export function captureError (error:string) {
    return this.tracerTransaction.captureError(error)
}


export function createCustomLog(name:string,type='custome',options?:any){
    return this.tracerTransaction.createCustomEventTransaction(name,type,options)
}


