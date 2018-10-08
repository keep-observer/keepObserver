import * as tool from '../tool/index.js';

import {
    version
} from '../constants/index';

import KeepObserverDetault from '../default/index.js';
import defaultConfig from './defaultConfig.js';
import mixinPipe from './pipe/index.js';



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
    }
}





module.exports = KeepObserver
module.exports.default = KeepObserver