

import defaultConfig from './defaultConfig.js';
import * as tool from '../../tool/index.js';


// 获取系统信息
class KeepObserverSystem {
	//构造函数
	constructor(config){
		//存混合配置
		this._config  = tool.extend(defaultConfig,config)
		//系统信息
		this._systemInfo = false;
		//上报名
		this._typeName = 'system'
		//监听列表
		this.eventListener = [];
		//开始获取系统信息
		this.getSystemInfo();
	}
	//获取系统信息
	getSystemInfo(){
		var self = this;
		var oneDayFlag = this.checkIsOneDay()
		//判断是否每天最多获取上传一次
		if(this._config.isOneDay && oneDayFlag){
			return false;
		}
		//开始获取系统信息
		var systemInfo = window.navigator.userAgent
		if(self._config.isPerformance){
			self.getWebPerformance(function(Result){
				self._systemInfo = Result
				self._systemInfo.systemInfo = systemInfo
				//上报
				self.noticeReport(self._systemInfo);
				//记录
				self.recordReport();
			})
		}
	}
	//获取首屏性能分析
	getWebPerformance(onCallback){
		var self = this;
		//异步实现,等待完全加载完成
		var performance =   function(){
			var info = {}
			let performance = window.performance || window.msPerformance || window.webkitPerformance;
			var timing = window.performance && window.performance.timing;
			var navigation = window.performance && window.performance.navigation;
			//获取性能分析
			if (performance && timing ){
				//重定向次数：
				info.redirectCount = (navigation?navigation.redirectCount+'次':'未知');
				//跳转耗时：
				info.redirectTime = (timing.redirectEnd - timing.redirectStart)+'ms';
				//APP CACHE 耗时：
				info.appcacheTime = Math.max(timing.domainLookupStart - timing.fetchStart, 0)+'ms';
				//DNS 解析耗时：
				info.dns = (timing.domainLookupEnd - timing.domainLookupStart)+'ms';
				//TCP 链接耗时：
				info.tcp = (timing.connectEnd - timing.connectStart)+'ms';
				//等待服务器响应耗时（注意是否存在cache）：
				info.request = (timing.responseStart - timing.requestStart)+'ms';
				//内容加载耗时（注意是否存在cache）:
				info.response = (timing.responseEnd - timing.responseStart)+'ms';
				//总体网络交互耗时，即开始跳转到服务器资源下载完成：
				info.network = (timing.responseEnd - timing.navigationStart)+'ms';
				//渲染处理：
				info.DOMrender = ((timing.domComplete || timing.domLoading) - timing.domLoading)+'ms';
				//抛出 load 事件：
				info.onloadTime = (timing.loadEventEnd - timing.loadEventStart)+'ms';
				//总耗时：
				info.total = ((timing.loadEventEnd || timing.loadEventStart || timing.domComplete || timing.domLoading) - timing.navigationStart)+'ms';
				//可交互：
				info.DOMactive = (timing.domInteractive - timing.navigationStart)+'ms';
				//请求响应耗时，即 T0，注意cache：
				info.webResponse = (timing.responseStart - timing.navigationStart)+'ms';
				//首次出现内容，即 T1：
				info.webLoad = (timing.domLoading - timing.navigationStart)+'ms';
				//内容加载完毕，即 T3：
				info.webLoadEnd = (timing.loadEventEnd - timing.navigationStart)+'ms';
			}	
			//是否获取加载资源内容
			if(self._config.isPerformanceCancel){
				info.requestPerformance = [];
				if(performance.getEntries){
					var requestPerformance = performance.getEntries()
					//只检查initiatorType  script css xmlhttprequest
					if(tool.isArray(requestPerformance)){
						requestPerformance.map(function(item){
							if(item.initiatorType){
								var perInfo = {
									type:item.initiatorType,
									name:item.name,
									time:item.duration.toFixed(2)+'ms',
									size:(item.encodedBodySize/1000).toFixed(2)+'kb'
								}
								info.requestPerformance.push(perInfo)
							}
						})
					}
					if(onCallback){
						onCallback(info)
					}
				}
			}
		}
		//挂载在 window.onload 中
		if (typeof window.addEventListener != 'undefined') { 
			window.addEventListener('load',function(){
				setTimeout(performance,0)
			},false); 
		} else { 
			window.attachEvent('onload',function(){
				setTimeout(performance,0)
			}) 
		} 
	}
	//验证今天是否已经获取上传了一次用户信息了
	checkIsOneDay(){
		var reportDate = tool.getStorage('systemRecordReportDate');
		var date = tool.dateFormat(new Date,'yyyy-MM-dd')
		//如果没获取上报过
		if(!reportDate){
			return false;
		}else if(reportDate !== date){
			return false;
		}
		return true;
	}
	//记录当天已经上报
	recordReport(){
		if(this._config.isOneDay){
			var date = tool.dateFormat(new Date,'yyyy-MM-dd');
			tool.setStorage('systemRecordReportDate',date)
		}
	}
	/***************  上报相关  ******************/
	//注册上报监听
	addReportListener(callback){
		if(callback){
			this.eventListener.push(callback)
		}
	}
	//通知上报
	noticeReport(content){
		if(this.eventListener.length === 0){
			return false;
		}
		//通知上报
		this.eventListener.map(function(item){
			if(tool.isFunction(item)){
				item(content);
			}
		})
	}
}




export default KeepObserverSystem

