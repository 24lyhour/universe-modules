<?php

namespace App\Traits;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Carbon;

/**
 * Mutable Trait
 *
 * Adds the "86'd" / temporarily-hidden pattern to any Eloquent model.
 * Distinct from a hard `status` toggle: muting is a soft, often time-bound
 * "currently unavailable" flag that staff flip during service.
 *
 * Required columns (use Mutable::addColumns($table) inside a migration):
 *   - is_muted      boolean, default false
 *   - muted_at      timestamp, nullable
 *   - muted_until   timestamp, nullable   (auto-expires the mute)
 *   - muted_reason  string,    nullable
 *   - muted_by      bigint FK, nullable   (user id)
 *
 * Usage:
 *   1. Add the columns via the migration helper.
 *   2. `use Mutable;` on the model.
 *   3. Add the columns to `$fillable`.
 *   4. Available scopes: muted(), notMuted(), available()
 *      (available() combines `status=true` AND not-muted; override
 *      `mutableStatusColumn()` if your model uses a different column.)
 */
trait HasMutable
{
    /**
     * Preset mute durations exposed to the UI.
     *
     * Keys are stable identifiers; `minutes` is null for "indefinite" and
     * the literal string 'eod' for "rest of the day".
     *
     * Override in a model to customize per-resource (e.g. menus get short
     * presets, hotel rooms get longer ones).
     */
    public static function mutePresets(): array
    {
        return [
            '1h'      => ['label' => '1 hour',          'minutes' => 60],
            '2h'      => ['label' => '2 hours',         'minutes' => 120],
            '4h'      => ['label' => '4 hours',         'minutes' => 240],
            'today'   => ['label' => 'Rest of day',     'minutes' => 'eod'],
            '1d'      => ['label' => '1 day',           'minutes' => 1440],
            'forever' => ['label' => 'Until I unmute',  'minutes' => null],
            'custom'  => ['label' => 'Custom…',         'minutes' => 'custom'],
        ];
    }

    /**
     * Resolve a preset key into a Carbon end-time (or null for indefinite).
     * Throws \InvalidArgumentException for unknown keys.
     */
    /**
     * Resolve a preset key into a Carbon end-time.
     *
     * @param  string       $key       Preset key (e.g. "1h", "today", "forever", "custom").
     * @param  Carbon|null  $custom    Required when $key === "custom" — the explicit end-time.
     * @return Carbon|null  null = indefinite (no auto-unmute).
     */
    public static function resolveMutePreset(string $key, ?Carbon $custom = null): ?Carbon
    {
        $presets = static::mutePresets();
        if (!isset($presets[$key])) {
            throw new \InvalidArgumentException("Unknown mute preset [{$key}].");
        }

        $minutes = $presets[$key]['minutes'];
        if ($minutes === null) {
            return null;
        }
        if ($minutes === 'eod') {
            return now()->endOfDay();
        }
        if ($minutes === 'custom') {
            if (!$custom) {
                throw new \InvalidArgumentException('Custom mute requires an end-time.');
            }
            return $custom;
        }
        return now()->addMinutes((int) $minutes);
    }

    /**
     * Mute using a preset key — the common case from UI buttons.
     * Pass $custom when $presetKey === "custom".
     */
    public function muteForPreset(string $presetKey, ?string $reason = null, ?int $userId = null, ?Carbon $custom = null): bool
    {
        return $this->mute($reason, static::resolveMutePreset($presetKey, $custom), $userId);
    }

    /**
     * Boot hook — merge our casts so models don't have to repeat them.
     */
    public function initializeHasMutable(): void
    {
        $this->mergeCasts([
            'is_muted'    => 'boolean',
            'muted_at'    => 'datetime',
            'muted_until' => 'datetime',
        ]);
    }

    /**
     * Migration helper — add the required columns to a Blueprint.
     *
     *   Schema::table('menus', function (Blueprint $table) {
     *       \App\Traits\Mutable::addColumns($table, after: 'status');
     *   });
     */
    public static function addColumns(Blueprint $table, ?string $after = null): void
    {
        $columns = $table->boolean('is_muted')->default(false);
        if ($after) {
            $columns->after($after);
        }

        $table->timestamp('muted_at')->nullable();
        $table->timestamp('muted_until')->nullable();
        $table->string('muted_reason')->nullable();
        $table->unsignedBigInteger('muted_by')->nullable();
    }

    /**
     * Override in the model if its enabled-toggle column is not `status`.
     */
    protected function mutableStatusColumn(): string
    {
        return 'status';
    }

    // ─── Relationships ──────────────────────────────────────────────

    public function mutedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'muted_by');
    }

    // ─── Mute / Unmute ──────────────────────────────────────────────

    /**
     * Temporarily hide this record.
     *
     * @param  string|null  $reason   Free-text reason (e.g. "out of stock").
     * @param  Carbon|null  $until    Auto-unmute moment; null = manual unmute only.
     * @param  int|null     $userId   Defaults to auth()->id() if available.
     */
    public function mute(?string $reason = null, ?Carbon $until = null, ?int $userId = null): bool
    {
        return $this->update([
            'is_muted'     => true,
            'muted_at'     => now(),
            'muted_until'  => $until,
            'muted_reason' => $reason,
            'muted_by'     => $userId ?? auth()->id(),
        ]);
    }

    /**
     * Lift the mute and clear all tracking fields.
     */
    public function unmute(): bool
    {
        return $this->update([
            'is_muted'     => false,
            'muted_at'     => null,
            'muted_until'  => null,
            'muted_reason' => null,
            'muted_by'     => null,
        ]);
    }

    /**
     * Live mute state — respects auto-expiry via muted_until.
     */
    public function isCurrentlyMuted(): bool
    {
        if (!$this->is_muted) {
            return false;
        }
        if ($this->muted_until && $this->muted_until->isPast()) {
            return false;
        }
        return true;
    }

    // ─── Scopes ─────────────────────────────────────────────────────

    public function scopeMuted(Builder $query): Builder
    {
        return $query->where('is_muted', true)
            ->where(function (Builder $q) {
                $q->whereNull('muted_until')->orWhere('muted_until', '>', now());
            });
    }

    public function scopeNotMuted(Builder $query): Builder
    {
        return $query->where(function (Builder $q) {
            $q->where('is_muted', false)
              ->orWhere(function (Builder $sub) {
                  $sub->whereNotNull('muted_until')
                      ->where('muted_until', '<=', now());
              });
        });
    }

    /**
     * Available right now: enabled AND not muted.
     * Schedule-window checks remain the caller's responsibility.
     */
    public function scopeAvailable(Builder $query): Builder
    {
        return $query->where($this->mutableStatusColumn(), true)->notMuted();
    }
}
