<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import PageForm from '../components/PageForm.vue';
import { useForm } from '@inertiajs/vue3';
import { useModal } from 'momentum-modal';
import { computed } from 'vue';
import * as porfolio from '@/routes/porfolio';

interface Page {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    content: string | null;
    parent_id: number | null;
    header_id: number | null;
    footer_id: number | null;
    meta_title: string | null;
    meta_description: string | null;
    meta_keywords: string[] | null;
    featured_image: string | null;
    template: string;
    layout: string;
    settings: Record<string, unknown> | null;
    is_homepage: boolean;
    is_active: boolean;
    is_in_menu: boolean;
    menu_order: number;
}

interface Props {
    page: Page;
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
    title: props.page.title,
    description: props.page.description || '',
    content: props.page.content || '',
    parent_id: props.page.parent_id,
    header_id: props.page.header_id,
    footer_id: props.page.footer_id,
    meta_title: props.page.meta_title || '',
    meta_description: props.page.meta_description || '',
    meta_keywords: props.page.meta_keywords || [],
    featured_image: props.page.featured_image || '',
    template: props.page.template,
    layout: props.page.layout,
    settings: props.page.settings || {},
    is_homepage: props.page.is_homepage,
    is_active: props.page.is_active,
    is_in_menu: props.page.is_in_menu,
    menu_order: props.page.menu_order,
});

const handleSubmit = () => {
    form.put(porfolio.pages.update.url(props.page.id), {
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
        title="Edit Page"
        description="Update page content and settings"
        mode="edit"
        size="2xl"
        submit-text="Update"
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
