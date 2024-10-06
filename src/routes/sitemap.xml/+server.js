import { createClient } from '$lib/prismicio'
import { routes } from '$lib/prismicio'

export const prerender = true

export async function GET({ fetch, cookies }) {
	const client = createClient({ fetch, cookies })
	const headers = { 'Content-type': 'application/xml' }

	//todo chore clean up this mess? refactor
	// @ts-ignore
	const filteredRoutes = [...new Map(routes.map((v) => [v.type, v])).values()]

	const allPages = await Promise.all(
		filteredRoutes.map(async (route) => {
			return client.getAllByType(route.type)
		}),
	).then((res) => res.flat().concat())

	const settings = await client.getSingle('settings')

	const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
          ${allPages
						.map(
							(page) => `
            <url>
              <loc>${settings.data.website_url}${page.url}</loc>
              <lastmod>${page.last_publication_date}</lastmod>
            </url>
            `,
						)
						.join('')}

      </urlset>
  `.trim()

	return new Response(xml, { headers })
}
