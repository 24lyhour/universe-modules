# ProductWidget Learning Guide

## Overview
ProductWidget follows the exact same pattern as CustomerWidget but tailored for product inventory and sales metrics. Both widgets display:
- Key metrics in cards
- Date range selection with refresh button
- Multiple charts (Area/Line and Donut)
- Status distribution overview
- Alert cards for critical issues

---

## Pattern Structure

### 1. **Type Definitions** (Lines 28-70)

```typescript
// Core metrics interface - holds all the numbers to display
export interface ProductMetrics {
    total: number;              // All products
    active: number;             // Currently selling
    outOfStock: number;         // No inventory
    lowStock: number;           // Warning: needs restock
    discontinued: number;       // Stopped selling
    totalRevenue: number;       // $ earned
    averagePrice: number;       // $ per product
    totalSold: number;          // Units sold
    growthPercent: number;      // % change vs last period
    previousPeriodTotal: number;
    topPerformingCount: number; // Best sellers
    inventoryValue: number;     // Total $ in stock
}

// Time series data for charts
export interface SalesDataPoint {
    label: string;    // "Week 1", "Jan 5", etc
    value: number;    // Units sold
    revenue: number;  // $ earned
    sold: number;     // Units
}

// Category breakdown
export interface CategoryDistribution {
    category: string;
    count: number;
    color: string;
}

// Component props (what parent passes)
export interface ProductWidgetProps {
    metrics: ProductMetrics;
    salesData: SalesDataPoint[];
    categoryDistribution: CategoryDistribution[];
    dateRange?: string;
    loading?: boolean;
    showStats?: boolean;      // Toggle metrics grid
    showSales?: boolean;      // Toggle sales chart
    showCategory?: boolean;   // Toggle category chart
}
```

**Key Difference from CustomerWidget:**
- CustomerWidget tracks: total, new, active, returning, at-risk, churned, vip
- ProductWidget tracks: total, active, low-stock, out-of-stock, discontinued

---

### 2. **Props & Emits Setup** (Lines 72-95)

```typescript
// Define what props this component accepts
const props = withDefaults(defineProps<ProductWidgetProps>(), {
    dateRange: '30d',
    loading: false,
    showStats: true,
    showSales: true,
    showCategory: true,
});

// Define what events this component can emit to parent
const emit = defineEmits<{
    (e: 'dateRangeChange', value: string): void;  // User changes date filter
    (e: 'refresh'): void;                          // User clicks refresh button
}>();
```

**Usage in Parent Component:**
```vue
<ProductWidget
    :metrics="productMetrics"
    :salesData="salesData"
    :categoryDistribution="categoryDistribution"
    dateRange="30d"
    :loading="isLoading"
    @dateRangeChange="handleDateChange"
    @refresh="handleRefresh"
/>
```

---

### 3. **Reactive State** (Lines 97-107)

```typescript
const selectedDateRange = ref(props.dateRange);

// Date range options for dropdown
const dateRangeOptions = [
    { value: 'today', label: 'Today' },
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '90d', label: 'Last 90 Days' },
    { value: 'year', label: 'This Year' },
];
```

---

### 4. **Computed Properties** (Lines 109-126)

These calculate derived values from the metrics:

```typescript
// Is growth trending up or down?
const growthTrend = computed(() => ({
    isPositive: props.metrics.growthPercent >= 0,
    value: Math.abs(props.metrics.growthPercent),
}));

// Is inventory health good?
const stockStatus = computed(() => ({
    isHealthy: props.metrics.lowStock < (props.metrics.total * 0.1),  // Less than 10%
    ratio: props.metrics.lowStock / props.metrics.total,
}));
```

**Usage in Template:**
```vue
<!-- Shows green if healthy, yellow if low -->
:class="stockStatus.isHealthy ? 'text-green-600' : 'text-amber-600'"

<!-- Shows up/down arrow based on trend -->
:is="growthTrend.isPositive ? ArrowUpRight : ArrowDownRight"
```

---

### 5. **Chart Configuration** (Lines 128-145)

Charts need color config to work with Unovis & shadcn:

```typescript
// For sales trend (line/area chart)
const salesChartConfig: ChartConfig = {
    value: { label: 'Products Sold', color: 'var(--chart-1)' },
    revenue: { label: 'Revenue', color: 'var(--chart-2)' },
};

// For donut & bar charts
const categoryChartConfig: ChartConfig = {
    active: { label: 'Active', color: 'var(--chart-1)' },
    lowStock: { label: 'Low Stock', color: 'var(--chart-2)' },
    outOfStock: { label: 'Out of Stock', color: 'var(--chart-3)' },
    discontinued: { label: 'Discontinued', color: 'var(--chart-4)' },
};
```

