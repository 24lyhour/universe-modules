import { ref, readonly } from 'vue';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastOptions {
    title?: string;
    description?: string;
    duration?: number;
}

export interface Toast {
    id: number;
    type: ToastType;
    title: string;
    description?: string;
    duration: number;
}

const toasts = ref<Toast[]>([]);
let nextId = 1;

// Default titles for each type
const defaultTitles: Record<ToastType, string> = {
    success: 'Success',
    error: 'Error',
    warning: 'Warning',
    info: 'Info',
};

const addToast = (type: ToastType, messageOrOptions: string | ToastOptions, duration = 5000) => {
    const id = nextId++;

    let newToast: Toast;

    if (typeof messageOrOptions === 'string') {
        // Simple message - use as description with default title
        newToast = {
            id,
            type,
            title: defaultTitles[type],
            description: messageOrOptions,
            duration,
        };
    } else {
        // Options object
        newToast = {
            id,
            type,
            title: messageOrOptions.title || defaultTitles[type],
            description: messageOrOptions.description,
            duration: messageOrOptions.duration || duration,
        };
    }

    toasts.value.push(newToast);

    // Auto remove after duration
    setTimeout(() => {
        removeToast(id);
    }, newToast.duration);

    return id;
};

const removeToast = (id: number) => {
    const index = toasts.value.findIndex((t) => t.id === id);
    if (index > -1) {
        toasts.value.splice(index, 1);
    }
};

export const useToast = () => {
    return {
        toasts: readonly(toasts),
        success: (messageOrOptions: string | ToastOptions, duration?: number) =>
            addToast('success', messageOrOptions, duration),
        error: (messageOrOptions: string | ToastOptions, duration?: number) =>
            addToast('error', messageOrOptions, duration),
        warning: (messageOrOptions: string | ToastOptions, duration?: number) =>
            addToast('warning', messageOrOptions, duration),
        info: (messageOrOptions: string | ToastOptions, duration?: number) =>
            addToast('info', messageOrOptions, duration),
        remove: removeToast,
    };
};

// Global toast functions for easy access
export const toast = {
    success: (messageOrOptions: string | ToastOptions, duration?: number) =>
        addToast('success', messageOrOptions, duration),
    error: (messageOrOptions: string | ToastOptions, duration?: number) =>
        addToast('error', messageOrOptions, duration),
    warning: (messageOrOptions: string | ToastOptions, duration?: number) =>
        addToast('warning', messageOrOptions, duration),
    info: (messageOrOptions: string | ToastOptions, duration?: number) =>
        addToast('info', messageOrOptions, duration),
};

// Export toasts ref for the component
export { toasts };
