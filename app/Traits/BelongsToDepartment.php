<?php

namespace App\Traits;

use App\Services\TenantService;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

/**
 * BelongsToDepartment Trait
 *
 * Add this trait to models that belong to a department via department_id.
 * Queries will automatically be scoped to the current user's school tenant
 * through the department relationship.
 *
 * Usage:
 * 1. Add the trait to your model: use BelongsToDepartment;
 * 2. Ensure your migration has a department_id column
 * 3. Queries will filter through department's school_id
 */
trait BelongsToDepartment
{
    /**
     * Boot the trait - add global scope for department/school filtering.
     */
    public static function bootBelongsToDepartment(): void
    {
        // Add global scope to filter by current school through department
        static::addGlobalScope('department_school', function (Builder $builder) {
            $tenantService = app(TenantService::class);

            // Only apply if tenant is a School
            if ($tenantService->hasTenant() && $tenantService->getShortTenantType() === 'School') {
                $builder->whereHas('department', function ($query) use ($tenantService) {
                    $query->where('school_id', $tenantService->getTenantId());
                });
            }
        });
    }

    /**
     * Scope to a specific school through department.
     */
    public function scopeForSchool(Builder $query, int $schoolId): Builder
    {
        return $query->withoutGlobalScope('department_school')
            ->whereHas('department', function ($q) use ($schoolId) {
                $q->where('school_id', $schoolId);
            });
    }

    /**
     * Scope to include all schools (bypass filtering).
     */
    public function scopeAllSchools(Builder $query): Builder
    {
        return $query->withoutGlobalScope('department_school');
    }
}
