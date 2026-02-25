<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TwoFactorLockout extends Model
{
    protected $fillable = [
        'ip_address',
        'type',
        'user_id',
        'attempts',
        'locked_until',
        'last_attempt_at',
    ];

    protected $casts = [
        'locked_until' => 'datetime',
        'last_attempt_at' => 'datetime',
    ];

    /**
     * Get the user associated with this lockout.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Check if currently locked.
     */
    public function isLocked(): bool
    {
        return $this->locked_until && $this->locked_until->isFuture();
    }

    /**
     * Get remaining lockout time in minutes.
     */
    public function getRemainingMinutes(): int
    {
        if (! $this->isLocked()) {
            return 0;
        }

        return (int) now()->diffInMinutes($this->locked_until, false);
    }

    /**
     * Clear the lockout.
     */
    public function clearLockout(): void
    {
        $this->update([
            'attempts' => 0,
            'locked_until' => null,
        ]);
    }
}
