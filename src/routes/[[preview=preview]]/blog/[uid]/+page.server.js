import { createClient } from '$lib/prismicio'
import { mappers } from '$lib/slices/mappers'
import { mapSliceZone } from '@prismicio/client'
export const prerender = true

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies })

	const page = await client.getByUID('blogpost', params.uid)
	const slices = await mapSliceZone(page.data.slices, mappers, { client, page })

	// todo related as part of the blogpost page?
	const res = await client.getBySomeTags(page.tags, { pageSize: 4 })
	const related = res.results.filter((post) => {
		return post.uid !== page.uid
	})

	return {
		page,
		slices,
		related,
		title: page.data.title,
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title || page.data.title,
		meta_image: page.data.meta_image.url || page.data.image.url,
	}
}

export async function entries() {
	const client = createClient()

	const pages = await client.getAllByType('blogpost')

	return pages.map((page) => {
		return { uid: page.uid }
	})
}
