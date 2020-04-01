import { consoleTools,Tools } from '@util/index'


class WatchDog  {

    private _config:any
    constructor(config={}) {
        this._config = config
    }

    //api
    public limtWatch(fn:Function,anomalyCallback:Function){
        var count = 0;
        var anomaly = false
        var resetCountFn = Tools.debounceWrap(1000)(()=>count = 0)
        var resetAnomaly = Tools.throttleWrap(3000)(()=>anomaly = false)
        const limtJudgeAnomaly = (count:number,anomalyCallback:Function)=>{
            //启动定时器每秒恢复一次计数
            resetCountFn()
            if (count === 10) {
                const msg = 'send  Message during 1000ms in Over 10 times,maybe Anomaly'
                consoleTools.warnError(msg)
                anomalyCallback(msg)
                return false
            }
            if (count > 20) {
                const msg = 'send  Message during 1000ms in Over 20 times,maybe happend Endless loop'
                consoleTools.warnError(msg)
                anomalyCallback(msg)
                return true
            }
            return false;
        }
        const watchWrap = (...params)=>{
            anomaly = !anomaly?limtJudgeAnomaly(++count,anomalyCallback):true
            if(anomaly){
                resetAnomaly()
                return Promise.reject('send  Message during 1000ms in Over 20 times,maybe happend Endless loop');
            }
            return fn(...params)
        }
        return watchWrap
    }
}





export default WatchDog


