<script setup lang="ts">
import AppContent from '@/components/AppContent.vue';
import AppShell from '@/components/AppShell.vue';
import AppSidebar from '@/components/AppSidebar.vue';
import AppSidebarHeader from '@/components/AppSidebarHeader.vue';
import { Toaster } from '@/components/ui/sonner';
import { Modal } from 'momentum-modal';
import type { BreadcrumbItemType } from '@/types';
import { router, usePage } from '@inertiajs/vue3';
import { toast } from 'vue-sonner';
import { onMounted, onUnmounted } from 'vue';

// Type for flash messages
type FlashMessages = {
    success?: string | null;
    error?: string | null;
    warning?: string | null;
    info?: string | null;
};

// Show flash messages
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

// Listen for Inertia navigation finish events
let removeFinishListener: (() => void) | null = null;

onMounted(() => {
    // Check for flash messages on initial mount
    const page = usePage();
    showFlashMessages(page.props.flash as FlashMessages | undefined);

    // Listen for flash messages after navigation
    removeFinishListener = router.on('finish', () => {
        const page = usePage();
        showFlashMessages(page.props.flash as FlashMessages | undefined);
    });
});

onUnmounted(() => {
    removeFinishListener?.();
});

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
    <!-- Toast Notifications - Outside AppShell for proper viewport positioning -->
    <Toaster
        position="top-right"
        :expand="false"
        :rich-colors="false"
        :close-button="true"
        :duration="4000"
        :visible-toasts="3"
        :gap="12"
    />
</template>
