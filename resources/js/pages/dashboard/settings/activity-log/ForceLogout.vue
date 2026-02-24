<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import { router } from '@inertiajs/vue3';
import { ref, computed, watch } from 'vue';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Power } from 'lucide-vue-next';

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
    'logged-out': [];
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
    router.post(`/dashboard/settings/users/${props.user.id}/force-logout`, {}, {
        preserveScroll: true,
        onSuccess: () => {
            emit('logged-out');
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
        title="Force Logout"
        description="This will terminate all active sessions"
        mode="confirm"
        size="md"
        submit-text="Force Logout"
        :loading="loading"
        :disabled="!canSubmit"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <div class="space-y-6">
            <!-- Warning Banner -->
            <div class="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950">
                <Power class="mt-0.5 h-5 w-5 text-amber-600 dark:text-amber-400" />
                <div class="space-y-1">
                    <p class="text-sm font-medium text-amber-800 dark:text-amber-200">
                        You are about to force logout this user
                    </p>
                    <p class="text-sm text-amber-700 dark:text-amber-300">
                        <strong>{{ user?.name }}</strong> ({{ user?.email }}) will be logged out from all devices and sessions.
                    </p>
                </div>
            </div>

            <!-- Confirmation Checkbox -->
            <div class="flex items-start space-x-3 rounded-lg border p-4">
                <Checkbox
                    id="forcelogout-confirmed"
                    v-model="confirmed"
                />
                <div class="space-y-1">
                    <Label for="forcelogout-confirmed" class="cursor-pointer font-medium">
                        I confirm this action
                    </Label>
                    <p class="text-sm text-muted-foreground">
                        I understand that this will terminate all active sessions for this user.
                    </p>
                </div>
            </div>
        </div>
    </ModalForm>
</template>
