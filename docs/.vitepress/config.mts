import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: 'Perfect Clicker Fitting Guide',
    description: 'A practical workflow for making printed clickers fit, move, and feel right.',
    base: '/perfect-clicker-fitting-guide/',
    cleanUrls: true,
    lastUpdated: true,
    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/perfect-clicker-fitting-guide/logo.svg' }],
      ['meta', { name: 'theme-color', content: '#1f8a70' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:title', content: 'Perfect Clicker Fitting Guide' }],
      [
        'meta',
        {
          property: 'og:description',
          content: 'A practical workflow for tuning 3D printed clicker fit with Bambu Studio.'
        }
      ]
    ],
    themeConfig: {
      logo: '/logo.svg',
      nav: [
        { text: 'Guide', link: '/guide/' },
        { text: 'Example', link: '/examples/capybara-clicker-keychain' },
        { text: 'Reference', link: '/reference/fit-testing' }
      ],
      sidebar: [
        {
          text: 'Guide',
          items: [
            { text: 'Overview', link: '/guide/' }
          ]
        },
        {
          text: 'Examples',
          items: [
            { text: 'Capybara Clicker Keychain', link: '/examples/capybara-clicker-keychain' }
          ]
        },
        {
          text: 'Reference',
          items: [
            { text: 'Fit Testing', link: '/reference/fit-testing' }
          ]
        },
        {
          text: 'Project',
          items: [
            { text: 'Contributing', link: '/contributing' }
          ]
        }
      ],
      editLink: {
        pattern: 'https://github.com/jakecastelli/perfect-clicker-fitting-guide/edit/main/docs/:path',
        text: 'Edit this page on GitHub'
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/jakecastelli/perfect-clicker-fitting-guide' }
      ],
      search: {
        provider: 'local'
      },
      outline: {
        level: [2, 3]
      }
    },
    mermaid: {
      theme: 'neutral'
    }
  })
)