---

### 6. **Watch & Event Handlers** (Lines 147-198)

```typescript
// When user changes date range, emit event to parent
watch(selectedDateRange, (newValue) => {
    emit('dateRangeChange', newValue);
});

// User clicked refresh button
const handleRefresh = () => {
    emit('refresh');
};

// Format utilities
const formatNumber = (num: number) => new Intl.NumberFormat().format(num);
const formatCurrency = (num: number) => /* ... */;
const formatPercent = (num: number) => `${num.toFixed(1)}%`;

// Badge colors based on status
const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
        case 'active': return 'default';        // Green
        case 'lowstock': return 'secondary';    // Gray
        case 'outofstock': return 'destructive'; // Red
        case 'discontinued': return 'outline';  // Outline
    }
};
```

---

## Template Structure

### Part 1: Header (Lines 204-229)
```vue
<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <!-- Left: Title & Description -->
    <div>
        <h2>Product Performance Metrics</h2>
        <p>Track sales and inventory overview</p>
    </div>
    
    <!-- Right: Date Filter + Refresh -->
    <div class="flex items-center gap-2">
        <Select v-model="selectedDateRange">
            <!-- Dropdown options -->
        </Select>
        <Button @click="handleRefresh">
            <RefreshCw :class="{ 'animate-spin': loading }" />
        </Button>
    </div>
</div>
```

### Part 2: Key Metrics Grid (Lines 232-362)
Displays 8 cards in a 4-column grid on large screens:

```vue
<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    <!-- Each Card -->
    <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Total Products</CardTitle>
            <Package class="h-4 w-4" />
        </CardHeader>
        <CardContent>
            <div class="text-2xl font-bold">{{ formatNumber(metrics.total) }}</div>
            <!-- Growth indicator -->
            <div class="flex items-center text-xs">
                <ArrowUpRight v-if="growthTrend.isPositive" />
                {{ growthTrend.value }}% vs last period
            </div>
        </CardContent>
    </Card>
    
    <!-- Repeat for: Active, Revenue, Sold, LowStock, OutOfStock, InventoryValue, TopPerforming -->
</div>
```

**Key Pattern:**
- Each metric card has: title, icon, main value, sub-value (comparison or ratio)
- Icons come from lucide-vue-next
- Colors indicate status (green=good, red=bad, blue=neutral)

### Part 3: Alert Card (Lines 366-383)
Shows only if problem exists:

```vue
<Card v-if="metrics.outOfStock > 0" class="border-red-200 bg-red-50">
    <CardContent class="flex items-center gap-4 pt-6">
        <AlertTriangle class="text-red-600" />
        <div class="flex-1">
            <p class="font-medium">{{ metrics.outOfStock }} products out of stock</p>
            <p class="text-sm">Restock immediately to avoid lost sales</p>
        </div>
        <Button>View Out of Stock</Button>
    </CardContent>
</Card>
```

### Part 4: Charts Section (Lines 386-505)

**Two-column grid on large screens:**

#### Chart 1: Sales Trend (Area + Line)
```vue
<ChartContainer :config="salesChartConfig" class="h-[280px]" cursor>
    <VisXYContainer :data="props.salesData">
        <!-- Area under the line -->
        <VisArea :y="(d) => d.value" :opacity="0.4" />
        
        <!-- Line on top -->
        <VisLine :y="(d) => d.value" :line-width="2" />
        
        <!-- Axes -->
        <VisAxis type="x" :tick-format="(i) => salesData[i]?.label" />
        <VisAxis type="y" :num-ticks="5" />
        
        <!-- Hover tooltip -->
        <ChartTooltip />
        <ChartCrosshair 
            :template="(d) => `${d.sold} sold, ${d.revenue} revenue`"
        />
    </VisXYContainer>
</ChartContainer>
```

#### Chart 2: Status Distribution (Donut + Legend)
```vue
<div class="grid gap-6 lg:grid-cols-2">
    <!-- Donut Chart -->
    <VisSingleContainer :data="donutData">
        <VisDonut
            :value="(d) => d.value"
            :color="(d) => getColor(d.status)"
            :central-label="metrics.total"
            central-sub-label="Products"
        />
    </VisSingleContainer>
    
    <!-- Legend (Manual) -->
    <div class="space-y-3">
        <div v-for="item in donutData" :key="item.label" class="flex justify-between">
            <span>{{ item.label }}: {{ formatNumber(item.value) }}</span>
            <Badge>{{ formatPercent((item.value / metrics.total) * 100) }}</Badge>
        </div>
    </div>
</div>
```

