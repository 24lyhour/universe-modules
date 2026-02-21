<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Shield, ArrowLeft, ChevronDown, ChevronRight } from 'lucide-vue-next';
import { ref } from 'vue';
import type { BreadcrumbItem } from '@/types';
import type { Permission, GroupedPermissions } from '@/types/roles';

interface Props {
    groupedPermissions: GroupedPermissions;
}

const props = defineProps<Props>();

const breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/dashboard/settings' },
    { title: 'Roles', href: '/dashboard/settings/roles' },
    { title: 'Create', href: '/dashboard/settings/roles/create' },
];

const expandedModules = ref<Record<string, boolean>>({});

// Initialize all modules as collapsed
Object.keys(props.groupedPermissions).forEach(module => {
    expandedModules.value[module] = false;
});

const form = useForm({
    name: '',
    permissions: [] as number[],
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

const toggleModulePermissions = (module: string) => {
    const modulePermissions = props.groupedPermissions[module] || [];
    const modulePermissionIds = modulePermissions.map(p => p.id);
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

const isModuleFullySelected = (module: string) => {
    const modulePermissions = props.groupedPermissions[module] || [];
    return modulePermissions.every(p => form.permissions.includes(p.id));
};

const isModulePartiallySelected = (module: string) => {
    const modulePermissions = props.groupedPermissions[module] || [];
    const selectedCount = modulePermissions.filter(p => form.permissions.includes(p.id)).length;
    return selectedCount > 0 && selectedCount < modulePermissions.length;
};

const formatModuleName = (module: string) => {
    return module.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

const handleSubmit = () => {
    form.post('/dashboard/settings/roles');
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head title="Create Role" />

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
                        Create New Role
                    </h1>
                    <p class="text-muted-foreground">Create a new role and assign permissions</p>
                </div>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
                <!-- Role Name -->
                <Card>
                    <CardHeader>
                        <CardTitle>Role Information</CardTitle>
                        <CardDescription>Enter the basic information for this role</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="space-y-2 max-w-md">
                            <Label for="name">Role Name</Label>
                            <Input id="name" v-model="form.name" placeholder="Enter role name (e.g., editor, moderator)" />
                            <p v-if="form.errors.name" class="text-sm text-destructive">{{ form.errors.name }}</p>
                        </div>
                    </CardContent>
                </Card>

                <!-- Permissions -->
                <Card>
                    <CardHeader>
                        <CardTitle>Permissions</CardTitle>
                        <CardDescription>Select the permissions for this role</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="space-y-2">
                            <div v-for="(permissions, module) in props.groupedPermissions" :key="module" class="border rounded-lg">
                                <div
                                    class="flex items-center justify-between cursor-pointer p-4 hover:bg-muted/50"
                                    @click="toggleModule(module)"
                                >
                                    <div class="flex items-center gap-3">
                                        <component :is="expandedModules[module] ? ChevronDown : ChevronRight" class="h-4 w-4" />
                                        <Checkbox
                                            :model-value="isModuleFullySelected(module)"
                                            :indeterminate="isModulePartiallySelected(module)"
                                            @click.stop
                                            @update:model-value="toggleModulePermissions(module)"
                                        />
                                        <span class="font-medium">{{ formatModuleName(module) }}</span>
                                    </div>
                                    <Badge variant="outline">
                                        {{ permissions.filter(p => form.permissions.includes(p.id)).length }}/{{ permissions.length }}
                                    </Badge>
                                </div>
                                <div v-if="expandedModules[module]" class="px-4 pb-4 pt-2 border-t bg-muted/30">
                                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                        <div v-for="permission in permissions" :key="permission.id" class="flex items-center gap-2">
                                            <Checkbox
                                                :id="`perm-${permission.id}`"
                                                :model-value="form.permissions.includes(permission.id)"
                                                @update:model-value="togglePermission(permission.id)"
                                            />
                                            <Label :for="`perm-${permission.id}`" class="text-sm font-normal cursor-pointer">
                                                {{ permission.action }}
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- Actions -->
                <div class="flex items-center gap-4">
                    <Button type="submit" :disabled="form.processing || !form.name">
                        Create Role
                    </Button>
                    <Button variant="outline" as-child>
                        <Link href="/dashboard/settings/roles">Cancel</Link>
                    </Button>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
