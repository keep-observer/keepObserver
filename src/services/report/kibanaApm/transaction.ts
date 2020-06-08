
//elastic-apm-js-core 的ServiceFactory提供的TransactionService是返回的单例模式
//暂时只能从源代码库中拉取原始Transaction
import Transaction  from 'elastic-apm-js-core/src/performance-monitoring/transaction'
import { createServiceFactory } from "elastic-apm-js-core";
import { kibanaApmUserContext } from '../../../types/report'
import { Tools,consoleTools } from '@util/index'




class TracerTransaction {
    private serviceFactory: any;
    private customServiceFactory: any;
    private configService: any;
    //part
    private Initialized = false;
    private Customonitoring: any;
    private ApmServer: any

    
    constructor(config) {
        this.serviceFactory = createServiceFactory()
        this.configService = this.serviceFactory.getService("ConfigService");
        this.configService.setConfig(config);
        this.serviceFactory.init();
        //customTransaction
        this.initCustomTransaction(config)
    }
    // custom transcation
    private initCustomTransaction = (config) =>{
        this.customServiceFactory = createServiceFactory()
        const ConfigService = this.customServiceFactory.getService("ConfigService");
        ConfigService.setConfig(config);
        this.customServiceFactory.init();
        this.Customonitoring = this.customServiceFactory.getService("PerformanceMonitoring");
        this.Customonitoring.init();
        this.Customonitoring.cancelPatchSub();
        this.ApmServer = this.serviceFactory.getService('ApmServer')
        this.Initialized = true
    }


    // api
    public createTransaction = (name: string, type: string) => {
        var transactionService = this.serviceFactory.getService(
            "TransactionService"
        );
        return transactionService.startTransaction(name, type);
    };
    public pageLoad(){
        //加载load监听
        //挂载第一次pageload
        let performanceMonitoring = this.serviceFactory.getService(
            "PerformanceMonitoring"
        );
        performanceMonitoring.init();
        //send page load
        if (this.configService.get("sendPageLoadTransaction")) {
            var transactionService = this.serviceFactory.getService(
                "TransactionService"
            );
            var tr = transactionService.startTransaction(
                (<any>window).location.href,
                "page-load"
            );
            var sendPageLoadMetrics = function() {
                // to make sure PerformanceTiming.loadEventEnd has a value
                setTimeout(() => {
                    if (tr) {
                        tr.detectFinish();
                        //取消elastic-apm自带的log以及xhr相关patch
                        performanceMonitoring.cancelPatchSub();
                    }
                });
            };
            if (document.readyState === "complete") {
                sendPageLoadMetrics();
            } else {
                window.addEventListener(
                    "load",
                    sendPageLoadMetrics.bind(this)
                );
            }
        }
    }
    public catchError(){
        let errorLogging = this.serviceFactory.getService("ErrorLogging");
        errorLogging.registerGlobalEventListener();
    }
    public setUserInfo = (userInfo:kibanaApmUserContext) => {
        const configService = this.serviceFactory.getService("ConfigService");
        configService.setUserContext(userInfo);
        var customConfigService = this.customServiceFactory.getService("ConfigService");
        customConfigService.setUserContext(userInfo);
    }
    public captureError (error:string) {
        var errorLogging = this.serviceFactory.getService('ErrorLogging')
        return errorLogging.logError(error)
    }
    public watchCatchError(callback:(message:any)=>void){
        let errorLogging = this.serviceFactory.getService("ErrorLogging");
        const logErrorEventPatch = errorLogging.logErrorEvent
        errorLogging.logErrorEvent = function(errorEvent,sendImmediately){
            callback(errorEvent)
            return logErrorEventPatch.call(errorLogging,errorEvent,sendImmediately)
        }
    }
    public createCustomEventTransaction = (name:string,type:string,options?:any):Transaction => {
        var self = this
        if(!self.Initialized){
            return false;
        }
        var _option = Tools.extend({
            transactionSampleRate:1
        },options)
        var transaction = new Transaction(name,type,_option)
        //添加onEnd事件
        Object.defineProperty(transaction,'onEnd',{
            enumerable: false,
            configurable: false,
            writable: false,
            value:function(){
                if(this instanceof Transaction ){
                    self.Customonitoring.prepareTransaction(this)
                    let payload = self.Customonitoring.createTransactionDataModel(this)
                    self.ApmServer.addTransaction(payload)
                }
            }
        })
        return transaction
    }

    
}




export default TracerTransaction;


