<script setup lang="ts">
import { ModalConfirm } from '@/components/shared';
import { router } from '@inertiajs/vue3';
import { ref } from 'vue';
import * as porfolio from '@/routes/porfolio';

interface Portfolio {
    id: number;
    title: string;
}

interface Props {
    portfolio: Portfolio;
}

const props = defineProps<Props>();

const isModalOpen = ref(true);
const isDeleting = ref(false);

const handleConfirm = () => {
    isDeleting.value = true;
    router.delete(porfolio.destroy.url(props.portfolio.id), {
        onSuccess: () => {
            isModalOpen.value = false;
        },
        onFinish: () => {
            isDeleting.value = false;
        },
    });
};

const handleCancel = () => {
    window.history.back();
};
</script>

<template>
    <ModalConfirm
        v-model:open="isModalOpen"
        title="Delete Portfolio"
        :description="`Are you sure you want to delete '${portfolio.title}'? This action cannot be undone.`"
        confirm-text="Delete"
        variant="danger"
        :loading="isDeleting"
        @confirm="handleConfirm"
        @cancel="handleCancel"
    />
</template>
