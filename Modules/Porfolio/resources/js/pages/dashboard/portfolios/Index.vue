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
import { Plus, Pencil, Trash2, Eye, FileText } from 'lucide-vue-next';
import * as porfolio from '@/routes/porfolio';

/**
 * Preview portfolio on public kiosk website
 */
const previewPortfolio = (item: Portfolio) => {
    const webUrl = `/portfolio/${item.slug}`;
    window.open(webUrl, '_blank');
};

/**
 * types script interfaces
 */
interface Portfolio {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    content: string | null;
    featured_image: string | null;
    category: string | null;
    industry: string | null;
    experience_level: string | null;
    location: string | null;
    tags: string[] | null;
    client_name: string | null;
    project_url: string | null;
    project_date: string | null;
    is_featured: boolean;
    is_active: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

interface Props {
    portfolios: {
        data: Portfolio[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    categories: string[];
}

const props = defineProps<Props>();

// Persistent layout required for momentum-modal to work
defineOptions({
    layout: (h: (type: unknown, props: unknown, children: unknown) => VNode, page: VNode) =>
        h(AppLayout, {
            breadcrumbs: [
                { title: 'Dashboard', href: '/dashboard' },
                { title: 'Portfolios', href: '/dashboard/portfolios' },
            ]
        }, () => page),
});

// Search
const searchQuery = ref('');

// Filtered portfolios based on search
const filteredPortfolios = computed(() => {
    if (!searchQuery.value) {
        return props.portfolios.data;
    }
    const query = searchQuery.value.toLowerCase();
    return props.portfolios.data.filter(
        (item) =>
            item.title.toLowerCase().includes(query) ||
            item.category?.toLowerCase().includes(query) ||
            item.client_name?.toLowerCase().includes(query)
    );
});

// Table columns
const columns: TableColumn<Portfolio>[] = [
    { key: 'title', label: 'Title', width: '30%' },
    { key: 'category', label: 'Category' },
    { key: 'client_name', label: 'Client' },
    { key: 'is_active', label: 'Status' },
    { key: 'project_date', label: 'Date' },
];

// Delete Modal (client-side only)
const isDeleteModalOpen = ref(false);
const isDeleting = ref(false);
const selectedPortfolio = ref<Portfolio | null>(null);

/**
 * Create handler - navigates to create route (opens modal via momentum-modal)
 */
const handleCreate = () => {
    router.visit(porfolio.create.url());
};

/**
 * Show handler - navigates to show route (opens modal via momentum-modal)
 */
const handleShow = (item: Portfolio) => {
    router.visit(porfolio.show.url(item.id));
};

/**
 * Edit handler - navigates to edit route (opens modal via momentum-modal)
 */
const handleEdit = (item: Portfolio) => {
    router.visit(porfolio.edit.url(item.id));
};

/**
 * Open delete modal
 */
const openDeleteModal = (portfolio: Portfolio) => {
    selectedPortfolio.value = portfolio;
    isDeleteModalOpen.value = true;
};

/**
 * Handle delete
 */
const handleDelete = () => {
    if (!selectedPortfolio.value) return;
    isDeleting.value = true;
    router.delete(porfolio.destroy.url(selectedPortfolio.value.id), {
        onSuccess: () => {
            isDeleteModalOpen.value = false;
            selectedPortfolio.value = null;
        },
        onFinish: () => {
            isDeleting.value = false;
        },
    });
};

const handlePageChange = (page: number) => {
    router.get(porfolio.index.url(), { page }, { preserveState: true });
};

// Table actions
const tableActions: TableAction<Portfolio>[] = [
    {
        label: 'Show',
        icon: FileText,
        onClick: (item) => handleShow(item),
    },
    {
        label: 'Preview',
        icon: Eye,
        onClick: (item) => previewPortfolio(item),
    },
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
                        <CardTitle>Portfolios</CardTitle>
                        <CardDescription>Manage your portfolio projects</CardDescription>
                    </div>
                    <Button @click="handleCreate">
                        <Plus class="mr-2 h-4 w-4" />
                        Add Portfolio
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <!-- Reusable Table -->
                <TableReusable v-model:search-query="searchQuery" :data="filteredPortfolios" :columns="columns"
                    :actions="tableActions" :pagination="portfolios" search-placeholder="Search portfolios..."
                    empty-message="No portfolios found." @page-change="handlePageChange">
                    <!-- Custom cell for title with image -->
                    <template #cell-title="{ item }">
                        <div class="flex items-center gap-3">
                            <div v-if="item.featured_image" class="h-10 w-10 overflow-hidden rounded-md bg-muted">
                                <img :src="item.featured_image" :alt="item.title" class="h-full w-full object-cover" />
                            </div>
                            <div v-else class="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                                <span class="text-xs text-muted-foreground">No img</span>
                            </div>
                            <div>
                                <div class="font-medium">{{ item.title }}</div>
                                <div class="text-sm text-muted-foreground">
                                    {{ item.slug }}
                                </div>
                            </div>
                        </div>
                    </template>

                    <!-- Custom cell for category badge -->
                    <template #cell-category="{ item }">
                        <span v-if="item.category"
                            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                            {{ item.category }}
                        </span>
                        <span v-else class="text-muted-foreground">-</span>
                    </template>

                    <!-- Custom cell for client -->
                    <template #cell-client_name="{ item }">
                        {{ item.client_name || '-' }}
                    </template>

                    <!-- Custom cell for status badges -->
                    <template #cell-is_active="{ item }">
                        <div class="flex items-center gap-2">
                            <span :class="[
                                'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
                                item.is_active
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                                    : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
                            ]">
                                {{ item.is_active ? 'Active' : 'Inactive' }}
                            </span>
                            <span v-if="item.is_featured"
                                class="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                                Featured
                            </span>
                        </div>
                    </template>
                </TableReusable>
            </CardContent>
        </Card>
    </div>

    <!-- Delete Confirmation Modal (client-side only) -->
    <ModalConfirm v-model:open="isDeleteModalOpen" title="Delete Portfolio"
        :description="`Are you sure you want to delete '${selectedPortfolio?.title}'? This action cannot be undone.`"
        confirm-text="Delete" variant="danger" :loading="isDeleting" @confirm="handleDelete" />
</template>
