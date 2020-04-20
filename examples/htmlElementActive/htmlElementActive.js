import KeepObserver from '../../@core/instance'
import KeepObserverHtmlElementActive from '../../@core/monitor/htmlElementActive'


//实例
const ko = new KeepObserver({ develop:true })

/*
    simple
    ------------
 */
//注册一个服务插件
ko.use(KeepObserverHtmlElementActive)



//开始测试


