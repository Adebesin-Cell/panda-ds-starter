<script setup lang="ts">
import { button } from '../../styled-system/recipes'

const props = defineProps<{
  variant?: 'solid' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <button :class="button({ variant: props.variant, size: props.size })">
    <slot />
  </button>
</template>
