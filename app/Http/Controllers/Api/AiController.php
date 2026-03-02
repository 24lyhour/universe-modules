<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\AiService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AiController extends Controller
{
    public function __construct(
        protected AiService $aiService
    ) {}

    /**
     * Handle editor AI requests
     */
    public function editor(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'action' => 'required|string|in:generate,improve,expand,summarize,fix_grammar,translate,custom',
            'text' => 'nullable|string|max:10000',
            'prompt' => 'nullable|string|max:1000',
            'context' => 'nullable|string|max:2000',
        ]);

        $result = $this->aiService->processEditorAction(
            action: $validated['action'],
            text: $validated['text'] ?? '',
            prompt: $validated['prompt'] ?? '',
            context: $validated['context'] ?? ''
        );

        if (!$result['success']) {
            return response()->json([
                'success' => false,
                'message' => $result['error'],
            ], 422);
        }

        return response()->json([
            'success' => true,
            'content' => $result['content'],
        ]);
    }
}
