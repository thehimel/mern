import nextra from 'nextra'
import nextPWA from 'next-pwa'

// Configure PWA settings
const withPWA = nextPWA({
  dest: 'public', // Where to output the service worker and PWA files
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development for faster builds
  register: true, // Automatically register the service worker when the app loads
  skipWaiting: true // Immediately activate new service worker versions (users get updates right away)
})

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
    search: {
    codeblocks: false, // Disable searching in code blocks
    filename: false,   // Disable searching in filenames
  }
})

const nextraConfig = withNextra({
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ];
  },
  // Add any other Next.js config options here
})

export default withPWA(nextraConfig)
