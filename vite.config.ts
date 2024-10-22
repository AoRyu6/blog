import contentCollections from '@content-collections/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	build: {
		cssMinify: 'lightningcss'
	},
	css: {
		transformer: 'lightningcss'
	},

	plugins: [sveltekit(), contentCollections()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
