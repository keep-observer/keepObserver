




//隔离开初始化服务,不对外提供
export function init(){
	//是否需要更新版本清除缓存
	if(this._config.projectVersion && this._config.updateVersionClearCache){
		this.updateVersionClearCache();
	}
}






