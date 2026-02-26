import { ref, computed } from 'vue';
import { router } from '@inertiajs/vue3';
import type { TrashItem, TrashActionType, TrashStats } from '@/types/trash';

/**
 * Composable for managing trash/soft delete operations
 * Reusable across all modules
 */
export function useTrashManager() {
    const isLoading = ref(false);
    const selectedItem = ref<TrashItem | null>(null);
    const actionType = ref<TrashActionType | null>(null);
    const showConfirmModal = ref(false);

    /**
     * Execute a trash action (restore or force delete)
     */
    const executeAction = (
        route: string,
        method: 'put' | 'delete' = 'put',
        onSuccess?: () => void,
        onError?: (error: unknown) => void
    ) => {
        isLoading.value = true;

        const options = {
            preserveScroll: true,
            onSuccess: () => {
                showConfirmModal.value = false;
                selectedItem.value = null;
                actionType.value = null;
                onSuccess?.();
            },
            onError: (error: unknown) => {
                onError?.(error);
            },
            onFinish: () => {
                isLoading.value = false;
            },
        };

        if (method === 'delete') {
            router.delete(route, options);
        } else {
            router.put(route, {}, options);
        }
    };

    /**
     * Restore a soft-deleted item
     */
    const restore = (item: TrashItem, route: string, onSuccess?: () => void) => {
        selectedItem.value = item;
        actionType.value = 'restore';
        executeAction(route, 'put', onSuccess);
    };

    /**
     * Permanently delete an item
     */
    const forceDelete = (item: TrashItem, route: string, onSuccess?: () => void) => {
        selectedItem.value = item;
        actionType.value = 'forceDelete';
        executeAction(route, 'delete', onSuccess);
    };

    /**
     * Empty all items from trash
     */
    const emptyTrash = (route: string, onSuccess?: () => void) => {
        actionType.value = 'emptyTrash';
        executeAction(route, 'delete', onSuccess);
    };

    /**
     * Open confirmation modal for an action
     */
    const openConfirmModal = (item: TrashItem, action: TrashActionType) => {
        selectedItem.value = item;
        actionType.value = action;
        showConfirmModal.value = true;
    };

    /**
     * Close confirmation modal
     */
    const closeConfirmModal = () => {
        showConfirmModal.value = false;
        selectedItem.value = null;
        actionType.value = null;
    };

    /**
     * Get modal title based on action type
     */
    const modalTitle = computed(() => {
        if (!selectedItem.value) return '';

        switch (actionType.value) {
            case 'restore':
                return `Restore ${selectedItem.value.type}`;
            case 'forceDelete':
                return `Permanently Delete ${selectedItem.value.type}`;
            case 'emptyTrash':
                return 'Empty Trash';
            default:
                return '';
        }
    });

    /**
     * Get modal description based on action type
     */
    const modalDescription = computed(() => {
        if (actionType.value === 'emptyTrash') {
            return 'This will permanently delete all items in the trash. This action cannot be undone.';
        }

        if (!selectedItem.value) return '';

        switch (actionType.value) {
            case 'restore':
                return `"${selectedItem.value.display_name}" will be restored to your active items.`;
            case 'forceDelete':
                return `"${selectedItem.value.display_name}" will be permanently deleted. This action cannot be undone.`;
            default:
                return '';
        }
    });

    /**
     * Get modal variant based on action type
     */
    const modalVariant = computed(() => {
        switch (actionType.value) {
            case 'restore':
                return 'default';
            case 'forceDelete':
            case 'emptyTrash':
                return 'destructive';
            default:
                return 'default';
        }
    });

    /**
     * Calculate trash statistics
     */
    const calculateStats = (items: TrashItem[]): TrashStats => {
        const byType: Record<string, number> = {};

        items.forEach((item) => {
            byType[item.type] = (byType[item.type] || 0) + 1;
        });

        return {
            total: items.length,
            byType,
        };
    };

    /**
     * Format deleted_at date
     */
    const formatDeletedAt = (dateString: string | null): string => {
        if (!dateString) return '-';

        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            return 'Today';
        } else if (diffDays === 1) {
            return 'Yesterday';
        } else if (diffDays < 7) {
            return `${diffDays} days ago`;
        } else if (diffDays < 30) {
            const weeks = Math.floor(diffDays / 7);
            return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
        } else {
            return date.toLocaleDateString();
        }
    };

    return {
        isLoading,
        selectedItem,
        actionType,
        showConfirmModal,
        restore,
        forceDelete,
        emptyTrash,
        openConfirmModal,
        closeConfirmModal,
        modalTitle,
        modalDescription,
        modalVariant,
        calculateStats,
        formatDeletedAt,
    };
}
