<script>
	import { PrismicPreview } from '@prismicio/svelte/kit'
	import { page } from '$app/stores'
	import { repositoryName } from '$lib/prismicio'
	import Header from './Header.svelte'
	import Footer from './Footer.svelte'
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

<Header></Header>
<main>
	<slot />
</main>
<Footer></Footer>

<PrismicPreview {repositoryName} />
