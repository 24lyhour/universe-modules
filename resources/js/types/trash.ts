/**
 * Trash/Soft Delete Types
 * Global types for trash management across all modules
 */
export interface TrashItem {
    id: number | string;
    uuid: string;
    display_name: string;
    type: string;
    deleted_at: string | null;
    created_at?: string;
    updated_at?: string;
    deleted_by?: {
        id: number;
        name: string;
    } | null;
}

export interface TrashPaginationData {
    data: TrashItem[];
    meta?: {
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    current_page?: number;
    last_page?: number;
    per_page?: number;
    total?: number;
}

export interface TrashConfig {
    entityLabel: string;
    entityLabelPlural: string;
    routePrefix: string;
}

export interface TrashConfigLocal {
    entityLabel: string;
    entityLabelPlural: string;
    restoreRoute: (uuid: string) => string;
    forceDeleteRoute: (uuid: string) => string;
    listRoute: string;
}

export interface TrashStats {
    total: number;
    byType: Record<string, number>;
}

export type TrashActionType = 'restore' | 'forceDelete' | 'emptyTrash';
