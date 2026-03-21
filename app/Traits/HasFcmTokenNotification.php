<?php

namespace App\Traits;

use App\Models\Device;
use App\Notifications\PushNotification;
use App\Services\FirebaseService;
use Illuminate\Support\Facades\App;

/**
 * HasFcmTokenNotification Trait
 *
 * A lightweight trait for FCM token management and push notifications.
 * Use this when you only need push notification capabilities without
 * the full device management features of HasDevices.
 *
 * For full device management (login tracking, multiple devices, etc.),
 * use the HasDevices trait instead.
 *
 * @example Basic Usage:
 * ```php
 * class Customer extends Model {
 *     use HasFcmTokenNotification;
 * }
 *
 * // Store FCM token
 * $customer->storeFcmToken('fcm-token-from-mobile-app');
 *
 * // Send push notification
 * $customer->sendPush('Order Update', 'Your order has shipped!', [
 *     'order_id' => 123,
 *     'action' => 'view_order',
 * ]);
 *
 * // Send to all devices
 * $customer->sendPushToAllDevices('Alert', 'Security notification');
 * ```
 *
 * @property string|null $fcm_token Direct FCM token on model (optional)
 */
trait HasFcmTokenNotification
{
    // =========================================================================
    // FCM TOKEN STORAGE
    // =========================================================================

    /**
     * Store FCM token directly on the model.
     * For simple single-device use case.
     */
    public function storeFcmToken(string $token): self
    {
        $this->update(['fcm_token' => $token]);
        return $this;
    }

    /**
     * Remove FCM token from the model.
     */
    public function removeFcmToken(): self
    {
        $this->update(['fcm_token' => null]);
        return $this;
    }

    /**
     * Get the FCM token.
     * Checks multiple common attribute names.
     */
    public function getFcmToken(): ?string
    {
        // Check direct attributes
        $token = $this->fcm_token
            ?? $this->device_token
            ?? $this->push_token
            ?? null;

        if ($token) {
            return $token;
        }

        // Check devices table if HasDevices trait is used
        if ($this->usesDevicesTrait()) {
            return $this->pushDevices()->value('fcm_token');
        }

        return null;
    }

    /**
     * Get all FCM tokens (for multi-device support).
     */
    public function getAllFcmTokens(): array
    {
        $tokens = [];

        // Check devices table first
        if ($this->usesDevicesTrait()) {
            $tokens = $this->pushDevices()->pluck('fcm_token')->filter()->toArray();
        }

        // Add direct token if exists and not already in list
        $directToken = $this->fcm_token ?? $this->device_token ?? $this->push_token ?? null;
        if ($directToken && !in_array($directToken, $tokens)) {
            $tokens[] = $directToken;
        }

        return array_values(array_unique(array_filter($tokens)));
    }

    /**
     * Check if model has any FCM token.
     */
    public function hasFcmToken(): bool
    {
        return !empty($this->getFcmToken());
    }

    /**
     * Check if model has multiple devices with FCM tokens.
     */
    public function hasMultipleFcmTokens(): bool
    {
        return count($this->getAllFcmTokens()) > 1;
    }

    /**
     * Check if model uses HasDevices trait.
     */
    protected function usesDevicesTrait(): bool
    {
        return in_array(HasDevices::class, class_uses_recursive($this));
    }

    // =========================================================================
    // SEND PUSH NOTIFICATIONS
    // =========================================================================

    /**
     * Send push notification to primary device.
     *
     * @param string $title Notification title
     * @param string $body Notification body
     * @param array $data Additional data payload
     * @return bool Success status
     */
    public function sendPush(string $title, string $body, array $data = []): bool
    {
        $token = $this->getFcmToken();

        if (!$token) {
            return false;
        }

        return $this->getFirebaseService()->sendToDevice($token, $title, $body, $data);
    }

    /**
     * Send push notification to all devices.
     *
     * @param string $title Notification title
     * @param string $body Notification body
     * @param array $data Additional data payload
     * @return bool Success status (true if at least one succeeded)
     */
    public function sendPushToAllDevices(string $title, string $body, array $data = []): bool
    {
        $tokens = $this->getAllFcmTokens();

        if (empty($tokens)) {
            return false;
        }

        return $this->getFirebaseService()->sendToDevices($tokens, $title, $body, $data);
    }

