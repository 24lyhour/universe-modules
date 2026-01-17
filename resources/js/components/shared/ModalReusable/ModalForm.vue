<script setup lang="ts">
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

type ModalMode = 'create' | 'edit';
type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type ModalSide = 'top' | 'right' | 'bottom' | 'left';

interface Props {
    title: string;
    description?: string;
    mode?: ModalMode;
    size?: ModalSize;
    side?: ModalSide;
    submitText?: string;
    cancelText?: string;
    loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    mode: 'create',
    size: 'lg',
    side: 'right',
    cancelText: 'Cancel',
    loading: false,
});

const open = defineModel<boolean>('open', { default: false });

const emit = defineEmits<{
    submit: [];
    cancel: [];
}>();

// Size classes for the sheet width
const sizeClasses = {
    sm: 'sm:max-w-[400px]',
    md: 'sm:max-w-[500px]',
    lg: 'sm:max-w-[600px]',
    xl: 'sm:max-w-[700px]',
    '2xl': 'sm:max-w-[900px]',
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
    <Sheet v-model:open="open">
        <SheetContent :side="side" :class="['flex flex-col p-0', sizeClasses[size]]">
            <SheetHeader class="border-b px-6 py-4">
                <SheetTitle>{{ title }}</SheetTitle>
                <SheetDescription v-if="description">
                    {{ description }}
                </SheetDescription>
            </SheetHeader>

            <form class="flex flex-1 flex-col overflow-hidden" @submit.prevent="handleSubmit">
                <ScrollArea class="flex-1 px-6 py-4">
                    <div class="space-y-4 pr-4">
                        <slot />
                    </div>
                </ScrollArea>

                <SheetFooter class="border-t px-6 py-4">
                    <slot name="footer">
                        <div class="flex w-full gap-2">
                            <Button
                                type="button"
                                variant="outline"
                                class="flex-1"
                                :disabled="loading"
                                @click="handleCancel"
                            >
                                {{ cancelText }}
                            </Button>
                            <Button type="submit" class="flex-1" :disabled="loading">
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
                        </div>
                    </slot>
                </SheetFooter>
            </form>
        </SheetContent>
    </Sheet>
</template>
