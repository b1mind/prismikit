<script>
	import { PrismicLink } from '@prismicio/svelte'

	/** @type {import("@prismicio/client").Content.RecentPostsSlice} */
	export let slice
	export let recent
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<article>
		<h2>{slice.primary.heading}</h2>

		<ul>
			{#each recent as post, index (post.id + index)}
				<li>
					<PrismicLink document={post}>
						{post.data.title}
					</PrismicLink>
				</li>
			{/each}
		</ul>
	</article>
</section>
