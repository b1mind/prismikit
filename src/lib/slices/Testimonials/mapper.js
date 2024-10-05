import * as prismic from '@prismicio/client'

/**
 * @param {Object} args
 * @param {prismic.Content.TestimonialsSlice} args.slice
 * @param {{client: prismic.Client<prismic.Content.AllDocumentTypes>}} args.context
 */

export default async function mapper({ slice, context }) {
	const testimonials = (
		await Promise.all(
			slice.items.map(async (item) => {
				if (prismic.isFilled.contentRelationship(item.testimonial)) {
					return /** @type {prismic.Content.TestimonialDocument} */ (
						await context.client.getByID(item.testimonial.id)
					)
				}
			}),
		)
	).filter(Boolean)
	return {
		slice,
		testimonials,
	}
}
