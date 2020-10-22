

const $log = window.console.log
const $wran = window.console.warn
const $error = window.console.error


//暂时取消掉这个,不然引入文件就会进行拦截,导致用户误解
// window.console.log = (...args) => {
//     $log.apply(window.console, args);
// };
// window.console.error = (...args) => {
//     $error.apply(window.console, args);
// };
// window.console.warn = (...args) => {
//     $wran.apply(window.console, args);
// };



export const log = $log
export const error = $error
export const wran = $wran
export const devLog = function(develop = true,...arg:any[]){
    if(!develop) return 
    return log(`[keepObserver] log message:`,...arg)
}
export const devWarn = function(develop = true,...arg:any[]){
    if(!develop) return 
    return wran(`[keepObserver] wran message:`,...arg)
}
export const warnError = function(...msg:any[]){
    return error(`[keepObserver] find error! message:`,...msg)
}


