<script setup lang="ts">
import { Head, router, useForm } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { StatsCard } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    LayoutGrid, CheckCircle, XCircle, Grid2X2, List, BarChart3, PieChart,
    AreaChart, LineChart, Users, UtensilsCrossed, Store, Package, GripVertical,
    Wallet, Shield, Plus, Pencil, Trash2, Search, Key, ChevronDown, ChevronRight,
    Mail, Calendar, Settings2
} from 'lucide-vue-next';
import { ref, watch } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import type { BreadcrumbItem } from '@/types';

// Types
interface Widget {
    id: number;
    name: string;
    description: string | null;
    module: string;
    type: string;
    chart_type: string | null;
    sort_order: number;
    status: boolean;
}

interface Permission {
    id: number;
    name: string;
    action: string;
}

interface Role {
    id: number;
    name: string;
    guard_name: string;
    permissions: { id: number; name: string }[];
    users_count: number;
    created_at: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    roles: { id: number; name: string }[];
    created_at: string;
}

interface WidgetStats {
    total: number;
    active: number;
    inactive: number;
}

interface Props {
    widgetItems: Widget[];
    widgetStats: WidgetStats;
    currentStatus: string | null;
    activeTab: string;
    roleItems: Role[];
    groupedPermissions: Record<string, Permission[]>;
    userItems: {
        data: User[];
        meta?: {
            current_page: number;
            last_page: number;
            per_page: number;
            total: number;
        };
        links?: {
            first: string;
            last: string;
            prev: string | null;
            next: string | null;
        };
    };
    roleList: { id: number; name: string }[];
    filters: {
        user_search: string | null;
        role_filter: string | null;
    };
    canManageRoles: boolean;
    canManageUsers: boolean;
}

const props = defineProps<Props>();

const breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/dashboard/settings' },
];

// Tab state
const currentTab = ref(props.activeTab || 'widgets');

// Widget constants
const chartTypeIcons: Record<string, any> = {
    stats: LayoutGrid,
    bar: BarChart3,
    donut: PieChart,
    area: AreaChart,
    line: LineChart,
};

const chartTypeLabels: Record<string, string> = {
    stats: 'Statistics',
    bar: 'Bar Chart',
    donut: 'Donut Chart',
    area: 'Area Chart',
    line: 'Line Chart',
};

const moduleIcons: Record<string, any> = {
    Customer: Users,
    Menu: UtensilsCrossed,
    Outlet: Store,
    Product: Package,
    Wallet: Wallet,
};

// Widget state
const viewMode = ref<'grid' | 'list'>('grid');
const groupedWidgets = ref<Record<string, Widget[]>>({});

// Role state
const showCreateRoleDialog = ref(false);
const showEditRoleDialog = ref(false);
const showDeleteRoleDialog = ref(false);
const selectedRole = ref<Role | null>(null);
const expandedModules = ref<Record<string, boolean>>({});

const roleForm = useForm({
    name: '',
    permissions: [] as number[],
});

const editRoleForm = useForm({
    name: '',
    permissions: [] as number[],
});

// User state
const userSearchQuery = ref(props.filters.user_search || '');
const selectedRoleFilter = ref(props.filters.role_filter || '');
const showEditUserDialog = ref(false);
const selectedUser = ref<User | null>(null);

const userRoleForm = useForm({
    roles: [] as number[],
});

// Initialize grouped widgets
const initializeGroupedWidgets = () => {
    const groups: Record<string, Widget[]> = {};
    props.widgetItems.forEach(widget => {
        if (!groups[widget.module]) {
            groups[widget.module] = [];
        }
        groups[widget.module].push({ ...widget });
    });
    Object.keys(groups).forEach(module => {
        groups[module].sort((a, b) => a.sort_order - b.sort_order);
    });
    groupedWidgets.value = groups;
};

initializeGroupedWidgets();

// Initialize expanded modules
Object.keys(props.groupedPermissions).forEach(module => {
    expandedModules.value[module] = false;
});

watch(() => props.widgetItems, () => {
    initializeGroupedWidgets();
}, { deep: true });

