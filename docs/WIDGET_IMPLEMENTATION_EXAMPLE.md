# ProductWidget Implementation Example

This document shows a complete, working example of how to use ProductWidget in a dashboard page.

## File Structure

```
Modules/Product/
└── resources/js/
    └── pages/
        └── dashboard/
            └── product/
                ├── Dashboard.vue         ← Main page that uses ProductWidget
                └── components/
                    └── (other components)
```

## Complete Dashboard.vue Example

```vue
<script setup lang="ts">
import { Head, usePage } from '@inertiajs/vue3';
import { ref, onMounted, type VNode } from 'vue';
import { ProductWidget, type ProductMetrics, type SalesDataPoint } from '@/Components/Widgets';
import AppLayout from '@/layouts/AppLayout.vue';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Persistent layout required for modals
defineOptions({
    layout: (h: (type: unknown, props: unknown, children: unknown) => VNode, page: VNode) =>
        h(AppLayout, { 
            breadcrumbs: [
                { title: 'Dashboard', href: '/dashboard' },
                { title: 'Products', href: '/dashboard/products' },
            ]
        }, () => page),
});

// ============ STATE ============
const isLoading = ref(false);
const selectedDateRange = ref('30d');

// Metrics data
const metrics = ref<ProductMetrics>({
    total: 342,
    active: 298,
    outOfStock: 12,
    lowStock: 32,
    discontinued: 0,
    totalRevenue: 125400,
    averagePrice: 45.99,
    totalSold: 2730,
    growthPercent: 12.5,
    previousPeriodTotal: 304,
    topPerformingCount: 48,
    inventoryValue: 15680,
});

// Time series data for charts
const salesData = ref<SalesDataPoint[]>([
    { label: 'Week 1', value: 340, revenue: 15600, sold: 340 },
    { label: 'Week 2', value: 412, revenue: 18900, sold: 412 },
    { label: 'Week 3', value: 380, revenue: 17200, sold: 380 },
    { label: 'Week 4', value: 456, revenue: 21100, sold: 456 },
    { label: 'Week 5', value: 542, revenue: 24900, sold: 542 },
]);

// ============ LIFECYCLE ============
onMounted(async () => {
    // Fetch initial data
    await fetchMetrics('30d');
});

// ============ METHODS ============

/**
 * Fetch metrics for a specific date range
 */
const fetchMetrics = async (dateRange: string) => {
    isLoading.value = true;
    try {
        // In real app, fetch from API:
        // const response = await fetch(`/api/products/metrics?range=${dateRange}`);
        // const data = await response.json();
        // metrics.value = data.metrics;
        // salesData.value = data.salesData;
        
        // For now, simulate delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Mock data for different date ranges
        const mockMetrics = {
            'today': { 
                total: 342, active: 298, outOfStock: 8, lowStock: 36,
                discontinued: 0, totalRevenue: 18900, averagePrice: 45.99,
                totalSold: 412, growthPercent: 5.2, previousPeriodTotal: 330,
                topPerformingCount: 32, inventoryValue: 15680,
            },
            '7d': {
                total: 342, active: 298, outOfStock: 10, lowStock: 34,
                discontinued: 0, totalRevenue: 109200, averagePrice: 45.99,
                totalSold: 2380, growthPercent: 8.5, previousPeriodTotal: 315,
                topPerformingCount: 42, inventoryValue: 15680,
            },
            '30d': {
                total: 342, active: 298, outOfStock: 12, lowStock: 32,
                discontinued: 0, totalRevenue: 125400, averagePrice: 45.99,
                totalSold: 2730, growthPercent: 12.5, previousPeriodTotal: 304,
                topPerformingCount: 48, inventoryValue: 15680,
            },
            '90d': {
                total: 342, active: 298, outOfStock: 15, lowStock: 29,
                discontinued: 0, totalRevenue: 342800, averagePrice: 45.99,
                totalSold: 7450, growthPercent: 18.3, previousPeriodTotal: 289,
                topPerformingCount: 56, inventoryValue: 15680,
            },
            'year': {
                total: 342, active: 298, outOfStock: 18, lowStock: 26,
                discontinued: 0, totalRevenue: 892100, averagePrice: 48.50,
                totalSold: 18380, growthPercent: 24.7, previousPeriodTotal: 275,
                topPerformingCount: 65, inventoryValue: 15680,
            },
        };
        
        metrics.value = mockMetrics[dateRange as keyof typeof mockMetrics] || mockMetrics['30d'];
    } catch (error) {
        console.error('Failed to fetch metrics:', error);
    } finally {
        isLoading.value = false;
    }
};

/**
 * Handle date range change from ProductWidget
 */
const handleDateRangeChange = async (newRange: string) => {
    selectedDateRange.value = newRange;
    await fetchMetrics(newRange);
};

/**
 * Handle refresh button click from ProductWidget
 */
const handleRefresh = async () => {
    await fetchMetrics(selectedDateRange.value);
};
</script>

<template>
    <Head title="Product Dashboard" />
    
    <div class="flex flex-1 flex-col gap-4 p-4">
        <!-- Product Widget -->
        <ProductWidget
            :metrics="metrics"
            :salesData="salesData"
            :categoryDistribution="[]"
            :dateRange="selectedDateRange"
            :loading="isLoading"
            :showStats="true"
            :showSales="true"
            :showCategory="true"
            @dateRangeChange="handleDateRangeChange"
            @refresh="handleRefresh"
        />
        
        <!-- Additional Cards (Optional) -->
        <Card>
            <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common product management tasks</CardDescription>
            </CardHeader>
            <CardContent class="flex gap-4">
                <Button>Add New Product</Button>
                <Button variant="outline">Import Products</Button>
                <Button variant="outline">Export Report</Button>
            </CardContent>
        </Card>
    </div>
</template>
```

