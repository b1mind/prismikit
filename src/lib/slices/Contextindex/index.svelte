<script>
	import { isFilled } from '@prismicio/client'
	import { PrismicLink, PrismicRichText } from '@prismicio/svelte'

	/** @type {import("@prismicio/client").Content.ContextindexSlice} */
	export let slice
	export let items
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<article>
		<h1>{slice.primary.heading}</h1>
		{#if isFilled.richText(slice.primary.description)}
			<PrismicRichText field={slice.primary.description}></PrismicRichText>
		{/if}

		<ul>
			{#each items as post, index (post.id + index)}
				<li>
					<PrismicLink document={post}>
						{post.data.title}
					</PrismicLink>
				</li>
			{/each}
		</ul>
	</article>
</section>
