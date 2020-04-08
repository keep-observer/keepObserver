import { KeepObserverPublic } from '@util/index'
import { consoleTools,Tools} from '@util/index'

import keepObserverPipe from '../index'
import WatchDog from '../WatchDog/index'

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
        //index
        this.pipeIndex = index;
        //register watchDog
        const $watchDog = new WatchDog()
        //provide sendMessage
        this.sendMessage = $watchDog.sendMessageLimtWatch(/* watch fn */(catchParams:catchParams)=>{
            //mq handle process message ignore
            if($pipe.$mq.isRun) return
            //send message
            var isError = true;
            const [ sendMessage ] = $pipe._publicMiddleScopeNames
            const reportParams = this.handleReportData(catchParams)
            //  1 -> 2 -> 3 -> 2 -> 1
            return this.runMiddle(sendMessage,reportParams)
                        .then((middleReportParams:reportParams)=>{
                            isError = false
                            consoleTools.devLog($pipe._develop,middleReportParams)
                            $pipe.$mq.sendPipeMessage(index, middleReportParams)
                        })
                        //check error
                        .finally(()=>{
                            if(isError){
                                consoleTools.devLog($pipe._develop,reportParams)
                                $pipe.$mq.sendPipeMessage(index, reportParams)
                            }
                        })
        },/* anomaly callback */(anomalyMessage)=>{
            $pipe.$keepObserver.runMiddle('error',anomalyMessage)
        })
        //extend middle
        this.runExtendMiddle = (scopeName:string,...args:any[]):Promise<{}>=>{
            return $pipe.$keepObserver.runMiddle(scopeName,...args)
        }
        this.useExtendMiddle = (scopeName:string,middlesFn:middlesFn)=>{
            return $pipe.$keepObserver.useMiddle(scopeName,middlesFn)
        }
        //extend report params
        this.extendsReportParams=(params:any)=>{
            return $pipe.$keepObserver.extendReportParams(params)
        }
        //provide reciveMessage 
        this.registerReciveMessage = $pipe.$mq.registerRecivePipeMessage(index,scope)
    }
}




export default PipeUser


