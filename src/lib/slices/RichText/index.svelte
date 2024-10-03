<script>
	import { PrismicRichText } from '@prismicio/svelte'
	import Label from './Label.svelte'

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice
</script>

<section class="container">
	<PrismicRichText
		field={slice.primary.content}
		components={{
			label: Label,
		}}
	/>

	{slice.primary.link}
</section>

<style>
	.container {
		max-width: 600px;
		margin: 6em auto;
		font-family: system-ui, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
