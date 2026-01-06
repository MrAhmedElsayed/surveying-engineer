// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nitro-cloudflare-dev", "@nuxt/eslint", "@nuxt/image", "@nuxt/ui", '@nuxt/content', '@vueuse/nuxt', 'nuxt-og-image', ],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  // content: {
  //   database: {
  //     type: 'd1',
  //     bindingName: 'DB'
  //   }
  // },
  routeRules: {
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },

  nitro: {
    preset: "cloudflare_module",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
