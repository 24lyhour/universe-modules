<?php

namespace App\Services\Notification\Channels;

use App\Contracts\NotificationResult;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;

/**
 * TelegramChannel
 *
 * Telegram Bot notification channel.
 *
 * Configuration:
 * - bot_token: Telegram Bot API token (from @BotFather)
 * - chat_id: Default chat ID (optional, can be per-user)
 *
 * Setup:
 * 1. Create a bot with @BotFather
 * 2. Get the bot token
 * 3. Add to config/services.php:
 *    'telegram' => [
 *        'bot_token' => env('TELEGRAM_BOT_TOKEN'),
 *        'chat_id' => env('TELEGRAM_CHAT_ID'),
 *    ]
 */
class TelegramChannel extends AbstractChannel
{
    protected string $baseUrl = 'https://api.telegram.org/bot';

    public function getChannelId(): string
    {
        return 'telegram';
    }

    public function getDisplayName(): string
    {
        return 'Telegram';
    }

    public function isAvailable(array $config = []): bool
    {
        return !empty(config('services.telegram.bot_token'));
    }

    public function canSendTo(Model $notifiable): bool
    {
        return !empty($this->getRecipientId($notifiable));
    }

    public function getRecipientId(Model $notifiable): ?string
    {
        // Try multiple common attribute names for Telegram chat ID
        return $notifiable->telegram_chat_id
            ?? $notifiable->telegram_id
            ?? $notifiable->chat_id
            ?? config('services.telegram.chat_id')
            ?? null;
    }

    public function send(Model $notifiable, array $payload, array $config = []): NotificationResult
    {
        $chatId = $this->getRecipientId($notifiable);

        if (!$chatId) {
            return NotificationResult::skipped(
                channel: $this->getChannelId(),
                reason: 'No Telegram chat ID available',
                recipientId: null
            );
        }

        $extracted = $this->extractPayload($payload);
        $botToken = config('services.telegram.bot_token');

        // Format message with Markdown
        $text = $this->formatMessage($extracted);

        try {
            // Build request parameters
            $params = [
                'chat_id' => $chatId,
                'text' => $text,
                'parse_mode' => $config['parse_mode'] ?? 'HTML',
                'disable_web_page_preview' => $config['disable_preview'] ?? false,
            ];

            // Add inline keyboard buttons if provided
            if (!empty($extracted['buttons'])) {
                $params['reply_markup'] = json_encode([
                    'inline_keyboard' => $this->formatButtons($extracted['buttons']),
                ]);
            } elseif (!empty($extracted['action_url'])) {
                $params['reply_markup'] = json_encode([
                    'inline_keyboard' => [[
                        ['text' => $config['button_text'] ?? 'View Details', 'url' => $extracted['action_url']],
                    ]],
                ]);
            }

            $response = Http::post("{$this->baseUrl}{$botToken}/sendMessage", $params);

            if ($response->successful() && $response->json('ok')) {
                return NotificationResult::success(
                    channel: $this->getChannelId(),
                    recipientId: (string) $chatId,
                    messageId: (string) $response->json('result.message_id'),
                    metadata: ['chat_id' => $chatId]
                );
            }

            return NotificationResult::failure(
                channel: $this->getChannelId(),
                error: $response->json('description') ?? 'Telegram API error',
                recipientId: (string) $chatId
            );
        } catch (\Exception $e) {
            $this->log('error', 'Telegram notification failed', [
                'error' => $e->getMessage(),
                'chat_id' => $chatId,
            ]);

            return NotificationResult::failure(
                channel: $this->getChannelId(),
                error: $e->getMessage(),
                recipientId: (string) $chatId
            );
        }
    }

    /**
     * Send a photo with caption.
     */
    public function sendPhoto(Model $notifiable, string $photoUrl, array $payload, array $config = []): NotificationResult
    {
        $chatId = $this->getRecipientId($notifiable);

        if (!$chatId) {
            return NotificationResult::skipped(
                channel: $this->getChannelId(),
                reason: 'No Telegram chat ID available',
                recipientId: null
            );
        }

        $extracted = $this->extractPayload($payload);
        $botToken = config('services.telegram.bot_token');

        try {
            $response = Http::post("{$this->baseUrl}{$botToken}/sendPhoto", [
                'chat_id' => $chatId,
                'photo' => $photoUrl,
                'caption' => $this->formatMessage($extracted),
                'parse_mode' => 'HTML',
            ]);

            if ($response->successful() && $response->json('ok')) {
                return NotificationResult::success(
                    channel: $this->getChannelId(),
                    recipientId: (string) $chatId,
                    messageId: (string) $response->json('result.message_id')
                );
            }

            return NotificationResult::failure(
                channel: $this->getChannelId(),
                error: $response->json('description') ?? 'Telegram API error',
                recipientId: (string) $chatId
            );
        } catch (\Exception $e) {
            return NotificationResult::failure(
                channel: $this->getChannelId(),
                error: $e->getMessage(),
                recipientId: (string) $chatId
            );
        }
    }

    /**
     * Send to a Telegram channel or group.
     */
    public function sendToChannel(string $channelUsername, array $payload, array $config = []): NotificationResult
    {
        $extracted = $this->extractPayload($payload);
        $botToken = config('services.telegram.bot_token');
        $text = $this->formatMessage($extracted);

        try {
            $response = Http::post("{$this->baseUrl}{$botToken}/sendMessage", [
                'chat_id' => $channelUsername, // Can be @channelname or numeric ID
                'text' => $text,
                'parse_mode' => 'HTML',
            ]);

            if ($response->successful() && $response->json('ok')) {
                return NotificationResult::success(
                    channel: $this->getChannelId(),
                    recipientId: $channelUsername,
                    messageId: (string) $response->json('result.message_id')
                );
            }

            return NotificationResult::failure(
                channel: $this->getChannelId(),
                error: $response->json('description') ?? 'Telegram API error',
                recipientId: $channelUsername
            );
        } catch (\Exception $e) {
            return NotificationResult::failure(
                channel: $this->getChannelId(),
                error: $e->getMessage(),
                recipientId: $channelUsername
            );
        }
    }

    /**
     * Format message with HTML.
     */
    protected function formatMessage(array $payload): string
    {
        $parts = [];

        if (!empty($payload['title'])) {
            $parts[] = "<b>{$payload['title']}</b>";
        }

        if (!empty($payload['body'])) {
            $parts[] = $payload['body'];
        }

        // Add data as list if present
        if (!empty($payload['data']) && is_array($payload['data'])) {
            $dataLines = [];
            foreach ($payload['data'] as $key => $value) {
                if (is_scalar($value)) {
                    $dataLines[] = "• <i>{$key}:</i> {$value}";
                }
            }
            if (!empty($dataLines)) {
                $parts[] = "\n" . implode("\n", $dataLines);
            }
        }

        return implode("\n\n", $parts);
    }

    /**
     * Format buttons for inline keyboard.
     */
    protected function formatButtons(array $buttons): array
    {
        $keyboard = [];
        $row = [];

        foreach ($buttons as $button) {
            $row[] = [
                'text' => $button['text'] ?? $button['label'] ?? 'Button',
                'url' => $button['url'] ?? '#',
            ];

            // Start new row every 2 buttons
            if (count($row) >= 2) {
                $keyboard[] = $row;
                $row = [];
            }
        }

        if (!empty($row)) {
            $keyboard[] = $row;
        }

        return $keyboard;
    }

    public function getRequiredConfig(): array
    {
        return []; // Uses services.telegram config
    }
}
