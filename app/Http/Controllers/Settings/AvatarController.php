<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AvatarController extends Controller
{
    /**
     * Upload avatar for a user.
     * This endpoint doesn't require media permissions - just auth.
     */
    public function upload(Request $request): JsonResponse
    {
        $request->validate([
            'file' => ['required', 'image', 'max:2048'], // 2MB max
            'user_id' => ['nullable', 'exists:users,id'],
        ]);

        $file = $request->file('file');

        // Generate unique filename
        $filename = 'avatars/' . Str::uuid() . '.' . $file->getClientOriginalExtension();

        // Store in public disk
        $path = Storage::disk('public')->putFileAs('', $file, $filename);

        // Get full URL
        $url = Storage::disk('public')->url($path);

        // If user_id provided and current user can edit, update the user's avatar
        if ($request->filled('user_id')) {
            $user = User::find($request->user_id);
            if ($user) {
                // Check if current user can edit this user (super-admin or editing self)
                $currentUser = $request->user();
                if ($currentUser->hasRole('super-admin') || $currentUser->id === $user->id) {
                    $user->update(['avatar' => $url]);
                }
            }
        }

        return response()->json([
            'url' => $url,
            'message' => 'Avatar uploaded successfully',
        ]);
    }

    /**
     * Delete avatar for a user.
     */
    public function destroy(Request $request): JsonResponse
    {
        $request->validate([
            'user_id' => ['required', 'exists:users,id'],
        ]);

        $user = User::find($request->user_id);

        // Check permission
        $currentUser = $request->user();
        if (!$currentUser->hasRole('super-admin') && $currentUser->id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // Delete old avatar file if exists
        if ($user->avatar) {
            $path = str_replace(Storage::disk('public')->url(''), '', $user->avatar);
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }

        $user->update(['avatar' => null]);

        return response()->json([
            'message' => 'Avatar removed successfully',
        ]);
    }
}
