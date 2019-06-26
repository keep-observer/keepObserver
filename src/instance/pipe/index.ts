
import * as tool from '../../util/tool.js';


import { pipeUser } from '../type'


import * as injectionServer from './injection'
import * as receiveServer from './receiveQueue'
import * as triggerServer from './triggerQueue'
import * as queueLockServer from './receiveLock'
import * as preventAnomaly from './preventAnomaly'







class keepObserverPipe {
    private _config:any
    private _props:any
    private $keepObserver:any
    private waiting:boolean
    private receiveLock:boolean
    private stackCountBuff:any
    private stackTimeFlag:boolean
    private messageQueue:any[]
    private pipeUser: pipeUser[]
    //method
    private injection:any
    private registerPipeListenerUser:any
    private registerRecivePipeMessage:any
    private mixinKoInstance: any
    public use:any

    constructor(keepObserver, config) {
        //获取实例配置
        this._config = config;
        //获取kp实例
        this.$keepObserver = keepObserver;
        //消息是否在等待
        this.waiting = false;
        //消息接收锁
        this.receiveLock = false;

        //堆栈计数对象
        this.stackCountBuff = {};
        //堆栈运行定时器
        this.stackTimeFlag = false;
        //消息队列
        this.messageQueue = [];
        //管道用户
        this.pipeUser = [];


        //混入自身方法
        tool.mixin(this,injectionServer)
        tool.mixin(this,receiveServer)
        tool.mixin(this,triggerServer)
        tool.mixin(this,queueLockServer)
        tool.mixin(this,preventAnomaly)
    }


    //提供需要挂载在keepObserver上的方法
    public apply() {
        return {
            use: this.use
        }
    }
}






export default keepObserverPipe