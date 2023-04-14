import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import Unocss from 'unocss/astro'
import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), Unocss({
    injectReset: true,
  }),
  AstroPWA(),
  ],
})
