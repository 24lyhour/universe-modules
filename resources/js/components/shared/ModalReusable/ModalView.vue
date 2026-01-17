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
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    showEditButton?: boolean;
    editText?: string;
    closeText?: string;
}

const props = withDefaults(defineProps<Props>(), {
    maxWidth: 'lg',
    showEditButton: true,
    editText: 'Edit',
    closeText: 'Close',
});

const open = defineModel<boolean>('open', { default: false });

const emit = defineEmits<{
    edit: [];
    close: [];
}>();

const maxWidthClasses = {
    sm: 'sm:max-w-[425px]',
    md: 'sm:max-w-[500px]',
    lg: 'sm:max-w-[600px]',
    xl: 'sm:max-w-[700px]',
    '2xl': 'sm:max-w-[800px]',
};

const handleEdit = () => {
    emit('edit');
};

const handleClose = () => {
    open.value = false;
    emit('close');
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

            <div class="space-y-4">
                <slot />
            </div>

            <DialogFooter>
                <slot name="footer">
                    <Button type="button" variant="outline" @click="handleClose">
                        {{ closeText }}
                    </Button>
                    <Button v-if="showEditButton" type="button" @click="handleEdit">
                        {{ editText }}
                    </Button>
                </slot>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
