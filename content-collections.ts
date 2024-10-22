import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMarkdown } from '@content-collections/markdown';

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
			rehypePlugins: [],
			remarkPlugins: []
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
