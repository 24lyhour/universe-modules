<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class QrShareController extends Controller
{
    /**
     * Upload QR code image and return shareable URL.
     */
    public function upload(Request $request): JsonResponse
    {
        $request->validate([
            'image' => ['required', 'string'], // base64 image
        ]);

        try {
            // Decode base64 image
            $imageData = $request->input('image');

            // Remove data URL prefix if present
            if (preg_match('/^data:image\/(\w+);base64,/', $imageData, $matches)) {
                $imageData = substr($imageData, strpos($imageData, ',') + 1);
            }

            $imageData = base64_decode($imageData);

            if ($imageData === false) {
                return response()->json([
                    'success' => false,
                    'message' => 'Invalid image data',
                ], 422);
            }

            // Generate unique filename
            $filename = 'qr-codes/' . Str::uuid() . '.png';

            // Upload to R2 storage
            $uploaded = Storage::disk('r2')->put($filename, $imageData, 'public');

            if (!$uploaded) {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to upload image',
                ], 500);
            }

            // Get public URL
            $url = Storage::disk('r2')->url($filename);

            return response()->json([
                'success' => true,
                'url' => $url,
                'filename' => $filename,
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to upload: ' . $e->getMessage(),
            ], 500);
        }
    }
}
