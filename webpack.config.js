const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {

	debug: true,

	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'bootstrap-loader/extractStyles',
		'./src/app',
	],

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.js',
	},

	resolve: { extensions: [ '', '.js' ] },

	plugins: [
		new ExtractTextPlugin('app.css', { allChunks: true }),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			jquery: 'jquery',
			"Tether": 'tether',
			"window.Tether": "tether"
		})
	],
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, "./node_modules/bootstrap-material-design/node_modules")
		]
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['react-hot', 'babel'],
				include: path.join(__dirname, 'src'),
			},
			{
				test: /\.html$/,
				loader: "html"
			},
			{ test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss') },
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass') },
			{ test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
			// Bootstrap 4
			{ test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }
		],
	},

	postcss: [ autoprefixer ],

};