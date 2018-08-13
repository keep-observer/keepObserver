# Keep-observer

 **[中文版本](https://github.com/keep-observer/keepObserver/blob/master/README-ch.md)**

#####  **This is a monitored library used in javaScript**

- **About keep-observer:** This is an online production environment monitoring library based on JavaScript, which is suitable for the web PC end and the mobile end of the non sense embedding, all based on the native JS method, using embedded monitoring, and does not conflict with any other third party libraries. The volume is only 32KB. 

- **Features**
	- Monitoring the related logs from global **console**.
	- Capture **JS error** message.
	- Monitoring the global **XMLHttpRequest**.
	- Capture and analyze the performance analysis of the project, such as **the first screen loading**.
	- Capturing the related error is configurable in **Vue project**.
	- **Capturing and reporting the related error**, analysing server log.

- **Compatibility and support:** compatible with all current mainstream framework runtime versions, Vue angular react and other frameworks. **IE 678 is not tested yet**.

## Use and report MonitorData

#### usage about keepObserver:

​	if you use keepObserver in your project, it starts **monitoring and reads the system information and performance details first, also, embeds the related methods about intercepting `window.console` and `window.XMLHttpRequest` to monitor the log and Ajax network requests.**

​	Noticed that if **`develop = true` was not set**, it would consider **production environment by default** during the keepObserver run, the`window.console` related interface print information in the production environment will be intercepted by keepObserver, **not in the console.**


​	At the same time, the printing information of the `window.console` related methods, as well as each request of the window.XMLHttpRequest method, is also intercepted and recorded in the localStorage cache, which is packaged and consolidated as required.

#### Reporting server:
##### KeepObserver will report server in the following situations:
- Capture JS error, script error.
- `console.error()`is invoked to output error information.
- ajax request response timeout, network timeout
- ajax request error, `status !== 200`
- If configured to customize the Ajax request onHandleJudgeResponse hook, the Ajax request is incorrect if the hook return is not equal to false.
- If the parameter, such as `max_network_fillIsReport,，max_system_fillIsReport，max_log_fillIsReport`, are set,it will reporting server while intercepting data cache is fulled  .
- If you need to monitor the Vue, after Vue intercepts the error message

**For more configuration information and report parameters, please refer to doucmentation.**

## Installation

```
npm install keep-observers
```

## Examples

```
import KeepObserver from 'keep-observers';
//start
var keepObserver = new KeepObserver({
	project:'netcar',
	develop:true,
	//network Monitor config
	networkCustom:{
		timeout:30000,
	},
	//Monitor data report confog
	reportCustom:{
		reportUrl:['http://localhost:3000/api/v1/keepObserver/report'],
	}
});
```

**For more details on configuration and related API, please refer to doucmentation.**

## Documentation

#### Relevant document description

- **API method:**   **[api-document](https://github.com/keep-observer/keepObserver/blob/master/document/api.md)**
- **Configuration:**   **[config-document](https://github.com/keep-observer/keepObserver/blob/master/document/config.md)**
- **Report content:**   **[report-document](https://github.com/keep-observer/keepObserver/blob/master/document/report.md)**
