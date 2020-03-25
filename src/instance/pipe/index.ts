
import { KeepObserverPublic } from '@util/index'
import PipeUser from './PipeUser/index'
import MessageQueue from './MQ/index'
import { use, injection } from './injection'


import KeepObserver from '../index'


class keepObserverPipe extends KeepObserverPublic {
    private _config:any
    public $keepObserver:any
    public $mq:MessageQueue
    private pipeUser: PipeUser[]
    //继承属性
    readonly _publicMiddleScopeNames: string[]      //继承属性
    public useMiddle:Function                       //继承属性
    public runMiddle:Function                       //继承属性
    public _develop: boolean                        //继承属性
    public handleReportData:Function                //继承属性
    //method
    private injection = injection.bind(this)
    // api
    public use = use.bind(this)


    constructor(keepObserver:KeepObserver, config) {
        super(config)
        //获取实例配置
        this._config = config;
        //获取kp实例
        this.$keepObserver = keepObserver;
        //消息队列实例
        this.$mq = new MessageQueue(config)
        //管道用户
        this.pipeUser = [];
    }
}






export default keepObserverPipe



