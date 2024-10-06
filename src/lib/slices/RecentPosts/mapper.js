import * as prismic from '@prismicio/client'

/**
 * @param {Object} args
 * @param {prismic.Content.RecentPostsSlice} args.slice
 * @param {{client: prismic.Client<prismic.Content.AllDocumentTypes>}} args.context
 */

export default async function mapper({ slice, context }) {
	console.log('recent')
	const recent = await context.client.getByType('blogpost', {
		pageSize: 1,
	})

	return {
		slice,
		recent,
	}
}
