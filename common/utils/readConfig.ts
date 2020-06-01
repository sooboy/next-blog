const fs = require('fs');

const dev = './config/dev.json';
const prod = './config/prod.json';
const local = './config/local.json';

const readConfig = () => {
	const hasProd = fs.existsSync(prod);
	const hasLocal = fs.existsSync(local);
	return hasProd
		? fs.readFileSync(prod)
		: hasLocal
		? fs.readFileSync(local)
		: fs.readFileSync(dev);
};

export const config = JSON.parse(readConfig().toString());
