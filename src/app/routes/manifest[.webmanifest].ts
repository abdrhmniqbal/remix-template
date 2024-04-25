import type { WebAppManifest } from '@remix-pwa/dev'
import { json } from '@remix-run/node'

export const loader = () => {
  return json(
    {
      short_name: 'Remix',
      name: 'Remix',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#000000',
    } as WebAppManifest,
    {
      headers: {
        'Cache-Control': 'public, max-age=600',
        'Content-Type': 'application/manifest+json',
      },
    },
  )
}
