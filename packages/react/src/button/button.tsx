import type { ComponentProps } from 'react'
import { button, type ButtonVariantProps } from '../../styled-system/recipes'

export type ButtonProps = ComponentProps<'button'> & ButtonVariantProps

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={[button({ variant, size }), className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}
