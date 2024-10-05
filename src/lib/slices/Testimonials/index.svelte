<script>
	/** @type {import("@prismicio/client").Content.TestimonialsSlice} */
	export let slice
	export let testimonials
	$$restProps
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#each testimonials as testimonial, index}
		{testimonial.data.person}
		{testimonial.data.title}
	{/each}
</section>
