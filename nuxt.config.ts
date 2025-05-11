// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  modules: ["nuxt-lazy-hydrate", "@nuxt/image"],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000',
    }
  },
  image: {
    domains: ['www.otaghak.com'],
    quality: 30,
    formats: ['webp'],
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: ['/', '/room/2387189']
    },
    publicAssets: [
      {
        dir: 'public',
        maxAge: 31536000,
      },
    ],
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