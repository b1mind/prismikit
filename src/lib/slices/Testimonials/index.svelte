<script>
	import { page } from '$app/stores'
	import { PrismicImage } from '@prismicio/svelte'

	/** @type {import("@prismicio/client").Content.TestimonialsSlice} */
	export let slice
	$$restProps
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
></section>
