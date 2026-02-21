<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
    Shield,
    ArrowLeft,
    ChevronDown,
    Users,
    GraduationCap,
    FileText,
    Building2,
    Hotel,
    UserCircle,
    MonitorPlay,
    Store,
    Briefcase,
    UtensilsCrossed,
    Wallet,
    Package,
    CalendarDays,
    ShoppingCart,
    CreditCard,
    BarChart3,
    Settings,
    LayoutDashboard,
    MoreHorizontal,
} from 'lucide-vue-next';
import { ref, computed } from 'vue';
import type { BreadcrumbItem } from '@/types';
import type { Role, Permission, HierarchicalGroupedPermissions } from '@/types/roles';

interface Props {
    role: Role;
    groupedPermissions: HierarchicalGroupedPermissions;
}

const props = defineProps<Props>();

const breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/dashboard/settings' },
    { title: 'Roles', href: '/dashboard/settings/roles' },
    { title: 'Edit', href: `/dashboard/settings/roles/${props.role.id}/edit` },
];

// Module icons mapping
const moduleIcons: Record<string, any> = {
    'Employee': Users,
    'School': GraduationCap,
    'Blog': FileText,
    'Company': Building2,
    'Hotel': Hotel,
    'Customer': UserCircle,
    'Movie': MonitorPlay,
    'Outlet': Store,
    'Portfolio': Briefcase,
    'Menu': UtensilsCrossed,
    'Wallets': Wallet,
    'Product': Package,
    'Booking': CalendarDays,
    'Order': ShoppingCart,
    'Payment': CreditCard,
    'Report': BarChart3,
    'User Management': Shield,
    'Settings': Settings,
    'Dashboard': LayoutDashboard,
    'Other': MoreHorizontal,
};

// Track expanded state for modules
const expandedModules = ref<Record<string, boolean>>({});

// Initialize all as collapsed
Object.keys(props.groupedPermissions).forEach(module => {
    expandedModules.value[module] = false;
});

const form = useForm({
    name: props.role.name,
    permissions: props.role.permissions?.map(p => p.id) || [],
});

const toggleModule = (module: string) => {
    expandedModules.value[module] = !expandedModules.value[module];
};

const togglePermission = (permissionId: number) => {
    const index = form.permissions.indexOf(permissionId);
    if (index > -1) {
        form.permissions.splice(index, 1);
    } else {
        form.permissions.push(permissionId);
    }
};

// Get all permission IDs for a module
const getModulePermissionIds = (module: string): number[] => {
    const moduleData = props.groupedPermissions[module];
    if (!moduleData) return [];

    const ids: number[] = [];
    Object.values(moduleData.resources).forEach(permissions => {
        permissions.forEach(p => ids.push(p.id));
    });
    return ids;
};

// Get all permission IDs for a resource
const getResourcePermissionIds = (module: string, resource: string): number[] => {
    const moduleData = props.groupedPermissions[module];
    if (!moduleData || !moduleData.resources[resource]) return [];
    return moduleData.resources[resource].map(p => p.id);
};

// Toggle all permissions in a module
const toggleModulePermissions = (module: string) => {
    const modulePermissionIds = getModulePermissionIds(module);
    const allSelected = modulePermissionIds.every(id => form.permissions.includes(id));

    if (allSelected) {
        form.permissions = form.permissions.filter(id => !modulePermissionIds.includes(id));
    } else {
        modulePermissionIds.forEach(id => {
            if (!form.permissions.includes(id)) {
                form.permissions.push(id);
            }
        });
    }
};

// Toggle all permissions in a resource
const toggleResourcePermissions = (module: string, resource: string) => {
    const resourcePermissionIds = getResourcePermissionIds(module, resource);
    const allSelected = resourcePermissionIds.every(id => form.permissions.includes(id));

    if (allSelected) {
        form.permissions = form.permissions.filter(id => !resourcePermissionIds.includes(id));
    } else {
        resourcePermissionIds.forEach(id => {
            if (!form.permissions.includes(id)) {
                form.permissions.push(id);
            }
        });
    }
};

