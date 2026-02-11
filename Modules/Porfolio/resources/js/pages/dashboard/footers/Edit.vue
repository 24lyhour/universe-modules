<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import FooterForm from '../components/FooterForm.vue';
import { useForm } from '@inertiajs/vue3';
import { useModal } from 'momentum-modal';
import { computed } from 'vue';
import * as porfolio from '@/routes/porfolio';

/**
 * types script interfaces
 */
interface Footer {
    id: number;
    title: string | null;
    description: string | null;
    copyright_text: string | null;
    logo: string | null;
    social_links: { platform: string; url: string; icon?: string }[] | null;
    contact_email: string | null;
    contact_phone: string | null;
    contact_address: string | null;
    quick_links: { label: string; url: string }[] | null;
    newsletter_enabled: boolean;
    newsletter_title: string | null;
    newsletter_description: string | null;
    columns: { title: string; links: { label: string; url: string }[] }[] | null;
    is_active: boolean;
    sort_order: number;
}

interface Props {
    footer: Footer;
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
    title: props.footer.title || '',
    description: props.footer.description || '',
    copyright_text: props.footer.copyright_text || '',
    logo: props.footer.logo || '',
    social_links: props.footer.social_links || [],
    contact_email: props.footer.contact_email || '',
    contact_phone: props.footer.contact_phone || '',
    contact_address: props.footer.contact_address || '',
    quick_links: props.footer.quick_links || [],
    newsletter_enabled: props.footer.newsletter_enabled,
    newsletter_title: props.footer.newsletter_title || '',
    newsletter_description: props.footer.newsletter_description || '',
    columns: props.footer.columns || [],
    is_active: props.footer.is_active,
    sort_order: props.footer.sort_order,
});

const handleSubmit = () => {
    form.put(porfolio.footers.update.url(props.footer.id), {
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
    <ModalForm v-model:open="isOpen" title="Edit Footer" description="Update footer configuration" mode="edit"
        size="2xl" submit-text="Update" :loading="form.processing" @submit="handleSubmit" @cancel="handleCancel">
        <FooterForm v-model="form" />
    </ModalForm>
</template>
