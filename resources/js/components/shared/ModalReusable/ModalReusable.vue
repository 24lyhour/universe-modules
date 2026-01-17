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

interface Props {
    title: string;
    description?: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    showFooter?: boolean;
    scrollable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    maxWidth: 'md',
    showFooter: true,
    scrollable: true,
});

const open = defineModel<boolean>('open', { default: false });

const emit = defineEmits<{
    close: [];
}>();

const maxWidthClasses = {
    sm: 'sm:max-w-[425px]',
    md: 'sm:max-w-[500px]',
    lg: 'sm:max-w-[600px]',
    xl: 'sm:max-w-[700px]',
    '2xl': 'sm:max-w-[800px]',
    full: 'sm:max-w-[90vw]',
};

const handleClose = () => {
    open.value = false;
    emit('close');
};
</script>

<template>
    <Dialog v-model:open="open">
        <DialogContent
            :class="[
                maxWidthClasses[maxWidth],
                scrollable ? 'max-h-[90vh] overflow-y-auto' : '',
            ]"
        >
            <DialogHeader>
                <DialogTitle>{{ title }}</DialogTitle>
                <DialogDescription v-if="description">
                    {{ description }}
                </DialogDescription>
            </DialogHeader>

            <div class="py-2">
                <slot />
            </div>

            <DialogFooter v-if="showFooter">
                <slot name="footer">
                    <Button type="button" variant="outline" @click="handleClose">
                        Close
                    </Button>
                </slot>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
