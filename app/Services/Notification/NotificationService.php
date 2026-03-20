<?php

namespace App\Services\Notification;

use App\Contracts\NotificationChannelInterface;
use App\Contracts\NotificationResult;
use App\Events\NotificationFailed;
use App\Events\NotificationSending;
use App\Events\NotificationSent;
use App\Models\NotificationLog;
use App\Models\NotificationPreference;
use App\Models\NotificationTemplate;
use App\Services\Notification\Channels\DatabaseChannel;
use App\Services\Notification\Channels\EmailChannel;
use App\Services\Notification\Channels\PushChannel;
use App\Services\Notification\Channels\SmsChannel;
use App\Services\Notification\Channels\TelegramChannel;
use App\Services\Notification\Channels\WhatsAppChannel;
use App\Services\TenantService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

/**
 * NotificationService
 *
 * Centralized notification service with multi-tenant support.
 * Handles sending notifications through multiple channels with
 * user preferences, templates, and logging.
 *
 * @example
 * // Send to single user
 * $service->send($user, 'welcome', ['title' => 'Welcome!', 'body' => 'Thanks for joining']);
 *
 * // Send to specific channels
 * $service->send($user, 'alert', $data, ['push', 'email']);
 *
 * // Send to multiple users
 * $service->sendBatch($users, 'announcement', $data);
 *
 * // Send tenant-scoped notification
 * $service->forTenant($school)->send($employee, 'shift_reminder', $data);
 */
class NotificationService
{
    /**
     * Registered notification channels.
     *
     * @var array<string, NotificationChannelInterface>
     */
    protected array $channels = [];

    /**
     * Current tenant context.
     */
    protected ?string $tenantType = null;
    protected ?int $tenantId = null;

    /**
     * Whether to log notifications.
     */
    protected bool $loggingEnabled = true;

    /**
     * Whether to dispatch events.
     */
    protected bool $eventsEnabled = true;

    public function __construct(
        protected TenantService $tenantService,
        protected PushChannel $pushChannel,
        protected EmailChannel $emailChannel,
        protected DatabaseChannel $databaseChannel,
        protected SmsChannel $smsChannel,
        protected TelegramChannel $telegramChannel,
        protected WhatsAppChannel $whatsAppChannel,
    ) {
        $this->registerDefaultChannels();
    }

    /**
     * Register default channels.
     */
    protected function registerDefaultChannels(): void
    {
        $this->registerChannel($this->pushChannel);
        $this->registerChannel($this->emailChannel);
        $this->registerChannel($this->databaseChannel);
        $this->registerChannel($this->smsChannel);
        $this->registerChannel($this->telegramChannel);
        $this->registerChannel($this->whatsAppChannel);
    }

    /**
     * Register a custom notification channel.
     */
    public function registerChannel(NotificationChannelInterface $channel): self
    {
        $this->channels[$channel->getChannelId()] = $channel;
        return $this;
    }

    /**
     * Get a registered channel.
     */
    public function getChannel(string $channelId): ?NotificationChannelInterface
    {
        return $this->channels[$channelId] ?? null;
    }

    /**
     * Get all registered channels.
     *
     * @return array<string, NotificationChannelInterface>
     */
    public function getChannels(): array
    {
        return $this->channels;
    }

    /**
     * Get available (configured) channels.
     *
     * @return array<string, NotificationChannelInterface>
     */
    public function getAvailableChannels(): array
    {
        return array_filter($this->channels, fn($channel) => $channel->isAvailable());
    }

    /**
     * Set tenant context for notifications.
     */
    public function forTenant(Model|string $tenantTypeOrModel, ?int $tenantId = null): self
    {
        if ($tenantTypeOrModel instanceof Model) {
            $this->tenantType = get_class($tenantTypeOrModel);
            $this->tenantId = $tenantTypeOrModel->getKey();
        } else {
            $this->tenantType = $tenantTypeOrModel;
            $this->tenantId = $tenantId;
        }

        return $this;
    }

    /**
     * Use current tenant from TenantService.
     */
    public function forCurrentTenant(): self
    {
        if ($this->tenantService->hasTenant()) {
            $this->tenantType = $this->tenantService->getTenantType();
            $this->tenantId = $this->tenantService->getTenantId();
        }

        return $this;
    }

    /**
     * Clear tenant context.
     */
    public function withoutTenant(): self
    {
        $this->tenantType = null;
        $this->tenantId = null;
        return $this;
    }

    /**
     * Disable logging for this request.
     */
    public function withoutLogging(): self
    {
        $this->loggingEnabled = false;
        return $this;
    }

