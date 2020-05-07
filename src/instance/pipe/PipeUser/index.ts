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
    public registerSendDoneCallback: (fn:Function)=>void
    public useExtendMiddle: (scopeName:string,middlesFn:middlesFn)=>any
    public runExtendMiddle:(scopeName:string,...args:any[])=>Promise<{}>


    static onSendDoneCallbackMap = []
    static emitSendDoneCallback = function(){
        this.onSendDoneCallbackMap.forEach(fn => {
            try{
                fn()
            }catch(e){
                consoleTools.warnError(`emitSendDoneCallback find error:${e}`)
            }
        });
    }
    

    constructor(index:number,$pipe:keepObserverPipe,scope:any){
        super()
        //index
        this.pipeIndex = index;
        //register watchDog
        const $watchDog = new WatchDog()
        //provide sendMessage
        this.sendMessage = $watchDog.sendMessageLimtWatch(/* watch fn */(catchParams:catchParams,contendHashCode:string)=>{
            //mq handle process message ignore
            if($pipe.$mq.isRun) return Promise.reject('mq handle process message ignore')
            //send message
            var isError = true;
            const [ sendMessage ] = $pipe._publicMiddleScopeNames
            const reportParams = this.handleReportData({
                ...catchParams,
                contendHashCode
            })
            //  1 -> 2 -> 3 -> 2 -> 1
            return this.runMiddle(sendMessage,reportParams)
                        .then((middleReportParams:reportParams<any>)=>{
                            isError = false
                            if(!middleReportParams){
                                (this.constructor as any).emitSendDoneCallback()
                                return false;
                            }
                            consoleTools.devLog($pipe._develop,middleReportParams)
                            $pipe.$mq.sendPipeMessage(index, middleReportParams).then(()=>{
                                (this.constructor as any).emitSendDoneCallback()
                            })
                        })
                        //check middle exec error
                        .finally(()=>{
                            if(isError){
                                consoleTools.devLog($pipe._develop,reportParams)
                                $pipe.$mq.sendPipeMessage(index, reportParams).then(()=>{
                                    (this.constructor as any).emitSendDoneCallback()
                                })
                            }
                        })
        },/* anomaly callback */(anomalyMessage)=>{
            return $pipe.$keepObserver.runMiddle('error',anomalyMessage)
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
        //register send done callback
        this.registerSendDoneCallback = (callback:Function)=>{
            (this.constructor as any).onSendDoneCallbackMap.push(callback)
        }
    }
}




export default PipeUser


