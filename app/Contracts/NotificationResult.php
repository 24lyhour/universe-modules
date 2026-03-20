<?php

namespace App\Contracts;

/**
 * NotificationResult
 *
 * Represents the result of a notification send attempt.
 * Used by all notification channels to return consistent results.
 */
class NotificationResult
{
    public function __construct(
        public readonly bool $success,
        public readonly string $channel,
        public readonly ?string $recipientId = null,
        public readonly ?string $messageId = null,
        public readonly ?string $error = null,
        public readonly array $metadata = [],
    ) {}

    /**
     * Create a successful result.
     */
    public static function success(
        string $channel,
        ?string $recipientId = null,
        ?string $messageId = null,
        array $metadata = []
    ): self {
        return new self(
            success: true,
            channel: $channel,
            recipientId: $recipientId,
            messageId: $messageId,
            metadata: $metadata,
        );
    }

    /**
     * Create a failed result.
     */
    public static function failure(
        string $channel,
        string $error,
        ?string $recipientId = null,
        array $metadata = []
    ): self {
        return new self(
            success: false,
            channel: $channel,
            recipientId: $recipientId,
            error: $error,
            metadata: $metadata,
        );
    }

    /**
     * Create a skipped result (e.g., user disabled this channel).
     */
    public static function skipped(
        string $channel,
        string $reason,
        ?string $recipientId = null
    ): self {
        return new self(
            success: true,
            channel: $channel,
            recipientId: $recipientId,
            error: null,
            metadata: ['skipped' => true, 'reason' => $reason],
        );
    }

    /**
     * Check if this result was skipped.
     */
    public function wasSkipped(): bool
    {
        return $this->metadata['skipped'] ?? false;
    }

    /**
     * Convert to array.
     */
    public function toArray(): array
    {
        return [
            'success' => $this->success,
            'channel' => $this->channel,
            'recipient_id' => $this->recipientId,
            'message_id' => $this->messageId,
            'error' => $this->error,
            'metadata' => $this->metadata,
        ];
    }
}
