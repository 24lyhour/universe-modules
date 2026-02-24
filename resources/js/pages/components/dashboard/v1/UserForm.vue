<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Eye, EyeOff, Building2, School, Store, Mail, Calendar, Upload, User, X } from 'lucide-vue-next';
import { MediaLibraryModal } from '@/components/shared';
import { ref, computed, onMounted } from 'vue';
import { toast } from 'vue-sonner';
import type { Role } from '@/types/roles';
import type { AvailableTenants } from '@/types/tenant';

interface TenantFormData {
    tenant_type: string;
    tenant_id: number;
    is_primary: boolean;
}

interface UserData {
    id?: number;
    name: string;
    email: string;
    phone?: string;
    avatar?: string;
    created_at?: string;
    tenant_type?: string | null;
    tenant_id?: number | null;
    tenant_access?: Array<{ tenant_type: string; tenant_id: number }>;
    roles?: Array<{ id: number; name: string }>;
}

interface Props {
    mode: 'create' | 'edit';
    user?: UserData;
    roles: Role[];
    availableTenants: AvailableTenants;
    currentUserTenants?: TenantFormData[];
    isSuperAdmin?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    mode: 'create',
    isSuperAdmin: false,
});

const emit = defineEmits<{
    success: [];
}>();

const showPassword = ref(false);
const showConfirmPassword = ref(false);
const showMediaLibrary = ref(false);
const avatarPreview = ref<string | null>(props.user?.avatar || null);

// Build initial selected tenants
const getInitialSelectedTenants = (): string[] => {
    if (props.mode === 'edit' && props.user) {
        const selected: string[] = [];

        // Add primary tenant
        if (props.user.tenant_type && props.user.tenant_id) {
            selected.push(`${props.user.tenant_type}:${props.user.tenant_id}`);
        }

        // Add additional tenants from tenant_access
        if (props.user.tenant_access) {
            props.user.tenant_access.forEach(access => {
                const key = `${access.tenant_type}:${access.tenant_id}`;
                if (!selected.includes(key)) {
                    selected.push(key);
                }
            });
        }

        return selected;
    }

    return [];
};

const getInitialPrimaryTenant = (): string => {
    if (props.mode === 'edit' && props.user?.tenant_type && props.user?.tenant_id) {
        return `${props.user.tenant_type}:${props.user.tenant_id}`;
    }
    return '';
};

// Track selected tenants as string keys
const selectedTenants = ref<string[]>(getInitialSelectedTenants());
const primaryTenant = ref<string>(getInitialPrimaryTenant());

// Form data
const form = useForm({
    name: props.user?.name || '',
    email: props.user?.email || '',
    phone: props.user?.phone || '',
    avatar: props.user?.avatar || '',
    password: '',
    password_confirmation: '',
    roles: props.user?.roles?.map(r => r.id) || [] as number[],
    tenants: [] as TenantFormData[],
});

// Update form.tenants array
const updateFormTenants = () => {
    form.tenants = selectedTenants.value.map(t => {
        const [type, id] = t.split(':');
        return {
            tenant_type: type,
            tenant_id: parseInt(id),
            is_primary: t === primaryTenant.value,
        };
    });
};

// Initialize tenants on mount
onMounted(() => {
    if (props.mode === 'create' && props.currentUserTenants && props.currentUserTenants.length > 0) {
        // Auto-select current user's tenants for non-super-admin
        selectedTenants.value = props.currentUserTenants.map(
            t => `${t.tenant_type}:${t.tenant_id}`
        );

        const primary = props.currentUserTenants.find(t => t.is_primary);
        if (primary) {
            primaryTenant.value = `${primary.tenant_type}:${primary.tenant_id}`;
        } else if (props.currentUserTenants.length > 0) {
            primaryTenant.value = `${props.currentUserTenants[0].tenant_type}:${props.currentUserTenants[0].tenant_id}`;
        }
    }

    updateFormTenants();
});

const toggleRole = (roleId: number) => {
    const index = form.roles.indexOf(roleId);
    if (index > -1) {
        form.roles.splice(index, 1);
    } else {
        form.roles.push(roleId);
    }
};

// Check if a tenant is selected
const isTenantSelected = (type: string, id: number): boolean => {
    return selectedTenants.value.includes(`${type}:${id}`);
};

