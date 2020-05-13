import { consoleTools,Tools } from '@util/index'
import { catchParams } from '../../../types/pipe'

class WatchDog  {

    private _config:any
    constructor(config={}) {
        this._config = config
    }

    //api
    public sendMessageLimtWatch(fn:(catchParams:catchParams,contendHashCode:string)=>Promise<any>,anomalyCallback:(msg:string)=>Promise<any>){
        var anomaly = false
        var receiveCount = 1
        var countBuff = {}
        var resetCountFn = Tools.debounceWrap(1000)(()=>{countBuff = {},receiveCount=1;})
        var resetAnomaly = Tools.throttleWrap(3000)(()=>{anomaly = false})
        const limtJudgeAnomaly = (count:number,catchParams:catchParams,anomalyCallback:Function)=>{
            //启动定时器每秒恢复一次计数
            resetCountFn()
            if(++receiveCount>50){
                const msg = 'send  Message during 1000ms in Over 50 times,maybe Anomaly'
                consoleTools.warnError(msg,catchParams)
                anomalyCallback(msg)
                return false
            }
            //重复技术统计
            if (count === 10) {
                const msg = 'send  Message during 1000ms in Over 10 times,maybe Anomaly'
                consoleTools.warnError(msg,catchParams)
                anomalyCallback(msg)
                return false
            }
            if (count > 20) {
                const msg = 'send  Message during 1000ms in Over 20 times,maybe happend Endless loop'
                consoleTools.warnError(msg,catchParams)
                anomalyCallback(msg)
                return true
            }
            return false;
        }
        const watchWrap = (catchParams:catchParams)=>{
            const { isIgnoreSendRepeat=false,type="undefined",typeName="undefined",data={}, } = catchParams || {}
            //contendHashCode 本来不放这里的，但是因为要做校验，所以在这里生产 后面就不生成了
            const contendHashCode = Tools.getHashCode(data)
            const key = isIgnoreSendRepeat?'ignore':`${type}_${typeName}_${contendHashCode}`
            const count = countBuff[key]?++countBuff[key]:countBuff[key]=1;
            anomaly = !anomaly?limtJudgeAnomaly(count,catchParams,anomalyCallback):true
            if(anomaly){
                resetAnomaly()
                 //catch resolve Uncaught (in promise) error
                return Promise.reject('send  Message during 1000ms in Over 20 times,maybe happend Endless loop').catch(e=>e);
            }
             //catch resolve Uncaught (in promise) error
            return fn(catchParams,contendHashCode).catch(e=>e)
        }
        return watchWrap
    }
}





export default WatchDog


