import * as tool from '../../util/tool';
import { warnError } from '../../util/console'




class KeepObserverMiddleWare {
    public _develop :boolean;
    private middles: any[];

    constructor({ develop=false }) {
        //当前是否处于开发模式
        this._develop = develop;
    }

}




export default KeepObserverMiddleWare

