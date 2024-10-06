<script>
	/** @type {import("@prismicio/client").Content.RecentPostsSlice} */
	export let slice
	export let recent
	console.log(recent)
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<article>
		<h1>{slice.primary.heading}</h1>
		{slice.primary.test}

		<!-- <ul>
			{#each items as post, index (post.id + index)}
				<li>
					<PrismicLink document={post}>
						{post.data.title}
					</PrismicLink>
				</li>
			{/each}
		</ul> -->
	</article>
</section>
