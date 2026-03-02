<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class AiService
{
    protected string $provider;
    protected string $model;
    protected string $apiKey;
    protected string $baseUrl;

    public function __construct()
    {
        $this->provider = config('services.ai.provider', 'openai');
        $this->model = config('services.ai.model', 'gpt-4o-mini');
        $this->apiKey = config('services.ai.api_key', '');
        $this->baseUrl = config('services.ai.base_url', 'https://api.openai.com/v1');
    }

    /**
     * Process an editor AI action
     */
    public function processEditorAction(string $action, string $text, string $prompt, string $context = ''): array
    {
        if (empty($this->apiKey)) {
            return [
                'success' => false,
                'error' => 'AI service is not configured. Please add your API key in the environment settings.',
            ];
        }

        $systemPrompt = $this->getSystemPrompt($action);
        $userPrompt = $this->buildUserPrompt($action, $text, $prompt, $context);

        try {
            $response = $this->callAi($systemPrompt, $userPrompt);

            return [
                'success' => true,
                'content' => $response,
            ];
        } catch (\Exception $e) {
            Log::error('AI Service Error: ' . $e->getMessage());

            return [
                'success' => false,
                'error' => 'Failed to generate content. Please try again.',
            ];
        }
    }

    /**
     * Get the system prompt based on action
     */
    protected function getSystemPrompt(string $action): string
    {
        $prompts = [
            'generate' => 'You are a helpful writing assistant. Generate clear, well-structured content based on the user\'s request. Format the output using HTML tags for rich text (use <p>, <strong>, <em>, <ul>, <li>, <h2>, <h3> as appropriate). Keep the content professional and engaging.',

            'improve' => 'You are an expert editor. Improve the given text by enhancing clarity, flow, and style while preserving the original meaning. Use HTML formatting for the output. Make the text more engaging and professional.',

            'expand' => 'You are a content expander. Take the given text and expand it with more details, examples, and depth while maintaining the same tone and style. Use HTML formatting for the output.',

            'summarize' => 'You are a summarization expert. Create a concise summary of the given text, capturing the key points. Use HTML formatting with bullet points if appropriate.',

            'fix_grammar' => 'You are a grammar and spelling expert. Fix all grammar, spelling, and punctuation errors in the text. Preserve the original meaning and tone. Use HTML formatting for the output.',

            'translate' => 'You are a professional translator. Translate the given text accurately while preserving the meaning, tone, and formatting. Use HTML formatting for the output.',

            'custom' => 'You are a helpful AI assistant. Follow the user\'s instructions to modify or create content. Use HTML formatting for the output (use <p>, <strong>, <em>, <ul>, <li>, <h2>, <h3> as appropriate).',
        ];

        return $prompts[$action] ?? $prompts['custom'];
    }

    /**
     * Build the user prompt based on action
     */
    protected function buildUserPrompt(string $action, string $text, string $prompt, string $context): string
    {
        $parts = [];

        if ($context && $action !== 'generate') {
            $parts[] = "Document context (for reference):\n{$context}\n";
        }

        switch ($action) {
            case 'generate':
                $parts[] = "Generate content about: {$prompt}";
                break;

            case 'improve':
                $parts[] = "Text to improve:\n{$text}";
                if ($prompt) {
                    $parts[] = "\nAdditional instructions: {$prompt}";
                }
                break;

            case 'expand':
                $parts[] = "Text to expand:\n{$text}";
                if ($prompt) {
                    $parts[] = "\nFocus on: {$prompt}";
                }
                break;

            case 'summarize':
                $parts[] = "Text to summarize:\n{$text}";
                if ($prompt) {
                    $parts[] = "\nFocus on: {$prompt}";
                }
                break;

            case 'fix_grammar':
                $parts[] = "Text to fix:\n{$text}";
                if ($prompt) {
                    $parts[] = "\nStyle preferences: {$prompt}";
                }
                break;

            case 'translate':
                $parts[] = "Translate the following text to {$prompt}:\n{$text}";
                break;

            case 'custom':
                $parts[] = "Instructions: {$prompt}";
                if ($text) {
                    $parts[] = "\nText to work with:\n{$text}";
                }
                break;
        }

        return implode("\n", $parts);
    }

    /**
     * Call the AI API
     */
    protected function callAi(string $systemPrompt, string $userPrompt): string
    {
        if ($this->provider === 'anthropic') {
            return $this->callAnthropic($systemPrompt, $userPrompt);
        }

        // Check if using Gemini (model starts with 'gemini')
        if (str_starts_with($this->model, 'gemini')) {
            return $this->callGemini($systemPrompt, $userPrompt);
        }

        return $this->callOpenAi($systemPrompt, $userPrompt);
    }

    /**
     * Call OpenAI API
     */
    protected function callOpenAi(string $systemPrompt, string $userPrompt): string
    {
        $response = Http::withHeaders([
            'Authorization' => "Bearer {$this->apiKey}",
            'Content-Type' => 'application/json',
        ])->timeout(60)->post("{$this->baseUrl}/chat/completions", [
            'model' => $this->model,
            'messages' => [
                ['role' => 'system', 'content' => $systemPrompt],
                ['role' => 'user', 'content' => $userPrompt],
            ],
            'temperature' => 0.7,
            'max_tokens' => 2000,
        ]);

        if (!$response->successful()) {
            throw new \Exception('OpenAI API error: ' . $response->body());
        }

        $data = $response->json();

        return $data['choices'][0]['message']['content'] ?? '';
    }

    /**
     * Call Anthropic API
     */
    protected function callAnthropic(string $systemPrompt, string $userPrompt): string
    {
        $response = Http::withHeaders([
            'x-api-key' => $this->apiKey,
            'Content-Type' => 'application/json',
            'anthropic-version' => '2023-06-01',
        ])->timeout(60)->post('https://api.anthropic.com/v1/messages', [
            'model' => $this->model ?: 'claude-3-haiku-20240307',
            'max_tokens' => 2000,
            'system' => $systemPrompt,
            'messages' => [
                ['role' => 'user', 'content' => $userPrompt],
            ],
        ]);

        if (!$response->successful()) {
            throw new \Exception('Anthropic API error: ' . $response->body());
        }

        $data = $response->json();

        return $data['content'][0]['text'] ?? '';
    }

    /**
     * Call Google Gemini API (native)
     */
    protected function callGemini(string $systemPrompt, string $userPrompt): string
    {
        $url = "https://generativelanguage.googleapis.com/v1beta/models/{$this->model}:generateContent?key={$this->apiKey}";

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
        ])->timeout(60)->post($url, [
            'contents' => [
                [
                    'parts' => [
                        ['text' => $systemPrompt . "\n\n" . $userPrompt],
                    ],
                ],
            ],
            'generationConfig' => [
                'temperature' => 0.7,
                'maxOutputTokens' => 2000,
            ],
        ]);

        if (!$response->successful()) {
            throw new \Exception('Gemini API error: ' . $response->body());
        }

        $data = $response->json();

        return $data['candidates'][0]['content']['parts'][0]['text'] ?? '';
    }
}
