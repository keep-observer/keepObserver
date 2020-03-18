
import { KeepObserverPublic } from '@util/index'
import { pipeUser } from '../../types/pipe'


import MessageQueue from './mq/index'


import {  oldVsersion_Danger_MixinKoInstance } from './oldVsersion'
import { use, injection, registerPipeListenerUser } from './injection'





class keepObserverPipe extends KeepObserverPublic {
    private _config:any
    private $keepObserver:any
    private $mq:MessageQueue
    private pipeUser: pipeUser[]
    //method
    private injection = injection.bind(this)
    private registerPipeListenerUser = registerPipeListenerUser.bind(this)
    private oldVsersion_Danger_MixinKoInstance = oldVsersion_Danger_MixinKoInstance.bind(this)



    constructor(keepObserver, config) {
        super(config)
        //获取实例配置
        this._config = config;
        //获取kp实例
        this.$keepObserver = keepObserver;
        //管道用户
        this.pipeUser = [];
        //消息队列实例
        this.$mq = new MessageQueue(config)
    }
    
    // api
    public use = use.bind(this)
}






export default keepObserverPipe


