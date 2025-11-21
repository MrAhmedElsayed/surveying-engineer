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
    preset: 'cloudflare-pages',
    compatibilityDate: '2025-07-15'
  },

  content: {
    database: {
      adapter: 'cloudflare-d1',
      binding: 'DB'
    }
  }

})