<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, ArrowLeft, Mail, Calendar, Eye, EyeOff, Lock } from 'lucide-vue-next';
import { ref } from 'vue';
import type { BreadcrumbItem } from '@/types';
import type { Role } from '@/types/roles';
import type { UserWithRoles } from '@/types/users';

interface Props {
    user: UserWithRoles;
    roles: Role[];
}

const props = defineProps<Props>();

const breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/dashboard/settings' },
    { title: 'Users', href: '/dashboard/settings/users' },
    { title: 'Edit', href: `/dashboard/settings/users/${props.user.id}/edit` },
];

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const form = useForm({
    roles: props.user.roles?.map(r => r.id) || [],
    password: '',
    password_confirmation: '',
});

const getInitials = (name: string) => {
    return name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};

const toggleRole = (roleId: number) => {
    const index = form.roles.indexOf(roleId);
    if (index > -1) {
        form.roles.splice(index, 1);
    } else {
        form.roles.push(roleId);
    }
};

const handleSubmit = () => {
    form.put(`/dashboard/settings/users/${props.user.id}`);
};

const formatDate = (date?: string) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};
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

            <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid gap-6 lg:grid-cols-3">
                    <!-- User Information -->
                    <Card class="lg:col-span-1">
                        <CardHeader>
                            <CardTitle>User Information</CardTitle>
                            <CardDescription>View user details</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div class="flex flex-col items-center text-center gap-4">
                                <Avatar class="h-24 w-24">
                                    <AvatarImage v-if="user.avatar" :src="user.avatar" />
                                    <AvatarFallback class="text-3xl">{{ getInitials(user.name) }}</AvatarFallback>
                                </Avatar>
                                <div class="space-y-2">
                                    <h3 class="text-xl font-semibold">{{ user.name }}</h3>
                                    <div class="flex items-center justify-center gap-2 text-muted-foreground">
                                        <Mail class="h-4 w-4" />
                                        <span class="text-sm">{{ user.email }}</span>
                                    </div>
                                    <div class="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                        <Calendar class="h-4 w-4" />
                                        <span>Joined {{ formatDate(user.created_at) }}</span>
                                    </div>
                                </div>
                                <div class="flex flex-wrap justify-center gap-1">
                                    <Badge
                                        v-for="role in user.roles"
                                        :key="role.id"
                                        :variant="role.name === 'super-admin' ? 'default' : 'secondary'"
                                    >
                                        {{ role.name }}
                                    </Badge>
                                    <span v-if="!user.roles?.length" class="text-muted-foreground text-sm">
                                        No roles assigned
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div class="lg:col-span-2 space-y-6">
                        <!-- Role Assignment -->
                        <Card>
                            <CardHeader>
                                <CardTitle>Assign Roles</CardTitle>
                                <CardDescription>Select the roles for this user</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                                    <div
                                        v-for="role in props.roles"
                                        :key="role.id"
                                        :class="[
                                            'flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors',
                                            form.roles.includes(role.id) ? 'bg-primary/5 border-primary' : 'hover:bg-muted/50'
                                        ]"
                                        @click="toggleRole(role.id)"
                                    >
                                        <Checkbox
                                            :id="`role-${role.id}`"
                                            :model-value="form.roles.includes(role.id)"
                                            @click.stop
                                            @update:model-value="toggleRole(role.id)"
                                        />
                                        <div class="flex-1 min-w-0">
                                            <Label :for="`role-${role.id}`" class="cursor-pointer font-medium capitalize">
                                                {{ role.name.replace('-', ' ') }}
                                            </Label>
                                            <p v-if="role.permissions_count" class="text-xs text-muted-foreground">
                                                {{ role.permissions_count }} permissions
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p v-if="form.errors.roles" class="text-sm text-destructive mt-4">
                                    {{ form.errors.roles }}
                                </p>
                            </CardContent>
                        </Card>

                        <!-- Change Password -->
                        <Card>
                            <CardHeader>
                                <CardTitle class="flex items-center gap-2">
                                    <Lock class="h-5 w-5" />
                                    Change Password
                                </CardTitle>
                                <CardDescription>Leave blank to keep the current password</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div class="grid gap-4 sm:grid-cols-2">
                                    <!-- New Password -->
                                    <div class="space-y-2">
                                        <Label for="password">New Password</Label>
                                        <div class="relative">
                                            <Input
                                                id="password"
                                                :type="showPassword ? 'text' : 'password'"
                                                v-model="form.password"
                                                placeholder="Enter new password"
                                                autocomplete="new-password"
                                                :class="{ 'border-destructive': form.errors.password }"
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                class="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                                                @click="showPassword = !showPassword"
                                            >
                                                <Eye v-if="!showPassword" class="h-4 w-4 text-muted-foreground" />
                                                <EyeOff v-else class="h-4 w-4 text-muted-foreground" />
                                            </Button>
                                        </div>
                                        <p v-if="form.errors.password" class="text-sm text-destructive">
                                            {{ form.errors.password }}
                                        </p>
                                    </div>

                                    <!-- Confirm Password -->
                                    <div class="space-y-2">
                                        <Label for="password_confirmation">Confirm Password</Label>
                                        <div class="relative">
                                            <Input
                                                id="password_confirmation"
                                                :type="showConfirmPassword ? 'text' : 'password'"
                                                v-model="form.password_confirmation"
                                                placeholder="Confirm new password"
                                                autocomplete="new-password"
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                class="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                                                @click="showConfirmPassword = !showConfirmPassword"
                                            >
                                                <Eye v-if="!showConfirmPassword" class="h-4 w-4 text-muted-foreground" />
                                                <EyeOff v-else class="h-4 w-4 text-muted-foreground" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <!-- Actions -->
                <div class="flex items-center gap-4">
                    <Button type="submit" :disabled="form.processing">
                        Update User
                    </Button>
                    <Button variant="outline" as-child>
                        <Link href="/dashboard/settings/users">Cancel</Link>
                    </Button>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
