<script setup lang="ts">
import { Switch } from '@ark-ui/vue/switch'
import { switchRecipe } from '../../styled-system/recipes'

const props = defineProps<{
  size?: 'sm' | 'md'
  defaultChecked?: boolean
}>()

const classes = switchRecipe({ size: props.size })
</script>

<template>
  <Switch.Root :class="classes.root" :default-checked="props.defaultChecked">
    <Switch.Control :class="classes.control">
      <Switch.Thumb :class="classes.thumb" />
    </Switch.Control>
    <Switch.Label v-if="$slots.default" :class="classes.label">
      <slot />
    </Switch.Label>
    <Switch.HiddenInput />
  </Switch.Root>
</template>
