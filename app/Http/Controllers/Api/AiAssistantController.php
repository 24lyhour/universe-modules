<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\AiAssistantService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Endpoints for the floating dashboard AI Assistant widget.
 * Kept separate from AiController (editor) so the two flows can evolve
 * independently — different rate limits, different prompts, etc.
 */
class AiAssistantController extends Controller
{
    public function __construct(
        protected AiAssistantService $assistant,
    ) {}

    /**
     * Conversational chat for the AiAssistant widget.
     * Receives { message, history } and returns { reply }.
     */
    public function chat(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'message' => ['required', 'string', 'max:4000'],
            'history' => ['nullable', 'array', 'max:20'],
            'history.*.role' => ['required_with:history', 'string', 'in:user,assistant'],
            'history.*.content' => ['required_with:history', 'string', 'max:8000'],
        ]);

        $result = $this->assistant->chat(
            message: $validated['message'],
            history: $validated['history'] ?? [],
        );

        if (!$result['success']) {
            return response()->json([
                'reply' => $result['error'] ?? 'AI is unavailable right now.',
            ], 422);
        }

        return response()->json([
            'reply' => $result['reply'],
        ]);
    }
}
