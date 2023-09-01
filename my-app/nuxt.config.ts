// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    // '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@vite-pwa/nuxt'
  ],
  // runtimeConfig:{
  //   public:{
  //     bucketUrl: process.env.BUCKET_URL
  //   }
  // },
  // pages: true,
})
