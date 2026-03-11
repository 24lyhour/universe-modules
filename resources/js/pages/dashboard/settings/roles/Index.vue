<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Shield, Plus, Pencil, Trash2, Search, Users, Key, ArrowLeft, ShieldCheck, Crown, UserCog, Eye } from 'lucide-vue-next';
import { ref, watch, computed } from 'vue';
import type { BreadcrumbItem } from '@/types';
import type { Role } from '@/types/roles';

interface Props {
    roles: {
        data: Role[];
        meta?: {
            current_page: number;
            last_page: number;
            per_page: number;
            total: number;
        };
    };
    filters: {
        search: string | null;
    };
    stats?: {
        totalRoles: number;
        totalUsers: number;
        totalPermissions: number;
    };
}

const props = defineProps<Props>();

const breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/dashboard/settings' },
    { title: 'Roles', href: '/dashboard/settings/roles' },
];

const searchQuery = ref(props.filters.search || '');
const showDeleteDialog = ref(false);
const selectedRole = ref<Role | null>(null);

const rolesList = computed(() => {
    return props.roles.data || props.roles;
});

// Calculate stats from roles data
const stats = computed(() => {
    const roles = rolesList.value;
    const totalRoles = props.roles.meta?.total || roles.length;
    const totalUsers = roles.reduce((sum, role) => sum + (role.users_count || 0), 0);
    const totalPermissions = roles.reduce((sum, role) => sum + (role.permissions?.length || role.permissions_count || 0), 0);
    const avgPermissionsPerRole = totalRoles > 0 ? Math.round(totalPermissions / totalRoles) : 0;

    return { totalRoles, totalUsers, totalPermissions, avgPermissionsPerRole };
});

// Get role icon based on name
const getRoleIcon = (roleName: string) => {
    if (roleName === 'super-admin') return Crown;
    if (roleName === 'admin') return ShieldCheck;
    if (roleName === 'manager') return UserCog;
    if (roleName === 'viewer') return Eye;
    return Shield;
};

// Get role color based on name
const getRoleColor = (roleName: string) => {
    const colors: Record<string, string> = {
        'super-admin': 'text-amber-500 bg-amber-500/10',
        'admin': 'text-red-500 bg-red-500/10',
        'manager': 'text-blue-500 bg-blue-500/10',
        'staff': 'text-green-500 bg-green-500/10',
        'employee': 'text-purple-500 bg-purple-500/10',
        'viewer': 'text-gray-500 bg-gray-500/10',
    };
    return colors[roleName] || 'text-primary bg-primary/10';
};

const handleSearch = () => {
    router.get('/dashboard/settings/roles', { search: searchQuery.value || undefined }, {
        preserveState: true,
        preserveScroll: true,
    });
};

const openDeleteDialog = (role: Role) => {
    selectedRole.value = role;
    showDeleteDialog.value = true;
};

const handleDelete = () => {
    if (!selectedRole.value) return;
    router.delete(`/dashboard/settings/roles/${selectedRole.value.id}`, {
        onSuccess: () => {
            showDeleteDialog.value = false;
            selectedRole.value = null;
        },
    });
};

const isSystemRole = (roleName: string) => {
    return ['super-admin', 'admin', 'manager', 'staff', 'employee', 'viewer'].includes(roleName);
};

// Get max users for progress bar scaling
const maxUsersCount = computed(() => {
    return Math.max(...rolesList.value.map(r => r.users_count || 0), 1);
});

