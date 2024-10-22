import { allPosts } from 'content-collections';

export function getPostBySlug(slug: string) {
	return allPosts.find((post) => post.slug === `blog/${slug}`);
}
