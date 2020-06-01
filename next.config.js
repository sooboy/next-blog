const fs = require('fs');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const webpackConfig = require('./webpack/config');

const PROD_FILE = './config/prod.json';
const DEV_FILE = './config/dev.json';
const LOCAL_FILE = './config/local.json';

const readConfig = () => {
	const prod = fs.existsSync(PROD_FILE);
	return prod
		? fs.readFileSync(PROD_FILE)
		: !fs.existsSync(LOCAL_FILE)
		? fs.readFileSync(DEV_FILE)
		: fs.readFileSync(LOCAL_FILE);
};

const config = JSON.parse(readConfig().toString());

module.exports = withBundleAnalyzer({
	analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
	analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
	bundleAnalyzerConfig: {
		server: {
			analyzerMode: 'static',
			reportFilename: '../bundles/server.html'
		},
		browser: {
			analyzerMode: 'static',
			reportFilename: '../bundles/client.html'
		}
	},
	webpack: webpackConfig,
	serverRuntimeConfig: config.server,
	publicRuntimeConfig: Object.assign(config.public, config.deploy),
	distDir: '_next',
	assetPrefix:
		config && config.deploy.cdn === true
			? config.deploy.host + config.deploy.version
			: ''
});