// Toggle tenant selection
const toggleTenant = (type: string, id: number) => {
    const key = `${type}:${id}`;
    const index = selectedTenants.value.indexOf(key);

    if (index > -1) {
        selectedTenants.value.splice(index, 1);
        if (primaryTenant.value === key) {
            primaryTenant.value = selectedTenants.value[0] || '';
        }
    } else {
        selectedTenants.value.push(key);
        if (!primaryTenant.value) {
            primaryTenant.value = key;
        }
    }

    updateFormTenants();
};

// Set a tenant as primary
const setPrimaryTenant = (type: string, id: number) => {
    const key = `${type}:${id}`;
    if (selectedTenants.value.includes(key)) {
        primaryTenant.value = key;
        updateFormTenants();
    }
};

// Get selected tenants count
const selectedTenantsCount = computed(() => selectedTenants.value.length);

// Check if there are any available tenants
const hasAvailableTenants = computed(() => {
    return (props.availableTenants?.schools?.length ?? 0) > 0 ||
           (props.availableTenants?.outlets?.length ?? 0) > 0;
});

// Check if tenants are required (non-super-admin with available tenants)
const tenantsRequired = computed(() => {
    return !props.isSuperAdmin && hasAvailableTenants.value;
});

// Check if form is valid
const isFormValid = computed(() => {
    if (props.mode === 'create') {
        const basicFieldsValid = form.name && form.email && form.password;
        const tenantsValid = !tenantsRequired.value || selectedTenants.value.length > 0;
        return basicFieldsValid && tenantsValid;
    }
    // Edit mode - password is optional
    return true;
});

// Avatar handling
const handleAvatarSelect = (urls: string[]) => {
    if (urls.length > 0) {
        form.avatar = urls[0];
        avatarPreview.value = urls[0];
    }
    showMediaLibrary.value = false;
};

const removeAvatar = () => {
    form.avatar = '';
    avatarPreview.value = null;
};

const openMediaLibrary = () => {
    showMediaLibrary.value = true;
};

const formatDate = (date?: string) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

const handleSubmit = () => {
    const successMessage = props.mode === 'create' ? 'User created successfully.' : 'User updated successfully.';
    const errorMessage = props.mode === 'create' ? 'Failed to create user.' : 'Failed to update user.';

    const options = {
        onSuccess: () => {
            toast.success(successMessage);
            emit('success');
        },
        onError: () => {
            toast.error(errorMessage);
        },
    };

    if (props.mode === 'create') {
        form.post('/dashboard/settings/users', options);
    } else {
        form.put(`/dashboard/settings/users/${props.user?.id}`, options);
    }
};
</script>

