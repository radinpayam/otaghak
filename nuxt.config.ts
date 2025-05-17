// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  modules: ["nuxt-lazy-hydrate", "@nuxt/image"],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBase: 'https://myjsonapi-uhsw.onrender.com',
    }
  },
  image: {
    domains: ['www.otaghak.com'],
    quality: 40,
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