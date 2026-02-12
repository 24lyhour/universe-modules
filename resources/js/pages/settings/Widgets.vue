<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { StatsCard } from '@/components/shared';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LayoutGrid, CheckCircle, XCircle, Grid2X2, List, BarChart3, PieChart, AreaChart, LineChart } from 'lucide-vue-next';
import { ref } from 'vue';
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
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head title="Dashboard Widgets" />

        <div class="flex h-full flex-1 flex-col gap-6 p-6">
            <div>
                <h1 class="text-2xl font-bold tracking-tight">Dashboard Widgets</h1>
                <p class="text-muted-foreground">Customize your dashboard experience by managing widgets</p>
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

            <!-- Widget Cards -->
            <div
                :class="[
                    viewMode === 'grid'
                        ? 'grid gap-4 md:grid-cols-2 lg:grid-cols-3'
                        : 'flex flex-col gap-3'
                ]"
            >
                <Card
                    v-for="widget in props.widgetItems"
                    :key="widget.id"
                    class="relative"
                >
                    <div class="absolute right-3 top-3">
                        <Badge variant="secondary" class="text-xs">
                            {{ widget.sort_order }}
                        </Badge>
                    </div>
                    <CardHeader class="pb-3">
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
                            <Badge variant="outline">{{ widget.module }}</Badge>
                            <Badge variant="outline">{{ widget.type }}</Badge>
                            <Badge v-if="widget.chart_type" variant="default">
                                {{ chartTypeLabels[widget.chart_type] || widget.chart_type }}
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
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
                                :checked="widget.status"
                                @update:checked="(value) => handleStatusChange(widget, value)"
                            />
                        </div>
                    </CardContent>
                </Card>
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
