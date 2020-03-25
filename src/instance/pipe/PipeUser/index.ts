import { KeepObserverPublic } from '@util/index'
import { consoleTools,tool} from '@util/index'

import keepObserverPipe from '../index'

import { catchParams } from '../../../types/pipe'
import { reportParams } from '../../../types/report'
import { middlesFn } from '../../../types/middle'




class PipeUser extends KeepObserverPublic{

    readonly pipeIndex:number
    private handleReportData:Function           //继承属性
    private useMiddle:Function                  //继承属性
    private runMiddle:Function                  //继承属性
    //provide
    public sendMessage:(catchParams:catchParams)=>Promise<{}>
    public extendsReportParams: (params:any)=>any
    public registerReciveMessage: (fn:Function, scope?:any)=>void
    public useExtendMiddle: (scopeName:string,middlesFn:middlesFn)=>any
    public runExtendMiddle:(scopeName:string,...args:any[])=>Promise<{}>

    constructor(index:number,$pipe:keepObserverPipe,scope:any){
        super()
        this.pipeIndex = index;
         //register send message middle 
         //  1 -> 2 -> 3 -> 2 -> 1
        const [ sendMessage ] = $pipe._publicMiddleScopeNames
        this.useMiddle(sendMessage,(interrupt,next)=>(reportParams:reportParams)=>{
            consoleTools.devLog($pipe._develop,reportParams)
            $pipe.$mq.sendPipeMessage(index, reportParams)
            return next(reportParams)
        })
        // init api
        this.sendMessage= (catchParams:catchParams)=>{
            const [ sendMessage ] = $pipe._publicMiddleScopeNames
            const reportParams = this.handleReportData(catchParams)
            return this.runMiddle(sendMessage,reportParams)
        }
        this.runExtendMiddle = (scopeName:string,...args:any[]):Promise<{}>=>{
            return $pipe.$keepObserver.runMiddle(scopeName,...args)
        }
        this.useExtendMiddle = (scopeName:string,middlesFn:middlesFn)=>{
            return $pipe.$keepObserver.useMiddle(scopeName,middlesFn)
        }
        this.extendsReportParams=(params:any)=>{
            return $pipe.$keepObserver.extendReportParams(params)
        }
        this.registerReciveMessage = $pipe.$mq.registerRecivePipeMessage(index,scope)
    }
}




export default PipeUser

