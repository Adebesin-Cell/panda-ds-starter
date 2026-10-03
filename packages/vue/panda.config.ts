import { defineConfig } from '@pandacss/dev'
import { preset } from '@ds/preset'

export default defineConfig({
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda', preset],
  include: ['src/**/*.{ts,vue}'],
  outdir: 'styled-system',
})
