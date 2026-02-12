# Widget Pattern Cheat Sheet

## Quick Comparison: CustomerWidget vs ProductWidget

```
CUSTOMERWIDGET                          PRODUCTWIDGET
├─ Metrics                              ├─ Metrics
│  ├─ total customers                   │  ├─ total products
│  ├─ new customers                     │  ├─ active products
│  ├─ active customers                  │  ├─ low stock ⚠️
│  ├─ returning customers               │  ├─ out of stock ❌
│  ├─ at risk customers ⚠️              │  ├─ discontinued
│  ├─ churned customers ❌              │  ├─ total revenue
│  └─ vip customers                     │  ├─ avg price
│                                       │  ├─ total sold
│                                       │  └─ inventory value
│
├─ Chart 1: Growth Trend               ├─ Chart 1: Sales Trend
│  └─ Area + Line over time            │  └─ Area + Line over time
│
├─ Chart 2: Status Distribution        ├─ Chart 2: Status Distribution
│  └─ Donut (5 statuses)               │  └─ Donut (4 statuses)
│
└─ Alert: At Risk customers            └─ Alert: Out of Stock items
```

## Component Structure Template

```typescript
<script setup lang="ts">
// 1. IMPORTS
import { computed, watch } from 'vue';
import { Card, CardContent, ... } from '@/components/ui/...';
import { Package, TrendingUp, ... } from 'lucide-vue-next';

// 2. TYPES
export interface Metrics {
    // Core numbers
}

export interface DataPoint {
    // Time series data
}

export interface WidgetProps {
    // What parent passes
}

// 3. PROPS & EMITS
const props = withDefaults(defineProps<WidgetProps>(), {
    dateRange: '30d',
    loading: false,
});

const emit = defineEmits<{
    (e: 'dateRangeChange', value: string): void;
    (e: 'refresh'): void;
}>();

// 4. STATE
const selectedDateRange = ref(props.dateRange);

// 5. COMPUTED
const growthTrend = computed(() => ({...}));
const stockStatus = computed(() => ({...}));

// 6. CHART CONFIG
const chartConfig: ChartConfig = {
    value: { label: '...', color: 'var(--chart-1)' },
    ...
};

// 7. CHART DATA
const donutData = computed(() => [...]);
const statusBarData = computed(() => [...]);

// 8. WATCHERS
watch(selectedDateRange, (newValue) => {
    emit('dateRangeChange', newValue);
});

// 9. METHODS
const handleRefresh = () => emit('refresh');
const formatNumber = (num: number) => new Intl.NumberFormat().format(num);
const getStatusBadgeVariant = (status: string) => {...};
</script>

<template>
    <!-- PART 1: Header -->
    <!-- PART 2: Metrics Grid (4 columns) -->
    <!-- PART 3: Secondary Metrics (4 columns) -->
    <!-- PART 4: Alert Card (if condition) -->
    <!-- PART 5: Charts Section (2 columns) -->
    <!-- PART 6: Status Bar Chart -->
</template>
```

## Key Methods to Implement

```typescript
// Format numbers with thousands separator
const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
};
// 1234 → "1,234"

// Format as currency
const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    }).format(num);
};
// 1234 → "$1,234"

// Format as percentage
const formatPercent = (num: number) => {
    return `${num.toFixed(1)}%`;
};
// 12.456 → "12.5%"

// Determine badge colors
const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
        case 'active': return 'default';        // Green
        case 'pending': return 'secondary';     // Gray
        case 'warning': return 'destructive';   // Red
        default: return 'outline';
    }
};
```

## Template Card Pattern

```vue
<!-- Metric Card -->
<Card>
    <!-- Header: Title + Icon -->
    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle class="text-sm font-medium">Card Title</CardTitle>
        <IconName class="h-4 w-4 text-color" />
    </CardHeader>
    
    <!-- Content: Main Value + Subtext -->
    <CardContent>
        <div class="text-2xl font-bold">{{ value }}</div>
        <p class="text-xs text-muted-foreground">{{ subtext }}</p>
    </CardContent>
</Card>
```

## Chart Container Pattern

```vue
<!-- Area + Line Chart -->
<ChartContainer :config="chartConfig" class="h-[280px]" cursor>
    <VisXYContainer :data="timeSeriesData">
        <VisArea :y="(d) => d.value" :opacity="0.4" />
        <VisLine :y="(d) => d.value" :line-width="2" />
        <VisAxis type="x" :tick-format="(i) => data[i]?.label" />
        <VisAxis type="y" :num-ticks="5" />
        <ChartTooltip />
        <ChartCrosshair :template="(d) => `...`" />
    </VisXYContainer>
</ChartContainer>

<!-- Donut Chart -->
<ChartContainer :config="chartConfig" class="h-[200px]">
    <VisSingleContainer :data="donutData">
        <VisDonut
            :value="(d) => d.value"
            :color="(d) => chartConfig[d.status].color"
            :central-label="total"
        />
        <ChartTooltip />
    </VisSingleContainer>
</ChartContainer>

<!-- Bar Chart -->
<ChartContainer class="h-[200px]">
    <VisXYContainer :data="barData">
        <VisGroupedBar :y="(d) => d.value" />
        <VisAxis type="x" :tick-format="(i) => data[i]?.label" />
        <VisAxis type="y" />
        <ChartTooltip />
    </VisXYContainer>
</ChartContainer>
```

