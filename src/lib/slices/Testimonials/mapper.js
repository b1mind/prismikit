import * as prismic from '@prismicio/client'

/**
 * @param {Object} args
 * @param {prismic.Content.TestimonialsSlice} args.slice
 * @param {{client: prismic.Client<prismic.Content.AllDocumentTypes>}} args.context
 */

//todo learn more about mappers and how to abuse them
//do they only fire if the Slice is on the page? hope so!
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
