# MenuService Flow Documentation

This document explains the complete flow of how dynamic sidebar menus work from the Laravel backend to the Vue.js frontend.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              BACKEND (Laravel)                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────────────┐    ┌──────────────────────┐                       │
│  │  Module Service      │    │  Module Service      │                       │
│  │  Provider            │    │  Provider            │                       │
│  │  (Outlet, Customer)  │    │  (Portfolio, etc.)   │                       │
│  └──────────┬───────────┘    └──────────┬───────────┘                       │
│             │                           │                                    │
│             │  registerMenuItems()      │  registerMenuItems()               │
│             │                           │                                    │
│             ▼                           ▼                                    │
│  ┌──────────────────────────────────────────────────────────────────┐       │
│  │                        MenuService                                │       │
│  │  - addMenuItem()                                                  │       │
│  │  - addSubmenuItem()                                               │       │
│  │  - getMenus()                                                     │       │
│  └──────────────────────────────────────────────────────────────────┘       │
│                                    │                                         │
│                                    │ getMenus()                              │
│                                    ▼                                         │
│  ┌──────────────────────────────────────────────────────────────────┐       │
│  │              HandleInertiaRequests Middleware                     │       │
│  │              - share('menus', MenuService::getMenus())            │       │
│  └──────────────────────────────────────────────────────────────────┘       │
│                                    │                                         │
└────────────────────────────────────┼─────────────────────────────────────────┘
                                     │
                                     │ Inertia shared props
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                              FRONTEND (Vue.js)                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────┐       │
│  │                         AppSidebar.vue                            │       │
│  │  const dynamicModuleItems = computed(() =>                        │       │
│  │      page.props.menus?.primary || []                              │       │
│  │  );                                                               │       │
│  └──────────────────────────────────────────────────────────────────┘       │
│                                    │                                         │
│                                    │ :items="dynamicModuleItems"             │
│                                    ▼                                         │
│  ┌──────────────────────────────────────────────────────────────────┐       │
│  │                      NavDynamicModules.vue                        │       │
│  │  - Renders collapsible menu items                                 │       │
│  │  - Maps icon strings to Lucide components                         │       │
│  │  - Handles active state detection                                 │       │
│  └──────────────────────────────────────────────────────────────────┘       │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Step-by-Step Flow

### Step 1: Module Registers Menu Items

When Laravel boots, each module's ServiceProvider registers its menu items.

**File:** `Modules/{Module}/app/Providers/{Module}ServiceProvider.php`

```php
public function boot(): void
{
    // ... other registrations
    $this->registerMenuItems();
}

protected function registerMenuItems(): void
{
    // Wrap in booted() to ensure routes are available
    $this->app->booted(function () {
        // Register main menu item
        MenuService::addMenuItem(
            menu: 'primary',
            id: 'outlet',
            title: __('Outlet'),
            url: route('outlet.outlets.index'),
            icon: 'Building2',
            order: 50,
            permissions: null,
            route: 'outlet.*'
        );

        // Register submenu items
        MenuService::addSubmenuItem(
            'primary',
            'outlet',
            __('Outlets'),
            route('outlet.outlets.index'),
            10,
            null,
            'outlet.outlets.*',
            'Building2'
        );
    });
}
```

### Step 2: MenuService Stores Menu Items

The MenuService is a static class that collects all menu items from different modules.

**File:** `app/Services/MenuService.php`

