

// process.env.NODE_ENV = 'testing'


var webServerPromise = require('./webpack.test.env')


webServerPromise()

// var opts = process.argv.slice(2)
// if (opts.indexOf('--config') === -1) {
//   opts = opts.concat(['--config', 'test/nightwatch.config.js'])
// }
// if (opts.indexOf('--env') === -1) {
//   opts = opts.concat(['--env', 'chrome'])
// }

// webServerPromise().then(function(server){
//  	var spawn = require('cross-spawn')
//  	//linux
//  	if(process.platform === 'darwin'){
//  		var runner = spawn('./node_modules/.bin/nightwatch', opts, { stdio: 'inherit' })
// 		runner.on('exit', function (code) {
// 			// server.close()
// 		  	process.exit(code)
// 		})
// 		runner.on('error', function (err) {
// 			// server.close()
// 		  	throw err
// 		})
//  	}else{
//  		var runner = spawn('node test/window.start.js', opts, { stdio: 'inherit' })
// 		runner.on('exit', function (code) {
// 			// server.close()
// 		  	process.exit(code)
// 		})
// 		runner.on('error', function (err) {
// 			// server.close()
// 		  	throw err
// 		})
//  	}
// })
