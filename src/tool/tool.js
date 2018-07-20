

/**
 * 根据时间搓 返回时间
 * @param date format
 * @return string
 */
export function dateFormat(date,format){
    if(!format || typeof format !== 'string'){
      console.error('format is undefiend or type is Error');
      return '';
    }
    date = date instanceof Date? date : (typeof date === 'number'|| typeof date === 'string')? new Date(date): new Date();
    //解析
    var formatReg = {
      'y+': date.getFullYear(),
      'M+': date.getMonth()+1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
    }
    for(var reg in formatReg){
      if(new RegExp(reg).test(format)){
            var match = RegExp.lastMatch;
            format = format.replace(match, formatReg[reg]< 10 ? '0'+formatReg[reg]: formatReg[reg].toString() );
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
export function isUndefined(value) {
  return value === undefined;
}
export function isNull(value) {
  return value === null;
}
export function isSymbol(value) {
  return Object.prototype.toString.call(value) == '[object Symbol]';
}
export function isObject(value) {
  return (
    Object.prototype.toString.call(value) == '[object Object]'
    ||
    // if it isn't a primitive value, then it is a common object
    (
      !isNumber(value) &&
      !isString(value) &&
      !isBoolean(value) &&
      !isArray(value) &&
      !isNull(value) &&
      !isFunction(value) &&
      !isUndefined(value) &&
      !isSymbol(value)
    )
  );
}
export function isEmptyObject(obj){
    if(!isObject(obj)){
        return true;
    }
    for(var key in obj){
        return false;
    }
    return true
}
export function isEmptyArray(array){
    if(!isArray(array)){
        return true
    }
    return array.length>0? false:true
}
export function isFunction(value) {
  return Object.prototype.toString.call(value) == '[object Function]';
}
export function isElement(value) {
  return (
    typeof HTMLElement === 'object' ? value instanceof HTMLElement : //DOM2
      value && typeof value === "object" && value !== null && value.nodeType === 1 && typeof value.nodeName==="string"
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
  let hasOwn = Object.prototype.hasOwnProperty;
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
  let key;
  for (key in obj) {}
  return key === undefined || hasOwn.call(obj, key);
}


/*
  转换工具
 */
export function toArray(array){
  return Array.prototype.slice.call(array)
}
export function toString(content){
  return Object.prototype.toString.call(content)
}




/*
    辅助存储保存监控数据
    localStorage
*/
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
  return value?JSON.parse(value):'';
}
export function removeStorage(key){
    if (!window.localStorage) {
      return;
    }
    key = 'keepObserverData_' + key;
    localStorage.removeItem(key);
}





/*
    深度合并内容
    引用类型克隆合并
    arguments[0] = target
    arguments type is Object Or Array
    多内容合并覆盖优先级: arguments[0]<arguments[1]<arguments[2]..
    如果sources 不是数组或者对象 则直接忽略
 */
export function extend(){
  var args = toArray(arguments);
  if(args.length === 0){
    console.error('extends params is undefined')
    return {};
  }
  if(args.length === 1){
    return args[0]
  }
  var target = args[0];
  var sources = args.slice(1,args.length)

  if(!isObject(target) && !isArray(target)){
    target = {}; 
  }
  sources.map(function(item){
    //防止死循环
    if(target === item){
        return false;
    }
    //如果内容是对象 
    if(isObject(item)){
        //开始遍历
        for(var key in item){
            //如果内容是对象
            if(isObject(item[key])){
                //修正数据
                target[key] = (target[key] && isObject(target[key]))?target[key]:{};
                target[key] = extend(target[key],item[key])
            }else if(isArray(item)){
                //修正数据
                target[key] = (target[key] && isArray(target[key]))?target[key]:[];
                target[key] = extend(target[key],item[key])
            }else{
                //基本类型直接赋值
                target[key] = item[key]
            }
        }
    }else if(isArray(item)){
        for(var i = 0; i<item.length ;i++){
            //如果内容是对象
            if(isObject(item[i])){
                //修正数据
                target[i] = (target[i] && isObject(target[i]))?target[i]:{}
                target[i] = extend(target[i],item[i])
            }else if(isArray(item)){
                //修正数据
                target[i] = (target[i] && isArray(target[i]))?target[i]:[];
                target[i] = extend(target[i],item[i])
            }else{
                //基本类型直接赋值
                target[i] = item[i]
            }
        }
    }
    //其他类型直接忽略  
  })
  return target
}











