<script setup lang="ts">
import { cn } from '@/lib/utils';

interface Props {
    class?: string;
    vertical?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    vertical: false,
});
</script>

<template>
    <div
        role="group"
        :class="cn(
            'inline-flex rounded-md shadow-sm',
            vertical ? 'flex-col' : 'flex-row',
            '[&>button]:rounded-none',
            '[&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md',
            vertical && '[&>button:first-child]:rounded-t-md [&>button:first-child]:rounded-l-none [&>button:last-child]:rounded-b-md [&>button:last-child]:rounded-r-none',
            '[&>button:not(:first-child)]:-ml-px',
            vertical && '[&>button:not(:first-child)]:ml-0 [&>button:not(:first-child)]:-mt-px',
            props.class
        )"
    >
        <slot />
    </div>
</template>