// Check if all permissions in a module are selected
const isModuleFullySelected = (module: string) => {
    const modulePermissionIds = getModulePermissionIds(module);
    return modulePermissionIds.length > 0 && modulePermissionIds.every(id => form.permissions.includes(id));
};

// Check if some (but not all) permissions in a module are selected
const isModulePartiallySelected = (module: string) => {
    const modulePermissionIds = getModulePermissionIds(module);
    const selectedCount = modulePermissionIds.filter(id => form.permissions.includes(id)).length;
    return selectedCount > 0 && selectedCount < modulePermissionIds.length;
};

// Check if all permissions in a resource are selected
const isResourceFullySelected = (module: string, resource: string) => {
    const resourcePermissionIds = getResourcePermissionIds(module, resource);
    return resourcePermissionIds.length > 0 && resourcePermissionIds.every(id => form.permissions.includes(id));
};

// Check if some (but not all) permissions in a resource are selected
const isResourcePartiallySelected = (module: string, resource: string) => {
    const resourcePermissionIds = getResourcePermissionIds(module, resource);
    const selectedCount = resourcePermissionIds.filter(id => form.permissions.includes(id)).length;
    return selectedCount > 0 && selectedCount < resourcePermissionIds.length;
};

// Get selected count for a module
const getModuleSelectedCount = (module: string) => {
    const modulePermissionIds = getModulePermissionIds(module);
    return modulePermissionIds.filter(id => form.permissions.includes(id)).length;
};

// Get selected count for a resource
const getResourceSelectedCount = (module: string, resource: string) => {
    const resourcePermissionIds = getResourcePermissionIds(module, resource);
    return resourcePermissionIds.filter(id => form.permissions.includes(id)).length;
};

