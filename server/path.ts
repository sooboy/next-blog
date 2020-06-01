import Router from 'koa-router';
import Server from 'next/dist/next-server/server/next-server';

const STATUS_OK = 200;

const Path = (app: Server) => {
	const router = new Router();

	router.all('*', async ctx => {
		await app.getRequestHandler()(ctx.req, ctx.res);
		ctx.respond = false;
	});
	return router;
};

export default Path;
