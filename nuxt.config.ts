// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      'Noto Sans Lao': [400, 700],
      'Noto Sans': [400, 700],
      'Roboto': [400], // Still loaded, available for specific elements if needed
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },

  // ---&gt; CHANGE THE ORDER HERE &lt;---
  css: [
    // Load Bootstrap and Icons first
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    // Load your custom styles LAST to override Bootstrap defaults
    '~/assets/css/main.css',
  ],

  app: {
     head: {
       // Ensure NO manual google font links here
       script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          defer: true
        }
      ]
     }
  },

  compatibilityDate: '2025-04-17',

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://10.0.100.31:4470",
      apiImage: process.env.NUXT_PUBLIC_API_IMAGE || "http://10.0.100.31:8060",
    },
  },

})