### Part 5: Status Bar Chart (Lines 508-554)
Grouped bar chart showing all statuses side-by-side:

```vue
<ChartContainer class="h-[200px]">
    <VisXYContainer :data="statusBarData">
        <VisGroupedBar
            :x="(_, i) => i"
            :y="(d) => d.value"
            :color="(_, i) => colors[i]"
        />
        <VisAxis type="x" :tick-format="(i) => statusBarData[i]?.label" />
        <VisAxis type="y" :num-ticks="3" />
        <ChartTooltip />
    </VisXYContainer>
</ChartContainer>
```

---

## Key Differences from CustomerWidget

| Aspect | CustomerWidget | ProductWidget |
|--------|----------------|---------------|
| **Primary Focus** | Customer lifecycle | Inventory & sales |
| **Metrics** | New, Active, Returning, Churned, VIP | Active, LowStock, OutOfStock, Discontinued |
| **Trend Metric** | Growth % | Growth %, Stock health % |
| **Chart 1** | Customer acquisition over time | Product sales over time |
| **Chart 2** | Customer status breakdown | Product status breakdown |
| **Alert Condition** | At Risk customers > 0 | Out of Stock > 0 |
| **Revenue Metric** | Per customer | Total + Per product |

---

## How to Use ProductWidget

### In a Dashboard Page:

```vue
<script setup lang="ts">
import { ProductWidget, type ProductMetrics, type SalesDataPoint } from '@/Components/Widgets';
import { ref, onMounted } from 'vue';

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

const salesData = ref<SalesDataPoint[]>([
    { label: 'Week 1', value: 340, revenue: 15600, sold: 340 },
    { label: 'Week 2', value: 412, revenue: 18900, sold: 412 },
    // ... more weeks
]);

const isLoading = ref(false);

const handleDateChange = (newRange: string) => {
    isLoading.value = true;
    // Fetch new metrics for date range
    // metrics.value = await api.getMetrics(newRange);
    isLoading.value = false;
};

const handleRefresh = () => {
    isLoading.value = true;
    // Refetch current data
    isLoading.value = false;
};
</script>

<template>
    <ProductWidget
        :metrics="metrics"
        :salesData="salesData"
        :categoryDistribution="[]"
        dateRange="30d"
        :loading="isLoading"
        @dateRangeChange="handleDateChange"
        @refresh="handleRefresh"
    />
</template>
```

---

## Exports (index.ts)

```typescript
// Easy import:
import { ProductWidget } from '@/Components/Widgets';

// With types:
import { 
    ProductWidget, 
    type ProductMetrics,
    type SalesDataPoint,
    type ProductWidgetProps 
} from '@/Components/Widgets';
```

---

## Customization Options

### Hide specific sections:
```vue
<!-- Hide metrics grid -->
<ProductWidget :showStats="false" />

<!-- Hide charts -->
<ProductWidget :showSales="false" :showCategory="false" />

<!-- Only show donut chart -->
<ProductWidget :showStats="false" :showSales="false" />
```

### Change date range:
```vue
<!-- Start with 90 days -->
<ProductWidget dateRange="90d" />
```

### Loading state:
```vue
<!-- Disable refresh during loading -->
<ProductWidget :loading="isLoading" />
<!-- Refresh button shows spinner when loading is true -->
```

---

## Chart Libraries Used

1. **@unovis/vue** - Vue wrapper for Unovis charts
   - VisXYContainer, VisArea, VisLine, VisAxis, VisGroupedBar
   - VisSingleContainer, VisDonut

2. **lucide-vue-next** - Icons
   - Package, TrendingUp, DollarSign, AlertTriangle, etc.

3. **shadcn-vue** - UI components
   - Card, Button, Badge, Select, ChartContainer

---

## Summary

**ProductWidget Pattern:**
1. Define TypeScript interfaces for data
2. Accept props + emit events
3. Create computed properties for derived values
4. Setup chart configs with colors
5. Render metrics cards in a grid
6. Add alert cards for critical issues
7. Display charts for trends and distributions
8. Export component + types from index.ts

**Same pattern can be used for:**
- OrderWidget (Orders, Revenue, Fulfillment)
- InventoryWidget (Stock levels, Turnover rate)
- SalesWidget (Daily sales, Customer LTV)
- Any dashboard metric tracking
