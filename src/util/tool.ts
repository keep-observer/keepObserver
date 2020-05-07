import { warnError } from './console'
import md5 from 'md5'
import hash from 'hash-string'
import safeStringify from 'fast-safe-stringify'

/**
 * 根据时间搓 返回时间
 * @param date format
 * @return string
 */
export function dateFormat(date, format) {
    if (!format || typeof format !== 'string') {
        console.error('format is undefiend or type is Error');
        return '';
    }
    date = date instanceof Date ? date : (typeof date === 'number' || typeof date === 'string') ? new Date(date) : new Date();
    //解析
    var formatReg = {
        'y+': date.getFullYear(),
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
    }
    for (var reg in formatReg) {
        if (new RegExp(reg).test(format)) {
            var match = RegExp.lastMatch;
            format = format.replace(match, formatReg[reg] < 10 ? '0' + formatReg[reg] : formatReg[reg].toString());
        }
    }
    return format;
}


/**
 * 检查script基本数据类型
 * @param mixed value
 * @return boolean
 */
export function isNumber(value) {
    return Object.prototype.toString.call(value) == '[object Number]';
}
export function isString(value) {
    return Object.prototype.toString.call(value) == '[object String]';
}
export function isArray(value) {
    return Object.prototype.toString.call(value) == '[object Array]';
}
export function isBoolean(value) {
    return Object.prototype.toString.call(value) == '[object Boolean]';
}
export function isRegExp(value) {
    return Object.prototype.toString.call(value) == "[object RegExp]";
}
export function isDateObject(value) {
    return Object.prototype.toString.call(value) == "[object Date]";
}
export function isUndefined(value) {
    return value === undefined;
}
export function isNull(value) {
    return value === null;
}
export function isExist(value){
    return !isUndefined(value) && !isNull(value)
}
export function isSymbol(value) {
    return Object.prototype.toString.call(value) == '[object Symbol]';
}
export function isSVGElement(value){
    return isElement(value) && ( value instanceof SVGElement || value.ownerSVGElement)
}
export function isObject(value) {
    return (
        Object.prototype.toString.call(value) == '[object Object]' ||
        // if it isn't a primitive value, then it is a common object
        (!isNumber(value) &&
            !isString(value) &&
            !isBoolean(value) &&
            !isDateObject(value) &&
            !isRegExp(value) &&
            !isArray(value) &&
            !isNull(value) &&
            !isFunction(value) &&
            !isUndefined(value) &&
            !isSymbol(value)
        )
    );
}
export function isEmptyObject(obj) {
    if (!isObject(obj)) {
        return true;
    }
    for (var key in obj) {
        return false;
    }
    return true
}
export function isEmptyArray(array) {
    if (!isArray(array)) {
        return true
    }
    return array.length > 0 ? false : true
}
export function isFunction(value) {
    return Object.prototype.toString.call(value) == '[object Function]';
}
export function isElement(value) {
    return (
        typeof HTMLElement === 'object' ? value instanceof HTMLElement : //DOM2
        value && typeof value === "object" && value !== null && value.nodeType === 1 && typeof value.nodeName === "string"
    );
}
export function isWindow(value) {
    var toString = Object.prototype.toString.call(value);
    return toString == '[object global]' || toString == '[object Window]' || toString == '[object DOMWindow]';
}

/**
 * 检查是否是普通空对象
 * @param object obj
 * @return boolean
 */
export function isPlainObject(obj) {
    var hasOwn = Object.prototype.hasOwnProperty;
    // Must be an Object.
    if (!obj || typeof obj !== 'object' || obj.nodeType || isWindow(obj)) {
        return false;
    }
    try {
        if (obj.constructor && !hasOwn.call(obj, 'constructor') && !hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
            return false;
        }
    } catch (e) {
        return false;
    }
    var key;
    for (key in obj) {}
    return key === undefined || hasOwn.call(obj, key);
}


