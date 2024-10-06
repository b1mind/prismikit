<script>
	/** @type {import("@prismicio/client").Content.FeaturedPostsSlice} */
	export let slice
	export let featured
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<h2>{slice.primary.heading}</h2>
	<ul>
		{#each featured as post}
			<li>
				<a href={post.url}>
					{post.data.title}
				</a>
			</li>
		{/each}
	</ul>
</section>
