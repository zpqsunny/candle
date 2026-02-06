import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: '/candle/',
  title: "🕯️Candle Light",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '香港银行卡', link: '/about' }
    ],

    sidebar: [
      {
        text: '关于我',
        items: [
          { text: '关于', link: '/about' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'haha', link: '/test/haha' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
