<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html data.post.html}
</article>
