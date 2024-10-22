/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
	addons: [
		'@storybook/addon-svelte-csf',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)']
};
export default config;
