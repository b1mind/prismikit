import type { Client, Content, SliceMapper } from '@prismicio/client'
import type { ComponentProps } from 'svelte'

import FeaturedPosts from './index.svelte'

//fixme types for page in context
type Context = {
	client: Client<Content.AllDocumentTypes>
}

const mapper: SliceMapper<
	Content.FeaturedPostsSlice,
	ComponentProps<FeaturedPosts>,
	Context
> = async ({ slice, context }) => {
	const { client } = context

	const featured = await client.getByTag('featured')

	return { slice, featured }
}

export default mapper
