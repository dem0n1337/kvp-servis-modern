// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  // Explicitly enable SSR
  ssr: true,

  // Site URL for sitemap and canonical URLs
  site: {
    url: 'https://kvp-servis.sk',
    name: 'KVP-Servis',
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxtjs/sitemap',
  ],

  // Sitemap configuration
  sitemap: {
    xslColumns: [
      { label: 'URL', width: '65%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '35%' },
    ],
  },

  googleFonts: {
    families: {
      'EB Garamond': [400, 500, 600, 700, 800],
      'Montserrat': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'sk',
      },
      title: 'KVP-Servis - Kúrenie, voda a plyn',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Profesionálne služby v oblasti kúrenia, vody a plynu. Inštalácia, servis a údržba kotlov, podlahového kúrenia a vodovodných systémov.' },
        { name: 'keywords', content: 'kúrenie, voda, plyn, kotol, vaillant, buderus, bosch, junkers, protherm, podlahové kúrenie, radiátory, inštalácia, servis, Slovenský Grob, Bratislavský kraj' },
        // Open Graph defaults
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'sk_SK' },
        { property: 'og:site_name', content: 'KVP-Servis' },
        // Twitter/X defaults
        { name: 'twitter:card', content: 'summary' },
        // Geo meta tags for local SEO
        { name: 'geo.region', content: 'SK-BL' },
        { name: 'geo.placename', content: 'Slovenský Grob' },
        { name: 'geo.position', content: '48.253643;17.284890' },
        { name: 'ICBM', content: '48.253643, 17.284890' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      script: [
        // Google tag (gtag.js)
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-CF8RBRBE31',
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CF8RBRBE31');
            gtag('config', 'AW-16664778582');
          `,
        },
      ],
    },
  },

  // Runtime config for environment variables
  runtimeConfig: {
    // Private keys are only available on the server
    smtpServer: process.env.SMTP_SERVER || '',
    smtpUser: process.env.SMTP_USER || '',
    smtpPass: process.env.SMTP_PASS || '',

    // Public keys that are exposed to the client
    public: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || '',
    },
  },
})
