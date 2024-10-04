<script>
	import { SliceZone } from '@prismicio/svelte'

	import { components } from '$lib/slices'

	export let data
</script>

<article>
	<h1>{data.title}</h1>
	<i>{data.page.data.date}</i>

	<SliceZone slices={data.page.data.slices} {components} />
</article>
