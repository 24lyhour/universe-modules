<script setup lang="ts">
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { AlertTriangle, Trash2, Info, AlertCircle } from 'lucide-vue-next';
import { computed } from 'vue';

type DialogVariant = 'danger' | 'warning' | 'info' | 'default';

interface Props {
    title: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    variant?: DialogVariant;
    loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    variant: 'default',
    loading: false,
});

const open = defineModel<boolean>('open', { default: false });

const emit = defineEmits<{
    confirm: [];
    cancel: [];
}>();

const variantConfig = computed(() => {
    const configs = {
        danger: {
            icon: Trash2,
            iconClass: 'text-destructive',
            buttonClass: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        },
        warning: {
            icon: AlertTriangle,
            iconClass: 'text-yellow-500',
            buttonClass: 'bg-yellow-500 text-white hover:bg-yellow-600',
        },
        info: {
            icon: Info,
            iconClass: 'text-blue-500',
            buttonClass: 'bg-blue-500 text-white hover:bg-blue-600',
        },
        default: {
            icon: AlertCircle,
            iconClass: 'text-muted-foreground',
            buttonClass: '',
        },
    };
    return configs[props.variant];
});

const handleConfirm = () => {
    emit('confirm');
};

const handleCancel = () => {
    open.value = false;
    emit('cancel');
};
</script>

<template>
    <AlertDialog v-model:open="open">
        <AlertDialogContent class="sm:max-w-[425px]">
            <AlertDialogHeader>
                <div class="flex items-start gap-4">
                    <div
                        :class="[
                            'flex h-10 w-10 shrink-0 items-center justify-center rounded-full',
                            variant === 'danger' ? 'bg-destructive/10' : '',
                            variant === 'warning' ? 'bg-yellow-100 dark:bg-yellow-900/20' : '',
                            variant === 'info' ? 'bg-blue-100 dark:bg-blue-900/20' : '',
                            variant === 'default' ? 'bg-muted' : '',
                        ]"
                    >
                        <component :is="variantConfig.icon" :class="['h-5 w-5', variantConfig.iconClass]" />
                    </div>
                    <div class="space-y-2">
                        <AlertDialogTitle>{{ title }}</AlertDialogTitle>
                        <AlertDialogDescription v-if="description">
                            {{ description }}
                        </AlertDialogDescription>
                        <slot />
                    </div>
                </div>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel :disabled="loading" @click="handleCancel">
                    {{ cancelText }}
                </AlertDialogCancel>
                <AlertDialogAction
                    :class="variantConfig.buttonClass"
                    :disabled="loading"
                    @click="handleConfirm"
                >
                    <svg
                        v-if="loading"
                        class="mr-2 h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                        />
                        <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    {{ loading ? 'Processing...' : confirmText }}
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>