<template>
    <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid gap-6 lg:grid-cols-3">
            <!-- Left Column - User Information -->
            <Card class="lg:col-span-1">
                <CardHeader>
                    <CardTitle>User Information</CardTitle>
                    <CardDescription>
                        {{ mode === 'create' ? 'Enter basic user details' : 'View user details' }}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <!-- Avatar Upload Section -->
                    <div class="flex flex-col items-center text-center gap-4 mb-6">
                        <!-- Avatar preview/upload -->
                        <div class="relative group">
                            <div
                                v-if="avatarPreview"
                                class="h-24 w-24 overflow-hidden rounded-full"
                            >
                                <img
                                    :src="avatarPreview"
                                    alt="Avatar preview"
                                    class="h-full w-full object-cover"
                                />
                            </div>
                            <div
                                v-else
                                class="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10"
                            >
                                <User class="h-10 w-10 text-primary" />
                            </div>

                            <!-- Overlay buttons -->
                            <div class="absolute inset-0 flex items-center justify-center gap-1 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    class="h-8 w-8 text-white hover:bg-white/20"
                                    @click="openMediaLibrary"
                                >
                                    <Upload class="h-4 w-4" />
                                </Button>
                                <Button
                                    v-if="avatarPreview"
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    class="h-8 w-8 text-white hover:bg-white/20"
                                    @click="removeAvatar"
                                >
                                    <X class="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <p class="text-xs text-muted-foreground">Click to select avatar</p>
                        <p v-if="form.errors.avatar" class="text-xs text-destructive">
                            {{ form.errors.avatar }}
                        </p>

                        <!-- Media Library Modal -->
                        <MediaLibraryModal
                            v-model:open="showMediaLibrary"
                            :multiple="false"
                            :max-select="1"
                            accept="image/*"
                            @select="handleAvatarSelect"
                        />

                        <!-- Edit mode: Show user info -->
                        <div v-if="mode === 'edit' && user" class="space-y-2">
                            <h3 class="text-xl font-semibold">{{ user.name }}</h3>
                            <div class="flex items-center justify-center gap-2 text-muted-foreground">
                                <Mail class="h-4 w-4" />
                                <span class="text-sm">{{ user.email }}</span>
                            </div>
                            <div class="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                <Calendar class="h-4 w-4" />
                                <span>Joined {{ formatDate(user.created_at) }}</span>
                            </div>
                            <div class="flex flex-wrap justify-center gap-1 pt-2">
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
                    </div>

                    <!-- Form Fields -->
                    <div class="space-y-4">
                        <!-- Create Mode: Name, Email, Phone -->
                        <template v-if="mode === 'create'">
                            <!-- Name -->
                            <div class="space-y-2">
                                <Label for="name">Full Name <span class="text-destructive">*</span></Label>
                                <Input
                                    id="name"
                                    v-model="form.name"
                                    placeholder="Enter full name"
                                    :class="{ 'border-destructive': form.errors.name }"
                                />
                                <p v-if="form.errors.name" class="text-xs text-destructive">
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
                                <p v-if="form.errors.email" class="text-xs text-destructive">
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
                                <p v-if="form.errors.phone" class="text-xs text-destructive">
                                    {{ form.errors.phone }}
                                </p>
                            </div>
                        </template>

                        <!-- Password Fields (both modes) -->
                        <div class="space-y-4" :class="{ 'pt-4 border-t': mode === 'edit' }">
                            <p v-if="mode === 'edit'" class="text-sm text-muted-foreground">
                                Leave blank to keep current password
                            </p>

                            <!-- Password -->
                            <div class="space-y-2">
                                <Label for="password">
                                    {{ mode === 'create' ? 'Password' : 'New Password' }}
                                    <span v-if="mode === 'create'" class="text-destructive">*</span>
                                </Label>
                                <div class="relative">
                                    <Input
                                        id="password"
                                        :type="showPassword ? 'text' : 'password'"
                                        v-model="form.password"
                                        :placeholder="mode === 'create' ? 'Enter password' : 'Enter new password'"
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
                                <p v-if="form.errors.password" class="text-xs text-destructive">
                                    {{ form.errors.password }}
                                </p>
                            </div>

                            <!-- Confirm Password -->
                            <div class="space-y-2">
                                <Label for="password_confirmation">
                                    Confirm Password
                                    <span v-if="mode === 'create'" class="text-destructive">*</span>
                                </Label>
                                <div class="relative">
                                    <Input
                                        id="password_confirmation"
                                        :type="showConfirmPassword ? 'text' : 'password'"
                                        v-model="form.password_confirmation"
                                        :placeholder="mode === 'create' ? 'Confirm password' : 'Confirm new password'"
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
                    </div>
                </CardContent>
            </Card>

            <!-- Right Column - Stacked Cards -->
            <div class="lg:col-span-2 space-y-6">
                <!-- Organization Assignment -->
                <Card v-if="hasAvailableTenants">
                    <CardHeader>
                        <CardTitle class="flex items-center gap-2">
                            <Building2 class="h-5 w-5" />
                            Assign Organizations
                            <span v-if="tenantsRequired" class="text-destructive text-sm">*</span>
                        </CardTitle>
                        <CardDescription>
                            Select organizations this user can access. The primary organization is used by default.
                            <span class="font-medium">{{ selectedTenantsCount }} selected</span>
                            <span v-if="tenantsRequired" class="text-destructive block mt-1">At least one organization is required.</span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="space-y-4">
                            <!-- No Organization Option -->
                            <div
                                v-if="selectedTenantsCount === 0 && isSuperAdmin"
                                class="flex items-center gap-3 p-4 border rounded-lg bg-muted/30"
                            >
                                <Building2 class="h-5 w-5 text-muted-foreground" />
                                <div>
                                    <p class="font-medium">Global Access</p>
                                    <p class="text-sm text-muted-foreground">User can see all data (super-admin)</p>
                                </div>
                            </div>

                            <!-- Schools Section -->
                            <div v-if="availableTenants.schools?.length > 0" class="space-y-2">
                                <div class="flex items-center gap-2 text-primary font-semibold text-sm">
                                    <School class="h-4 w-4" />
                                    Schools
                                </div>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <div
                                        v-for="school in availableTenants.schools"
                                        :key="`school-${school.id}`"
                                        :class="[
                                            'flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors',
                                            isTenantSelected('School', school.id)
                                                ? 'bg-primary/5 border-primary'
                                                : 'hover:bg-muted/50'
                                        ]"
                                        @click="toggleTenant('School', school.id)"
                                    >
                                        <Checkbox
                                            :model-value="isTenantSelected('School', school.id)"
                                            @click.stop
                                            @update:model-value="toggleTenant('School', school.id)"
                                        />
                                        <School class="h-4 w-4 text-primary shrink-0" />
                                        <div class="flex-1 min-w-0">
                                            <p class="font-medium truncate">{{ school.label || school.name }}</p>
                                        </div>
                                        <Badge
                                            v-if="primaryTenant === `School:${school.id}`"
                                            variant="default"
                                            class="shrink-0"
                                        >
                                            Primary
                                        </Badge>
                                        <Button
                                            v-else-if="isTenantSelected('School', school.id)"
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            class="shrink-0 text-xs"
                                            @click.stop="setPrimaryTenant('School', school.id)"
                                        >
                                            Set Primary
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <!-- Outlets Section -->
                            <div v-if="availableTenants.outlets?.length > 0" class="space-y-2">
                                <div class="flex items-center gap-2 text-orange-500 font-semibold text-sm">
                                    <Store class="h-4 w-4" />
                                    Outlets
                                </div>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <div
                                        v-for="outlet in availableTenants.outlets"
                                        :key="`outlet-${outlet.id}`"
                                        :class="[
                                            'flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors',
                                            isTenantSelected('Outlet', outlet.id)
                                                ? 'bg-orange-50 border-orange-500 dark:bg-orange-950/20'
                                                : 'hover:bg-muted/50'
                                        ]"
                                        @click="toggleTenant('Outlet', outlet.id)"
                                    >
                                        <Checkbox
                                            :model-value="isTenantSelected('Outlet', outlet.id)"
                                            @click.stop
                                            @update:model-value="toggleTenant('Outlet', outlet.id)"
                                        />
                                        <Store class="h-4 w-4 text-orange-500 shrink-0" />
                                        <div class="flex-1 min-w-0">
                                            <p class="font-medium truncate">{{ outlet.label || outlet.name }}</p>
                                        </div>
                                        <Badge
                                            v-if="primaryTenant === `Outlet:${outlet.id}`"
                                            variant="default"
                                            class="shrink-0"
                                        >
                                            Primary
                                        </Badge>
                                        <Button
                                            v-else-if="isTenantSelected('Outlet', outlet.id)"
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            class="shrink-0 text-xs"
                                            @click.stop="setPrimaryTenant('Outlet', outlet.id)"
                                        >
                                            Set Primary
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Validation error -->
                        <p v-if="form.errors.tenants" class="text-sm text-destructive mt-4">
                            {{ form.errors.tenants }}
                        </p>
                    </CardContent>
                </Card>

                <!-- Role Assignment -->
                <Card>
                    <CardHeader>
                        <CardTitle>Assign Roles</CardTitle>
                        <CardDescription>Select the roles for this user</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                            <div
                                v-for="role in roles"
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
            </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-4">
            <Button type="submit" :disabled="form.processing || !isFormValid">
                <svg
                    v-if="form.processing"
                    class="mr-2 h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                    />
                    <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
                {{ form.processing ? (mode === 'create' ? 'Creating...' : 'Updating...') : (mode === 'create' ? 'Create User' : 'Update User') }}
            </Button>
            <slot name="cancel">
                <Button variant="outline" type="button">
                    Cancel
                </Button>
            </slot>
        </div>
    </form>
</template>
