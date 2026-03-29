<?php

namespace App\Traits;

use App\Services\TenantService;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

/**
 * BelongsToTenantModel Trait (Generic & Reusable with Auto-Detection)
 *
 * A single reusable trait that auto-detects tenant type based on foreign key.
 * No configuration needed for standard cases!
 *
 * SIMPLE USAGE (auto-detection):
 *
 *    class Order extends Model
 *    {
 *        use BelongsToTenantModel;
 *        // Has outlet_id column → auto-detects Outlet tenant
 *    }
 *
 *    class Attendance extends Model
 *    {
 *        use BelongsToTenantModel;
 *        // Has school_id column → auto-detects School tenant
 *    }
 *
 * CUSTOM USAGE (override if needed):
 *
 *    class CustomModel extends Model
 *    {
 *        use BelongsToTenantModel;
 *
 *        protected static string $tenantType = 'Company';
 *        protected static string $tenantForeignKey = 'company_id';
 *    }
 *
 * Supported auto-detection mappings:
 *   - outlet_id   → Outlet
 *   - school_id   → School
 *   - company_id  → Company
 *   - hotel_id    → Hotel
 *   - wallet_id   → Wallets
 */
trait BelongsToTenantModel
{
    /**
     * Foreign key to tenant type mapping for auto-detection.
     */
    protected static array $tenantKeyMapping = [
        'outlet_id'  => 'Outlet',
        'school_id'  => 'School',
        'company_id' => 'Company',
        'hotel_id'   => 'Hotel',
        'wallet_id'  => 'Wallets',
    ];

    /**
     * Get the tenant type for this model (auto-detects or uses override).
     */
    protected static function getTenantType(): string
    {
        // Check if model has explicit override
        if (property_exists(static::class, 'tenantType') && !empty(static::$tenantType)) {
            return static::$tenantType;
        }

        // Auto-detect from foreign key
        $foreignKey = static::getTenantForeignKey();
        return static::$tenantKeyMapping[$foreignKey] ?? 'Outlet';
    }

    /**
     * Get the foreign key column for tenant filtering (auto-detects or uses override).
     */
    protected static function getTenantForeignKey(): string
    {
        // Check if model has explicit override
        if (property_exists(static::class, 'tenantForeignKey') && !empty(static::$tenantForeignKey)) {
            return static::$tenantForeignKey;
        }

        // Auto-detect: check which tenant foreign key exists in fillable
        $model = new static;
        $fillable = $model->getFillable();

        foreach (array_keys(static::$tenantKeyMapping) as $key) {
            if (in_array($key, $fillable)) {
                return $key;
            }
        }

        // Default to outlet_id (most common)
        return 'outlet_id';
    }

    /**
     * Boot the trait - add global scope for tenant filtering.
     */
    public static function bootBelongsToTenantModel(): void
    {
        $tenantType = static::getTenantType();
        $foreignKey = static::getTenantForeignKey();
        $scopeName = 'tenant_' . strtolower($tenantType);

        // Add global scope to filter by tenant
        static::addGlobalScope($scopeName, function (Builder $builder) use ($tenantType, $foreignKey) {
            $tenantService = app(TenantService::class);
            $user = auth()->user();

            // Super-admins see all data regardless of tenant assignments
            if ($user && method_exists($user, 'hasRole') && $user->hasRole('super-admin')) {
                return;
            }

            // If user has this tenant type access, filter by their tenant IDs
            if ($tenantService->hasTenantType($tenantType)) {
                $tenantIds = $tenantService->getTenantIds($tenantType);

                if (count($tenantIds) === 1) {
                    $builder->where($foreignKey, $tenantIds[0]);
                } elseif (count($tenantIds) > 1) {
                    $builder->whereIn($foreignKey, $tenantIds);
                }
            } elseif ($tenantService->hasTenant()) {
                // User has tenant(s) but NOT this type - they should see nothing
                $builder->whereRaw('1 = 0');
            }
            // If user has no tenant at all (super-admin without role check), no filter is applied
        });
    }

    /**
     * Scope to a specific tenant ID.
     */
    public function scopeForTenantId(Builder $query, int $tenantId): Builder
    {
        $scopeName = 'tenant_' . strtolower(static::getTenantType());
        $foreignKey = static::getTenantForeignKey();

        return $query->withoutGlobalScope($scopeName)
            ->where($foreignKey, $tenantId);
    }

    /**
     * Scope to multiple tenant IDs.
     */
    public function scopeForTenantIds(Builder $query, array $tenantIds): Builder
    {
        $scopeName = 'tenant_' . strtolower(static::getTenantType());
        $foreignKey = static::getTenantForeignKey();

        return $query->withoutGlobalScope($scopeName)
            ->whereIn($foreignKey, $tenantIds);
    }

    /**
     * Scope to include all records (bypass tenant filtering).
     */
    public function scopeAllRecords(Builder $query): Builder
    {
        $scopeName = 'tenant_' . strtolower(static::getTenantType());

        return $query->withoutGlobalScope($scopeName);
    }

    /**
     * Scope alias for backward compatibility with BelongsToOutlet.
     */
    public function scopeForOutlet(Builder $query, int $outletId): Builder
    {
        return $this->scopeForTenantId($query, $outletId);
    }

    /**
     * Scope alias for backward compatibility with BelongsToOutlet.
     */
    public function scopeForOutlets(Builder $query, array $outletIds): Builder
    {
        return $this->scopeForTenantIds($query, $outletIds);
    }

    /**
     * Scope alias for backward compatibility with BelongsToOutlet.
     */
    public function scopeAllOutlets(Builder $query): Builder
    {
        return $this->scopeAllRecords($query);
    }
}
