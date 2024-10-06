import type { Client, Content, SliceMapper } from '@prismicio/client'
import type { ComponentProps } from 'svelte'

import Contextindex from './index.svelte'

type Context = { client: Client<Content.AllDocumentTypes> }

const mapper: SliceMapper<
	Content.ContextindexSlice,
	ComponentProps<Contextindex>,
	Context
> = async ({ slice, context }) => {
	const { client } = context
	const items =
		slice.primary.context_type === 'Blog'
			? await client.getAllByType('blogpost', {
					orderings: {
						field: 'document.first_publication_date',
						direction: 'desc',
					},
				})
			: await client.getAllByType('showcase')

	return { slice, items }
}

export default mapper
