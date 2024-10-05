import { createClient } from '$lib/prismicio'

export async function GET({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies })
	const headers = { 'Content-type': 'application/xml' }

	//todo need site info for rss
	const posts = await client.getAllByType('blogpost')
	console.log(client)

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
				<title>temp</title>
				<description>temp</description>
				<link>temp</link>
				<atom:link href="${'temp'}rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.data.title}</title>
							<description>${'temp'}</description>
							<link>${post.url}</link>
							<guid isPermaLink="true">${'temp'}${post.uid}</guid>
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

//  [
// [vite:dev]   {
// [vite:dev]     id: 'ZwBN7hEAACcAQDjx',
// [vite:dev]     uid: 'some-blog-post',
// [vite:dev]     url: '/blog/some-blog-post',
// [vite:dev]     type: 'blogpost',
// [vite:dev]     href: 'https://prismikit.cdn.prismic.io/api/v2/documents/search?ref=ZwCIrhEAACUAQIq8&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22ZwBN7hEAACcAQDjx%22%29+%5D%5D',
// [vite:dev]     tags: [ 'css', 'html' ],
// [vite:dev]     first_publication_date: '2024-10-04T20:20:21+0000',
// [vite:dev]     last_publication_date: '2024-10-05T00:30:38+0000',
// [vite:dev]     slugs: [ '2024-10-01' ],
// [vite:dev]     linked_documents: [],
// [vite:dev]     lang: 'en-us',
// [vite:dev]     alternate_languages: [],
// [vite:dev]     data: {
// [vite:dev]       date: '2024-10-01',
// [vite:dev]       title: 'Some blog post',
// [vite:dev]       slices: [Array],
// [vite:dev]       meta_title: null,
// [vite:dev]       meta_description: null,
// [vite:dev]       meta_image: {}
// [vite:dev]     }
// [vite:dev]   }
// [vite:dev] ]
