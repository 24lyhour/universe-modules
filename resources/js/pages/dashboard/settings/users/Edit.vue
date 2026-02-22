<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import UserForm from '@/pages/components/dashboard/v1/UserForm.vue';
import { Users, ArrowLeft } from 'lucide-vue-next';
import type { BreadcrumbItem } from '@/types';
import type { UserEditProps } from '@/types/users';

const props = defineProps<UserEditProps>();

const breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/dashboard/settings' },
    { title: 'Users', href: '/dashboard/settings/users' },
    { title: 'Edit', href: `/dashboard/settings/users/${props.user.id}/edit` },
];
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head :title="`Edit User: ${user.name}`" />

        <div class="flex h-full flex-1 flex-col gap-6 p-6">
            <div class="flex items-center gap-4">
                <Button variant="ghost" size="icon" as-child>
                    <Link href="/dashboard/settings/users">
                        <ArrowLeft class="h-4 w-4" />
                    </Link>
                </Button>
                <div>
                    <h1 class="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <Users class="h-6 w-6" />
                        Edit User
                    </h1>
                    <p class="text-muted-foreground">Manage roles and password for this user</p>
                </div>
            </div>

            <UserForm
                mode="edit"
                :user="user"
                :roles="roles"
                :available-tenants="availableTenants"
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
