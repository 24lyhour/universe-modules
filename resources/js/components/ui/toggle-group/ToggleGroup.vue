<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ToggleVariants } from '../toggle'
import { ToggleGroupRoot } from 'reka-ui'
import { provide } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  type?: 'single' | 'multiple'
  modelValue?: string | string[]
  defaultValue?: string | string[]
  disabled?: boolean
  rovingFocus?: boolean
  orientation?: 'horizontal' | 'vertical'
  dir?: 'ltr' | 'rtl'
  loop?: boolean
  class?: HTMLAttributes['class']
  variant?: ToggleVariants['variant']
  size?: ToggleVariants['size']
}

const props = withDefaults(defineProps<Props>(), {
  type: 'single',
  disabled: false,
  rovingFocus: true,
  orientation: 'horizontal',
  loop: true,
})

const emits = defineEmits<{
  'update:modelValue': [value: string | string[]]
}>()

provide('toggleGroupVariant', props.variant)
provide('toggleGroupSize', props.size)
</script>

<template>
  <ToggleGroupRoot
    :type="type"
    :model-value="modelValue"
    :default-value="defaultValue"
    :disabled="disabled"
    :roving-focus="rovingFocus"
    :orientation="orientation"
    :dir="dir"
    :loop="loop"
    :class="cn('flex items-center justify-center gap-1', props.class)"
    @update:model-value="emits('update:modelValue', $event)"
  >
    <slot />
  </ToggleGroupRoot>
</template>
