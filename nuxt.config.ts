// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Surveying Engineer Platform',
      meta: [
        { name: 'description', content: 'Professional training platform for surveyors - Learn and become a professional surveyor' }
      ]
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/hints'
  ],

  nitro: {
    preset: 'cloudflare_pages',
    compatibilityDate: '2025-07-15',
    prerender: {
      routes: ['/']
    }
  },

  content: {
    // D1 database will be used automatically on Cloudflare Pages
    // better-sqlite3 will be used during local development and build
    database: {
      provider: process.env.CF_PAGES ? 'd1' : 'sqlite',
      binding: 'DB'
    }
  }

})