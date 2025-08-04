// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt'
  ],

  googleFonts: {
    families: {
      'EB Garamond': [400, 500, 600, 700, 800],
      'Montserrat': [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },

  app: {
    head: {
      title: 'KVP-Servis - Kúrenie, voda a plyn',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Profesionálne služby v oblasti kúrenia, vody a plynu. Inštalácia, servis a údržba kotlov, podlahového kúrenia a vodovodných systémov.' },
        { name: 'keywords', content: 'kúrenie, voda, plyn, kotol, vaillant, buderus, bosch, junkers, protherm, podlahové kúrenie, radiátory, inštalácia, servis' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Runtime config for environment variables
  runtimeConfig: {
    // Private keys are only available on the server
    smtpServer: process.env.SMTP_SERVER || '',
    smtpUser: process.env.SMTP_USER || '',
    smtpPass: process.env.SMTP_PASS || '',
    
    // Public keys that are exposed to the client
    public: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || ''
    }
  }
})
