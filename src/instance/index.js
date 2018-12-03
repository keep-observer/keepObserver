import * as tool from '../tool/index.js';

import {
    version
} from '../constants/index';

import KeepObserverDetault from '../default/index.js';
import defaultConfig from './defaultConfig.js';
import mixinPipe from './pipe/index.js';
import mixinMethod from './method/index.js';
import initServer from './init.js'



class KeepObserver extends KeepObserverDetault {
    //构造函数
    constructor(config) {
        super();
        /*******  开始本实例配置  *******/
        //获取实例配置
        this._config = tool.extend(defaultConfig, config);
        //版本号
        this._version = version;
        //混合管道
        mixinPipe(this, config)
        //混合方法
        mixinMethod(this, config)
        //init
        initServer.call(this)
    }
}






module.exports = KeepObserver
module.exports.default = module.exports;


