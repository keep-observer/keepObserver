
//elastic-apm-js-core 的ServiceFactory提供的TransactionService是返回的单例模式
//暂时只能从源代码库中拉取原始Transaction
import Transaction  from 'elastic-apm-js-core/src/performance-monitoring/transaction'
import { createServiceFactory } from "elastic-apm-js-core";
import { kibanaApmUserContext } from '../../../types/report'
import { tool } from '@util/index'




class TracerTransaction {
    private serviceFactory: any;
    //part
    private Initialized = false;
    private PerformanceMonitoring: any;
    private ApmServer: any



    constructor(config) {
        this.serviceFactory = createServiceFactory()
        this.initCustomTransaction(config)
    }


    public createTransaction = (name: string, type: string) => {
        var transactionService = this.serviceFactory.getService(
            "TransactionService"
        );
        return transactionService.startTransaction(name, type);
    };
    

    // custom transcation
    private initCustomTransaction = (config) =>{
        var ConfigService= this.serviceFactory.getService("ConfigService");
        ConfigService.setConfig(config);
        this.serviceFactory.init();
        this.PerformanceMonitoring = this.serviceFactory.getService("PerformanceMonitoring");
        this.PerformanceMonitoring.init();
        this.PerformanceMonitoring.cancelPatchSub();
        this.ApmServer = this.serviceFactory.getService('ApmServer')
        this.Initialized = true
    }


    public setCustomTransactionUserInfo = (userInfo:kibanaApmUserContext) => {
        var configService = this.serviceFactory.getService("ConfigService");
        configService.setUserContext(userInfo);
    }


    public createCustomEventTransaction = (name:string,type:string,options?:any):Transaction => {
        var self = this
        if(!self.Initialized){
            return false;
        }
        var _option = tool.extend({
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
                    self.PerformanceMonitoring.prepareTransaction(this)
                    let payload = self.PerformanceMonitoring.createTransactionDataModel(this)
                    self.ApmServer.addTransaction(payload)
                }
            }
        })
        return transaction
    }
    
}




export default TracerTransaction;


