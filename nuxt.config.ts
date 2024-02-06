// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      htmlAttrs: {
        dir: "rtl",
        lang: "fa"
      }
    }
  }
})
