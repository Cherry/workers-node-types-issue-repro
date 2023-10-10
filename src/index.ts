export interface Env {}

// This line triggers `@types/node` to be loaded
// This is one example, but it's not uncommon for other packages to do this too.
import { neon } from '@neondatabase/serverless';

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname === '/country') {
			// The next line works fine with @types/node is not loaded, but errors when it is
			const country = request?.cf?.country ?? 'unknown';
			return new Response(`country: ${country}`);
		}

		if (url.pathname === '/proxy') {
			// The next line works fine with @types/node is not loaded, but errors when it is
			const newReq = new Request('https://example.com', request);
			return fetch(newReq);
		}
		return new Response('Hello World!');
	},
};
