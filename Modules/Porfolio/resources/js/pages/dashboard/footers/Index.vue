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
import * as porfolio from '@/routes/porfolio';

/**
 * types script interfaces
 */
interface Footer {
    id: number;
    uuid: string;
    title: string | null;
    description: string | null;
    copyright_text: string | null;
    logo: string | null;
    social_links: object | null;
    contact_email: string | null;
    contact_phone: string | null;
    contact_address: string | null;
    quick_links: object | null;
    newsletter_enabled: boolean;
    is_active: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

interface Props {
    footers: {
        data: Footer[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

const props = defineProps<Props>();

defineOptions({
    layout: (h: (type: unknown, props: unknown, children: unknown) => VNode, page: VNode) =>
        h(AppLayout, {
            breadcrumbs: [
                { title: 'Dashboard', href: '/dashboard' },
                { title: 'CMS', href: '/dashboard/footers' },
                { title: 'Footers', href: '/dashboard/footers' },
            ]
        }, () => page),
});

const searchQuery = ref('');

const filteredFooters = computed(() => {
    if (!searchQuery.value) {
        return props.footers.data;
    }
    const query = searchQuery.value.toLowerCase();
    return props.footers.data.filter(
        (item) =>
            item.title?.toLowerCase().includes(query) ||
            item.contact_email?.toLowerCase().includes(query)
    );
});

const columns: TableColumn<Footer>[] = [
    { key: 'title', label: 'Title', width: '25%' },
    { key: 'contact_email', label: 'Email' },
    { key: 'newsletter_enabled', label: 'Newsletter' },
    { key: 'is_active', label: 'Status' },
    { key: 'sort_order', label: 'Order' },
];

const isDeleteModalOpen = ref(false);
const isDeleting = ref(false);
const selectedFooter = ref<Footer | null>(null);

const handleCreate = () => {
    router.visit(porfolio.footers.create.url());
};

const handleEdit = (item: Footer) => {
    router.visit(porfolio.footers.edit.url(item.id));
};

const openDeleteModal = (footer: Footer) => {
    selectedFooter.value = footer;
    isDeleteModalOpen.value = true;
};

const handleDelete = () => {
    if (!selectedFooter.value) return;
    isDeleting.value = true;
    router.delete(porfolio.footers.destroy.url(selectedFooter.value.id), {
        onSuccess: () => {
            isDeleteModalOpen.value = false;
            selectedFooter.value = null;
        },
        onFinish: () => {
            isDeleting.value = false;
        },
    });
};

const handlePageChange = (page: number) => {
    router.get(porfolio.footers.index.url(), { page }, { preserveState: true });
};

const tableActions: TableAction<Footer>[] = [
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
                        <CardTitle>Footers</CardTitle>
                        <CardDescription>Manage website footers and contact information</CardDescription>
                    </div>
                    <Button @click="handleCreate">
                        <Plus class="mr-2 h-4 w-4" />
                        Add Footer
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <TableReusable v-model:search-query="searchQuery" :data="filteredFooters" :columns="columns"
                    :actions="tableActions" :pagination="footers" search-placeholder="Search footers..."
                    empty-message="No footers found." @page-change="handlePageChange">
                    <template #cell-title="{ item }">
                        <div class="flex items-center gap-3">
                            <div v-if="item.logo" class="h-8 w-8 overflow-hidden rounded bg-muted">
                                <img :src="item.logo" alt="Logo" class="h-full w-full object-contain" />
                            </div>
                            <div>
                                <div class="font-medium">{{ item.title || 'Untitled Footer' }}</div>
                                <div class="text-sm text-muted-foreground">{{ item.uuid?.slice(0, 8) }}</div>
                            </div>
                        </div>
                    </template>

                    <template #cell-contact_email="{ item }">
                        {{ item.contact_email || '-' }}
                    </template>

                    <template #cell-newsletter_enabled="{ item }">
                        <span :class="[
                            'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold',
                            item.newsletter_enabled
                                ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
                        ]">
                            {{ item.newsletter_enabled ? 'Enabled' : 'Disabled' }}
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

    <ModalConfirm v-model:open="isDeleteModalOpen" title="Delete Footer"
        :description="`Are you sure you want to delete '${selectedFooter?.title || 'this footer'}'? This action cannot be undone.`"
        confirm-text="Delete" variant="danger" :loading="isDeleting" @confirm="handleDelete" />
</template>
