<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { StatsCard } from '@/components/shared';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LayoutGrid, CheckCircle, XCircle, Grid2X2, List, BarChart3, PieChart, AreaChart, LineChart, Users, UtensilsCrossed, Store, Package, GripVertical, Wallet, ChevronRight, Settings } from 'lucide-vue-next';
import { ref, watch } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import type { BreadcrumbItem } from '@/types';

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

interface Stats {
    total: number;
    active: number;
    inactive: number;
}

interface Props {
    widgetItems: Widget[];
    stats: Stats;
    currentStatus: string | null;
}

const props = defineProps<Props>();

const breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/dashboard/settings' },
];

const viewMode = ref<'grid' | 'list'>('grid');

const handleStatusChange = (widget: Widget, status: boolean) => {
    router.patch(`/dashboard/settings/widgets/${widget.id}`, {
        status,
    }, {
        preserveScroll: true,
    });
};

const handleTabChange = (value: string) => {
    const status = value === 'all' ? null : value;
    router.get('/dashboard/settings', status ? { status } : {}, {
        preserveState: true,
        preserveScroll: true,
    });
};

const currentTab = props.currentStatus || 'all';

// Module icons mapping
const moduleIcons: Record<string, any> = {
    Customer: Users,
    Menu: UtensilsCrossed,
    Outlet: Store,
    Product: Package,
    Wallet: Wallet,
};

// Group widgets by module - use ref for drag-and-drop
const groupedWidgets = ref<Record<string, Widget[]>>({});

// Initialize grouped widgets from props
const initializeGroupedWidgets = () => {
    const groups: Record<string, Widget[]> = {};
    props.widgetItems.forEach(widget => {
        if (!groups[widget.module]) {
            groups[widget.module] = [];
        }
        groups[widget.module].push({ ...widget });
    });
    // Sort by sort_order within each group
    Object.keys(groups).forEach(module => {
        groups[module].sort((a, b) => a.sort_order - b.sort_order);
    });
    groupedWidgets.value = groups;
};

// Initialize on mount
initializeGroupedWidgets();

// Watch for prop changes (e.g., after status filter)
watch(() => props.widgetItems, () => {
    initializeGroupedWidgets();
}, { deep: true });

// Handle drag end - update sort order
const handleDragEnd = (module: string) => {
    const widgets = groupedWidgets.value[module];
    if (!widgets) return;

    // Update sort_order based on new positions
    const updatedWidgets = widgets.map((widget, index) => ({
        id: widget.id,
        sort_order: index + 1,
    }));

    // Update local state
    widgets.forEach((widget, index) => {
        widget.sort_order = index + 1;
    });

    // Send to backend
    router.post('/dashboard/settings/widgets/order', {
        widgets: updatedWidgets,
    }, {
        preserveScroll: true,
        preserveState: true,
    });
};

// Check if ANY widget in a module is active (matches Dashboard tab visibility logic)
const isModuleActive = (module: string) => {
    const widgets = groupedWidgets.value[module] || [];
    return widgets.some(w => w.status);
};

// Check if ALL widgets in a module are active
const isModuleFullyActive = (module: string) => {
    const widgets = groupedWidgets.value[module] || [];
    return widgets.length > 0 && widgets.every(w => w.status);
};

