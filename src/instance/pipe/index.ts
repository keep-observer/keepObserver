
import * as tool from '../../util/tool';
import KeepObserverPublic from '../../share/public/index'

import { pipeUser } from '../../types/pipe'


import { 
    oldVsersion_Danger_MixinKoInstance,
} from './oldVsersion'
import {
    use,
    injection,
    registerPipeListenerUser,
} from './injection'
import {
    registerRecivePipeMessage
} from './receiveQueue'
import {
    sendPipeMessage,
    noticeListener,
} from './triggerQueue'
import {
    isLock,
    openLock,
    closeLock,
} from './receiveLock'
import {
    preventStackError,
    judgeAnomaly,
    resetStackCount
} from './preventAnomaly'







class keepObserverPipe extends KeepObserverPublic {
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
    private injection = injection.bind(this)
    private registerPipeListenerUser = registerPipeListenerUser.bind(this)
    private registerRecivePipeMessage = registerRecivePipeMessage.bind(this)
    private oldVsersion_Danger_MixinKoInstance = oldVsersion_Danger_MixinKoInstance.bind(this)
    private sendPipeMessage  = sendPipeMessage.bind(this)
    private noticeListener = noticeListener.bind(this)
    private isLock = isLock.bind(this)
    private openLock = openLock.bind(this)
    private closeLock = closeLock.bind(this)
    private preventStackError = preventStackError.bind(this)
    private judgeAnomaly = judgeAnomaly.bind(this)
    private resetStackCount = resetStackCount.bind(this)

    constructor(keepObserver, config) {
        super(config)
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
    }
    
    // api
    public use = use.bind(this)
}






export default keepObserverPipe

