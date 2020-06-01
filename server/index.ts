import next from 'next';
import Koa from 'koa';
// CPU内存分析
// const easyMonitor = require('easy-monitor');
// easyMonitor('Project');

import Path from './path';

const port = parseInt(process.env.NODE_PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare().then(() => {
	const server = new Koa();

	server.use(Path(app).routes());

	server.listen(port, () => {
		console.log(`Project Ready on http://localhost:${port}`);
	});
});
