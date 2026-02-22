<?php

namespace App\Services;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class TenantService
{
    protected ?string $tenantType = null;
    protected ?int $tenantId = null;
    protected ?Model $tenant = null;

    /**
     * All tenant IDs grouped by type that user has access to.
     * Format: ['Outlet' => [1, 2, 3], 'School' => [1, 2]]
     */
    protected array $allTenantIds = [];

    /**
     * Set the current tenant from user (includes all their tenant access).
     */
    public function setFromUser(?Authenticatable $user = null): self
    {
        $user = $user ?? Auth::user();

        if (!$user) {
            return $this;
        }

        // Load tenant access if not already loaded
        if (method_exists($user, 'tenantAccess') && !$user->relationLoaded('tenantAccess')) {
            $user->load('tenantAccess');
        }

        // Collect all tenant IDs grouped by type from UserTenant table
        if (method_exists($user, 'tenantAccess')) {
            $tenantAccess = $user->tenantAccess;

            foreach ($tenantAccess as $access) {
                $shortType = class_basename($access->tenant_type);
                if (!isset($this->allTenantIds[$shortType])) {
                    $this->allTenantIds[$shortType] = [];
                }
                if (!in_array($access->tenant_id, $this->allTenantIds[$shortType])) {
                    $this->allTenantIds[$shortType][] = $access->tenant_id;
                }

                // Set primary tenant if this is marked as primary
                if ($access->is_primary && $this->tenantId === null) {
                    $this->tenantType = $access->tenant_type;
                    $this->tenantId = $access->tenant_id;
                }
            }
        }

        // Fallback to user's primary tenant fields if no primary found in UserTenant
        if ($this->tenantId === null && method_exists($user, 'hasTenant') && $user->hasTenant()) {
            $this->tenantType = $user->tenant_type;
            $this->tenantId = $user->tenant_id;
            $this->tenant = $user->tenant;

            // Also add to allTenantIds if not already there
            $shortType = class_basename($this->tenantType);
            if (!isset($this->allTenantIds[$shortType])) {
                $this->allTenantIds[$shortType] = [];
            }
            if (!in_array($this->tenantId, $this->allTenantIds[$shortType])) {
                $this->allTenantIds[$shortType][] = $this->tenantId;
            }
        }

        return $this;
    }

    /**
     * Set tenant directly.
     */
    public function setTenant(string $tenantType, int $tenantId, ?Model $tenant = null): self
    {
        $this->tenantType = $tenantType;
        $this->tenantId = $tenantId;
        $this->tenant = $tenant;

        return $this;
    }

    /**
     * Set tenant from a model.
     */
    public function setFromModel(Model $tenant): self
    {
        $this->tenantType = get_class($tenant);
        $this->tenantId = $tenant->getKey();
        $this->tenant = $tenant;

        return $this;
    }

    /**
     * Clear the current tenant.
     */
    public function clear(): self
    {
        $this->tenantType = null;
        $this->tenantId = null;
        $this->tenant = null;
        $this->allTenantIds = [];

        return $this;
    }

    /**
     * Check if user has any tenant assigned.
     */
    public function hasTenant(): bool
    {
        return !empty($this->allTenantIds) || ($this->tenantType !== null && $this->tenantId !== null);
    }

    /**
     * Check if user has access to tenants of a specific type.
     */
    public function hasTenantType(string $tenantType): bool
    {
        return isset($this->allTenantIds[$tenantType]) && !empty($this->allTenantIds[$tenantType]);
    }

    /**
     * Get all tenant IDs for a specific type (e.g., 'Outlet', 'School').
     *
     * @return int[]
     */
    public function getTenantIds(string $tenantType): array
    {
        return $this->allTenantIds[$tenantType] ?? [];
    }

    /**
     * Get all outlet IDs the user has access to.
     *
     * @return int[]
     */
    public function getOutletIds(): array
    {
        return $this->getTenantIds('Outlet');
    }

    /**
     * Get all school IDs the user has access to.
     *
     * @return int[]
     */
    public function getSchoolIds(): array
    {
        return $this->getTenantIds('School');
    }

    /**
     * Get the primary tenant type.
     */
    public function getTenantType(): ?string
    {
        return $this->tenantType;
    }

    /**
     * Get the primary tenant ID.
     */
    public function getTenantId(): ?int
    {
        return $this->tenantId;
    }

    /**
     * Get the primary tenant model.
     */
    public function getTenant(): ?Model
    {
        if ($this->tenant === null && $this->tenantType !== null && $this->tenantId !== null) {
            $this->tenant = $this->tenantType::find($this->tenantId);
        }

        return $this->tenant;
    }

    /**
     * Get tenant name (for display).
     */
    public function getTenantName(): ?string
    {
        $tenant = $this->getTenant();

        if ($tenant === null) {
            return null;
        }

        // Try common name attributes
        if (isset($tenant->name)) {
            return $tenant->name;
        }

        if (isset($tenant->title)) {
            return $tenant->title;
        }

        return 'Tenant #' . $this->tenantId;
    }

    /**
     * Get short tenant type (class name without namespace).
     */
    public function getShortTenantType(): ?string
    {
        if ($this->tenantType === null) {
            return null;
        }

        return class_basename($this->tenantType);
    }

    /**
     * Check if current tenant matches given tenant.
     */
    public function isTenant(string $tenantType, int $tenantId): bool
    {
        return $this->tenantType === $tenantType && $this->tenantId === $tenantId;
    }

    /**
     * Check if user has access to a specific tenant.
     */
    public function hasAccessTo(string $tenantType, int $tenantId): bool
    {
        $shortType = class_basename($tenantType);
        return in_array($tenantId, $this->allTenantIds[$shortType] ?? []);
    }

    /**
     * Get all tenant IDs grouped by type.
     */
    public function getAllTenantIds(): array
    {
        return $this->allTenantIds;
    }

    /**
     * Get tenant data for frontend.
     */
    public function toArray(): array
    {
        if (!$this->hasTenant()) {
            return [
                'has_tenant' => false,
                'tenant_type' => null,
                'tenant_id' => null,
                'tenant_name' => null,
                'all_tenant_ids' => [],
            ];
        }

        return [
            'has_tenant' => true,
            'tenant_type' => $this->getShortTenantType(),
            'tenant_id' => $this->tenantId,
            'tenant_name' => $this->getTenantName(),
            'all_tenant_ids' => $this->allTenantIds,
        ];
    }
}
