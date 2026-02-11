<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import HeaderForm from '../components/HeaderForm.vue';
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
    logo: '',
    logo_alt: '',
    navigation: [] as { label: string; url: string; target?: string }[],
    actions: [] as { label: string; url: string; variant?: string }[],
    style: 'default',
    position: 'fixed',
    background_color: '',
    text_color: '',
    is_transparent: false,
    show_search: false,
    show_language_switcher: false,
    is_active: true,
    sort_order: 0,
});

const handleSubmit = () => {
    form.post(porfolio.headers.store.url(), {
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
        title="Create Header"
        description="Add a new website header configuration"
        mode="create"
        size="2xl"
        submit-text="Create"
        :loading="form.processing"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <HeaderForm v-model="form" />
    </ModalForm>
</template>
