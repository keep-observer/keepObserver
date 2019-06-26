
import * as tool from '../../util/tool.js';
import * as updateServer from './update'




class keepObserverMethod  {
    private _config:any
    private $keepObserver:any
    //method
    private updateVersionClearCache:any

    constructor(keepObserver:any, config:any) {
        //获取实例配置
        this._config = config;
        //获取kp实例
        this.$keepObserver = keepObserver;
        //混入自身方法
        tool.mixin(this,updateServer)
    }


    //提供需要挂载在keepObserver上的方法
    public apply() {
        return {
            updateVersionClearCache: this.updateVersionClearCache
        }
    }
}








export default keepObserverMethod


