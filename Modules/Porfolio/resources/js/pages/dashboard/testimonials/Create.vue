<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import TestimonialForm from '../components/TestimonialForm.vue';
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
    name: '',
    position: '',
    company: '',
    avatar: '',
    content: '',
    rating: 5,
    is_featured: false,
    is_active: true,
    sort_order: 0,
});

const handleSubmit = () => {
    form.post(porfolio.testimonials.store.url(), {
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
        title="Create Testimonial"
        description="Add a new client testimonial"
        mode="create"
        size="lg"
        submit-text="Create"
        :loading="form.processing"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <TestimonialForm v-model="form" />
    </ModalForm>
</template>
