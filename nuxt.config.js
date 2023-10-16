// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      viewport: 'width=device-width, initial-scale=1',
      title: 'title',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{ name: 'description', content: 'content' }],
    },
  },
  ssr: false,

  // ssr: false,
  // nitro: {
  //   baseURL: 'https://localhost:3000',
  //   prerender: {
  //     crawlLinks: true,
  //     failOnError: false,
  //   },
  // },

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/styles/vars/variables.sass"',
        },
      },
    },
  },

  css: [
    '~/assets/styles/reset.css',
    '~/assets/styles/form-reset.css',
    '~/assets/styles/typography.sass',
    '~/assets/styles/transitions.sass',
    '~/assets/styles/main.sass',
  ],

  modules: [
    'nuxt-icons',
    [
      '@storyblok/nuxt',
      {
        accessToken:
          process.env.NODE_ENV == 'production'
            ? process.env.PUBLICKEY
            : process.env.PREVIEWKEY,
      },
    ],
  ],

  build: {
    transpile: ['gsap'],
  },
});
