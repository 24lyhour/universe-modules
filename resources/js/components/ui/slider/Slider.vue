<script setup lang="ts">
import { computed } from 'vue';
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps<{
    defaultValue?: number[];
    modelValue?: number[];
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    orientation?: 'horizontal' | 'vertical';
    class?: string;
}>();

const emits = defineEmits<{
    'update:modelValue': [value: number[]];
}>();

const modelValue = computed({
    get: () => props.modelValue ?? props.defaultValue ?? [0],
    set: (value) => emits('update:modelValue', value),
});
</script>

<template>
    <SliderRoot
        v-model="modelValue"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        :orientation="orientation"
        :class="
            cn(
                'relative flex w-full touch-none select-none items-center',
                props.class
            )
        "
    >
        <SliderTrack
            class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"
        >
            <SliderRange class="absolute h-full bg-primary" />
        </SliderTrack>
        <SliderThumb
            v-for="(_, index) in modelValue"
            :key="index"
            class="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        />
    </SliderRoot>
</template>
