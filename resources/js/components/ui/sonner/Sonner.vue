<script lang="ts" setup>
import type { ToasterProps } from 'vue-sonner';
import {
    CheckCircle2,
    Info,
    Loader2,
    OctagonX,
    TriangleAlert,
    X,
} from 'lucide-vue-next';
import { Toaster as Sonner } from 'vue-sonner';
import { computed } from 'vue';

const props = defineProps<ToasterProps>();

// Merge default toast options with any passed via props
const mergedToastOptions = computed(() => ({
    ...props.toastOptions,
    classes: {
        toast: 'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:rounded-lg !z-[99999]',
        title: 'group-[.toast]:text-foreground group-[.toast]:font-semibold',
        description: 'group-[.toast]:text-muted-foreground',
        actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
        cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        closeButton: 'group-[.toast]:bg-background group-[.toast]:text-foreground group-[.toast]:border-border group-[.toast]:hover:bg-muted',
        success: 'group-[.toaster]:!bg-green-50 group-[.toaster]:!text-green-900 group-[.toaster]:!border-green-200 dark:group-[.toaster]:!bg-green-950 dark:group-[.toaster]:!text-green-100 dark:group-[.toaster]:!border-green-800',
        error: 'group-[.toaster]:!bg-red-50 group-[.toaster]:!text-red-900 group-[.toaster]:!border-red-200 dark:group-[.toaster]:!bg-red-950 dark:group-[.toaster]:!text-red-100 dark:group-[.toaster]:!border-red-800',
        warning: 'group-[.toaster]:!bg-yellow-50 group-[.toaster]:!text-yellow-900 group-[.toaster]:!border-yellow-200 dark:group-[.toaster]:!bg-yellow-950 dark:group-[.toaster]:!text-yellow-100 dark:group-[.toaster]:!border-yellow-800',
        info: 'group-[.toaster]:!bg-blue-50 group-[.toaster]:!text-blue-900 group-[.toaster]:!border-blue-200 dark:group-[.toaster]:!bg-blue-950 dark:group-[.toaster]:!text-blue-100 dark:group-[.toaster]:!border-blue-800',
        ...props.toastOptions?.classes,
    },
}));

// Compute rest props without toastOptions to avoid duplicate binding
const restProps = computed(() => {
    const { toastOptions, ...rest } = props;
    return rest;
});
</script>

<template>
    <Sonner
        class="toaster group !z-[99999]"
        :toast-options="mergedToastOptions"
        v-bind="restProps"
    >
        <template #success-icon>
            <CheckCircle2 class="size-5 text-green-600 dark:text-green-400" />
        </template>
        <template #info-icon>
            <Info class="size-5 text-blue-600 dark:text-blue-400" />
        </template>
        <template #warning-icon>
            <TriangleAlert class="size-5 text-yellow-600 dark:text-yellow-400" />
        </template>
        <template #error-icon>
            <OctagonX class="size-5 text-red-600 dark:text-red-400" />
        </template>
        <template #loading-icon>
            <Loader2 class="size-5 animate-spin text-muted-foreground" />
        </template>
        <template #close-icon>
            <X class="size-4" />
        </template>
    </Sonner>
</template>
