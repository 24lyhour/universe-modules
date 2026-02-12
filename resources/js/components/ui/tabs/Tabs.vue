<script setup lang="ts">
import { TabsRoot } from 'reka-ui'

interface Props {
  modelValue?: string
  defaultValue?: string
  orientation?: 'horizontal' | 'vertical'
  dir?: 'ltr' | 'rtl'
  activationMode?: 'automatic' | 'manual'
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
  activationMode: 'automatic',
})

const emits = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <TabsRoot
    :model-value="props.modelValue"
    :default-value="props.defaultValue"
    :orientation="props.orientation"
    :dir="props.dir"
    :activation-mode="props.activationMode"
    @update:model-value="emits('update:modelValue', $event)"
  >
    <slot />
  </TabsRoot>
</template>
