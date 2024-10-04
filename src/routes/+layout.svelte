<script>
	import { PrismicPreview } from '@prismicio/svelte/kit'
	import { PrismicLink } from '@prismicio/svelte'
	import { page } from '$app/stores'
	import { repositoryName } from '$lib/prismicio'

	import '$lib/scss/global.scss'

	import Header from './Header.svelte'
	import Footer from './Footer.svelte'

	export let data
	const { settings } = data
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>

<div class="layout">
	<Header>
		{#each settings.data.navigation as nav}
			<PrismicLink field={nav.link}>{nav.label}</PrismicLink>
		{/each}
	</Header>

	<main>
		<slot />
	</main>

	<Footer />
</div>

<PrismicPreview {repositoryName} />

<style lang="scss">
	.layout {
		display: grid;
		grid-template-columns:
			[full-start] minmax(1rem, 1fr)
			[content-start] minmax(0, 900px)
			[content-end] minmax(1rem, 1fr)
			[full-end];
		grid-template-rows: auto 1fr auto;

		& > * {
			grid-column: content;
		}
	}
</style>
