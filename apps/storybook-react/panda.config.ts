import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  designSystem: '@ds/react',
  include: ['.storybook/**/*.{ts,tsx}'],
  preflight: true,
  staticCss: { recipes: '*' },
  outdir: 'styled-system',
})
