import contextIndexMapper from './Contextindex/mapper'
import testimonialsMapper from './Testimonials/mapper'
import recentMapper from './RecentPosts/mapper'
import relatedMapper from './RelatedPosts/mapper'

export const mappers = {
	contextindex: contextIndexMapper,
	testimonials: testimonialsMapper,
	resent_posts: recentMapper,
	related_posts: relatedMapper,
}
