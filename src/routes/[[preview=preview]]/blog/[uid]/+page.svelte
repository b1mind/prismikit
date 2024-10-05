<script>
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

	<SliceZone slices={data.page.data.slices} {components} />
</article>

<style>
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
</style>
