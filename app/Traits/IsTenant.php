<?php

namespace App\Traits;

use App\Services\TenantService;
use Illuminate\Database\Eloquent\Builder;

/**
 * IsTenant Trait
 *
 * Add this trait to models that ARE tenants themselves (e.g., School, Company, Outlet).
 * When a user is assigned to specific tenant(s) of this type, they will only see those records.
 *
 * Usage:
 * 1. Add the trait to your tenant model: use IsTenant;
 * 2. Users assigned to these tenants will only see their assigned records
 * 3. Super admins (no tenant) will see all records
 */
trait IsTenant
{
    /**
     * Boot the trait - add global scope for self-filtering.
     */
    public static function bootIsTenant(): void
    {
        // Add global scope to filter by tenant_id(s) when this model IS the tenant
        static::addGlobalScope('is_tenant', function (Builder $builder) {
            $tenantService = app(TenantService::class);
            $modelClass = class_basename(static::class);

            // If user has access to tenants of this model type, filter to those
            if ($tenantService->hasTenantType($modelClass)) {
                $tenantIds = $tenantService->getTenantIds($modelClass);

                if (count($tenantIds) === 1) {
                    // Single tenant - use where
                    $builder->where('id', $tenantIds[0]);
                } elseif (count($tenantIds) > 1) {
                    // Multiple tenants - use whereIn
                    $builder->whereIn('id', $tenantIds);
                }
            } elseif ($tenantService->hasTenant()) {
                // User has tenant(s) but NOT of this model type - they should see nothing
                // This prevents School users from seeing all Outlets and vice versa
                $builder->whereRaw('1 = 0');
            }
            // If user has no tenant at all (super-admin), no filter is applied
        });
    }

    /**
     * Scope to bypass tenant filtering.
     */
    public function scopeAllRecords(Builder $query): Builder
    {
        return $query->withoutGlobalScope('is_tenant');
    }

    /**
     * Scope to a specific tenant ID.
     */
    public function scopeForTenantId(Builder $query, int $tenantId): Builder
    {
        return $query->withoutGlobalScope('is_tenant')
            ->where('id', $tenantId);
    }

    /**
     * Scope to multiple tenant IDs.
     */
    public function scopeForTenantIds(Builder $query, array $tenantIds): Builder
    {
        return $query->withoutGlobalScope('is_tenant')
            ->whereIn('id', $tenantIds);
    }
}
