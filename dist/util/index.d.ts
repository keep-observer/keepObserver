declare const _default: {
    getDeviceId: () => any;
    log: {
        (message?: any, ...optionalParams: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
    error: {
        (message?: any, ...optionalParams: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
    wran: {
        (message?: any, ...optionalParams: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
    warnError: (msg: string, develop?: boolean) => void;
    dateFormat(date: any, format: any): any;
    isNumber(value: any): boolean;
    isString(value: any): boolean;
    isArray(value: any): boolean;
    isBoolean(value: any): boolean;
    isRegExp(value: any): boolean;
    isDateObject(value: any): boolean;
    isUndefined(value: any): boolean;
    isNull(value: any): boolean;
    isExist(value: any): boolean;
    isSymbol(value: any): boolean;
    isSVGElement(value: any): any;
    isObject(value: any): boolean;
    isEmptyObject(obj: any): boolean;
    isEmptyArray(array: any): boolean;
    isFunction(value: any): boolean;
    isElement(value: any): boolean;
    isWindow(value: any): boolean;
    isPlainObject(obj: any): any;
    isClassObject(obj: any): boolean;
    toArray(array: any): any;
    toString(content: any): any;
    setSessionStorage(key: any, value: any): void;
    getSessionStorage(key: any): any;
    removeSessionStorage(key: any): void;
    setStorage(key: any, value: any): void;
    getStorage(key: any): any;
    removeStorage(key: any): void;
    getUniqueID(): string;
    extend(...arg: any[]): any;
    mixin(origin: any, provider: any): void;
    filter(obj: any, callback: any): any;
    map(obj: any, callback: any): any;
};
export default _default;
