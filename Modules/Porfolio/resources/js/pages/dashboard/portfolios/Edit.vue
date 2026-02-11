<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import PortfolioForm from '../components/PorfolioForm.vue';
import { useForm } from '@inertiajs/vue3';
import { useModal } from 'momentum-modal';
import { computed } from 'vue';
import * as porfolio from '@/routes/porfolio';

interface Portfolio {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    content: string | null;
    featured_image: string | null;
    category: string | null;
    industry: string | null;
    experience_level: string | null;
    location: string | null;
    tags: string[] | null;
    client_name: string | null;
    project_url: string | null;
    project_date: string | null;
    is_featured: boolean;
    is_active: boolean;
    sort_order: number;
}

interface Props {
    portfolio: Portfolio;
    categories: string[];
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
    title: props.portfolio.title,
    slug: props.portfolio.slug,
    description: props.portfolio.description || '',
    content: props.portfolio.content || '',
    featured_image: props.portfolio.featured_image || '',
    category: props.portfolio.category || '',
    industry: props.portfolio.industry || '',
    experience_level: props.portfolio.experience_level || '',
    location: props.portfolio.location || '',
    tags: props.portfolio.tags || [] as string[],
    client_name: props.portfolio.client_name || '',
    project_url: props.portfolio.project_url || '',
    project_date: props.portfolio.project_date || '',
    is_featured: props.portfolio.is_featured,
    is_active: props.portfolio.is_active,
    sort_order: props.portfolio.sort_order,
});

const handleSubmit = () => {
    form.put(porfolio.update.url(props.portfolio.id), {
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
    <ModalForm
        v-model:open="isOpen"
        title="Edit Portfolio"
        description="Update portfolio project details"
        mode="edit"
        size="2xl"
        submit-text="Save Changes"
        :loading="form.processing"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <PortfolioForm v-model="form" />
    </ModalForm>
</template>
