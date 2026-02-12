<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { StatsCard } from '@/components/shared';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartContainer } from '@/components/ui/chart';
import { CustomerWidget } from '@customer/Components/Widgets';
import {
    VisXYContainer,
    VisStackedBar,
    VisAxis,
} from '@unovis/vue';
import {
    Users,
    UtensilsCrossed,
    Store,
    CheckCircle,
    XCircle,
    Layers,
    FolderTree,
    Settings,
} from 'lucide-vue-next';
import type { BreadcrumbItem } from '@/types';
import type { CustomerWidgetData } from '@customer/types';
import { useChartColors } from '@/composables/useChartColors';

interface CustomerStats {
    total: number;
    active: number;
    inactive: number;
    suspended: number;
}

interface MenuStats {
    total_menus: number;
    active_menus: number;
    inactive_menus: number;
    total_categories: number;
    total_types: number;
}

interface OutletStats {
    total: number;
    active: number;
    inactive: number;
}

interface Props {
    widgets: {
        customer: CustomerStats;
        menu: MenuStats;
        outlet: OutletStats;
    };
    customerWidget: CustomerWidgetData;
    dateRange: string;
    tab?: string;
}

const props = defineProps<Props>();

const { chartColors } = useChartColors();

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
];

const validTabs = ['customer', 'menu', 'outlet'];
const activeTab = ref(validTabs.includes(props.tab || '') ? props.tab! : 'customer');
const loading = ref(false);

// Sync tab changes with URL
watch(activeTab, (newTab) => {
    const url = new URL(window.location.href);
    url.searchParams.set('tab', newTab);
    window.history.replaceState({}, '', url.toString());
});

// Menu Stats Bar Chart Data
const menuBarData = computed(() => [
    { label: 'Total', value: props.widgets.menu.total_menus },
    { label: 'Active', value: props.widgets.menu.active_menus },
    { label: 'Inactive', value: props.widgets.menu.inactive_menus },
    { label: 'Categories', value: props.widgets.menu.total_categories },
    { label: 'Types', value: props.widgets.menu.total_types },
]);

const menuChartConfig = computed(() => ({
    value: { label: 'Count', color: chartColors.value.chart1 },
}));

// Outlet Stats Bar Chart Data
const outletBarData = computed(() => [
    { label: 'Total', value: props.widgets.outlet.total },
    { label: 'Active', value: props.widgets.outlet.active },
    { label: 'Inactive', value: props.widgets.outlet.inactive },
]);

const outletChartConfig = computed(() => ({
    value: { label: 'Count', color: chartColors.value.chart2 },
}));

// Customer widget handlers
const handleDateRangeChange = (dateRange: string) => {
    loading.value = true;
    router.get(
        '/dashboard',
        { date_range: dateRange },
        {
            preserveState: true,
            preserveScroll: true,
            onFinish: () => {
                loading.value = false;
            },
        }
    );
};

const handleRefresh = () => {
    loading.value = true;
    router.reload({
        only: ['customerWidget'],
        onFinish: () => {
            loading.value = false;
        },
    });
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <Head title="Dashboard" />

        <div class="flex h-full flex-1 flex-col gap-6 p-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-2xl font-bold tracking-tight">Dashboard</h1>
                    <p class="text-muted-foreground">Overview of your business modules</p>
                </div>
                <Button variant="outline" as-child>
                    <Link href="/dashboard/settings">
                        <Settings class="mr-2 h-4 w-4" />
                        Widget Settings
                    </Link>
                </Button>
            </div>

            <Tabs v-model="activeTab" class="space-y-6">
                <TabsList>
                    <TabsTrigger value="customer">
                        <Users class="mr-2 h-4 w-4" />
                        Customer
                    </TabsTrigger>
                    <TabsTrigger value="menu">
                        <UtensilsCrossed class="mr-2 h-4 w-4" />
                        Menu
                    </TabsTrigger>
                    <TabsTrigger value="outlet">
                        <Store class="mr-2 h-4 w-4" />
                        Outlet
                    </TabsTrigger>
                </TabsList>

                <!-- Customer Tab -->
                <TabsContent value="customer" class="space-y-6">
                    <CustomerWidget
                        :metrics="customerWidget.metrics"
                        :growth-data="customerWidget.growthData"
                        :status-distribution="customerWidget.statusDistribution"
                        :date-range="dateRange"
                        :loading="loading"
                        @date-range-change="handleDateRangeChange"
                        @refresh="handleRefresh"
                    />
                </TabsContent>

                <!-- Menu Tab -->
                <TabsContent value="menu" class="space-y-6">
                    <div class="grid gap-4 md:grid-cols-5">
                        <StatsCard
                            title="Total Menus"
                            :value="props.widgets.menu.total_menus"
                            :icon="UtensilsCrossed"
                        />
                        <StatsCard
                            title="Active Menus"
                            :value="props.widgets.menu.active_menus"
                            :icon="CheckCircle"
                            icon-color="text-green-500"
                        />
                        <StatsCard
                            title="Inactive Menus"
                            :value="props.widgets.menu.inactive_menus"
                            :icon="XCircle"
                            icon-color="text-yellow-500"
                        />
                        <StatsCard
                            title="Categories"
                            :value="props.widgets.menu.total_categories"
                            :icon="FolderTree"
                        />
                        <StatsCard
                            title="Menu Types"
                            :value="props.widgets.menu.total_types"
                            :icon="Layers"
                        />
                    </div>

                    <!-- Menu Bar Chart -->
                    <Card>
                        <CardHeader>
                            <CardTitle>Menu Statistics</CardTitle>
                            <CardDescription>Overview of menu data</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer :config="menuChartConfig" class="h-[300px]">
                                <VisXYContainer :data="menuBarData">
                                    <VisStackedBar
                                        :x="(_: any, i: number) => i"
                                        :y="(d: any) => d.value"
                                        :color="chartColors.chart1"
                                        :barPadding="0.3"
                                        :roundedCorners="4"
                                    />
                                    <VisAxis
                                        type="x"
                                        :tickFormat="(i: number) => menuBarData[i]?.label || ''"
                                    />
                                    <VisAxis type="y" />
                                </VisXYContainer>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </TabsContent>

                <!-- Outlet Tab -->
                <TabsContent value="outlet" class="space-y-6">
                    <div class="grid gap-4 md:grid-cols-3">
                        <StatsCard
                            title="Total Outlets"
                            :value="props.widgets.outlet.total"
                            :icon="Store"
                        />
                        <StatsCard
                            title="Active"
                            :value="props.widgets.outlet.active"
                            :icon="CheckCircle"
                            icon-color="text-green-500"
                        />
                        <StatsCard
                            title="Inactive"
                            :value="props.widgets.outlet.inactive"
                            :icon="XCircle"
                            icon-color="text-yellow-500"
                        />
                    </div>

                    <!-- Outlet Bar Chart -->
                    <Card>
                        <CardHeader>
                            <CardTitle>Outlet Statistics</CardTitle>
                            <CardDescription>Overview of outlet data</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer :config="outletChartConfig" class="h-[300px]">
                                <VisXYContainer :data="outletBarData">
                                    <VisStackedBar
                                        :x="(_: any, i: number) => i"
                                        :y="(d: any) => d.value"
                                        :color="chartColors.chart2"
                                        :barPadding="0.3"
                                        :roundedCorners="4"
                                    />
                                    <VisAxis
                                        type="x"
                                        :tickFormat="(i: number) => outletBarData[i]?.label || ''"
                                    />
                                    <VisAxis type="y" />
                                </VisXYContainer>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    </AppLayout>
</template>
