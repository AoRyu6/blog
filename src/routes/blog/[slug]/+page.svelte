<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta name="description" content={data.post.summary} />
</svelte:head>

<article class="markdown-body">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html data.post.html}
</article>