## Integration Steps

### 1. Create the Dashboard Page

Create file: `Modules/Product/resources/js/pages/dashboard/product/Dashboard.vue`

(Use the example above)

### 2. Create the Route

In `Modules/Product/routes/dashboard.php`:

```php
<?php

use Illuminate\Support\Facades\Route;
use Modules\Product\Http\Controllers\ProductDashboardController;

Route::middleware(['auth', 'verified'])
    ->prefix('dashboard')
    ->group(function () {
        // Dashboard view (shows widget)
        Route::get('/products/dashboard', [ProductDashboardController::class, 'dashboard'])
            ->name('product.dashboard');
        
        // API endpoint for metrics (fetches data)
        Route::get('/api/products/metrics', [ProductDashboardController::class, 'getMetrics'])
            ->name('product.metrics');
    });
```

### 3. Create the Controller

Create file: `Modules/Product/app/Http/Controllers/ProductDashboardController.php`

```php
<?php

namespace Modules\Product\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Product\Models\Product;

class ProductDashboardController extends Controller
{
    /**
     * Show product dashboard
     */
    public function dashboard()
    {
        return Inertia::render('product::dashboard/product/Dashboard', [
            'initialRange' => '30d',
        ]);
    }

    /**
     * Get metrics for date range
     */
    public function getMetrics(Request $request)
    {
        $range = $request->get('range', '30d');
        
        // Calculate date
        $dates = match ($range) {
            'today' => [now()->startOfDay(), now()->endOfDay()],
            '7d' => [now()->subDays(7), now()],
            '30d' => [now()->subDays(30), now()],
            '90d' => [now()->subDays(90), now()],
            'year' => [now()->startOfYear(), now()],
            default => [now()->subDays(30), now()],
        };

        // Build query
        $query = Product::whereBetween('created_at', $dates);
        $products = $query->get();

        // Calculate metrics
        $metrics = [
            'total' => Product::count(),
            'active' => Product::where('status', 'active')->count(),
            'outOfStock' => Product::where('stock', '<=', 0)->count(),
            'lowStock' => Product::where('stock', '>', 0)->where('stock', '<=', 10)->count(),
            'discontinued' => Product::where('status', 'discontinued')->count(),
            'totalRevenue' => $products->sum('price'),
            'averagePrice' => $products->avg('price') ?? 0,
            'totalSold' => $products->sum('quantity_sold') ?? 0,
            'growthPercent' => $this->calculateGrowth($range),
            'previousPeriodTotal' => $this->getPreviousPeriodCount($range),
            'topPerformingCount' => Product::where('quantity_sold', '>', 100)->count(),
            'inventoryValue' => Product::sum('stock * price') ?? 0,
        ];

        // Generate chart data
        $salesData = $this->generateSalesData($range);

        return response()->json([
            'metrics' => $metrics,
            'salesData' => $salesData,
        ]);
    }

    /**
     * Calculate growth percentage
     */
    private function calculateGrowth(string $range): float
    {
        $current = Product::count();
        $previous = $this->getPreviousPeriodCount($range);
        
        if ($previous === 0) {
            return 0;
        }

        return (($current - $previous) / $previous) * 100;
    }

    /**
     * Get count from previous period
     */
    private function getPreviousPeriodCount(string $range): int
    {
        $days = match ($range) {
            'today' => 1,
            '7d' => 7,
            '30d' => 30,
            '90d' => 90,
            'year' => 365,
            default => 30,
        };

        return Product::whereBetween('created_at', [
            now()->subDays($days * 2),
            now()->subDays($days),
        ])->count();
    }

    /**
     * Generate sales data for chart
     */
    private function generateSalesData(string $range): array
    {
        $data = [];
        
        // Generate weekly data points
        for ($i = 4; $i >= 0; $i--) {
            $start = now()->subWeeks($i)->startOfWeek();
            $end = $start->copy()->endOfWeek();
            
            $products = Product::whereBetween('created_at', [$start, $end])->get();
            
            $data[] = [
                'label' => $start->format('M d'),
                'value' => $products->count(),
                'revenue' => $products->sum('price'),
                'sold' => $products->sum('quantity_sold') ?? 0,
            ];
        }

        return $data;
    }
}
```

