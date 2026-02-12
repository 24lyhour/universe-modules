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
import { ProductWidget } from '@product/Components/Widgets';
import { MenuWIdget } from '@menu/Components/Widgets';
import {
    VisXYContainer,
    VisStackedBar,
    VisAxis,
} from '@unovis/vue';
import {
    Users,
    Store,
    Package,
    Settings,
} from 'lucide-vue-next';
import type { BreadcrumbItem } from '@/types';
import type { CustomerWidgetData } from '@customer/types';
import type { ProductMetrics, SalesDataPoint } from '@product/Components/Widgets';
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

interface WidgetStatuses {
    [key: string]: boolean;
}

interface Props {
    widgets: {
        customer?: CustomerStats;
        menu?: MenuStats;
        outlet?: OutletStats;
        product?: {
            total: number;
            active: number;
            out_of_stock: number;
            low_stock: number;
            discontinued: number;
        };
    };
    customerWidget?: CustomerWidgetData | null;
    productWidget?: { metrics: ProductMetrics; salesData: SalesDataPoint[] } | null;
    dateRange: string;
    tab?: string;
    activeWidgets: string[];
    widgetStatuses: WidgetStatuses;
}

const props = defineProps<Props>();

// Helper to check if a module tab is active (ANY widget for that module is active)
const isWidgetActive = (module: string) => props.activeWidgets.includes(module);

// Individual widget status helpers for granular control
const isCustomerStatsActive = computed(() => props.widgetStatuses?.['customer_stats'] ?? true);
const isCustomerGrowthActive = computed(() => props.widgetStatuses?.['customer_area'] ?? true);
const isCustomerStatusActive = computed(() => props.widgetStatuses?.['customer_donut'] ?? true);

const { chartColors } = useChartColors();

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
];

// Only show tabs for active widgets
const validTabs = computed(() => props.activeWidgets);
const activeTab = ref(
    props.activeWidgets.includes(props.tab || '')
        ? props.tab!
        : props.activeWidgets[0] || 'customer'
);
const loading = ref(false);

// Sync tab changes with URL
watch(activeTab, (newTab) => {
    const url = new URL(window.location.href);
    url.searchParams.set('tab', newTab);
    window.history.replaceState({}, '', url.toString());
});

// Outlet Stats Bar Chart Data
const outletBarData = computed(() => {
    if (!props.widgets.outlet) return [];
    return [
        { label: 'Total', value: props.widgets.outlet.total },
        { label: 'Active', value: props.widgets.outlet.active },
        { label: 'Inactive', value: props.widgets.outlet.inactive },
    ];
});

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
                    <TabsTrigger v-if="isWidgetActive('customer')" value="customer">
                        <Users class="mr-2 h-4 w-4" />
                        Customer
                    </TabsTrigger>
                    <TabsTrigger v-if="isWidgetActive('menu')" value="menu">
                        <UtensilsCrossed class="mr-2 h-4 w-4" />
                        Menu
                    </TabsTrigger>
                    <TabsTrigger v-if="isWidgetActive('outlet')" value="outlet">
                        <Store class="mr-2 h-4 w-4" />
                        Outlet
                    </TabsTrigger>
                    <TabsTrigger v-if="isWidgetActive('product')" value="product">
                        <Package class="mr-2 h-4 w-4" />
                        Product
                    </TabsTrigger>
                </TabsList>

                <!-- Customer Tab -->
                <TabsContent v-if="isWidgetActive('customer') && customerWidget" value="customer" class="space-y-6">
                    <CustomerWidget
                        :metrics="customerWidget.metrics"
                        :growth-data="customerWidget.growthData"
                        :status-distribution="customerWidget.statusDistribution"
                        :date-range="dateRange"
                        :loading="loading"
                        :show-stats="isCustomerStatsActive"
                        :show-growth="isCustomerGrowthActive"
                        :show-status="isCustomerStatusActive"
                        @date-range-change="handleDateRangeChange"
                        @refresh="handleRefresh"
                    />
                </TabsContent>

                <!-- Menu Tab -->
                <TabsContent v-if="isWidgetActive('menu') && props.widgets.menu" value="menu" class="space-y-6">
                    <MenuWIdget
                        :metrics="props.widgets.menu"
                        :date-range="dateRange"
                        :loading="loading"
                        @date-range-change="handleDateRangeChange"
                        @refresh="handleRefresh"
                    />
                </TabsContent>

                <!-- Outlet Tab -->
                <TabsContent v-if="isWidgetActive('outlet') && props.widgets.outlet" value="outlet" class="space-y-6">
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

                <!-- Product Tab -->
                <TabsContent v-if="isWidgetActive('product') && productWidget" value="product" class="space-y-6">
                    <ProductWidget
                        :metrics="productWidget.metrics"
                        :sales-data="productWidget.salesData"
                        :category-distribution="productWidget.categoryDistribution"
                        :date-range="dateRange"
                        :loading="loading"
                        :show-stats="true"
                        :show-sales="true"
                        :show-category="true"
                        @date-range-change="handleDateRangeChange"
                        @refresh="handleRefresh"
                    />
                </TabsContent>

                <!-- Empty State when no widgets are active -->
                <div v-if="activeWidgets.length === 0" class="flex flex-col items-center justify-center py-12 text-center">
                    <Settings class="mb-4 h-12 w-12 text-muted-foreground" />
                    <h3 class="text-lg font-semibold">No widgets enabled</h3>
                    <p class="text-muted-foreground mb-4">Enable widgets in settings to see your dashboard</p>
                    <Button as-child>
                        <Link href="/dashboard/settings">Go to Settings</Link>
                    </Button>
                </div>
            </Tabs>
        </div>
    </AppLayout>
</template>
