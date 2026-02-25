<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class AvatarController extends Controller
{
    /**
     * List all media available for avatar selection.
     * This endpoint doesn't require media.view_any permission - just auth.
     * Avatars/profile images should be accessible to all authenticated users.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Media::query()
            ->where('mime_type', 'like', 'image/%')
            ->orderBy('created_at', 'desc');

        // Optional: filter by collection
        if ($collection = $request->query('collection')) {
            $query->where('collection_name', $collection);
        }

        $media = $query->get();

        $data = $media->map(function (Media $item) {
            return [
                'id' => $item->id,
                'uuid' => $item->uuid,
                'name' => $item->name,
                'file_name' => $item->file_name,
                'url' => $item->getUrl(),
                'thumb_url' => $item->hasGeneratedConversion('thumb')
                    ? $item->getUrl('thumb')
                    : $item->getUrl(),
                'mime_type' => $item->mime_type,
                'size' => $item->size,
                'size_formatted' => $this->formatBytes($item->size),
                'collection_name' => $item->collection_name,
                'created_at' => $item->created_at->toIso8601String(),
            ];
        });

        return response()->json([
            'data' => $data,
            'meta' => [
                'total' => $data->count(),
            ],
        ]);
    }

    /**
     * Upload avatar for a user.
     * This endpoint doesn't require media permissions - just auth.
     * Uses Spatie MediaLibrary so avatars are stored in the media library
     * and can be browsed/selected by all users.
     */
    public function upload(Request $request): JsonResponse
    {
        $request->validate([
            'file' => ['required', 'image', 'max:5120'], // 5MB max to match MediaLibraryModal
            'user_id' => ['nullable', 'exists:users,id'],
        ]);

        $file = $request->file('file');
        $currentUser = $request->user();

        // Determine which user to attach media to
        // If super-admin is uploading for another user, attach to that user
        $targetUser = $currentUser;
        $currentUserId = (int) $currentUser->id;

        if ($request->filled('user_id')) {
            $requestedUserId = (int) $request->user_id;

            // If uploading for a different user, check permissions
            if ($requestedUserId !== $currentUserId) {
                // Only super-admin can upload avatars for other users
                if (!$currentUser->hasRole('super-admin')) {
                    return response()->json([
                        'message' => 'You do not have permission to upload avatar for this user.',
                    ], 403);
                }

                // Load the target user fresh from database
                $targetUser = User::find($requestedUserId);
                if (!$targetUser) {
                    return response()->json([
                        'message' => 'User not found.',
                    ], 404);
                }
            }
        }

        try {
            // Log for debugging
            \Log::info('Avatar upload', [
                'current_user_id' => $currentUserId,
                'target_user_id' => $targetUser->id,
                'target_user_email' => $targetUser->email,
                'requested_user_id' => $request->user_id ?? 'not provided',
            ]);

            // Add media to TARGET user's collection (not current user)
            // This ensures the media is associated with the correct user
            $media = $targetUser->addMedia($file)
                ->toMediaCollection('avatars');

            $url = $media->getUrl();

            // Update the target user's avatar field
            $targetUser->update(['avatar' => $url]);
            \Log::info('Avatar updated for user', ['user_id' => $targetUser->id, 'avatar' => $url]);

            // Return in same format as MediaDashboardController for compatibility
            return response()->json([
                'data' => [
                    'id' => $media->id,
                    'uuid' => $media->uuid,
                    'name' => $media->name,
                    'file_name' => $media->file_name,
                    'url' => $url,
                    'thumb_url' => $media->hasGeneratedConversion('thumb')
                        ? $media->getUrl('thumb')
                        : $url,
                    'mime_type' => $media->mime_type,
                    'size' => $media->size,
                    'size_formatted' => $this->formatBytes($media->size),
                    'collection_name' => $media->collection_name,
                    'created_at' => $media->created_at->toIso8601String(),
                ],
                'url' => $url, // Also include at root for backwards compatibility
                'message' => 'Avatar uploaded successfully',
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to upload avatar: ' . $e->getMessage(),
            ], 500);
        }
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

    /**
     * Format bytes to human readable format.
     */
    private function formatBytes(int $bytes, int $precision = 2): string
    {
        $units = ['B', 'KB', 'MB', 'GB', 'TB'];

        $bytes = max($bytes, 0);
        $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
        $pow = min($pow, count($units) - 1);

        $bytes /= pow(1024, $pow);

        return round($bytes, $precision) . ' ' . $units[$pow];
    }
}
