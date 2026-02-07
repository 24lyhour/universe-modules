<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class MediaService
{
    /**
     * Upload a file to a model.
     */
    public function upload(
        Model $model,
        UploadedFile $file,
        string $collection = 'default',
        ?string $disk = null,
        array $customProperties = []
    ): Media {
        $mediaAdder = $model->addMedia($file)
            ->withCustomProperties($customProperties)
            ->toMediaCollection($collection, $disk);

        return $mediaAdder;
    }

    /**
     * Upload multiple files to a model.
     *
     * @param  array<UploadedFile>  $files
     * @return Collection<Media>
     */
    public function uploadMultiple(
        Model $model,
        array $files,
        string $collection = 'default',
        ?string $disk = null,
        array $customProperties = []
    ): Collection {
        $media = collect();

        foreach ($files as $file) {
            $media->push($this->upload($model, $file, $collection, $disk, $customProperties));
        }

        return $media;
    }

    /**
     * Upload from URL.
     */
    public function uploadFromUrl(
        Model $model,
        string $url,
        string $collection = 'default',
        ?string $disk = null,
        array $customProperties = []
    ): Media {
        return $model->addMediaFromUrl($url)
            ->withCustomProperties($customProperties)
            ->toMediaCollection($collection, $disk);
    }

    /**
     * Upload from base64 string.
     */
    public function uploadFromBase64(
        Model $model,
        string $base64,
        string $filename,
        string $collection = 'default',
        ?string $disk = null,
        array $customProperties = []
    ): Media {
        return $model->addMediaFromBase64($base64)
            ->usingFileName($filename)
            ->withCustomProperties($customProperties)
            ->toMediaCollection($collection, $disk);
    }

    /**
     * Get all media for a model.
     *
     * @return Collection<Media>
     */
    public function getMedia(Model $model, string $collection = 'default'): Collection
    {
        return $model->getMedia($collection);
    }

    /**
     * Get first media for a model.
     */
    public function getFirstMedia(Model $model, string $collection = 'default'): ?Media
    {
        return $model->getFirstMedia($collection);
    }

    /**
     * Get media URL.
     */
    public function getUrl(Model $model, string $collection = 'default', string $conversion = ''): string
    {
        if ($conversion) {
            return $model->getFirstMediaUrl($collection, $conversion);
        }

        return $model->getFirstMediaUrl($collection);
    }

    /**
     * Delete media by ID.
     */
    public function delete(int $mediaId): bool
    {
        $media = Media::find($mediaId);

        if ($media) {
            $media->delete();

            return true;
        }

        return false;
    }

    /**
     * Delete all media from a collection.
     */
    public function clearCollection(Model $model, string $collection = 'default'): void
    {
        $model->clearMediaCollection($collection);
    }

    /**
     * Update media custom properties.
     */
    public function updateProperties(int $mediaId, array $properties): ?Media
    {
        $media = Media::find($mediaId);

        if ($media) {
            $media->custom_properties = array_merge($media->custom_properties, $properties);
            $media->save();

            return $media;
        }

        return null;
    }

    /**
     * Get media by ID.
     */
    public function find(int $mediaId): ?Media
    {
        return Media::find($mediaId);
    }

    /**
     * Get all media with filters.
     *
     * @return Collection<Media>
     */
    public function all(array $filters = []): Collection
    {
        $query = Media::query();

        if (isset($filters['collection_name'])) {
            $query->where('collection_name', $filters['collection_name']);
        }

        if (isset($filters['model_type'])) {
            $query->where('model_type', $filters['model_type']);
        }

        if (isset($filters['model_id'])) {
            $query->where('model_id', $filters['model_id']);
        }

        if (isset($filters['disk'])) {
            $query->where('disk', $filters['disk']);
        }

        if (isset($filters['mime_type'])) {
            $query->where('mime_type', 'like', $filters['mime_type'].'%');
        }

        return $query->orderBy('created_at', 'desc')->get();
    }

    /**
     * Get total size of all media.
     */
    public function getTotalSize(): int
    {
        return Media::sum('size');
    }

    /**
     * Get total count of all media.
     */
    public function getTotalCount(): int
    {
        return Media::count();
    }

    /**
     * Get media statistics.
     */
    public function getStats(): array
    {
        return [
            'total_count' => $this->getTotalCount(),
            'total_size' => $this->getTotalSize(),
            'total_size_formatted' => $this->formatBytes($this->getTotalSize()),
            'by_collection' => Media::selectRaw('collection_name, COUNT(*) as count, SUM(size) as total_size')
                ->groupBy('collection_name')
                ->get()
                ->toArray(),
            'by_mime_type' => Media::selectRaw('mime_type, COUNT(*) as count')
                ->groupBy('mime_type')
                ->get()
                ->toArray(),
        ];
    }

    /**
     * Format bytes to human readable format.
     */
    public function formatBytes(int $bytes, int $precision = 2): string
    {
        $units = ['B', 'KB', 'MB', 'GB', 'TB'];

        $bytes = max($bytes, 0);
        $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
        $pow = min($pow, count($units) - 1);

        $bytes /= pow(1024, $pow);

        return round($bytes, $precision).' '.$units[$pow];
    }
}
