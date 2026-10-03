import { defineRecipe } from '@pandacss/dev'

export const button = defineRecipe({
  className: 'button',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'semibold',
    borderRadius: 'md',
    cursor: 'pointer',
    transition: 'background 150ms',
  },
  variants: {
    variant: {
      solid: { bg: 'brand.600', color: 'white', _hover: { bg: 'brand.700' } },
      outline: {
        borderWidth: '1px',
        borderColor: 'brand.600',
        color: 'brand.700',
        _hover: { bg: 'brand.50' },
      },
    },
    size: {
      sm: { h: '8', px: '3', fontSize: 'sm' },
      md: { h: '10', px: '4', fontSize: 'md' },
      lg: { h: '12', px: '6', fontSize: 'lg' },
    },
  },
  defaultVariants: { variant: 'solid', size: 'md' },
})
