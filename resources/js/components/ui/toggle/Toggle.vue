<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ToggleVariants } from '.'
import { ToggleRoot } from 'reka-ui'
import { cn } from '@/lib/utils'
import { toggleVariants } from '.'

interface Props {
  defaultPressed?: boolean
  pressed?: boolean
  disabled?: boolean
  class?: HTMLAttributes['class']
  variant?: ToggleVariants['variant']
  size?: ToggleVariants['size']
}

const props = withDefaults(defineProps<Props>(), {
  defaultPressed: false,
  pressed: undefined,
  disabled: false,
})

const emits = defineEmits<{
  'update:pressed': [value: boolean]
}>()
</script>

<template>
  <ToggleRoot
    :default-pressed="defaultPressed"
    :pressed="pressed"
    :disabled="disabled"
    :class="cn(toggleVariants({ variant, size }), props.class)"
    @update:pressed="emits('update:pressed', $event)"
  >
    <slot />
  </ToggleRoot>
</template>
