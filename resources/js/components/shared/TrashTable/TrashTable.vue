<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { router } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { ModalConfirm } from '@/components/shared/ModalReusable';
import { RotateCcw, Trash2, MoreHorizontal, Search, AlertTriangle, ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { useTrashManager } from '@/composables/useTrashManager';
import type { TrashItem, TrashConfigLocal, TrashPaginationData } from '@/types/trash';

interface Props {
    items: TrashItem[];
    config: TrashConfigLocal;
    pagination?: TrashPaginationData['meta'];
    searchable?: boolean;
    showType?: boolean;
    emptyMessage?: string;
    emptyTrashRoute?: string;
    selectable?: boolean;
    selectKey?: keyof TrashItem;
}

const props = withDefaults(defineProps<Props>(), {
    searchable: true,
    showType: true,
    emptyMessage: 'No deleted items found.',
    selectable: false,
    selectKey: 'uuid',
});

const emit = defineEmits<{
    restored: [item: TrashItem];
    deleted: [item: TrashItem];
    emptied: [];
    pageChange: [page: number];
    search: [query: string];
    selectionChange: [selectedKeys: (string | number)[]];
}>();

const selected = defineModel<(string | number)[]>('selected', { default: [] });

// Clear selection when items change
watch(() => props.items, (newItems, oldItems) => {
    if (JSON.stringify(newItems) !== JSON.stringify(oldItems)) {
        selected.value = [];
        emit('selectionChange', []);
    }
}, { deep: false });

const searchQuery = ref('');

// Selection logic
const getSelectKey = (item: TrashItem): string | number => {
    return item[props.selectKey] as string | number;
};

const isAllSelected = computed(() => {
    return filteredItems.value.length > 0 && selected.value.length === filteredItems.value.length;
});

const isPartiallySelected = computed(() => {
    return selected.value.length > 0 && selected.value.length < filteredItems.value.length;
});

const toggleSelectAll = (checked: boolean | 'indeterminate') => {
    if (checked === true) {
        const newSelection = filteredItems.value.map((item) => getSelectKey(item));
        selected.value = newSelection;
        emit('selectionChange', newSelection);
    } else {
        selected.value = [];
        emit('selectionChange', []);
    }
};

const isSelected = (item: TrashItem): boolean => {
    const key = getSelectKey(item);
    return selected.value.includes(key);
};

const toggleSelect = (item: TrashItem, checked: boolean | 'indeterminate') => {
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

const clearSelection = () => {
    selected.value = [];
    emit('selectionChange', []);
};

const {
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
    formatDeletedAt,
} = useTrashManager();

const filteredItems = computed(() => {
    if (!searchQuery.value) return props.items;

    const query = searchQuery.value.toLowerCase();
    return props.items.filter(
        (item) =>
            item.display_name.toLowerCase().includes(query) ||
            item.type.toLowerCase().includes(query)
    );
});

const handleSearch = (event: Event) => {
    const target = event.target as HTMLInputElement;
    searchQuery.value = target.value;
    emit('search', target.value);
};

const handleRestore = (item: TrashItem) => {
    openConfirmModal(item, 'restore');
};

const handleForceDelete = (item: TrashItem) => {
    openConfirmModal(item, 'forceDelete');
};

const handleEmptyTrash = () => {
    if (props.emptyTrashRoute) {
        openConfirmModal(
            {
                id: 0,
                uuid: '',
                display_name: 'All items',
                type: 'all',
                deleted_at: null,
            },
            'emptyTrash'
        );
    }
};

const confirmAction = () => {
    if (!selectedItem.value || !actionType.value) return;

    const onSuccess = () => {
        if (actionType.value === 'restore') {
            emit('restored', selectedItem.value!);
        } else if (actionType.value === 'forceDelete') {
            emit('deleted', selectedItem.value!);
        } else if (actionType.value === 'emptyTrash') {
            emit('emptied');
        }
    };

    if (actionType.value === 'restore') {
        restore(selectedItem.value, props.config.restoreRoute(selectedItem.value.uuid), onSuccess);
    } else if (actionType.value === 'forceDelete') {
        forceDelete(selectedItem.value, props.config.forceDeleteRoute(selectedItem.value.uuid), onSuccess);
    } else if (actionType.value === 'emptyTrash' && props.emptyTrashRoute) {
        emptyTrash(props.emptyTrashRoute, onSuccess);
    }
};

const handlePageChange = (page: number) => {
    emit('pageChange', page);
};

const paginationInfo = computed(() => {
    if (!props.pagination) return null;
    const { current_page, per_page, total } = props.pagination;
    const start = (current_page - 1) * per_page + 1;
    const end = Math.min(current_page * per_page, total);
    return { start, end, total };
});
</script>

<template>
    <Card>
        <CardHeader>
            <div class="flex items-center justify-between">
                <div>
                    <CardTitle class="flex items-center gap-2">
                        <Trash2 class="h-5 w-5" />
                        {{ config.entityLabelPlural }} Trash
                    </CardTitle>
                    <CardDescription>
                        {{ items.length }} deleted {{ items.length === 1 ? config.entityLabel.toLowerCase() : config.entityLabelPlural.toLowerCase() }}
                    </CardDescription>
                </div>
                <div class="flex gap-2">
                    <Button
                        v-if="items.length > 0 && emptyTrashRoute"
                        variant="destructive"
                        size="sm"
                        @click="handleEmptyTrash"
                    >
                        <Trash2 class="mr-2 h-4 w-4" />
                        Empty Trash
                    </Button>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <!-- Bulk Actions Bar -->
            <div
                v-if="selectable && selected.length > 0"
                class="mb-4 flex items-center justify-between rounded-lg border bg-muted/50 px-4 py-3"
            >
                <span class="text-sm font-medium">
                    {{ selected.length }} item{{ selected.length > 1 ? 's' : '' }} selected
                </span>
                <div class="flex items-center gap-2">
                    <slot name="bulk-actions" :selected="selected" :clear="clearSelection" />
                    <Button variant="ghost" size="sm" @click="clearSelection">
                        Clear Selection
                    </Button>
                </div>
            </div>

            <!-- Search -->
            <div v-if="searchable && items.length > 0" class="mb-4">
                <div class="relative">
                    <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        v-model="searchQuery"
                        :placeholder="`Search deleted ${config.entityLabelPlural.toLowerCase()}...`"
                        class="pl-8"
                        @input="handleSearch"
                    />
                </div>
            </div>

            <!-- Empty State -->
            <div v-if="filteredItems.length === 0" class="flex flex-col items-center justify-center py-12">
                <Trash2 class="h-12 w-12 text-muted-foreground" />
                <h3 class="mt-4 text-lg font-medium">{{ emptyMessage }}</h3>
                <p class="text-sm text-muted-foreground">
                    Deleted {{ config.entityLabelPlural.toLowerCase() }} will appear here
                </p>
            </div>

            <!-- Table -->
            <div v-else class="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead v-if="selectable" class="w-[50px]">
                                <Checkbox
                                    :model-value="isAllSelected"
                                    :indeterminate="isPartiallySelected"
                                    @update:model-value="toggleSelectAll"
                                />
                            </TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead v-if="showType" class="w-[120px]">Type</TableHead>
                            <TableHead class="w-[160px]">Deleted</TableHead>
                            <TableHead class="w-[100px] text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="item in filteredItems" :key="item.uuid">
                            <TableCell v-if="selectable" @click.stop>
                                <Checkbox
                                    :model-value="isSelected(item)"
                                    @update:model-value="toggleSelect(item, $event)"
                                />
                            </TableCell>
                            <TableCell class="font-medium">
                                {{ item.display_name }}
                            </TableCell>
                            <TableCell v-if="showType">
                                <Badge variant="secondary" class="capitalize">
                                    {{ item.type }}
                                </Badge>
                            </TableCell>
                            <TableCell class="text-muted-foreground">
                                {{ formatDeletedAt(item.deleted_at) }}
                            </TableCell>
                            <TableCell class="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger as-child>
                                        <Button variant="ghost" size="sm" class="h-8 w-8 p-0">
                                            <MoreHorizontal class="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem @click="handleRestore(item)">
                                            <RotateCcw class="mr-2 h-4 w-4" />
                                            Restore
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                            class="text-destructive"
                                            @click="handleForceDelete(item)"
                                        >
                                            <Trash2 class="mr-2 h-4 w-4" />
                                            Delete Permanently
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <!-- Pagination -->
            <div
                v-if="pagination && pagination.total > 0"
                class="mt-4 flex items-center justify-between text-sm text-muted-foreground"
            >
                <span>
                    Showing {{ paginationInfo?.start }} to {{ paginationInfo?.end }} of
                    {{ paginationInfo?.total }} results
                </span>
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
        </CardContent>
    </Card>

    <!-- Confirmation Modal -->
    <ModalConfirm
        v-model:open="showConfirmModal"
        :title="modalTitle"
        :description="modalDescription"
        :confirm-text="actionType === 'restore' ? 'Restore' : 'Delete Permanently'"
        :variant="actionType === 'restore' ? 'default' : 'danger'"
        :loading="isLoading"
        @confirm="confirmAction"
        @cancel="closeConfirmModal"
    >
        <template #icon>
            <div
                :class="[
                    'mx-auto flex h-12 w-12 items-center justify-center rounded-full',
                    actionType === 'restore' ? 'bg-primary/10' : 'bg-destructive/10',
                ]"
            >
                <component
                    :is="actionType === 'restore' ? RotateCcw : AlertTriangle"
                    :class="[
                        'h-6 w-6',
                        actionType === 'restore' ? 'text-primary' : 'text-destructive',
                    ]"
                />
            </div>
        </template>
    </ModalConfirm>
</template>
