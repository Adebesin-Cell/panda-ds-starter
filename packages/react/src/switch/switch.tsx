import { Switch as ArkSwitch } from '@ark-ui/react/switch'
import type { ReactNode } from 'react'
import { switchRecipe, type SwitchRecipeVariantProps } from '../../styled-system/recipes'

export type SwitchProps = ArkSwitch.RootProps &
  SwitchRecipeVariantProps & {
    children?: ReactNode
  }

export function Switch({ size, children, ...props }: SwitchProps) {
  const classes = switchRecipe({ size })

  return (
    <ArkSwitch.Root className={classes.root} {...props}>
      <ArkSwitch.Control className={classes.control}>
        <ArkSwitch.Thumb className={classes.thumb} />
      </ArkSwitch.Control>
      {children && <ArkSwitch.Label className={classes.label}>{children}</ArkSwitch.Label>}
      <ArkSwitch.HiddenInput />
    </ArkSwitch.Root>
  )
}
