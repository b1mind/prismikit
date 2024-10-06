import type { Client, Content, SliceMapper } from '@prismicio/client'
import type { ComponentProps } from 'svelte'

import RelatedPosts from './index.svelte'

type Context = { client: Client<Content.AllDocumentTypes> }

const mapper: SliceMapper<
	Content.ContextindexSlice,
	ComponentProps<RelatedPosts>,
	Context
> = async ({ slice, context }) => {
	const { client } = context
	const related = await client.getBySomeTags(['css'])
	console.log(related)

	return { slice, related }
}

export default mapper
