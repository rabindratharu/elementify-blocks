/**
 * Webpack configuration.
 */
const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const RemoveEmptyScriptsPlugin = require( 'webpack-remove-empty-scripts' );
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// JS Directory path.
const SRC_DIR 	= path.resolve( __dirname, 'assets/src' );
const BUILD_DIR = path.resolve( __dirname, 'assets/build' );

const entry = {
	editor: SRC_DIR + '/editor/index.js',
};
const output = {
	path: BUILD_DIR,
	filename: '[name]/index.js'
};

//Remove default MiniCssExtractPlugin settings
defaultConfig.plugins = defaultConfig.plugins.filter((plugin) => {
	return !(plugin instanceof MiniCssExtractPlugin);
});

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	...defaultConfig,
	
	entry: entry,
	
	output: output,

	module: {
		...defaultConfig.module,
		rules: [
			{
				test: /\.(sc|sa|c)ss$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				]
			},
		],
	},

	optimization: {
		minimize: isProduction,
		minimizer: [
			'...',
			new TerserPlugin(),
			new CssMinimizerPlugin()
		]
	},
	
	plugins: [
		...defaultConfig.plugins,
		new MiniCssExtractPlugin({
			filename: "[name]/index.css",
		}),
		new RemoveEmptyScriptsPlugin(),
	],
}
