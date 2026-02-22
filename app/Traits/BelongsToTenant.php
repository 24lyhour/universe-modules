<?php

namespace App\Traits;

use App\Services\TenantService;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

/**
 * BelongsToTenant Trait
 *
 * Add this trait to models that should be scoped to a tenant.
 * The model should have tenant_type and tenant_id columns.
 *
 * Usage:
 * 1. Add the trait to your model: use BelongsToTenant;
 * 2. Ensure your migration has tenant_type and tenant_id columns
 * 3. Queries will automatically be scoped to the current tenant
 */
trait BelongsToTenant
{
    /**
     * Boot the trait - add global scope for tenant filtering.
     */
    public static function bootBelongsToTenant(): void
    {
        // Add global scope to filter by current tenant
        static::addGlobalScope('tenant', function (Builder $builder) {
            $tenantService = app(TenantService::class);

            if ($tenantService->hasTenant()) {
                $builder->where(function ($query) use ($tenantService) {
                    $query->where('tenant_type', $tenantService->getTenantType())
                          ->where('tenant_id', $tenantService->getTenantId());
                });
            }
        });

        // Auto-set tenant on creating
        static::creating(function (Model $model) {
            $tenantService = app(TenantService::class);

            if ($tenantService->hasTenant()) {
                if (empty($model->tenant_type)) {
                    $model->tenant_type = $tenantService->getTenantType();
                }
                if (empty($model->tenant_id)) {
                    $model->tenant_id = $tenantService->getTenantId();
                }
            }
        });
    }

    /**
     * Get the tenant model (polymorphic).
     */
    public function tenant(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Scope to a specific tenant.
     */
    public function scopeForTenant(Builder $query, string $tenantType, int $tenantId): Builder
    {
        return $query->withoutGlobalScope('tenant')
            ->where('tenant_type', $tenantType)
            ->where('tenant_id', $tenantId);
    }

    /**
     * Scope to include all tenants (bypass tenant filtering).
     */
    public function scopeAllTenants(Builder $query): Builder
    {
        return $query->withoutGlobalScope('tenant');
    }
}
