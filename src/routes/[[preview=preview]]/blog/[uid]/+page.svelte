<script>
	// @ts-nocheck
	import { PrismicImage, SliceZone } from '@prismicio/svelte'
	import { components } from '$lib/slices'

	export let data
</script>

<article>
	<h1>{data.title}</h1>
	<PrismicImage
		height="300"
		width="350"
		field={data.page.data.image}
		imgixParams={{ bgRemove: 'true' }}
	/>
	<div class="tags">
		{#each data.page.tags as tag}
			<span>{tag}</span>
		{/each}
	</div>
	<i>{new Date(data.page.first_publication_date).toDateString()}</i>

	<SliceZone slices={data.slices} {components} />

	<!-- todo make related default of page? -->
	<h2>Related:</h2>
	{#each data.related as post}
		<li>
			<a href={post.url}>
				{post.data.title}
			</a>
		</li>
	{:else}
		<p>no related posts</p>
	{/each}
</article>

<style>
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
</style>
