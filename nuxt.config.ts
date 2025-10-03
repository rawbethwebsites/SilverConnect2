export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts'
  ],

  css: ['~/assets/css/main.css'],

  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],
      'Poppins': [400, 500, 600, 700]
    }
  },

  app: {
    head: {
      title: 'SilverConnect - Your Digital Companion',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Emotionally fulfilling digital companionship for meaningful connections' }
      ]
    }
  },

  runtimeConfig: {
    xanoApiKey: process.env.XANO_API_KEY,
    openrouterApiKey: process.env.OPENROUTER_API_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    
    public: {
      xanoApiUrl: process.env.XANO_API_URL,
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY
    }
  },

  typescript: {
    strict: true,
    typeCheck: true
  }
})