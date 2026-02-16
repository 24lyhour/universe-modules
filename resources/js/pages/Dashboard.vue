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
import { OutletWidget } from '@outlet/Components/Widgets';
import { OrderWidget } from '@order/Components/Widgets';
import { WalletWidget } from '@wallets/Components/Widgets';
import {
    VisXYContainer,
    VisStackedBar,
    VisAxis,
} from '@unovis/vue';
import {
    Users,
    Package,
    Settings,
    ShoppingCart,
    Wallet,
    UtensilsCrossed,
    Store,
} from 'lucide-vue-next';
import type { BreadcrumbItem } from '@/types';
import type { CustomerWidgetData } from '@customer/types';
import type { ProductMetrics, SalesDataPoint, CategoryDistribution } from '@product/Components/Widgets';
import type { OrderMetrics } from '@order/Components/Widgets';
import type { WalletMetrics } from '@wallets/Components/Widgets';
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

interface OrderStats {
    total: number;
    completed: number;
    pending: number;
    cancelled: number;
    total_revenue: number;
    average_order_value: number;
    growth_percent: number;
}

interface WalletStats {
    total: number;
    active: number;
    inactive: number;
    suspended: number;
    totalBalance: number;
    totalLocked: number;
    averageBalance: number;
    growthPercent: number;
}

interface WidgetStatuses {
    [key: string]: boolean;
}

interface Props {
    widgets: {
        customer?: CustomerStats;
        menu?: MenuStats;
        outlet?: OutletStats;
        order?: OrderStats;
        wallets?: WalletStats;
        product?: {
            total: number;
            active: number;
            out_of_stock: number;
            low_stock: number;
            discontinued: number;
        };
    };
    customerWidget?: CustomerWidgetData | null;
    productWidget?: { metrics: ProductMetrics; salesData: SalesDataPoint[]; categoryDistribution: CategoryDistribution[] } | null;
    orderWidget?: { metrics: OrderMetrics } | null;
    walletWidget?: { metrics: WalletMetrics } | null;
    dateRange: string;
    tab?: string;
    activeWidgets: string[];
    widgetStatuses: WidgetStatuses;
}

const props = defineProps<Props>();

// Helper to check if a module tab is active (ANY widget for that module is active)
const isWidgetActive = (module: string) => props.activeWidgets.includes(module);

// Tab configuration for dynamic rendering - follows activeWidgets order
const tabConfig: Record<string, { icon: any; label: string }> = {
    customer: { icon: Users, label: 'Customer' },
    menu: { icon: UtensilsCrossed, label: 'Menu' },
    outlet: { icon: Store, label: 'Outlet' },
    product: { icon: Package, label: 'Product' },
    order: { icon: ShoppingCart, label: 'Order' },
    wallets: { icon: Wallet, label: 'Wallet' },
};

// Individual widget status helpers for granular control
const isCustomerStatsActive = computed(() => props.widgetStatuses?.['customer_stats'] ?? true);
const isCustomerGrowthActive = computed(() => props.widgetStatuses?.['customer_area'] ?? true);
const isCustomerStatusActive = computed(() => props.widgetStatuses?.['customer_donut'] ?? true);

// Wallet widget status helpers
const isWalletStatsActive = computed(() => props.widgetStatuses?.['wallets_stats'] ?? true);
const isWalletAreaActive = computed(() => props.widgetStatuses?.['wallets_area'] ?? true);
const isWalletDonutActive = computed(() => props.widgetStatuses?.['wallets_donut'] ?? true);
const isWalletBarActive = computed(() => props.widgetStatuses?.['wallets_bar'] ?? true);

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
                <!-- Tabs are rendered dynamically based on activeWidgets order from backend -->
                <TabsList>
                    <TabsTrigger
                        v-for="module in activeWidgets"
                        :key="module"
                        :value="module"
                    >
                        <component :is="tabConfig[module]?.icon" class="mr-2 h-4 w-4" />
                        {{ tabConfig[module]?.label || module }}
                    </TabsTrigger>
                </TabsList>

                <!-- Customer Tab -->
                <TabsContent v-if="isWidgetActive('customer') && customerWidget" value="customer" class="space-y-6">
                    <CustomerWidget
                        :metrics="customerWidget.metrics"
                        :growth-data="customerWidget.growthData"
                        :status-distribution="customerWidget.statusDistribution"
                        :recent-customers="customerWidget.recentCustomers"
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
                    <OutletWidget
                        :metrics="props.widgets.outlet"
                        :date-range="dateRange"
                        :loading="loading"
                        @date-range-change="handleDateRangeChange"
                        @refresh="handleRefresh"
                    />
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

                <!-- Order Tab -->
                <TabsContent v-if="isWidgetActive('order') && props.widgets.order" value="order" class="space-y-6">
                    <OrderWidget
                        :metrics="props.widgets.order"
                        :date-range="dateRange"
                        :loading="loading"
                        @date-range-change="handleDateRangeChange"
                        @refresh="handleRefresh"
                    />
                </TabsContent>

                <!-- Wallet Tab -->
                <TabsContent v-if="isWidgetActive('wallets') && props.widgets.wallets" value="wallets" class="space-y-6">
                    <WalletWidget
                        :metrics="props.widgets.wallets"
                        :date-range="dateRange"
                        :loading="loading"
                        :show-stats="isWalletStatsActive"
                        :show-area="isWalletAreaActive"
                        :show-donut="isWalletDonutActive"
                        :show-bar="isWalletBarActive"
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
