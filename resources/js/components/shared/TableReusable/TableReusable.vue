<script setup lang="ts" generic="T extends Record<string, any>">
import { computed, watch } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
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
    perPageOptions?: number[];
    selectable?: boolean;
    selectKey?: keyof T;
}

const props = withDefaults(defineProps<Props>(), {
    searchable: true,
    searchPlaceholder: 'Search...',
    emptyMessage: 'No data found.',
    loading: false,
    rowKey: 'id',
    perPageOptions: () => [10, 20, 50, 100],
    selectable: false,
    selectKey: 'uuid' as keyof T,
});

const emit = defineEmits<{
    search: [query: string];
    pageChange: [page: number];
    perPageChange: [perPage: number];
    rowClick: [item: T];
    selectionChange: [selectedKeys: (string | number)[]];
}>();

const handlePerPageChange = (value: string | number | boolean | bigint | Record<string, unknown> | null | undefined) => {
    if (value !== undefined && value !== null) {
        emit('perPageChange', Number(value));
    }
};

const searchQuery = defineModel<string>('searchQuery', { default: '' });
const selected = defineModel<(string | number)[]>('selected', { default: [] });

// Clear selection when data changes (deep watch to detect actual data changes, not reference changes)
watch(() => props.data, (newData, oldData) => {
    // Only clear if the data actually changed (different items)
    if (JSON.stringify(newData) !== JSON.stringify(oldData)) {
        selected.value = [];
        emit('selectionChange', []);
    }
}, { deep: false });

const getRowKey = (item: T, index: number): string | number => {
    if (typeof props.rowKey === 'function') {
        return props.rowKey(item);
    }
    return item[props.rowKey] ?? index;
};

const getSelectKey = (item: T): string | number => {
    const key = props.selectKey as keyof T;
    return item[key] as string | number;
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

// Selection logic
const isAllSelected = computed(() => {
    return props.data.length > 0 && selected.value.length === props.data.length;
});

const isPartiallySelected = computed(() => {
    return selected.value.length > 0 && selected.value.length < props.data.length;
});

const toggleSelectAll = (checked: boolean | 'indeterminate') => {
    if (checked === true) {
        const newSelection = props.data.map((item) => getSelectKey(item));
        selected.value = newSelection;
        emit('selectionChange', newSelection);
    } else {
        selected.value = [];
        emit('selectionChange', []);
    }
};

const isSelected = (item: T): boolean => {
    const key = getSelectKey(item);
    return selected.value.includes(key);
};

const toggleSelect = (item: T, checked: boolean | 'indeterminate') => {
    const key = getSelectKey(item);
    let newSelection: (string | number)[];

    if (checked && checked !== 'indeterminate') {
        if (!selected.value.includes(key)) {
            newSelection = [...selected.value, key];
        } else {
            newSelection = selected.value;
        }
    } else {
        newSelection = selected.value.filter((k) => k !== key);
    }

    selected.value = newSelection;
    emit('selectionChange', newSelection);
};

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

const clearSelection = () => {
    selected.value = [];
    emit('selectionChange', []);
};

// Calculate total columns for colspan
const totalColumns = computed(() => {
    let count = props.columns.length;
    if (props.selectable) count++;
    if (props.actions && props.actions.length > 0) count++;
    return count;
});
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

        <!-- Bulk Actions Bar -->
        <div
            v-if="selectable && selected.length > 0"
            class="flex items-center justify-between rounded-lg border border-primary/20 bg-primary/5 px-4 py-3"
        >
            <div class="flex items-center gap-3">
                <span class="text-sm font-medium">
                    {{ selected.length }} item{{ selected.length > 1 ? 's' : '' }} selected
                </span>
                <Button variant="ghost" size="sm" @click="clearSelection">
                    Clear
                </Button>
            </div>
            <div class="flex items-center gap-2">
                <slot name="bulk-actions" :selected="selected" :clear="clearSelection" />
            </div>
        </div>

        <!-- Table -->
        <div class="rounded-md border">
            <table class="w-full">
                <thead>
                    <tr class="border-b bg-muted/50">
                        <!-- Select All Checkbox -->
                        <th
                            v-if="selectable"
                            class="h-12 w-12 px-4 align-middle"
                        >
                            <Checkbox
                                :model-value="isAllSelected"
                                :indeterminate="isPartiallySelected"
                                @click.stop
                                @update:model-value="toggleSelectAll"
                            />
                        </th>
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
                        <td :colspan="totalColumns" class="h-24 text-center">
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
                            :class="{ 'bg-primary/5': selectable && isSelected(item) }"
                            @click="handleRowClick(item)"
                        >
                            <!-- Row Checkbox -->
                            <td v-if="selectable" class="w-12 p-4 align-middle" @click.stop>
                                <Checkbox
                                    :model-value="isSelected(item)"
                                    @update:model-value="(checked: boolean | 'indeterminate') => toggleSelect(item, checked)"
                                />
                            </td>
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
                        <td :colspan="totalColumns" class="h-24 text-center">
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
            <div class="flex items-center gap-4">
                <span>
                    Showing {{ paginationInfo?.start }} to {{ paginationInfo?.end }} of {{ paginationInfo?.total }} results
                </span>
                <div class="flex items-center gap-2">
                    <span>Per page:</span>
                    <Select
                        :model-value="String(pagination.per_page)"
                        @update:model-value="handlePerPageChange"
                    >
                        <SelectTrigger class="h-8 w-[70px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem
                                v-for="option in perPageOptions"
                                :key="option"
                                :value="String(option)"
                            >
                                {{ option }}
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
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
