


class WatchDog  {
    private receiveLock:boolean
    private stackCountBuff:any
    private stackTimeFlag:boolean

    
    constructor(config) {
        //消息接收锁
        this.receiveLock = false;
        //堆栈计数对象
        this.stackCountBuff = {};
        //堆栈运行定时器
        this.stackTimeFlag = false;
    }
}




export default WatchDog