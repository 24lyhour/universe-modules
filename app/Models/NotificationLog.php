<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

/**
 * NotificationLog
 *
 * Logs all sent notifications for tracking and analytics.
 *
 * @property int $id
 * @property string $notifiable_type
 * @property int $notifiable_id
 * @property string $channel
 * @property string $type
 * @property array $payload
 * @property string|null $recipient_id
 * @property string|null $message_id
 * @property bool $success
 * @property string|null $error
 * @property array|null $metadata
 * @property string|null $tenant_type
 * @property int|null $tenant_id
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
class NotificationLog extends Model
{
    protected $fillable = [
        'notifiable_type',
        'notifiable_id',
        'channel',
        'type',
        'payload',
        'recipient_id',
        'message_id',
        'success',
        'error',
        'metadata',
        'tenant_type',
        'tenant_id',
    ];

    protected $casts = [
        'payload' => 'array',
        'metadata' => 'array',
        'success' => 'boolean',
        'notifiable_id' => 'integer',
        'tenant_id' => 'integer',
    ];

    /**
     * Get the notifiable model.
     */
    public function notifiable(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Get the tenant model.
     */
    public function tenant(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Scope to successful notifications.
     */
    public function scopeSuccessful($query)
    {
        return $query->where('success', true);
    }

    /**
     * Scope to failed notifications.
     */
    public function scopeFailed($query)
    {
        return $query->where('success', false);
    }

    /**
     * Scope to a specific channel.
     */
    public function scopeForChannel($query, string $channel)
    {
        return $query->where('channel', $channel);
    }

    /**
     * Scope to a specific type.
     */
    public function scopeForType($query, string $type)
    {
        return $query->where('type', $type);
    }

    /**
     * Scope to a specific notifiable.
     */
    public function scopeForNotifiable($query, Model $notifiable)
    {
        return $query->where('notifiable_type', get_class($notifiable))
            ->where('notifiable_id', $notifiable->getKey());
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
     * Scope to a date range.
     */
    public function scopeBetween($query, $from, $to)
    {
        return $query->whereBetween('created_at', [$from, $to]);
    }

    /**
     * Get stats for a given period.
     */
    public static function getStats(?string $tenantType = null, ?int $tenantId = null, int $days = 30): array
    {
        $query = static::where('created_at', '>=', now()->subDays($days));

        if ($tenantType && $tenantId) {
            $query->forTenant($tenantType, $tenantId);
        }

        $total = $query->count();
        $successful = (clone $query)->successful()->count();
        $failed = (clone $query)->failed()->count();

        $byChannel = (clone $query)
            ->selectRaw('channel, COUNT(*) as count, SUM(CASE WHEN success = 1 THEN 1 ELSE 0 END) as success_count')
            ->groupBy('channel')
            ->get()
            ->mapWithKeys(fn($row) => [
                $row->channel => [
                    'total' => $row->count,
                    'successful' => $row->success_count,
                    'failed' => $row->count - $row->success_count,
                    'success_rate' => $row->count > 0 ? round(($row->success_count / $row->count) * 100, 2) : 0,
                ],
            ])
            ->toArray();

        $byType = (clone $query)
            ->selectRaw('type, COUNT(*) as count')
            ->groupBy('type')
            ->pluck('count', 'type')
            ->toArray();

        return [
            'total' => $total,
            'successful' => $successful,
            'failed' => $failed,
            'success_rate' => $total > 0 ? round(($successful / $total) * 100, 2) : 0,
            'by_channel' => $byChannel,
            'by_type' => $byType,
            'period_days' => $days,
        ];
    }

    /**
     * Clean old logs.
     */
    public static function cleanOldLogs(int $daysOld = 90): int
    {
        return static::where('created_at', '<', now()->subDays($daysOld))->delete();
    }
}
