# MenuService - Dynamic Sidebar Menus

This guide explains how to register dynamic sidebar menus for your modules using the `MenuService`.

## Overview

The `MenuService` allows modules to register their menu items dynamically instead of hardcoding them in `AppSidebar.vue`. This provides:

- **Modularity**: Each module manages its own menu items
- **Flexibility**: Menu items can be added/removed based on permissions
- **Consistency**: All dynamic modules follow the same pattern

## Available Menu Locations

| Menu ID | Location | Description |
|---------|----------|-------------|
| `primary` | Main sidebar | Primary navigation items |
| `footer` | Sidebar footer | Settings and footer navigation |

## Available Icons

The following icons are available in `NavDynamicModules.vue`:

```
Briefcase, Building2, CalendarDays, CreditCard, FileText, Hotel,
LayoutGrid, ListOrdered, Mail, MessageSquareQuote, MonitorPlay,
PanelBottom, PanelTop, Settings, UtensilsCrossed, Users, Wrench
```

To add new icons, update the `iconMap` in `resources/js/components/NavDynamicModules.vue`.

## Implementation Steps

### Step 1: Import MenuService

In your module's `ServiceProvider.php`:

```php
<?php

namespace Modules\YourModule\Providers;

use App\Services\MenuService;
use Illuminate\Support\ServiceProvider;

class YourModuleServiceProvider extends ServiceProvider
{
    // ...
}
```

### Step 2: Call registerMenuItems in boot()

```php
public function boot(): void
{
    $this->registerCommands();
    $this->registerCommandSchedules();
    $this->registerTranslations();
    $this->registerConfig();
    $this->registerViews();
    $this->loadMigrationsFrom(module_path($this->name, 'database/migrations'));
    $this->registerMenuItems(); // Add this line
}
```

### Step 3: Create registerMenuItems Method

```php
/**
 * Register menu items for the module.
 */
protected function registerMenuItems(): void
{
    $this->app->booted(function () {
        // Register main menu item
        MenuService::addMenuItem(
            menu: 'primary',           // Menu location: 'primary' or 'footer'
            id: 'your-module',         // Unique identifier
            title: __('Your Module'),  // Display title (supports i18n)
            url: route('your-module.index'), // Main URL
            icon: 'LayoutGrid',        // Icon name from iconMap
            order: 50,                 // Sort order (lower = higher)
            permissions: null,         // Permission string or null
            route: 'your-module.*'     // Route pattern for active state
        );

        // Register submenu items
        MenuService::addSubmenuItem(
            'primary',                          // Menu location
            'your-module',                      // Parent menu ID
            __('All Items'),                    // Title
            route('your-module.index'),         // URL
            10,                                 // Order
            null,                               // Permissions
            'your-module.index',                // Route pattern
            'LayoutGrid'                        // Icon (optional)
        );

        MenuService::addSubmenuItem(
            'primary',
            'your-module',
            __('Categories'),
            route('your-module.categories.index'),
            20,
            null,
            'your-module.categories.*',
            'FileText'
        );
    });
}
```

## Complete Example: Outlet Module

```php
<?php

namespace Modules\Outlet\Providers;

use App\Services\MenuService;
use Illuminate\Support\ServiceProvider;

class OutletServiceProvider extends ServiceProvider
{
    protected string $name = 'Outlet';
    protected string $nameLower = 'outlet';

    public function boot(): void
    {
        // ... other registrations
        $this->registerMenuItems();
    }

    protected function registerMenuItems(): void
    {
        $this->app->booted(function () {
            // Main menu item
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

            // Submenu items
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

            MenuService::addSubmenuItem(
                'primary',
                'outlet',
                __('Outlet Types'),
                route('outlet.outlet-types.index'),
                20,
                null,
                'outlet.outlet-types.*',
                'LayoutGrid'
            );
        });
    }
}
```

## Complete Example: Portfolio Module (with Footer)

