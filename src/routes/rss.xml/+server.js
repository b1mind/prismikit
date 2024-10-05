import { createClient } from '$lib/prismicio'
export const prerender = true

export async function GET({ fetch, cookies }) {
	const client = createClient({ fetch, cookies })
	const headers = { 'Content-type': 'application/xml' }

	//todo need to get title from blog not settings? (yes)
	const posts = await client.getAllByType('blogpost')
	const settings = await client.getSingle('settings')

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
				<title>${settings.data.site_title}</title>
				<description>mmm</description>
				<link>${settings.data.website_url}/blog</link>
				<atom:link href="${settings.data.website_url}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.data.title}</title>
							<description>${'temp'}</description>
							<link>${settings.data.website_url}${post.url}</link>
							<guid isPermaLink="true">${settings.data.website_url}${post.url}</guid>
							<pubDate>${post.data.date}</pubDate>
						</item>
					`,
					)
					.join('')}
			</channel>
		</rss>
	`.trim()

	return new Response(xml, { headers })
}
