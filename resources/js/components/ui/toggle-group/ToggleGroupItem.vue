<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ToggleVariants } from '../toggle'
import { ToggleGroupItem } from 'reka-ui'
import { inject } from 'vue'
import { cn } from '@/lib/utils'
import { toggleVariants } from '../toggle'

interface Props {
  value: string
  disabled?: boolean
  class?: HTMLAttributes['class']
  variant?: ToggleVariants['variant']
  size?: ToggleVariants['size']
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
})

const groupVariant = inject<ToggleVariants['variant']>('toggleGroupVariant')
const groupSize = inject<ToggleVariants['size']>('toggleGroupSize')
</script>

<template>
  <ToggleGroupItem
    :value="value"
    :disabled="disabled"
    :class="cn(toggleVariants({ variant: variant ?? groupVariant, size: size ?? groupSize }), props.class)"
  >
    <slot />
  </ToggleGroupItem>
</template>
