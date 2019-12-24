var config = require('./config.js');



module.exports = {
  	src_folders: ["test/index.js"],
  	output_folder: "test/reports",
  	custom_commands_path: ["node_modules/nightwatch-helpers/commands"],
  	custom_assertions_path: ["node_modules/nightwatch-helpers/assertions"],
  	page_objects_path: "",
  	globals_path: "./webDriver.js",
  	// selenium: {
    // 	"start_process": false
  	// },
	selenium: {
		cli_args: {
			'webdriver.chrome.driver': require('chromedriver').path
		}
	},
  	test_settings: {
    	default: {
	      	selenium_port: 9515,
	      	selenium_host: "localhost",
	      	default_path_prefix: "",
	      	desiredCapabilities: {
	        	browserName: "chrome",
	        	chromeOptions: {
	          		"args": [
	            		"--no-sandbox",
	          		]
	        	},
	        	javascriptEnabled: true,
        	acceptSslCerts: true
	      	},
	      	"globals": {
		        "domain": config.host
		    }
	    },
	    chrome: {
            desiredCapabilities: {
                "browserName": "chrome"
            }
        }
  	}	
}


