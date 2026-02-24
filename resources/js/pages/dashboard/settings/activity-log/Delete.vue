<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import { router } from '@inertiajs/vue3';
import { ref, computed, watch } from 'vue';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertTriangle } from 'lucide-vue-next';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    user: User | null;
}

const props = defineProps<Props>();

const open = defineModel<boolean>('open', { default: false });

const emit = defineEmits<{
    deleted: [];
}>();

const confirmed = ref(false);
const loading = ref(false);

const canSubmit = computed(() => confirmed.value === true);

// Reset confirmed when modal opens/closes
watch(open, (isOpen) => {
    if (!isOpen) {
        confirmed.value = false;
    }
});

const handleSubmit = () => {
    if (!props.user) return;

    loading.value = true;
    router.delete(`/dashboard/settings/users/${props.user.id}`, {
        preserveScroll: true,
        onSuccess: () => {
            emit('deleted');
            open.value = false;
        },
        onFinish: () => {
            loading.value = false;
        },
    });
};

const handleCancel = () => {
    open.value = false;
};
</script>

<template>
    <ModalForm
        v-model:open="open"
        title="Delete User"
        description="This action cannot be undone"
        mode="delete"
        size="md"
        submit-text="Delete User"
        :loading="loading"
        :disabled="!canSubmit"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <div class="space-y-6">
            <!-- Warning Banner -->
            <div class="flex items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4">
                <AlertTriangle class="mt-0.5 h-5 w-5 text-destructive" />
                <div class="space-y-1">
                    <p class="text-sm font-medium text-destructive">
                        You are about to delete this user
                    </p>
                    <p class="text-sm text-muted-foreground">
                        <strong>{{ user?.name }}</strong> ({{ user?.email }}) will be permanently removed along with all their data.
                    </p>
                </div>
            </div>

            <!-- Confirmation Checkbox -->
            <div class="flex items-start space-x-3 rounded-lg border p-4">
                <Checkbox
                    id="delete-confirmed"
                    v-model="confirmed"
                />
                <div class="space-y-1">
                    <Label for="delete-confirmed" class="cursor-pointer font-medium">
                        I confirm this deletion
                    </Label>
                    <p class="text-sm text-muted-foreground">
                        I understand that this action cannot be undone.
                    </p>
                </div>
            </div>
        </div>
    </ModalForm>
</template>
