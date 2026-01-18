import { router } from '@inertiajs/vue3';
import { toast } from 'vue-sonner';

type FlashMessages = {
    success?: string;
    error?: string;
    warning?: string;
    info?: string;
};

/**
 * Initialize global toast notifications for Inertia flash messages.
 * This should be called once in app.ts after createInertiaApp.
 */
export function initializeToastNotifications() {
    // Listen to all successful Inertia navigations
    router.on('success', (event) => {
        const flash = event.detail.page.props.flash as FlashMessages | undefined;

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
    });
}