```php
protected function registerMenuItems(): void
{
    $this->app->booted(function () {
        // Primary navigation
        MenuService::addMenuItem(
            menu: 'primary',
            id: 'portfolio',
            title: __('Portfolio'),
            url: route('porfolio.index'),
            icon: 'Briefcase',
            order: 200,
            permissions: null,
            route: 'porfolio.*'
        );

        MenuService::addSubmenuItem('primary', 'portfolio', __('Portfolios'), route('porfolio.index'), 10, null, 'porfolio.index', 'Briefcase');
        MenuService::addSubmenuItem('primary', 'portfolio', __('Headers'), route('porfolio.headers.index'), 20, null, 'porfolio.headers.*', 'PanelTop');
        MenuService::addSubmenuItem('primary', 'portfolio', __('Footers'), route('porfolio.footers.index'), 30, null, 'porfolio.footers.*', 'PanelBottom');
        MenuService::addSubmenuItem('primary', 'portfolio', __('Pages'), route('porfolio.pages.index'), 40, null, 'porfolio.pages.*', 'FileText');
        MenuService::addSubmenuItem('primary', 'portfolio', __('Services'), route('porfolio.services.index'), 50, null, 'porfolio.services.*', 'Wrench');
        MenuService::addSubmenuItem('primary', 'portfolio', __('Testimonials'), route('porfolio.testimonials.index'), 60, null, 'porfolio.testimonials.*', 'MessageSquareQuote');
        MenuService::addSubmenuItem('primary', 'portfolio', __('Messages'), route('porfolio.messages.index'), 70, null, 'porfolio.messages.*', 'Mail');

        // Footer navigation (Settings)
        MenuService::addMenuItem(
            menu: 'footer',
            id: 'settings',
            title: __('Settings'),
            url: route('porfolio.settings.index'),
            icon: 'Settings',
            order: 100,
            permissions: null,
            route: 'porfolio.settings.*'
        );

        MenuService::addSubmenuItem('footer', 'settings', __('Portfolio Settings'), route('porfolio.settings.index'), 10, null, 'porfolio.settings.*', 'Settings');
    });
}
```

## API Reference

### MenuService::addMenuItem()

| Parameter | Type | Description |
|-----------|------|-------------|
| `menu` | string | Menu location: `'primary'` or `'footer'` |
| `id` | string | Unique identifier for the menu item |
| `title` | string | Display title (use `__()` for i18n) |
| `url` | string | Main URL for the menu item |
| `icon` | string | Icon name from iconMap |
| `order` | int | Sort order (lower numbers appear first) |
| `permissions` | string\|null | Permission string or null |
| `route` | string | Route pattern for active state detection |

### MenuService::addSubmenuItem()

| Parameter | Type | Description |
|-----------|------|-------------|
| `menu` | string | Menu location: `'primary'` or `'footer'` |
| `parentId` | string | Parent menu item ID |
| `title` | string | Display title |
| `url` | string | URL for the submenu item |
| `order` | int | Sort order within parent |
| `permissions` | string\|null | Permission string or null |
| `route` | string | Route pattern for active state |
| `icon` | string\|null | Icon name (optional) |

## Removing from Static Items

After implementing MenuService, remove your module from `staticModuleItems` in `resources/js/components/AppSidebar.vue`:

```javascript
// Before: Remove this from staticModuleItems array
{
    title: 'Outlet',
    icon: Store,
    items: [
        { title: 'Outlets', href: outlet.outlets.index.url(), icon: List },
        { title: 'Outlet Types', href: '/dashboard/outlet-types', icon: Tags },
    ],
},
```

Also remove any unused imports (routes and icons).

## Adding New Icons

To add a new icon to the dynamic menu system:

1. Open `resources/js/components/NavDynamicModules.vue`
2. Import the icon from `lucide-vue-next`
3. Add it to the `iconMap` object

```typescript
import {
    // ... existing imports
    NewIcon,
} from 'lucide-vue-next';

const iconMap: Record<string, LucideIcon> = {
    // ... existing icons
    NewIcon,
};
```

## Best Practices

1. **Use `$this->app->booted()`**: Always wrap menu registration in `booted()` callback to ensure routes are available
2. **Use route names**: Prefer `route('name')` over hardcoded URLs
3. **Use i18n**: Wrap titles with `__()` for translation support
4. **Order wisely**: Use meaningful order numbers (10, 20, 30...) to allow insertion of new items
5. **Match route patterns**: Use wildcard patterns like `'module.*'` for proper active state detection
