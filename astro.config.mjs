// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	redirects: {
		"/design/": "/design/index.html",
		"/music/": "/music/index.html",
		"/ultramix/": "/ultramix/index.html"
	}
});
