<?php

namespace App\Services;

class MenuService
{
    /**
     * Store menu items by menu type.
     *
     * @var array<string, array>
     */
    protected static array $menus = [];

    /**
     * Add a menu item to a specific menu.
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
        if (! isset(static::$menus[$menu])) {
            static::$menus[$menu] = [];
        }

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
     * Add a submenu item to a parent menu item.
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
        if (! isset(static::$menus[$menu][$parentId])) {
            return;
        }

        static::$menus[$menu][$parentId]['items'][] = [
            'title' => $title,
            'url' => $url,
            'order' => $order,
            'permissions' => $permissions,
            'route' => $route,
            'icon' => $icon,
        ];
    }

    /**
     * Get all menu items for a specific menu, sorted by order.
     *
     * @return array<int, array>
     */
    public static function getMenu(string $menu): array
    {
        if (! isset(static::$menus[$menu])) {
            return [];
        }

        $items = array_values(static::$menus[$menu]);

        // Sort main menu items by order
        usort($items, fn ($a, $b) => $a['order'] <=> $b['order']);

        // Sort submenu items by order
        foreach ($items as &$item) {
            if (! empty($item['items'])) {
                usort($item['items'], fn ($a, $b) => $a['order'] <=> $b['order']);
            }
        }

        return $items;
    }

    /**
     * Get all menus.
     *
     * @return array<string, array>
     */
    public static function getAllMenus(): array
    {
        return static::$menus;
    }

    /**
     * Check if a menu item exists.
     */
    public static function hasMenuItem(string $menu, string $id): bool
    {
        return isset(static::$menus[$menu][$id]);
    }

    /**
     * Remove a menu item.
     */
    public static function removeMenuItem(string $menu, string $id): void
    {
        unset(static::$menus[$menu][$id]);
    }

    /**
     * Clear all menu items for a specific menu.
     */
    public static function clearMenu(string $menu): void
    {
        static::$menus[$menu] = [];
    }

    /**
     * Clear all menus.
     */
    public static function clearAll(): void
    {
        static::$menus = [];
    }

    /**
     * Filter menu items based on user permissions.
     *
     * @return array<int, array>
     */
    public static function getMenuForUser(string $menu, $user): array
    {
        $items = static::getMenu($menu);

        // Filter main menu items
        $filteredItems = array_filter($items, function ($item) use ($user) {
            // If no permissions required, show the item
            if (empty($item['permissions'])) {
                return true;
            }

            // Check if user has permission using Spatie Permission
            return $user->can($item['permissions']);
        });

        // Filter submenu items within each main menu
        foreach ($filteredItems as &$item) {
            if (!empty($item['items'])) {
                $item['items'] = array_values(array_filter($item['items'], function ($subItem) use ($user) {
                    // If no permissions required, show the submenu item
                    if (empty($subItem['permissions'])) {
                        return true;
                    }

                    // Check if user has permission using Spatie Permission
                    return $user->can($subItem['permissions']);
                }));
            }
        }

        return array_values($filteredItems);
    }
}
