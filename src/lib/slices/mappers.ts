import contextIndexMapper from './Contextindex/mapper'
import testimonialsMapper from './Testimonials/mapper'
import recentMapper from './RecentPosts/mapper'
import featuredMapper from './FeaturedPosts/mapper'

export const mappers = {
	contextindex: contextIndexMapper,
	testimonials: testimonialsMapper,
	recent_posts: recentMapper,
	featured_posts: featuredMapper,
}
