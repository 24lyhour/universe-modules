<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cache;

class FirebaseService
{
    protected ?string $credentialsPath;
    protected ?string $projectId;

    public function __construct()
    {
        $this->credentialsPath = config('services.firebase.credentials');
        $this->projectId = config('services.firebase.project_id');
    }

    /**
     * Send push notification to a single device.
     */
    public function sendToDevice(string $token, string $title, string $body, array $data = []): bool
    {
        $message = [
            'message' => [
                'token' => $token,
                'notification' => [
                    'title' => $title,
                    'body' => $body,
                ],
                'data' => array_map('strval', $data),
                'android' => [
                    'priority' => 'high',
                    'notification' => [
                        'sound' => 'default',
                        'channel_id' => 'high_importance_channel',
                    ],
                ],
                'apns' => [
                    'payload' => [
                        'aps' => [
                            'sound' => 'default',
                            'badge' => 1,
                        ],
                    ],
                ],
            ],
        ];

        return $this->send($message);
    }

    /**
     * Send push notification to multiple devices.
     */
    public function sendToDevices(array $tokens, string $title, string $body, array $data = []): bool
    {
        $success = true;
        foreach ($tokens as $token) {
            if (!$this->sendToDevice($token, $title, $body, $data)) {
                $success = false;
            }
        }
        return $success;
    }

    /**
     * Send push notification to a topic.
     */
    public function sendToTopic(string $topic, string $title, string $body, array $data = []): bool
    {
        $message = [
            'message' => [
                'topic' => $topic,
                'notification' => [
                    'title' => $title,
                    'body' => $body,
                ],
                'data' => array_map('strval', $data),
            ],
        ];

        return $this->send($message);
    }

    /**
     * Send the FCM V1 API request.
     */
    protected function send(array $payload): bool
    {
        $accessToken = $this->getAccessToken();

        if (!$accessToken) {
            Log::warning('Firebase: Could not get access token.');
            return false;
        }

        if (!$this->projectId) {
            Log::warning('Firebase: Project ID is not configured.');
            return false;
        }

        $url = "https://fcm.googleapis.com/v1/projects/{$this->projectId}/messages:send";

        try {
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $accessToken,
                'Content-Type' => 'application/json',
            ])->post($url, $payload);

            if ($response->successful()) {
                Log::info('FCM notification sent successfully', [
                    'response' => $response->json(),
                ]);
                return true;
            }

            Log::error('FCM notification failed', [
                'status' => $response->status(),
                'response' => $response->json(),
            ]);
            return false;

        } catch (\Exception $e) {
            Log::error('FCM notification exception', [
                'message' => $e->getMessage(),
            ]);
            return false;
        }
    }

    /**
     * Get OAuth 2.0 access token for FCM V1 API.
     */
    protected function getAccessToken(): ?string
    {
        return Cache::remember('firebase_access_token', 3500, function () {
            if (!$this->credentialsPath || !file_exists($this->credentialsPath)) {
                Log::warning('Firebase credentials file not found: ' . $this->credentialsPath);
                return null;
            }

            $credentials = json_decode(file_get_contents($this->credentialsPath), true);

            if (!$credentials) {
                Log::warning('Firebase: Invalid credentials file.');
                return null;
            }

            // Create JWT
            $now = time();
            $header = base64_encode(json_encode(['alg' => 'RS256', 'typ' => 'JWT']));
            $payload = base64_encode(json_encode([
                'iss' => $credentials['client_email'],
                'scope' => 'https://www.googleapis.com/auth/firebase.messaging',
                'aud' => 'https://oauth2.googleapis.com/token',
                'iat' => $now,
                'exp' => $now + 3600,
            ]));

            $signatureInput = $header . '.' . $payload;
            openssl_sign($signatureInput, $signature, $credentials['private_key'], 'SHA256');
            $jwt = $signatureInput . '.' . base64_encode($signature);

            // Exchange JWT for access token
            $response = Http::asForm()->post('https://oauth2.googleapis.com/token', [
                'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                'assertion' => $jwt,
            ]);

            if ($response->successful()) {
                return $response->json()['access_token'] ?? null;
            }

            Log::error('Firebase: Failed to get access token', [
                'response' => $response->json(),
            ]);

            return null;
        });
    }
}