// Widget handlers
const handleStatusChange = (widget: Widget, status: boolean) => {
    router.patch(`/dashboard/settings/widgets/${widget.id}`, { status }, {
        preserveScroll: true,
    });
};

const handleWidgetTabChange = (value: string) => {
    const status = value === 'all' ? null : value;
    router.get('/dashboard/settings', { status, tab: 'widgets' }, {
        preserveState: true,
        preserveScroll: true,
    });
};

const handleDragEnd = (module: string) => {
    const widgets = groupedWidgets.value[module];
    if (!widgets) return;

    const updatedWidgets = widgets.map((widget, index) => ({
        id: widget.id,
        sort_order: index + 1,
    }));

    widgets.forEach((widget, index) => {
        widget.sort_order = index + 1;
    });

    router.post('/dashboard/settings/widgets/order', { widgets: updatedWidgets }, {
        preserveScroll: true,
        preserveState: true,
    });
};

const isModuleActive = (module: string) => {
    const widgets = groupedWidgets.value[module] || [];
    return widgets.some(w => w.status);
};

const isModuleFullyActive = (module: string) => {
    const widgets = groupedWidgets.value[module] || [];
    return widgets.length > 0 && widgets.every(w => w.status);
};

const handleModuleToggle = (module: string, status: boolean) => {
    router.post('/dashboard/settings/widgets/toggle-module', { module, status }, {
        preserveScroll: true,
    });
};

// Role handlers
const toggleModule = (module: string) => {
    expandedModules.value[module] = !expandedModules.value[module];
};

const openCreateRoleDialog = () => {
    roleForm.reset();
    showCreateRoleDialog.value = true;
};

const openEditRoleDialog = (role: Role) => {
    selectedRole.value = role;
    editRoleForm.name = role.name;
    editRoleForm.permissions = role.permissions.map(p => p.id);
    showEditRoleDialog.value = true;
};

const openDeleteRoleDialog = (role: Role) => {
    selectedRole.value = role;
    showDeleteRoleDialog.value = true;
};

const handleCreateRole = () => {
    roleForm.post('/dashboard/settings/roles', {
        onSuccess: () => {
            showCreateRoleDialog.value = false;
            roleForm.reset();
        },
    });
};

const handleUpdateRole = () => {
    if (!selectedRole.value) return;
    editRoleForm.put(`/dashboard/settings/roles/${selectedRole.value.id}`, {
        onSuccess: () => {
            showEditRoleDialog.value = false;
            selectedRole.value = null;
        },
    });
};

const handleDeleteRole = () => {
    if (!selectedRole.value) return;
    router.delete(`/dashboard/settings/roles/${selectedRole.value.id}`, {
        onSuccess: () => {
            showDeleteRoleDialog.value = false;
            selectedRole.value = null;
        },
    });
};

const togglePermission = (formRef: typeof roleForm | typeof editRoleForm, permissionId: number) => {
    const index = formRef.permissions.indexOf(permissionId);
    if (index > -1) {
        formRef.permissions.splice(index, 1);
    } else {
        formRef.permissions.push(permissionId);
    }
};

const toggleModulePermissions = (formRef: typeof roleForm | typeof editRoleForm, module: string) => {
    const modulePermissions = props.groupedPermissions[module] || [];
    const modulePermissionIds = modulePermissions.map(p => p.id);
    const allSelected = modulePermissionIds.every(id => formRef.permissions.includes(id));

    if (allSelected) {
        formRef.permissions = formRef.permissions.filter(id => !modulePermissionIds.includes(id));
    } else {
        modulePermissionIds.forEach(id => {
            if (!formRef.permissions.includes(id)) {
                formRef.permissions.push(id);
            }
        });
    }
};

const isModulePermissionFullySelected = (formRef: typeof roleForm | typeof editRoleForm, module: string) => {
    const modulePermissions = props.groupedPermissions[module] || [];
    return modulePermissions.every(p => formRef.permissions.includes(p.id));
};

const isModulePermissionPartiallySelected = (formRef: typeof roleForm | typeof editRoleForm, module: string) => {
    const modulePermissions = props.groupedPermissions[module] || [];
    const selectedCount = modulePermissions.filter(p => formRef.permissions.includes(p.id)).length;
    return selectedCount > 0 && selectedCount < modulePermissions.length;
};

