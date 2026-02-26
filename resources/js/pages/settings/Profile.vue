<script setup lang="ts">
import { useForm, Head, Link, usePage } from '@inertiajs/vue3';
import { ref, computed } from 'vue';

import DeleteUser from '@/components/DeleteUser.vue';
import InputError from '@/components/InputError.vue';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useInitials } from '@/composables/useInitials';
import AppLayout from '@/layouts/AppLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { type BreadcrumbItem, type User, type Tenant } from '@/types';
import {
    CalendarDays,
    Mail,
    Shield,
    CheckCircle,
    XCircle,
    User as UserIcon,
    Building2,
    Clock,
    Key,
} from 'lucide-vue-next';

interface Props {
    mustVerifyEmail: boolean;
    status?: string;
}

defineProps<Props>();

const breadcrumbItems: BreadcrumbItem[] = [
    {
        title: 'Profile settings',
        href: '/settings/profile',
    },
];

const page = usePage();
const user = page.props.auth.user as User;
const roles = page.props.auth.roles as string[];
const permissions = page.props.auth.permissions as string[];
const tenant = page.props.tenant as Tenant;
const { getInitials } = useInitials();

// Format date
const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

const memberSince = computed(() => formatDate(user.created_at));
const lastUpdated = computed(() => formatDateTime(user.updated_at));

const form = useForm({
    name: user.name,
});

const recentlySuccessful = ref(false);

const submit = () => {
    form.patch('/settings/profile', {
        preserveScroll: true,
        onSuccess: () => {
            recentlySuccessful.value = true;
            setTimeout(() => {
                recentlySuccessful.value = false;
            }, 2000);
        },
    });
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head title="Profile settings" />

        <SettingsLayout>
            <!-- Profile Overview Card -->
            <Card class="mb-6">
                <CardContent class="pt-6">
                    <div class="flex flex-col md:flex-row items-start gap-6">
                        <!-- Avatar -->
                        <div class="flex flex-col items-center gap-2">
                            <Avatar class="h-24 w-24 border-4 border-primary/10">
                                <AvatarImage v-if="user.avatar" :src="user.avatar" :alt="user.name" />
                                <AvatarFallback class="text-3xl bg-primary/10 text-primary">
                                    {{ getInitials(user.name) }}
                                </AvatarFallback>
                            </Avatar>
                            <Badge variant="outline" class="text-xs">
                                ID: {{ user.id }}
                            </Badge>
                        </div>

                        <!-- User Info -->
                        <div class="flex-1 space-y-4">
                            <div>
                                <h2 class="text-2xl font-bold tracking-tight">{{ user.name }}</h2>
                                <div class="flex items-center gap-2 text-muted-foreground mt-1">
                                    <Mail class="h-4 w-4" />
                                    <span>{{ user.email }}</span>
                                    <Badge
                                        v-if="user.email_verified_at"
                                        variant="default"
                                        class="bg-green-500/10 text-green-600 border-green-500/20"
                                    >
                                        <CheckCircle class="h-3 w-3 mr-1" />
                                        Verified
                                    </Badge>
                                    <Badge
                                        v-else
                                        variant="default"
                                        class="bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                                    >
                                        <XCircle class="h-3 w-3 mr-1" />
                                        Unverified
                                    </Badge>
                                </div>
                            </div>

                            <!-- Info Grid -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                <!-- Member Since -->
                                <div class="flex items-center gap-2 p-2 rounded-md bg-muted/50">
                                    <CalendarDays class="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p class="text-muted-foreground text-xs">Member Since</p>
                                        <p class="font-medium">{{ memberSince }}</p>
                                    </div>
                                </div>

                                <!-- Last Updated -->
                                <div class="flex items-center gap-2 p-2 rounded-md bg-muted/50">
                                    <Clock class="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p class="text-muted-foreground text-xs">Last Updated</p>
                                        <p class="font-medium">{{ lastUpdated }}</p>
                                    </div>
                                </div>

                                <!-- Tenant -->
                                <div v-if="tenant.has_tenant" class="flex items-center gap-2 p-2 rounded-md bg-muted/50">
                                    <Building2 class="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p class="text-muted-foreground text-xs">Organization</p>
                                        <p class="font-medium">{{ tenant.tenant_name || 'N/A' }}</p>
                                    </div>
                                </div>

                                <!-- Permissions Count -->
                                <div class="flex items-center gap-2 p-2 rounded-md bg-muted/50">
                                    <Key class="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p class="text-muted-foreground text-xs">Permissions</p>
                                        <p class="font-medium">{{ permissions.length }} assigned</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Roles -->
                            <div v-if="roles.length > 0" class="flex items-center gap-2 flex-wrap">
                                <Shield class="h-4 w-4 text-muted-foreground" />
                                <span class="text-sm text-muted-foreground">Roles:</span>
                                <Badge
                                    v-for="role in roles"
                                    :key="role"
                                    variant="secondary"
                                    class="capitalize"
                                >
                                    {{ role }}
                                </Badge>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <!-- Edit Profile Form -->
            <Card class="mt-6">
                <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                        <UserIcon class="h-5 w-5" />
                        Edit Profile
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form @submit.prevent="submit" class="space-y-6">
                        <div class="grid gap-2">
                            <Label for="name">Full Name</Label>
                            <Input
                                id="name"
                                v-model="form.name"
                                class="block w-full"
                                required
                                autocomplete="name"
                                placeholder="Enter your full name"
                            />
                            <InputError class="mt-2" :message="form.errors.name" />
                        </div>

                        <div v-if="mustVerifyEmail && !user.email_verified_at" class="p-3 rounded-md bg-yellow-500/10 border border-yellow-500/20">
                            <p class="text-sm text-yellow-700 dark:text-yellow-400">
                                Your email address is unverified.
                                <Link
                                    href="/email/verification-notification"
                                    method="post"
                                    as="button"
                                    class="font-medium underline underline-offset-4 hover:text-yellow-800 dark:hover:text-yellow-300"
                                >
                                    Click here to resend the verification email.
                                </Link>
                            </p>

                            <div
                                v-if="status === 'verification-link-sent'"
                                class="mt-2 text-sm font-medium text-green-600"
                            >
                                A new verification link has been sent to your email address.
                            </div>
                        </div>

                        <div class="flex items-center gap-4">
                            <Button
                                type="submit"
                                :disabled="form.processing"
                                data-test="update-profile-button"
                            >
                                Save Changes
                            </Button>

                            <Transition
                                enter-active-class="transition ease-in-out"
                                enter-from-class="opacity-0"
                                leave-active-class="transition ease-in-out"
                                leave-to-class="opacity-0"
                            >
                                <p
                                    v-show="recentlySuccessful"
                                    class="text-sm text-green-600"
                                >
                                    Saved!
                                </p>
                            </Transition>
                        </div>
                    </form>
                </CardContent>
            </Card>

            <DeleteUser />
        </SettingsLayout>
    </AppLayout>
</template>
