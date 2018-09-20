import * as tool from '../tool/index.js';



//相关监控初始化 和一些处理
import _initNetWork from './_network.js';
import _initLog from './_log.js';
import _initVue from './_vue.js';



class KeepObserver {
    //构造函数
    constructor(config) {
        /*******  开始本实例配置  *******/
        //获取实例配置
        this._config = config;
        //版本号
        this._version = '1.0.5';
        //项目
        this._project = config.project || 'unKnow';
        //项目版本
        this._projectVersion = config.projectVersion || 'kp_' + this._version;
        //监听内容
        this.observerKey = {};
    }
}



export default KeepObserver