const formatModuleName = (module: string) => {
    return module.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

const isSystemRole = (roleName: string) => {
    return ['super-admin', 'admin', 'manager', 'staff', 'employee', 'viewer'].includes(roleName);
};

// User handlers
const handleUserSearch = () => {
    router.get('/dashboard/settings', {
        tab: 'users',
        user_search: userSearchQuery.value || undefined,
        role_filter: selectedRoleFilter.value || undefined,
    }, {
        preserveState: true,
        preserveScroll: true,
    });
};

const handleRoleFilter = (value: string | number | boolean | bigint | Record<string, unknown> | null | undefined) => {
    const strValue = String(value ?? '');
    selectedRoleFilter.value = strValue === 'all' ? '' : strValue;
    handleUserSearch();
};

const openEditUserDialog = (user: User) => {
    selectedUser.value = user;
    userRoleForm.roles = user.roles.map(r => r.id);
    showEditUserDialog.value = true;
};

const handleUpdateUserRoles = () => {
    if (!selectedUser.value) return;
    userRoleForm.put(`/dashboard/settings/users/${selectedUser.value.id}/roles`, {
        onSuccess: () => {
            showEditUserDialog.value = false;
            selectedUser.value = null;
        },
    });
};

const toggleUserRole = (roleId: number) => {
    const index = userRoleForm.roles.indexOf(roleId);
    if (index > -1) {
        userRoleForm.roles.splice(index, 1);
    } else {
        userRoleForm.roles.push(roleId);
    }
};

const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
};

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
};

const getRoleBadgeVariant = (roleName: string): 'default' | 'secondary' | 'destructive' | 'outline' => {
    switch (roleName) {
        case 'super-admin': return 'destructive';
        case 'admin': return 'default';
        case 'manager': return 'secondary';
        default: return 'outline';
    }
};

const handlePageChange = (url: string | null) => {
    if (url) {
        router.get(url, {}, { preserveState: true, preserveScroll: true });
    }
};

const handleMainTabChange = (value: string) => {
    currentTab.value = value;
    router.get('/dashboard/settings', { tab: value }, {
        preserveState: true,
        preserveScroll: true,
    });
};

const currentWidgetTab = props.currentStatus || 'all';

