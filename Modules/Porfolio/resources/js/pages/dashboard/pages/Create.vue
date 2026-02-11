<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import PageForm from '../components/PageForm.vue';
import { useForm } from '@inertiajs/vue3';
import { useModal } from 'momentum-modal';
import { computed } from 'vue';
import * as porfolio from '@/routes/porfolio';

interface Props {
    headers: { id: number; title: string }[];
    footers: { id: number; title: string }[];
    pages: { id: number; title: string }[];
    templates: string[];
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
    title: '',
    description: '',
    content: '',
    parent_id: null as number | null,
    header_id: null as number | null,
    footer_id: null as number | null,
    meta_title: '',
    meta_description: '',
    meta_keywords: [] as string[],
    featured_image: '',
    template: 'default',
    layout: 'default',
    settings: {} as Record<string, unknown>,
    is_homepage: false,
    is_active: true,
    is_in_menu: true,
    menu_order: 0,
});

const handleSubmit = () => {
    form.post(porfolio.pages.store.url(), {
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
        title="Create Page"
        description="Add a new website page"
        mode="create"
        size="2xl"
        submit-text="Create"
        :loading="form.processing"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <PageForm
            v-model="form"
            :headers="headers"
            :footers="footers"
            :pages="pages"
            :templates="templates"
        />
    </ModalForm>
</template>
