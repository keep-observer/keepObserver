import { consoleTools,tool,devLog} from '@util/index'

import keepObserverPipe from '../index'

import { catchParams } from '../../../types/pipe'
import { reportParams } from '../../../types/report'
import { middlesFn } from '../../../types/middle'




class PipeUser{

    readonly pipeIndex:number
    public sendPipeMessage:(catchParams:catchParams)=>Promise<{}>
    public extendsReportParams: (params:any)=>any
    public registerRecivePipeMessage: (fn:Function, scope?:any)=>void
    public useMiddle: (scopeName:string,middlesFn:middlesFn)=>any
    public runMiddle:(scopeName:string,...args:any[])=>Promise<{}>

    constructor(index:number,$pipe:keepObserverPipe){
        this.pipeIndex = index;
         //register send message middle 
         //  1 -> 2 -> 3 -> 2 -> 1
        const [ sendMessage ] = $pipe._publicMiddleScopeNames
        $pipe.useMiddle(sendMessage,(interrupt,next)=>(reportParams:reportParams)=>{
            devLog($pipe._develop,reportParams)
            next(reportParams)
            return $pipe.$mq.sendPipeMessage(index, reportParams)
        })
        // init api
        this.sendPipeMessage= (catchParams:catchParams)=>{
            const [ sendMessage ] = $pipe._publicMiddleScopeNames
            const reportParams = $pipe.handleReportData(catchParams)
            return $pipe.runMiddle(sendMessage,reportParams)
        }
        this.runMiddle = (scopeName:string,...args:any[]):Promise<{}>=>{
            return $pipe.$keepObserver.runMiddle(scopeName,...args)
        }
        this.useMiddle = (scopeName:string,middlesFn:middlesFn)=>{
            return $pipe.$keepObserver.useMiddle(scopeName,middlesFn)
        }
        this.extendsReportParams=(params:any)=>{
            return $pipe.$keepObserver.extendReportParams(params)
        }
        this.registerRecivePipeMessage = $pipe.$mq.registerRecivePipeMessage(index)
    }
}




export default PipeUser

