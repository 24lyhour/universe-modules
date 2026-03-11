<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
    Shield,
    ArrowLeft,
    ChevronDown,
    ChevronUp,
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
    Key,
    CheckCircle2,
    XCircle,
    Sparkles,
    Search,
    ChevronsUpDown,
} from 'lucide-vue-next';
import { ref, computed, watch } from 'vue';
import type { BreadcrumbItem } from '@/types';
import type { HierarchicalGroupedPermissions } from '@/types/roles';

interface Props {
    groupedPermissions: HierarchicalGroupedPermissions;
}

const props = defineProps<Props>();

const breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/dashboard/settings' },
    { title: 'Roles', href: '/dashboard/settings/roles' },
    { title: 'Create', href: '/dashboard/settings/roles/create' },
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
    name: '',
    permissions: [] as number[],
});

// Search query for permissions
const searchQuery = ref('');

// Expand all modules
const expandAll = () => {
    Object.keys(props.groupedPermissions).forEach(module => {
        expandedModules.value[module] = true;
    });
};

// Collapse all modules
const collapseAll = () => {
    Object.keys(props.groupedPermissions).forEach(module => {
        expandedModules.value[module] = false;
    });
};

// Filter permissions based on search
const filteredGroupedPermissions = computed(() => {
    if (!searchQuery.value.trim()) {
        return props.groupedPermissions;
    }

    const query = searchQuery.value.toLowerCase();
    const filtered: typeof props.groupedPermissions = {};

    Object.entries(props.groupedPermissions).forEach(([module, moduleData]) => {
        const filteredResources: typeof moduleData.resources = {};
        let totalPermissions = 0;

        Object.entries(moduleData.resources).forEach(([resource, permissions]) => {
            const matchingPermissions = permissions.filter(p => {
                const actionName = formatAction(p.action || '').toLowerCase();
                const resourceName = formatName(resource).toLowerCase();
                const moduleName = module.toLowerCase();
                return actionName.includes(query) || resourceName.includes(query) || moduleName.includes(query);
            });

            if (matchingPermissions.length > 0) {
                filteredResources[resource] = matchingPermissions;
                totalPermissions += matchingPermissions.length;
            }
        });

        if (Object.keys(filteredResources).length > 0) {
            filtered[module] = {
                resources: filteredResources,
                totalPermissions,
            };
        }
    });

    return filtered;
});

// Auto-expand modules when searching
watch(searchQuery, (newQuery) => {
    if (newQuery.trim()) {
        Object.keys(filteredGroupedPermissions.value).forEach(module => {
            expandedModules.value[module] = true;
        });
    }
});

// Calculate total permissions
const totalPermissions = computed(() => {
    return Object.values(props.groupedPermissions).reduce((sum, module) => sum + module.totalPermissions, 0);
});

// Calculate progress percentage
const progressPercentage = computed(() => {
    return totalPermissions.value > 0 ? (form.permissions.length / totalPermissions.value) * 100 : 0;
});

// Get selected modules summary
const selectedModulesSummary = computed(() => {
    const summary: { module: string; count: number; total: number }[] = [];
    Object.entries(props.groupedPermissions).forEach(([module, data]) => {
        const moduleIds = getModulePermissionIds(module);
        const selectedCount = moduleIds.filter(id => form.permissions.includes(id)).length;
        if (selectedCount > 0) {
            summary.push({ module, count: selectedCount, total: data.totalPermissions });
        }
    });
    return summary;
});

// Select all permissions
const selectAllPermissions = () => {
    const allIds: number[] = [];
    Object.values(props.groupedPermissions).forEach(moduleData => {
        Object.values(moduleData.resources).forEach(permissions => {
            permissions.forEach(p => allIds.push(p.id));
        });
    });
    form.permissions = allIds;
};

// Clear all permissions
const clearAllPermissions = () => {
    form.permissions = [];
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
        'export_reports': 'Export Reports',
        'view_analytics': 'View Analytics',
        'manage': 'Manage',
        'view_logs': 'View Logs',
        // Dashboard widget permissions
        'customer': 'Customer Widget',
        'menu': 'Menu Widget',
        'outlet': 'Outlet Widget',
        'product': 'Product Widget',
        'order': 'Order Widget',
        'wallets': 'Wallets Widget',
        'employee': 'Employee Widget',
        'school': 'School Widget',
    };
    return actionMap[action] || formatName(action);
};

