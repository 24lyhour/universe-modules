<?php

namespace App\Traits;

use App\Services\TenantService;
use Illuminate\Database\Eloquent\Builder;

/**
 * BelongsToOutlet Trait
 *
 * Add this trait to models that belong to an outlet via outlet_id.
 * Queries will automatically be scoped to all outlets the user has access to.
 *
 * Usage:
 * 1. Add the trait to your model: use BelongsToOutlet;
 * 2. Ensure your migration has an outlet_id column
 * 3. Queries will filter by outlet_id(s) when user is assigned to Outlet tenant(s)
 */
trait BelongsToOutlet
{
    /**
     * Boot the trait - add global scope for outlet filtering.
     */
    public static function bootBelongsToOutlet(): void
    {
        // Add global scope to filter by outlet_id(s)
        static::addGlobalScope('outlet_tenant', function (Builder $builder) {
            $tenantService = app(TenantService::class);
            $user = auth()->user();

            // Super-admins see all data regardless of tenant assignments
            if ($user?->hasRole('super-admin')) {
                return;
            }

            // If user has Outlet tenant access, filter by their outlets
            if ($tenantService->hasTenantType('Outlet')) {
                $outletIds = $tenantService->getOutletIds();

                if (count($outletIds) === 1) {
                    // Single outlet - use where
                    $builder->where('outlet_id', $outletIds[0]);
                } elseif (count($outletIds) > 1) {
                    // Multiple outlets - use whereIn
                    $builder->whereIn('outlet_id', $outletIds);
                }
            } elseif ($tenantService->hasTenant()) {
                // User has tenant(s) but NOT Outlet type - they should see nothing
                // This prevents School users from seeing all Outlet data
                $builder->whereRaw('1 = 0');
            }
            // If user has no tenant at all, no filter is applied
        });
    }

    /**
     * Scope to a specific outlet.
     */
    public function scopeForOutlet(Builder $query, int $outletId): Builder
    {
        return $query->withoutGlobalScope('outlet_tenant')
            ->where('outlet_id', $outletId);
    }

    /**
     * Scope to multiple outlets.
     */
    public function scopeForOutlets(Builder $query, array $outletIds): Builder
    {
        return $query->withoutGlobalScope('outlet_tenant')
            ->whereIn('outlet_id', $outletIds);
    }

    /**
     * Scope to include all outlets (bypass filtering).
     */
    public function scopeAllOutlets(Builder $query): Builder
    {
        return $query->withoutGlobalScope('outlet_tenant');
    }
}
