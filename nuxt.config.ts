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
    // Why we need better-sqlite3:
    // - During BUILD: Nuxt Content processes your markdown files and needs a database
    //   to index/store content metadata. This happens during 'npm run build' on Cloudflare.
    //   better-sqlite3 is used here because D1 is not available during the build process.
    // - At RUNTIME: When your app runs on Cloudflare Pages, it uses D1 database (Cloudflare's SQLite)
    //   via the 'DB' binding to query content.
    database: {
      provider: process.env.CF_PAGES ? 'd1' : 'sqlite',
      binding: 'DB'
    }
  }

})