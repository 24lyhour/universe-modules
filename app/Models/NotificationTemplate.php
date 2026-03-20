<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * NotificationTemplate
 *
 * Stores reusable notification templates with multi-tenant support.
 * Templates can be tenant-specific or global (tenant_type/id = null).
 *
 * @property int $id
 * @property string $key Unique template identifier (e.g., 'welcome', 'order_confirmed')
 * @property string $name Human-readable name
 * @property string $title Notification title (supports {{variable}} interpolation)
 * @property string $body Notification body (supports {{variable}} interpolation)
 * @property string|null $email_template Blade template path for emails
 * @property array $channels Default channels for this template
 * @property array|null $data Default data/variables
 * @property string|null $tenant_type
 * @property int|null $tenant_id
 * @property bool $is_active
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
class NotificationTemplate extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'key',
        'name',
        'title',
        'body',
        'email_template',
        'channels',
        'data',
        'tenant_type',
        'tenant_id',
        'is_active',
    ];

    protected $casts = [
        'channels' => 'array',
        'data' => 'array',
        'is_active' => 'boolean',
        'tenant_id' => 'integer',
    ];

    /**
     * Get the tenant model.
     */
    public function tenant(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Scope to active templates.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope to a specific tenant.
     */
    public function scopeForTenant($query, string $tenantType, int $tenantId)
    {
        return $query->where('tenant_type', $tenantType)
            ->where('tenant_id', $tenantId);
    }

    /**
     * Scope to global templates (no tenant).
     */
    public function scopeGlobal($query)
    {
        return $query->whereNull('tenant_type')
            ->whereNull('tenant_id');
    }

    /**
     * Find template by key, preferring tenant-specific over global.
     */
    public static function findByKey(string $key, ?string $tenantType = null, ?int $tenantId = null): ?self
    {
        $query = static::active()->where('key', $key);

        if ($tenantType && $tenantId) {
            // Try tenant-specific first
            $tenantTemplate = (clone $query)
                ->forTenant($tenantType, $tenantId)
                ->first();

            if ($tenantTemplate) {
                return $tenantTemplate;
            }
        }

        // Fall back to global
        return $query->global()->first();
    }

    /**
     * Render the title with given data.
     */
    public function renderTitle(array $data = []): string
    {
        return $this->interpolate($this->title, $data);
    }

    /**
     * Render the body with given data.
     */
    public function renderBody(array $data = []): string
    {
        return $this->interpolate($this->body, $data);
    }

    /**
     * Interpolate variables in text.
     */
    protected function interpolate(string $text, array $data): string
    {
        // Merge default data with provided data
        $data = array_merge($this->data ?? [], $data);

        foreach ($data as $key => $value) {
            if (is_scalar($value)) {
                $text = str_replace("{{$key}}", (string) $value, $text);
                $text = str_replace("{{ $key }}", (string) $value, $text);
            }
        }

        return $text;
    }

    /**
     * Check if template is tenant-specific.
     */
    public function isTenantSpecific(): bool
    {
        return $this->tenant_type !== null && $this->tenant_id !== null;
    }

    /**
     * Duplicate template for a specific tenant.
     */
    public function duplicateForTenant(string $tenantType, int $tenantId): self
    {
        $new = $this->replicate(['id', 'created_at', 'updated_at', 'deleted_at']);
        $new->tenant_type = $tenantType;
        $new->tenant_id = $tenantId;
        $new->save();

        return $new;
    }
}
