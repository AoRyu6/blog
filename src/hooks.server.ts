import { building } from '$app/environment';
import { minify } from 'html-minifier';

const minification_options = {
	removeComments: true,
	sortClassName: true
};

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	let page = '';

	return resolve(event, {
		transformPageChunk: ({ done, html }) => {
			page += html;
			if (done) {
				return building ? minify(page, minification_options) : page;
			}
		}
	});
}
