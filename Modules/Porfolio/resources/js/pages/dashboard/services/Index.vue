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
import { Plus, Pencil, Trash2, Check, X, Star } from 'lucide-vue-next';
import * as porfolio from '@/routes/porfolio';

interface Service {
    id: number;
    uuid: string;
    title: string;
    slug: string;
    description: string | null;
    content: string | null;
    icon: string | null;
    image: string | null;
    features: string[] | null;
    price: number | null;
    price_unit: string | null;
    is_featured: boolean;
    is_active: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

interface Props {
    services: {
        data: Service[];
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
            { title: 'Services', href: '/dashboard/services' },
        ]}, () => page),
});

const searchQuery = ref('');

const filteredServices = computed(() => {
    if (!searchQuery.value) {
        return props.services.data;
    }
    const query = searchQuery.value.toLowerCase();
    return props.services.data.filter(
        (item) =>
            item.title.toLowerCase().includes(query) ||
            item.description?.toLowerCase().includes(query)
    );
});

const columns: TableColumn<Service>[] = [
    { key: 'title', label: 'Service', width: '30%' },
    { key: 'price', label: 'Price' },
    { key: 'is_featured', label: 'Featured' },
    { key: 'is_active', label: 'Status' },
    { key: 'sort_order', label: 'Order' },
];

const isDeleteModalOpen = ref(false);
const isDeleting = ref(false);
const selectedService = ref<Service | null>(null);

const handleCreate = () => {
    router.visit(porfolio.services.create.url());
};

const handleEdit = (item: Service) => {
    router.visit(porfolio.services.edit.url(item.id));
};

const openDeleteModal = (service: Service) => {
    selectedService.value = service;
    isDeleteModalOpen.value = true;
};

const handleDelete = () => {
    if (!selectedService.value) return;
    isDeleting.value = true;
    router.delete(porfolio.services.destroy.url(selectedService.value.id), {
        onSuccess: () => {
            isDeleteModalOpen.value = false;
            selectedService.value = null;
        },
        onFinish: () => {
            isDeleting.value = false;
        },
    });
};

const handlePageChange = (page: number) => {
    router.get(porfolio.services.index.url(), { page }, { preserveState: true });
};

const formatPrice = (service: Service) => {
    if (!service.price) return '-';
    return `$${service.price}${service.price_unit ? `/${service.price_unit}` : ''}`;
};

const tableActions: TableAction<Service>[] = [
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
                        <CardTitle>Services</CardTitle>
                        <CardDescription>Manage your service offerings</CardDescription>
                    </div>
                    <Button @click="handleCreate">
                        <Plus class="mr-2 h-4 w-4" />
                        Add Service
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <TableReusable
                    v-model:search-query="searchQuery"
                    :data="filteredServices"
                    :columns="columns"
                    :actions="tableActions"
                    :pagination="services"
                    search-placeholder="Search services..."
                    empty-message="No services found."
                    @page-change="handlePageChange"
                >
                    <template #cell-title="{ item }">
                        <div class="flex items-center gap-3">
                            <div v-if="item.image" class="h-10 w-10 overflow-hidden rounded-md bg-muted">
                                <img :src="item.image" :alt="item.title" class="h-full w-full object-cover" />
                            </div>
                            <div v-else-if="item.icon" class="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                                <span class="text-lg">{{ item.icon }}</span>
                            </div>
                            <div v-else class="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                                <span class="text-xs text-muted-foreground">No img</span>
                            </div>
                            <div>
                                <div class="font-medium">{{ item.title }}</div>
                                <div class="text-sm text-muted-foreground truncate max-w-[200px]">
                                    {{ item.description || item.slug }}
                                </div>
                            </div>
                        </div>
                    </template>

                    <template #cell-price="{ item }">
                        <span class="font-medium">{{ formatPrice(item) }}</span>
                    </template>

                    <template #cell-is_featured="{ item }">
                        <span :class="[
                            'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold',
                            item.is_featured
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
                        ]">
                            <Star v-if="item.is_featured" class="h-3 w-3" />
                            {{ item.is_featured ? 'Featured' : 'Normal' }}
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

                    <template #cell-sort_order="{ item }">
                        <span class="text-muted-foreground">{{ item.sort_order }}</span>
                    </template>
                </TableReusable>
            </CardContent>
        </Card>
    </div>

    <ModalConfirm
        v-model:open="isDeleteModalOpen"
        title="Delete Service"
        :description="`Are you sure you want to delete '${selectedService?.title}'? This action cannot be undone.`"
        confirm-text="Delete"
        variant="danger"
        :loading="isDeleting"
        @confirm="handleDelete"
    />
</template>