    /**
     * Disable events for this request.
     */
    public function withoutEvents(): self
    {
        $this->eventsEnabled = false;
        return $this;
    }

    /**
     * Send a notification to a notifiable.
     *
     * @param Model $notifiable The model to notify
     * @param string $type Notification type or template key
     * @param array $payload Notification data (title, body, data, etc.)
     * @param array|string|null $channels Specific channels or null for all enabled
     * @return array<string, NotificationResult>
     */
    public function send(
        Model $notifiable,
        string $type,
        array $payload = [],
        array|string|null $channels = null
    ): array {
        // Resolve template if exists
        $payload = $this->resolveTemplate($type, $payload);

        // Add tenant context to payload
        $payload['tenant_type'] = $this->tenantType;
        $payload['tenant_id'] = $this->tenantId;
        $payload['type'] = $type;

        // Determine channels to use
        $targetChannels = $this->resolveChannels($notifiable, $channels);

        // Dispatch sending event
        if ($this->eventsEnabled) {
            event(new NotificationSending($notifiable, $type, $payload, $targetChannels));
        }

        $results = [];

        foreach ($targetChannels as $channelId) {
            $channel = $this->getChannel($channelId);

            if (!$channel) {
                $results[$channelId] = NotificationResult::failure(
                    channel: $channelId,
                    error: "Channel not registered: {$channelId}"
                );
                continue;
            }

            // Check if channel is available
            if (!$channel->isAvailable()) {
                $results[$channelId] = NotificationResult::skipped(
                    channel: $channelId,
                    reason: 'Channel not configured'
                );
                continue;
            }

            // Check user preference for this channel
            if (!$this->canSendToChannel($notifiable, $channelId)) {
                $results[$channelId] = NotificationResult::skipped(
                    channel: $channelId,
                    reason: 'User disabled this channel'
                );
                continue;
            }

            // Check if channel can send to this notifiable
            if (!$channel->canSendTo($notifiable)) {
                $results[$channelId] = NotificationResult::skipped(
                    channel: $channelId,
                    reason: 'Notifiable cannot receive on this channel'
                );
                continue;
            }

            // Send notification
            $result = $channel->send($notifiable, $payload, $this->getChannelConfig($channelId));
            $results[$channelId] = $result;

            // Log and dispatch events
            $this->handleResult($notifiable, $type, $payload, $result);
        }

        // Reset fluent state
        $this->resetState();

        return $results;
    }

    /**
     * Send notification to multiple notifiables.
     *
     * @param iterable $notifiables
     * @param string $type
     * @param array $payload
     * @param array|string|null $channels
     * @return array<int|string, array<string, NotificationResult>>
     */
    public function sendBatch(
        iterable $notifiables,
        string $type,
        array $payload = [],
        array|string|null $channels = null
    ): array {
        $results = [];

        foreach ($notifiables as $key => $notifiable) {
            $results[$key] = $this->send($notifiable, $type, $payload, $channels);
        }

        return $results;
    }

    /**
     * Send notification using a specific channel only.
     */
    public function sendVia(
        string $channelId,
        Model $notifiable,
        string $type,
        array $payload = []
    ): NotificationResult {
        $results = $this->send($notifiable, $type, $payload, [$channelId]);
        return $results[$channelId] ?? NotificationResult::failure($channelId, 'Unknown error');
    }

    /**
     * Quick methods for specific channels.
     */
    public function push(Model $notifiable, string $title, string $body, array $data = []): NotificationResult
    {
        return $this->sendVia('push', $notifiable, 'push', [
            'title' => $title,
            'body' => $body,
            'data' => $data,
        ]);
    }

    public function email(Model $notifiable, string $subject, string $message, ?string $template = null): NotificationResult
    {
        return $this->sendVia('email', $notifiable, 'email', [
            'subject' => $subject,
            'body' => $message,
            'template' => $template,
        ]);
    }

    public function sms(Model $notifiable, string $message): NotificationResult
    {
        return $this->sendVia('sms', $notifiable, 'sms', [
            'body' => $message,
        ]);
    }

    public function telegram(Model $notifiable, string $title, string $body, ?string $actionUrl = null): NotificationResult
    {
        return $this->sendVia('telegram', $notifiable, 'telegram', [
            'title' => $title,
            'body' => $body,
            'action_url' => $actionUrl,
        ]);
    }

    public function whatsapp(Model $notifiable, string $message): NotificationResult
    {
        return $this->sendVia('whatsapp', $notifiable, 'whatsapp', [
            'body' => $message,
        ]);
    }