// Toggle all widgets in a module
const handleModuleToggle = (module: string, status: boolean) => {
    router.post('/dashboard/settings/widgets/toggle-module', {
        module,
        status,
    }, {
        preserveScroll: true,
    });
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head title="Dashboard Settings" />

        <div class="flex h-full flex-1 flex-col gap-6 p-6">
            <div>
                <h1 class="text-2xl font-bold tracking-tight">Dashboard Settings</h1>
                <p class="text-muted-foreground">Customize your dashboard and module settings</p>
            </div>

            <!-- Module Settings -->
            <div class="space-y-4">
                <h2 class="text-lg font-semibold flex items-center gap-2">
                    <Settings class="h-5 w-5" />
                    Module Settings
                </h2>
                <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Link href="/dashboard/settings/wallet">
                        <Card class="hover:bg-muted/50 transition-colors cursor-pointer group">
                            <CardHeader class="pb-3">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                            <Wallet class="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <CardTitle class="text-base">Wallet Settings</CardTitle>
                                            <CardDescription class="text-sm">ID & number format</CardDescription>
                                        </div>
                                    </div>
                                    <ChevronRight class="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                                </div>
                            </CardHeader>
                        </Card>
                    </Link>
                    <Link href="/dashboard/products/settings">
                        <Card class="hover:bg-muted/50 transition-colors cursor-pointer group">
                            <CardHeader class="pb-3">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                            <Package class="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <CardTitle class="text-base">Product Settings</CardTitle>
                                            <CardDescription class="text-sm">SKU & inventory options</CardDescription>
                                        </div>
                                    </div>
                                    <ChevronRight class="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                                </div>
                            </CardHeader>
                        </Card>
                    </Link>
                </div>
            </div>

            <!-- Widgets Section -->
            <div class="space-y-4">
                <h2 class="text-lg font-semibold">Dashboard Widgets</h2>
            </div>

            <!-- Stats -->
            <div class="grid gap-4 md:grid-cols-3">
                <StatsCard
                    title="Total"
                    :value="props.stats.total"
                    :icon="LayoutGrid"
                />
                <StatsCard
                    title="Active"
                    :value="props.stats.active"
                    :icon="CheckCircle"
                    icon-color="text-green-500"
                />
                <StatsCard
                    title="Inactive"
                    :value="props.stats.inactive"
                    :icon="XCircle"
                    icon-color="text-red-500"
                />
            </div>

            <!-- Tabs and View Toggle -->
            <div class="flex items-center justify-between">
                <Tabs :default-value="currentTab" @update:model-value="handleTabChange">
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
                    <button
                        :class="[
                            'rounded p-1.5 transition-colors',
                            viewMode === 'grid' ? 'bg-muted' : 'hover:bg-muted/50'
                        ]"
                        @click="viewMode = 'grid'"
                    >
                        <Grid2X2 class="h-4 w-4" />
                    </button>
                    <button
                        :class="[
                            'rounded p-1.5 transition-colors',
                            viewMode === 'list' ? 'bg-muted' : 'hover:bg-muted/50'
                        ]"
                        @click="viewMode = 'list'"
                    >
                        <List class="h-4 w-4" />
                    </button>
                </div>
            </div>

            <!-- Grouped Widget Cards by Module -->
            <div class="space-y-8">
                <div
                    v-for="(widgets, module) in groupedWidgets"
                    :key="module"
                    class="space-y-4"
                >
                    <!-- Module Header with Toggle All -->
                    <div class="flex items-center justify-between rounded-lg bg-muted/50 p-4">
                        <div class="flex items-center gap-3">
                            <component
                                :is="moduleIcons[module] || LayoutGrid"
                                class="h-6 w-6"
                            />
                            <div>
                                <h2 class="text-lg font-semibold">{{ module }}</h2>
                                <p class="text-sm text-muted-foreground">
                                    {{ widgets.filter(w => w.status).length }}/{{ widgets.length }} widgets active
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="flex items-center gap-2">
                                <span
                                    :class="[
                                        'h-2.5 w-2.5 rounded-full',
                                        isModuleActive(module) ? 'bg-green-500' : 'bg-red-500'
                                    ]"
                                />
                                <span class="text-sm font-medium">
                                    {{ isModuleActive(module) ? 'Tab Visible' : 'Tab Hidden' }}
                                </span>
                            </div>
                            <div class="flex flex-col items-end gap-1">
                                <Switch
                                    :model-value="isModuleFullyActive(module)"
                                    @update:model-value="(value: boolean) => handleModuleToggle(module, value)"
                                />
                                <span class="text-xs text-muted-foreground">Toggle All</span>
                            </div>
                        </div>
                    </div>

                    <!-- Module Widgets - Draggable -->
                    <VueDraggable
                        v-model="groupedWidgets[module as string]"
                        :class="[
                            viewMode === 'grid'
                                ? 'grid gap-4 md:grid-cols-2 lg:grid-cols-3'
                                : 'flex flex-col gap-3'
                        ]"
                        handle=".drag-handle"
                        ghost-class="opacity-50"
                        :animation="200"
                        @end="() => handleDragEnd(module as string)"
                    >
                        <Card
                            v-for="widget in groupedWidgets[module as string]"
                            :key="widget.id"
                            class="relative group"
                        >
                            <!-- Drag Handle -->
                            <div class="drag-handle absolute left-2 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity active:cursor-grabbing">
                                <GripVertical class="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div class="absolute right-3 top-3">
                                <Badge variant="secondary" class="text-xs">
                                    {{ widget.sort_order }}
                                </Badge>
                            </div>
                            <CardHeader class="pb-3 pl-10">
                                <div class="flex items-center gap-2">
                                    <component
                                        :is="chartTypeIcons[widget.chart_type || 'stats']"
                                        class="h-5 w-5 text-muted-foreground"
                                    />
                                    <CardTitle class="text-base">{{ widget.name }}</CardTitle>
                                </div>
                                <p v-if="widget.description" class="text-sm text-muted-foreground mt-1">
                                    {{ widget.description }}
                                </p>
                                <div class="flex flex-wrap items-center gap-2 pt-2">
                                    <Badge variant="outline">{{ widget.type }}</Badge>
                                    <Badge v-if="widget.chart_type" variant="default">
                                        {{ chartTypeLabels[widget.chart_type] || widget.chart_type }}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent class="pl-10">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <span
                                            :class="[
                                                'h-2 w-2 rounded-full',
                                                widget.status ? 'bg-green-500' : 'bg-red-500'
                                            ]"
                                        />
                                        <span class="text-sm text-muted-foreground">
                                            {{ widget.status ? 'Active' : 'Inactive' }}
                                        </span>
                                    </div>
                                    <Switch
                                        :model-value="widget.status"
                                        @update:model-value="(value: boolean) => handleStatusChange(widget, value)"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </VueDraggable>
                </div>
            </div>

            <p
                v-if="props.widgetItems.length === 0"
                class="text-center text-muted-foreground py-8"
            >
                No widgets found
            </p>
        </div>
    </AppLayout>
</template>
