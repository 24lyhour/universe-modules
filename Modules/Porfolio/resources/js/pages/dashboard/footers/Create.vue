<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import FooterForm from '../components/FooterForm.vue';
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
    copyright_text: '',
    logo: '',
    social_links: [] as { platform: string; url: string; icon?: string }[],
    contact_email: '',
    contact_phone: '',
    contact_address: '',
    quick_links: [] as { label: string; url: string }[],
    newsletter_enabled: false,
    newsletter_title: '',
    newsletter_description: '',
    columns: [] as { title: string; links: { label: string; url: string }[] }[],
    is_active: true,
    sort_order: 0,
});

const handleSubmit = () => {
    form.post(porfolio.footers.store.url(), {
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
        title="Create Footer"
        description="Add a new website footer configuration"
        mode="create"
        size="2xl"
        submit-text="Create"
        :loading="form.processing"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <FooterForm v-model="form" />
    </ModalForm>
</template>
