// Karma configuration
// Generated on Thu Mar 19 2020 14:12:26 GMT+0800 (China Standard Time)
var networkServer = require('./dev/network.service')
networkServer()

module.exports = function(config) {
  config.set({
    client: {
        jasmine: {
            random: false,
        },
    },
    
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: __dirname,


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
		// './test/instance/index.test.js',
		// './test/middleware/kibanaApmTrack.test.js',
		// './test/monitor/network.test.js',
		'./test/**/*.test.js'
	],
	
	// preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
		'./test/**/*.test.js':['webpack'],
	},


    // list of files / patterns to exclude
    exclude: [
    ],

	webpack: {
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use:[
						{	loader:'babel-loader'	},
						{
							loader: 'istanbul-instrumenter-loader',
							options: { esModules: true }
						},
					],
				},
			]
		},
    },

	
	plugins: [
		'karma-webpack',
		'karma-jasmine',
		'karma-chrome-launcher',
		'karma-spec-reporter',
		'karma-coverage'
	],

	// karma-coverage 插件
    // coverageReporter: {
    //   type : 'html',
    //   dir : 'coverage/'
    // },
	coverageReporter: {
		dir: 'coverage',
		  reporters: [{
			type: 'json',
			subdir: '.',
			file: 'coverage.json', // ./coverage目录下生成此文件
		  }, {
			type: 'lcov', // lcov 格式
			subdir: '.' // ./coverage目录下生成 lcov.info文件
		  }, {
			type: 'text-summary' // 终端输出文字总结
		  }]
	},
  

	// test results reporter to use
	// possible values: 'dots', 'progress'
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	//reporters: ['progress'],
	reporters: ['spec','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
