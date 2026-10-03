import type { ComponentProps } from 'react'
import { css, cx } from '../../styled-system/css'

export function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cx(
        css({
          p: '6',
          borderRadius: 'md',
          borderWidth: '1px',
          borderColor: 'brand.100',
          bg: 'white',
          boxShadow: 'sm',
        }),
        className,
      )}
      {...props}
    />
  )
}
