<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import PortfolioForm from '../components/PorfolioForm.vue';
import { useForm } from '@inertiajs/vue3';
import { useModal } from 'momentum-modal';
import { computed } from 'vue';
import * as porfolio from '@/routes/porfolio';


/**
 * types script props interface
 */
interface Props {
    categories: string[];
}

defineProps<Props>();

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
    slug: '',
    description: '',
    content: '',
    featured_image: '',
    category: '',
    industry: '',
    experience_level: '',
    location: '',
    tags: [] as string[],
    client_name: '',
    project_url: '',
    project_date: '',
    is_featured: false,
    is_active: true,
    sort_order: 0,
});

const handleSubmit = () => {
    form.post(porfolio.store.url(), {
        preserveScroll: true,
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
    <ModalForm v-model:open="isOpen" title="Create Portfolio" description="Add a new portfolio project" mode="create"
        size="2xl" submit-text="Create" :loading="form.processing" @submit="handleSubmit" @cancel="handleCancel">
        <PortfolioForm v-model="form" />
    </ModalForm>
</template>
