<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import TestimonialForm from '../components/TestimonialForm.vue';
import { useForm } from '@inertiajs/vue3';
import { useModal } from 'momentum-modal';
import { computed } from 'vue';
import * as porfolio from '@/routes/porfolio';

interface Testimonial {
    id: number;
    name: string;
    position: string | null;
    company: string | null;
    avatar: string | null;
    content: string;
    rating: number;
    is_featured: boolean;
    is_active: boolean;
    sort_order: number;
}

interface Props {
    testimonial: Testimonial;
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
    name: props.testimonial.name,
    position: props.testimonial.position || '',
    company: props.testimonial.company || '',
    avatar: props.testimonial.avatar || '',
    content: props.testimonial.content,
    rating: props.testimonial.rating,
    is_featured: props.testimonial.is_featured,
    is_active: props.testimonial.is_active,
    sort_order: props.testimonial.sort_order,
});

const handleSubmit = () => {
    form.put(porfolio.testimonials.update.url(props.testimonial.id), {
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
        title="Edit Testimonial"
        description="Update testimonial details"
        mode="edit"
        size="lg"
        submit-text="Update"
        :loading="form.processing"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <TestimonialForm v-model="form" />
    </ModalForm>
</template>
