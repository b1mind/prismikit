import { createClient } from '$lib/prismicio'
export const prerender = true

export async function GET({ fetch, cookies }) {
	const client = createClient({ fetch, cookies })
	const headers = { 'Content-type': 'application/xml' }

	const posts = await client.getAllByType('blogpost')
	const pages = await client.getAllByType('page')
	const settings = await client.getSingle('settings')
	console.log(pages)

	const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
          ${pages
						.map(
							(page) => `
            <url>
              <loc>${settings.data.website_url}${page.url}</loc>
              <lastmod>${page.last_publication_date}</lastmod>
            </url>
            `,
						)
						.join('')}

          ${posts
						.map(
							(post) => `
            <url>
              <loc>${settings.data.website_url}${post.url}</loc>
              <lastmod>${post.last_publication_date}</lastmod>
            </url>
            `,
						)
						.join('')}
      </urlset>
  `.trim()

	return new Response(xml, { headers })
}
