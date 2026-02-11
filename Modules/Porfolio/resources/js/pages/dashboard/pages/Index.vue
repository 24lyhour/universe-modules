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
import { Plus, Pencil, Trash2, Check, X, Home, Eye } from 'lucide-vue-next';
import * as porfolio from '@/routes/porfolio';

interface Page {
    id: number;
    uuid: string;
    title: string;
    slug: string;
    description: string | null;
    template: string;
    is_homepage: boolean;
    is_active: boolean;
    is_in_menu: boolean;
    menu_order: number;
    parent?: { id: number; title: string } | null;
    header?: { id: number; title: string } | null;
    footer?: { id: number; title: string } | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    pages: {
        data: Page[];
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
            { title: 'CMS', href: '/dashboard/pages' },
            { title: 'Pages', href: '/dashboard/pages' },
        ]}, () => page),
});

const searchQuery = ref('');

const filteredPages = computed(() => {
    if (!searchQuery.value) {
        return props.pages.data;
    }
    const query = searchQuery.value.toLowerCase();
    return props.pages.data.filter(
        (item) =>
            item.title.toLowerCase().includes(query) ||
            item.slug.toLowerCase().includes(query) ||
            item.template.toLowerCase().includes(query)
    );
});

const columns: TableColumn<Page>[] = [
    { key: 'title', label: 'Title', width: '30%' },
    { key: 'template', label: 'Template' },
    { key: 'is_in_menu', label: 'In Menu' },
    { key: 'is_active', label: 'Status' },
    { key: 'menu_order', label: 'Order' },
];

const isDeleteModalOpen = ref(false);
const isDeleting = ref(false);
const selectedPage = ref<Page | null>(null);

const handleCreate = () => {
    router.visit(porfolio.pages.create.url());
};

const handleEdit = (item: Page) => {
    router.visit(porfolio.pages.edit.url(item.id));
};

const openDeleteModal = (page: Page) => {
    selectedPage.value = page;
    isDeleteModalOpen.value = true;
};

const handleDelete = () => {
    if (!selectedPage.value) return;
    isDeleting.value = true;
    router.delete(porfolio.pages.destroy.url(selectedPage.value.id), {
        onSuccess: () => {
            isDeleteModalOpen.value = false;
            selectedPage.value = null;
        },
        onFinish: () => {
            isDeleting.value = false;
        },
    });
};

const handlePageChange = (page: number) => {
    router.get(porfolio.pages.index.url(), { page }, { preserveState: true });
};

const tableActions: TableAction<Page>[] = [
    {
        label: 'Edit',
        icon: Pencil,
        onClick: (item) => handleEdit(item),
    },
    {
        label: 'View Page',
        icon: Eye,
        onClick: (item) => window.open(`/page/${item.slug}`, '_blank'),
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
                        <CardTitle>Pages</CardTitle>
                        <CardDescription>Manage website pages and content</CardDescription>
                    </div>
                    <Button @click="handleCreate">
                        <Plus class="mr-2 h-4 w-4" />
                        Add Page
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <TableReusable
                    v-model:search-query="searchQuery"
                    :data="filteredPages"
                    :columns="columns"
                    :actions="tableActions"
                    :pagination="pages"
                    search-placeholder="Search pages..."
                    empty-message="No pages found."
                    @page-change="handlePageChange"
                >
                    <template #cell-title="{ item }">
                        <div class="flex items-center gap-2">
                            <div>
                                <div class="flex items-center gap-2">
                                    <span class="font-medium">{{ item.title }}</span>
                                    <Home v-if="item.is_homepage" class="h-4 w-4 text-yellow-500" title="Homepage" />
                                </div>
                                <div class="text-sm text-muted-foreground">/{{ item.slug }}</div>
                            </div>
                        </div>
                    </template>

                    <template #cell-template="{ item }">
                        <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize">
                            {{ item.template }}
                        </span>
                    </template>

                    <template #cell-is_in_menu="{ item }">
                        <span :class="[
                            'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold',
                            item.is_in_menu
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
                        ]">
                            <Check v-if="item.is_in_menu" class="h-3 w-3" />
                            <X v-else class="h-3 w-3" />
                            {{ item.is_in_menu ? 'Yes' : 'No' }}
                        </span>
                    </template>

                    <template #cell-is_active="{ item }">
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
                    </template>

                    <template #cell-menu_order="{ item }">
                        <span class="text-muted-foreground">{{ item.menu_order }}</span>
                    </template>
                </TableReusable>
            </CardContent>
        </Card>
    </div>

    <ModalConfirm
        v-model:open="isDeleteModalOpen"
        title="Delete Page"
        :description="`Are you sure you want to delete '${selectedPage?.title}'? This action cannot be undone.`"
        confirm-text="Delete"
        variant="danger"
        :loading="isDeleting"
        @confirm="handleDelete"
    />
</template>