    /**
     * Send push notification using Laravel's notification system.
     *
     * @param string $title Notification title
     * @param string $body Notification body
     * @param array $data Additional data payload
     * @return bool Success status
     */
    public function sendPushNotification(string $title, string $body, array $data = []): bool
    {
        if (!$this->hasFcmToken()) {
            return false;
        }

        try {
            $this->notify(new PushNotification($title, $body, $data));
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    /**
     * Send silent/data-only push notification.
     *
     * @param array $data Data payload
     * @return bool Success status
     */
    public function sendSilentPush(array $data): bool
    {
        $token = $this->getFcmToken();

        if (!$token) {
            return false;
        }

        return $this->getFirebaseService()->sendToDevice($token, '', '', $data);
    }

    // =========================================================================
    // PUSH NOTIFICATION HELPERS
    // =========================================================================

    /**
     * Send order update notification.
     */
    public function notifyOrderUpdate(int $orderId, string $status, ?string $message = null): bool
    {
        $statusMessages = [
            'pending' => 'Your order is being processed',
            'confirmed' => 'Your order has been confirmed',
            'preparing' => 'Your order is being prepared',
            'shipped' => 'Your order has been shipped',
            'delivered' => 'Your order has been delivered',
            'cancelled' => 'Your order has been cancelled',
        ];

        $body = $message ?? $statusMessages[$status] ?? "Order status: {$status}";

        return $this->sendPush('Order Update', $body, [
            'type' => 'order_update',
            'order_id' => (string) $orderId,
            'status' => $status,
            'action' => 'view_order',
        ]);
    }

    /**
     * Send payment notification.
     */
    public function notifyPayment(string $type, float $amount, ?string $currency = 'USD'): bool
    {
        $titles = [
            'received' => 'Payment Received',
            'sent' => 'Payment Sent',
            'failed' => 'Payment Failed',
            'refunded' => 'Refund Processed',
        ];

        $title = $titles[$type] ?? 'Payment Update';
        $formattedAmount = number_format($amount, 2) . ' ' . $currency;

        return $this->sendPush($title, "Amount: {$formattedAmount}", [
            'type' => 'payment',
            'payment_type' => $type,
            'amount' => (string) $amount,
            'currency' => $currency,
        ]);
    }

    /**
     * Send promotion/marketing notification.
     */
    public function notifyPromotion(string $title, string $body, ?string $promoCode = null, ?string $deepLink = null): bool
    {
        $data = [
            'type' => 'promotion',
            'action' => 'view_promotion',
        ];

        if ($promoCode) {
            $data['promo_code'] = $promoCode;
        }

        if ($deepLink) {
            $data['deep_link'] = $deepLink;
        }

        return $this->sendPush($title, $body, $data);
    }

    /**
     * Send reminder notification.
     */
    public function notifyReminder(string $title, string $body, ?string $actionType = null): bool
    {
        return $this->sendPush($title, $body, [
            'type' => 'reminder',
            'action' => $actionType ?? 'open_app',
        ]);
    }

    /**
     * Send chat/message notification.
     */
    public function notifyMessage(string $senderName, string $preview, int $conversationId): bool
    {
        return $this->sendPush("Message from {$senderName}", $preview, [
            'type' => 'message',
            'conversation_id' => (string) $conversationId,
            'sender' => $senderName,
            'action' => 'open_chat',
        ]);
    }

    /**
     * Send security alert notification.
     */
    public function notifySecurityAlert(string $alertType, string $message, array $details = []): bool
    {
        return $this->sendPushToAllDevices("⚠️ Security Alert", $message, array_merge([
            'type' => 'security_alert',
            'alert_type' => $alertType,
            'action' => 'view_security',
            'priority' => 'high',
        ], $details));
    }

    // =========================================================================
    // BATCH OPERATIONS
    // =========================================================================

    /**
     * Send push to multiple users.
     *
     * @param iterable $users Collection of users with FCM tokens
     * @param string $title Notification title
     * @param string $body Notification body
     * @param array $data Additional data
     * @return array Results ['success' => int, 'failed' => int]
     */
    public static function sendPushToMany(iterable $users, string $title, string $body, array $data = []): array
    {
        $tokens = [];

        foreach ($users as $user) {
            if (method_exists($user, 'getAllFcmTokens')) {
                $tokens = array_merge($tokens, $user->getAllFcmTokens());
            } elseif (!empty($user->fcm_token)) {
                $tokens[] = $user->fcm_token;
            }
        }

        $tokens = array_values(array_unique(array_filter($tokens)));

        if (empty($tokens)) {
            return ['success' => 0, 'failed' => 0, 'skipped' => count($users)];
        }

        $firebase = App::make(FirebaseService::class);
        $success = $firebase->sendToDevices($tokens, $title, $body, $data);

        return [
            'success' => $success ? count($tokens) : 0,
            'failed' => $success ? 0 : count($tokens),
            'tokens' => count($tokens),
        ];
    }

    /**
     * Send push to a topic.
     *
     * @param string $topic Topic name
     * @param string $title Notification title
     * @param string $body Notification body
     * @param array $data Additional data
     * @return bool Success status
     */
    public static function sendPushToTopic(string $topic, string $title, string $body, array $data = []): bool
    {
        return App::make(FirebaseService::class)->sendToTopic($topic, $title, $body, $data);
    }

    // =========================================================================
    // TOPIC SUBSCRIPTION (requires client-side implementation)
    // =========================================================================

    /**
     * Get topics this user should be subscribed to.
     * Override this method in your model to customize topics.
     *
     * @return array List of topic names
     */
    public function getPushTopics(): array
    {
        $topics = ['all_users'];

        // Add role-based topics if model has roles
        if (method_exists($this, 'getRoleNames')) {
            foreach ($this->getRoleNames() as $role) {
                $topics[] = 'role_' . str_replace(' ', '_', strtolower($role));
            }
        }

        // Add tenant topic if model has tenant
        if (method_exists($this, 'hasTenant') && $this->hasTenant()) {
            $topics[] = 'tenant_' . $this->tenant_id;
        }

        return $topics;
    }

    // =========================================================================
    // INTERNAL
    // =========================================================================

    /**
     * Get Firebase service instance.
     */
    protected function getFirebaseService(): FirebaseService
    {
        return App::make(FirebaseService::class);
    }
}
