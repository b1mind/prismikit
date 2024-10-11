<script>
	import { PrismicLink } from '@prismicio/svelte'

	export let slice
	const { button, button_type } = slice.primary
</script>

<PrismicLink class="btn btn{`-${button_type}`}" field={button}>
	<slot />
</PrismicLink>
