<script>
	// @ts-nocheck
	import { SliceZone } from '@prismicio/svelte'
	import { components } from '$lib/slices'

	export let data
</script>

<article>
	<h1>{data.title}</h1>
	<div class="tags">
		{#each data.page.tags as tag}
			<span>{tag}</span>
		{/each}
	</div>
	<i>{data.page.data.date}</i>

	<SliceZone slices={data.slices} {components} />

	<!-- todo make related default of page? -->
	{#each data.related as post}
		<li>
			<a href={post.url}>
				{post.data.title}
			</a>
		</li>
	{/each}
</article>

<style>
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
</style>
