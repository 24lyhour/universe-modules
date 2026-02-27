<script setup lang="ts">
import AppContent from '@/components/AppContent.vue';
import AppShell from '@/components/AppShell.vue';
import AppSidebar from '@/components/AppSidebar.vue';
import AppSidebarHeader from '@/components/AppSidebarHeader.vue';
import { ToastContainer, toast } from '@/components/ui/toast';
import { Modal } from 'momentum-modal';
import type { BreadcrumbItemType } from '@/types';
import { usePage } from '@inertiajs/vue3';
import { watch } from 'vue';

type FlashMessages = {
    success?: string | null;
    error?: string | null;
    warning?: string | null;
    info?: string | null;
};

/**
 * Show flash messages
 * 
 * @param flash 
 */
const showFlashMessages = (flash: FlashMessages | undefined) => {
    if (flash?.success) {
        toast.success(flash.success);
    }
    if (flash?.error) {
        toast.error(flash.error);
    }
    if (flash?.warning) {
        toast.warning(flash.warning);
    }
    if (flash?.info) {
        toast.info(flash.info);
    }
};

const page = usePage();

/**
 * Watch for flash messages reactively
 * 
 * @param flash 
 */
watch(() => page.props.flash, (flash) => {
    showFlashMessages(flash as FlashMessages | undefined);
}, { deep: true, immediate: true });

interface Props {
    breadcrumbs?: BreadcrumbItemType[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});
</script>

<template>
    <AppShell variant="sidebar">
        <AppSidebar />
        <AppContent variant="sidebar" class="overflow-x-hidden">
            <AppSidebarHeader :breadcrumbs="breadcrumbs" />
            <slot />
        </AppContent>
        <!-- Inertia Modal Portal -->
        <Modal />
    </AppShell>
    <!-- Custom Toast Container for flash messages -->
    <ToastContainer position="top-left" />
</template>
