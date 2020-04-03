import { consoleTools,Tools } from '@util/index'
import { catchParams } from '../../../types/pipe'

class WatchDog  {

    private _config:any
    constructor(config={}) {
        this._config = config
    }

    //api
    public sendMessageLimtWatch(fn:Function,anomalyCallback:Function){
        var anomaly = false
        var countBuff = {}
        var resetCountFn = Tools.debounceWrap(1000)(()=>countBuff = {})
        var resetAnomaly = Tools.throttleWrap(3000)(()=>anomaly = false)
        const limtJudgeAnomaly = (count:number,catchParams:catchParams,anomalyCallback:Function)=>{
            //启动定时器每秒恢复一次计数
            resetCountFn()
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
            const { isIgnoreSendRepeat=false,type="undefined",typeName="undefined",data={} } = catchParams || {}
            const key = isIgnoreSendRepeat?'ignore':`${type}_${typeName}_${Tools.getHashCode(data)}`
            const count = countBuff[key]?++countBuff[key]:countBuff[key]=1;
            anomaly = !anomaly?limtJudgeAnomaly(count,catchParams,anomalyCallback):true
            if(anomaly){
                resetAnomaly()
                return Promise.reject('send  Message during 1000ms in Over 20 times,maybe happend Endless loop');
            }
            return fn(catchParams)
        }
        return watchWrap
    }
}





export default WatchDog