## Alert Card Pattern

```vue
<!-- Shows only if condition is true -->
<Card v-if="metrics.alertCondition > 0" class="border-red-200 bg-red-50">
    <CardContent class="flex items-center gap-4 pt-6">
        <!-- Icon -->
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle class="h-5 w-5 text-red-600" />
        </div>
        
        <!-- Message -->
        <div class="flex-1">
            <p class="font-medium text-red-800">Alert Title</p>
            <p class="text-sm text-red-600">Alert description</p>
        </div>
        
        <!-- Action Button -->
        <Button variant="outline" size="sm" class="border-red-300">
            Action
        </Button>
    </CardContent>
</Card>
```

## Event Handling Pattern

```typescript
// Props to parent emit events
const emit = defineEmits<{
    (e: 'dateRangeChange', value: string): void;
    (e: 'refresh'): void;
}>();

// Watch for prop changes
watch(selectedDateRange, (newValue) => {
    emit('dateRangeChange', newValue);
});

// Handle button clicks
const handleRefresh = () => {
    emit('refresh');
};
```

## Usage in Parent Component

```vue
<script setup>
import { ProductWidget } from '@/Components/Widgets';
import { ref } from 'vue';

const metrics = ref({...});
const salesData = ref([...]);
const isLoading = ref(false);

const handleDateChange = async (range: string) => {
    isLoading.value = true;
    const newMetrics = await api.getMetrics(range);
    metrics.value = newMetrics;
    isLoading.value = false;
};

const handleRefresh = async () => {
    isLoading.value = true;
    const newMetrics = await api.getMetrics(selectedDateRange.value);
    metrics.value = newMetrics;
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
        :showStats="true"
        :showSales="true"
        :showCategory="true"
        @dateRangeChange="handleDateChange"
        @refresh="handleRefresh"
    />
</template>
```

## Visibility Control Pattern

```typescript
// Toggle sections via props
interface WidgetProps {
    showStats?: boolean;      // Toggle metrics grid
    showSales?: boolean;      // Toggle sales chart
    showCategory?: boolean;   // Toggle category chart
}

// In template:
<div v-if="showStats" class="grid ...">
    <!-- Metrics cards -->
</div>

<div v-if="showSales || showCategory" class="grid ...">
    <!-- Charts -->
</div>

<Card v-if="showCategory">
    <!-- Bar chart -->
</Card>
```

## File Structure

```
Modules/Product/
└── resources/js/
    └── Components/
        └── Widgets/
            ├── ProductWidget.vue        ← Main component
            └── index.ts                 ← Exports
```

## Color Classes Used

```
CSS Variables (in ChartConfig):
- var(--chart-1) → Blue
- var(--chart-2) → Orange
- var(--chart-3) → Green
- var(--chart-4) → Red
- var(--chart-5) → Purple

Tailwind Colors (in Badge/Alert):
- text-green-500, bg-green-50, border-green-200
- text-red-500, bg-red-50, border-red-200
- text-amber-500, bg-amber-50, border-amber-200
- text-blue-500, bg-blue-50, border-blue-200
- text-purple-500, text-purple-600
```

## Common Patterns Reference

```typescript
// If-else with styling
:class="condition ? 'text-green-600' : 'text-red-600'"

// Dynamic component
:is="isPositive ? ArrowUpRight : ArrowDownRight"

// Conditional rendering
v-if="metrics.outOfStock > 0"
v-show="showCharts"

// List rendering with computed
v-for="(item, index) in donutData"

// Two-way binding
v-model="selectedDateRange"

// Event binding
@click="handleRefresh"
@dateRangeChange="handleDateChange"

// Class bindings
:class="{ 'animate-spin': loading }"

// Style bindings
:style="{ width: `${percentage}%` }"
```

---

## Remember

✅ Same pattern for every widget:
1. Define types
2. Accept props, emit events
3. Create computed values
4. Setup chart config
5. Render metrics grid
6. Add alert cards
7. Display charts
8. Export from index.ts

✅ Reuse for:
- Orders, Sales, Revenue, Inventory, Customers, Users, etc.

✅ Always:
- Use TypeScript interfaces
- Format numbers properly
- Show loading states
- Handle date ranges
- Emit events to parent
