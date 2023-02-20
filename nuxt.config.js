// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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

  modules: [['@storyblok/nuxt', { accessToken: 'xqxGf5K27JJeyyfVi3w3Agtt' }]],
});
