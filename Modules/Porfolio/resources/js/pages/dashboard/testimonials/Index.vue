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

interface Testimonial {
    id: number;
    uuid: string;
    name: string;
    position: string | null;
    company: string | null;
    avatar: string | null;
    content: string;
    rating: number;
    is_featured: boolean;
    is_active: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

interface Props {
    testimonials: {
        data: Testimonial[];
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
            { title: 'Testimonials', href: '/dashboard/testimonials' },
        ]}, () => page),
});

const searchQuery = ref('');

const filteredTestimonials = computed(() => {
    if (!searchQuery.value) {
        return props.testimonials.data;
    }
    const query = searchQuery.value.toLowerCase();
    return props.testimonials.data.filter(
        (item) =>
            item.name.toLowerCase().includes(query) ||
            item.company?.toLowerCase().includes(query) ||
            item.content.toLowerCase().includes(query)
    );
});

const columns: TableColumn<Testimonial>[] = [
    { key: 'name', label: 'Client', width: '25%' },
    { key: 'content', label: 'Testimonial', width: '35%' },
    { key: 'rating', label: 'Rating' },
    { key: 'is_featured', label: 'Featured' },
    { key: 'is_active', label: 'Status' },
];

const isDeleteModalOpen = ref(false);
const isDeleting = ref(false);
const selectedTestimonial = ref<Testimonial | null>(null);

const handleCreate = () => {
    router.visit(porfolio.testimonials.create.url());
};

const handleEdit = (item: Testimonial) => {
    router.visit(porfolio.testimonials.edit.url(item.id));
};

const openDeleteModal = (testimonial: Testimonial) => {
    selectedTestimonial.value = testimonial;
    isDeleteModalOpen.value = true;
};

const handleDelete = () => {
    if (!selectedTestimonial.value) return;
    isDeleting.value = true;
    router.delete(porfolio.testimonials.destroy.url(selectedTestimonial.value.id), {
        onSuccess: () => {
            isDeleteModalOpen.value = false;
            selectedTestimonial.value = null;
        },
        onFinish: () => {
            isDeleting.value = false;
        },
    });
};

const handlePageChange = (page: number) => {
    router.get(porfolio.testimonials.index.url(), { page }, { preserveState: true });
};

const tableActions: TableAction<Testimonial>[] = [
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
                        <CardTitle>Testimonials</CardTitle>
                        <CardDescription>Manage client testimonials and reviews</CardDescription>
                    </div>
                    <Button @click="handleCreate">
                        <Plus class="mr-2 h-4 w-4" />
                        Add Testimonial
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <TableReusable
                    v-model:search-query="searchQuery"
                    :data="filteredTestimonials"
                    :columns="columns"
                    :actions="tableActions"
                    :pagination="testimonials"
                    search-placeholder="Search testimonials..."
                    empty-message="No testimonials found."
                    @page-change="handlePageChange"
                >
                    <template #cell-name="{ item }">
                        <div class="flex items-center gap-3">
                            <div v-if="item.avatar" class="h-10 w-10 overflow-hidden rounded-full bg-muted">
                                <img :src="item.avatar" :alt="item.name" class="h-full w-full object-cover" />
                            </div>
                            <div v-else class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <span class="text-sm font-medium">{{ item.name.charAt(0).toUpperCase() }}</span>
                            </div>
                            <div>
                                <div class="font-medium">{{ item.name }}</div>
                                <div class="text-sm text-muted-foreground">
                                    {{ [item.position, item.company].filter(Boolean).join(' at ') || '-' }}
                                </div>
                            </div>
                        </div>
                    </template>

                    <template #cell-content="{ item }">
                        <p class="text-sm text-muted-foreground line-clamp-2">
                            "{{ item.content }}"
                        </p>
                    </template>

                    <template #cell-rating="{ item }">
                        <div class="flex items-center gap-1">
                            <Star
                                v-for="i in 5"
                                :key="i"
                                class="h-4 w-4"
                                :class="i <= item.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'"
                            />
                        </div>
                    </template>

                    <template #cell-is_featured="{ item }">
                        <span :class="[
                            'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold',
                            item.is_featured
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
                        ]">
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
                </TableReusable>
            </CardContent>
        </Card>
    </div>

    <ModalConfirm
        v-model:open="isDeleteModalOpen"
        title="Delete Testimonial"
        :description="`Are you sure you want to delete the testimonial from '${selectedTestimonial?.name}'? This action cannot be undone.`"
        confirm-text="Delete"
        variant="danger"
        :loading="isDeleting"
        @confirm="handleDelete"
    />
</template>
