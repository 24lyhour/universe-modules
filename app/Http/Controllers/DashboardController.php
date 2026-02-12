<?php

namespace App\Http\Controllers;

use App\Models\Widget;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Customer\Models\Customer;
use Modules\Customer\Services\CustomerWidgetService;
use Modules\Menu\Models\Menu;
use Modules\Menu\Models\MenuType;
use Modules\Menu\Models\Category;
use Modules\Outlet\Models\Outlet;
use Modules\Product\Models\Product;

class DashboardController extends Controller
{
    public function __construct(
        protected CustomerWidgetService $customerWidgetService
    ) {}

    public function index(Request $request): Response
    {
        $dateRange = $request->input('date_range', '30d');
        $tab = $request->input('tab', 'customer');

        // Get all dashboard widgets with their status, ordered by sort_order
        $allWidgets = Widget::dashboard()
            ->select('id', 'name', 'module', 'chart_type', 'status', 'sort_order')
            ->orderBy('sort_order')
            ->get();

        // Get modules that have AT LEAST ONE active widget, ordered by min sort_order
        // If ANY widget in a module is active, show that module's tab
        $activeModules = $allWidgets
            ->where('status', true)
            ->groupBy('module')
            ->map(fn($widgets) => $widgets->min('sort_order'))
            ->sortBy(fn($sortOrder) => $sortOrder)
            ->keys()
            ->map(fn($m) => strtolower($m))
            ->values()
            ->toArray();

        // Get individual widget statuses by chart_type for granular control
        $widgetStatuses = $allWidgets->mapWithKeys(function ($widget) {
            $key = strtolower($widget->module) . '_' . $widget->chart_type;
            return [$key => $widget->status];
        })->toArray();

        // Only load data for active modules
        $widgets = [];
        if (in_array('customer', $activeModules)) {
            $widgets['customer'] = $this->getCustomerStats();
        }
        if (in_array('menu', $activeModules)) {
            $widgets['menu'] = $this->getMenuStats();
        }
        if (in_array('outlet', $activeModules)) {
            $widgets['outlet'] = $this->getOutletStats();
        }
        if (in_array('product', $activeModules)) {
            $widgets['product'] = $this->getProductStats();
        }

        return Inertia::render('Dashboard', [
            'widgets' => $widgets,
            'customerWidget' => in_array('customer', $activeModules)
                ? $this->customerWidgetService->getWidgetData($dateRange)
                : null,
            'productWidget' => in_array('product', $activeModules)
                ? $this->getProductWidgetData($dateRange)
                : null,
            'dateRange' => $dateRange,
            'tab' => $tab,
            'activeWidgets' => $activeModules,
            'widgetStatuses' => $widgetStatuses,
        ]);
    }

    private function getCustomerStats(): array
    {
        return [
            'total' => Customer::count(),
            'active' => Customer::where('status', 'active')->count(),
            'inactive' => Customer::where('status', 'inactive')->count(),
            'suspended' => Customer::where('status', 'suspended')->count(),
            'recent' => Customer::latest()
                ->take(5)
                ->get(['id', 'name', 'email', 'status', 'created_at'])
                ->toArray(),
        ];
    }

    private function getMenuStats(): array
    {
        return [
            'total_menus' => Menu::count(),
            'active_menus' => Menu::where('status', true)->count(),
            'inactive_menus' => Menu::where('status', false)->count(),
            'total_categories' => Category::count(),
            'total_types' => MenuType::count(),
            'recent' => Menu::with(['outlet', 'menuType'])
                ->latest()
                ->take(5)
                ->get(['id', 'name', 'outlet_id', 'menu_type_id', 'status', 'created_at'])
                ->map(fn($menu) => [
                    'id' => $menu->id,
                    'name' => $menu->name,
                    'outlet_name' => $menu->outlet?->name,
                    'menu_type_name' => $menu->menuType?->name,
                    'status' => $menu->status,
                    'created_at' => $menu->created_at,
                ])
                ->toArray(),
        ];
    }

    private function getOutletStats(): array
    {
        return [
            'total' => Outlet::count(),
            'active' => Outlet::where('status', 'active')->count(),
            'inactive' => Outlet::where('status', 'inactive')->count(),
            'recent' => Outlet::latest()
                ->take(5)
                ->get(['id', 'name', 'address', 'status', 'created_at'])
                ->toArray(),
        ];
    }

    private function getProductStats(): array
    {
        return [
            'total' => Product::count(),
            'active' => Product::where('status', 'active')->count(),
            'out_of_stock' => Product::where('stock', '<=', 0)->count(),
            'low_stock' => Product::where('stock', '>', 0)->where('stock', '<=', 10)->count(),
            'discontinued' => Product::where('status', 'discontinued')->count(),
        ];
    }

    private function getProductWidgetData(string $dateRange): array
    {
        $products = Product::all();
        $totalProducts = Product::count();
        
        // Generate mock sales data for chart
        $salesData = [];
        for ($i = 4; $i >= 0; $i--) {
            $salesData[] = [
                'label' => now()->subWeeks($i)->format('M d'),
                'value' => rand(200, 500),
                'revenue' => rand(9000, 25000),
                'sold' => rand(200, 500),
            ];
        }

        return [
            'metrics' => [
                'total' => $totalProducts,
                'active' => Product::where('status', 'active')->count(),
                'outOfStock' => Product::where('stock', '<=', 0)->count(),
                'lowStock' => Product::where('stock', '>', 0)->where('stock', '<=', 10)->count(),
                'discontinued' => Product::where('status', 'discontinued')->count(),
                'totalRevenue' => $products->sum('price') ?? 0,
                'averagePrice' => $products->avg('price') ?? 0,
                'totalSold' => $products->sum('stock') ?? 0,
                'growthPercent' => 12.5,
                'previousPeriodTotal' => max($totalProducts - 10, 0),
                'topPerformingCount' => Product::where('stock', '>', 50)->count(),
                'inventoryValue' => $products->sum(function ($p) {
                    return ($p->stock ?? 0) * ($p->price ?? 0);
                }) ?? 0,
            ],
            'salesData' => $salesData,
            'categoryDistribution' => [],
        ];
    }
}
