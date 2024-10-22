<script>
	import { allPosts } from 'content-collections';
</script>

<h1>Posts</h1>

<ul>
	{#each allPosts as post}
		<li>
			<a href={post.slug}>{post.slug}</a>
		</li>
	{/each}
</ul>