let searchTimeout: ReturnType<typeof setTimeout>;
watch(searchQuery, () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => handleSearch(), 300);
});
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head title="Roles Management" />

        <div class="flex h-full flex-1 flex-col gap-6 p-6">
            <!-- Header -->
            <div class="flex items-center gap-4">
                <Button variant="ghost" size="icon" as-child>
                    <Link href="/dashboard/settings">
                        <ArrowLeft class="h-4 w-4" />
                    </Link>
                </Button>
                <div class="flex-1">
                    <h1 class="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <Shield class="h-6 w-6" />
                        Roles Management
                    </h1>
                    <p class="text-muted-foreground">Manage user roles and their permissions</p>
                </div>
                <Button as-child>
                    <Link href="/dashboard/settings/roles/create">
                        <Plus class="mr-2 h-4 w-4" />
                        Create Role
                    </Link>
                </Button>
            </div>

            <!-- Stats Cards -->
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle class="text-sm font-medium">Total Roles</CardTitle>
                        <Shield class="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div class="text-2xl font-bold">{{ stats.totalRoles }}</div>
                        <p class="text-xs text-muted-foreground">Active roles in the system</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle class="text-sm font-medium">Total Users</CardTitle>
                        <Users class="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div class="text-2xl font-bold">{{ stats.totalUsers }}</div>
                        <p class="text-xs text-muted-foreground">Users assigned to roles</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle class="text-sm font-medium">Total Permissions</CardTitle>
                        <Key class="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div class="text-2xl font-bold">{{ stats.totalPermissions }}</div>
                        <p class="text-xs text-muted-foreground">Permissions assigned</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle class="text-sm font-medium">Avg. Permissions</CardTitle>
                        <ShieldCheck class="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div class="text-2xl font-bold">{{ stats.avgPermissionsPerRole }}</div>
                        <p class="text-xs text-muted-foreground">Per role average</p>
                    </CardContent>
                </Card>
            </div>

            <!-- Search -->
            <div class="flex items-center gap-4">
                <div class="relative flex-1 max-w-sm">
                    <Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input v-model="searchQuery" placeholder="Search roles..." class="pl-9" />
                </div>
            </div>

            <!-- Roles Grid -->
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <TooltipProvider>
                    <Card
                        v-for="role in rolesList"
                        :key="role.id"
                        class="relative group hover:shadow-md transition-shadow duration-200"
                    >
                        <CardHeader class="pb-3">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div :class="['flex h-10 w-10 items-center justify-center rounded-lg', getRoleColor(role.name)]">
                                        <component :is="getRoleIcon(role.name)" class="h-5 w-5" />
                                    </div>
                                    <div>
                                        <CardTitle class="text-lg capitalize">{{ role.name.replace(/-/g, ' ') }}</CardTitle>
                                        <CardDescription v-if="isSystemRole(role.name)" class="text-xs">
                                            System Role
                                        </CardDescription>
                                    </div>
                                </div>
                                <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Tooltip>
                                        <TooltipTrigger as-child>
                                            <Button variant="ghost" size="icon" as-child>
                                                <Link :href="`/dashboard/settings/roles/${role.id}/edit`">
                                                    <Pencil class="h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>Edit Role</TooltipContent>
                                    </Tooltip>
                                    <Tooltip v-if="!isSystemRole(role.name)">
                                        <TooltipTrigger as-child>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                @click="openDeleteDialog(role)"
                                            >
                                                <Trash2 class="h-4 w-4 text-destructive" />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>Delete Role</TooltipContent>
                                    </Tooltip>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent class="space-y-4">
                            <!-- Users Progress -->
                            <div class="space-y-2">
                                <div class="flex items-center justify-between text-sm">
                                    <div class="flex items-center gap-1.5 text-muted-foreground">
                                        <Users class="h-4 w-4" />
                                        <span>Users</span>
                                    </div>
                                    <Badge variant="secondary" class="font-mono">
                                        {{ role.users_count || 0 }}
                                    </Badge>
                                </div>
                                <Progress
                                    :model-value="((role.users_count || 0) / maxUsersCount) * 100"
                                    class="h-2"
                                />
                            </div>

                            <!-- Permissions -->
                            <div class="flex items-center justify-between text-sm">
                                <div class="flex items-center gap-1.5 text-muted-foreground">
                                    <Key class="h-4 w-4" />
                                    <span>Permissions</span>
                                </div>
                                <Badge variant="outline" class="font-mono">
                                    {{ role.permissions?.length || role.permissions_count || 0 }}
                                </Badge>
                            </div>

                            <!-- Quick Actions -->
                            <div class="pt-2 border-t flex items-center justify-between">
                                <div class="flex gap-2">
                                    <Badge v-if="role.name === 'super-admin'" class="bg-amber-500 hover:bg-amber-600">
                                        <Crown class="h-3 w-3 mr-1" />
                                        Full Access
                                    </Badge>
                                    <Badge v-else-if="isSystemRole(role.name)" variant="secondary">
                                        Protected
                                    </Badge>
                                </div>
                                <Button variant="link" size="sm" as-child class="h-auto p-0 text-xs">
                                    <Link :href="`/dashboard/settings/roles/${role.id}/edit`">
                                        View Details
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TooltipProvider>
            </div>

            <p v-if="rolesList.length === 0" class="text-center text-muted-foreground py-8">No roles found</p>
        </div>

        <!-- Delete Confirmation Dialog -->
        <AlertDialog v-model:open="showDeleteDialog">
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Delete Role</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to delete the role "{{ selectedRole?.name }}"? This action cannot be undone.
                        <span v-if="selectedRole?.users_count" class="block mt-2 text-destructive font-medium">
                            Warning: {{ selectedRole.users_count }} user(s) are currently assigned to this role.
                        </span>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction @click="handleDelete" class="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </AppLayout>
</template>
