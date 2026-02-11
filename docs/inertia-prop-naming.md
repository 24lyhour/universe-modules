# Inertia Prop Naming Convention

This document explains a critical naming convention to avoid conflicts between shared props and page-specific props in Inertia.js.

## The Problem

Inertia.js merges **shared props** (from middleware) with **page-specific props** (from controllers). If they have the same name, the page-specific prop **overwrites** the shared prop.

### Example Issue: Menu Module

The sidebar uses shared props from `HandleInertiaRequests` middleware:

```php
// app/Http/Middleware/HandleInertiaRequests.php
'menus' => [
    'primary' => MenuService::getMenuForUser('primary', $request->user()),
    'footer' => MenuService::getMenuForUser('footer', $request->user()),
],
```

If a controller also passes a prop named `menus`:

```php
// WRONG - This overwrites the shared 'menus' prop!
return Inertia::render('menu::dashboard/Menu/Index', [
    'menus' => MenuResource::collection($menus)->response()->getData(true),
]);
```

**Result:** The sidebar loses its menu data because `menus` is overwritten.

## The Solution

Use unique prop names that don't conflict with shared props.

```php
// CORRECT - Use a unique name like 'menuItems'
return Inertia::render('menu::dashboard/Menu/Index', [
    'menuItems' => MenuResource::collection($menus)->response()->getData(true),
]);
```

## Reserved Prop Names (Do NOT Use)

These names are used by `HandleInertiaRequests` middleware and should **never** be used in controllers:

| Prop Name | Purpose |
|-----------|---------|
| `name` | Application name |
| `quote` | Inspiring quote |
| `auth` | Authenticated user data |
| `sidebarOpen` | Sidebar state |
| `menus` | Dynamic sidebar menu items |
| `flash` | Flash messages (success, error, warning, info) |

## Recommended Naming Pattern

For paginated data in controllers, use descriptive names:

| Module | Bad Name | Good Name |
|--------|----------|-----------|
| Menu | `menus` | `menuItems` or `menuList` |
| User | `users` | `userItems` or `userList` |
| Auth | `auth` | `authData` or `authInfo` |

## How to Check Shared Props

View all shared props in:

```
app/Http/Middleware/HandleInertiaRequests.php
```

The `share()` method defines all props that are automatically available on every page.

## Debugging Tips

If sidebar or other global UI elements disappear on a specific page:

1. Check the controller's `Inertia::render()` call
2. Compare prop names with `HandleInertiaRequests::share()`
3. Look for naming conflicts
4. Rename the page-specific prop to avoid collision

## Example Fix

### Before (Broken)

```php
// Controller
return Inertia::render('menu::dashboard/Menu/Index', [
    'menus' => $paginatedMenus,  // Conflicts with shared 'menus'
]);
```

```typescript
// Vue component
const { menus } = defineProps<{ menus: PaginatedResponse<Menu> }>();
```

### After (Fixed)

```php
// Controller
return Inertia::render('menu::dashboard/Menu/Index', [
    'menuItems' => $paginatedMenus,  // Unique name
]);
```

```typescript
// Vue component
const { menuItems } = defineProps<{ menuItems: PaginatedResponse<Menu> }>();
```

```typescript
// Types
export interface MenuIndexProps {
    menuItems: PaginatedResponse<Menu>;  // Match controller prop name
    filters: MenuFilters;
    stats: MenuStats;
}
```

## Related Files

- `app/Http/Middleware/HandleInertiaRequests.php` - Shared props definition
- `resources/js/components/AppSidebar.vue` - Sidebar using shared `menus` prop
- `resources/js/types/index.d.ts` - AppPageProps type definition
