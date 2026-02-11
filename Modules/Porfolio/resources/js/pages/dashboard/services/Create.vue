<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import ServiceForm from '../components/ServiceForm.vue';
import { useForm } from '@inertiajs/vue3';
import { useModal } from 'momentum-modal';
import { computed } from 'vue';
import * as porfolio from '@/routes/porfolio';

const { show, close, redirect } = useModal();

const isOpen = computed({
    get: () => show.value,
    set: (val: boolean) => {
        if (!val) {
            close();
            redirect();
        }
    },
});

const form = useForm({
    title: '',
    description: '',
    content: '',
    icon: '',
    image: '',
    features: [] as string[],
    price: null as number | null,
    price_unit: '',
    is_featured: false,
    is_active: true,
    sort_order: 0,
});

const handleSubmit = () => {
    form.post(porfolio.services.store.url(), {
        onSuccess: () => {
            close();
            redirect();
        },
    });
};

const handleCancel = () => {
    close();
    redirect();
};
</script>

<template>
    <ModalForm
        v-model:open="isOpen"
        title="Create Service"
        description="Add a new service offering"
        mode="create"
        size="2xl"
        submit-text="Create"
        :loading="form.processing"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <ServiceForm v-model="form" />
    </ModalForm>
</template>