```php
<?php

namespace App\Services;

class MenuService
{
    protected static array $menus = [
        'primary' => [],
        'footer' => [],
    ];

    /**
     * Add a main menu item.
     */
    public static function addMenuItem(
        string $menu,
        string $id,
        string $title,
        string $url,
        string $icon,
        int $order = 0,
        ?string $permissions = null,
        ?string $route = null
    ): void {
        static::$menus[$menu][$id] = [
            'id' => $id,
            'title' => $title,
            'url' => $url,
            'icon' => $icon,
            'order' => $order,
            'permissions' => $permissions,
            'route' => $route,
            'items' => [],
        ];
    }

    /**
     * Add a submenu item to a parent menu.
     */
    public static function addSubmenuItem(
        string $menu,
        string $parentId,
        string $title,
        string $url,
        int $order = 0,
        ?string $permissions = null,
        ?string $route = null,
        ?string $icon = null
    ): void {
        if (isset(static::$menus[$menu][$parentId])) {
            static::$menus[$menu][$parentId]['items'][] = [
                'title' => $title,
                'url' => $url,
                'order' => $order,
                'permissions' => $permissions,
                'route' => $route,
                'icon' => $icon,
            ];
        }
    }

    /**
     * Get all menus, sorted by order.
     */
    public static function getMenus(): array
    {
        $result = [];

        foreach (static::$menus as $menuKey => $items) {
            // Sort main items by order
            $sorted = collect($items)->sortBy('order')->values();

            // Sort submenu items by order
            $sorted = $sorted->map(function ($item) {
                $item['items'] = collect($item['items'])
                    ->sortBy('order')
                    ->values()
                    ->toArray();
                return $item;
            });

            $result[$menuKey] = $sorted->toArray();
        }

        return $result;
    }
}
```

### Step 3: Inertia Middleware Shares Menu Data

The HandleInertiaRequests middleware shares the menu data with every Inertia response.

**File:** `app/Http/Middleware/HandleInertiaRequests.php`

```php
<?php

namespace App\Http\Middleware;

use App\Services\MenuService;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'menus' => MenuService::getMenus(),
            // ... other shared data
        ]);
    }
}
```

### Step 4: AppSidebar Receives Menu Data

The AppSidebar.vue component accesses the shared menu data via Inertia's page props.

**File:** `resources/js/components/AppSidebar.vue`

```vue
<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import NavDynamicModules from './NavDynamicModules.vue';

const page = usePage<AppPageProps>();

// Get dynamic menu items from backend via MenuService
const dynamicModuleItems = computed(() => page.props.menus?.primary || []);
const footerNavItems = computed(() => page.props.menus?.footer || []);
</script>

<template>
    <Sidebar>
        <SidebarContent>
            <!-- Static modules -->
            <NavModules :items="staticModuleItems" label="Modules" />

            <!-- Dynamic modules from MenuService -->
            <NavDynamicModules
                v-if="dynamicModuleItems.length > 0"
                :items="dynamicModuleItems"
            />
        </SidebarContent>

        <SidebarFooter>
            <NavDynamicModules
                v-if="footerNavItems.length > 0"
                :items="footerNavItems"
                label="Settings"
            />
        </SidebarFooter>
    </Sidebar>
</template>
```

### Step 5: NavDynamicModules Renders Menu Items

The NavDynamicModules component renders the menu items with icons and active state detection.

**File:** `resources/js/components/NavDynamicModules.vue`

```vue
<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import {
    Building2,
    LayoutGrid,
    Users,
    // ... other icons
    type LucideIcon,
} from 'lucide-vue-next';

defineProps<{
    items: MenuItem[];
    label?: string;
}>();

const page = usePage();

// Map icon strings to Lucide components
const iconMap: Record<string, LucideIcon> = {
    Building2,
    LayoutGrid,
    Users,
    // ... other icons
};

const getIcon = (iconName: string | null): LucideIcon | null => {
    if (!iconName) return null;
    return iconMap[iconName] || null;
};

// Detect active route
const isRouteActive = (route: string | null): boolean => {
    if (!route) return false;
    const currentUrl = page.url;
    const routePattern = route.replace('.*', '').replace('.', '/');
    return currentUrl.includes(routePattern);
};
</script>

<template>
    <SidebarGroup>
        <SidebarMenu>
            <Collapsible
                v-for="item in items"
                :key="item.id"
                :default-open="isModuleActive(item)"
            >
                <SidebarMenuItem>
                    <CollapsibleTrigger as-child>
                        <SidebarMenuButton :is-active="isModuleActive(item)">
                            <component :is="getIcon(item.icon)" />
                            <span>{{ item.title }}</span>
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            <SidebarMenuSubItem
                                v-for="subItem in item.items"
                                :key="subItem.title"
                            >
                                <SidebarMenuSubButton
                                    :is-active="isRouteActive(subItem.route)"
                                >
                                    <Link :href="subItem.url">
                                        <component
                                            v-if="getIcon(subItem.icon)"
                                            :is="getIcon(subItem.icon)"
                                        />
                                        <span>{{ subItem.title }}</span>
                                    </Link>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        </SidebarMenu>
    </SidebarGroup>
</template>
```

