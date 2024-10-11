<script>
	export let tag = 'h1'
	/** @type {"sm" | "md" | "lg" | "xl"} */
	export let size = 'lg'
</script>

<svelte:element
	this={tag}
	class:xl={size === 'xl'}
	class:lg={size === 'lg'}
	class:md={size === 'md'}
	class:sm={size === 'sm'}
>
	<slot />
</svelte:element>

<style>
	.xl {
		font-size: var(--title-xl, 4.25rem);
	}
	.lg {
		font-size: var(--title-lg, 2.25rem);
	}
	.md {
		font-size: var(--title-md, 1.25rem);
	}
	.sm {
		font-size: var(--title-sm, 0.75rem);
	}
</style>
