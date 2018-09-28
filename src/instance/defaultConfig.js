/*
 	keepObserver 默认配置
*/


export default {
    //分发队列情况下,是否允许接收消息队列加锁
    queueLock: true,
    //是否允许定时强制解锁
    timeOutUnlock: true,
    //接收消息队列默认解锁时间
    forceUnlockTime: 1000,
}