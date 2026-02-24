<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import { router } from '@inertiajs/vue3';
import { ref, computed, watch } from 'vue';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2 } from 'lucide-vue-next';

const open = defineModel<boolean>('open', { default: false });

const emit = defineEmits<{
    cleared: [];
}>();

const days = ref(30);
const reason = ref('');
const confirmed = ref(false);
const loading = ref(false);

const canSubmit = computed(() => confirmed.value === true && days.value > 0);

// Reset form when modal opens/closes
watch(open, (isOpen) => {
    if (!isOpen) {
        confirmed.value = false;
        days.value = 30;
        reason.value = '';
    }
});

const handleSubmit = () => {
    loading.value = true;
    router.post('/dashboard/settings/activity-log/clear', {
        days: days.value,
        reason: reason.value,
    }, {
        preserveScroll: true,
        onSuccess: () => {
            emit('cleared');
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
        title="Clear Old Logs"
        description="This action cannot be undone"
        mode="delete"
        size="md"
        submit-text="Delete Logs"
        :loading="loading"
        :disabled="!canSubmit"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <div class="space-y-6">
            <!-- Warning Banner -->
            <div class="flex items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4">
                <Trash2 class="mt-0.5 h-5 w-5 text-destructive" />
                <div class="space-y-1">
                    <p class="text-sm font-medium text-destructive">
                        You are about to delete activity logs
                    </p>
                    <p class="text-sm text-muted-foreground">
                        All logs older than the specified number of days will be permanently removed.
                    </p>
                </div>
            </div>

            <!-- Days Field -->
            <div class="space-y-2">
                <Label for="clear-days">Delete logs older than (days)</Label>
                <Input
                    id="clear-days"
                    v-model.number="days"
                    type="number"
                    min="1"
                    max="365"
                    class="w-32"
                />
            </div>

            <!-- Reason Field -->
            <div class="space-y-2">
                <Label for="clear-reason">Reason (optional)</Label>
                <Textarea
                    id="clear-reason"
                    v-model="reason"
                    placeholder="Enter the reason for clearing logs..."
                    rows="2"
                />
            </div>

            <!-- Confirmation Checkbox -->
            <div class="flex items-start space-x-3 rounded-lg border p-4">
                <Checkbox
                    id="clearlogs-confirmed"
                    v-model="confirmed"
                />
                <div class="space-y-1">
                    <Label for="clearlogs-confirmed" class="cursor-pointer font-medium">
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
