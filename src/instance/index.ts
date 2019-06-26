import * as tool from '../util/tool.js';
import getDeviceId from '../util/deviceID'

import {
    version
} from '../constants/index';
import defaultConfig from './defaultConfig';


import keepObserverPipe from './pipe/index';
import keepObserverMethod from './method/index';



class KeepObserver{
    private _config: any
    private _props: any
    //method
    private use:any
    private updateVersionClearCache:any

    //构造函数
    constructor(config) {
        /*******  开始本实例配置  *******/
        //获取实例配置
        this._config = tool.extend(defaultConfig, config ,{
            version:version,
            deviceID:getDeviceId()
        });
        //init
        this.init()
    }


    private init(){
         //混合管道
         var pipe = new keepObserverPipe(this, this._config).apply()
         var method = new keepObserverMethod(this, this._config).apply()
         tool.mixin(this,pipe)
         tool.mixin(this,method)
        //是否需要更新版本清除缓存
        if(this._config.projectVersion && this._config.updateVersionClearCache){
            this.updateVersionClearCache();
        }
    }
}







module.exports = KeepObserver
module.exports.default = module.exports;

// export default KeepObserver