const formatName = (name: string) => {
    return name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

const formatAction = (action: string) => {
    const actionMap: Record<string, string> = {
        'view': 'View',
        'view_any': 'View All',
        'create': 'Create',
        'update': 'Update',
        'delete': 'Delete',
        'restore': 'Restore',
        'force_delete': 'Force Delete',
    };
    return actionMap[action] || formatName(action);
};

const handleSubmit = () => {
    form.put(`/dashboard/settings/roles/${props.role.id}`);
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head :title="`Edit Role: ${role.name}`" />

        <div class="flex h-full flex-1 flex-col gap-6 p-6">
            <div class="flex items-center gap-4">
                <Button variant="ghost" size="icon" as-child>
                    <Link href="/dashboard/settings/roles">
                        <ArrowLeft class="h-4 w-4" />
                    </Link>
                </Button>
                <div>
                    <h1 class="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <Shield class="h-6 w-6" />
                        Edit Role: {{ role.name }}
                    </h1>
                    <p class="text-muted-foreground">Update role information and permissions</p>
                </div>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
                <!-- Role Name -->
                <Card>
                    <CardHeader>
                        <CardTitle>Role Information</CardTitle>
                        <CardDescription>Update the basic information for this role</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="space-y-2 max-w-md">
                            <Label for="name">Role Name</Label>
                            <Input
                                id="name"
                                v-model="form.name"
                                placeholder="Enter role name (e.g., editor, moderator)"
                                :disabled="role.name === 'super-admin'"
                            />
                            <p v-if="form.errors.name" class="text-sm text-destructive">{{ form.errors.name }}</p>
                            <p v-if="role.name === 'super-admin'" class="text-sm text-muted-foreground">
                                The super-admin role name cannot be changed.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <!-- Permissions -->
                <Card>
                    <CardHeader>
                        <CardTitle>Permissions</CardTitle>
                        <CardDescription>
                            {{ role.name === 'super-admin' ? 'Super-admin has all permissions by default' : 'Select the permissions for this role' }}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div v-if="role.name === 'super-admin'" class="text-sm text-muted-foreground">
                            The super-admin role automatically has all permissions and cannot be modified.
                        </div>
                        <div v-else class="space-y-4">
                            <!-- Module Cards -->
                            <Collapsible
                                v-for="(moduleData, module) in props.groupedPermissions"
                                :key="module"
                                v-model:open="expandedModules[module]"
                                class="rounded-lg border bg-card"
                            >
                                <!-- Module Header -->
                                <CollapsibleTrigger class="w-full">
                                    <div class="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors rounded-t-lg">
                                        <div class="flex items-center gap-3">
                                            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                                <component :is="moduleIcons[module] || MoreHorizontal" class="h-5 w-5 text-primary" />
                                            </div>
                                            <div class="text-left">
                                                <div class="font-semibold">{{ module }}</div>
                                                <div class="text-xs text-muted-foreground">
                                                    {{ Object.keys(moduleData.resources).length }} resources
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-3">
                                            <Badge
                                                :variant="isModuleFullySelected(module) ? 'default' : isModulePartiallySelected(module) ? 'secondary' : 'outline'"
                                                class="font-mono"
                                            >
                                                {{ getModuleSelectedCount(module) }}/{{ moduleData.totalPermissions }}
                                            </Badge>
                                            <Checkbox
                                                :model-value="isModuleFullySelected(module)"
                                                :indeterminate="isModulePartiallySelected(module)"
                                                @click.stop
                                                @update:model-value="toggleModulePermissions(module)"
                                            />
                                            <ChevronDown
                                                class="h-4 w-4 transition-transform duration-200"
                                                :class="{ 'rotate-180': expandedModules[module] }"
                                            />
                                        </div>
                                    </div>
                                </CollapsibleTrigger>

                                <!-- Module Content - Resources -->
                                <CollapsibleContent>
                                    <div class="border-t px-4 pb-4 pt-2 space-y-3">
                                        <div
                                            v-for="(permissions, resource) in moduleData.resources"
                                            :key="resource"
                                            class="rounded-md border bg-muted/30 overflow-hidden"
                                        >
                                            <!-- Resource Header -->
                                            <div class="flex items-center justify-between px-4 py-3 bg-muted/50">
                                                <div class="flex items-center gap-3">
                                                    <Checkbox
                                                        :model-value="isResourceFullySelected(module, resource)"
                                                        :indeterminate="isResourcePartiallySelected(module, resource)"
                                                        @update:model-value="toggleResourcePermissions(module, resource)"
                                                    />
                                                    <span class="font-medium text-sm">{{ formatName(resource) }}</span>
                                                </div>
                                                <Badge variant="outline" class="text-xs">
                                                    {{ getResourceSelectedCount(module, resource) }}/{{ permissions.length }}
                                                </Badge>
                                            </div>

                                            <!-- Permissions Grid -->
                                            <div class="px-4 py-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2">
                                                <label
                                                    v-for="permission in permissions"
                                                    :key="permission.id"
                                                    :for="`perm-${permission.id}`"
                                                    class="flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer hover:bg-background transition-colors"
                                                    :class="{
                                                        'bg-primary/10 text-primary': form.permissions.includes(permission.id),
                                                        'bg-background/50': !form.permissions.includes(permission.id)
                                                    }"
                                                >
                                                    <Checkbox
                                                        :id="`perm-${permission.id}`"
                                                        :model-value="form.permissions.includes(permission.id)"
                                                        @update:model-value="togglePermission(permission.id)"
                                                        class="h-3.5 w-3.5"
                                                    />
                                                    <span class="text-xs font-medium">
                                                        {{ formatAction(permission.action || '') }}
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        </div>
                    </CardContent>
                </Card>

                <!-- Actions -->
                <div class="flex items-center gap-4">
                    <Button
                        type="submit"
                        :disabled="form.processing || !form.name || role.name === 'super-admin'"
                    >
                        Update Role
                    </Button>
                    <Button variant="outline" as-child>
                        <Link href="/dashboard/settings/roles">Cancel</Link>
                    </Button>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
