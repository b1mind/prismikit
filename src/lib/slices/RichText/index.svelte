<script>
	import { PrismicLink, PrismicRichText } from '@prismicio/svelte'
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

	{#if slice.primary.label}
		<PrismicLink field={slice.primary.link}>{slice.primary.label}</PrismicLink>
	{/if}

	{#if slice.primary.button}
		{#each slice.primary.button as item}
			<PrismicLink field={item.link}>{item.label}</PrismicLink>
		{/each}
	{/if}
</section>

<style>
	.container {
		max-width: 600px;
		margin: 6em auto;
	}
</style>
