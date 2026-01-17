<script setup lang="ts">
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

type ModalMode = 'create' | 'edit';

interface Props {
    title: string;
    description?: string;
    mode?: ModalMode;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    submitText?: string;
    cancelText?: string;
    loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    mode: 'create',
    maxWidth: 'lg',
    cancelText: 'Cancel',
    loading: false,
});

const open = defineModel<boolean>('open', { default: false });

const emit = defineEmits<{
    submit: [];
    cancel: [];
}>();

const maxWidthClasses = {
    sm: 'sm:max-w-[425px]',
    md: 'sm:max-w-[500px]',
    lg: 'sm:max-w-[600px]',
    xl: 'sm:max-w-[700px]',
    '2xl': 'sm:max-w-[800px]',
};

const defaultSubmitText = props.mode === 'create' ? 'Create' : 'Save Changes';

const handleSubmit = () => {
    emit('submit');
};

const handleCancel = () => {
    open.value = false;
    emit('cancel');
};
</script>

<template>
    <Dialog v-model:open="open">
        <DialogContent :class="['max-h-[90vh] overflow-y-auto', maxWidthClasses[maxWidth]]">
            <DialogHeader>
                <DialogTitle>{{ title }}</DialogTitle>
                <DialogDescription v-if="description">
                    {{ description }}
                </DialogDescription>
            </DialogHeader>

            <form class="space-y-4" @submit.prevent="handleSubmit">
                <slot />

                <DialogFooter>
                    <slot name="footer">
                        <Button type="button" variant="outline" :disabled="loading" @click="handleCancel">
                            {{ cancelText }}
                        </Button>
                        <Button type="submit" :disabled="loading">
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
                            {{ loading ? 'Processing...' : submitText || defaultSubmitText }}
                        </Button>
                    </slot>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
</template>
