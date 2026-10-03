import { definePreset } from '@pandacss/dev'
import { colors, radii } from '@ds/tokens'
import { button } from './recipes/button'
import { switchRecipe } from './recipes/switch'

type Raw = { [key: string]: string | Raw }
type Tokens = { [key: string]: { value: string } | Tokens }

const toTokens = (raw: Raw): Tokens =>
  Object.fromEntries(
    Object.entries(raw).map(([key, value]) => [
      key,
      typeof value === 'string' ? { value } : toTokens(value),
    ]),
  )

export const preset = definePreset({
  name: 'ds',
  theme: {
    extend: {
      tokens: {
        colors: toTokens(colors),
        radii: toTokens(radii),
      },
      recipes: { button },
      slotRecipes: { switchRecipe },
    },
  },
})
