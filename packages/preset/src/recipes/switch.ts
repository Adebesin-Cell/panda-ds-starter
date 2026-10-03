import { defineSlotRecipe } from '@pandacss/dev'

export const switchRecipe = defineSlotRecipe({
  className: 'switch',
  slots: ['root', 'control', 'thumb', 'label'],
  base: {
    root: { display: 'inline-flex', alignItems: 'center', gap: '2', cursor: 'pointer' },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
      p: '0.5',
      borderRadius: 'full',
      bg: 'gray.300',
      transition: 'background 150ms',
      _checked: { bg: 'brand.600' },
      _focusVisible: { outline: '2px solid', outlineColor: 'brand.500', outlineOffset: '2px' },
    },
    thumb: {
      borderRadius: 'full',
      bg: 'white',
      boxShadow: 'sm',
      transition: 'transform 150ms',
    },
    label: { fontSize: 'sm' },
  },
  variants: {
    size: {
      sm: {
        control: { w: '8', h: '4.5' },
        thumb: { boxSize: '3.5', _checked: { transform: 'translateX(14px)' } },
      },
      md: {
        control: { w: '10', h: '6' },
        thumb: { boxSize: '5', _checked: { transform: 'translateX(16px)' } },
      },
    },
  },
  defaultVariants: { size: 'md' },
})
