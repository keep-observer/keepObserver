import * as tool from '../tool/index.js';

import KeepObserverDetault from '../default/index.js';
import mixinPipe from './pipe/index.js';




class KeepObserver extends KeepObserverDetault {
    //构造函数
    constructor(config) {
        super()
        /*******  开始本实例配置  *******/
        //获取实例配置
        this._config = config;
        //版本号
        this._version = '1.0.5';
        //项目
        this._project = config.project || 'unKnow';
        //项目版本
        this._projectVersion = config.projectVersion || 'kp_' + this._version;

        mixinPipe(this, config)
    }
}








export default KeepObserver