# keepObserverLoad

### Function

	依赖浏览器window.performance相关方法,读取浏览器相关首屏加载信息

### Config	

```javascript
LoadCustom：{
	//是否每天只记录一次	 default: true
    isOneDay: Boolean,
    //是否启动性能分析  default: true,
    isPerformance: Boolean,
    //是否检查缓存读取内容  default: true,
    isPerformanceRequest: Boolean,
    //获取到load信息是否立即上报  default: true,
    immediatelyiReport: Boolean,
}
```

### Api 

```javascript
//not api render
```

