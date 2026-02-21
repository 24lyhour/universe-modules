<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { UserPlus, ArrowLeft, Eye, EyeOff } from 'lucide-vue-next';
import { ref } from 'vue';
import type { BreadcrumbItem } from '@/types';
import type { Role } from '@/types/roles';

interface Props {
    roles: Role[];
}

const props = defineProps<Props>();

const breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/dashboard/settings' },
    { title: 'Users', href: '/dashboard/settings/users' },
    { title: 'Create', href: '/dashboard/settings/users/create' },
];

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const form = useForm({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    roles: [] as number[],
});

const toggleRole = (roleId: number) => {
    const index = form.roles.indexOf(roleId);
    if (index > -1) {
        form.roles.splice(index, 1);
    } else {
        form.roles.push(roleId);
    }
};

const handleSubmit = () => {
    form.post('/dashboard/settings/users');
};
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

            <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid gap-6 lg:grid-cols-3">
                    <!-- User Information -->
                    <Card class="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>User Information</CardTitle>
                            <CardDescription>Enter the basic information for the new user</CardDescription>
                        </CardHeader>
                        <CardContent class="space-y-4">
                            <div class="grid gap-4 sm:grid-cols-2">
                                <!-- Name -->
                                <div class="space-y-2">
                                    <Label for="name">Full Name <span class="text-destructive">*</span></Label>
                                    <Input
                                        id="name"
                                        v-model="form.name"
                                        placeholder="Enter full name"
                                        :class="{ 'border-destructive': form.errors.name }"
                                    />
                                    <p v-if="form.errors.name" class="text-sm text-destructive">
                                        {{ form.errors.name }}
                                    </p>
                                </div>

                                <!-- Email -->
                                <div class="space-y-2">
                                    <Label for="email">Email Address <span class="text-destructive">*</span></Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        v-model="form.email"
                                        placeholder="Enter email address"
                                        :class="{ 'border-destructive': form.errors.email }"
                                    />
                                    <p v-if="form.errors.email" class="text-sm text-destructive">
                                        {{ form.errors.email }}
                                    </p>
                                </div>

                                <!-- Phone -->
                                <div class="space-y-2">
                                    <Label for="phone">Phone Number</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        v-model="form.phone"
                                        placeholder="Enter phone number"
                                        :class="{ 'border-destructive': form.errors.phone }"
                                    />
                                    <p v-if="form.errors.phone" class="text-sm text-destructive">
                                        {{ form.errors.phone }}
                                    </p>
                                </div>
                            </div>

                            <div class="grid gap-4 sm:grid-cols-2">
                                <!-- Password -->
                                <div class="space-y-2">
                                    <Label for="password">Password <span class="text-destructive">*</span></Label>
                                    <div class="relative">
                                        <Input
                                            id="password"
                                            :type="showPassword ? 'text' : 'password'"
                                            v-model="form.password"
                                            placeholder="Enter password"
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
                                    <Label for="password_confirmation">Confirm Password <span class="text-destructive">*</span></Label>
                                    <div class="relative">
                                        <Input
                                            id="password_confirmation"
                                            :type="showConfirmPassword ? 'text' : 'password'"
                                            v-model="form.password_confirmation"
                                            placeholder="Confirm password"
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

                    <!-- Role Assignment -->
                    <Card class="lg:col-span-1">
                        <CardHeader>
                            <CardTitle>Assign Roles</CardTitle>
                            <CardDescription>Select roles for this user</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div class="space-y-3">
                                <div
                                    v-for="role in props.roles"
                                    :key="role.id"
                                    :class="[
                                        'flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors',
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
                            <p v-if="form.errors.roles" class="text-sm text-destructive mt-2">
                                {{ form.errors.roles }}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <!-- Actions -->
                <div class="flex items-center gap-4">
                    <Button type="submit" :disabled="form.processing || !form.name || !form.email || !form.password">
                        Create User
                    </Button>
                    <Button variant="outline" as-child>
                        <Link href="/dashboard/settings/users">Cancel</Link>
                    </Button>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
