// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

import Aura from '@primeuix/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css', 
      '~/assets/css/styles.scss'],
  vite: { 
    plugins: [tailwindcss(),], 
  },
  modules: [
        '@primevue/nuxt-module'
    ],
    primevue: {
        /* Configuration */
    }
  
  
  
  
})
