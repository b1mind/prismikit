<script>
	/** @type {import("@prismicio/client").RTLabelNode} */
	export let node
</script>

<span class={node.data.label}><slot /></span>

<style>
	/* //fixme should be able to use Heading size prop? */
	.title-lg {
		font-size: var(--title-lg, 2.25rem);
	}

	.title-md {
		font-size: var(--title-md, 2.25rem);
	}

	.title-sm {
		font-size: var(--title-sm, 2.25rem);
	}
</style>
