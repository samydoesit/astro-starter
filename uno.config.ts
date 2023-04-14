import {
  defineConfig,
  presetAttributify,
  presetWind,

  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import type { theme as windTheme } from '@unocss/preset-wind'
import { presetIcons } from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetWind(),
    presetIcons(),
  ],
  theme: {} as typeof windTheme,
  shortcuts: [
    ['btn', 'inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'],
    // background
    {
      'bg-base': 'bg-$c-bg-base',
    },
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  include: [
    '**/*.ts',
    '**/*.vue',
    '**/*.astro',
  ],
})
