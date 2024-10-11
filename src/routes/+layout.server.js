export const prerender = true
export const trailingSlash = 'always'

import { createClient } from '$lib/prismicio'

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies })

	const settings = await client.getSingle('settings')

	return {
		settings,
	}
}
