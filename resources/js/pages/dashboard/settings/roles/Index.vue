<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
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
import { Shield, Plus, Pencil, Trash2, Search, Users, Key, ArrowLeft } from 'lucide-vue-next';
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

            <!-- Search -->
            <div class="flex items-center gap-4">
                <div class="relative flex-1 max-w-sm">
                    <Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input v-model="searchQuery" placeholder="Search roles..." class="pl-9" />
                </div>
            </div>

            <!-- Roles Grid -->
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card v-for="role in rolesList" :key="role.id" class="relative">
                    <CardHeader class="pb-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <Shield class="h-5 w-5 text-primary" />
                                <CardTitle class="text-lg capitalize">{{ role.name.replace('-', ' ') }}</CardTitle>
                            </div>
                            <div class="flex items-center gap-1">
                                <Button variant="ghost" size="icon" as-child>
                                    <Link :href="`/dashboard/settings/roles/${role.id}/edit`">
                                        <Pencil class="h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button
                                    v-if="!isSystemRole(role.name)"
                                    variant="ghost"
                                    size="icon"
                                    @click="openDeleteDialog(role)"
                                >
                                    <Trash2 class="h-4 w-4 text-destructive" />
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div class="flex flex-wrap items-center gap-3">
                            <div class="flex items-center gap-1.5 text-sm text-muted-foreground">
                                <Users class="h-4 w-4" />
                                <span>{{ role.users_count || 0 }} users</span>
                            </div>
                            <div class="flex items-center gap-1.5 text-sm text-muted-foreground">
                                <Key class="h-4 w-4" />
                                <span>{{ role.permissions?.length || role.permissions_count || 0 }} permissions</span>
                            </div>
                        </div>
                        <div v-if="isSystemRole(role.name)" class="mt-3">
                            <Badge variant="secondary">System Role</Badge>
                        </div>
                    </CardContent>
                </Card>
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
