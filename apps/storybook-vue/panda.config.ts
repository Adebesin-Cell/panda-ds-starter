import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  designSystem: '@ds/vue',
  include: ['.storybook/**/*.ts'],
  preflight: true,
  staticCss: { recipes: '*' },
  outdir: 'styled-system',
})
