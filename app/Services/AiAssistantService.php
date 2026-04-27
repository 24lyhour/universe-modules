<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

/**
 * AiAssistantService
 *
 * Powers the floating dashboard chat widget (resources/js/components/shared/AiAssistant).
 * Distinct from AiService, which serves the TipTap editor's transform actions.
 *
 * Provider selection is driven by config/services.ai — the same env vars used by
 * AiService — so flipping one provider switches both. Supports any OpenAI-compatible
 * endpoint (OpenAI, xAI Grok, Groq, Together, …) plus native Anthropic and Gemini.
 */
class AiAssistantService
{
    protected string $provider;
    protected string $model;
    protected string $apiKey;
    protected string $baseUrl;

    /** Trimmed default — keeps replies short for a chat widget. */
    protected int $maxTokens = 800;
    protected float $temperature = 0.7;

    public function __construct()
    {
        $this->provider = config('services.ai.provider', 'openai');
        $this->model = config('services.ai.model', 'gpt-4o-mini');
        $this->apiKey = config('services.ai.api_key', '');
        $this->baseUrl = config('services.ai.base_url', 'https://api.openai.com/v1');
    }

    protected function defaultSystemPrompt(): string
    {
        return 'You are a concise, friendly assistant embedded inside the Universe POS dashboard. '
            . 'Help staff with bookings, menus, products, and other admin tasks. '
            . 'When users ask "how to" do something, give short step-by-step instructions. '
            . 'Use plain text — no markdown unless asked.';
    }

    /**
     * Conversational chat with rolling history.
     *
     * @param  string  $message  Latest user message.
     * @param  array<int, array{role:string,content:string}>  $history  Prior turns (oldest first).
     * @param  string|null  $systemPrompt  Optional override; otherwise the dashboard default is used.
     * @return array{success:bool, reply?:string, error?:string}
     */
    public function chat(string $message, array $history = [], ?string $systemPrompt = null): array
    {
        if (empty($this->apiKey)) {
            return [
                'success' => false,
                'error' => 'AI service is not configured. Please add your API key in the environment settings.',
            ];
        }

        $system = $systemPrompt ?? $this->defaultSystemPrompt();

        try {
            $reply = $this->dispatch($system, $message, $history);

            return ['success' => true, 'reply' => $reply];
        } catch (\Exception $e) {
            Log::error('AiAssistantService error: ' . $e->getMessage());
            return [
                'success' => false,
                'error' => 'Failed to reach the AI service. Please try again.',
            ];
        }
    }

    /**
     * Pick the right provider transport based on config.
     */
    protected function dispatch(string $systemPrompt, string $message, array $history): string
    {
        if ($this->provider === 'anthropic') {
            return $this->callAnthropic($systemPrompt, $message, $history);
        }

        if (str_starts_with($this->model, 'gemini')) {
            return $this->callGemini($systemPrompt, $message, $history);
        }

        // OpenAI-compatible covers: OpenAI, xAI Grok, Groq, Together, Mistral, etc.
        return $this->callOpenAiCompatible($systemPrompt, $message, $history);
    }

    // ─── Providers ──────────────────────────────────────────────────

    /**
     * OpenAI-compatible /chat/completions.
     * The same shape works for OpenAI, xAI (Grok), Groq, Together, Mistral, etc.
     */
    protected function callOpenAiCompatible(string $systemPrompt, string $message, array $history): string
    {
        $messages = [['role' => 'system', 'content' => $systemPrompt]];
        foreach ($this->normalizeHistory($history) as $turn) {
            $messages[] = $turn;
        }
        $messages[] = ['role' => 'user', 'content' => $message];

        $response = Http::withHeaders([
            'Authorization' => "Bearer {$this->apiKey}",
            'Content-Type' => 'application/json',
        ])->timeout(60)->post("{$this->baseUrl}/chat/completions", [
            'model' => $this->model,
            'messages' => $messages,
            'temperature' => $this->temperature,
            'max_tokens' => $this->maxTokens,
        ]);

        if (!$response->successful()) {
            throw new \Exception('AI provider error: ' . $response->body());
        }

        return $response->json('choices.0.message.content') ?? '';
    }

    /**
     * Anthropic Messages API.
     */
    protected function callAnthropic(string $systemPrompt, string $message, array $history): string
    {
        $messages = $this->normalizeHistory($history);
        $messages[] = ['role' => 'user', 'content' => $message];

        $response = Http::withHeaders([
            'x-api-key' => $this->apiKey,
            'Content-Type' => 'application/json',
            'anthropic-version' => '2023-06-01',
        ])->timeout(60)->post('https://api.anthropic.com/v1/messages', [
            'model' => $this->model ?: 'claude-3-haiku-20240307',
            'max_tokens' => $this->maxTokens,
            'system' => $systemPrompt,
            'messages' => $messages,
        ]);

        if (!$response->successful()) {
            throw new \Exception('Anthropic API error: ' . $response->body());
        }

        return $response->json('content.0.text') ?? '';
    }

    /**
     * Google Gemini — collapses history into a single prompt block.
     */
    protected function callGemini(string $systemPrompt, string $message, array $history): string
    {
        $url = "https://generativelanguage.googleapis.com/v1beta/models/{$this->model}:generateContent?key={$this->apiKey}";

        $collapsed = collect($this->normalizeHistory($history))
            ->map(fn ($m) => strtoupper($m['role']) . ': ' . $m['content'])
            ->implode("\n");
        $userBlock = trim($collapsed . "\n\nUSER: {$message}");

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
        ])->timeout(60)->post($url, [
            'contents' => [
                [
                    'parts' => [['text' => $systemPrompt . "\n\n" . $userBlock]],
                ],
            ],
            'generationConfig' => [
                'temperature' => $this->temperature,
                'maxOutputTokens' => $this->maxTokens,
            ],
        ]);

        if (!$response->successful()) {
            throw new \Exception('Gemini API error: ' . $response->body());
        }

        return $response->json('candidates.0.content.parts.0.text') ?? '';
    }

    /**
     * Strip out malformed turns so a single bad row doesn't break the whole call.
     *
     * @return array<int, array{role:string,content:string}>
     */
    protected function normalizeHistory(array $history): array
    {
        $out = [];
        foreach ($history as $turn) {
            if (!is_array($turn) || !isset($turn['role'], $turn['content'])) continue;
            if (!in_array($turn['role'], ['user', 'assistant'], true)) continue;
            $out[] = ['role' => $turn['role'], 'content' => (string) $turn['content']];
        }
        return $out;
    }
}
