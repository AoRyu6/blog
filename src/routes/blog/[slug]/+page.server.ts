import { getPostBySlug } from '$lib/content';
import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const post = await getPostBySlug(params.slug);

	if (!post) {
		error(404, 'Not found');
	}

	return { post };
};