let searchTimeout: ReturnType<typeof setTimeout>;
watch(userSearchQuery, () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => handleUserSearch(), 300);
});
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head title="Settings" />

        <div class="flex h-full flex-1 flex-col gap-6 p-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <Settings2 class="h-6 w-6" />
                        Settings
                    </h1>
                    <p class="text-muted-foreground">Manage dashboard widgets, roles, and user permissions</p>
                </div>
            </div>

            <!-- Main Tabs -->
            <Tabs :model-value="currentTab" @update:model-value="handleMainTabChange" class="w-full">
                <TabsList class="grid w-full max-w-md" :class="[props.canManageRoles && props.canManageUsers ? 'grid-cols-3' : props.canManageRoles || props.canManageUsers ? 'grid-cols-2' : 'grid-cols-1']">
                    <TabsTrigger value="widgets">
                        <LayoutGrid class="mr-2 h-4 w-4" />
                        Widgets
                    </TabsTrigger>
                    <TabsTrigger v-if="props.canManageRoles" value="roles">
                        <Shield class="mr-2 h-4 w-4" />
                        Roles
                    </TabsTrigger>
                    <TabsTrigger v-if="props.canManageUsers" value="users">
                        <Users class="mr-2 h-4 w-4" />
                        Users
                    </TabsTrigger>
                </TabsList>

                <!-- Widgets Tab -->
                <TabsContent value="widgets" class="space-y-6 mt-6">
                    <div class="grid gap-4 md:grid-cols-3">
                        <StatsCard title="Total" :value="props.widgetStats.total" :icon="LayoutGrid" />
                        <StatsCard title="Active" :value="props.widgetStats.active" :icon="CheckCircle" icon-color="text-green-500" />
                        <StatsCard title="Inactive" :value="props.widgetStats.inactive" :icon="XCircle" icon-color="text-red-500" />
                    </div>

                    <div class="flex items-center justify-between">
                        <Tabs :default-value="currentWidgetTab" @update:model-value="handleWidgetTabChange">
                            <TabsList>
                                <TabsTrigger value="all">
                                    <LayoutGrid class="mr-2 h-4 w-4" />
                                    All Widgets
                                </TabsTrigger>
                                <TabsTrigger value="active">
                                    <CheckCircle class="mr-2 h-4 w-4" />
                                    Active
                                </TabsTrigger>
                                <TabsTrigger value="inactive">
                                    <XCircle class="mr-2 h-4 w-4" />
                                    Inactive
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>

                        <div class="flex items-center gap-1 rounded-md border p-1">
                            <button :class="['rounded p-1.5 transition-colors', viewMode === 'grid' ? 'bg-muted' : 'hover:bg-muted/50']" @click="viewMode = 'grid'">
                                <Grid2X2 class="h-4 w-4" />
                            </button>
                            <button :class="['rounded p-1.5 transition-colors', viewMode === 'list' ? 'bg-muted' : 'hover:bg-muted/50']" @click="viewMode = 'list'">
                                <List class="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <div class="space-y-8">
                        <div v-for="(widgets, module) in groupedWidgets" :key="module" class="space-y-4">
                            <div class="flex items-center justify-between rounded-lg bg-muted/50 p-4">
                                <div class="flex items-center gap-3">
                                    <component :is="moduleIcons[module] || LayoutGrid" class="h-6 w-6" />
                                    <div>
                                        <h2 class="text-lg font-semibold">{{ module }}</h2>
                                        <p class="text-sm text-muted-foreground">{{ widgets.filter(w => w.status).length }}/{{ widgets.length }} widgets active</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-4">
                                    <div class="flex items-center gap-2">
                                        <span :class="['h-2.5 w-2.5 rounded-full', isModuleActive(module) ? 'bg-green-500' : 'bg-red-500']" />
                                        <span class="text-sm font-medium">{{ isModuleActive(module) ? 'Tab Visible' : 'Tab Hidden' }}</span>
                                    </div>
                                    <div class="flex flex-col items-end gap-1">
                                        <Switch :model-value="isModuleFullyActive(module)" @update:model-value="(value: boolean) => handleModuleToggle(module, value)" />
                                        <span class="text-xs text-muted-foreground">Toggle All</span>
                                    </div>
                                </div>
                            </div>

                            <VueDraggable v-model="groupedWidgets[module as string]" :class="[viewMode === 'grid' ? 'grid gap-4 md:grid-cols-2 lg:grid-cols-3' : 'flex flex-col gap-3']" handle=".drag-handle" ghost-class="opacity-50" :animation="200" @end="() => handleDragEnd(module as string)">
                                <Card v-for="widget in groupedWidgets[module as string]" :key="widget.id" class="relative group">
                                    <div class="drag-handle absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity active:cursor-grabbing">
                                        <GripVertical class="h-5 w-5 text-muted-foreground" />
                                    </div>
                                    <div class="absolute right-3 top-3">
                                        <Badge variant="secondary" class="text-xs">{{ widget.sort_order }}</Badge>
                                    </div>
                                    <CardHeader class="pb-3 pl-10">
                                        <div class="flex items-center gap-2">
                                            <component :is="chartTypeIcons[widget.chart_type || 'stats']" class="h-5 w-5 text-muted-foreground" />
                                            <CardTitle class="text-base">{{ widget.name }}</CardTitle>
                                        </div>
                                        <p v-if="widget.description" class="text-sm text-muted-foreground mt-1">{{ widget.description }}</p>
                                        <div class="flex flex-wrap items-center gap-2 pt-2">
                                            <Badge variant="outline">{{ widget.type }}</Badge>
                                            <Badge v-if="widget.chart_type" variant="default">{{ chartTypeLabels[widget.chart_type] || widget.chart_type }}</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent class="pl-10">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center gap-2">
                                                <span :class="['h-2 w-2 rounded-full', widget.status ? 'bg-green-500' : 'bg-red-500']" />
                                                <span class="text-sm text-muted-foreground">{{ widget.status ? 'Active' : 'Inactive' }}</span>
                                            </div>
                                            <Switch :model-value="widget.status" @update:model-value="(value: boolean) => handleStatusChange(widget, value)" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </VueDraggable>
                        </div>
                    </div>

                    <p v-if="props.widgetItems.length === 0" class="text-center text-muted-foreground py-8">No widgets found</p>
                </TabsContent>

                <!-- Roles Tab -->
                <TabsContent v-if="props.canManageRoles" value="roles" class="space-y-6 mt-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <h2 class="text-xl font-semibold">Roles Management</h2>
                            <p class="text-sm text-muted-foreground">Manage user roles and their permissions</p>
                        </div>
                        <Button @click="openCreateRoleDialog">
                            <Plus class="mr-2 h-4 w-4" />
                            Create Role
                        </Button>
                    </div>

                    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card v-for="role in props.roleItems" :key="role.id" class="relative">
                            <CardHeader class="pb-3">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <Shield class="h-5 w-5 text-primary" />
                                        <CardTitle class="text-lg capitalize">{{ role.name.replace('-', ' ') }}</CardTitle>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <Button variant="ghost" size="icon" @click="openEditRoleDialog(role)">
                                            <Pencil class="h-4 w-4" />
                                        </Button>
                                        <Button v-if="!isSystemRole(role.name)" variant="ghost" size="icon" @click="openDeleteRoleDialog(role)">
                                            <Trash2 class="h-4 w-4 text-destructive" />
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div class="flex flex-wrap items-center gap-3">
                                    <div class="flex items-center gap-1.5 text-sm text-muted-foreground">
                                        <Users class="h-4 w-4" />
                                        <span>{{ role.users_count }} users</span>
                                    </div>
                                    <div class="flex items-center gap-1.5 text-sm text-muted-foreground">
                                        <Key class="h-4 w-4" />
                                        <span>{{ role.permissions.length }} permissions</span>
                                    </div>
                                </div>
                                <div v-if="isSystemRole(role.name)" class="mt-3">
                                    <Badge variant="secondary">System Role</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <p v-if="props.roleItems.length === 0" class="text-center text-muted-foreground py-8">No roles found</p>
                </TabsContent>

                <!-- Users Tab -->
                <TabsContent v-if="props.canManageUsers" value="users" class="space-y-6 mt-6">
                    <div>
                        <h2 class="text-xl font-semibold">User Role Management</h2>
                        <p class="text-sm text-muted-foreground">Assign and manage roles for users</p>
                    </div>

                    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div class="relative flex-1 max-w-sm">
                            <Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input v-model="userSearchQuery" placeholder="Search users..." class="pl-9" />
                        </div>
                        <Select :model-value="selectedRoleFilter || 'all'" @update:model-value="handleRoleFilter">
                            <SelectTrigger class="w-[180px]">
                                <SelectValue placeholder="Filter by role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Roles</SelectItem>
                                <SelectItem v-for="role in props.roleList" :key="role.id" :value="role.name">
                                    {{ role.name.replace('-', ' ') }}
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Card>
                        <CardHeader class="pb-3">
                            <CardTitle class="flex items-center gap-2">
                                <Users class="h-5 w-5" />
                                Users ({{ props.userItems.meta?.total || props.userItems.data?.length || 0 }})
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>User</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Roles</TableHead>
                                        <TableHead>Joined</TableHead>
                                        <TableHead class="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow v-for="user in props.userItems.data" :key="user.id">
                                        <TableCell>
                                            <div class="flex items-center gap-3">
                                                <Avatar>
                                                    <AvatarImage v-if="user.avatar" :src="user.avatar" />
                                                    <AvatarFallback>{{ getInitials(user.name) }}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p class="font-medium">{{ user.name }}</p>
                                                    <p v-if="user.email_verified_at" class="text-xs text-green-600">Verified</p>
                                                    <p v-else class="text-xs text-muted-foreground">Not verified</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div class="flex items-center gap-1.5 text-muted-foreground">
                                                <Mail class="h-4 w-4" />
                                                {{ user.email }}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div class="flex flex-wrap gap-1">
                                                <Badge v-for="role in user.roles" :key="role.id" :variant="getRoleBadgeVariant(role.name)" class="capitalize">
                                                    {{ role.name.replace('-', ' ') }}
                                                </Badge>
                                                <span v-if="user.roles.length === 0" class="text-muted-foreground text-sm">No roles</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div class="flex items-center gap-1.5 text-muted-foreground text-sm">
                                                <Calendar class="h-4 w-4" />
                                                {{ formatDate(user.created_at) }}
                                            </div>
                                        </TableCell>
                                        <TableCell class="text-right">
                                            <Button variant="ghost" size="sm" @click="openEditUserDialog(user)">
                                                <Pencil class="mr-2 h-4 w-4" />
                                                Edit Roles
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>

                            <p v-if="!props.userItems.data || props.userItems.data.length === 0" class="text-center text-muted-foreground py-8">No users found</p>

                            <div v-if="props.userItems.meta && props.userItems.meta.last_page > 1" class="flex items-center justify-between mt-4">
                                <p class="text-sm text-muted-foreground">
                                    Showing {{ (props.userItems.meta.current_page - 1) * props.userItems.meta.per_page + 1 }}
                                    to {{ Math.min(props.userItems.meta.current_page * props.userItems.meta.per_page, props.userItems.meta.total) }}
                                    of {{ props.userItems.meta.total }} users
                                </p>
                                <div class="flex gap-2">
                                    <Button variant="outline" size="sm" :disabled="!props.userItems.links?.prev" @click="handlePageChange(props.userItems.links?.prev ?? null)">Previous</Button>
                                    <Button variant="outline" size="sm" :disabled="!props.userItems.links?.next" @click="handlePageChange(props.userItems.links?.next ?? null)">Next</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>

        <!-- Create Role Dialog -->
        <Dialog v-model:open="showCreateRoleDialog">
            <DialogContent class="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Create New Role</DialogTitle>
                    <DialogDescription>Create a new role and assign permissions</DialogDescription>
                </DialogHeader>
                <div class="space-y-4">
                    <div class="space-y-2">
                        <Label for="role-name">Role Name</Label>
                        <Input id="role-name" v-model="roleForm.name" placeholder="Enter role name" />
                    </div>
                    <div class="space-y-2">
                        <Label>Permissions</Label>
                        <ScrollArea class="h-[300px] rounded-md border p-4">
                            <div class="space-y-4">
                                <div v-for="(permissions, module) in props.groupedPermissions" :key="module" class="space-y-2">
                                    <div class="flex items-center justify-between cursor-pointer p-2 rounded hover:bg-muted" @click="toggleModule(module)">
                                        <div class="flex items-center gap-2">
                                            <component :is="expandedModules[module] ? ChevronDown : ChevronRight" class="h-4 w-4" />
                                            <Checkbox :model-value="isModulePermissionFullySelected(roleForm, module)" :indeterminate="isModulePermissionPartiallySelected(roleForm, module)" @click.stop @update:model-value="toggleModulePermissions(roleForm, module)" />
                                            <span class="font-medium">{{ formatModuleName(module) }}</span>
                                            <Badge variant="outline" class="ml-2">{{ permissions.filter(p => roleForm.permissions.includes(p.id)).length }}/{{ permissions.length }}</Badge>
                                        </div>
                                    </div>
                                    <div v-if="expandedModules[module]" class="ml-8 grid grid-cols-2 gap-2">
                                        <div v-for="permission in permissions" :key="permission.id" class="flex items-center gap-2">
                                            <Checkbox :id="`create-perm-${permission.id}`" :model-value="roleForm.permissions.includes(permission.id)" @update:model-value="togglePermission(roleForm, permission.id)" />
                                            <Label :for="`create-perm-${permission.id}`" class="text-sm font-normal cursor-pointer">{{ permission.action }}</Label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" @click="showCreateRoleDialog = false">Cancel</Button>
                    <Button @click="handleCreateRole" :disabled="roleForm.processing">Create Role</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

        <!-- Edit Role Dialog -->
        <Dialog v-model:open="showEditRoleDialog">
            <DialogContent class="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Edit Role: {{ selectedRole?.name }}</DialogTitle>
                    <DialogDescription>Update role name and permissions</DialogDescription>
                </DialogHeader>
                <div class="space-y-4">
                    <div class="space-y-2">
                        <Label for="edit-role-name">Role Name</Label>
                        <Input id="edit-role-name" v-model="editRoleForm.name" placeholder="Enter role name" :disabled="selectedRole?.name === 'super-admin'" />
                    </div>
                    <div class="space-y-2">
                        <Label>Permissions</Label>
                        <ScrollArea class="h-[300px] rounded-md border p-4">
                            <div class="space-y-4">
                                <div v-for="(permissions, module) in props.groupedPermissions" :key="module" class="space-y-2">
                                    <div class="flex items-center justify-between cursor-pointer p-2 rounded hover:bg-muted" @click="toggleModule(module)">
                                        <div class="flex items-center gap-2">
                                            <component :is="expandedModules[module] ? ChevronDown : ChevronRight" class="h-4 w-4" />
                                            <Checkbox :model-value="isModulePermissionFullySelected(editRoleForm, module)" :indeterminate="isModulePermissionPartiallySelected(editRoleForm, module)" @click.stop @update:model-value="toggleModulePermissions(editRoleForm, module)" />
                                            <span class="font-medium">{{ formatModuleName(module) }}</span>
                                            <Badge variant="outline" class="ml-2">{{ permissions.filter(p => editRoleForm.permissions.includes(p.id)).length }}/{{ permissions.length }}</Badge>
                                        </div>
                                    </div>
                                    <div v-if="expandedModules[module]" class="ml-8 grid grid-cols-2 gap-2">
                                        <div v-for="permission in permissions" :key="permission.id" class="flex items-center gap-2">
                                            <Checkbox :id="`edit-perm-${permission.id}`" :model-value="editRoleForm.permissions.includes(permission.id)" @update:model-value="togglePermission(editRoleForm, permission.id)" />
                                            <Label :for="`edit-perm-${permission.id}`" class="text-sm font-normal cursor-pointer">{{ permission.action }}</Label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" @click="showEditRoleDialog = false">Cancel</Button>
                    <Button @click="handleUpdateRole" :disabled="editRoleForm.processing">Update Role</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

        <!-- Delete Role Dialog -->
        <AlertDialog v-model:open="showDeleteRoleDialog">
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Delete Role</AlertDialogTitle>
                    <AlertDialogDescription>Are you sure you want to delete the role "{{ selectedRole?.name }}"? This action cannot be undone.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction @click="handleDeleteRole" class="bg-destructive text-destructive-foreground hover:bg-destructive/90">Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

        <!-- Edit User Roles Dialog -->
        <Dialog v-model:open="showEditUserDialog">
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit User Roles</DialogTitle>
                    <DialogDescription>Assign roles to {{ selectedUser?.name }}</DialogDescription>
                </DialogHeader>
                <div class="space-y-4">
                    <div class="flex items-center gap-3 p-3 bg-muted rounded-lg">
                        <Avatar>
                            <AvatarImage v-if="selectedUser?.avatar" :src="selectedUser.avatar" />
                            <AvatarFallback>{{ selectedUser ? getInitials(selectedUser.name) : '' }}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p class="font-medium">{{ selectedUser?.name }}</p>
                            <p class="text-sm text-muted-foreground">{{ selectedUser?.email }}</p>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <Label>Roles</Label>
                        <div class="space-y-2 p-4 border rounded-lg">
                            <div v-for="role in props.roleList" :key="role.id" class="flex items-center gap-3 p-2 rounded hover:bg-muted cursor-pointer" @click="toggleUserRole(role.id)">
                                <Checkbox :id="`user-role-${role.id}`" :model-value="userRoleForm.roles.includes(role.id)" @update:model-value="toggleUserRole(role.id)" />
                                <div class="flex items-center gap-2">
                                    <Shield class="h-4 w-4 text-muted-foreground" />
                                    <Label :for="`user-role-${role.id}`" class="cursor-pointer capitalize">{{ role.name.replace('-', ' ') }}</Label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" @click="showEditUserDialog = false">Cancel</Button>
                    <Button @click="handleUpdateUserRoles" :disabled="userRoleForm.processing || userRoleForm.roles.length === 0">Update Roles</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </AppLayout>
</template>