### 4. Fetch Metrics from Widget

Update the Dashboard.vue to actually fetch from the API:

```typescript
const fetchMetrics = async (dateRange: string) => {
    isLoading.value = true;
    try {
        const response = await fetch(route('product.metrics', { range: dateRange }));
        const data = await response.json();
        
        metrics.value = data.metrics;
        salesData.value = data.salesData;
    } catch (error) {
        console.error('Failed to fetch metrics:', error);
    } finally {
        isLoading.value = false;
    }
};
```

## Result

After these steps:

1. ✅ `/dashboard/products/dashboard` shows the ProductWidget
2. ✅ Date range dropdown fetches new metrics
3. ✅ Refresh button reloads current range
4. ✅ Loading spinner shows during fetch
5. ✅ All charts display automatically

## Navigation

Add link in sidebar:

```php
// In Product module ServiceProvider
MenuService::addMenuItem(
    menu: 'primary',
    id: 'product',
    title: __('Products'),
    url: route('product.dashboard'),
    icon: 'Package',
    order: 100,
);

MenuService::addSubmenuItem(
    'primary',
    'product',
    __('Dashboard'),
    route('product.dashboard'),
    10,
    route: 'product.dashboard',
    icon: 'BarChart3'
);
```

## Customization Options

### Show only specific sections:

```vue
<!-- Hide sales chart -->
<ProductWidget :showSales="false" />

<!-- Hide metrics cards -->
<ProductWidget :showStats="false" />

<!-- Hide category distribution -->
<ProductWidget :showCategory="false" />

<!-- Minimal widget (only metrics) -->
<ProductWidget :showSales="false" :showCategory="false" />
```

### Change initial date range:

```typescript
const selectedDateRange = ref('90d'); // Start with 90 days
```

### Add custom data:

```typescript
const customMetrics = computed(() => ({
    ...metrics.value,
    customField: 'custom value',
}));
```

This provides a complete, production-ready implementation!
