import KeepObserver from '../../@core/instance'
import KeepObserverLoad from '../../@core/performance/load'


debugger;
//实例
const ko = new KeepObserver({ develop:true })
//注册一个Load服务插件
ko.use(KeepObserverLoad)






