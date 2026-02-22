<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements HasMedia
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, TwoFactorAuthenticatable, InteractsWithMedia, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'avatar',
        'password',
        'role',
        'tenant_type',
        'tenant_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'two_factor_secret',
        'two_factor_recovery_codes',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'two_factor_confirmed_at' => 'datetime',
        ];
    }

    /**
     * Register the Telescope gate.
     *
     * This gate determines who can access Telescope in non-local environments.
     */
    protected function gate(): void
    {
        Gate::define('viewTelescope', function (User $user) {
            return in_array($user->email, [
                'taylor@laravel.com',
            ]);
        });
    }

    /**
     * Get the user's primary tenant (polymorphic).
     */
    public function tenant(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Get all tenant access records for this user.
     */
    public function tenantAccess(): HasMany
    {
        return $this->hasMany(UserTenant::class);
    }

    /**
     * Check if user belongs to a specific tenant.
     */
    public function belongsToTenant(string $tenantType, int $tenantId): bool
    {
        // Check primary tenant
        if ($this->tenant_type === $tenantType && $this->tenant_id === $tenantId) {
            return true;
        }

        // Check additional tenant access
        return $this->tenantAccess()
            ->where('tenant_type', $tenantType)
            ->where('tenant_id', $tenantId)
            ->exists();
    }

    /**
     * Get the current tenant model.
     */
    public function currentTenant(): ?object
    {
        return $this->tenant;
    }

    /**
     * Check if user has any tenant assigned.
     */
    public function hasTenant(): bool
    {
        return $this->tenant_id !== null && $this->tenant_type !== null;
    }

    /**
     * Get all tenants the user has access to (including primary).
     */
    public function allTenants(): array
    {
        $tenants = [];

        // Add primary tenant
        if ($this->hasTenant()) {
            $tenants[] = [
                'type' => $this->tenant_type,
                'id' => $this->tenant_id,
                'is_primary' => true,
                'model' => $this->tenant,
            ];
        }

        // Add additional tenants
        foreach ($this->tenantAccess as $access) {
            $tenants[] = [
                'type' => $access->tenant_type,
                'id' => $access->tenant_id,
                'is_primary' => $access->is_primary,
                'role' => $access->role,
                'model' => $access->tenant,
            ];
        }

        return $tenants;
    }
}
