<script setup lang="ts">
import { ref, computed } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { TableReusable } from '@/components/shared';
import type { TableColumn, TableAction } from '@/components/shared/TableReusable/TableReusable.vue';
import { Users, ArrowLeft, Plus, Edit, Trash2, Ban, CheckCircle, User } from 'lucide-vue-next';
import type { BreadcrumbItem } from '@/types';
import type { Role } from '@/types/roles';
import type { UserWithRoles } from '@/types/users';

// Import modal components from the activity log  
import Delete from '../activity-log/Delete.vue';
import Suspend from '../activity-log/Suspend.vue';
import Unsuspend from '../activity-log/Unsuspend.vue';

interface Props {
    users: {
        data: UserWithRoles[];
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
    };
    roles: Role[];
    filters?: {
        search?: string | null;
        role?: string | null;
    };
}

const props = defineProps<Props>();

const breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/dashboard/settings' },
    { title: 'Users', href: '/dashboard/settings/users' },
];

const searchQuery = ref(props.filters?.search || '');
const roleFilter = ref(props.filters?.role || 'all');

// Modal states
const showDeleteModal = ref(false);
const showSuspendModal = ref(false);
const showUnsuspendModal = ref(false);
const selectedUser = ref<UserWithRoles | null>(null);

// Handle both paginated response formats (with meta wrapper and without)
const pagination = computed(() => {
    if (props.users.meta) {
        return props.users.meta;
    }
    return {
        current_page: props.users.current_page ?? 1,
        last_page: props.users.last_page ?? 1,
        per_page: props.users.per_page ?? 10,
        total: props.users.total ?? props.users.data?.length ?? 0,
    };
});

// Table columns
const columns: TableColumn<UserWithRoles>[] = [
    {
        key: 'name',
        label: 'User',
        width: '250px',
    },
    {
        key: 'email',
        label: 'Email',
    },
    {
        key: 'roles',
        label: 'Roles',
    },
    {
        key: 'status',
        label: 'Status',
        width: '120px',
    },
];

// Table actions
const actions: TableAction<UserWithRoles>[] = [
    {
        label: 'Edit',
        icon: Edit,
        onClick: (user) => {
            router.visit(`/dashboard/settings/users/${user.id}/edit`);
        },
    },
    {
        label: 'Suspend',
        icon: Ban,
        onClick: (user) => {
            selectedUser.value = user;
            showSuspendModal.value = true;
        },
        show: (user) => !user.suspended_at,
        separator: true,
    },
    {
        label: 'Unsuspend',
        icon: CheckCircle,
        onClick: (user) => {
            selectedUser.value = user;
            showUnsuspendModal.value = true;
        },
        show: (user) => !!user.suspended_at,
        separator: true,
    },
    {
        label: 'Delete',
        icon: Trash2,
        variant: 'destructive',
        onClick: (user) => {
            selectedUser.value = user;
            showDeleteModal.value = true;
        },
        separator: true,
    },
];

const fetchUsers = (params: Record<string, any> = {}) => {
    router.get('/dashboard/settings/users', {
        search: (params.search ?? searchQuery.value) || undefined,
        role: roleFilter.value !== 'all' ? roleFilter.value : undefined,
        page: params.page ?? 1,
        per_page: params.per_page ?? pagination.value.per_page,
    }, {
        preserveState: true,
        preserveScroll: true,
    });
};

const handleSearch = (query: string) => {
    searchQuery.value = query;
    fetchUsers({ search: query, page: 1 });
};

const handlePageChange = (page: number) => {
    fetchUsers({ page });
};

const handlePerPageChange = (perPage: number) => {
    fetchUsers({ per_page: perPage, page: 1 });
};

const handleRoleFilter = (value: string | number | boolean | bigint | Record<string, unknown> | null | undefined) => {
    roleFilter.value = String(value);
    fetchUsers({ page: 1 });
};

// Modal handlers
const handleDeleted = () => {
    fetchUsers();
};

const handleSuspended = () => {
    fetchUsers();
};

const handleUnsuspended = () => {
    fetchUsers();
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head title="User Management" />

        <div class="flex h-full flex-1 flex-col gap-6 p-6">
            <div class="flex items-center gap-4">
                <Button variant="ghost" size="icon" as-child>
                    <Link href="/dashboard/settings">
                        <ArrowLeft class="h-4 w-4" />
                    </Link>
                </Button>
                <div class="flex-1">
                    <h1 class="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <Users class="h-6 w-6" />
                        User Management
                    </h1>
                    <p class="text-muted-foreground">Manage user roles and permissions</p>
                </div>
                <Button as-child>
                    <Link href="/dashboard/settings/users/create">
                        <Plus class="mr-2 h-4 w-4" />
                        Create User
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <div class="flex items-center justify-between">
                        <div>
                            <CardTitle>Users</CardTitle>
                            <CardDescription>
                                {{ pagination.total }} users total
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <TableReusable
                        :data="props.users.data"
                        :columns="columns"
                        :actions="actions"
                        :pagination="pagination"
                        :searchable="true"
                        search-placeholder="Search users..."
                        empty-message="No users found."
                        v-model:search-query="searchQuery"
                        @search="handleSearch"
                        @page-change="handlePageChange"
                        @per-page-change="handlePerPageChange"
                    >
                        <!-- Role filter in toolbar -->
                        <template #toolbar>
                            <Select :model-value="roleFilter" @update:model-value="handleRoleFilter">
                                <SelectTrigger class="w-[180px]">
                                    <SelectValue placeholder="Filter by role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Roles</SelectItem>
                                    <SelectItem v-for="role in props.roles" :key="role.id" :value="role.name">
                                        {{ role.name }}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </template>

                        <!-- Custom user cell -->
                        <template #cell-name="{ item }">
                            <div class="flex items-center gap-3">
                                <div v-if="item.avatar" class="h-10 w-10 overflow-hidden rounded-full">
                                    <img
                                        :src="item.avatar"
                                        :alt="item.name"
                                        class="h-full w-full object-cover"
                                    />
                                </div>
                                <div v-else class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                    <User class="h-5 w-5 text-primary" />
                                </div>
                                <span class="font-medium">{{ item.name }}</span>
                            </div>
                        </template>

                        <!-- Custom roles cell -->
                        <template #cell-roles="{ item }">
                            <div class="flex flex-wrap gap-1">
                                <Badge
                                    v-for="role in item.roles"
                                    :key="role.id"
                                    :variant="role.name === 'super-admin' ? 'default' : 'secondary'"
                                >
                                    {{ role.name }}
                                </Badge>
                                <span v-if="!item.roles?.length" class="text-muted-foreground text-sm">
                                    No roles
                                </span>
                            </div>
                        </template>

                        <!-- Custom status cell -->
                        <template #cell-status="{ item }">
                            <Badge :variant="item.suspended_at ? 'destructive' : 'default'">
                                {{ item.suspended_at ? 'Suspended' : 'Active' }}
                            </Badge>
                        </template>
                    </TableReusable>
                </CardContent>
            </Card>
        </div>

        <!-- Delete Modal -->
        <Delete
            v-model:open="showDeleteModal"
            :user="selectedUser"
            @deleted="handleDeleted"
        />

        <!-- Suspend Modal -->
        <Suspend
            v-model:open="showSuspendModal"
            :user="selectedUser"
            @suspended="handleSuspended"
        />

        <!-- Unsuspend Modal -->
        <Unsuspend
            v-model:open="showUnsuspendModal"
            :user="selectedUser"
            @unsuspended="handleUnsuspended"
        />
    </AppLayout>
</template>
