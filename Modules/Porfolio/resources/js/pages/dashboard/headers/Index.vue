<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    TableReusable,
    ModalConfirm,
    type TableColumn,
    type TableAction,
} from '@/components/shared';
import { router } from '@inertiajs/vue3';
import { ref, computed, type VNode } from 'vue';
import { Plus, Pencil, Trash2, Check, X } from 'lucide-vue-next';
import * as headers from '@/routes/porfolio/headers';

interface Header {
    id: number;
    uuid: string;
    title: string | null;
    logo: string | null;
    logo_alt: string | null;
    navigation: object | null;
    actions: object | null;
    style: string;
    position: string;
    background_color: string | null;
    text_color: string | null;
    is_transparent: boolean;
    show_search: boolean;
    show_language_switcher: boolean;
    is_active: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

interface Props {
    headers: {
        data: Header[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

const props = defineProps<Props>();

defineOptions({
    layout: (h: (type: unknown, props: unknown, children: unknown) => VNode, page: VNode) =>
        h(AppLayout, { breadcrumbs: [
            { title: 'Dashboard', href: '/dashboard' },
            { title: 'CMS', href: '/dashboard/headers' },
            { title: 'Headers', href: '/dashboard/headers' },
        ]}, () => page),
});

const searchQuery = ref('');

const filteredHeaders = computed(() => {
    if (!searchQuery.value) {
        return props.headers.data;
    }
    const query = searchQuery.value.toLowerCase();
    return props.headers.data.filter(
        (item) =>
            item.title?.toLowerCase().includes(query) ||
            item.style.toLowerCase().includes(query) ||
            item.position.toLowerCase().includes(query)
    );
});

const columns: TableColumn<Header>[] = [
    { key: 'title', label: 'Title', width: '25%' },
    { key: 'style', label: 'Style' },
    { key: 'position', label: 'Position' },
    { key: 'is_active', label: 'Status' },
    { key: 'sort_order', label: 'Order' },
];

const isDeleteModalOpen = ref(false);
const isDeleting = ref(false);
const selectedHeader = ref<Header | null>(null);

const handleCreate = () => {
    router.visit(headers.create.url());
};

const handleEdit = (item: Header) => {
    router.visit(headers.edit.url(item.id));
};

const openDeleteModal = (header: Header) => {
    selectedHeader.value = header;
    isDeleteModalOpen.value = true;
};

const handleDelete = () => {
    if (!selectedHeader.value) return;
    isDeleting.value = true;
    router.delete(headers.destroy.url(selectedHeader.value.id), {
        onSuccess: () => {
            isDeleteModalOpen.value = false;
            selectedHeader.value = null;
        },
        onFinish: () => {
            isDeleting.value = false;
        },
    });
};

const handlePageChange = (page: number) => {
    router.get(headers.index.url(), { page }, { preserveState: true });
};

const tableActions: TableAction<Header>[] = [
    {
        label: 'Edit',
        icon: Pencil,
        onClick: (item) => handleEdit(item),
    },
    {
        label: 'Delete',
        icon: Trash2,
        onClick: (item) => openDeleteModal(item),
        variant: 'destructive',
        separator: true,
    },
];
</script>

<template>
    <div class="flex flex-1 flex-col gap-4 p-4">
        <Card>
            <CardHeader>
                <div class="flex items-center justify-between">
                    <div>
                        <CardTitle>Headers</CardTitle>
                        <CardDescription>Manage website headers and navigation</CardDescription>
                    </div>
                    <Button @click="handleCreate">
                        <Plus class="mr-2 h-4 w-4" />
                        Add Header
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <TableReusable
                    v-model:search-query="searchQuery"
                    :data="filteredHeaders"
                    :columns="columns"
                    :actions="tableActions"
                    :pagination="headers"
                    search-placeholder="Search headers..."
                    empty-message="No headers found."
                    @page-change="handlePageChange"
                >
                    <template #cell-title="{ item }">
                        <div class="flex items-center gap-3">
                            <div v-if="item.logo" class="h-8 w-8 overflow-hidden rounded bg-muted">
                                <img :src="item.logo" :alt="item.logo_alt || 'Logo'" class="h-full w-full object-contain" />
                            </div>
                            <div>
                                <div class="font-medium">{{ item.title || 'Untitled Header' }}</div>
                                <div class="text-sm text-muted-foreground">{{ item.uuid?.slice(0, 8) }}</div>
                            </div>
                        </div>
                    </template>

                    <template #cell-style="{ item }">
                        <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize">
                            {{ item.style }}
                        </span>
                    </template>

                    <template #cell-position="{ item }">
                        <span class="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 capitalize dark:bg-blue-900 dark:text-blue-100">
                            {{ item.position }}
                        </span>
                    </template>

                    <template #cell-is_active="{ item }">
                        <div class="flex items-center gap-2">
                            <span :class="[
                                'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold',
                                item.is_active
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                                    : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
                            ]">
                                <Check v-if="item.is_active" class="h-3 w-3" />
                                <X v-else class="h-3 w-3" />
                                {{ item.is_active ? 'Active' : 'Inactive' }}
                            </span>
                        </div>
                    </template>

                    <template #cell-sort_order="{ item }">
                        <span class="text-muted-foreground">{{ item.sort_order }}</span>
                    </template>
                </TableReusable>
            </CardContent>
        </Card>
    </div>

    <ModalConfirm
        v-model:open="isDeleteModalOpen"
        title="Delete Header"
        :description="`Are you sure you want to delete '${selectedHeader?.title || 'this header'}'? This action cannot be undone.`"
        confirm-text="Delete"
        variant="danger"
        :loading="isDeleting"
        @confirm="handleDelete"
    />
</template>
