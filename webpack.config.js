/* eslint-disable */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.tsx',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'React Websocket Chat',
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		host: '0.0.0.0',
		port: 3000,
		historyApiFallback: true,
		open: false,
		liveReload: false,
		writeToDisk: true,
		before: app => {
			proxyConfig(app);
		},
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', { targets: 'defaults' }]],
					},
				},
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css?$/,
				use: 'css-loader',
				exclude: /node_modules/,
			},
		],
	},
};
