<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Users, Search, Edit, ArrowLeft, ChevronLeft, ChevronRight, Plus } from 'lucide-vue-next';
import { ref, watch, computed } from 'vue';
import type { BreadcrumbItem } from '@/types';
import type { Role } from '@/types/roles';
import type { UserWithRoles } from '@/types/users';

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

// Handle both paginated response formats (with meta wrapper and without)
const totalUsers = computed(() => props.users.meta?.total ?? props.users.total ?? props.users.data?.length ?? 0);

const getInitials = (name: string) => {
    return name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};

const fetchUsers = () => {
    router.get('/dashboard/settings/users', {
        search: searchQuery.value || undefined,
        role: roleFilter.value !== 'all' ? roleFilter.value : undefined,
        page: 1,
    }, {
        preserveState: true,
        preserveScroll: true,
    });
};

watch([searchQuery, roleFilter], () => {
    fetchUsers();
}, { debounce: 300 } as any);

const handleRoleFilter = (value: string | number | boolean | bigint | Record<string, unknown> | null | undefined) => {
    roleFilter.value = String(value);
};

const goToPage = (page: number) => {
    router.get('/dashboard/settings/users', {
        search: searchQuery.value || undefined,
        role: roleFilter.value !== 'all' ? roleFilter.value : undefined,
        page,
    }, {
        preserveState: true,
        preserveScroll: true,
    });
};

const currentPage = computed(() => props.users.meta?.current_page ?? props.users.current_page ?? 1);
const lastPage = computed(() => props.users.meta?.last_page ?? props.users.last_page ?? 1);
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
                                {{ totalUsers }} users total
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <!-- Filters -->
                    <div class="flex gap-4 mb-6">
                        <div class="relative flex-1 max-w-sm">
                            <Search class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                v-model="searchQuery"
                                placeholder="Search users..."
                                class="pl-9"
                            />
                        </div>
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
                    </div>

                    <!-- Users Table -->
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Roles</TableHead>
                                <TableHead class="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow v-for="user in props.users.data" :key="user.id">
                                <TableCell>
                                    <div class="flex items-center gap-3">
                                        <Avatar class="h-8 w-8">
                                            <AvatarImage v-if="user.avatar" :src="user.avatar" />
                                            <AvatarFallback>{{ getInitials(user.name) }}</AvatarFallback>
                                        </Avatar>
                                        <span class="font-medium">{{ user.name }}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{{ user.email }}</TableCell>
                                <TableCell>
                                    <div class="flex flex-wrap gap-1">
                                        <Badge
                                            v-for="role in user.roles"
                                            :key="role.id"
                                            :variant="role.name === 'super-admin' ? 'default' : 'secondary'"
                                        >
                                            {{ role.name }}
                                        </Badge>
                                        <span v-if="!user.roles?.length" class="text-muted-foreground text-sm">
                                            No roles
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell class="text-right">
                                    <Button variant="ghost" size="icon" as-child>
                                        <Link :href="`/dashboard/settings/users/${user.id}/edit`">
                                            <Edit class="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow v-if="props.users.data.length === 0">
                                <TableCell colspan="4" class="text-center py-8 text-muted-foreground">
                                    No users found
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <!-- Pagination -->
                    <div v-if="lastPage > 1" class="flex items-center justify-between mt-4">
                        <p class="text-sm text-muted-foreground">
                            Page {{ currentPage }} of {{ lastPage }}
                        </p>
                        <div class="flex gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                :disabled="currentPage === 1"
                                @click="goToPage(currentPage - 1)"
                            >
                                <ChevronLeft class="h-4 w-4" />
                                Previous
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                :disabled="currentPage === lastPage"
                                @click="goToPage(currentPage + 1)"
                            >
                                Next
                                <ChevronRight class="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </AppLayout>
</template>
