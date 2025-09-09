import { MetadataRoute } from 'next'
import { site } from '@/lib/site-config'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${site.domain}`

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
