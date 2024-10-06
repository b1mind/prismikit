import * as prismic from '@prismicio/client'

/**
 * @param {Object} args
 * @param {prismic.Content.RecentPostsSlice} args.slice
 * @param {{client: prismic.Client<prismic.Content.AllDocumentTypes>}} args.context
 */

export default async function mapper({ slice, context }) {
	//todo select value vs conditional?
	const amount = slice.primary.amount === '3' ? 3 : 5
	const recent = await context.client.getByType('blogpost', {
		pageSize: amount,
	})

	return {
		slice,
		recent: recent.results,
	}
}
