<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import { router } from '@inertiajs/vue3';
import { ref, computed, watch } from 'vue';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle } from 'lucide-vue-next';

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
    unsuspended: [];
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
    router.post(`/dashboard/settings/users/${props.user.id}/unsuspend`, {}, {
        preserveScroll: true,
        onSuccess: () => {
            emit('unsuspended');
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
        title="Unsuspend User"
        description="This will restore user access"
        mode="confirm"
        size="md"
        submit-text="Unsuspend User"
        :loading="loading"
        :disabled="!canSubmit"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <div class="space-y-6">
            <!-- Info Banner -->
            <div class="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950">
                <CheckCircle class="mt-0.5 h-5 w-5 text-green-600 dark:text-green-400" />
                <div class="space-y-1">
                    <p class="text-sm font-medium text-green-800 dark:text-green-200">
                        You are about to unsuspend this user
                    </p>
                    <p class="text-sm text-green-700 dark:text-green-300">
                        <strong>{{ user?.name }}</strong> ({{ user?.email }}) will be able to log in again.
                    </p>
                </div>
            </div>

            <!-- Confirmation Checkbox -->
            <div class="flex items-start space-x-3 rounded-lg border p-4">
                <Checkbox
                    id="unsuspend-confirmed"
                    v-model="confirmed"
                />
                <div class="space-y-1">
                    <Label for="unsuspend-confirmed" class="cursor-pointer font-medium">
                        I confirm this action
                    </Label>
                    <p class="text-sm text-muted-foreground">
                        I understand that this user will regain access to their account.
                    </p>
                </div>
            </div>
        </div>
    </ModalForm>
</template>