/*
 * 检查是否是class 实例对象
*/
export function isClassObject(obj){
    return isObject(obj) && !isPlainObject(obj)? true : false
}


/*
  转换工具
 */
export function toArray(array) {
    if(Array.from){
        return Array.from(array)
    }
    return Array.prototype.slice.call(array)
}
export function toString(content) {
    if (typeof content === 'string') {
        return content
    }
    return content.toString()
}




/*
    辅助存储保存监控数据
*/
//sessionStorage
export function setSessionStorage(key, value) {
    if (!window.sessionStorage) {
        return;
    }
    key = 'keepObserverData_' + key;
    value = JSON.stringify(value)
    sessionStorage.setItem(key, value);
}
export function getSessionStorage(key) {
    if (!window.sessionStorage) {
        return;
    }
    key = 'keepObserverData_' + key;
    var value = sessionStorage.getItem(key)
    return value ? JSON.parse(value) : '';
}
export function removeSessionStorage(key) {
    if (!window.sessionStorage) {
        return;
    }
    key = 'keepObserverData_' + key;
    sessionStorage.removeItem(key);
}
//localStorage
export function setStorage(key, value) {
    if (!window.localStorage) {
        return;
    }
    key = 'keepObserverData_' + key;
    value = JSON.stringify(value)
    localStorage.setItem(key, value);
}
export function getStorage(key) {
    if (!window.localStorage) {
        return;
    }
    key = 'keepObserverData_' + key;
    var value = localStorage.getItem(key)
    return value ? JSON.parse(value) : '';
}
export function removeStorage(key) {
    if (!window.localStorage) {
        return;
    }
    key = 'keepObserverData_' + key;
    localStorage.removeItem(key);
}





/*
    参考Vconsole 生产唯一ID
 */
export function getUniqueID() {
    var id = 'xxxxxxxx-xxx-t-xxx--xxxxxxxx'.replace(/[xyt]/g, function(c) {
        var r = Math.random() * 16 | 0,
            t = new Date().getTime(),
            v = c == 'x' ? r : (c == 't' ? t :(r & 0x3 | 0x8));
        return  v.toString(16);
    });
    return id;
}




/*
    深度合并内容
    引用类型克隆合并
    arguments[0] = target
    arguments type is Object Or Array
    多内容合并覆盖优先级: arguments[0]<arguments[1]<arguments[2]..
    如果sources 不是数组或者对象 则直接忽略
 */
export function extend(...arg) {
	var args = toArray(arguments);
	if (args.length === 0) {
		console.error("extends params is undefined");
		return {};
	}
	if (args.length === 1) {
		return args[0];
	}
	var target = args[0];
	var sources = args.slice(1, args.length);
	if (!isObject(target) && !isArray(target)) {
		target = {};
	}
	sources.map(item => {
		//防止死循环
		if (target === item) {
			return false;
		}
		//如果内容是对象
		if (isObject(item)) {
			//开始遍历
			for (var key in item) {
				//如果内容是对象
				if (isObject(item[key]) && !isEmptyObject(item[key])) {
					//修正数据
					target[key] = target[key] && isObject(target[key]) ? target[key] : {};
					target[key] = extend(target[key], item[key]);
				} else if (isArray(item[key]) && !isEmptyArray(item[key])) {
					//修正数据
					target[key] =target[key] && isArray(target[key]) ? target[key] : [];
					target[key] = extend(target[key], item[key]);
				}else if (isObject(item[key]) && isEmptyObject(item[key])){
					target[key] = {}
				}else if (isArray(item[key]) && isEmptyArray(item[key])){
					target[key] = []
				}else {
					//基本类型直接赋值
					target[key] = item[key];
				}
			}
		} else if (isArray(item)) {
			for (var i = 0; i < item.length; i++) {
				//如果内容是对象
				if (isObject(item[i]) && !isEmptyObject(item[i])) {
					//修正数据
					target[i] = target[i] && isObject(target[i]) ? target[i] : {};
					target[i] = extend(target[i], item[i]);
				} else if (isArray(item[i]) && !isEmptyArray(item[i])) {
					//修正数据
					target[i] = target[i] && isArray(target[i]) ? target[i] : [];
					target[i] = extend(target[i], item[i]);
				}else if (isObject(item[i]) && isEmptyObject(item[i])){
					target[i] = {}
				}else if (isArray(item[i]) && isEmptyArray(item[i])){
					target[i] = []
				}else {
					//基本类型直接赋值
					target[i] = item[i];
				}
			}
		}
		//其他类型直接忽略
	});
	return target;
}