    public function database(Model $notifiable, string $title, string $body, array $data = []): NotificationResult
    {
        return $this->sendVia('database', $notifiable, 'database', [
            'title' => $title,
            'body' => $body,
            'data' => $data,
        ]);
    }

    /**
     * Resolve template and merge with payload.
     */
    protected function resolveTemplate(string $type, array $payload): array
    {
        // Try to find template by type and tenant
        $template = NotificationTemplate::query()
            ->where('key', $type)
            ->where(function ($query) {
                $query->whereNull('tenant_type')
                    ->orWhere(function ($q) {
                        $q->where('tenant_type', $this->tenantType)
                            ->where('tenant_id', $this->tenantId);
                    });
            })
            ->orderByRaw('tenant_id IS NULL') // Prefer tenant-specific
            ->first();

        if (!$template) {
            return $payload;
        }

        // Merge template with payload (payload takes precedence)
        return array_merge([
            'title' => $this->interpolate($template->title, $payload['data'] ?? []),
            'body' => $this->interpolate($template->body, $payload['data'] ?? []),
            'template' => $template->email_template,
            'channels' => $template->channels,
        ], $payload);
    }

    /**
     * Interpolate variables in string.
     */
    protected function interpolate(string $text, array $data): string
    {
        foreach ($data as $key => $value) {
            if (is_scalar($value)) {
                $text = str_replace("{{$key}}", (string) $value, $text);
                $text = str_replace("{{ $key }}", (string) $value, $text);
            }
        }

        return $text;
    }

    /**
     * Resolve which channels to use.
     */
    protected function resolveChannels(Model $notifiable, array|string|null $channels): array
    {
        if ($channels !== null) {
            return is_array($channels) ? $channels : [$channels];
        }

        // Get enabled channels for this notifiable
        return $this->getEnabledChannelsForNotifiable($notifiable);
    }

    /**
     * Get enabled channels for a notifiable based on preferences.
     */
    protected function getEnabledChannelsForNotifiable(Model $notifiable): array
    {
        // Get user preference
        $preference = NotificationPreference::query()
            ->where('notifiable_type', get_class($notifiable))
            ->where('notifiable_id', $notifiable->getKey())
            ->first();

        if ($preference) {
            return $preference->getEnabledChannels();
        }

        // Default channels
        return config('notifications.default_channels', ['push', 'email', 'database']);
    }

    /**
     * Check if we can send to a specific channel for this notifiable.
     */
    protected function canSendToChannel(Model $notifiable, string $channelId): bool
    {
        $preference = NotificationPreference::query()
            ->where('notifiable_type', get_class($notifiable))
            ->where('notifiable_id', $notifiable->getKey())
            ->first();

        if (!$preference) {
            return true; // Default: allow all
        }

        return $preference->isChannelEnabled($channelId);
    }

    /**
     * Get channel-specific configuration.
     */
    protected function getChannelConfig(string $channelId): array
    {
        $config = config("notifications.channels.{$channelId}", []);

        // Add tenant-specific config if available
        if ($this->tenantType && $this->tenantId) {
            $tenantConfig = config(
                "notifications.tenants.{$this->tenantType}.{$this->tenantId}.{$channelId}",
                []
            );
            $config = array_merge($config, $tenantConfig);
        }

        return $config;
    }

    /**
     * Handle notification result (logging and events).
     */
    protected function handleResult(
        Model $notifiable,
        string $type,
        array $payload,
        NotificationResult $result
    ): void {
        // Log to database
        if ($this->loggingEnabled && config('notifications.log_to_database', true)) {
            try {
                NotificationLog::create([
                    'notifiable_type' => get_class($notifiable),
                    'notifiable_id' => $notifiable->getKey(),
                    'channel' => $result->channel,
                    'type' => $type,
                    'payload' => $payload,
                    'recipient_id' => $result->recipientId,
                    'message_id' => $result->messageId,
                    'success' => $result->success,
                    'error' => $result->error,
                    'metadata' => $result->metadata,
                    'tenant_type' => $this->tenantType,
                    'tenant_id' => $this->tenantId,
                ]);
            } catch (\Exception $e) {
                Log::warning('Failed to log notification', ['error' => $e->getMessage()]);
            }
        }

        // Dispatch events
        if ($this->eventsEnabled) {
            if ($result->success && !$result->wasSkipped()) {
                event(new NotificationSent($notifiable, $type, $result));
            } elseif (!$result->success) {
                event(new NotificationFailed($notifiable, $type, $result));
            }
        }
    }

    /**
     * Reset fluent state.
     */
    protected function resetState(): void
    {
        $this->loggingEnabled = true;
        $this->eventsEnabled = true;
        // Don't reset tenant - it persists until explicitly changed
    }
}
