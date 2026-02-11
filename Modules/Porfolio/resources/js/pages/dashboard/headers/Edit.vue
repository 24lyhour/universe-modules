<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import HeaderForm from '../components/HeaderForm.vue';
import { useForm } from '@inertiajs/vue3';
import { useModal } from 'momentum-modal';
import { computed } from 'vue';
import * as porfolio from '@/routes/porfolio';

interface Header {
    id: number;
    title: string | null;
    logo: string | null;
    logo_alt: string | null;
    navigation: { label: string; url: string; target?: string }[] | null;
    actions: { label: string; url: string; variant?: string }[] | null;
    style: string;
    position: string;
    background_color: string | null;
    text_color: string | null;
    is_transparent: boolean;
    show_search: boolean;
    show_language_switcher: boolean;
    is_active: boolean;
    sort_order: number;
}

interface Props {
    header: Header;
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
    title: props.header.title || '',
    logo: props.header.logo || '',
    logo_alt: props.header.logo_alt || '',
    navigation: props.header.navigation || [],
    actions: props.header.actions || [],
    style: props.header.style,
    position: props.header.position,
    background_color: props.header.background_color || '',
    text_color: props.header.text_color || '',
    is_transparent: props.header.is_transparent,
    show_search: props.header.show_search,
    show_language_switcher: props.header.show_language_switcher,
    is_active: props.header.is_active,
    sort_order: props.header.sort_order,
});

const handleSubmit = () => {
    form.put(porfolio.headers.update.url(props.header.id), {
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
        title="Edit Header"
        description="Update header configuration"
        mode="edit"
        size="2xl"
        submit-text="Update"
        :loading="form.processing"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <HeaderForm v-model="form" />
    </ModalForm>
</template>