/*
    mixin calss method and params
*/
export function mixin(origin:any,provider:any) {
    if (!provider || !isObject(provider) || isEmptyObject(provider)) {
        warnError('keepObserver $mixin receive params not right')
    }
    for (var key in provider) {
        if (origin[key]) {
            warnError('keepObserver $mixin method key: '+key+' is exist')
            continue
        }
        //不允许重写
        Object.defineProperty(origin,key,{
            configurable: false,
            enumerable: true,
            value:provider[key]
        })
    }
}



/**
 * @filter: 
 * @param obj { array and object} 
 * @param call { array.filter(callback)} 
 * @return: new obj
 */
export function filter(obj,callback){
	if((!isArray(obj) && !isObject(obj)) || !isFunction(callback)){
		return obj
	}
	if(isArray(obj)){
		return obj.filter(callback)
	}
	let newObje = {}
	for(let key in obj){
		let value = obj[key]
		if(callback(value,key)){
			newObje[key] = value
		}
	}
	return newObje
}



/**
 * @map: 
 * @param obj { array and object} 
 * @param call { array.filter(callback)} 
 * @return: new obj
 */
export function map(obj,callback){
	if((!isArray(obj) && !isObject(obj)) || !isFunction(callback)){
		return obj
	}
	if(isArray(obj)){
		return obj.map(callback)
	}
	let newObje = {}
	for(let key in obj){
		let value = obj[key]
		newObje[key] = callback(value,key)
	}
	return newObje
}


/**
 * @map: 
 * @param obj { array and object} 
 * @param call { array.filter(callback)} 
 * @return: new Array
 */
export function mapToArray(obj,callback){
	if((!isArray(obj) && !isObject(obj)) || !isFunction(callback)){
		return obj
	}
	if(isArray(obj)){
		return obj.map(callback)
	}
	let newArray = []
	for(let key in obj){
		let value = obj[key]
		newArray.push(callback(value,key))
	}
	return newArray
}



export function throttleWrap(delay){
    return function(Fn:Function){
        var timeout =null;
        return  function(){
            var arg = arguments
            if(timeout){ clearTimeout(timeout);};
            timeout = setTimeout(()=>{
                Fn(arg)
            },delay);
        }
    }
}


export function debounceWrap(delay){
    return function(Fn:Function){
        var timeout =null;
        return  function(...any){
            let arg = arguments;
            if(timeout !== null){ 
                return false
            };
            timeout = setTimeout(()=>{
                Fn(arg)
                clearTimeout(timeout);
                timeout = null;
            },delay);
        }
    }
}


export function objectStringify(object:any):string{
    return safeStringify(object,(key, value)=>{
        if(isWindow(value)){
            return '[Window]'
        }
        if(isElement(value)){
            return '[DomElement]'
        }
        return value
    })
}



export function getHashCode(object:any):string{
    //Times33
    try{
        const hashCode = hash(objectStringify(object))               //md5(objectStringify(object))
        return toString(hashCode)
    }catch(err){
        return toString(hash(toString(err)))                        //md5(toString(err))
    }
}



export function substringLimt(text:string,limt=200,flag=true):string{
    text = isString(text)?text:toString(text)
    return text.substring(0,text.length>limt?limt:text.length)+(text.length>limt&&flag?'...':'');
}


