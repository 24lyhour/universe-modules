<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import { router } from '@inertiajs/vue3';
import { ref, computed, watch } from 'vue';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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
    suspended: [];
}>();

const confirmed = ref(false);
const reason = ref('');
const loading = ref(false);

const canSubmit = computed(() => confirmed.value === true);

// Reset form when modal opens/closes
watch(open, (isOpen) => {
    if (!isOpen) {
        confirmed.value = false;
        reason.value = '';
    }
});

const handleSubmit = () => {
    if (!props.user) return;

    loading.value = true;
    router.post(`/dashboard/settings/users/${props.user.id}/suspend`, {
        reason: reason.value,
    }, {
        preserveScroll: true,
        onSuccess: () => {
            emit('suspended');
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
        title="Suspend User"
        description="This will restrict user access"
        mode="delete"
        size="md"
        submit-text="Suspend User"
        :loading="loading"
        :disabled="!canSubmit"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <div class="space-y-6">
            <!-- Warning Banner -->
            <div class="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950">
                <AlertTriangle class="mt-0.5 h-5 w-5 text-amber-600 dark:text-amber-400" />
                <div class="space-y-1">
                    <p class="text-sm font-medium text-amber-800 dark:text-amber-200">
                        You are about to suspend this user
                    </p>
                    <p class="text-sm text-amber-700 dark:text-amber-300">
                        <strong>{{ user?.name }}</strong> ({{ user?.email }}) will not be able to log in until unsuspended.
                    </p>
                </div>
            </div>

            <!-- Reason Field -->
            <div class="space-y-2">
                <Label for="suspend-reason">Reason for suspension (optional)</Label>
                <Textarea
                    id="suspend-reason"
                    v-model="reason"
                    placeholder="Enter the reason for suspending this user..."
                    rows="3"
                />
            </div>

            <!-- Confirmation Checkbox -->
            <div class="flex items-start space-x-3 rounded-lg border p-4">
                <Checkbox
                    id="suspend-confirmed"
                    v-model="confirmed"
                />
                <div class="space-y-1">
                    <Label for="suspend-confirmed" class="cursor-pointer font-medium">
                        I confirm this suspension
                    </Label>
                    <p class="text-sm text-muted-foreground">
                        I understand that this user will lose access until reactivated.
                    </p>
                </div>
            </div>
        </div>
    </ModalForm>
</template>
