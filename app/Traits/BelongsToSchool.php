<?php

namespace App\Traits;

use App\Services\TenantService;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

/**
 * BelongsToSchool Trait
 *
 * Add this trait to models that belong to a school via school_id.
 * Queries will automatically be scoped to all schools the user has access to.
 *
 * Usage:
 * 1. Add the trait to your model: use BelongsToSchool;
 * 2. Ensure your migration has a school_id column
 * 3. Queries will filter by school_id(s) when user is assigned to School tenant(s)
 */
trait BelongsToSchool
{
    /**
     * Boot the trait - add global scope for school filtering.
     */
    public static function bootBelongsToSchool(): void
    {
        // Add global scope to filter by school_id(s)
        static::addGlobalScope('school', function (Builder $builder) {
            $tenantService = app(TenantService::class);

            // If user has School tenant access, filter by their schools
            if ($tenantService->hasTenantType('School')) {
                $schoolIds = $tenantService->getSchoolIds();

                if (count($schoolIds) === 1) {
                    // Single school - use where
                    $builder->where('school_id', $schoolIds[0]);
                } elseif (count($schoolIds) > 1) {
                    // Multiple schools - use whereIn
                    $builder->whereIn('school_id', $schoolIds);
                }
            } elseif ($tenantService->hasTenant()) {
                $builder->whereRaw('1 = 0');
            }
            // If user has no tenant at all (super-admin), no filter is applied
        });

        // Auto-set school_id on creating (uses primary school)
        static::creating(function (Model $model) {
            $tenantService = app(TenantService::class);

            // Only auto-set if user has school access and school_id is not set
            if ($tenantService->hasTenantType('School') && empty($model->school_id)) {
                $schoolIds = $tenantService->getSchoolIds();
                if (!empty($schoolIds)) {
                    if ($tenantService->getShortTenantType() === 'School') {
                        $model->school_id = $tenantService->getTenantId();
                    } else {
                        $model->school_id = $schoolIds[0];
                    }
                }
            }
        });
    }

    /**
     * Scope to a specific school.
     */
    public function scopeForSchool(Builder $query, int $schoolId): Builder
    {
        return $query->withoutGlobalScope('school')->where('school_id', $schoolId);
    }

    /**
     * Scope to multiple schools.
     */
    public function scopeForSchools(Builder $query, array $schoolIds): Builder
    {
        return $query->withoutGlobalScope('school')->whereIn('school_id', $schoolIds);
    }

    /**
     * Scope to include all schools (bypass school filtering).
     */
    public function scopeAllSchools(Builder $query): Builder
    {
        return $query->withoutGlobalScope('school');
    }
}
