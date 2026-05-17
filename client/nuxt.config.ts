// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/images/logo.png",
        },
        {
          rel: "preconnect",
          href: "http://localhost:8000",
        },
      ],
    },
  },
  css: ["~/assets/styles/scss/main.scss"],
  modules: [
    "@nuxt/fonts",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxt/test-utils/module",
  ],
  fonts: {
    families: [
      {
        name: "Outfit",
        weights: [300, 400, 500, 600, 700],
        styles: ["normal"],
        display: "swap",
      },
    ],
  },
  image: {
    domains: ["localhost", "127.0.0.1"],
  },
  runtimeConfig: {
    public: {
      apiBase:
        process.env.NUXT_PUBLIC_API_BASE || "http://localhost:8000/api/v1",
      mediaBase: process.env.NUXT_PUBLIC_MEDIA_BASE || "http://localhost:8000",
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/scss/_variables.scss" as *;',
        },
      },
    },
  },
});
