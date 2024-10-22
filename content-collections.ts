import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMarkdown } from '@content-collections/markdown';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import rehypeExpressiveCode from 'rehype-expressive-code';
import remarkGfm from 'remark-gfm';

const options = {
	plugins: [pluginLineNumbers()],
	styleOverrides: {
		lineNumbers: {
			foreground: '#fff'
		}
	},
	theme: ['github-dark-high-contrast']
};

const posts = defineCollection({
	directory: 'src/posts',
	include: '**/*.md',
	name: 'posts',
	schema: (z) => ({
		summary: z.string(),
		title: z.string()
	}),
	transform: async (document, context) => {
		const html = await compileMarkdown(context, document, {
			rehypePlugins: [[rehypeExpressiveCode, options]],
			remarkPlugins: [remarkGfm]
		});
		return {
			...document,
			html,
			slug: `blog/${document.title.toLowerCase().replace(/ /g, '-')}`
		};
	}
});

export default defineConfig({
	collections: [posts]
});