## Data Structure

### Menu Item Structure (Backend → Frontend)

```typescript
// TypeScript interface (resources/js/types/index.d.ts)
interface MenuSubItem {
    title: string;
    url: string;
    order: number;
    permissions: string | null;
    route: string | null;
    icon: string | null;
}

interface MenuItem {
    id: string;
    title: string;
    url: string;
    icon: string;
    order: number;
    permissions: string | null;
    route: string | null;
    items: MenuSubItem[];
}

interface Menus {
    primary: MenuItem[];
    footer: MenuItem[];
}
```

### Example JSON Response

```json
{
    "menus": {
        "primary": [
            {
                "id": "customer",
                "title": "Customer",
                "url": "/dashboard/customers",
                "icon": "Users",
                "order": 40,
                "permissions": null,
                "route": "customer.*",
                "items": [
                    {
                        "title": "Customers",
                        "url": "/dashboard/customers",
                        "order": 10,
                        "permissions": null,
                        "route": "customer.customers.*",
                        "icon": "Users"
                    }
                ]
            },
            {
                "id": "outlet",
                "title": "Outlet",
                "url": "/dashboard/outlets",
                "icon": "Building2",
                "order": 50,
                "permissions": null,
                "route": "outlet.*",
                "items": [
                    {
                        "title": "Outlets",
                        "url": "/dashboard/outlets",
                        "order": 10,
                        "permissions": null,
                        "route": "outlet.outlets.*",
                        "icon": "Building2"
                    },
                    {
                        "title": "Outlet Types",
                        "url": "/dashboard/outlet-types",
                        "order": 20,
                        "permissions": null,
                        "route": "outlet.outlet-types.*",
                        "icon": "LayoutGrid"
                    }
                ]
            }
        ],
        "footer": []
    }
}
```

## Boot Order

Understanding the boot order is important:

```
1. Laravel Application Boots
   │
2. Service Providers register()
   │
3. Service Providers boot()
   │   ├── ModuleA::boot() → registerMenuItems()
   │   ├── ModuleB::boot() → registerMenuItems()
   │   └── ModuleC::boot() → registerMenuItems()
   │
4. app->booted() callbacks execute
   │   └── MenuService collects all menu items
   │
5. HTTP Request arrives
   │
6. HandleInertiaRequests middleware
   │   └── MenuService::getMenus() → shares with Inertia
   │
7. Vue.js renders AppSidebar
   │   └── page.props.menus → NavDynamicModules
   │
8. User sees dynamic sidebar
```

## Key Points

1. **Use `$this->app->booted()`**: Always wrap menu registration in the booted callback to ensure Laravel routes are available for `route()` helper.

2. **Static class pattern**: MenuService uses static methods so menu items persist across the request lifecycle.

3. **Order matters**: Items are sorted by `order` value. Use increments of 10 (10, 20, 30...) to allow inserting new items later.

4. **Icon mapping**: Icon names are strings on the backend and mapped to Lucide components on the frontend via `iconMap`.

5. **Route-based active state**: The `route` parameter is used for detecting which menu item is active based on current URL.

## Files Reference

| File | Purpose |
|------|---------|
| `Modules/*/Providers/*ServiceProvider.php` | Registers menu items |
| `app/Services/MenuService.php` | Stores and retrieves menu items |
| `app/Http/Middleware/HandleInertiaRequests.php` | Shares menus with Inertia |
| `resources/js/components/AppSidebar.vue` | Main sidebar component |
| `resources/js/components/NavDynamicModules.vue` | Renders dynamic menu items |
| `resources/js/types/index.d.ts` | TypeScript interfaces |
