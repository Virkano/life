// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  css: ['~/assets/css/main.css', '@unocss/reset/tailwind.css'],
  //   页面过度
  app: {
    pageTransition: { name: 'app', mode: 'out-in' },
    // 布局过渡
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      meta: [{ name: 'referrer', content: 'no-referrer' }],
    },
  },
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'dayjs-nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
  ],
  content: {
    documentDriven: true,
  },
  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
    ],
  },
  piniaPersistedstate: {
    storage: 'sessionStorage',
  },
} as NuxtConfig)
