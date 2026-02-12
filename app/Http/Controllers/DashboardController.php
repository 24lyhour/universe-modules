<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Customer\Models\Customer;
use Modules\Customer\Services\CustomerWidgetService;
use Modules\Menu\Models\Menu;
use Modules\Menu\Models\MenuType;
use Modules\Menu\Models\Category;
use Modules\Outlet\Models\Outlet;

class DashboardController extends Controller
{
    public function __construct(
        protected CustomerWidgetService $customerWidgetService
    ) {}

    public function index(Request $request): Response
    {
        $dateRange = $request->input('date_range', '30d');
        $tab = $request->input('tab', 'customer');

        return Inertia::render('Dashboard', [
            'widgets' => [
                'customer' => $this->getCustomerStats(),
                'menu' => $this->getMenuStats(),
                'outlet' => $this->getOutletStats(),
            ],
            'customerWidget' => $this->customerWidgetService->getWidgetData($dateRange),
            'dateRange' => $dateRange,
            'tab' => $tab,
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
}
