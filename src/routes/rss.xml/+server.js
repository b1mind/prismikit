import { createClient } from '$lib/prismicio'
export const prerender = true

export async function GET({ fetch, cookies }) {
	const client = createClient({ fetch, cookies })
	const headers = { 'Content-type': 'application/xml' }

	//fixme use a mapper and pull from blog proper
	const posts = await client.getAllByType('blogpost')
	const settings = await client.getSingle('settings')
	// const blog = await client.getByUID('page', 'blog')

	//todo better <img logic to not include if no url
	const xml = `
		<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
      <channel>
				<title>${settings.data.site_title}</title>
				<description>RSS Feed</description>
				<link>${settings.data.website_url}/blog</link>
				<image>
					<url></url>
					<title></title>
					<link></link>
				</image>
				<atom:link href="${settings.data.website_url}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map((post) => {
						const image = post.data.image.url || post.data.meta_image.url
						const imageEle = image
							? `<img style="display: none" src="${image}" alt="${post.data.image.alt || ''}" />`
							: ''

						const item = `
						<item>
							<title>${post.data.title}</title>
							<description><![CDATA[ ${imageEle} ${post.data.meta_description || ''}]]></description>
							<link>${settings.data.website_url}${post.url}</link>
							<guid isPermaLink="true">${settings.data.website_url}${post.url}</guid>
							<pubDate>${post.data.date}</pubDate>
						</item>
					`
						return item
					})
					.join('')}
			</channel>
		</rss>
	`.trim()

	return new Response(xml, { headers })
}
