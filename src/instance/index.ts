import * as tool from '../util/tool';
import getDeviceId from '../util/deviceID'
import defaultConfig from './defaultConfig';

import {
    version
} from '../constants/index';
import {
    updateVersionClearCache,
} from './method/update';
import {
    init
} from './method/init'

import keepObserverPipe from './pipe/index';



class KeepObserver{
    private _config: any
    private _pipe: any
    //method
    private init = init.bind(this)
    private updateVersionClearCache = updateVersionClearCache.bind(this);

    constructor(config:any) {
        //获取实例配置
        this._config = tool.extend(defaultConfig, config ,{
            version:version,
            deviceID:getDeviceId()
        });
        //管道实例
        this._pipe = new keepObserverPipe(this, this._config)
        //init
        this.init()
    }

    //api
    public use(...args){
        return this._pipe.use(args)
    }
}







module.exports = KeepObserver
module.exports.default = module.exports;





