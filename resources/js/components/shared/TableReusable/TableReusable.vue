<script setup lang="ts" generic="T extends Record<string, any>">
import { computed } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-vue-next';

export interface TableColumn<T> {
    key: string;
    label: string;
    sortable?: boolean;
    align?: 'left' | 'center' | 'right';
    width?: string;
    render?: (item: T) => any;
}

export interface TableAction<T> {
    label: string;
    icon?: any;
    onClick: (item: T) => void;
    variant?: 'default' | 'destructive';
    show?: (item: T) => boolean;
    separator?: boolean;
}

export interface PaginationData {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface Props {
    data: T[];
    columns: TableColumn<T>[];
    actions?: TableAction<T>[];
    pagination?: PaginationData;
    searchable?: boolean;
    searchPlaceholder?: string;
    emptyMessage?: string;
    loading?: boolean;
    rowKey?: keyof T | ((item: T) => string | number);
}

const props = withDefaults(defineProps<Props>(), {
    searchable: true,
    searchPlaceholder: 'Search...',
    emptyMessage: 'No data found.',
    loading: false,
    rowKey: 'id',
});

const emit = defineEmits<{
    search: [query: string];
    pageChange: [page: number];
    rowClick: [item: T];
}>();

const searchQuery = defineModel<string>('searchQuery', { default: '' });

const getRowKey = (item: T, index: number): string | number => {
    if (typeof props.rowKey === 'function') {
        return props.rowKey(item);
    }
    return item[props.rowKey] ?? index;
};

const getCellValue = (item: T, column: TableColumn<T>): any => {
    if (column.render) {
        return column.render(item);
    }
    // Support nested keys like 'user.name'
    const keys = column.key.split('.');
    let value: any = item;
    for (const key of keys) {
        value = value?.[key];
    }
    return value ?? '-';
};

const getColumnAlignment = (column: TableColumn<T>): string => {
    switch (column.align) {
        case 'center':
            return 'text-center';
        case 'right':
            return 'text-right';
        default:
            return 'text-left';
    }
};

const visibleActions = (item: T): TableAction<T>[] => {
    if (!props.actions) return [];
    return props.actions.filter((action) => !action.show || action.show(item));
};

const paginationInfo = computed(() => {
    if (!props.pagination) return null;
    const { current_page, per_page, total } = props.pagination;
    const start = (current_page - 1) * per_page + 1;
    const end = Math.min(current_page * per_page, total);
    return { start, end, total };
});

const handleSearch = (event: Event) => {
    const target = event.target as HTMLInputElement;
    searchQuery.value = target.value;
    emit('search', target.value);
};

const handlePageChange = (page: number) => {
    emit('pageChange', page);
};

const handleRowClick = (item: T) => {
    emit('rowClick', item);
};
</script>

<template>
    <div class="space-y-4">
        <!-- Search -->
        <div v-if="searchable" class="flex items-center gap-2">
            <div class="relative flex-1">
                <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    :model-value="searchQuery"
                    :placeholder="searchPlaceholder"
                    class="pl-8"
                    @input="handleSearch"
                />
            </div>
            <slot name="toolbar" />
        </div>

        <!-- Table -->
        <div class="rounded-md border">
            <table class="w-full">
                <thead>
                    <tr class="border-b bg-muted/50">
                        <th
                            v-for="column in columns"
                            :key="column.key"
                            :class="[
                                'h-12 px-4 align-middle font-medium text-muted-foreground',
                                getColumnAlignment(column),
                            ]"
                            :style="column.width ? { width: column.width } : undefined"
                        >
                            {{ column.label }}
                        </th>
                        <th
                            v-if="actions && actions.length > 0"
                            class="h-12 px-4 text-right align-middle font-medium text-muted-foreground"
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Loading State -->
                    <tr v-if="loading">
                        <td :colspan="columns.length + (actions?.length ? 1 : 0)" class="h-24 text-center">
                            <div class="flex items-center justify-center gap-2 text-muted-foreground">
                                <svg
                                    class="h-5 w-5 animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        class="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        stroke-width="4"
                                    />
                                    <path
                                        class="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                                Loading...
                            </div>
                        </td>
                    </tr>

                    <!-- Data Rows -->
                    <template v-else-if="data.length > 0">
                        <tr
                            v-for="(item, index) in data"
                            :key="getRowKey(item, index)"
                            class="border-b transition-colors hover:bg-muted/50"
                            @click="handleRowClick(item)"
                        >
                            <td
                                v-for="column in columns"
                                :key="column.key"
                                :class="['p-4 align-middle', getColumnAlignment(column)]"
                            >
                                <slot :name="`cell-${column.key}`" :item="item" :value="getCellValue(item, column)">
                                    {{ getCellValue(item, column) }}
                                </slot>
                            </td>
                            <td v-if="actions && actions.length > 0" class="p-4 text-right align-middle">
                                <DropdownMenu>
                                    <DropdownMenuTrigger as-child>
                                        <Button variant="ghost" size="sm" class="h-8 w-8 p-0" @click.stop>
                                            <MoreHorizontal class="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <template v-for="(action, actionIndex) in visibleActions(item)" :key="actionIndex">
                                            <DropdownMenuSeparator v-if="action.separator" />
                                            <DropdownMenuItem
                                                :class="action.variant === 'destructive' ? 'text-destructive' : ''"
                                                @click.stop="action.onClick(item)"
                                            >
                                                <component
                                                    :is="action.icon"
                                                    v-if="action.icon"
                                                    class="mr-2 h-4 w-4"
                                                />
                                                {{ action.label }}
                                            </DropdownMenuItem>
                                        </template>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </td>
                        </tr>
                    </template>

                    <!-- Empty State -->
                    <tr v-else>
                        <td :colspan="columns.length + (actions?.length ? 1 : 0)" class="h-24 text-center">
                            <slot name="empty">
                                <div class="text-muted-foreground">{{ emptyMessage }}</div>
                            </slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Pagination -->
        <div
            v-if="pagination && pagination.total > 0"
            class="flex items-center justify-between text-sm text-muted-foreground"
        >
            <div>
                Showing {{ paginationInfo?.start }} to {{ paginationInfo?.end }} of {{ paginationInfo?.total }} results
            </div>
            <div class="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    :disabled="pagination.current_page === 1"
                    @click="handlePageChange(pagination.current_page - 1)"
                >
                    <ChevronLeft class="mr-1 h-4 w-4" />
                    Previous
                </Button>
                <span class="px-2">
                    Page {{ pagination.current_page }} of {{ pagination.last_page }}
                </span>
                <Button
                    variant="outline"
                    size="sm"
                    :disabled="pagination.current_page === pagination.last_page"
                    @click="handlePageChange(pagination.current_page + 1)"
                >
                    Next
                    <ChevronRight class="ml-1 h-4 w-4" />
                </Button>
            </div>
        </div>
    </div>
</template>