const handleSubmit = () => {
    form.post('/dashboard/settings/roles');
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head title="Create Role" />

        <div class="flex h-full flex-1 flex-col gap-6 p-6">
            <!-- Header -->
            <div class="flex items-center gap-4">
                <Button variant="ghost" size="icon" as-child>
                    <Link href="/dashboard/settings/roles">
                        <ArrowLeft class="h-4 w-4" />
                    </Link>
                </Button>
                <div class="flex-1">
                    <h1 class="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <Shield class="h-6 w-6" />
                        Create New Role
                    </h1>
                    <p class="text-muted-foreground">Create a new role and assign permissions</p>
                </div>
            </div>

            <form @submit.prevent="handleSubmit">
                <div class="grid gap-6 lg:grid-cols-3">
                    <!-- Main Content - 2 columns -->
                    <div class="lg:col-span-2 space-y-6">
                        <!-- Role Name -->
                        <Card>
                            <CardHeader>
                                <CardTitle class="flex items-center gap-2">
                                    <Sparkles class="h-5 w-5" />
                                    Role Information
                                </CardTitle>
                                <CardDescription>Enter the basic information for this role</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div class="space-y-2">
                                    <Label for="name">Role Name</Label>
                                    <Input
                                        id="name"
                                        v-model="form.name"
                                        placeholder="Enter role name (e.g., editor, moderator)"
                                        class="max-w-md"
                                    />
                                    <p v-if="form.errors.name" class="text-sm text-destructive">{{ form.errors.name }}</p>
                                </div>
                            </CardContent>
                        </Card>

                        <!-- Permissions -->
                        <Card>
                            <CardHeader class="space-y-4">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <CardTitle class="flex items-center gap-2">
                                            <Key class="h-5 w-5" />
                                            Permissions
                                        </CardTitle>
                                        <CardDescription>Select the permissions for this role</CardDescription>
                                    </div>
                                    <div class="flex gap-2">
                                        <Button type="button" variant="outline" size="sm" @click="selectAllPermissions">
                                            <CheckCircle2 class="h-4 w-4 mr-1" />
                                            Select All
                                        </Button>
                                        <Button type="button" variant="outline" size="sm" @click="clearAllPermissions">
                                            <XCircle class="h-4 w-4 mr-1" />
                                            Clear All
                                        </Button>
                                    </div>
                                </div>

                                <!-- Search & Expand/Collapse Controls -->
                                <div class="flex flex-col sm:flex-row gap-3">
                                    <div class="relative flex-1">
                                        <Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                        <Input
                                            v-model="searchQuery"
                                            placeholder="Search permissions..."
                                            class="pl-9"
                                        />
                                    </div>
                                    <div class="flex gap-2">
                                        <Button type="button" variant="outline" size="sm" @click="expandAll">
                                            <ChevronsUpDown class="h-4 w-4 mr-1" />
                                            Expand All
                                        </Button>
                                        <Button type="button" variant="outline" size="sm" @click="collapseAll">
                                            <ChevronUp class="h-4 w-4 mr-1" />
                                            Collapse
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <!-- No results message -->
                                <div v-if="Object.keys(filteredGroupedPermissions).length === 0" class="text-center py-8 text-muted-foreground">
                                    <Search class="h-8 w-8 mx-auto mb-2 opacity-50" />
                                    <p>No permissions found for "{{ searchQuery }}"</p>
                                </div>

                                <ScrollArea v-else class="h-[500px] pr-4">
                                <div class="space-y-4">
                                    <!-- Module Cards -->
                                    <Collapsible
                                        v-for="(moduleData, module) in filteredGroupedPermissions"
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
                                                    <div class="px-4 py-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
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
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    </div>

                    <!-- Sidebar - 1 column -->
                    <div class="space-y-6">
                        <!-- Summary Card -->
                        <Card class="sticky top-6">
                            <CardHeader>
                                <CardTitle class="flex items-center gap-2">
                                    <BarChart3 class="h-5 w-5" />
                                    Summary
                                </CardTitle>
                            </CardHeader>
                            <CardContent class="space-y-4">
                                <!-- Progress -->
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between text-sm">
                                        <span class="text-muted-foreground">Permissions Selected</span>
                                        <span class="font-mono font-medium">{{ form.permissions.length }}/{{ totalPermissions }}</span>
                                    </div>
                                    <Progress :model-value="progressPercentage" class="h-2" />
                                </div>

                                <hr class="border-border" />

                                <!-- Selected Modules -->
                                <div class="space-y-3">
                                    <h4 class="text-sm font-medium">Selected Modules</h4>
                                    <div v-if="selectedModulesSummary.length === 0" class="text-sm text-muted-foreground py-2">
                                        No permissions selected yet
                                    </div>
                                    <ScrollArea v-else class="h-[200px]">
                                        <div class="space-y-2 pr-4">
                                            <div
                                                v-for="item in selectedModulesSummary"
                                                :key="item.module"
                                                class="flex items-center justify-between p-2 rounded-md bg-muted/50"
                                            >
                                                <div class="flex items-center gap-2">
                                                    <component
                                                        :is="moduleIcons[item.module] || MoreHorizontal"
                                                        class="h-4 w-4 text-primary"
                                                    />
                                                    <span class="text-sm font-medium">{{ item.module }}</span>
                                                </div>
                                                <Badge variant="secondary" class="font-mono text-xs">
                                                    {{ item.count }}/{{ item.total }}
                                                </Badge>
                                            </div>
                                        </div>
                                    </ScrollArea>
                                </div>

                                <hr class="border-border" />

                                <!-- Actions -->
                                <div class="space-y-2">
                                    <Button type="submit" class="w-full" :disabled="form.processing || !form.name">
                                        <Shield class="h-4 w-4 mr-2" />
                                        Create Role
                                    </Button>
                                    <Button variant="outline" class="w-full" as-child>
                                        <Link href="/dashboard/settings/roles">Cancel</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
