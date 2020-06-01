const path = require('path');
const webpack = require('webpack');
const cssLoaderConfig = require('./css-loader-config');

if (typeof require !== 'undefined') {
	require.extensions['.css'] = file => {};
	require.extensions['.scss'] = file => {};
}

function getPath(dir) {
	return path.join(__dirname, '..', dir);
}

module.exports = (config, { dev, isServer }) => {
	const cssOption = cssLoaderConfig(config, {
		extensions: ['css'],
		dev,
		isServer
	});

	const scssOption = cssLoaderConfig(config, {
		extensions: ['scss', 'sass'],
		cssModules: true,
		cssLoaderOptions: {
			importLoaders: 1,
			localIdentName: '[local]___[hash:base64:5]'
		},
		dev,
		isServer,
		loaders: [
			{
				loader: 'sass-loader'
			}
		]
	});

	const scssNormalOption = cssLoaderConfig(config, {
		extensions: ['scss', 'sass'],
		dev,
		isServer,
		loaders: [
			{
				loader: 'sass-loader'
			}
		]
	});

	config.module.rules.push(
		{
			test: /\.css$/,
			use: cssOption
		},
		{
			test: /\.(sass|scss)$/,
			exclude: [getPath('node_modules')],
			use: scssOption
		},
		{
			test: /\.(sass|scss)$/,
			include: [getPath('node_modules')],
			use: scssNormalOption
		}
	);

	config.module.rules.push({
		test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
		use: [
			{
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'static/media/[name].[hash:8].[ext]'
				}
			}
		]
	});

	config.plugins.push(
		new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|en/)
	);

	const originalEntry = config.entry;
	config.entry = async () => {
		const entries = await originalEntry();

		if (
			entries['main.js'] &&
			!entries['main.js'].includes('./static/js/polyfills.js')
		) {
			entries['main.js'].unshift('./static/js/polyfills.js');
		}
		return entries;
	};

	return config;
};
