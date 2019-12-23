const path = require('path');
const ROOT = process.cwd();  // 根目录
const Glob = require('glob');

const HtmlWebpackPlugin = require('html-webpack-plugin');





function getEntry (globPath) {
	var entries = {
		entry:{},
		chunk:[],
	};
	Glob.sync(globPath).forEach(function (entry) {
		var basename = path.basename(entry, path.extname(entry)),
			pathname = path.dirname(entry);

        entries.entry[basename] =  entry
	});

	return entries;
}
function getEntryHtml (globPath) {
	var entries = [];
	Glob.sync(globPath).forEach(function (entry) {
		var basename = path.basename(entry, path.extname(entry)),
            pathname = path.dirname(entry);
		entries.push({
			filename: entry,
			template: entry,
			chunks: [basename],
			minify: {
                minifyCSS: false,
				minifyJS: false
            }
		});
	});

	return entries;
}




var entryData = getEntry('./examples/**/*.js')
var entryHtml = getEntryHtml('./examples/**/*.html');
var entryJs = {
	...entryData.entry,
}

console.log(entryData)
console.log(entryHtml)
debugger

var dev_WebpackConfig = {
	mode:'development',
	entry: entryJs,
    devtool:'cheap-module-eval-source-map',
	output: {
        path: path.resolve(ROOT, './test/dist'),
	},
	module: {
		rules: [
            {
				test: /\.js$/,
				include:[path.resolve(ROOT, './@core')],
				use:[
					{loader:'babel-loader'},
				]
			},
		]
	},
	plugins: [
        ...entryHtml.map( el =>{
            return new HtmlWebpackPlugin(el)
        })
    ],
}


module.exports = dev_WebpackConfig