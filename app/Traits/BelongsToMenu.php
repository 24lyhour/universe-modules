<?php

namespace App\Traits;

use App\Services\TenantService;
use Illuminate\Database\Eloquent\Builder;

/**
 * BelongsToMenu Trait
 *
 * Add this trait to models that belong to a menu via menu_id.
 * Queries will automatically be scoped through the menu's outlet(s).
 *
 * Usage:
 * 1. Add the trait to your model: use BelongsToMenu;
 * 2. Ensure your migration has a menu_id column
 * 3. Queries will filter through menu's outlet_id(s) when user is assigned to Outlet tenant(s)
 */
trait BelongsToMenu
{
    /**
     * Boot the trait - add global scope for menu/outlet filtering.
     */
    public static function bootBelongsToMenu(): void
    {
        // Add global scope to filter through menu's outlet(s)
        static::addGlobalScope('menu_tenant', function (Builder $builder) {
            $tenantService = app(TenantService::class);

            // If user has Outlet tenant access, filter through menu's outlet
            if ($tenantService->hasTenantType('Outlet')) {
                $outletIds = $tenantService->getOutletIds();

                if (count($outletIds) === 1) {
                    // Single outlet - use where
                    $builder->whereHas('menu', function ($query) use ($outletIds) {
                        $query->where('outlet_id', $outletIds[0]);
                    });
                } elseif (count($outletIds) > 1) {
                    // Multiple outlets - use whereIn
                    $builder->whereHas('menu', function ($query) use ($outletIds) {
                        $query->whereIn('outlet_id', $outletIds);
                    });
                }
            } elseif ($tenantService->hasTenant()) {
                // User has tenant(s) but NOT Outlet type - they should see nothing
                // This prevents School users from seeing all menu items
                $builder->whereRaw('1 = 0');
            }
            // If user has no tenant at all (super-admin), no filter is applied
        });
    }

    /**
     * Scope to a specific outlet through menu.
     */
    public function scopeForOutlet(Builder $query, int $outletId): Builder
    {
        return $query->withoutGlobalScope('menu_tenant')
            ->whereHas('menu', function ($q) use ($outletId) {
                $q->where('outlet_id', $outletId);
            });
    }

    /**
     * Scope to multiple outlets through menu.
     */
    public function scopeForOutlets(Builder $query, array $outletIds): Builder
    {
        return $query->withoutGlobalScope('menu_tenant')
            ->whereHas('menu', function ($q) use ($outletIds) {
                $q->whereIn('outlet_id', $outletIds);
            });
    }

    /**
     * Scope to include all (bypass filtering).
     */
    public function scopeAllMenus(Builder $query): Builder
    {
        return $query->withoutGlobalScope('menu_tenant');
    }
}
