<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import ServiceForm from '../components/ServiceForm.vue';
import { useForm } from '@inertiajs/vue3';
import { useModal } from 'momentum-modal';
import { computed } from 'vue';
import * as porfolio from '@/routes/porfolio';

interface Service {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    content: string | null;
    icon: string | null;
    image: string | null;
    features: string[] | null;
    price: number | null;
    price_unit: string | null;
    is_featured: boolean;
    is_active: boolean;
    sort_order: number;
}

interface Props {
    service: Service;
}

const props = defineProps<Props>();

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
    title: props.service.title,
    description: props.service.description || '',
    content: props.service.content || '',
    icon: props.service.icon || '',
    image: props.service.image || '',
    features: props.service.features || [],
    price: props.service.price,
    price_unit: props.service.price_unit || '',
    is_featured: props.service.is_featured,
    is_active: props.service.is_active,
    sort_order: props.service.sort_order,
});

const handleSubmit = () => {
    form.put(porfolio.services.update.url(props.service.id), {
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
        title="Edit Service"
        description="Update service details"
        mode="edit"
        size="2xl"
        submit-text="Update"
        :loading="form.processing"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <ServiceForm v-model="form" />
    </ModalForm>
</template>
