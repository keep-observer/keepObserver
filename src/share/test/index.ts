import * as tool from '../../util/tool';
import { warnError } from '../../util/console'




class KeepObserverTest{
    public _develop :boolean;
    public _test: boolean;

    constructor({ develop=false , test=false }) {
        //当前是否处于开发模式
        this._develop = develop;
        //当前是否需要打印测试
        this._test = test;
    }

}




export default KeepObserverTest

