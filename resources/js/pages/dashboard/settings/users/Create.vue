<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import UserForm from '@/pages/components/dashboard/v1/UserForm.vue';
import { UserPlus, ArrowLeft } from 'lucide-vue-next';
import type { BreadcrumbItem } from '@/types';
import type { Role } from '@/types/roles';
import type { AvailableTenants } from '@/types/tenant';

interface TenantFormData {
    tenant_type: string;
    tenant_id: number;
    is_primary: boolean;
}

interface Props {
    roles: Role[];
    availableTenants: AvailableTenants;
    currentUserTenants?: TenantFormData[];
    isSuperAdmin?: boolean;
}

defineProps<Props>();

const breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/dashboard/settings' },
    { title: 'Users', href: '/dashboard/settings/users' },
    { title: 'Create', href: '/dashboard/settings/users/create' },
];
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head title="Create User" />

        <div class="flex h-full flex-1 flex-col gap-6 p-6">
            <div class="flex items-center gap-4">
                <Button variant="ghost" size="icon" as-child>
                    <Link href="/dashboard/settings/users">
                        <ArrowLeft class="h-4 w-4" />
                    </Link>
                </Button>
                <div>
                    <h1 class="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <UserPlus class="h-6 w-6" />
                        Create New User
                    </h1>
                    <p class="text-muted-foreground">Add a new user to the system</p>
                </div>
            </div>

            <UserForm
                mode="create"
                :roles="roles"
                :available-tenants="availableTenants"
                :current-user-tenants="currentUserTenants"
                :is-super-admin="isSuperAdmin"
            >
                <template #cancel>
                    <Button variant="outline" as-child>
                        <Link href="/dashboard/settings/users">Cancel</Link>
                    </Button>
                </template>
            </UserForm>
        </div>
    </AppLayout>
</template>
