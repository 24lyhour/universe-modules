<?php

namespace App\Services\Notification\Channels;

use App\Contracts\NotificationChannelInterface;
use App\Contracts\NotificationResult;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

/**
 * AbstractChannel
 *
 * Base class for notification channels with common functionality.
 */
abstract class AbstractChannel implements NotificationChannelInterface
{
    protected array $defaultConfig = [];

    /**
     * Merge default config with provided config.
     */
    protected function mergeConfig(array $config): array
    {
        return array_merge($this->defaultConfig, $config);
    }

    /**
     * Log channel activity.
     */
    protected function log(string $level, string $message, array $context = []): void
    {
        $context['channel'] = $this->getChannelId();
        Log::channel('notifications')->{$level}($message, $context);
    }

    /**
     * Send to multiple recipients (default implementation).
     */
    public function sendBatch(array $notifiables, array $payload, array $config = []): array
    {
        $results = [];

        foreach ($notifiables as $notifiable) {
            $results[] = $this->send($notifiable, $payload, $config);
        }

        return $results;
    }

    /**
     * Validate required configuration keys.
     */
    public function validateConfig(array $config): bool
    {
        foreach ($this->getRequiredConfig() as $key) {
            if (!isset($config[$key]) || empty($config[$key])) {
                return false;
            }
        }

        return true;
    }

    /**
     * Extract notification data from payload.
     */
    protected function extractPayload(array $payload): array
    {
        return [
            'title' => $payload['title'] ?? '',
            'body' => $payload['body'] ?? $payload['message'] ?? '',
            'data' => $payload['data'] ?? [],
            'subject' => $payload['subject'] ?? $payload['title'] ?? '',
            'template' => $payload['template'] ?? null,
            'image' => $payload['image'] ?? null,
            'action_url' => $payload['action_url'] ?? null,
            'buttons' => $payload['buttons'] ?? [],
        ];
    }
}
