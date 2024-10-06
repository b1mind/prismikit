import type { Client, Content, SliceMapper } from '@prismicio/client'
import type { ComponentProps } from 'svelte'

import RelatedPosts from './index.svelte'

//fixme types for page in context
type Context = {
	client: Client<Content.AllDocumentTypes>
}

const mapper: SliceMapper<
	Content.RelatedPostsSlice,
	ComponentProps<RelatedPosts>,
	Context
> = async ({ slice, context }) => {
	const { client, page } = context
	const tags = page?.tags

	const res = await client.getBySomeTags(tags, { pageSize: 4 })
	const related = res.results.filter((post) => {
		return post.uid !== page.uid
	})

	return { slice, related }
}

export default mapper
