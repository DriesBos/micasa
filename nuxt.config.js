// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      title: 'title',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{ name: 'description', content: 'content' }],
    },
  },

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
    '~/assets/styles/main.sass',
  ],

  modules: [
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
});
