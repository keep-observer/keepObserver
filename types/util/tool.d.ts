/**
 * 根据时间搓 返回时间
 * @param date format
 * @return string
 */
export declare function dateFormat(date: any, format: any): any;
/**
 * 检查script基本数据类型
 * @param mixed value
 * @return boolean
 */
export declare function isNumber(value: any): boolean;
export declare function isString(value: any): boolean;
export declare function isArray(value: any): boolean;
export declare function isBoolean(value: any): boolean;
export declare function isRegExp(value: any): boolean;
export declare function isDateObject(value: any): boolean;
export declare function isUndefined(value: any): boolean;
export declare function isNull(value: any): boolean;
export declare function isExist(value: any): boolean;
export declare function isSymbol(value: any): boolean;
export declare function isSVGElement(value: any): any;
export declare function isObject(value: any): boolean;
export declare function isEmptyObject(obj: any): boolean;
export declare function isEmptyArray(array: any): boolean;
export declare function isFunction(value: any): boolean;
export declare function isElement(value: any): boolean;
export declare function isWindow(value: any): boolean;
/**
 * 检查是否是普通空对象
 * @param object obj
 * @return boolean
 */
export declare function isPlainObject(obj: any): any;
export declare function isClassObject(obj: any): boolean;
export declare function toArray(array: any): any;
export declare function toString(content: any): any;
export declare function setSessionStorage(key: any, value: any): void;
export declare function getSessionStorage(key: any): any;
export declare function removeSessionStorage(key: any): void;
export declare function setStorage(key: any, value: any): void;
export declare function getStorage(key: any): any;
export declare function removeStorage(key: any): void;
export declare function getUniqueID(): string;
export declare function extend(...arg: any[]): any;
export declare function mixin(origin: any, provider: any): void;
/**
 * @filter:
 * @param obj { array and object}
 * @param call { array.filter(callback)}
 * @return: new obj
 */
export declare function filter(obj: any, callback: any): any;
/**
 * @map:
 * @param obj { array and object}
 * @param call { array.filter(callback)}
 * @return: new obj
 */
export declare function map(obj: any, callback: any): any;
export declare function throttleWrap(delay: any): (Fn: Function) => (...any: any[]) => void;
export declare function debounceWrap(delay: any): (Fn: Function) => (...any: any[]) => boolean;
